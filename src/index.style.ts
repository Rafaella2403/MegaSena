import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: { flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  textInput: { borderColor: 'black',
    borderBottomWidth: 0.5,
    marginLeft: 32,
    textAlign: 'center',
  },
  numbers: {
    flexDirection: 'row',
    marginBottom: 32,
    justifyContent: 'space-around',
  },
  number: {
    backgroundColor: 'green',
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 40,
    textAlignVertical: 'center',
    color: 'white',
  },
});
