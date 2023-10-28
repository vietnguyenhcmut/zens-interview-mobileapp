import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './container/shared/header/Header';
import Footer from './container/shared/footer/Footer';
import Joke from './container/components/joke/Joke';

import { styles } from './style'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.rootView}>
        <Header />
        <Joke />
        <Footer />
      </View>
    </SafeAreaProvider>
  );
}
