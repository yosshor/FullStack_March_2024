import { StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { saveChatMessages, loadChatMessages } from '@/utils/storage';
import { chats } from '@/data/chats';

export default function ChatScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Get the current chat details
    const currentChat = chats.find(chat => chat.id === id);

    useEffect(() => {
        loadMessages();
    }, [id]);

    const loadMessages = async () => {
        const savedMessages = await loadChatMessages(id as string);
        if (savedMessages.length === 0) {
            // Initialize with default messages if no saved messages exist
            const defaultMessages = [
                { id: '1', text: 'Hi!', isMe: true },
                { id: '2', text: 'Hello! How are you?', isMe: false },
            ];
            setMessages(defaultMessages);
            await saveChatMessages(id as string, defaultMessages);
        } else {
            setMessages(savedMessages);
        }
    };

    const handleSend = async () => {
        if (message.trim()) {
            const newMessage = {
                id: Date.now().toString(),
                text: message.trim(),
                isMe: true
            };
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            setMessage('');
            await saveChatMessages(id as string, updatedMessages);
        }
    };

    const renderMessage = ({ item }: { item: any }) => (

            <ThemedView style={[
                styles.messageContainer,
                item.isMe ? styles.myMessage : styles.theirMessage
            ]}>
                <ThemedText style={styles.messageText}>{item.text}</ThemedText>
                {item.isMe && (
                    <ThemedText style={styles.sign}>✓✓</ThemedText>
                )}
            </ThemedView>
        // </ThemedView>
    );

    return (
        <ThemedView style={styles.container}>


            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => item.id}
                style={styles.messagesList}
            />

            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message..."
                    onSubmitEditing={handleSend}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleSend}
                >
                    <ThemedText style={styles.sendButtonText}>Send</ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messages: {
        flex: 1,
        flexDirection: 'column',
    },
    sign: {
        padding: 0,
        margin: 0,
        gap: 0,
        fontSize: 12,
        color: '#8696A0',
        marginRight: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        marginRight: 16,
    },
    backButtonText: {
        fontSize: 24,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    messagesList: {
        flex: 1,
        padding: 16,
    },
    messageContainer: {
        flexDirection: 'row',
        gap: 12,
        padding: 12,
        borderRadius: 16,
        marginBottom: 8,
        maxWidth: '80%',
    },
    myMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    theirMessage: {
        backgroundColor: '#E8E8E8',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: '#128C7E',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});