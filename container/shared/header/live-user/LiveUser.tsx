import { View, Text, Image } from "react-native";
import { styles } from "./style";

const LiveUser = () => {
  return(
    <View style={styles.liveUser}>
      <View>
        <Text style={styles.liveUserContribution}> Handicrafted by </Text>
        <Text style={styles.liveUserAuthor}> Jim HLS </Text>
      </View>
      
      <View>
        <Image style={styles.logoImage} source={require('../../../../assets/sunflower-logo.png')} />
      </View>

    </View>
  )
}

export default LiveUser;

