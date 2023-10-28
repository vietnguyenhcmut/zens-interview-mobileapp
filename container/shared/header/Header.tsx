import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./logo/Logo";
import LiveUser from "./live-user/LiveUser";
import { styles } from "./style";

const Header = () => {
  return(
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.logoView}>
          <Logo />
        </View>

        <View style={styles.liveUserView}>
          <LiveUser />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Header;