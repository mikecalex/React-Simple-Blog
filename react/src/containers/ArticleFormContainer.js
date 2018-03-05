import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name

    this.setState({[name]: value})
  }

  handleClearForm(event) {
    this.setState({
      articleTitle: '',
      articleBody: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      id: this.state.articleTitle,
      title: this.state.articleTitle,
      body: this.state.articleBody
    }

    if (this.state.articleTitle != "" && this.state.articleBody != "" && this.state.articleTitle != null && this.state.articleBody != null) {
      this.props.addNewArticle(formPayload)
      this.handleClearForm(event)
    } else {
      alert("All Fields Must Be Filled Out")
    }
  }

  render() {
    return(
      <form className="new-article-form callout" >
        <TitleField
          value={this.state.articleTitle}
          label="Article Title"
          name="articleTitle"
          handleChange={this.handleChange}
        />
        <BodyField
          value={this.state.articleBody}
          label="Article Body"
          name="articleBody"
          handleChange={this.handleChange}
        />

        <div className="button-group" onClick={this.handleSubmit} onSubmit={this.handleClearForm} >
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit" onSubmit={this.handleClearForm} />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
