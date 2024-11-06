import React from 'react'
import { Text, View, Button, TouchableOpacity, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';


export default function CheckoutScreen({ route, navigation: { navigate } }) {
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
      {label: '7-11店到店', value: '7-11店到店'},
      {label: 'SpeedBuy店到店', value: 'SpeedBuy店到店'},
      {label: '宅配到您的住址', value: '宅配到您的住址'}
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
      {label: '貨到付款', value: '貨到付款'},
      {label: '信用卡', value: '信用卡'}
    ]);
    const { navigateSend, totalPrice } = route.params;
    const checkoutItems = navigateSend.map((item) => {
        return(
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}} key={item.id}>
                <View style={{height: 40, width: 40, backgroundColor: 'grey', marginHorizontal: 8}}>
                    {/*TODO: place image*/}
                    <Image 
                        style={styles.itemImage}
                        source={item.img}
                    />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Text>{item.name}</Text>
                    <Text>NT$ {item.newPrice}</Text>
                </View>
            </View>
        )
    })
    return (
        <View style={styles.page}>
            <View style={{marginHorizontal: 24}}>
                {checkoutItems}
                <View style={styles.midbar1}>
                    <Text>寄送方式</Text>
                    <View style={styles.dropdown}>
                        <DropDownPicker
                            open={open1}
                            value={value1}
                            items={items1}
                            setOpen={setOpen1}
                            setValue={setValue1}
                            setItems={setItems1}
                            placeholder='選擇寄送方式'
                        />
                    </View>
                    {/*reference: https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage */}
                </View>
                <View style={styles.midbar2}>
                    <Text>付款方式</Text>
                    <View style={styles.dropdown}>
                        <DropDownPicker
                            open={open2}
                            value={value2}
                            items={items2}
                            setOpen={setOpen2}
                            setValue={setValue2}
                            setItems={setItems2}
                            placeholder='選擇付款方式'
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottomBar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', marginRight: 12}}>
                        <Text>訂單金額：</Text>
                        <Text>NT$ {totalPrice}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
                    <Text style={{color: 'white'}}>結帳</Text>
                </TouchableOpacity>
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
    midbar1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        zIndex: 2
    },
    midbar2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40
    },
    dropdown: {
        width: 200,
        height: 50
    },
    bottomBar: {
        flexDirection: 'row',
        height: 60,
        borderColor: "black",
        justifyContent: 'flex-end'
    },
    checkoutButton: {
        width: 100,
        backgroundColor: "#D44333",
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        maxHeight: 40,
        maxWidth: 40,
    }
}