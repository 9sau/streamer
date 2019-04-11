import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderStreams() {
    return this.props.streams.map(({ id, title, description }) => {
      return (
        <div className="ui raised card" key={id}>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <div className="right floated author">
              <button class="ui blue tiny basic button">Edit</button>
              <button class="ui red tiny basic button">Delete</button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui four cards">{this.renderStreams()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams)
  };
};
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
