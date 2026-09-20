import { useState } from 'react';
import { SUBJECTS, TOTAL_QUESTIONS } from '../data';
import { diagnosticQuestionCount, getMemoryStats, getOfficialCount } from '../data/sampler.js';

const PRESETS = [10, 15, 20, 25, 30];

export default function StartScreen({ onStart, onClearStats }) {
  const [mode, setMode] = useState('subject');
  const [subjectKey, setSubjectKey] = useState('matematicas');
  const [countOption, setCountOption] = useState(getOfficialCount('matematicas'));
  const [activeRecall, setActiveRecall] = useState(true);

  const stats = getMemoryStats();
  const official = getOfficialCount(subjectKey);
  const bank = SUBJECTS.find((s) => s.key === subjectKey).questions.length;
  const diagCount = diagnosticQuestionCount();

  const selectSubject = (key) => {
    setSubjectKey(key);
    setCountOption(getOfficialCount(key));
  };

  const countOptions = [
    { value: official, label: `Oficial (${official})` },
    ...PRESETS.filter((p) => p !== official).map((p) => ({ value: p, label: `${p} reactivos` })),
    { value: 'all', label: `Todas las del banco (${bank})` },
  ].sort((a, b) => {
    if (a.value === 'all') return 1;
    if (b.value === 'all') return -1;
    return a.value - b.value;
  });

  const start = () => onStart(mode, subjectKey, countOption, activeRecall);

  return (
    <div className="start">
      <header className="brand">
        <div className="brand-logo">IPN</div>
        <p className="brand-sub">Simulador de admisión · Nivel Superior</p>
      </header>

      <div className="hero-card start-hero">
        <h1>Practica para el examen de Ingeniería</h1>
        <p className="hero-text">
          Banco de <strong>{TOTAL_QUESTIONS} reactivos</strong> creados con el temario oficial del
          área <strong>Ingeniería y Ciencias Físico-Matemáticas</strong>. Cada tanda elige preguntas
          distintas y, con <strong>active recall</strong>, las que fallaste o hace tiempo no ves
          regresan antes.
        </p>

        <div className="memory-box">
          <div className="memory-row">
            <span>Progreso de memoria</span>
            <span className="memory-frac">{stats.totalSeen} / {stats.bankTotal} preguntas vistas</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill memory-fill"
              style={{ width: `${Math.round((stats.totalSeen / stats.bankTotal) * 100)}%` }}
            />
          </div>
          <div className="memory-detail">
            <span>✓ {stats.totalCorrect} correctas</span>
            <span>✗ {stats.totalMisses} falladas</span>
          </div>
        </div>

        <div className="structure">
          <span className="structure-title">Estructura oficial del examen (140 reactivos)</span>
          <div className="structure-grid">
            {SUBJECTS.map((s) => (
              <div className="structure-item" key={s.key}>
                <span>{s.icon}</span>
                <span className="structure-name">{s.name}</span>
                <span className="structure-count">{getOfficialCount(s.key)}</span>
              </div>
            ))}
            <div className="structure-item structure-total">
              <span>🎯</span>
              <span className="structure-name">Total</span>
              <span className="structure-count">140</span>
            </div>
          </div>
        </div>
      </div>

      <div className="setup-card">
        <h2>Configura tu práctica</h2>

        <div className="field">
          <label>Modalidad</label>
          <div className="segmented">
            <button
              type="button"
              className={mode === 'full' ? 'active' : ''}
              onClick={() => setMode('full')}
            >
              Examen completo (140)
            </button>
            <button
              type="button"
              className={mode === 'subject' ? 'active' : ''}
              onClick={() => setMode('subject')}
            >
              Por materia (tandas)
            </button>
            <button
              type="button"
              className={mode === 'diagnostic' ? 'active' : ''}
              onClick={() => setMode('diagnostic')}
            >
              Diagnóstico inicial
            </button>
          </div>
        </div>

        {mode === 'diagnostic' ? (
          <div className="field diagnostic-info">
            <p>
              <strong>¿Qué es?</strong> Una prueba de {diagCount} preguntas representativas de todo
              el temario, a escala de la estructura oficial. <strong>No verás si aciertas o fallas
              hasta el final</strong>, así medimos tu nivel real de arranque.
            </p>
            <p>
              Al terminar obtendrás tu puntaje base, tu ritmo por pregunta (el examen real pide ~77
              segundos por reactivo) y un <strong>plan de estudio</strong> que indica qué materias
              reforzar primero en tus 5 días.
            </p>
          </div>
        ) : mode === 'subject' ? (
          <>
            <div className="field">
              <label>Materia</label>
              <div className="subject-grid">
                {SUBJECTS.map((s) => (
                  <button
                    type="button"
                    key={s.key}
                    className={subjectKey === s.key ? 'subject-pill active' : 'subject-pill'}
                    onClick={() => selectSubject(s.key)}
                  >
                    {s.icon} {s.name} <span className="pill-count">({s.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="two-cols">
              <div className="field">
                <label>Preguntas por tanda</label>
                <select
                  value={countOption}
                  onChange={(e) => setCountOption(e.target.value)}
                  className="select"
                >
                  {countOptions.map((opt) => (
                    <option key={opt.label} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label className="check">
                  <input
                    type="checkbox"
                    checked={activeRecall}
                    onChange={(e) => setActiveRecall(e.target.checked)}
                  />
                  <span>Active recall (regresan las que fallaste)</span>
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="field">
            <label className="check">
              <input
                type="checkbox"
                checked={activeRecall}
                onChange={(e) => setActiveRecall(e.target.checked)}
              />
              <span>Active recall (cada examen prioriza las preguntas que más necesitas repasar)</span>
            </label>
          </div>
        )}

        <button type="button" className="btn-primary big" onClick={start}>
          {mode === 'diagnostic' ? 'Iniciar diagnóstico →' : 'Comenzar práctica →'}
        </button>
      </div>

      <div className="start-footer">
        <p className="start-note">
          Al responder verás al instante si es correcta, la explicación resumida y, si fallas, por
          qué tu opción no era la correcta. Tus aciertos y fallos se guardan en este navegador para
          programar los repasos.
        </p>
        <button type="button" className="link-btn" onClick={onClearStats}>
          Borrar historial de memoria
        </button>
      </div>
    </div>
  );
}