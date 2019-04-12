import React from 'react';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <div className="ui button negative">Delete</div>
      <div className="ui button cancel">Cancel</div>
    </React.Fragment>
  );
  return (
    <Modal title="Stream Delete" content="Are you sure?" actions={actions} />
  );
};

export default connect(
  null,
  { getStream, deleteStream }
)(StreamDelete);
