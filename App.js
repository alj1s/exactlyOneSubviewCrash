// @flow
import React, { Component } from "react"
import { StackNavigator, TabNavigator } from "react-navigation"
import { ScrollView, StyleSheet, Button, View } from "react-native"

type MainProps = {}

class Main extends Component<MainProps> {
  state = { modalOpen: true }
  closeModal = () => this.setState({ modalOpen: false })
  render() {
    return (
      <ScrollView
        key="mainView"
        testID="scrollView"
        style={styles.scrollView}
      />
    )
  }
}

class Login extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Button
          testID="login"
          title="login"
          onPress={() => this.props.navigation.navigate("joyride")}
        />
      </View>
    )
  }
}

class Joyride extends Component {
  render() {
    return (
      <View style={styles.joyride}>
        <Button
          testID="joyride"
          onPress={() => this.props.navigation.navigate("main")}
          title="main"
        />
      </View>
    )
  }
}

const Routes = StackNavigator({
  login: { screen: Login },
  joyride: { screen: Joyride },
  main: { screen: Main }
})

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "papayawhip",
    flex: 1,
    height: "100%"
  },
  modalContent: {
    flex: 1,
    padding: "10%"
  },
  joyride: {
    height: "100%",
    backgroundColor: "limegreen"
  },
  login: {
    height: "100%",
    backgroundColor: "palevioletred"
  }
})

type Props = {}

export default class App extends Component<Props> {
  render() {
    return <Routes />
  }
}
