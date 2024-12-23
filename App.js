import { Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#BBB',
        }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 20 }}>Hello React Native</Text>
                <Text style={{ fontSize: 22 }}>Let's program in</Text>
                <Text style={{ fontSize: 25 }}>React Native</Text>
            </View>

            <View>
                <Text style={{ fontSize: 20 }}>Hello React Native</Text>
                <Text style={{ fontSize: 22 }}>Let's program in</Text>
                <Text style={{ fontSize: 25 }}>React Native</Text>
            </View>
        </View>
    )
}