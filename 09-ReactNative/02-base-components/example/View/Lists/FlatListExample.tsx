import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FlatListExample = () => {
    // Sample data array
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
        { id: '6', title: 'Item 6' },
        { id: '7', title: 'Item 7' },
        { id: '8', title: 'Item 8' },
        { id: '9', title: 'Item 9' },
        { id: '10', title: 'Item 10' },
        { id: '11', title: 'Item 11' },
        { id: '12', title: 'Item 12' },
        { id: '13', title: 'Item 13' },
        { id: '14', title: 'Item 14' },
        { id: '15', title: 'Item 15' },
        { id: '16', title: 'Item 16' },
        { id: '17', title: 'Item 17' },
        { id: '18', title: 'Item 18' },
        { id: '19', title: 'Item 19' },
        { id: '20', title: 'Item 20' },
    ];

    // Render function for each item
    const renderItem = ({ item }:{item:{id:string, title:string}}) => (
        <View style={[styles.item, {backgroundColor: item.id % 2 === 0 ? '#f9f9f9' : '#f0f0f0'}]}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // Additional props you can use:
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListHeaderComponent={() => <Text style={styles.header}>My List</Text>}
                ListFooterComponent={() => <Text style={styles.footer}>End of list</Text>}
                // Performance props:
                initialNumToRender={4}
                maxToRenderPerBatch={5}
                windowSize={5}
                // Pull to refresh:
                refreshing={false}
                onRefresh={() => console.log('Refreshing...')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginHorizontal: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
    },
    footer: {
        padding: 16,
        textAlign: 'center',
        color: 'gray',
    },
});

export default FlatListExample;


// initialNumToRender={4}

// Controls how many items are rendered initially when the list first loads
// Default is usually 10, but setting it lower (like 4) can improve initial load performance
// You should set this based on how many items typically fit on the screen at once


// maxToRenderPerBatch={5}

// Controls how many items are rendered in each batch when the user is scrolling
// Lower values mean smoother scrolling but slower overall rendering
// Higher values render more items at once but might cause frame drops during scrolling


// windowSize={5}

// Determines how far from the visible area (in units of visible lengths) the list should render content
// Default is usually 21 (10 screens above, 10 below, and 1 visible screen)
// A value of 5 means it will render about 2 screens worth of content above and below the visible area
// Lower values use less memory but might show blank areas during fast scrolling



// These props help balance smooth scrolling performance against memory usage in your app, especially for long lists. The optimal values depend on your specific use case, device performance, and the complexity of your list items.
