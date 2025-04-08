// components/StudentItem.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles/styles';
import { Student } from '../../model/studentModel';

interface StudentItemProps {
    student: Student;
}

const StudentItem: React.FC<StudentItemProps> = ({ student }) => (
    <View style={styles.itemContainer}>
        <Image
            source={{ uri: student.imageUrl }}
            style={styles.profileImage}
        />
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{student.name}</Text>
        </View>
    </View>
);

export default StudentItem;