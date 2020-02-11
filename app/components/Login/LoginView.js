import React from 'react';
import {Text, View} from 'react-native'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        testing: true
      };
    }
  
    render() {
        return (
            <View>
                <Text>This is a test</Text>
            </View>
          );
    }
  }

  export default Login;