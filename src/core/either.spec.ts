import { Either, right, left } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const successResult = doSomething(true)
  expect(successResult.isLeft()).toBe(false)
  expect(successResult.isRight()).toBe(true)
})

test('error result', () => {
  const errorResult = doSomething(false)
  expect(errorResult.isLeft()).toBe(true)
  expect(errorResult.isRight()).toBe(false)
})
