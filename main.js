
function register(event) {
    event.preventDefault();
    
    var name = document.getElementById("username").value 
    var email =document.getElementById("useremail").value
    var password =document.getElementById("userpassword").value
    var confirmpassword =document.getElementById("userconfirmpassword").value

    if(name && email && password && confirmpassword)  {
        if (password.length>=8 && confirmpassword.length>=8){
            if(password == confirmpassword){

                var Ls = JSON.parse(localStorage.getItem("Users"))
                var flag=false;
                for(var i=0; i< Ls.length; i++){
                    if(Ls.userEmail == email ){
                        flag=true;
                    }
                }
                if(!flag){
                    var userdata={
                        userName:name,
                        userEmail : email,
                        userPassword : password,
                        userConfirmPassword : confirmpassword
                    }
                    Ls.push(userdata)
                    localStorage.setItem(("users"),JSON.stringify(Ls))
                    alert("Registration successfull")
                    window.location.href='./login.html'
                    document.getElementById("username").value =  " "
                    document.getElementById("useremail").value= " "
                    document.getElementById("userpassword").value= " "
                    document.getElementById("userconfirmpassword").value= " "
                }


            }
            else{
                alert("password not matched")
            }

        }
        else{
            alert("password should be 8 or more characters")
        }

    }
    else{
        alert("please fill all fields")
    }
}



// login page

function login(event){
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value
    var userPassword = document.getElementById("userpassword").value

    var Ls=localStorage.setItem(("Users"),JSON.stringify[Ls])
    var flag=false;
    for(i=0; i<=Ls.length; i++){
        if(Ls.userEmail == userEmail && Ls.userPassword == userPassword){
            flag=true
        }
    }
    if(!!flag){

        alert("login successfull")
    }
    else("credintials not matched")





}





























