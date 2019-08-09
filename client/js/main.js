let baseUrl = 'http://localhost:3000'

$(document).ready(function () {

    signin()
    register()

})

if (localStorage.getItem('token')) {

    $('#signout').show()

}

function signin() {

    $('.form-signin').submit(function (e) {
        e.preventDefault()

        // console.log('masuk <<<<<<<<<<<<<')
        let result = {}
        $.each($('.form-signin').serializeArray(), function () {
            result[this.name] = this.value
        })
        // console.log(result)

        $.ajax({
                method: 'post',
                url: `${baseUrl}/users/signin`,
                data: result
            })
            .done(response => {
                console.log('Login successfuly!')
                localStorage.setItem('token', response)

                $('#signout').show()

                Swal.fire({
                    type: 'success',
                    title: 'Login success!',
                    text: 'Please login to continue :D',
                    timer: 1500
                })
            })
            .fail(err => {
                console.log(err.responseJSON)
                Swal.fire({
                    type: 'error',
                    title: 'Oops!',
                    text: err.responseJSON.message
                })
            })
    })

}

function register() {

    $('.form-signup').submit(function (e) {
        e.preventDefault()

        // console.log('masuk <<<<<<<<<<<')

        let result = {}
        result.name = $('#name-signup').val()
        result.email = $('#email-signup').val()
        result.password = $('#password-signup').val()

        console.log(result)

        $.ajax({
                method: 'post',
                url: `${baseUrl}/users/signup`,
                data: result
            })
            .done(response => {

                $('.modal').modal('hide');

                console.log('Register successfuly.')
                Swal.fire({
                    type: 'success',
                    title: 'Register success!',
                    text: 'Please login to continue :D'
                })
            })
            .fail(err => {
                console.log(err.responseJSON)
            })
    })

}