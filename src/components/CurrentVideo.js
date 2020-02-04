import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Video} from 'expo-av';
import {w, h} from '../../constants';

const CurrentVideo = ({heading, source}) => {
    console.log(source);
    return (
        <View style={styles.videoWrapper}>
            <Text>{heading}</Text>
            <Video
                source={{ uri: source}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
            />
        </View>
    )
};

export {CurrentVideo}

const styles = StyleSheet.create({
    videoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});