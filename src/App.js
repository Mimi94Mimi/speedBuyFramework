import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    ShopScreenStack,
    LikedScreenStack,
    LinkScreenStack,
    OrderScreenStack,
    MyAccountScreenStack
} from './components/ScreenStacks';

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"

    return (
        <NavigationContainer>
            <BottomTab.Navigator
            activeColor="#81021D"
            inactiveColor="#000000"
            barStyle={{ backgroundColor: '#ffffff',}}
            initialRouteName="ShopScreen">

                <BottomTab.Screen name="ShopScreen" 
                component={ShopScreenStack}
                options={{
                    tabBarLabel: '商城購物',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
                    ),
                }}/>

                <BottomTab.Screen name="LikedScreen" 
                component={LikedScreenStack}
                options={{
                    tabBarLabel: '我的最愛',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart-outline" size={24} color={color} />
                    ),
                }}/>

                <BottomTab.Screen name="LinkScreen" 
                component={LinkScreenStack}
                options={{
                    tabBarLabel: '自定義頁面',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="check" size={24} color={color} />
                    ),
                }}/>

                <BottomTab.Screen name="OrderScreen"
                component={OrderScreenStack}
                options={{
                    tabBarLabel: '我的訂單',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="note-text-outline" size={24} color={color} />
                    ),
                }}/>

                <BottomTab.Screen name="AccountScreen"
                component={MyAccountScreenStack}
                options={{
                    tabBarLabel: '我的帳戶',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" size={24} color={color} />
                    ),
                }}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}