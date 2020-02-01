import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
};

export {Header}

const styles = StyleSheet.create({
    headerWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 60,
        backgroundColor: '#fafafa',
        alignItems: 'flex-end'
    },
    heading: {
        fontSize: 28,
    }
})