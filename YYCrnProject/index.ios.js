/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170228
 * @Create by Decade
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
} from 'react-native';
import Navibar from './compoment/Navibar.js';
import Networking from './compoment/Networking.js';


//Staging
// const YYCUrl = '';
// const YYCUrl = '';

export default class YYCrnProject extends Component {
    componentWillMount() {
        this.getUrlConfig();
    }

    getUrlConfig() {
        // urls = {
        //     ConcertUrl : YYCUrl + '/api/performances',
        // };
        // Networking.getOrsetData('YYCUrls', urls);
        fakeData = [];
        for (i=0; i<10; i++) {
            let randomColor = {
                color: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6)
            };
            fakeData.push(randomColor);
        }
        Networking.getOrsetData('fakeData', fakeData);
    }

    render() {
        return (
            <Navibar></Navibar>
        );
    }
}

AppRegistry.registerComponent('YYCrnProject', () => YYCrnProject);