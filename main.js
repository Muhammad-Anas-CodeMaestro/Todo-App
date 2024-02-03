function newpage() {
    location.href = './signin.html'
}

function signup() {
    var getFirstName = document.querySelector('.Fname').value
    var getLastName = document.querySelector('.Lname').value
    var getEmail = document.querySelector('.Email').value
    var getPassword = document.querySelector('.password').value
    localStorage.setItem('firstName',getFirstName)
    localStorage.setItem('lastName',getLastName)
    localStorage.setItem('emailAddress',getEmail)
    localStorage.setItem('PassWord',getPassword)
    alert("Registration Successful")
    location.href = ('./signin.html')
}

function oldpage(){
    location.href = './signup.html'
}

function signin(){
    var getEmail = document.querySelector('.EmailAddress').value
    var getPass = document.querySelector('.pass').value
    if(localStorage.getItem('emailAddress') == getEmail && localStorage.getItem('PassWord') == getPass){
        alert("Login Successful")
        location.href = ("./homePage.html")
    }else if(localStorage.getItem('emailAddress') == getEmail || localStorage.getItem('PassWord') == getPass){
        alert('Either you enter wrong Email address or Password')
    }else{
        alert("First Register yourself by click on registration button and then tryAgain")
    }
}