function toggleLoginForm() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var overlay = document.getElementById('form-overlay');
    overlay.style.display = 'block';
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}

function toggleRegisterForm() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var overlay = document.getElementById('form-overlay');
    loginForm.style.display = 'none';
    overlay.style.display = 'block';
    registerForm.style.display = 'block';
}

function closeForms(event) {
var loginForm = document.getElementById('loginForm');
var registerForm = document.getElementById('registerForm');
var overlay = document.getElementById('form-overlay');
    if (event.target == overlay) {
        loginForm.style.display = 'none';
        overlay.style.display = 'none';
        registerForm.style.display = 'none';
    }
}




var count = 0; // Initial count value

    function increaseCount() {
        count++;
        updateCountAndBar();
    }

    function decreaseCount() {
        if (count > 0){
            count--;
            updateCountAndBar();
        }
    }

    function updateCountAndBar() {
        var salesPercentageElement = document.getElementById('salesPercentage');
        var progressBarElement = document.getElementById('progressBar');
        var countElement = document.getElementById('count');
        var buyButtonElement = document.getElementById('buyButton');

        var percentage = count/10;
        salesPercentageElement.innerText = ' %' + percentage;
        progressBarElement.style.width = percentage + '%';
        countElement.innerText = count;

        if (count >= 0) {
            buyButtonElement.removeAttribute('disabled');
            buyButtonElement.style.backgroundColor = 'rgb(242, 122, 26)';
            buyButtonElement.style.color = 'white';
        } else {
            buyButtonElement.setAttribute('disabled', '');
            buyButtonElement.style.backgroundColor = 'transparent';
            buyButtonElement.style.color = 'rgb(242, 122, 26)';
        }
    }