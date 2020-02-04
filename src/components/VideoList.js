import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const VideoList = ({data, setNewData}) => {
        return (
            <ScrollView>
                {data.map(video => {
                    let onPress = () => {
                        setNewData(video.title, video.src);
                    };
                    return (
                        <TouchableOpacity onPress={onPress} key={video.id}>
                            <View style={styles.itemWrapper}>
                                <Ionicons name="md-checkmark-circle" size={32} color="#fafafa"/>
                                <Text style={styles.videoListTitle}>{video.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
};

export {VideoList}

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopColor: '#fefefe',
        borderTopWidth: 1,
        backgroundColor: '#333333'
    },
    videoListTitle: {
        color: '#fafafa',
        fontSize: 22,
        paddingLeft: 20
    }
});