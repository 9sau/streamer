import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  auth = null;

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "11350809883-sgaccuieadklsb740jjd1npg3gkbbthl.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChanged);
        });
    });
  }

  onAuthChanged = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
  };

  onSignInClick = () => {
    this.auth.signIn().then(response => {
      console.log(response);
    });
  };

  onSignOutClick = () => {
    this.auth.signOut().then(response => {
      console.log(response);
    });
  };

  render() {
    return this.renderAuthButton();
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
