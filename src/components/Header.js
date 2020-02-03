import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({heading}) =>{
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.heading}>{heading}</Text>
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
});