function validateForm() {
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || subject === '' || message === '') {
        alert('Merci de remplir tous les champs');
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    if (!email.match(emailRegex)) {
        alert(' S il vous plaît, mettez une adresse email valide');
        return false;
    }

    return true;
}



function testspace() {
    var emailInput = document.getElementById('email'); 
    emailInput.addEventListener('keydown', function (e) {
        if (e.key === ' ') {
            e.preventDefault();
        }
    })
};