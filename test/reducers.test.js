import reducer from '../src/reducers';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({ todos: [] });
  });
  it('should handle ADD', () => {
    const text = 'hoge';
    expect(
      reducer(undefined, {
        type: 'ADD',
        text,
      }),
    ).toEqual({ todos: [
      {
        text: 'hoge',
      },
    ] });
  });
});
