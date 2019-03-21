import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    render () {
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ]
        return (
            <div>
                {this.props.comments.map((comment, index) => <Comment comment={comment} key={index}/>)}
                {/* {comments.map((comment, index) => {
                    return (
                        <div key={index}> {comment.username}: {comment.content}</div>
                    )
                })} */}
            </div>
        )
    }
}

export default CommentList