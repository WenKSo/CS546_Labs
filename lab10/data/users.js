const bcrypt = require('bcrypt');
//const saltRounds = 16;
//var Guid = require("Guid");

const users = [
    {
         _id: "a", 
        username: "masterdetective123", 
        password: "elementarymydearwatson",
        hashedPassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.", 
        firstName: "Sherlock", 
        lastName: "holmes",
        profession: "Detective",
        sid:[],
        bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a consulting detective in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
    },
    
    {
        _id: "b", 
        username: "lemon",
        password: "damnyoujackdonaghy",
        hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm", 
        firstName: "Elizabeth", 
        lastName: "Lemon",
        profession: "Writer",
        bio: "Elizabeth Miervaldis Liz Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
        sid:[]
    },
    
    {
       _id: "c", 
        username: "theboywholived",
        password: "quidditch",
        hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK", 
        firstName: "Harry", 
        lastName: "Potter",
        profession: "Student",
        bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
        sid:[]
    }
];

    function getAllUsers(){
        return users;
    }
    
    function getUserByName(username){
        for(let i = 0; i < users.length; i++){
            if(users[i].username == username){
                return users[i];
            }
        }
        return null;
    }
    
    function inArray(arr, obj) {
//        Testing
//        var x = ["hello"];
//        var num = x.indexOf("hello");
//        console.log(num);
//        console.log(typeof x);
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == obj){
                return true;
            }
        }
        return false;
//        return (arr.indexOf(obj) != -1); Doesn't work
    }

    
    function getUserBySessionId(sid){
        for(let i = 0; i < users.length; i++){
            if(inArray(users[i].sid,sid)){
                return users[i];
            }
        }
        return null;
    }
    
    function authenticate(username, password){
        //console.log(temp);
        var temp = getUserByName(username);
        //console.log(temp);
        //console.log(typeof password);
        if(temp){
            //const hash = bcrypt.hash(password, saltRounds); Using this line can't get things correct
            if (bcrypt.compare(password, temp.hashedPassword)){
                return true;
            }
            return false;
        }
        return false;
    }
    
    function addSid(user,sid){
        user.sid.push(sid);
        //console.log(user);
    }

    function deleteSid(user,sid){
        for(let i = 0; i < user.sid.length; i++){
            if(user.sid[i] == sid){
                user.sid[i] = "";
            }
        }
    }


module.exports = {
    getAllUsers,
    getUserByName,
    inArray,
    getUserBySessionId,
    authenticate,
    addSid,
    deleteSid
};