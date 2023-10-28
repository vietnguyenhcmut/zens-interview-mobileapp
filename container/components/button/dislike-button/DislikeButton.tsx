import { TouchableOpacity, View, Text } from "react-native"
import { styles } from "./style";
import { VoteProps } from "../../joke/Joke";

type DislikeButtonProps = {
  jokeDataVote: VoteProps,
  voteAction: (props: VoteProps) => void,
  handleAfterVote: () => void
}


const DislikeButton: React.FC<DislikeButtonProps> = ({jokeDataVote, voteAction, handleAfterVote}) => {

  const handleLikeButton = () => {
    voteAction(jokeDataVote);
    handleAfterVote();
  }

  return(
    <View>
      <TouchableOpacity
        onPress={handleLikeButton}
        accessibilityLabel="Click this button if you dislike the joke"
        style={styles.dislikeButton}
      >
        <Text style={styles.dislikeButtonText}>
          This is not funny.
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DislikeButton;