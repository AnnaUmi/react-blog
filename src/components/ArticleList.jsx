import React, { Component } from 'react';
import Article from './Article';
import accardion from '../decorators/accardion';

class ArticleList extends Component {

    render() {
        const { allArticles, openArticleId, toggleOpen } = this.props;
        const articleListElement = allArticles.map(article => {
            return <li key={article.id}><Article
                allArticles={article}
                isOpen={article.id === openArticleId}
                toggleOpen={toggleOpen(article.id)}
            /></li>
        })
        return (
            <ul>
                {articleListElement}
            </ul>
        )
    };


}
export default accardion(ArticleList)
