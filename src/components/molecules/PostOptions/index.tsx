import React from "react";
import { View } from 'react-native';

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    SaveIcon,
} from '../../../global/styles/icons';

import {styles} from './styles'

export function PostOptios() {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptionsSide}>
                <FavoriteIcon style={styles.postOptionsIcon} />
                <CommentIcon style={styles.postOptionsIcon} />
                <MessengerIcon style={styles.postOptionsIcon} />
            </View>

            <SaveIcon />
        </View>
    )
}