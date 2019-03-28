// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

// function creacteStore(state, stateChanger) {  //v1
//   let listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     console.log('dispatch')
//     state = stateChanger(state, action)
//     listeners.forEach(listener => listener()) // dispatch之后执行所有的监听方法
//   }
//   return { getState, dispatch, subscribe }
// }

function renderApp (newAppState, oldAppState={}) {
  if (newAppState === oldAppState) return
  console.log('render app...')
  renderTitle(newAppState.title)
  renderContent(newAppState.content)
}

function renderTitle (newTitle, oldTitle={}) {
  if (newTitle === oldTitle) return
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent={}) {
  if (newContent === oldContent) return
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

// renderApp(appState)
// renderApp(appState) // 首次渲染页面
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书1》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(appState) // 把新的数据渲染到页面上
// function stateChanger (state, action) {  // v1
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return {
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       return {
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state
//   }
// }

// reducer
function stateChanger (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

function creacteStore(reducer){
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( (listener) => listener())
  }
  dispatch({})
  return { getState, dispatch, subscribe }
}

// const store = creacteStore(appState, stateChanger) // v1
const store = creacteStore(stateChanger)
let oldState = store.getState()
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
}) //观察者服务
renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书3》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色