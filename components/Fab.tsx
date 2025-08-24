import { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ds } from '~/constants';

type FabProps = {
  icon?: React.ComponentProps<typeof MaterialIcons>['name'];
} & TouchableOpacityProps;

export const Fab = forwardRef<View, FabProps>(({ icon = 'add', ...touchableProps }, ref) => {
  const buttonStyle = [styles.button, touchableProps.style];
  return (
    <TouchableOpacity ref={ref} {...touchableProps} style={buttonStyle}>
      <MaterialIcons name={icon} size={ds.size[8]} color={ds.colors.light.lightest} />
    </TouchableOpacity>
  );
});

Fab.displayName = 'Fab';

const styles = StyleSheet.create({
  button: {
    backgroundColor: ds.colors.highlight.darkest,
    borderRadius: ds.borderRadius.full,
    padding: ds.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ds.colors.dark.darkest,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },
});
