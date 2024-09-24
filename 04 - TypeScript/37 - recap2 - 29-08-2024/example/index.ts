interface Student {
    name: string;
    age: number;
    isStudent: boolean;
    hasBikes?: boolean;
}

const ronny: Student = {
    name: "Ronny",
    age: 26,
    isStudent: true,
    hasBikes: true
};

const students: Student[] = [
    ronny,
    {
        name: "David",
        age: 26,
        isStudent: true,
        hasBikes: true
    },
    {
        name: "Itizk",
        age: 26,
        isStudent: true,
        hasBikes: true
    }
];