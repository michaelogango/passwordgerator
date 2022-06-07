//function to fandomize password


document.getElementById('output').value=('zero')
//function to generate the password. 

const genpasword = () => {
    //var PasswordValue=document.getElementById('output');
let passLength = 12;
let PasswordChar = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let PasswordValue = '';

    for (let i = 0; i < passLength; i++) {
        let num = (Math.floor(Math.random() * PasswordChar.length));
        PasswordValue += PasswordChar.substring(num, num + 1);
    }
    document.getElementById('output').value = PasswordValue;
    //return (PasswordValue);
}

//defining the three parts, Poutput, Password, and copy
console.log(genpasword());
console.log("hello world 2");


