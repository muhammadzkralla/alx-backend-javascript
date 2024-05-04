const getStudentsByLocation = (students, city) => {
    const filteredList = students.filter((item) => item.location === city);
    return filteredList;
};

export default getStudentsByLocation;