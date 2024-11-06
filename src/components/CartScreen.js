import React from 'react'
import { Text, View, Button, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
const {height, width} = Dimensions.get('window')
const bottomBarHeight = 60;
const scrollviewHeight = height - 2 * bottomBarHeight;

export default function CartScreen({ navigation: { navigate } }) {
    //get data from backend
    const level = '價值追求者';
    const inCart = [
        {
            id: 0,
            name: 'let me buy it 4 u',
            price: 987000,
            newPrice: 888300,
            img: require("../assets/cart/item1.jpg")
        },
        {
            id: 1,
            name: 'bing chiling',
            price: 45000,
            newPrice: 23000,
            img: require("../assets/cart/item2.jpg")
        }
    ]

    const [chosenInCart, setChosenInCart] = useState(Array(inCart.length).fill(false));
    const [allChosen, setAllChosen] = useState(false);
    const choose = (id) => {
        var newChosenInCart = [...chosenInCart];
        newChosenInCart[id] = !newChosenInCart[id];
        setChosenInCart(newChosenInCart);
    }
    const chooseAll = () => {
        if (!allChosen) {
            setChosenInCart(Array(inCart.length).fill(true));
            setAllChosen(true);
        }
        else {
            setChosenInCart(Array(inCart.length).fill(false));
            setAllChosen(false);
        }
    }
    const getTotalPrice = () => {
        var sum = 0;
        for (let i = 0; i < chosenInCart.length; i++) {
            sum += chosenInCart[i] ? inCart[i].newPrice : 0;
        }
        return sum;
    }
    const totalPrice = getTotalPrice();
    const inCartRender = inCart.map((item) => {
        return(
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#dfdfdf', alignItems: 'center'}} key={item.id}>
                {!chosenInCart[item.id] &&
                    <TouchableOpacity onPress={() => {choose(item.id)}} style={{marginLeft: 10}}>
                        <MaterialCommunityIcons name='checkbox-blank-outline' size={24} color={'black'}/>
                    </TouchableOpacity>
                }
                {chosenInCart[item.id] &&
                    <TouchableOpacity onPress={() => {choose(item.id)}} style={{marginLeft: 10}}>
                        <MaterialCommunityIcons name='checkbox-marked' size={24} color={'black'}/>
                    </TouchableOpacity>
                }
                <View style={{height: 40, width: 40, backgroundColor: 'grey', marginLeft: 10}}>
                    {/*TODO: place image*/}
                    <Image 
                        style={styles.itemImage}
                        source={item.img}
                    />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10}}>
                    <Text>{item.name}</Text>
                    <Text>NT$ {item.newPrice}</Text>
                    <Text style={{textDecorationLine: 'line-through'}}>NT$ {item.price}</Text>
                </View>
            </View>
        )
    })
    const getNavigateSend = () => {
        let ret = []
        for (let i = 0; i < chosenInCart.length; i++) {
            if (chosenInCart[i]) {
                ret.push({...inCart[i]});
            }
        }
        return ret;
    }
    const navigateSend = getNavigateSend()

    return (
        <View style={styles.page}>
            <ScrollView style={styles.scrollContainer} >
                {inCartRender}
            </ScrollView>
            <View>
                <View style={styles.bottomBar1}>
                    <Text>會員等級：{level}</Text>
                </View>
                <View style={styles.bottomBar2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: width - 72, 
                    alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', marginLeft: 12}}>
                            {!allChosen &&
                                <TouchableOpacity onPress={() => {chooseAll()}}>
                                    <MaterialCommunityIcons name='checkbox-blank-outline' size={24} color={'black'}/>
                                </TouchableOpacity>
                            }
                            {allChosen &&
                                <TouchableOpacity onPress={() => {chooseAll()}}>
                                    <MaterialCommunityIcons name='checkbox-marked' size={24} color={'black'}/>
                                </TouchableOpacity>
                            }
                            <Text>  全選</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginRight: 12}}>
                            <Text>總金額：</Text>
                            <Text>NT$ {totalPrice}</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    style={styles.checkoutButton} 
                    onPress={() => {navigate("結帳", {navigateSend: navigateSend, totalPrice: totalPrice})}}
                    >
                        <Text style={{color: 'white'}}>去買單</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = {
    page: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between'
    },
    scrollContainer: {
        //height: 200
    },
    bottomBar1: {
        height: bottomBarHeight,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dfdfdf",
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 10
    },
    bottomBar2: {
        flexDirection: 'row',
        height: bottomBarHeight,
        borderColor: "black",
    },
    checkoutButton: {
        width: 72,
        backgroundColor: "#D44333",
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        maxHeight: 40,
        maxWidth: 40,
    }
}
