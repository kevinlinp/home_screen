import React from 'react'

// https://reactjs.org/docs/forms
// https://reactjs.org/docs/lifting-state-up.html
export default class LinksForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  handleChange(event) {
    this.props.onChange(event.target.name, event.target.value);
  }

  // TODO: code up an image picker ... maybe
  render() {
    let heading, submitButtonLabel;

    if (this.props.id) {
      heading = 'edit';
      submitButtonLabel = (<i className="fa fa-floppy-o" aria-hidden="true"></i>);
    } else {
      heading = 'new';
      submitButtonLabel = (<i className="fa fa-plus" aria-hidden="true"></i>);
    }

    return (
      <div className="links-form">
        <div className="links-form-heading">{heading}</div>
        <form className="links-form-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" value={this.props.name} onChange={this.handleChange} />
          <input type="text" placeholder="url" name="url" value={this.props.url} onChange={this.handleChange} />
          <input type="text" placeholder="icon url" name="image" value={this.props.image} onChange={this.handleChange} />
          <button type="submit">{submitButtonLabel}</button>
        </form>
      </div>
    );
  }
}
