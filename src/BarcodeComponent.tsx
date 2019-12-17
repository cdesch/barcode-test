import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Barcode from 'react-native-barcode-builder';

export interface Props {
  name: string;
}

export default class BarcodeComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          My BarcodeComponent
        </Text>
        <Barcode value="Hello World" format="CODE128" />

      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});