/**
 * YYCrnProject React Native App
 * @flow
 * @Create date 20170301
 * @Create by Decade
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class NavibarView extends Component {
    setupBackButton() {
        if (this.props.routeName != 'Tabbar'){
            return (
                <TouchableOpacity style = {styles.leftBtn} onPress = {() => this.leftBtnAction()}>
                    <Text style = {styles.leftBtnText}>🔙</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style = {styles.leftBtn}></View>
            )
        }
    }

    leftBtnAction() {
        if (this.props.popTotop) {
            this.props.navigator.popToTop();
        } else {
            this.props.navigator.pop();
        }
    }

    render () {
        return (
            <View style = {styles.navContainer}>
                {this.setupBackButton()}
                <Text style = {styles.titleText}>{this.props.titleText}</Text>
                <TouchableOpacity style = {styles.rightBtn}>
                    <Text style = {styles.rightBtnText}>{this.props.rightBtnText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // 导航栏
    navContainer: {
        backgroundColor: global.Main_Color, 
        height: 64, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    leftBtn: {
        paddingTop: 20, 
        flex: 1
    },
    leftBtnText: {
        textAlign: 'center',
    },
    titleText: {
        paddingTop: 20, 
        flex: 3, 
        textAlign: 'center'
    },
    rightBtn: {
        paddingTop: 20,
        flex: 1
    },
    rightBtnText: {
        textAlign: 'center',
    },
})