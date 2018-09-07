import React, { Component } from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

 class Article extends Component {
    static propTypes = {
        allArticles: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }
    
    render() {
        const { allArticles, isOpen, toggleButton } = this.props;
        return (
            <div>
                <h1>{allArticles.title}</h1>
                <button onClick={toggleButton}>{(isOpen) ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </div>
        )
    };
   
    getBody = () => {
        const { allArticles, isOpen } = this.props;
        if (!isOpen) return null
        return (
            <section>
                <div>{allArticles.text}</div>
                <CommentList comments={allArticles.comments} />
            </section>
        )
    }
}
export default toggleOpen(Article)