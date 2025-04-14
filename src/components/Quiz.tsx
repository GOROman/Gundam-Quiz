import React, { useState, useMemo } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * クイズ進行管理コンポーネント
 * - 問題番号・選択肢・スコア管理
 * - 何問目か表示
 */
const Quiz = () => {
  // クイズ開始時に10問シャッフル抽出
  const quizQuestions = useMemo(() => shuffle(questions).slice(0, 10), []);
  const totalQuestions = quizQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleSelect = (choiceIdx: number) => {
    if (isAnswered) return;
    setSelected(choiceIdx);
    const correct = choiceIdx === currentQuestion.answerIndex;
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) setScore((prev) => prev + 1);
  };


  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelected(undefined);
    setIsAnswered(false);
    setIsCorrect(null);
    if (currentQuestionIndex + 1 >= totalQuestions) {
      setIsFinished(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelected(undefined);
    setIsAnswered(false);
    setIsCorrect(null);
    setIsFinished(false);
    setScore(0);
  };

  if (isFinished) {
    return <Result score={score} total={totalQuestions} onRetry={handleRetry} />;
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">

      <QuestionCard
        question={currentQuestion}
        onSelect={handleSelect}
        selected={selected}
        disabled={isAnswered}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
      />
      {isAnswered && (
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          onClick={handleNext}
        >
          {currentQuestionIndex + 1 >= totalQuestions ? "リザルトを見る" : "次へ"}
        </button>
      )}
    </section>
  );
};

export default Quiz;
