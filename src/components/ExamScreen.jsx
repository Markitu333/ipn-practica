import { useEffect, useRef, useState } from 'react';
import { recordAnswer } from '../data/sampler.js';

const LETTERS = ['A', 'B', 'C', 'D'];

function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function ExamScreen({ config, onFinish, onQuit }) {
  const { questions } = config;
  const diagnostic = config.mode === 'diagnostic';
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [log, setLog] = useState([]);
  const startRef = useRef(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    startRef.current = performance.now();
    const timer = setInterval(
      () => setElapsed(Math.floor((performance.now() - startRef.current) / 1000)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  const q = questions[index];
  const total = questions.length;
  const answered = chosen !== null;
  const isCorrect = answered && chosen === q.answer;
  const correctCount = log.filter((entry) => entry.correct).length;
  const progress = ((index) / total) * 100;

  const handleSelect = (optIndex) => {
    if (answered) return;
    setChosen(optIndex);
    setLog((prev) => [...prev, { question: q, selected: optIndex, correct: optIndex === q.answer }]);
    recordAnswer(q.id, optIndex === q.answer);
  };

  const handleNext = () => {
    const finalSeconds = Math.floor((performance.now() - startRef.current) / 1000);
    if (index + 1 >= total) {
      setElapsed(finalSeconds);
      onFinish({
        log,
        elapsed: finalSeconds,
        total,
      });
      return;
    }
    setIndex((i) => i + 1);
    setChosen(null);
  };

  return (
    <div className="exam">
      <header className="exam-bar">
        <button className="quit" onClick={onQuit}>← Salir</button>
        <div className="exam-meta">
          {!diagnostic && <span className="subject-chip">{q.subject}</span>}
          {diagnostic && <span className="subject-chip diag-chip">Diagnóstico</span>}
          <span className="meta-item">Pregunta {index + 1} de {total}</span>
          {!diagnostic && <span className="meta-item">✓ {correctCount}</span>}
          <span className="meta-item timer">⏱ {formatTime(elapsed)}</span>
        </div>
      </header>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <main className="question-card">
        <div className="question-head">
          <span className="topic-chip">{q.topic}</span>
          {q.passage && <span className="passage-label">Lee con atención el siguiente texto:</span>}
        </div>

        {q.passage && (
          <blockquote className="passage">
            <p>{q.passage}</p>
          </blockquote>
        )}

        <h2 className="question-text">{q.question}</h2>

        <div className="options">
          {q.options.map((opt, i) => {
            let cls = 'option';
            if (answered) {
              if (!diagnostic) {
                if (i === q.answer) cls += ' correct';
                else if (i === chosen) cls += ' wrong';
                else cls += ' dimmed';
              } else if (i === chosen) {
                cls += ' selected';
              } else {
                cls += ' dimmed';
              }
            }
            return (
              <button
                type="button"
                key={i}
                className={cls}
                onClick={() => handleSelect(i)}
                disabled={answered}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span className="option-text">{opt}</span>
                {answered && !diagnostic && i === q.answer && <span className="option-mark">✓</span>}
                {answered && !diagnostic && i === chosen && i !== q.answer && (
                  <span className="option-mark">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {answered && !diagnostic && (
          <div className={isCorrect ? 'feedback correct' : 'feedback wrong'}>
            <div className="feedback-header">
              {isCorrect ? (
                <>
                  <span className="feedback-badge">✓</span>
                  <span className="feedback-title">¡Correcto!</span>
                </>
              ) : (
                <>
                  <span className="feedback-badge">✗</span>
                  <span className="feedback-title">Incorrecto</span>
                  <span className="feedback-right">
                    La respuesta correcta es {LETTERS[q.answer]})
                  </span>
                </>
              )}
            </div>
            {!isCorrect && (
              <p className="feedback-you-marked">
                Marcaste: {LETTERS[chosen]}) {q.options[chosen]}
              </p>
            )}
            <p className="feedback-explanation">
              <strong>{isCorrect ? 'Explicación:' : '¿Por qué?'}</strong> {q.explanation}
            </p>
          </div>
        )}

        {(answered || diagnostic) && (
          <div className="next-row">
            <button
              type="button"
              className="btn-primary"
              onClick={handleNext}
              disabled={!answered}
            >
              {index + 1 >= total ? 'Ver resultados →' : 'Siguiente pregunta →'}
            </button>
            {diagnostic && !answered && <span className="next-hint">Selecciona una respuesta para continuar</span>}
          </div>
        )}
      </main>
    </div>
  );
}