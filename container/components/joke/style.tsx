import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  jokeTitle: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  textDescription: {
    color: 'white',
    fontSize: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  textContent: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  voteButton: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  voteLikeButton: {
    justifyContent: 'center'
  },
  voteUnlikeButton: {
    justifyContent: 'center'
  },
  noneData: {
    alignItems: 'center'
  },
  noneDataText: {
    textAlign: 'center'
  }
});