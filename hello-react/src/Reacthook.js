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
function _Example(props) {
  const [isOnline, setIsOnline] = useState(null)
  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    // 注意下顺序： 告诉react 在下次重新渲染组件之后，同时是下次调用ChatAPI.subscribeToFriendStatus
    // 之前执行cleanup
    return function cleanup() {
      ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
    }
  })
  if (isOnline === null) {
    return 'Loading'
  }
  return isOnline ? 'Online' : 'Offline'
  // 解绑模式与componentWillUnmount解绑模式不同，componentWillUnmount只会执行一次，
  // 而useEffect里面的函数，每次组件渲染都会执行一遍，包括副作用函数返回的清理函数也会重新执行一遍
}
// 为什么要让副作用函数每次组件更新都要执行一遍？
/**
 * 以前，生命周期didMount注册，在WillUnmount清除注册，但是由于两者生命周期内只执行一次。
 * 如果props.fired.id改变，就需要在DidUpdate在清理上一个id的注册，为下一个id重新注册，繁琐
 * 副作用函数顺序：
 * 首次渲染
 * id=1注册
 * id变为2
 * 页面重新渲染
 * 清除id=1的绑定   ---  这一步在副作用函数的返回函数中，react会在组件重新渲染之后，同时是下次调用执行之前调用cleanup函数
 * 给id=2注册
 * 
 * 不必要的副作用函数：
 * 跳过需要给useEffect函数传入第二个参数，当第二个参数值改变时，才执行副作用函数，传入空数组时，相当于首次渲染时执行，
 * 类似生命周期的componentDidMount以及componentWillUnmount
*/

export default Example;

// useState, 返回当前的state值，以及更新值的方法， 类似this.setState 但是这个没有合并新旧state
// Effect Hook