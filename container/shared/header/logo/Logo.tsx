import { View, Image } from "react-native";
import { styles } from "./style";

const Logo = () => {
  return(
    <View>
      <Image style={styles.logoImage} source={require('../../../../assets/lh-logo.png')} />
    </View>
  )
}

export default Logo;

