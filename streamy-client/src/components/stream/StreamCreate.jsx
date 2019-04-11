import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (error && touched)
      return (
        <div className="ui mini negative message">
          <div className="header">{error}</div>
        </div>
      );
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Stream Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Stream Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = "Please enter a title";
  }
  if (!formValues.description) {
    error.description = "Please enter description";
  }
  return error;
};

const formWrapper = reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapper);
