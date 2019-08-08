function onSignIn(googleUser) {

    var id_token = googleUser.getAuthResponse().id_token;

    $('#signout').show()

    $.ajax({
            method: 'post',
            url: `${baseUrl}/users/signin-google`,
            data: {
                id_token
            }
        })
        .done(response => {
            localStorage.setItem('token', response.token)
        })
        .fail((err) => {
            console.log(err)
        })
}


function signOut() {

    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });

    $('#signout').hide()

    localStorage.clear()

}