// import inquirer from "inquirer";
// let todo: string[] = [];
// console.log(`TO DO LIST CURRENT ITEMS:`);
// console.log(todo);
// let userOperation =await inquirer.prompt({
//     name:"uOp",
//     type:"checkbox",
//     message:"Do you want to add or delete?",
//     choices:["Add","Delete"]
// });
// while (userOperation.uOp=="Add"){
// let addItem = await inquirer.prompt([
//     {
//         name:"itemAdd",
//         type: "input",
//         message:"Add Todo Item:"
//     }
//     userOperation =await inquirer.prompt({
//         name:"uOp",
//         type:"checkbox",
//         message:"Do you want to add or delete?",
//         choices:["Add","Delete"])
// ]);}
import inquirer from "inquirer";
let todo = [];
async function main() {
    console.log(`TO DO LIST CURRENT ITEMS:`);
    console.log(todo);
    while (true) {
        const userOperation = await inquirer.prompt({
            name: "uOp",
            type: "list",
            message: "Do you want to add or delete?",
            choices: ["Add", "Delete", "Exit"], // Add "Exit" choice
        });
        if (userOperation.uOp === "Add") {
            const addItem = await inquirer.prompt([
                {
                    name: "itemAdd",
                    type: "input",
                    message: "Add Todo Item:",
                },
            ]);
            todo.push(addItem.itemAdd);
        }
        else if (userOperation.uOp === "Delete") {
            const deleteItem = await inquirer.prompt([
                {
                    name: "itemDelete",
                    type: "list",
                    message: "Select item to delete:",
                    choices: todo, // Use current todo items as choices
                },
            ]);
            // Find the index of the item to delete and remove it
            const indexToDelete = todo.indexOf(deleteItem.itemDelete);
            if (indexToDelete !== -1) {
                todo.splice(indexToDelete, 1);
            }
        }
        else if (userOperation.uOp === "Exit") {
            break; // Exit the loop and end the program
        }
        // Display the updated todo list
        console.log(`TO DO LIST CURRENT ITEMS:`);
        console.log(todo);
    }
    console.log("Goodbye!");
}
main();
