import React from 'react';

import {
  Button
} from 'react-native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  DeviceEventEmitter
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

<<<<<<< HEAD
import io from 'socket.io-client';

import {
  Vibration
} from 'react-native';
=======
import Kontakt from 'react-native-kontaktio';
// const { connect, startScanning } = Kontakt;
>>>>>>> e48b232023aa65d3fb02eabdba9bb9535ce179ef

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
<<<<<<< HEAD

  constructor(){
    
    super()
    this.state = {
      vibration_command: {
        "direction": "Hi Please Select Destination",
        "seq": [],
      }
    };
  }

  componentDidMount() {
    const socket = io('http://192.168.1.10:4000');
    socket.on('vib', (message) => {
      this.setState({
        vibration_command: message
      });
      this.onVibrateInstruction()
    });
  }

  onVibrateInstruction = () => {
     Vibration.vibrate(this.state.vibration_command["seq"]);
    };

  selectDirectionImage = (direction) =>{
    if(direction == "straight"){
        return require('./../assets/images/up.png')
    }else if(direction == "back"){
        return require('./../assets/images/down.png')
    }
    else if (direction == "left"){
        return require('./../assets/images/left.png')
    }else{
        return require('./../assets/images/right.png')
    }
  }

  

=======
 
  componentDidMount() {
    // connect()
    //   .then(() => startScanning())
    //   .catch(error => console.log('error', error));

    // DeviceEventEmitter.addListener(
    //   'beaconsDidUpdate',
    //   ({ beacons, region }) => {
    //     console.log('beaconsDidUpdate', beacons, region);
    //   },
    // );
    console.log(Kontakt);
  }

>>>>>>> e48b232023aa65d3fb02eabdba9bb9535ce179ef
  render() {
     
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            
            <Image
              style={{width: 250, height: 250, marginTop:100}}
              source={this.selectDirectionImage(this.state.vibration_command.direction)}
            />
                        
            <Text style={{ marginTop: 10, padding: 10, fontSize:50, color:"#e55120"}}>{this.state.vibration_command.direction}</Text>
            
            <Button
<<<<<<< HEAD
              style={{ marginTop: 10, padding: 50,fontSize:50}}
              onPress={this.onVibrateInstruction}
              title="Repeat Instruction"
              color = "#841584"
=======
              onClick={this.onPressLearnMore}
              title="SHAKE"
              color="#841584"
>>>>>>> e48b232023aa65d3fb02eabdba9bb9535ce179ef
              accessibilityLabel="Learn more about this purple button"
            />
            

          </View>   
        </ScrollView>
      </View>
    );
  }
  
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
