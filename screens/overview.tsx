import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ds } from '~/constants';
import { Button, Card, Fab, Tags, TextField } from '~/components';

export default function Overview() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={ds.font.heading.h1}>Overview</Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
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
          <Card
            imageSource={require('~/assets/images/card-image.jpg')}
            title="Card Title"
            buttonTitle="Button"
            onButtonPress={() => {}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: ds.colors.light.lightest,
  },
  container: {
    flex: 1,
    padding: ds.spacing.md,
    gap: ds.spacing.md,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: ds.spacing.md,
    alignItems: 'center',
  },
});
