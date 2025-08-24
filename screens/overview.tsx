import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import { Fab } from '~/components/Fab';
import { ds } from '~/constants';

export default function Overview() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.buttonContainer}>
          <Text style={ds.font.heading.h1}>Overview</Text>
          <Button title="Primary Button" onPress={() => {}} />
          <Button title="Secondary Button" variant="secondary" onPress={() => {}} />
          <Fab onPress={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: ds.spacing.md,
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: ds.spacing.md,
    alignItems: 'center',
    width: '100%',
  },
});
