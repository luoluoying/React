import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitInfo(value) {
        if (!value) return
        if (!value.username) return alert('请输入用户名')
        if (!value.content) return alert('请输入评论内容')
        this.state.comments.push(value)
        this.setState({
            comments: this.state.comments
        })
        console.log(value)
    }
    render () {
        return (
            <div className="wrapper">
                <CommentInput submitInfo={this.handleSubmitInfo.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}


export default CommentApp