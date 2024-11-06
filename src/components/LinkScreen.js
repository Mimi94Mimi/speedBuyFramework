import { View, Button } from 'react-native';
export default function LinkScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="TO 會員等級" onPress={() => navigate('會員等級')}/>
        </View>
    );
}