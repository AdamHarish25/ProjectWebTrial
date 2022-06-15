  /* Function to Generat Captcha */  
  function GenerateCaptcha() {  
    var chr1 = Math.ceil(Math.random() * 10) + '';  
    var chr2 = Math.ceil(Math.random() * 10) + '';  
    var chr3 = Math.ceil(Math.random() * 10) + '';  

    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;  
    document.getElementById("txtCaptcha").value = captchaCode  
}  

/* Validating Captcha Function */  
function ValidCaptcha() {  
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
    var str2 = removeSpaces(document.getElementById('txtCompare').value);  

    if (str1 == str2) return true;  
    return false;  
}  

/* Remove spaces from Captcha Code */  
function removeSpaces(string) {  
    return string.split(' ').join('');  
}  


function RevealPass1() {
    var x = document.getElementById("PassLogin");
    
    if (x.type === "password") {
     x.type = "text";
     $("#PassReveal").find("i").toggleClass("fa-eye fa-eye-slash");
   } else {  
     x.type = "password";
     $("#PassReveal").find("i").toggleClass("fa-eye-slash fa-eye");
   }
}

 function RevealPass2() {
    var x = document.getElementById("RegisterPassword1");
    var j = document.getElementById("RegisterPassword2");
    
    if (x.type === "password") {
     x.type = "text";
     $("#PassReveal").find("i").toggleClass("fa-eye fa-eye-slash");
   } else {  
     x.type = "password";
     $("#PassReveal").find("i").toggleClass("fa-eye-slash fa-eye");
   }
 
   if (j.type === "password") {
     j.type = "text";
     $("#PassReveal2").find("i").toggleClass("fa-eye fa-eye-slash");
   } else {  
     j.type = "password";
     $("#PassReveal2").find("i").toggleClass("fa-eye-slash fa-eye");
   }
 }