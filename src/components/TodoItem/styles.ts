import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flex: 1,
  },
  itemSide: {
    color: colors.ON_PRIMARY,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemSideLeft: {
    flex: 0.9,
  },
  itemSideRight: {
    flex: 0.1,
  },
  itemText: {
    color: colors.ON_PRIMARY,
    maxWidth: '95%',
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: colors.ON_PRIMARY,
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.PRIMARY,
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: 'center',
    shadowColor: colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: colors.ON_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
});
