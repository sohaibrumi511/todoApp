import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: colors.ON_PRIMARY,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: colors.PRIMARY,
    margin: 10,
    padding: 15,
    width: '85%',
    borderRadius: 10,
    color: colors.ON_PRIMARY,
  },
  addText: {
    color: colors.ON_PRIMARY,
    fontSize: 24,
    borderRadius: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
});
