import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        backgroundColor: '#fff',
    },
    listContainer: {
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textContainer: {
        marginLeft: 16,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    idText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});