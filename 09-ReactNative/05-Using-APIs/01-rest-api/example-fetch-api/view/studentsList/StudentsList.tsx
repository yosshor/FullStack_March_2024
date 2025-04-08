import React, { FC } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import StudentItem from './StudentItem';
import { styles } from './styles/styles';
import { Student } from '../../model/studentModel';

interface Props{
    students: Array<Student>;
}

const StudentsList: FC<Props> = ({students}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Students</Text>
            <FlatList
                data={students}
                renderItem={({ item }) => <StudentItem student={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

export default StudentsList;