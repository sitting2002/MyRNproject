/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170228
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
    Dimensions,
    ScrollView,
} from 'react-native';
import Networking from './Networking.js';
import NavibarView from './NavibarView.js';
import Swiper from 'react-native-swiper';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

let cellWidth = (screenWidth-16*3)/2;
let cellHeight = screenHeight/2.5;

export default class FirstVC extends Component {
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
        let responseJson = await Networking.getOrsetData('fakeData');
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseJson),
        });
    }

    setupCells(rowData, sectionID, rowID) {
        return (
            <View style = {styles.cellContent}>
                <TouchableOpacity style = {styles.cellsubContent} activeOpacity = {0.9}>
                    <View style = {[styles.baseView, {backgroundColor: rowData.color}]}></View>
                </TouchableOpacity>
            </View>
        );
    }

    setupHeader() {
        return(
            <View style = {styles.carousel}>
                <Swiper autoplay = {true} 
                        autoplayTimeout = {8} 
                        height = {200} 
                        width = {screenWidth}
                        loadMinimal = {true}
                        >
                    <View style = {[styles.carouselSubItem, {backgroundColor: '#9DD6EB'}]}><Text>Hello</Text></View>
                    <View style = {[styles.carouselSubItem, {backgroundColor: '#97CAE5'}]}><Text>Thanks</Text></View>
                    <View style = {[styles.carouselSubItem, {backgroundColor: '#92BBD9'}]}><Text>Bye</Text></View>
                </Swiper>
            </View>
        );
    }

    render() {
        return(
            <View style = {styles.baseView}>
                <NavibarView 
                    routeName = {this.props.route.name}
                    navigator = {this.props.navigator}
                    titleText = 'first'
                    rightBtnText = '➡️'
                />
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = { (rowData, sectionID, rowID) => this.setupCells(rowData, sectionID, rowID) }
                    renderHeader = { () => this.setupHeader() }
                    contentContainerStyle = {styles.listViewStyle}
                    showsVerticalScrollIndicator = {false}
                    showsHorizontalScrollIndicator = {false}
                    style = {styles.listViewContentStyle}                    
                />
            </View>           
        );
    }
}

const styles = StyleSheet.create({  
    baseView: {
        flex: 1,
    },
    listViewStyle: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    listViewContentStyle: {
        backgroundColor: '#fff', 
        flex: 1,
    },
    cellContent: {
        marginBottom: 16,
        marginLeft: 16,
        width: cellWidth,
        height: cellHeight,
    },
    cellsubContent: {
        flex: 1, 
        borderColor: '#a0a0a0', 
        borderWidth: 1,
    },
    carousel: {
        width: screenWidth,
        height: 200,
        marginBottom: 16,
    },
    carouselSubItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});  