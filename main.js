// FOR LOGIN PAGE
let username = $("#username");
let password = $("#password");
let login_button = $("#login_button");

// FOR REGISTER PAGE
let register_button = $("#register_button");
let register_username = $("#register_username");
let register_password = $("#register_password");

let users = []

// EVENTS!!!
login_button.on('click', () => {

    // IF WRONG USERNAME OR PASSWORD, IT WILL RETURN UNDEFINED
    if (checkCredentials(username.val(), password.val()) !== undefined) {
        $("#message").text('LOGGED IN')
    } else {
        $("#message").text('WRONG USERNAME OR PASSWORD')
    }

})

register_button.on('click', () => {
    register(register_username.val(), register_password.val())
})

function checkCredentials(username, password) {
    
    // USERDB = THE USERNAME AND PASSWORDS IN LOCALSTORAGE
    let userDB = JSON.parse(localStorage.getItem('users'))
    
    // console.log(username)
    // console.log(password)

    // LOOP
    for (var i = 0; i < userDB.length; i++) {
        // console.log(users[i])

        // CHECK THE INPUT TO EVERY OF THE USERDB AND SEE IF THE USER EXIST
        // IF WRONG USERNAME OR PASSWORD, IT WILL RETURN UNDEFINED
        if (username == userDB[i].user && password == userDB[i].pass) {
            return true;
        } else {
            continue;
        }
    }

}

function register(username, password) {

    // tempusers is the current array of users
    let tempusers = users;
    
    // push to the tempusers
    tempusers.push({
        user: username,
        pass: password,
    })

    // set the item as the tempusers (which is all the users)
    localStorage.setItem('users', JSON.stringify(tempusers))

    $("#message").text('Registered User')
}