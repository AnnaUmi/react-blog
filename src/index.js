import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleList from './components/ArticleList';
import registerServiceWorker from './registerServiceWorker';
import {articles} from './articles'

ReactDOM.render(<ArticleList allArticles={articles}/>, document.getElementById('root'));
registerServiceWorker();
