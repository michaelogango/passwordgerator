

var password= document.getElementById("password");
function genPasswordLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function genPasswordUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function number(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
} 
function symbols(){
    const symbol="!@#$%^&*()_+=~:;<>,.";
    return symbol[Math.floor(Math.random()*symbol.length)];
} 
const randomgen={
    lower:genPasswordLower,
    upper:genPasswordUpper,
    num:number,
    symbol:symbols
};


function genpasword(lower,upper,num, symbol){
    let generatedPassword='';
    const typesCount=lower+upper+num+symbol;
    console.log('typecount:' ,typesCount);
}



/* var char="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passLength=17;
    var password="";


    for( var i=0;i<=passLength;i++){
        var x=(math.floor(Math.random()*char.length));
        password+=char.substring(x,x+1);
    }

    //code to activate the button
    document.getElementById("password").value=password;
*/