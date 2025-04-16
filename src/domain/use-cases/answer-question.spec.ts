import { test, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an andwer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'This is an answer'
  })
  expect(answer.content).toEqual('This is an answer')
})