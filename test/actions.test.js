import * as actions from '../src/actions.js';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: 'ADD',
      text
    };
    expect(actions.add(text)).toEqual(expectedAction);
  });
});
