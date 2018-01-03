import {
  StyleSheet,
} from 'react-native';
const Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#003688',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#ddd',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'white'
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  displayText: {
     color: 'white',
     fontSize: 38,
     fontWeight: 'bold',
     textAlign: 'right',
     padding: 20
  },
  inputButtonHighlighted: {
    backgroundColor: 'red'
  },
});
export default Style;
