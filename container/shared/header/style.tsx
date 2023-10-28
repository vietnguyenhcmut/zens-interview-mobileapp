import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    top: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoView: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start'
  },
  liveUserView: {
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-end'
  }
});