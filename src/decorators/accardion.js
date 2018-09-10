import React, { Component } from 'react';

export default (Original) => class Wrapped extends Component {
    state = {
        openArticleId: null
    }
    render() {
        return (
            <Original {...this.props}
                openArticleId={this.state.openArticleId}
                toggleOpen={this.toggleOpen}
            />
        )
    }
    toggleOpen = openArticleId => ev => {
        this.setState({
            openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
        })
    }
}