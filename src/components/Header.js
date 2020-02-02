import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.heading !== this.props.heading){
            this.props.heading
        }
    }

    render() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={styles.heading}>{this.props.heading}</Text>
            </View>
        )
    }
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