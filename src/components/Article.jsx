import React, { Component } from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Article extends Component {
    static propTypes = {
        allArticles: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
    render() {
        const { allArticles, isOpen, toggleOpen } = this.props;
        console.log('update article')
        return (
            <div>
                <h1>{allArticles.title}</h1>
                <button onClick={toggleOpen}>{(isOpen) ? 'Close' : 'Open'}</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300} >
                    {this.getBody()}
                </CSSTransitionGroup>

            </div>
        )
    };

    getBody = () => {
        const { allArticles, isOpen } = this.props;
        if (!isOpen) return null
        return (
            <section>
                <div>{allArticles.text}</div>
                <CommentList ref={this.setCommentsRef} comments={allArticles.comments} />
            </section>
        )
    }

}
