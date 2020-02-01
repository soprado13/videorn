import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({title}) => {
    return (
        <View style={styles.itemWrapper}>
            <Text style={styles.videoListTitle}>{title}</Text>
        </View>
    )
};

export {ListItem}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    videoListTitle: {
        color: '#fafafa',
        fontSize: 18
    }
})