(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();

        let email = $('#email').val();
        let message = $('#message').val();
        let color = $('#color').val();
        
        alert(`Email: ${email}\nMessage: ${message}\nColor: ${color}`);
    });



})();