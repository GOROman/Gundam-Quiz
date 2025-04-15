export type QuizConfig = {
  title: string
  numChoices: number
  showExplanation: boolean
  description?: string
}

export const quizConfig: QuizConfig = {
  title: 'アマチュア無線４級 試験対策',
  numChoices: 4,
  showExplanation: true,
  description: '2025年度版 過去問対応'
}
