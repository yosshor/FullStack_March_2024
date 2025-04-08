import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';

const CounterButton = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Count: {count}</Text>
            <TouchableHighlight
                style={styles.button}
                onPress={incrementCounter}
                activeOpacity={0.2} // Controls how much the opacity reduces when pressed
            >
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CounterButton;