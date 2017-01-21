export function inc() {
  return {
    type: 'INC'
  }
}

export function addWindow() {
  return {
    type: 'ADD_WINDOW',
    windowClass: 'lexeme'
  }
}

export function destroyWindow(id) {
  return {
    type: 'DESTROY_WINDOW',
    id: id
  }
}
