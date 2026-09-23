import { SUBJECTS } from './index.js';

const STATS_KEY = 'ipn-practica-stats';
const RECENT_KEY = 'ipn-practica-recent';

const OFFICIAL = {
  matematicas: 37,
  'matematicas-experimental': 37,
  escrita: 20,
  lectora: 20,
  ingles: 10,
  historia: 10,
  quimica: 17,
  fisica: 17,
  biologia: 9,
};

export function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage unavailable
  }
}

export function recordAnswer(qid, correct) {
  const stats = loadStats();
  const st = stats[qid] || { seen: 0, correct: 0, misses: 0, lastSeenAt: 0, lastCorrect: null };
  st.seen += 1;
  st.lastSeenAt = Date.now();
  st.lastCorrect = correct;
  if (correct) st.correct += 1;
  else st.misses += 1;
  stats[qid] = st;
  saveStats(stats);
}

export function clearStats() {
  try {
    localStorage.removeItem(STATS_KEY);
    localStorage.removeItem(RECENT_KEY);
  } catch {
    // ignore
  }
}

export function getMemoryStats() {
  const stats = loadStats();
  const keys = Object.keys(stats);
  const totalSeen = keys.length;
  const totalCorrect = keys.reduce((s, k) => s + stats[k].correct, 0);
  const totalMisses = keys.reduce((s, k) => s + stats[k].misses, 0);
  const bankTotal = SUBJECTS.reduce((s, subj) => s + subj.questions.length, 0);
  return { totalSeen, totalCorrect, totalMisses, bankTotal };
}

export function getOfficialCount(subjectKey) {
  return OFFICIAL[subjectKey] || 0;
}

const DIAGNOSTIC_TARGET = 40;
const DIAGNOSTIC_SCALE = DIAGNOSTIC_TARGET / 140;

export function diagnosticQuestionCount() {
  return SUBJECTS.reduce((sum, s) => {
    const k = Math.max(Math.round(OFFICIAL[s.key] * DIAGNOSTIC_SCALE), 2);
    return sum + k;
  }, 0);
}

function uniformSample(pool, k) {
  const arr = shuffleArray(pool);
  return arr.slice(0, k);
}

function loadRecent() {
  try {
    const v = JSON.parse(localStorage.getItem(RECENT_KEY));
    return v && typeof v === 'object' ? v : {};
  } catch {
    return {};
  }
}

function saveRecent(recent) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
  } catch {
    // storage unavailable
  }
}

function recordRecent(subjectKey, picked) {
  const recent = loadRecent();
  recent[subjectKey] = picked.map((q) => q.id);
  saveRecent(recent);
}

function avoidRecent(pool, subjectKey, needed) {
  const recent = loadRecent();
  const last = recent[subjectKey] || [];
  if (last.length === 0) return pool;
  const fresh = pool.filter((q) => !last.includes(q.id));
  return fresh.length >= needed ? fresh : pool;
}

function sampleUniformNoRepeat(pool, k, subjectKey) {
  const available = avoidRecent(pool, subjectKey, k);
  const picked = uniformSample(available, k);
  recordRecent(subjectKey, picked);
  return picked;
}

function questionWeight(q, stats, activeRecall, now) {
  const st = stats[q.id];
  if (!activeRecall) return 1;
  if (!st || st.seen === 0) return 2.0;

  const hours = (now - st.lastSeenAt) / 3600000;
  let w = 1.0;

  // historic misses push the question back up
  if (st.misses > 0) w += st.misses;

  // latest attempt governs short-term behaviour
  if (st.lastCorrect === false && hours < 24) w += 2;
  else if (st.lastCorrect === true && hours < 24) w *= 0.15;

  // overdue component: the longer without review, the higher the priority
  w += Math.min(hours / 24, 14) * 0.5;

  // mastery dampening: aced questions need less rehearsal
  w *= 1 / (1 + Math.min(st.correct, 6) * 0.2);

  return Math.max(0.001, w);
}

function weightedSample(pool, k, stats, activeRecall) {
  const now = Date.now();
  const arr = pool.map((q) => ({ q, w: questionWeight(q, stats, activeRecall, now) }));

  const chosen = [];
  while (chosen.length < k && arr.length) {
    const totalW = arr.reduce((sum, x) => sum + x.w, 0);
    let r = Math.random() * totalW;
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
      r -= arr[i].w;
      if (r <= 0) {
        idx = i;
        break;
      }
    }
    chosen.push(arr[idx].q);
    arr.splice(idx, 1);
  }
  return chosen;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildSession(mode, subjectKey, countOption, activeRecall) {
  const stats = loadStats();
  let out = [];

  if (mode === 'diagnostic') {
    for (const s of SUBJECTS) {
      const k = Math.min(
        Math.max(Math.round(OFFICIAL[s.key] * DIAGNOSTIC_SCALE), 2),
        s.questions.length,
      );
      const picked = uniformSample(s.questions, k);
      out.push(...picked.map((q) => ({ ...q, subject: s.name, subjectKey: s.key })));
    }
    return out;
  }

  if (mode === 'full') {
    for (const s of SUBJECTS) {
      const k = Math.min(OFFICIAL[s.key], s.questions.length);
      const picked = activeRecall
        ? weightedSample(s.questions, k, stats, true)
        : sampleUniformNoRepeat(s.questions, k, s.key);
      out.push(...picked.map((q) => ({ ...q, subject: s.name, subjectKey: s.key })));
    }
    return out;
  }

  // Subject mode
  const s = SUBJECTS.find((x) => x.key === subjectKey);
  const official = OFFICIAL[s.key] || s.questions.length;
  let k;
  if (countOption === 'all') {
    k = s.questions.length;
  } else {
    k = Math.min(Math.max(Number(countOption) || official, 1), s.questions.length);
  }
  const picked = activeRecall
    ? weightedSample(s.questions, k, stats, true)
    : sampleUniformNoRepeat(s.questions, k, subjectKey);
  out = picked.map((q) => ({ ...q, subject: s.name, subjectKey: s.key }));
  return shuffleArray(out);
}