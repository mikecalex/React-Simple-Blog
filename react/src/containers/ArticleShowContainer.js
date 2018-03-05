import React, { Component } from 'react';
import ArticleShow from '../components/ArticleShow';

class ArticleShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    let articleId = document.getElementById('show').getAttribute('data-id');

    fetch(`http://localhost:4567/api/v1/articles/${articleId}`)
    .then(response => { return response.json() })
    .then(data => { this.setState({ article: data }) })
  }

  render() {
    return(
      <ArticleShow
        id={this.state.article.id}
        title={this.state.article.title}
        body={this.state.article.body}
       />
    )
  }
}

export default ArticleShowContainer;
