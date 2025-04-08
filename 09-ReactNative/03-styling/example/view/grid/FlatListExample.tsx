import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const GridWithFlatList = () => {
    const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i+1}` }));

    const renderItem = ({ item, index }: { item: { id: string; title: string }; index: number }) => {
        // Check if this item is in the first row
        const isFirstRow = index < 3; // Assuming 3 columns

        return (
            <View style={[
                styles.item,
                isFirstRow && styles.orangeItem
            ]}>
                <Text>{item.title}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={styles.row}
        />
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    item: {
        flex: 1,
        margin: 5,
        height: 100,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orangeItem: {
        backgroundColor: 'orange',
    },
});

export default GridWithFlatList;