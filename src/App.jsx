import { useState } from 'react';
import { buildSession, clearStats } from './data/sampler.js';
import StartScreen from './components/StartScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import './index.css';

export default function App() {
  const [config, setConfig] = useState(null);
  const [results, setResults] = useState(null);
  const [statsVersion, setStatsVersion] = useState(0);

  const handleStart = (mode, subjectKey, countOption, activeRecall) => {
    const questions = buildSession(mode, subjectKey, countOption, activeRecall);
    setConfig({ questions, mode, subjectKey, countOption, activeRecall });
    setResults(null);
  };

  const handleRetry = () => {
    const { mode, subjectKey, countOption, activeRecall } = config;
    handleStart(mode, subjectKey, countOption, activeRecall);
  };

  const handleClearStats = () => {
    clearStats();
    setStatsVersion((v) => v + 1);
  };

  const handleHome = () => {
    setConfig(null);
    setResults(null);
  };

  if (!config) {
    return (
      <StartScreen
        key={statsVersion}
        onStart={handleStart}
        onClearStats={handleClearStats}
      />
    );
  }

  if (results) {
    return (
      <ResultsScreen config={config} results={results} onRetry={handleRetry} onHome={handleHome} />
    );
  }

  return <ExamScreen config={config} onFinish={setResults} onQuit={handleHome} />;
}