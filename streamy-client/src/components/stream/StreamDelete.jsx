import React from 'react';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <div className="ui button negative">Delete</div>
        <div className="ui button cancel">Cancel</div>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Modal
        title="Stream Delete"
        content="Are you sure?"
        actions={this.renderActions()}
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
