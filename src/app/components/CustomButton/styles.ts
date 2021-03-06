import {StyleSheet} from 'react-native';
import { cerulean, white, black, tundora } from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    borderColor: cerulean,
    borderWidth: 1,
    borderRadius: 22,
    height: 44,
    width: 275
  },
  text: {
    color: cerulean,
    fontSize: 15,
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  white: {
    borderColor: white,
    color: white,
  },
  disable: {
    backgroundColor: tundora
  },
  disabledText: {
    color: black
  }
});
