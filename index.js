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

 //task. Имя пользователя
 const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
{
  firstName: "Charlie",
  lastName: "Bon",
  age: 38,
}
];

/**
* @param {{firstName: String, lastName: String, age: Number}[]} users
*/
function getLastUserFullName(users) {
  return `${users[1].firstName} ${users[1].lastName}`
}


// Sample usage - do not modify
getLastUserFullName(users); // "Charlie Bon"

const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
function getFirstStudentGrade(students) {
	return students[0].learnEnglish.grade
}


// Sample usage - do not modify
console.log(getFirstStudentGrade(students)); // 18

const students1 = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
function getSumGrades(students1) {
	return students1[0].learnEnglish.grade + students1[1].learnEnglish.grade
}


// Sample usage - do not modify
getSumGrades(students1); // 37

const users1 = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
function getFullNames(users1) {
  let arr = []
  for(i = 0; i < users1.length; i++) {
    arr.push(`${users[i].firstName} ${users[i].lastName}`)
  }; return arr 
}


// Sample usage - do not modify
getFullNames(users1); // [Sam Blue, Charlie Bon]