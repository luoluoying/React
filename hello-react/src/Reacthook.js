import React, {useState} from 'react'


function Example() {
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banaba')
  const [todos, setTodos] = useState([{text: 'learn hookd'}])

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
      <p>you clicked {fruit} times</p>
      <button onClick={() => setFruit('apple')}> Click me</button>
      {/* <p>you clicked {todos} times</p>
      <button onClick={() => setTodos([{test: 'test_mod'}])}> Click me</button> */}
    </div>
  )
}

export default Example;

// useState, 返回当前的state值，以及更新值的方法， 类似this.setState 但是这个没有合并新旧state
// Effect Hook