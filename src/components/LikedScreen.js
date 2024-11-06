import React from 'react'
import { Text, View, Button } from 'react-native'

export default function LikedScreen({ navigation: { push } }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="TO 商品頁面" onPress={() => push('商品頁面')}/>
        </View>
    );
}
