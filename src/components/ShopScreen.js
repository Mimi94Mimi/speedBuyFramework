import { Text, View, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import AdList from './AdList';
import SaleList from './SaleList';
import RecommendedItem from './RecommendedItem';
import ItemData from './ItemData';

export default function ShopScreen({ navigation }) {
    //get data
    const data = [...ItemData]; //TODO: may be modified(get item data from backend)

    const renderItem = ({ item }) => {
        return (
            <RecommendedItem push={navigation.push} item={item}/>
        )
    };
    return (
        <View style={styles.page}>
            {/*TODO: search bar*/}
            <FlatList
            data={data}
            numColumns={2}
            ListHeaderComponent={
                <View>
                    <AdList/>
                    <SaleList navigation={navigation}/>
                    <View style={styles.title}>
                        <Text style={styles.recommendTitle}>
                        推薦商品
                        </Text>
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
    title: {
        height: 40, 
        borderTopWidth: 1, 
        borderColor: '#dfdfdf', 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 10
    },
    page: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    recommendTitle: {
        //TODO
    },
}
