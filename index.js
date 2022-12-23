//task Инициалы пользователя
const user1 = {
    firstName: "Sam",
    lastName: "Doe",
    age: 20
  };
  
  const user2 = {
    firstName: "Charlie",
    lastName: "Fort",
    age: 31
  };
  
  /**
   * @param {Object[]} user
   * @param {string} user[].firstName
   * @param {string} user[].lastName
   * @param {number} user[].age
   */
  function getIntials(user) {
      return `${user.firstName[0]}${user.lastName[0]}`;
  }
  
  
  // Sample usage - do not modify
  getIntials(user1); // "SD"
  getIntials(user2); // "CF"

  //task. Добавление чисел
  const course1 = {
    name: "Learn English",
    isCompleted: true
  };
  
  const course2 = {
    name: "Learn JavaScript",
    isCompleted: false
  };
  
  /**
   * @param {Object[]} course
   * @param {number} count
   */
  function addNumberOfChapters(course, count) {
    course.numberOfChapters = count
    return course
  }
  
  
  // Sample usage - do not modify
  addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
  addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

  //task. Сумма оценок
const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18]
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
function getSumOfGrades(student) {
  let sum = student.grades.reduce(
    (total, current) => total + current,
    0
  ); return sum;
}


// Sample usage - do not modify
getSumOfGrades(student); // 75