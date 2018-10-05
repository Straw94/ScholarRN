import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    FlatList
} from 'react-native';
import resolution from "../Function/scale";
class SportView extends Component{
    constructor(props){
        super(props);
        this.state={
            sports: new Animated.Value(0),//创建动画初始值
            nowIndex: 0,
            flatLists: this.props.children
        }
    }
    componentDidMount(){
        let i = 0;
        this.timer = setInterval(() => {
            if(i == -resolution.scale * 930){//为了实现无缝轮播，在第四张动画的时候初始值设定为0（第四张和第一张相同）
                this.setState({
                    sports: new Animated.Value(0),
                    nowIndex: 0,
                })
            }else {
                this.setState({
                    sports: new Animated.Value(i),//每次设定定位left值的初始值
                    nowIndex: this.state.nowIndex + 1
                })
            }
            i -= resolution.scale * 310;
            if(i < -resolution.scale * 620){//为了实现无缝轮播，在第四张动画执行完立马目标值设定为-300，要和上面的设定为0保持同步
                i = 0;
                this.setState({
                    nowIndex: 0
                })
            }
            //执行动画
            Animated.timing(
                this.state.sports,
                {
                    toValue:i//这里是目标值
                }
            ).start();
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);//卸载组件时清除定时器
    }
    render(){
        return (
            <View>
                <Animated.View style={{...this.props.style,left:this.state.sports}}>
                    {this.props.children}
                </Animated.View>
                <View style={{  flexDirection:"row",
                                width: resolution.scale * 310,
                                top: resolution.scale * 50,
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                    {
                        this.props.children.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[styles.point,
                                        {marginLeft: resolution.scale * 3,marginRight: resolution.scale * 3, backgroundColor: index == this.state.nowIndex ? 'white' : 'rgba( 255, 255, 255, 0.2)'}]}>
                                </View>
                            )
                        })

                    }
                </View>
            </View>

        );
    }
}
export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    label: '这是第一条新闻这是第一条新闻这是第一条新闻这是第一条新闻这是第一条新闻',
                    date: '2018-09-09'
                },
                {
                    label: '这是第二条新闻',
                    date: '2018-09-10'
                },
                {
                    label: '这是第三条新闻',
                    date: '2018-09-11'
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[{width:resolution.scale * 300,height:resolution.scale * 70,overflow: 'hidden',position:"relative"}]}>
                    <SportView style={{width:resolution.scale * 1240,height:resolution.scale * 70,flexDirection:"row", flexWrap:"nowrap",position:"absolute",top:0}}>
                        {
                            this.state.dataList.map((item, index) => {
                                return (
                                    <View key={index} style={styles.bannerItem}>
                                        <Text style={styles.wordItem}>{item.label}</Text>
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>
                                )
                            })
                        }
                    </SportView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerItem: {
        width: resolution.scale * 310,
        height: resolution.scale * 70,
        paddingLeft: resolution.scale * 15,
        paddingRight: resolution.scale * 15,
        paddingTop: resolution.scale * 10,
        paddingBottom: resolution.scale * 10,
    },
    point: {
        width: resolution.scale * 7,
        height: resolution.scale * 7,
        borderRadius: resolution.scale * 7,
    },
    wordItem: {
        color: 'white',
        fontSize: 13,
        fontWeight: '900'
    },
    date: {
        textAlign: 'right',
        color: 'white',
        fontSize: 11
    }
});