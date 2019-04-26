import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './Reacthook';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


class Header extends Component {
    render(h) {
        return (
            <div>
                <Title />
                {/* <h1>kiml { ()=>{console.log(2)}}</h1> */}
                {/* <h1>kiml </h1> */}
                {/* <h1>ff { function(){console.log(333)} ()}</h1> */}
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <h1>main content</h1>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <h1>footer info</h1>
            </div>
        )
    }
}

class Title extends Component {
    handleClickOnTitle (word, e) {
        console.log(this, word)
        console.log(e.target.innerHTML)
    }
    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>Title</h1>
        )
    }
}

class LikeButton extends Component {
    constructor () {
        super()
        this.state = {
            isLiked: false,
            count: 0
        }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
        // 接收函数参数，避免setState方法异步执行导致结果异常
        // this.setState(
        //     (preState) => {
        //         return {count: preState + 1}
        //     }
        // )
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

class LikeButtonProps extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }
    constructor () {
        super()
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        const likedText = this.props.likedText
        const unlikedText = this.props.unlikedText
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText}
            </button>
        )
    }
}
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
    render () {
        const { user } = this.props
        return (
            <div>
                <div >姓名: { user.username}</div>
                <div >年龄: { user.age}</div>
                <div >性别: { user.gender}</div>
                <br/>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        const usersElements  = []
        // for (let user of users) {
        //     usersElements.push(
        //         <div>
        //             <div>姓名: { user.username}</div>
        //             <div>年龄: { user.age}</div>
        //             <div>性别: { user.gender}</div>
        //             <br/>
        //         </div>
        //     )
        // }
        return (
            <div>
                { users.map((user, index) => <User user={user} key={index}/>)}
                {/* {users.map( (user) => {
                    return (
                        <div key={user.username}>
                            <div >姓名: { user.username}</div>
                            <div >年龄: { user.age}</div>
                            <div >性别: { user.gender}</div>
                            <br/>
                        </div>
                    )
                })} */}
                {/* {usersElements} */}
                {/* <Header />
                <Main />
                <Footer /> */}
                {/* <LikeButton/>
                 */}
                {/* <LikeButtonProps likedText='已赞' unlikedText='点赞'/> */}
            </div>
        )
    }
}

ReactDOM.render(
    // <Index />,
    <Example/>,
    document.getElementById('root')
)