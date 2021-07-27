import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyle from "./style";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const Auth = ({ isSignedIn }) => {
  const classes = useStyle();

  const SignIn = () => {
    return !isSignedIn ? (
      <div className={classes.title}>
        <Typography className={classes.title} variant="h4">
          Login Form
        </Typography>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    ) : (
      <div className={classes.title}>
        <Typography variant="h4" gutterBottom>
          Welcome {firebase.auth().currentUser.displayName}! <br />
        </Typography>
        <a className={classes.link} onClick={() => firebase.auth().signOut()}>
          Click here to sign out
        </a>
      </div>
    );
  };

  return (
    <Container>
      <div className={classes.toolBar} />

      <SignIn />
    </Container>
  );
};

export default Auth;
