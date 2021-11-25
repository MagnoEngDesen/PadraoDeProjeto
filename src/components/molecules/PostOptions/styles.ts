import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    postOptionsSide: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      postOptionsIcon: {
        marginRight: 15
      },
      postOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})