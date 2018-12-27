// FOR LOGIN PAGE
let username = $("#username");
let password = $("#password");
let login_button = $("#login_button");

// FOR REGISTER PAGE
let register_button = $("#register_button");
let register_username = $("#register_username");
let register_password = $("#register_password");

// LIST OF DEFAULT USERS
let users = [{
        user: 'cooler',
        pass: 'suckingonthisdick',
    },

    {
        user: 'renabil',
        pass: 'gayass',
    },

    {
        user: 'fun',
        pass: 'ass',
    }
]
login_button.on('click', () => {

    // IF WRONG USERNAME OR PASSWORD, IT WILL RETURN UNDEFINED
    if (checkCredentials(username.val(), password.val()) !== undefined){
        console.log("LOGGED IN")
    }else{
        console.log("WRONG USERNAME OR PASSWORD")
    }

})

function checkCredentials(username, password) {
    // console.log(username)
    // console.log(password)

    for (var i = 0; i < users.length; i++) {
        // console.log(users[i])

        // IF WRONG USERNAME OR PASSWORD, IT WILL RETURN UNDEFINED
        if (username == users[i].user && password == users[i].pass) {
            return true;
        } else {
            continue;
        }
    }

}

function register(username, password) {
    users.push({
        user: username,
        pass: password,
    })
}