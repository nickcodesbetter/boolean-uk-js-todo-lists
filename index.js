/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/


// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/todo-lists-tr122?from-embed=&file=/index.js
// - Do not code your solution in CodeSandbox
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 


  let messageUsers = "";
  
  for (let i = 0; i < users.length; i++) {
    const username = users[i].username;
    const id = users[i].id;
    const name = users[i].name;
    const city = users[i].address.city;
  
    const row = `${username} | ${id} ${name} ${city}\n`;
  
    messageUsers = messageUsers + row;
  
    // console.log("Iteration #", i + 1);
    // console.log("message: ", messageUsers);
  }

 alert(messageUsers);
//   const useridResponse = prompt(
//     `
//         What is your user ID?
      
//         `
//   );
//   const userid = parseInt(useridResponse);
  
//   let id = 0;
  
//   if (userid === 1) {
//     id = 20;
//   } else if (userid === 2) {
//     id = 43;
//   }
//   console.log("What is your user ID: ", id);
//   alert(id);

const userIdInput = prompt(`Please enter your user ID: `);

const convertedId = parseInt(userIdInput);

console.log(convertedId);


let messageTodos = "";
  
  for (let i = 0; i < todos.length; i++) {
    const userId = todos[i].userId;
    const id = todos[i].id;
    const title = todos[i].title;
    const completed = todos[i].completed;
  

    const row = `${userId} | ${id} ${title} ${completed}\n`;
  
    messageTodos = messageTodos + row;
  
    // console.log("Iteration #", i + 1);
    // console.log("message: ", messageTodos);

  }

  alert(messageTodos)



// console.log("users: ", users);

// console.log("todos: ", todos);



// const data = [
//     {
//       id: 1,
//       firstName: "Steven",
//       lastName: "Rico"
//     },
//     {
//       id: 2,
//       firstName: "Nico",
//       lastName: "Marcora"
//     },
//     {
//       id: 3,
//       firstName: "Sergio",
//       lastName: "Neves"
//     }
//   ];
  
//   let message = "";
  
//   for (let i = 0; i < data.length; i++) {
//     const id = data[i].id;
//     const firstName = data[i].firstName;
//     const lastName = data[i].lastName;
  
//     const row = `${id} | ${firstName} ${lastName}\n`;
  
//     message = message + row;
  
//     console.log("Iteration #", i + 1);
//     console.log("message: ", message);
//   }
  
//   console.log(message);
//   alert(message);
  
//   const userID = prompt("Who's loist do you want to have a look at? (Use ID)");
  
//   console.log(userID);
  // const id = data[0].id;
  // const firstName = data[0].firstName;
  // const lastName = data[0].lastName;
  
  // const message = `${id} | ${firstName} ${lastName}`;
  
  // alert(message);
  
  // Output:
  // 1 | Steven Rico
  // 2 | Nico Marcora
  // 3 | Sergio Neves
  