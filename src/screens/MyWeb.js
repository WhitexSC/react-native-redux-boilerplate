import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { analogousColor } from '../config/colors';

export default class MyWeb extends Component {

  constructor(props) {
    super(props);

    this.handleAndroidBackPress = this.handleAndroidBackPress.bind(this);

    this.state = {
      currentRefresh: 0
    };
  }
  activityIndicator = (
    <ActivityIndicator 
      color={analogousColor}
      size="large"
      // style={[]}
    />
  )
  //@params webViewState: { url: string }
  onNavigationStateChange = (webViewState) => {
    const { url } = webViewState;
    console.log(url)
    // when WebView.onMessage called, there is not-http(s) url
    // if (url.includes('http')) {
    //   this.setState({ webViewUrl: url })
    // }
  }
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleAndroidBackPress
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleAndroidBackPress
    );
  }
  handleAndroidBackPress() {
    const { user, toggleLoginScreen } = this.props;

    return user ? !!toggleLoginScreen(false) : null;
  }

  render() {
    return (
      <WebView
        onNavigationStateChange={this.onNavigationStateChange}
        onMessage={() => console.log('onmessage triggered')}
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
        key={this.state.currentRefresh}
        startInLoadingState={true}
      />
    );
  }
}
