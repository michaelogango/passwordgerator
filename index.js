//defining the three parts, Poutput, Password, and copy
document.getElementById('poutput').value = genpasword();
document.form[0].submit()
    //var button = document.getElementById('Password').addEventListener('click', genpasword);
    //const button1 = document.querySelector('butn1');


//function to fandomize password
let passLength = 12;
let PasswordChar = "0123456789 abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
let PasswordValue = '';


//function to generate the password. 
const genpasword = () => {
    PasswordValue = '';

    for (let i = 0; i < passLength; i++) {
        let num = (Math.floor(Math.random() * PasswordChar.length));
        PasswordValue += PasswordChar.substring(num, num + 1);
    }
    //console.log(PasswordValue);
    // password = PasswordValue;
    return (PasswordValue);
}
console.log(genpasword());
console.log("hello world 2");

//add button listener- constantly listening for a click
//button = addEventListener('click', genpasword);


