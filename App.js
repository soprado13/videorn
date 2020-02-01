import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {Header} from './src/components/'
import {w, h, url} from './constants'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            title: 'VideoApp',
        }
    };

    componentDidMount = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ data })
        } catch (e) {
            throw e
        }
    };

    render() {
        console.log(this.state.data);
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <StatusBar barStyle="light-content"/>
                </SafeAreaView>
                <Header title={this.state.title}/>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        width: w,
        height: h,
        backgroundColor: '#333333',
    }
});
