import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native'; // ✅ Correct
import { ThemedView } from '@/components/ThemedView';

const FlatListExample = () => {
    // Sample data array
    const data = [
        { id: '1', title: 'Im Yos And I Love React Native' },
        { id: '2', title: 'Im 35 Years Old' },
        { id: '3', title: 'Im A Developer' },
        { id: '4', title: 'Email: yos@gmail.com' },
        { id: '5', title: 'Phone: 054-1234567' },
        { id: '6', title: 'Address: Ramat Gan, Israel' },
    ];

    // Render function for each item
    const renderItem = ({ item }: { item: { id: string; title: string } }) => {
        const backgroundColor = parseInt(item.id) % 2 === 0 ? '#f9f9f9' : '#f0f0f0';

        return (
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <ThemedView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('@/assets/images/Yos.jpg')}
                        style={{ width: 40, height: 40, borderRadius: 40 }}
                    />
                </ThemedView>
                <View style={[styles.item, { backgroundColor }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
            </View>

        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // Additional props you can use:
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListHeaderComponent={() => <Text style={styles.header}>My Data List</Text>}
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
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,  // This replaces the gap property
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
