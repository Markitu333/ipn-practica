import { useState } from 'react';
import { SUBJECTS } from '../data';

const LETTERS = ['A', 'B', 'C', 'D'];

function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function ResultsScreen({ config, results, onRetry, onHome }) {
  const { log, elapsed, total } = results;
  const correctCount = log.filter((entry) => entry.correct).length;
  const percent = total ? Math.round((correctCount / total) * 100) : 0;
  const wrong = log.filter((entry) => !entry.correct);
  const [showWrong, setShowWrong] = useState(false);

  const perSubject = SUBJECTS.map((s) => {
    const entries = log.filter((e) => e.question.subjectKey === s.key);
    const done = entries.length;
    const correct = entries.filter((e) => e.correct).length;
    return { ...s, done, correct, wrong: done - correct };
  }).filter((s) => s.done > 0);

  const verdict = (p) => {
    if (p >= 80) return { title: '¡Excelente arranque!', msg: 'Dominas el temario. En tus 5 días refina velocidad y detalles con tandas diarias.' };
    if (p >= 60) return { title: 'Buen punto de partida', msg: 'Vas bien encaminado. Refuerza las materias con menor acierto y gana ritmo.' };
    if (p >= 40) return { title: 'Base media', msg: 'Hay temas por dominar, pero con 5 días de estudio dirigido puedes subir bien tu puntaje.' };
    return { title: 'Base baja: hay trabajo por hacer', msg: 'No es el fin del mundo: revisa cada explicación y ataca primero las materias débiles.' };
  };

  const v = verdict(percent);

  const isDiagnostic = config.mode === 'diagnostic';

  const pacePerQuestion = total ? Math.round(elapsed / total) : 0;
  const TARGET_PACE = 77;
  const paceStatus =
    pacePerQuestion <= TARGET_PACE
      ? 'dentro del ritmo del examen real'
      : `${Math.round((pacePerQuestion / TARGET_PACE) * 100)}% del tiempo del examen real`;

  const weakSubjects = perSubject
    .filter((s) => s.done > 0 && s.correct / s.done < 0.6)
    .sort((a, b) => a.correct / a.done - b.correct / b.done);

  return (
    <div className="results">
      <header className="results-head">
        <h1>{isDiagnostic ? 'Resultado del diagnóstico' : 'Resultados'}</h1>
        <p>
          {config.mode === 'full'
            ? 'Examen completo'
            : config.mode === 'subject'
              ? 'Práctica por materia'
              : 'Diagnóstico inicial'}{' '}
          · {config.mode === 'full' ? '140 reactivos' : `${total} reactivos`}
        </p>
      </header>

      <div className="score-card">
        <div
          className="score-ring"
          style={{ '--p': `${percent * 3.6}deg` }}
        >
          <div className="score-inner">
            <span className="score-value">{percent}%</span>
            <span className="score-sub">{correctCount} / {total} aciertos</span>
          </div>
        </div>
        <div className="score-info">
          <h2>{v.title}</h2>
          <p>{v.msg}</p>
          <div className="score-stats">
            <div className="stat">
              <span className="stat-value">{correctCount}</span>
              <span className="stat-label">Correctas</span>
            </div>
            <div className="stat">
              <span className="stat-value fail">{total - correctCount}</span>
              <span className="stat-label">Incorrectas</span>
            </div>
            <div className="stat">
              <span className="stat-value">⏱ {formatTime(elapsed)}</span>
              <span className="stat-label">Tiempo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="breakdown-card">
        <h3>{isDiagnostic ? 'Diagnóstico por materia' : 'Desempeño por materia'}</h3>
        {perSubject.map((s) => (
          <div className="break-row" key={s.key}>
            <span className="break-name">{s.icon} {s.name}</span>
            <div className="break-track">
              <div
                className="break-fill"
                style={{ width: `${s.done ? (s.correct / s.done) * 100 : 0}%` }}
              />
            </div>
            <span className="break-nums">{s.correct}/{s.done}</span>
          </div>
        ))}
      </div>

      {isDiagnostic && (
        <div className="plan-card">
          <h3>Plan para tus 5 días</h3>

          <div className="plan-pace">
            <span className="plan-icon">⏱</span>
            <div>
              <strong>Ritmo: {pacePerQuestion}s por pregunta</strong>
              <p>
                Vas {paceStatus}. El examen real pide {TARGET_PACE} s/reactivo en 3 horas para las
                140 preguntas.
              </p>
            </div>
          </div>

          {weakSubjects.length > 0 && (
            <div className="plan-weak">
              <strong>Refuerza primero estas materias:</strong>
              <ol>
                {weakSubjects.map((s) => (
                  <li key={s.key}>
                    {s.icon} {s.name} ({s.correct}/{s.done} aciertos)
                  </li>
                ))}
              </ol>
              <p>
                Practica tandas de esas materias con la explicación activada y deja que el active
                recall te regrese sus preguntas falladas.
              </p>
            </div>
          )}

          {weakSubjects.length === 0 && (
            <p className="plan-clean">
              Tu base está equilibrada en todas las materias. Usa los 5 días para subir velocidad con
              exámenes completos y tandas aleatorias.
            </p>
          )}

          <p className="plan-note">
            Vuelve a hacer este diagnóstico el día 5 para comparar tu puntaje base y medir tu avance.
          </p>
        </div>
      )}

      <div className="actions">
        {isDiagnostic ? (
          <>
            <button type="button" className="btn-primary" onClick={onHome}>Ir a practicar →</button>
            <button type="button" className="btn-secondary" onClick={onRetry}>Reintentar diagnóstico</button>
          </>
        ) : (
          <>
            <button type="button" className="btn-primary" onClick={onRetry}>Repetir práctica</button>
            <button type="button" className="btn-secondary" onClick={onHome}>Elegir otra configuración</button>
          </>
        )}
      </div>

      {wrong.length > 0 && (
        <div className="review-card">
          <button
            type="button"
            className="review-toggle"
            onClick={() => setShowWrong((v) => !v)}
          >
            Revisar {wrong.length} reactivo(s) fallado(s) {showWrong ? '▲' : '▼'}
          </button>
          {showWrong && (
            <div className="review-list">
              {wrong.map((entry, i) => (
                <div className="review-item" key={i}>
                  <div className="review-q">
                    <span className="topic-chip">{entry.question.topic}</span>
                    <span className="subject-chip">{entry.question.subject}</span>
                  </div>
                  {entry.question.passage && (
                    <blockquote className="passage review-passage">
                      <p>{entry.question.passage}</p>
                    </blockquote>
                  )}
                  <p className="review-question">{entry.question.question}</p>
                  <p className="review-wrong-line">
                    ✗ Tu respuesta: {LETTERS[entry.selected]}) {entry.question.options[entry.selected]}
                  </p>
                  <p className="review-right-line">
                    ✓ Correcta: {LETTERS[entry.question.answer]}) {entry.question.options[entry.question.answer]}
                  </p>
                  <p className="review-expl">{entry.question.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}