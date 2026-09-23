import { matematicas } from './matematicas.js';
import { matematicasExperimental } from './matematicasExperimental.js';
import { competenciaEscrita } from './competenciaEscrita.js';
import { competenciaLectora } from './competenciaLectora.js';
import { readingComprehension } from './readingComprehension.js';
import { historia } from './historia.js';
import { quimica } from './quimica.js';
import { fisica } from './fisica.js';
import { biologia } from './biologia.js';

export const SUBJECTS = [
  { key: 'matematicas', name: 'Matemáticas', icon: '➗', count: matematicas.length, questions: matematicas },
  {
    key: 'matematicas-experimental',
    name: 'Matemáticas experimental',
    icon: '🧮',
    count: matematicasExperimental.length,
    questions: matematicasExperimental,
  },
  { key: 'escrita', name: 'Competencia escrita', icon: '✏️', count: competenciaEscrita.length, questions: competenciaEscrita },
  { key: 'lectora', name: 'Competencia lectora', icon: '📖', count: competenciaLectora.length, questions: competenciaLectora },
  { key: 'ingles', name: 'Inglés (Reading)', icon: '🌎', count: readingComprehension.length, questions: readingComprehension },
  { key: 'historia', name: 'Historia', icon: '🏛️', count: historia.length, questions: historia },
  { key: 'quimica', name: 'Química', icon: '🧪', count: quimica.length, questions: quimica },
  { key: 'fisica', name: 'Física', icon: '⚡', count: fisica.length, questions: fisica },
  { key: 'biologia', name: 'Biología', icon: '🧬', count: biologia.length, questions: biologia },
];

export const ALL_QUESTIONS = SUBJECTS.reduce(
  (acc, subject) =>
    acc.concat(
      subject.questions.map((q) => ({ ...q, subject: subject.name, subjectKey: subject.key })),
    ),
  [],
);

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;