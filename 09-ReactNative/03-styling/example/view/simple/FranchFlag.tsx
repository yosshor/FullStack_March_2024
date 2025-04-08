import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const FrenchFlag = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.flagContainer}>
                <View style={[styles.stripe, styles.blueStripe]} />
                <View style={[styles.stripe, styles.whiteStripe]} />
                <View style={[styles.stripe, styles.redStripe]} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flagContainer: {
        flex: 1,
        // height:200,
        flexDirection: 'column', // Vertical layout for horizontal stripes
    },
    stripe: {
        flex: 1, // Each stripe takes up equal space
    },
    blueStripe: {
        backgroundColor: '#0055A4', // French flag blue
    },
    whiteStripe: {
        backgroundColor: '#FFFFFF',
        flex:1 // White
    },
    redStripe: {
        backgroundColor: '#EF4135', // French flag red
    },
});

export default FrenchFlag;