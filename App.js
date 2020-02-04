import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, ActivityIndicator} from 'react-native';
import {Header, VideoList, CurrentVideo} from './src/components/'
import {w, h, url} from './constants'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            title: 'VideoApp',
            src: 'https://github.com/soprado13/videorn/blob/master/src/videos/video0.mp4?raw=true',
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

    RootStack = createStackNavigator(
        {
            List: () => <VideoList data={this.state.data.videos} setNewData={this.setNewData} navigation={this.state.navigation}/>,
            Video: () => <CurrentVideo heading={this.state.title} source={this.state.src}/>,
        },
        {
            initialRouteName: 'List',
        }
    );


    render() {

        const AppContainer = createAppContainer(this.RootStack);
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
                {/*<Header heading={this.state.title}/>*/}
                <AppContainer />
                {/*<CurrentVideo heading={this.state.title} source={this.state.src} />*/}
                {/*<VideoList data={this.state.data.videos} setNewData={this.setNewData}/>*/}
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
    }
});
