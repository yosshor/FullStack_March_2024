# Exercise: Student Grade Management (TypeScript)


# Objectives:

Practice creating objects with methods in TypeScript.
Work with arrays of objects and custom sorting.
Implement functions for data analysis (average calculation).
# Instructions:

## Student Object:

Define a TypeScript interface or class named Student.
# Properties:
- name (string): The student's name.
- grades (number[]): An array to store the student's grades.
# Method:
calculateAverage(): Calculates and returns the average of the grades array.
Create Students:

Create an array named students and populate it with 5 Student objects. Give each student a name and a set of grades.

# Calculate All Students' Average:

1) Write a function calculateClassAverage(students: Student[]): number that takes the students array as input.
Iterate through the students, calling the calculateAverage() method for each student.
Calculate and return the overall average grade for the entire class.
Sort Students by Average:

2) Write a function sortStudentsByAverage(students: Student[]): Student[] that takes the students array as input.
Sort the students array in descending order based on their average grades (highest average first).
Return the sorted array of students.