import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-reposotiry';
interface AnswerQuestionUseCaseInterface {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository
  ) {}

  async execute({ instructorId, questionId, content}: AnswerQuestionUseCaseInterface ) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    })

    await this.answersRepository.create(answer)
    return answer
  }
}