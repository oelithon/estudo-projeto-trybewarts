const trybeLogin = document.querySelector('#login');
const trybeSenha = document.querySelector('#password');
const buttonLogin = document.querySelector('#buttonLogin');

function verificarLogin() {
  if (trybeLogin.value === 'trybe@teste.com' || trybeSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verificarLogin);

const botaoEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
botaoEnviar.disabled = true;

function habilitaEnviar() {
  if (checkBox.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
checkBox.addEventListener('click', habilitaEnviar);
