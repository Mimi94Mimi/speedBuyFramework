import { FlatList, Dimensions, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { useState, useRef, useEffect } from 'react'

const { width } = Dimensions.get('window');
const previewCount = 1;
const itemWidth = width/(previewCount + .1);
const startScroll = 0;


export default function AdList() {
    const data = [...Array(5).keys()];
    const ad_img = new Array(
        require('../assets/sales/image1.jpg'),
        require('../assets/sales/image2.jpg'),
        require('../assets/sales/image3.jpg'),
        require('../assets/sales/image4.jpg'),
        require('../assets/sales/image5.jpg')
    )
    const flatlistRef = useRef();
    useEffect(() => {
        if (flatlistRef.current) flatlistRef.current.scrollToOffset({
            offset:startScroll, animated: false
        });
    }, [flatlistRef]);
    const snapToOffsets = data.map((x, i) => {
        return ((i * itemWidth) + startScroll)
    })
    return (
        <View style={styles().container}>
            <FlatList
            ref={flatlistRef}
            style={styles().container}
            pagingEnabled={true}
            horizontal= {true}
            decelerationRate={0}
            snapToOffsets={snapToOffsets}
            snapToAlignment={"center"}
            data={data}
            renderItem={({item, index}) => (
                <View style={styles(index=index).view} >
                    <Image 
                        style={styles().image}
                        source={ad_img[index]}
                    />
                    {/*TODO: uncomment*/}
                </View>
            )}/>
        </View>
    );
}

const styles = (index=0, image='') => StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    view: {
        marginLeft: index === 0 ? 10 + itemWidth * 0.05 : 10,
        marginRight: index === 4 ? 10 + itemWidth * 0.05 : 10,
        width: itemWidth - 20, //20 is margin left and right
        height: 120,
        margin: 8,
        borderRadius: 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#a0a0a0'
    },
    image: {  
        //TODO
        maxWidth: itemWidth - 20,
        maxHeight: 120,
        borderRadius: 10,
        overflow: 'hidden'
    }

});
//reference: https://stackoverflow.com/questions/69047058/react-native-flatlist-with-3-cards-paging-layout