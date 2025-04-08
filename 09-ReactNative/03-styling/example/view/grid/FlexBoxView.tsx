import React from 'react';
import { View, StyleSheet } from 'react-native';

const GridLayout = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row, { backgroundColor: 'orange' }]}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
            <View style={[styles.row, { backgroundColor: 'navy' }]}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        height: 100,
        margin: 5,
        backgroundColor: '#ddd',
    },
});

export default GridLayout;