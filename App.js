import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, ActivityIndicator, ScrollView} from 'react-native';
import {Header, VideoList, CurrentVideo} from './src/components/'
import {w, h, url} from './constants'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            title: 'VideoApp',
            src: '',
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

    setNewData = (newHeading, newSrc) => {
        this.setState({title: newHeading, src: newSrc});
    };

    render() {
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
                <ScrollView>
                    <CurrentVideo heading={this.state.title} src={this.state.src} />
                    <VideoList data={this.state.data.videos} setNewData={this.setNewData}/>
                </ScrollView>
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
