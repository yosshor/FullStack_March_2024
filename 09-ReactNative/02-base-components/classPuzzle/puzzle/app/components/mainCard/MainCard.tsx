import { Chat, Message } from "@/app/(tabs)/IndexModel";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MainCard({ message }: { readonly message: Chat }) {
    return (
        <View style={styles.container}>
           <Image 
                source={{ uri: message.avatar }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
           />
           <Text style={styles.text}>{message.lastMessage}</Text>
           <View style={{ alignItems: 'flex-end',flex:1, justifyContent:"center"}}>
                {message.unreadCount > 0 && <View style={styles.greenDot}><Text style={styles.dotNumbers}>{message.unreadCount}</Text></View>}
           </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderRadius: 10,
        maxWidth: '95%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text:{
        fontSize: 16,
        maxWidth: '80%'
    },
    greenDot: {
        width: 15,
        height: 15,
        borderRadius: 40,
        color: 'white',
        fontSize:6,
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotNumbers: {
        color: 'white',
        fontSize: 9
    }
    
});

