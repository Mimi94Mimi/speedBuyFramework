import React, { useState } from 'react'
import { Text, View, Button, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RecommendedItem from './RecommendedItem';
import ItemData from './ItemData';

const { width } = Dimensions.get('window');

export default function ProductScreen({ navigation }) {
    //get data
    //TODO: may be modified(get item data from backend)
    const data = [...ItemData];
    const productName = "rolex"
    const starRating = 4;
    const price = 987000;
    const addSpeedPoint = 88;
    const speedPointLeft = 912;
    const discount = -10;
    const sellerInfo = {
        name: 'ABC jewelries',
        region: '台北',
        img: require('../assets/seller.jpg')
    };
    const description = [
        {   
            key: '出貨地點',
            value: '台北市信義區'
        },
        {
            key: '顏色',
            value: '金藍色'
        }
    ];
    const descriptionText = `彰顯不懈追求恒久卓越的品牌理念。 唯有要求嚴謹縝密，方可成就典範之作。`;
    const liked = false;

    //states
    const [heartSolid, setHeartSolid] = useState(liked)

    //functions
    const toggleHeart = () => {
        setHeartSolid(!heartSolid);
    }
    const renderItem = ({ item }) => {
        return (
            <RecommendedItem push={navigation.push} item={item}/>
        )
    };
    const hasDiscount = discount !== 0;

    return (
        <View style={styles.page}>
            <FlatList
            data={data}
            numColumns={2}
            ListHeaderComponent={
                <View>
                    <View style={styles.image}>
                        {/*TODO: place image*/}
                        <Image 
                            style={styles.itemImage}
                            source={require('../assets/items/item1.jpg')}
                        />
                    </View>
                    <View style={{marginHorizontal: 16}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>{productName}</Text>
                            <TouchableOpacity onPress={() => {toggleHeart()}}>
                                {!heartSolid && <MaterialCommunityIcons name="heart-outline" size={24} color="#000000" />}
                                {heartSolid && <MaterialCommunityIcons name="heart" size={24} color="#000000" />}
                            </TouchableOpacity>
                            {/*TODO: may change CSS property*/}
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            {starRating >= 1 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                            {starRating >= 2 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                            {starRating >= 3 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                            {starRating >= 4 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                            {starRating >= 5 && <MaterialCommunityIcons name="star" size={16} color="#FFC400" />}
                            {/*TODO: may change CSS property*/}
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text>NT$ {price * (100 + discount) / 100}</Text>
                            <Text>   +{addSpeedPoint} SpeedPoints</Text>
                            {/*TODO: may change CSS property*/}
                        </View>
                        {hasDiscount &&
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{height: 16, borderRadius: 8, backgroundColor: "#D75A56", justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={styles.discountText}>{discount}%</Text>
                                </View>
                                <Text>   </Text>
                                <Text style={{textDecorationLine: 'line-through'}}>NT$ {price}</Text>
                                {/*TODO: may change CSS property*/}
                            </View>
                        }
                        <View style={{ flexDirection: 'row'}}>
                            <Text>距離下個會員等級還差 </Text>
                            <Text>{speedPointLeft} SpeedPoints</Text>
                            {/*TODO: may change CSS property*/}
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={{color: "#ffffff"}}>buy</Text>
                            </TouchableOpacity>
                            {/*TODO: may change CSS property*/}
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'grey'}}>
                                {/*TODO: place image*/}
                                <Image 
                                    style={styles.sellerImage}
                                    source={sellerInfo.img}
                                />                           
                            </View>
                            <View style={{height: 40, alignItems: 'space-between', marginLeft: 12}}>
                                <Text>{sellerInfo.name}</Text>
                                <Text>{sellerInfo.region}</Text>
                            </View>
                            {/*TODO: may change CSS property*/}
                        </View>
                        <View style={{paddingVertical: 4, fontWeight: 'bold'}}>
                            <Text>商品說明</Text>
                        </View>
                        <View>
                            {description.map(pair => {
                                return(
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}} key={pair.key}>
                                        <Text>{pair.key}</Text>
                                        <Text>{pair.value}</Text>
                                    </View>
                                    //TODO: may change CSS property
                                )
                            })}
                        </View>
                        <Text style={{paddingTop: 8}}>
                            {descriptionText}
                        </Text>
                        <View style={styles.title}>
                            <Text>更多商品</Text>
                        </View>
                    </View>
                </View>
            }
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = {
    page: {
        backgroundColor: "#ffffff",
        marginVertical: 4
    },
    image: {
        height: width,
        backgroundColor: 'grey'
    },
    buyButton: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF2D2D",
        flex: 1,
        marginVertical: 12,
        borderRadius: 20,
    },
    title: {
        //TODO
        height: 40, 
        borderColor: '#dfdfdf', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    discountText: {
        fontSize: 12,
        paddingHorizontal: 3,
        color: '#ffffff'
    },
    itemImage: {
        maxHeight: width,
        maxWidth: width,
        backgroundColor: 'grey'
    },
    sellerImage: {
        maxHeight: 40,
        maxWidth: 40,
        borderRadius: 20
    }
}
