let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    document.getElementById('erro_nome').textContent = '';
    document.getElementById('erro_email').textContent = '';
    document.getElementById('erro_senha').textContent = '';

    if (nome.length < 3) {
        document.getElementById('erro_nome').textContent = 'O seu nome deve ter pelo menos 3 caracteres';
        valido = false;
    }

    if (!email.includes('@')) {
        document.getElementById('erro_email').textContent = 'E-mail inválido.';
        valido = false;
    }

    if (senha.length < 6) {
        document.getElementById('erro_senha').textContent = 'Senha inválidada, deve ter pelo menos 6 caracteres';
        valido = false;
    }

    if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `
            Dados enviados: <br> <br>
            Nome: ${nome} <br>
            Email: ${email} <br>
            Senha: ${senha} <br>
        `;
        form.reset();
    }
})