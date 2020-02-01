import React from 'react';
import {ScrollView} from 'react-native';
import {ListItem} from "./ListItem";

const VideoList = ({data}) => {
    return (
        <ScrollView>
            {data.map(video => {
                return <ListItem title={video.title} key={video.id} id={video.id} src={video.src}/>
            })}
        </ScrollView>
    )
};

export {VideoList}