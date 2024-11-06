import { View, TouchableOpacity, StyleSheet, Dimensions, Button, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';
const { width } = Dimensions.get('window');
const itemWidth = width / 2;
export default function RecommendedItem({push, item}) {
    const { img, id, name, rating, numOfRating, price, discount } = item;
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{push("商品頁面")}}>
            <View style={{height: 160, width: 160, backgroundColor: 'grey', alignSelf: 'center'}}>
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
                {discount !== 0 &&
                    <View style={{flexDirection: 'row'}}>
                        <View style={{height: 16, borderRadius: 8, backgroundColor: "#D75A56", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.discountText}>{discount}%</Text>
                        </View>
                    <Text>   </Text>
                    </View>
                }
                <Text>NT$ {price * (1 - discount / 100)}</Text>
                {/*TODO: may change CSS property*/}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        height: 250,
        width: itemWidth,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
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
        maxHeight: 160,
        maxWidth: 160,
    }
});