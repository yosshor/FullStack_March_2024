export interface Message {
    id: string;
    text: string;
    sender: 'me' | 'them';
    timestamp: string;
    status: 'read' | 'delivered';
    image: string;
}


export const mockMessages:Message[] = [
    {
        id: '1',
        text: 'Hey there! How are you doing?',
        sender: 'them',
        timestamp: '09:41',
        status: 'read',
        image:""
    },
    {
        id: '2',
        text: 'I\'m good, thanks! Just finished a project. How about you?',
        sender: 'me',
        timestamp: '09:42',
        status: 'read',
        image: ""
    },
    {
        id: '3',
        text: 'That\'s great to hear! I\'m doing well too. Just planning my weekend.',
        sender: 'them',
        timestamp: '09:45',
        status: 'read',
        image: ""
    },
    {
        id: '4',
        text: 'Any special plans?',
        sender: 'me',
        timestamp: '09:46',
        status: 'delivered',
        image: ""
    },
    {
        id: '5',
        text: 'Thinking of going hiking if the weather is nice. Would you like to join?',
        sender: 'them',
        timestamp: '09:48',
        status: 'read',
        image: ""
    },
];

export interface Chat {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    isOnline: boolean;
    isGroup: boolean;
    participants?: string[];
}

export const mockChats:Chat[] = [
    {
        id: '1',
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        lastMessage: 'Sure, I\'ll be there at 6pm',
        timestamp: '10:42 AM',
        unreadCount: 0,
        isOnline: true,
        isGroup: false,
    },
    {
        id: '2',
        name: 'Family Group',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        lastMessage: 'Mom: Can someone pick up milk on the way home?',
        timestamp: '9:30 AM',
        unreadCount: 3,
        isOnline: false,
        isGroup: true,
        participants: ['Mom', 'Dad', 'Sister', 'You']
    },
    {
        id: '3',
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        lastMessage: 'Did you see that new movie trailer?',
        timestamp: 'Yesterday',
        unreadCount: 0,
        isOnline: false,
        isGroup: false,
    },
    {
        id: '4',
        name: 'Work Team',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        lastMessage: 'Alex: Meeting moved to 2pm tomorrow',
        timestamp: 'Yesterday',
        unreadCount: 2,
        isOnline: false,
        isGroup: true,
        participants: ['Alex', 'Maria', 'David', 'You', 'Kate']
    },
    {
        id: '5',
        name: 'David Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        lastMessage: 'Thanks for your help yesterday!',
        timestamp: 'Tuesday',
        unreadCount: 0,
        isOnline: true,
        isGroup: false,
    },
    {
        id: '6',
        name: 'Jennifer Taylor',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        lastMessage: 'Can you send me that document?',
        timestamp: 'Monday',
        unreadCount: 0,
        isOnline: false,
        isGroup: false,
    },
    {
        id: '7',
        name: 'Vacation Planning',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        lastMessage: 'You: I found some great hotel deals',
        timestamp: '3/15/25',
        unreadCount: 0,
        isOnline: false,
        isGroup: true,
        participants: ['Mike', 'Emma', 'You', 'Chris']
    },
    {
        id: '8',
        name: 'Michael Brown',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        lastMessage: 'I\'ll call you later about that',
        timestamp: '3/10/25',
        unreadCount: 0,
        isOnline: false,
        isGroup: false,
    },
    {
        id: '9',
        name: 'Lisa Anderson',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        lastMessage: 'Happy birthday! 🎂',
        timestamp: '3/5/25',
        unreadCount: 0,
        isOnline: true,
        isGroup: false,
    },
    {
        id: '10',
        name: 'College Friends',
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
        lastMessage: 'Sam: Who\'s up for a reunion next month?',
        timestamp: '3/1/25',
        unreadCount: 5,
        isOnline: false,
        isGroup: true,
        participants: ['Sam', 'Jessica', 'Tyler', 'You', 'Amanda', 'Brian']
    },
    {
        id: '11',
        name: 'Tech Support',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
        lastMessage: 'Your ticket #45892 has been resolved',
        timestamp: '2/28/25',
        unreadCount: 0,
        isOnline: false,
        isGroup: false,
    },
    {
        id: '12',
        name: 'Emma Watson',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        lastMessage: 'Let me know when you arrive',
        timestamp: '2/20/25',
        unreadCount: 0,
        isOnline: false,
        isGroup: false,
    },
    {
        id: '13',
        name: 'John Smith',
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        lastMessage: 'Sure, I\'ll be there at 6pm',
        timestamp: '10:42 AM',
        unreadCount: 0,
        isOnline: true,
        isGroup: false,
    }

];