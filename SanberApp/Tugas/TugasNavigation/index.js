import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import {
  Login,
  Register,
  Splash,
  About,
  Skill,
  Project,
  Add
} from "./Screen";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ title: "Login" }}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{ title: "Register" }}
    />
  </AuthStack.Navigator>
);

const AboutStack = createStackNavigator();
const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="About" component={About} />
  </AboutStack.Navigator>
);

const SkillStack = createStackNavigator();
const SkillStackScreen = () => (
  <SkillStack.Navigator>
    <SkillStack.Screen name="Skill" component={Skill} />
  </SkillStack.Navigator>
);

const ProjectStack = createStackNavigator();
const ProjectStackScreen = () => (
  <ProjectStack.Navigator>
    <ProjectStack.Screen name="Project" component={Project} />
  </ProjectStack.Navigator>
);

const AddStack = createStackNavigator();
const AddStackScreen = () => (
  <AddStack.Navigator>
    <AddStack.Screen name="Add" component={Add} />
  </AddStack.Navigator>
);
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Skill" component={SkillStackScreen} />
    <Tabs.Screen name="Project" component={ProjectStackScreen} />
    <Tabs.Screen name="Add" component={AddStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="About">
    <Drawer.Screen name="Tabs" component={TabsScreen} />
    <Drawer.Screen name="About" component={AboutStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};