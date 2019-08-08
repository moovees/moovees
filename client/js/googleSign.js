function onSignIn(googleUser) {

    var id_token = googleUser.getAuthResponse().id_token;

    $.ajax({
            method: 'post',
            url: `${baseUrl}/users/signin-google`,
            data: {
                id_token
            }
        })
        .done(response => {
            if (!localStorage.getItem('token')) {
                Swal.fire({
                    type: 'success',
                    title: 'Login success!',
                    text: 'Please login to continue :D',
                    timer: 1500
                })
            }
            localStorage.setItem('token', response.token)
            $('#signout').show()
        })
        .fail((err) => {
            console.log(err)
        })
}


function signOut() {

    var auth2 = gapi.auth2.getAuthInstance();

    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'See ya!'
            )

            auth2.signOut().then(function () {
                console.log('User signed out.');
            });

            $('#signout').hide()

            localStorage.clear()
        }
    })


}