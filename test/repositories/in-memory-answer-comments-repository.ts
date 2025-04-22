import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository"
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment"

export class InMemoryAnswerCommentsRepository implements AnswerCommentsRepository {
  public items: AnswerComment[] = []
  
  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)
    if (!answer) {
      return null
    }
    return answer
  }

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
  }
  
  async delete(answerComment: AnswerComment): Promise<void> {
    const intemIndex = this.items.findIndex((item) => item.id === answerComment.id)
    this.items.splice(intemIndex, 1)
  }
}