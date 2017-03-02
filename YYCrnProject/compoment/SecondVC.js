/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170301
 * @Create by Decade
 */

import React, { Component } from 'react';
import {
    ListView,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Networking from './Networking.js';
import NavibarView from './NavibarView.js';

export default class SecondVC extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
        };
    }

    /**
     * 挂载当前页面加载第一页数据
     */
    componentDidMount() {
        this.fetchData();
    }

    /**
     * 封装状态设置方法
     */
    // setupStatus(responseJson, tmpdataArray) {
    //     if(responseJson.meta.next_page_url) {
    //         nextUrl = responseJson.meta.next_page_url.url;
    //         this.setState({
    //             dataSource: this.state.dataSource.cloneWithRows(dataArray),
    //             allData: tmpdataArray
    //         });
    //     } else {
    //         this.setState({
    //             dataSource: this.state.dataSource.cloneWithRows(dataArray),
    //             isLastPage: true
    //         });
    //     }
    // }

    /**
     * 获取第一页数据
     */
    async fetchData() {
        // let Urls = await Networking.getOrsetData('YYCUrls');
        // let responseJson = await Networking.fetchData('GET', Urls['ConcertUrl'], '');
        let responseJson = await Networking.getOrsetData('fakeData');
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseJson),
        });
    }

    setupCells(rowData, sectionID, rowID) {
        return (
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', padding: 16}}>
                <TouchableOpacity style = {{flex: 1, borderColor: '#000', borderWidth: 1}} activeOpacity = {0.9}>
                    <View style = {[styles.cellContent, {backgroundColor: rowData.color}]}></View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return(
            <View style = {styles.baseView}>
                <NavibarView 
                    routeName = {this.props.route.name}
                    navigator = {this.props.navigator}
                    titleText = 'second'
                    rightBtnText = '➡️'
                />
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = { (rowData, sectionID, rowID) => this.setupCells(rowData, sectionID, rowID) }
                    style = {styles.listViewStyle}                    
                />
            </View>           
        );
    }
}

const styles = StyleSheet.create({  
    baseView: {
        flex: 1
    },
    listViewStyle: {
        backgroundColor: '#fff', 
        flex: 1,
    },
    cellContent: {
        height: 100,
        width: 80,
    },
});  