import {Text, View} from 'react-native';

export default function App() {
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#BBB',
        }}>
            <View style={{
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                flex: 0.5,
                backgroundColor: '#CCC'
            }}>
                <Text style={{fontSize: 20}}>Hello</Text>
                <Text style={{fontSize: 22}}>Let's program in</Text>
                <Text style={{fontSize: 25}}>React Native</Text>
            </View>

            <View style={{
                flexDirection: "column",
                flex: 0.5,
                backgroundColor: '#DDD',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 20}}>Hello</Text>
                <Text style={{fontSize: 22}}>Let's program in</Text>
                <Text style={{fontSize: 25}}>React Native</Text>
            </View>
        </View>
    )
}