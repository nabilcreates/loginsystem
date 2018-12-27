let username = $("#username");
let password = $("#password");
let login_button = $("#login_button");

let users = [{
        user: 'cooler',
        pass: 'suckingonthisdick',
        sub: 'none',
    },

    {
        user: 'renabil',
        pass: 'gayass',
        sub: 'admin',
    }
]

let currentState = {};

login_button.on('click', () => {
    // LOOP THROUGH THE ARRAY
    for (let x = 0; x < users.length; x++) {

        // CHECK IF THE USERNAME AND PASSWORD MATCHES ANY OF THE USERS
        if (username.val() == users[x].user && password.val() == users[x].pass) {
            console.log("LOGGED IN")

            currentState = {
                user: users[x].user,
                sub: users[x].sub,
                last_logged: new Date()
            }
            
        } else {
            console.log('WRONG USERNAME OR PASSWORD')
        }
    }
})