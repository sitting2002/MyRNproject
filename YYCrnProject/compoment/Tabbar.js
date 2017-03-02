/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170228
 * @Create by Decade
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

//引入tabbar支持包  
import TabNavigator from 'react-native-tab-navigator'; 

import FirstVC from './FirstVC.js';
import SecondVC from './SecondVC.js';
// import ThirdVC from './ThirdVC.js';

const TabNavigatorItem = TabNavigator.Item;  
  
const TAB_NORMAL_1 = require('./img/home_off.png');  
const TAB_NORMAL_2 = require('./img/all_off.png');  
const TAB_NORMAL_3 = require('./img/my_off.png');  
  
const TAB_PRESS_1 = require('./img/home_on.png');  
const TAB_PRESS_2 = require('./img/all_on.png');  
const TAB_PRESS_3 = require('./img/my_on.png');  

const Tab_1_name = 'FirstVC';
const Tab_2_name = 'SecondVC';
const Tab_3_name = 'ThirdVC';

export default class Tabbar extends Component {
    constructor(){  
        super();  
        this.state={  
            selectedTab:'1',  
        }  
    }  

    /** tab点击方法 **/  
    onPress(tabName){  
        if(tabName){  
            this.setState({  
                selectedTab:tabName,  
            });  
        }  
    }  

    /** 渲染tabbar **/  
    renderTabView(title, tabNomal, tabPress, tabName, tabContent){  
        return(  
            <TabNavigatorItem  
                title = {title}  
                renderIcon = {() => <Image source = {tabNomal}/>}  
                renderSelectedIcon = {() => <Image source = {tabPress}/>}  
                selected = {this.state.selectedTab === tabName}  
                selectedTitleStyle = {{color: '#f85959'}}  
                onPress = {() => this.onPress(tabName)}    
            >
                {tabContent}  
            </TabNavigatorItem>  
        );  
    }  

    /** 自定义tabbar **/  
    tabBarView(){  
        return (  
            <TabNavigator tabBarStyle = {styles.tabbar}>  
                {this.renderTabView(Tab_1_name, TAB_NORMAL_1, TAB_PRESS_1, '1', this.renderFirstViewContent())}  
                {this.renderTabView(Tab_2_name, TAB_NORMAL_2, TAB_PRESS_2, '2', this.renderSecondViewContent())}  
                {this.renderTabView(Tab_3_name, TAB_NORMAL_3, TAB_PRESS_3, '3', this.renderThirdViewContent())}  
            </TabNavigator>  
        );  
    }  

    /** 渲染第一个页面 **/  
    renderFirstViewContent() {
        return(
            <FirstVC navigator = {this.props.navigator} route = {this.props.route}></FirstVC>
        )
    }

    /** 渲染第二个页面 **/  
    renderSecondViewContent() {
        return(
            <SecondVC navigator = {this.props.navigator} route = {this.props.route}></SecondVC>
        )
    }

    /** 渲染第三个页面 **/  
    renderThirdViewContent() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{Tab_3_name}</Text>
            </View>  
        )
    }

    render() {  
        let tabBarView = this.tabBarView();  
        return (  
            <View style={styles.container}>  
                {tabBarView}  
            </View>  
        );  
    }

}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#eeeeee',  
    },  
    tabbar:{  
        height: 52,  
        alignItems:'center',  
        backgroundColor:'#f4f5f6',  
    },  
});  