export default function todoApp(state = { todos: [] }, action) {
  switch(action.type) {
    case 'ADD':
      return { todos: [
        ...state.todos,
        {
          text: action.text,
        },
      ] };
    case 'REMOVE':
      var todos = state.todos;
      todos = [
        ...todos.slice(0, action.index),
        ...todos.slice(action.index + 1),
      ];
      return { todos: todos };
    default:
      return state;
  }
}
