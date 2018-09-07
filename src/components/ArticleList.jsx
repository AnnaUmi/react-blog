import React from 'react';
import Article from './Article';

const ArticleList = function({allArticles}){
    const articleListElement = allArticles.map(article => {
        return <li key={article.id}><Article allArticles={article}/></li>
    })
    return(
        <ul>
            {articleListElement}
        </ul>
    )
}
export default ArticleList;