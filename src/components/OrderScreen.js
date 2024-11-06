import { useState } from 'react';
import { View, useWindowDimensions, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const NotPaidYet = ({navigate}) => (
    <View style={{ flex: 1 }} />
);
const Processing = ({navigate}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="TO 配送進度" onPress={() => navigate('配送進度')}/>
    </View>
);
const ToBeReceived = ({navigate}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="TO 配送進度" onPress={() => navigate('配送進度')}/>
    </View>
);
const Done = ({navigate}) => (
    <View style={{ flex: 1}} />
);
const Cancelled = ({navigate}) => (
    <View style={{ flex: 1}} />
);
const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#D75A56' }}
        style={{ backgroundColor: '#ffffff' }}
        labelStyle={{color: '#D75A56', fontWeight: 'bold', fontSize: 12}}
    />
);


export default function OrderScreen({ navigation }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(2);
    const [routes] = useState([
        { key: 'first', title: '尚未付款' },
        { key: 'second', title: '處理中' },
        { key: 'third', title: '待收貨' },
        { key: 'fourth', title: '已完成' },
        { key: 'fifth', title: '已取消' }    
    ]);
    const renderScene = SceneMap({
        first: () => <NotPaidYet navigate={navigation.navigate} />,
        second: () => <Processing navigate={navigation.navigate} />,
        third: () => <ToBeReceived navigate={navigation.navigate} />,
        fourth: () => <Done navigate={navigation.navigate} />,
        fifth: () => <Cancelled navigate={navigation.navigate} />
    });
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            navigation={navigation}
        />
    );
}

//reference: https://github.com/satya164/react-native-tab-view