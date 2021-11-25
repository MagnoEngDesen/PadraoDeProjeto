import React from "react";

import { View, Image, ImageProps,Text} from 'react-native'

import {styles} from './styles'

type Props = {
    avatar: ImageProps;
    likes: string;
}

export function PostAbout({avatar, likes}: Props){
    return(
        <View style={styles.postAbout}>
                    <Image source={avatar} style={styles.lastLiked} />
                    <Text style={styles.likes}>{likes}</Text>
                </View>
    )
}