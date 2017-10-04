var readline = require("readline");

var options = "\n\nType an option: [list, show n, reserve n, occupancy n max, search amenity]";

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: ["wifi"]
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    }
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable() {
    console.log(
        "\n#",
        "...",
        padTo("Adress", 20),
        " ",
        padLeft("Price", 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        console.log(i+1 + " ... " + 
            padTo(rooms[i].location, 20), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    room = rooms[n]
    console.log("Details of property #" + (n+1))
    console.log("-----------------------\n")
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
    if(room.reserved){
        console.log("\nRESERVED")
    }
}

function reserve(which) {
    if(rooms[which].reserved){
        console.log("Sorry, this room is unavailable.")
    }else{
        rooms[which].reserved = true
        console.log('Thank you for reserving', rooms[which].location)
    }
}

function getAmenity(amenity){
    for(var i=0; i<rooms.length; i++){
        if(rooms[i].amenities.includes(amenity)){
            console.log(rooms[i].location, "->", rooms[i].amenities)
        }
    }
}

function newLocation(price, location, max, amenites){
    // else if(inputArr[0] === "input"){
    //     rl.on("line", function(input){
    //         });
    // }
    return
}

// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')


// whatsAvailable(rooms);


rl.on("line", function(input){
    var inputArr = input.split(" ");
    if(inputArr[0] === "list"){
        whatsAvailable();
    }else if(inputArr[0] === "show"){
        showDetails(inputArr[1]-1)
    }else if(inputArr[0] === "reserve"){
        reserve(inputArr[1]-1)
    }else if(inputArr[0] === "occupancy"){
        rooms[inputArr[1]-1].maxOccupants = inputArr[2];
    }else if(inputArr[0] === "search"){
        inputArr = inputArr.slice(1).join(" ")
        getAmenity(inputArr)
    }
    console.log(options)

});



console.log(options)
