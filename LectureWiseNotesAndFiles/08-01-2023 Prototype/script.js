let myHeros = ["thor","ironman"];
let dcHeros = ["batman","flash","superman"];

let heropower = {
    thor: "hammer",
    ironman: "lazer",

    getIronManPower: function () {
        console.log(`Ironman's Power is ${this.ironman}`);
    }
}

Object.prototype.jay = function(){
    console.log(`Jay is present in all the objects`);
}

Array.prototype.heyjay = function(){
    console.log(`Jay is present in all the arrays`);
}

myHeros.jay();

const User = {
    name: "Jay",
    email: "jay@example.com"
}

const Teacher = {
    makeVideos: true,
}
const TeacherSupport = {
    isAvailable: false,
}
const TAssistant = {
    makeAssistant: 'JS Assignment',
    fullTime: true,
    __proto__: TeacherSupport // Old way
}

Teacher.__proto__ = User
// Teacher can access email from User

// mordern syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

// Goal: get truelength of string
String.prototype.truelength = function(){
    console.log(`true length is: ${this.trim().length}`);
}

myname = "jay   ";

// Teaching Methodology
// - Exploratory Study
// - Thaching the dot Study