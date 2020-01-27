function sendForm(event) {
    event.preventDefault();
    $('#recaptcha').val(grecaptcha.getResponse());
    
    $('.alert').css('display', 'none');
    $.ajax({
        type: 'POST',
        url: 'https://apiconsuti.netilify.com/email/send/',
        data: $('form').serialize(),
        dataType: 'JSON',
        success: function (result) {
            window.scrollTo(0, 0);
            $('form')[0].reset();
            $('form').removeClass('was-validated');
            $('#alert-success').css('display', 'flex');
        },
        error: function (error) {
            $('#alert-danger').css('display', 'flex');
        },
    });
}