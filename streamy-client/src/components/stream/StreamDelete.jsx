import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onDismiss = () => {
    history.push('/');
  };

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <div
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </div>
        <Link to="/" className="ui button cancel">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    if (!this.props.stream) return null;

    return (
      <Modal
        title={`Delete ${this.props.stream.title} ?`}
        content={this.props.stream.description}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { getStream, deleteStream }
)(StreamDelete);
