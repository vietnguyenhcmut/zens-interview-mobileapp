import { View, Text } from "react-native";
import { styles } from "./style";

const Footer = () => {
  return(
    <View style={styles.footer}>
      <View style={styles.divider}></View>
      <Text style={styles.text}> 
        This app is created as part of HLsolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
      </Text>
      <Text style={styles.textCopyright}>
        Copyright 2021 HLS
      </Text>
      <View style={styles.dividerBigger}></View>
    </View>
  )
}

export default Footer;