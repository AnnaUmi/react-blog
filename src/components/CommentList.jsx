import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const { toggleButton } = this.props
        return (
            <section>
                <button onClick={toggleButton}>Show</button>
                {this.showBody()}
            </section>
        )
    };

    showBody = () => {
        const { comments, isOpen } = this.props;
        if (!comments.length) return "no comments yet"
        if (!isOpen) return null
        const commentListElement = comments.map(comment => <li key={comment.id}><Comment comments={comment} /></li>)
        return <ul>{commentListElement}</ul>
    }
}
export default toggleOpen(CommentList)