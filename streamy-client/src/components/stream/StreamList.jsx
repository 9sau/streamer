import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderActionButtons(id) {
    if (this.props.currentUser === id)
      return (
        <div className="extra content">
          <div className="ui three buttons centered">
            <button className="ui basic blue button">Edit</button>
            <button className="ui basic red button">Delete</button>
          </div>
        </div>
      );
  }
  renderStreams() {
    return this.props.streams.map(({ id, title, description, userId }) => {
      return (
        <div className="column" key={id}>
          <div className="ui raised fluid card">
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{description}</div>
            </div>
            {this.renderActionButtons(userId)}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui three column grid">{this.renderStreams()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth.userId
  };
};
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
