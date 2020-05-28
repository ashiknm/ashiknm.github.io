function myfunction() {
    var validation = true;
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var Dob = document.getElementById("Dob").value;
    var Email = document.getElementById("Email").value;
    var Phonenumber = document.getElementById("Phonenumber").value;
    var Male = document.getElementById("M").checked;
    var Female = document.getElementById("F").checked;
    var sub = document.getElementById("sub").value;
    if(!FirstName){
        validation = false;
        document.getElementById("errmsg").style.display = "block";
        document.getElementById("errmsg").innerHTML = "please enter first name";
        document.getElementById("errmsg").style.color = "red";
    }
    if(!LastName){
        validation = false;
        document.getElementById("errmsg1").style.display = "block";
        document.getElementById("errmsg1").innerHTML = "please enter last name";
        document.getElementById("errmsg1").style.color = "red";
    }
    if(!Dob){
        validation = false;
        document.getElementById("errmsg2").style.display = "block";
        document.getElementById("errmsg2").innerHTML = "please choose date of birth";
        document.getElementById("errmsg2").style.color = "red";
    }
    if(!Male && !Female){
        validation = false;
        document.getElementById("errmsg3").style.display = "block";
        document.getElementById("errmsg3").innerHTML = "please select gender";
        document.getElementById("errmsg3").style.color = "red";
    }
    if(!Email){
        validation = false;
        document.getElementById("errmsg4").style.display = "block";
        document.getElementById("errmsg4").innerHTML = "please enter  email address";
        document.getElementById("errmsg4").style.color = "red";
    }else if(ValidateEmail(Email)){
        validation = false;
        document.getElementById("errmsg4").style.display = "block";
        document.getElementById("errmsg4").innerHTML = "please enter valid email address";
        document.getElementById("errmsg4").style.color = "red";
    }
    if(!PhoneNumberValidation()){
        validation = false;
        document.getElementById("errmsg5").style.display = "block";
        document.getElementById("errmsg5").innerHTML = "please enter valid phone number";
        document.getElementById("errmsg5").style.color = "red";

    }
    if(!sub){
        validation = false;
        document.getElementById("errmsg6").style.display = "block";
        document.getElementById("errmsg6").innerHTML = "please choose subject";
        document.getElementById("errmsg6").style.color = "red";
    }
    if(validation){
        var parms = {
            FirstName : FirstName,
            LastName : LastName,
            Dob : Dob,
            Email : Email,
            Gender : "Male",
            Phonenumber : Phonenumber
        }
        const PostUrl = 'http://127.0.0.1:5000/contact';
        axios.post(PostUrl,parms).then((result) =>{
            alert(result.msg);
        }).catch((err) =>{

        });

    }
}
function hideerrormsg(val){
    document.getElementById(val).style.display = "none";
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (false)
  }
    return (true)
}
function PhoneNumberValidation() {
    var txtPhone = document.getElementById("Phonenumber").value;
    var mobileno = /^((\\+91-?)|0)?[0-9]{10}$/;
    if ( txtPhone.match(mobileno)){
       return true;
    }
    else {
        return false;
    }

}
