import React from 'react';
import {
    AppRegistry,
    Environment,
    StyleSheet,
    Text,
    View,
    VrButton,
    asset
} from 'react-360';


//import OptionsModule from './components/OptionsModule';
import OptionsModule from '../components/options/OptionsModule';
import { TextImage, TextModel } from '../components/questions/Questions';
const options = [{ text: 'Tabitha', id: 'tabitha' }, { text: 'Grace', id: 'grace' },
{ text: 'Admin', id: 'admin' }, { text: 'Test', id: 'test' }];

export default class Game extends React.Component {
  
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>

          <View style={styles.container}>

            <View style={styles.question}>
               <TextModel Model={{obj: asset('obj/Residential Buildings 003.obj'), mtl: asset('obj/Residential Buildings 003.mtl')}} Text="Here is a serious question." />
            </View>

            <View style={styles.options}>
              <OptionsModule options={options} />
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <VrButton onClick={() => {
              this.props.history.push('./welcome');
            }}>
              <Text
                style={{
                  backgroundColor: 'red',
                  fontSize: 30,
                  fontWeight: '500',
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                 
                }}>
                Back To Welcome Page.....
          </Text>
            </VrButton>

            <VrButton onClick={() => {
                this.props.history.push('./game');
            }}>
            <Text
              style={{
                backgroundColor: 'red',
                fontSize: 30,
                fontWeight: '500',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                
              }}>
              Go To Next Game Page.....
          </Text>
          </VrButton>

          </View>


        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    // maxHeight : 500,
    // maxWidth: 500,
    height: 400,
    width: 750,
  },
  greeting: {
    fontSize: 30,
  },
  button: {
    width: 50,
    borderColor: '#639dda',
    borderWidth: 2,
    padding: 15,
    margin: 1,
  },
  question: {
    width: 300,
    height: 200,
    borderColor: '#639dda',
    borderWidth: 2,
    margin: 2,

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
AppRegistry.registerComponent('Game', () => Game);