import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Select from 'react-select';


export default class App extends Component {
    state = {
        selection: null
    }
    render() {
        const options = this.props.allArticles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} isMulti />
                <ArticleList allArticles={this.props.allArticles} />
            </div>
        )
    }
    changeSelection = selection => this.setState({ selection })
}