import LikedScreen from './LikedScreen';
import LinkScreen from './LinkScreen';
import MyAccountScreen from './MyAccountScreen';
import OrderScreen from './OrderScreen';
import ShopScreen from './ShopScreen';
import ProductScreen from './ProductScreen';
import MembershipScreen from './MembershipScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckOutScreen';
import DeliveryScreen from './DeliveryScreen';
import NormalHeader from './NormalHeader';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const ShopScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="商城購物">
            <Stack.Screen 
            name="商城購物" 
            component={ShopScreen} 
            options={{header: (props) => <NormalHeader {...props} title='商城購物'/>}} />
            <Stack.Screen 
            name="商品頁面" 
            component={ProductScreen} 
            options={{header: (props) => <NormalHeader {...props} title='商品頁面'/>}} />
            <Stack.Screen 
            name="購物車" 
            component={CartScreen} 
            options={{header: (props) => <NormalHeader {...props} title='購物車'/>}} />
            <Stack.Screen 
            name="結帳" 
            component={CheckoutScreen} 
            options={{header: (props) => <NormalHeader {...props} title='結帳'/>}} />
        </Stack.Navigator>
    );
}

export const LikedScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="我的最愛">
            <Stack.Screen 
            name="我的最愛" 
            component={LikedScreen} 
            options={{header: (props) => <NormalHeader {...props} title='我的最愛'/>}} />
            <Stack.Screen 
            name="商品頁面" 
            component={ProductScreen} 
            options={{header: (props) => <NormalHeader {...props} title='商品頁面'/>}} />
            <Stack.Screen 
            name="購物車" 
            component={CartScreen} 
            options={{header: (props) => <NormalHeader {...props} title='購物車'/>}} />
            <Stack.Screen 
            name="結帳" 
            component={CheckoutScreen} 
            options={{header: (props) => <NormalHeader {...props} title='結帳'/>}} />
        </Stack.Navigator>
    );
}

export const LinkScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="我的自定義">
            <Stack.Screen 
            name="我的自定義" 
            component={LinkScreen} 
            options={{header: (props) => <NormalHeader {...props} title='我的自定義'/>}} />
            <Stack.Screen 
            name="商品頁面" 
            component={ProductScreen} 
            options={{header: (props) => <NormalHeader {...props} title='商品頁面'/>}} />
            <Stack.Screen 
            name="購物車" 
            component={CartScreen} 
            options={{header: (props) => <NormalHeader {...props} title='購物車'/>}} />
            <Stack.Screen 
            name="結帳" 
            component={CheckoutScreen} 
            options={{header: (props) => <NormalHeader {...props} title='結帳'/>}} />
            <Stack.Screen 
            name="配送進度" 
            component={DeliveryScreen} 
            options={{header: (props) => <NormalHeader {...props} title='配送進度'/>}} />
            <Stack.Screen name="會員等級" 
            component={MembershipScreen}
            options={{header: (props) => <NormalHeader {...props} title='會員等級'/>}} />
        </Stack.Navigator>
    );
}

export const OrderScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="我的訂單">
            <Stack.Screen 
            name="我的訂單" 
            component={OrderScreen} 
            options={{header: (props) => <NormalHeader {...props} title='我的訂單'/>}} />
            <Stack.Screen 
            name="配送進度" 
            component={DeliveryScreen} 
            options={{header: (props) => <NormalHeader {...props} title='配送進度'/>}} />
        </Stack.Navigator>
    );
}

export const MyAccountScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="我的帳戶">
            <Stack.Screen 
            name="我的帳戶" 
            component={MyAccountScreen} 
            options={{header: (props) => <NormalHeader {...props} title='我的帳戶'/>}} />
            <Stack.Screen 
            name="會員等級" 
            component={MembershipScreen}
            options={{header: (props) => <NormalHeader {...props} title='會員等級'/>}} />
        </Stack.Navigator>
    );
}