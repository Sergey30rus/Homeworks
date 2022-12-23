/* todo.js */

/**
 * @param {object} data
 */
export function createTodo(data) {
    if(data.completed === true) {
        return {
            title: data.todoTitle,
            isCompleted: data.completed,
            icon: "✅",
            category: data.chosenCategory,
            author: {
              firstName: data.user.first,
              lastName: data.user.last
            }
          }
    } else {
        return {
            title: data.todoTitle,
            isCompleted: data.completed,
            icon: "⏳",
            category: data.chosenCategory,
            author: {
              firstName: data.user.first,
              lastName: data.user.last
            }
        }
    }
}