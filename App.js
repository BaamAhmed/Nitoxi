import React from 'react'
import {Dimensions, View, Text, Button, SafeAreaView} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import dashboardScreen from "./src/screens/dashboard"
import testRecordScreen from "./src/screens/TestRecord"
import recentDetails from "./src/screens/RecentDetails"
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TestShowScreen from './src/screens/TestShow'
import RightIcon from './src/components/rightIcon'
import LeftIcon from './src/components/leftIcon'

import QuestionsScreen from './src/screens/QuestionsScreen'
import CameraScreen from './src/screens/CameraScreen'

import StatsScreen from './src/screens/StatsScreen'
import AccountScreen from './src/screens/AccountScreen'
import AboutScreen from './src/screens/AboutScreen'
import IntroScreen from './src/screens/IntroScreen'
import GraphScreen from './src/screens/GraphScreen'
import SideBar from './src/screens/SideBar'

import {Provider as AuthProvider} from "./src/context/AuthContext"
import {Provider as TestProvider} from "./src/context/testContext"
import {setNavigator} from './src/navigationRef'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import dashboard from './src/screens/dashboard'
import { ScrollView } from 'react-native'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

const defaultNavOptions= {
  title: 'NITOXI',
  headerStyle: {
    backgroundColor: '#743ED2',
    height: 80
  },
  headerTitleStyle: {
    color: 'white',
    // backgroundColor: 'black',
    fontSize: 23,
    letterSpacing: 10,
    textAlign: 'center'
  },
  headerBackTitleStyle: {
    color: 'white'
  },
  headerBackTitle: 'Back',
  headerLeft: ({navigation})=> (
    <LeftIcon navigation={navigation}/>
  ),
  headerRight: ()=> (
    <RightIcon/>
  ),
}

const navOptions= ({navigation}) => ({
  title: 'NITOXI',
  headerStyle: {
    backgroundColor: '#743ED2',
    height: screenHeight * 0.12
  },
  headerTitleStyle: {
    color: 'white',
    // backgroundColor: 'black',
    fontSize: 23,
    letterSpacing: 10,
    textAlign: 'center'
  },
  headerBackTitleStyle: {
    color: 'white'
  },
  headerBackTitle: 'Back',
  headerLeft: ({navigation})=> (
    <LeftIcon navigation={navigation}/>
  ),
  headerRight: ()=> (
    <RightIcon/>
  )
})

//

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
    Intro: IntroScreen
  }),
  loggedinFlow: createDrawerNavigator({
    HOME: createStackNavigator({
      Dashboard: {
        screen: dashboardScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      },
      Questions: {
        screen: QuestionsScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      },
      Camera: {
        screen: CameraScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      },
      Intro: {
        screen: IntroScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      }
    },
    {
      defaultNavigationOptions: defaultNavOptions
    }),
    TESTS: createStackNavigator({
      TestRecord: {
        screen: testRecordScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      },
      TestShow: {
        screen: TestShowScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      }
    },
    {
      defaultNavigationOptions: navOptions
    }),
    ACCOUNT: createStackNavigator({
      Account: {
        screen: AccountScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      }
    },
    {
      defaultNavigationOptions: navOptions
    }),
    ABOUT: createStackNavigator({
      About: {
        screen: AboutScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      }
    },
    {
      defaultNavigationOptions: navOptions
    }),
    // STATISTICS: createStackNavigator({
    //   Statistics: {
    //     screen: StatsScreen,
    //     navigationOptions: ({navigation}) => {
    //       return {
    //         headerLeft: () => <LeftIcon navigation={navigation} />,
    //         headerRight: () => <RightIcon navigation={navigation}/>
    //       }
    //     }
    //   }
    // },
    // {
    //   defaultNavigationOptions: navOptions
    // }),
    GRAPHS: createStackNavigator({
      Graphs: {
        screen: GraphScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerLeft: () => <LeftIcon navigation={navigation} />,
            headerRight: () => <RightIcon navigation={navigation}/>
          }
        }
      }
    },
    {
      defaultNavigationOptions: navOptions
    }),

  },
  {
    drawerType: 'back',
    contentComponent: SideBar
    // drawerPosition: ''
  })
  // loggediFlow: createStackNavigator({
  //   Dashboard: dashboardScreen,
  //   TestRecord: testRecordScreen,
  //   TestShow: TestShowScreen,
  //   RecentDetails: recentDetails
  // }, 
  // {
  //   // initialRouteName: 'Dashboard',
  //   defaultNavigationOptions: defaultNavOptions
  // })
})

// export default createAppContainer(navigator)

const App = createAppContainer(switchNavigator)
export default ()=> {
  return (
    <AuthProvider>
      <TestProvider>
        <App ref={(navigator)=>{setNavigator(navigator)}} />
      </TestProvider>
    </AuthProvider>
  )
}