import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';
import {Header, VideoList} from './src/components/'
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

    componentDidMount() {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    setNewHeading = (newHeading) => {
        this.setState({title: newHeading});
    };

    render() {

        console.log(this.state.title);
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <SafeAreaView>
                        <StatusBar barStyle="dark-content"/>
                    </SafeAreaView>
                    <ActivityIndicator size="large" color="red"/>
                </View>
            )
        }
        ;
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <StatusBar barStyle="light-content"/>
                </SafeAreaView>
                <Header heading={this.state.title}/>
                <VideoList data={this.state.data.videos} setNewHeading={this.setNewHeading}/>
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
