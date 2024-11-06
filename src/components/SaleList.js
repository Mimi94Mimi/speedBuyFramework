import { FlatList, Dimensions, View, Text } from 'react-native';
import { useState, useRef, useEffect } from 'react'
import SaleItem from './SaleItem';
import ItemData from './ItemData';

export default function SaleList({ navigation }) {
    const data = [...ItemData]; //TODO: may be modified(get item data from backend)
    const flatlistRef = useRef();

    const renderItem = ({ item }) => {
        return (
            <SaleItem push={navigation.push} item={item}/>
        )
    };
    return (
        <View>
            <View style={styles.title}>
                <Text>
                    限時特價
                </Text>
            </View>
            <View style={styles.list}>
                <FlatList
                ref={flatlistRef}
                pagingEnabled={false}
                horizontal= {true}
                decelerationRate={0.2}
                //snapToAlignment={"center"}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = {
    title: {
        //TODO
        height: 40, 
        borderTopWidth: 1, 
        borderColor: '#dfdfdf', 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 10
    },
    list: {
        height: 200
    }
};