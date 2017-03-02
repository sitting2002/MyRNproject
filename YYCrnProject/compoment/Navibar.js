/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170228
 * @Create by Decade
 */

import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';

import Tabbar from './Tabbar.js';

export default class Navibar extends Component {
     /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component 
            navigator = {navigator}  
            {...route.passProps}
            route = {route}
            />;
    }

    render() {
        return (
            <Navigator
                style = {{flex:1}}
                initialRoute = {{name: 'Tabbar', component: Tabbar}}
                renderScene = {this.renderScene}
            />
        );
    }
}