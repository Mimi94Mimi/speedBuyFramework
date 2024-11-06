import {View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SaleItem({ push, item }) {
    const { img, id, name, rating, numOfRating, price, discount } = item;
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{push("商品頁面")}}>
            <View style={{height: 120, width: 120, backgroundColor: 'grey', alignSelf: 'center'}}>
                {/*TODO: place img*/}
                <Image 
                    style={styles.itemImage}
                    source={img}
                />
            </View>
            <View style={styles.line}>
                <Text>{name}</Text>
            </View>
            <View style={styles.line}>
                {rating >= 1 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                {rating >= 2 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                {rating >= 3 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                {rating >= 4 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                {rating >= 5 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                <Text> ({numOfRating})</Text>
                {/*TODO: may change CSS property*/}
            </View>
            <View style={styles.line}>
                <Text>NT$ {price * (1 - discount / 100)}  </Text>
                {/*TODO: may change CSS property*/}
                {discount !== 0 &&
                    <View style={{flexDirection: 'row'}}>
                        <View style={{height: 16, borderRadius: 8, backgroundColor: "#D75A56", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.discountText}>{discount}%</Text>
                        </View>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#dfdfdf', 
        borderWidth: 1,
        width: 140,
        height: 200,
        paddingTop: 4,
        paddingLeft: 4,
        paddingRight: 4
    },
    line: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
        alignItems: 'center',
        height: 20
    },
    discountText: {
        fontSize: 12,
        paddingHorizontal: 3,
        color: '#ffffff'
    },
    itemImage: {
        maxHeight: 120,
        maxWidth: 120,
    }
});
