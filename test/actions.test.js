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
  it('should create an action to remove a todo', () => {
    const text = 'Remove this';
    const index = '0';
    actions.add(text);
    const expectedAction = {
      type: 'REMOVE',
      index
    };
    expect(actions.remove(index)).toEqual(expectedAction);
  });
});
