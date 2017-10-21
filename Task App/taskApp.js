var readline = require("readline");
var tasks = []

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
}

function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i)
    }
}

function inputHandler(input){
    input = input.split(" ")
    inputs = [input[0].toUpperCase(), input.slice(1).join(" ")]
    command = inputs[0];
    info = inputs[1];
    commands = ["ADD", "TOGGLE", "SHOW"]

    if(!commands.includes(command)){
        console.log("Input invalid")
        return 
    }

    switch(command){
        case "ADD":
            tasks.push(add(info));
            console.log(tasks.length-1 + ".", tasks[tasks.length-1].title + ". Completed: " + tasks[tasks.length-1].completed) 
            break;
        case "TOGGLE":
            return toggle(info);
            break;
        case "SHOW":
            return show(info);
            break;
    }
}

function add(info){
    return createTask(info, false)
}

function toggle(info){
    info = Number(info);
    tasks[info].completed = !tasks[info].completed
    conosle.log(tasks[info])
    return tasks[info]
}

function show(info){
    var commands = ["all", "active", "completed"];

    if(!commands.includes(info)){
        console.log("Invalid input")
        return
    }

    switch(info){
        case "all":
            for(var i=0; i<tasks.length; i++){
                console.log(i +"."+ tasks[i].title + ". Completed: " + tasks[i].completed)
            }
            break;
        case "active":
            for(var i=0; i<tasks.length; i++){
                if(tasks[i].completed === false){
                    console.log(i +"."+ tasks[i].title + ". Completed: " + tasks[i].completed)
                }
            }
            break;
        case "completed":
            for(var i=0; i<tasks.length; i++){
                if(tasks[i].completed === true){
                    console.log(i +"."+ tasks[i].title + ". Completed: " + tasks[i].completed)
                }
            }
            break;
    }
}

tasks.push(createTask("buy milk", false))
tasks.push(createTask("walk dog", true))


forEachElem(tasks, function(task, index){
    console.log(index + ". "+ task.title + ". Completed: " + task.completed)
});

rl.on("line", function(input){
    inputHandler(input);
})