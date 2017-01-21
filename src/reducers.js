import { combineReducers } from 'redux'

const idGenerator = 3

const initTabs = [
  {
    id: 1,
    title: '辞书',
    type: 'lexicon',
    data: {
      lexicon: ['apple', 'pear', 'orange']
    }
  },
  {
    id: 2,
    title: '辞条',
    type: 'lexeme'
  }
]

function page(state, action) {
  return 1
}

function tabs(state = initTabs, action) {
  switch (action.type) {
  case 'ADD_WINDOW':
    return [
      ...state,
      {
        id: idGenerator++,
        title: '新窗口',
        type: action.windowClass
      }
    ]

  case 'DESTROY_WINDOW':
    return state.filter(function(window) {
      return window.id != action.id
    })

  default:
    return state
  }
}

const app = combineReducers({
  page,
  tabs
})

export default app
