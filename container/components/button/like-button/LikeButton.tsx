import { TouchableOpacity, View, Text } from "react-native"
import { styles } from "./style";
import { VoteProps } from "../../joke/Joke";

type LikeButtonProps = {
  jokeDataVote: VoteProps,
  voteAction: (props: VoteProps) => void,
  handleAfterVote: () => void
}


const LikeButton: React.FC<LikeButtonProps> = ({jokeDataVote, voteAction, handleAfterVote}) => {

  const handleLikeButton = () => {
    voteAction(jokeDataVote);
    handleAfterVote();
  }

  return(
    <View>
      <TouchableOpacity
        onPress={handleLikeButton}
        accessibilityLabel="Click this button if you like the joke"
        style={styles.likeButton}
      >
        <Text style={styles.likeButtonText}>
          This is Funny!
        </Text>
      </TouchableOpacity>
        

    </View>
  )
}

export default LikeButton;