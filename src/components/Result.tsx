import React from "react";
import { Button } from "@/components/ui/button";
import { useSE } from "@/hooks/useSE";

/**
 * クイズリザルト画面
 * - 正答数・正答率・ランク表示
 * - X（旧Twitter）ポスト機能付き
 */
/**
 * クイズリザルト画面
 * - 正答数・正答率・ランク表示
 * - X（旧Twitter）ポスト機能付き
 * @param score 正解数
 * @param total 問題数
 * @param onRetry リトライ時のコールバック
 */
type ResultProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

const getMilitaryRank = (rate: number): string => {
  if (rate === 1) return "ギレン級";
  if (rate >= 0.9) return "大将級";
  if (rate >= 0.8) return "中将級";
  if (rate >= 0.7) return "少将級";
  if (rate >= 0.6) return "大佐級";
  if (rate >= 0.5) return "中佐級";
  if (rate >= 0.4) return "少佐級";
  if (rate >= 0.3) return "大尉級";
  if (rate >= 0.2) return "中尉級";
  return "クソザコ級";
};

const getRank = (rate: number): string => {
  if (rate === 1) return "Sランク！パーフェクト！";
  if (rate >= 0.8) return "Aランク！すごい！";
  if (rate >= 0.6) return "Bランク";
  if (rate >= 0.4) return "Cランク";
  return "がんばろう！";
};

function Result({ score, total, onRetry }: ResultProps) {
  const rate = score / total;
  const percent = Math.round(rate * 100);
  const rank = getRank(rate);
  const militaryRank = getMilitaryRank(rate);
  const shareText = encodeURIComponent(
    `『ちょっとHなガンダムクイズ』\n${total}問中${score}問正解（正答率${percent}%）【${militaryRank}】 #ガンダムクイズ https://gundam-quiz.windsurf.build/`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  const playSE = useSE();
  const handleRetry = () => {
    playSE("start");
    onRetry();
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8 border-8 border-blue-600 rounded-xl shadow-lg">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-700 text-center drop-shadow">リザルト</h2>
      <div className="mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        {score} / {total} 問正解
        <div className="mt-2 text-lg text-blue-600">正答率: {percent}%</div>
        <div className="mt-2 text-lg text-green-700 font-bold">階級: 【{militaryRank}】</div>
      </div>
      <div className="mb-8 text-2xl sm:text-3xl font-bold text-blue-700 text-center">{rank}</div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          className="w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 text-center"
          onClick={handleRetry}
          aria-label="もう一度挑戦"
          variant="default"
        >
          もう一度挑戦！
        </Button>
        <Button
          asChild
          className="w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 text-center flex items-center justify-center gap-2"
          aria-label="Xでポスト"
          variant="secondary"
        >
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 122" width="32" height="32" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M93.9 2.5H114L74.8 55.2 120 119.5H83.1l-28.2-38.2-32.2 38.2H6L48.5 62.8 4 2.5h38.2l25.8 34.9zM86.7 110.2h10.6L35.1 12.1H23.8l62.9 98.1z"/>
            </svg>
            <span className="sr-only">Xでポスト！</span>
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Result;
