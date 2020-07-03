import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AboutScreen from './AboutScreen';
import SkillScreen from './SkillScreen';
import ProjectScreen from './ProjectScreen';
import AddScreen from './AddScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
  </ScreenContainer>
);

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const About = ({ navigation }) => {
  return (
    <ScreenContainer>
      <AboutScreen/>
    </ScreenContainer>
  );
};

export const Skill = ({ navigation }) => {
  return (
    <ScreenContainer>
      <SkillScreen/>
    </ScreenContainer>
  );
};

export const Project = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ProjectScreen/>
    </ScreenContainer>
  );
};


export const Add = ({ navigation }) => {
  return (
    <ScreenContainer>
      <AddScreen/>
    </ScreenContainer>
  );
};


export const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <LoginScreen navigation={navigation} signIn={signIn}/>
    </ScreenContainer>
  );
};

export const Register = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <RegisterScreen signUp={signUp}/>
  </ScreenContainer>
  );
};