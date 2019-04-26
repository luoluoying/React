import { React, Component } from 'react'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentState: 'not-panic'
        }
    }

    render() {
        //
    }
}

// 一种反模式： 从props的值来初始化state? 是真的反？
// don't do this
class BadExample extends Component {
    state = {
        data: props.data
    }

    componentDidUpdate(oldProps) {
        if(oldProps.data !== this.props.data) {
            this.setState({
                data: this.props.data
            })
        }
    }
    render() {
        return (
            <div>
                The Data: {this.state.data}
            </div>
        )
    }
}

// 上面是一个错误的模式，可以直接使用props来获取，而不要在state中对props的内容做初始化，
//props或者state改变都会触发re-render 
// 可以使用这种方式
class GoodExample extends Component {
    render() {
        return (
            <div>
                The Data: {this.props.data}
            </div>
        )
    }
}
