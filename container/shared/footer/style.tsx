import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'relative',
    bottom: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 9,
    padding: 10,
    textAlign: 'center',
  },
  textCopyright: {
    color: 'grey',
    fontSize: 12,
    paddingBottom: 10,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  dividerBigger: {
    height: 3,
    width: '100%',
    backgroundColor: 'grey',
  }
});