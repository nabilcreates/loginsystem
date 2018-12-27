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
    }
]

login_button.on('click', () => {
    // LOOP THROUGH THE ARRAY
    for (let x = 0; x < users.length; x++) {

        // CHECK IF THE USERNAME AND PASSWORD MATCHES ANY OF THE USERS
        if (username.val() == users[x].user && password.val() == users[x].pass) {
            console.log("LOGGED IN")

        } else {
            console.log('WRONG USERNAME OR PASSWORD')
        }
    }
})

function register(username, password) {
    users.push({
        user: username,
        pass: password,
    })
}