function sendForm(event) {
    event.preventDefault();

    $('#msg-recaptcha').css('display', 'none');
    $('#recaptcha').val(grecaptcha.getResponse());
    $('.alert').css('display', 'none');
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/email/send/',
        data: $('form').serialize(),
        dataType: 'JSON',
        success: function (result) {
            if(result.includes('success')) {
                $('form')[0].reset();
                $('form').removeClass('was-validated');
                $('#alert-success').css('display', 'flex');
            }
            else {
                $('#alert-danger').css('display', 'flex');
                $('#alert-danger').html(result);
            }
            window.scrollTo(0, 0);
        },
        error: function (error) {
            $('#alert-danger').css('display', 'flex');
        },
    });
}