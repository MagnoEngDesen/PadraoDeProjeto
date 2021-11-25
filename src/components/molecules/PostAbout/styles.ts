import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    postAbout: {
        flexDirection: 'row',
        marginTop: 14
    },
    likes: {
        marginLeft: 7,
        fontWeight: 'bold',
        fontSize: 13
    },
    lastLiked: {
      width: 20,
      height: 20
    },
})


