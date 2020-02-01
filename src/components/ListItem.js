import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({title}) => {
    return (
        <View style={styles.itemWrapper}>
            <Ionicons name="md-checkmark-circle" size={32} color="#fafafa" />
            <Text style={styles.videoListTitle}>{title}</Text>
        </View>
    )
};

export {ListItem}

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    videoListTitle: {
        color: '#fafafa',
        fontSize: 22,
        paddingLeft: 20
    }
});