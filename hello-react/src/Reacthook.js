import React, {useState, useEffect} from 'react'

// state 以及 生命周期的等价hooks
function Example() {
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banaba')
  const [todos, setTodos] = useState([{text: 'learn hookd'}])
  

  // 副作用使用，不用使用生命周期函数
  useEffect( () => {
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      {/* <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
      <p>you clicked {fruit} times</p>
      <button onClick={() => setFruit('apple')}> Click me fruit</button> */}
      {/* <p>you clicked {todos} times</p>
      <button onClick={() => setTodos([{test: 'test_mod'}])}> Click me todos</button> */}
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  )
}


// 解除副作用 : 给useEffect 的副作用函数返回一个新的函数即可
// function Example(props) {
//   const [isOnline, setIsOnline] = useState(null)
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline)
//   }

//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//     // 注意下顺序： 告诉react 在下次重新渲染组件之后，同时是下次调用ChatAPI.subscribeToFriendStatus
//     // 之前执行cleanup
//     return function cleanup() {
//       ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
//     }
//   })
//   if (isOnline === null) {
//     return 'Loading'
//   }
//   return isOnline ? 'Online' : 'Offline'
//   // 解绑模式与componentWillUnmount解绑模式不同，componentWillUnmount只会执行一次，
//   // 而useEffect里面的函数，每次组件渲染都会执行一遍，包括副作用函数返回的清理函数也会重新执行一遍
// }

export default Example;

// useState, 返回当前的state值，以及更新值的方法， 类似this.setState 但是这个没有合并新旧state
// Effect Hook