import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderActionButtons({ id, userId }) {
    if (this.props.currentUser === userId)
      return (
        <div className="extra content">
          <div className="ui three buttons centered">
            <Link to={`stream/edit/${id}`} className="ui basic blue button">
              Edit
            </Link>
            <Link to={`stream/delete/${id}`} className="ui basic red button">
              Delete
            </Link>
          </div>
        </div>
      );
  }
  renderStreams() {
    return this.props.streams.map(stream => {
      return (
        <div className="column" key={stream.id}>
          <div className="ui raised fluid card">
            <div className="content">
              <div className="header">{stream.title}</div>
              <div className="description">{stream.description}</div>
            </div>
            {this.renderActionButtons(stream)}
          </div>
        </div>
      );
    });
  }

  renderCreateStreamButton = () => {
    if (this.props.isSignedIn)
      return (
        <Link to="/stream/new">
          <button className="ui button positive">Create Stream</button>
        </Link>
      );
  };
  render() {
    return (
      <div>
        <h2>Available Streams</h2>
        <div className="ui three column grid">{this.renderStreams()}</div>
        {this.renderCreateStreamButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
