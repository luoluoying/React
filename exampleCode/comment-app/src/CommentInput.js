import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.textarea.focus()
    }
    componentWillMount() {
        this._loadUsername()
    }
    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmitContent () {
        if (this.props.onSubmit) {
            // const { username, content } = this.state
            // this.props.onSubmit({username, content})
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({
            content: ''
        })
    }
    hanldUsernameBlur (event) {
        console.log(event.target.value);
        this._saveUsername(event.target.value)

    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }
    _loadUsername () {
        let userName = localStorage.getItem('username')
        this.setState({username: userName})
    }
    
    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                        onBlur={this.hanldUsernameBlur.bind(this)}
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        ref={(textarea => {this.textarea = textarea})}
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmitContent.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput