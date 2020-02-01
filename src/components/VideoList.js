import React from 'react';
import {ScrollView} from 'react-native';
import {ListItem} from "./ListItem";

const VideoList = ({data}) => {
    console.log(data);
    return (
        <ScrollView>
            {data.map(video => {
                return <ListItem title={video.title} key={video.id} id={video.id}/>
            })}
        </ScrollView>
    )
};

export {VideoList}