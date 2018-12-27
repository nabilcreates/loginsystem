let username = $("#username");
let password = $("#password");
let login_button = $("#login_button");

login_button.on('click', () => {
    console.log('LOGIN BUTTON PRESSED')
    console.log({
        'username': username.val(),
        'password': password.val(),
    })
})