//what will be displayed before clicking the button. 
//document.getElementById('output').value=('Click to get your Password')


//function to generate the password. 
const genpasword = () => {
let passLength = 12;
let PasswordChar = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let PasswordValue = '';

    for (let i = 0; i < passLength; i++) {
        let num = (Math.floor(Math.random() * PasswordChar.length));
        PasswordValue += PasswordChar.substring(num, num + 1);
    }
    document.getElementById('output').value = PasswordValue;
}

//function for copying the code
const copycode=()=>
{
    var copy = document.getElementById("output");
    copy.select();
    copy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert('Password Copied! account secured... if you use our password');
}

 const resetCode=()=>{
    
   
    document.getElementById('output').value= "";
     
 }


