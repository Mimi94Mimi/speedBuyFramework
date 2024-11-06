import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function NormalHeader({navigation, back, route, title}) {
    const shopOrProductScreen = (title === '商城購物' || title === '商品頁面')
    const initialStack = (title === '商城購物' || title === '我的最愛' || title === '我的訂單' || title === '我的帳戶')
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {title !== '商城購物' &&
                <TouchableOpacity
                onPress={()=>{navigation.goBack()}}
                disabled={back? false : true}
                style={back? styles.goBackButton : styles.goBackButtonHide}>
                    <MaterialCommunityIcons name='chevron-left' style={styles.goBackIcon}/>
                </TouchableOpacity>
                }
                {shopOrProductScreen &&
                <Text style={styles.logoName}>
                    SpeedBuy
                </Text>
                }
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {!shopOrProductScreen &&
                <Text style={styles.title}>{title}</Text>
                }  
                {title === '我的自定義' &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{' '}</Text>
                    <TouchableOpacity style={styles.helpButton}>
                        <MaterialCommunityIcons name='information-outline' style={styles.helpIcon}/>
                    </TouchableOpacity>
                </View>
                }
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {shopOrProductScreen &&
                <TouchableOpacity onPress={()=>{navigation.navigate('購物車')}} style={styles.cartButton}>
                    <MaterialCommunityIcons name="cart-outline" style={styles.cartIcon} />
                </TouchableOpacity>
                }
                {title === '我的自定義' ?
                <TouchableOpacity onPress={()=>{}} style={styles.topRightButton}>
                    <MaterialCommunityIcons name="shopping-outline" style={styles.topRightButtonIcon} />
                </TouchableOpacity> :
                title !== "商城購物" &&
                <TouchableOpacity
                onPress={()=>{}}
                disabled={initialStack? true : false}
                style={initialStack? styles.topRightButtonHide : styles.topRightButton}>
                    <MaterialCommunityIcons name="plus" style={styles.topRightButtonIcon} />
                </TouchableOpacity>}
            </View>
        </View>
    );
}

const styles = {
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        height: 64
    },
    //TODO: add an underline on the header
    goBackButton: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goBackButtonHide: {
        height: 48,
        width: 48,
        opacity: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goBackIcon: {
        fontSize: 32,
        color: '#000000',
    },
    helpButton: {
        height: 16,
        width: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpIcon: {
        color: '#B24143',
        fontSize: 16,
    },
    topRightButton: {
        backgroundColor: '#FADBD7',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 48,
        borderRadius: 12,
        marginVertical: 8
    },
    topRightButtonHide: {
        opacity: 0,
        height: 48,
        width: 48,
        marginVertical: 8
    },
    topRightButtonIcon: {
        fontSize: 32,
        color: '#000000',
    },
    cartButton: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartIcon: {
        fontSize: 24,
        color: '#000000',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B24143',
    },
    logoName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#81021D',
        marginLeft: 8
    }
}