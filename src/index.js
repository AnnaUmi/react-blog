import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { articles } from './articles'

ReactDOM.render(<App allArticles={articles} />, document.getElementById('root'));
registerServiceWorker();
