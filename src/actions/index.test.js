import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    // .toEqaul for mutable objects as it allows to check the contence
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});