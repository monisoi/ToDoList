export function edit(text) {
  return { type: 'EDIT', text }
}

export function add(text) {
  return { type: 'ADD', text }
}

export function remove(index) {
  return { type: 'REMOVE', index }
}