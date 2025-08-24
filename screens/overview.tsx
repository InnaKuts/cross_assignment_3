import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ds } from '~/constants';
import { Button, Fab, Tags, TextField } from '~/components';

export default function Overview() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.buttonContainer}>
          <Text style={ds.font.heading.h1}>Overview</Text>
          <Button title="Primary Button" onPress={() => {}} />
          <Button title="Secondary Button" variant="secondary" onPress={() => {}} />
          <Fab icon="add" onPress={() => {}} />
          <Fab icon="add" variant="secondary" onPress={() => {}} />
          <Tags
            tags={[
              { id: '1', text: 'Tag 1' },
              { id: '2', text: 'Tag 2' },
              { id: '3', text: 'Tag 3' },
            ]}
            onSelectionChange={() => {}}
          />
          <TextField label="TextField" placeholder="TextField" onPress={() => {}} />
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
    backgroundColor: ds.colors.light.lightest,
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: ds.spacing.md,
    alignItems: 'center',
    width: '100%',
  },
});
