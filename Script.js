document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const mensagemErro = document.getElementById('mensagemErro');

    // Preenche os campos com os valores da imagem (apenas para demonstração)
    usuarioInput.value = '10319949982';
    senhaInput.value = '123456'; // Uma senha de exemplo

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const usuario = usuarioInput.value.trim();
        const senha = senhaInput.value.trim();

        // Lógica de validação (simulada)
        // Em um ambiente real, você faria uma requisição AJAX para um servidor aqui
        // para verificar as credenciais no banco de dados.

        if (usuario === '10319949982' && senha === '123456') {
            // Login bem-sucedido
            mensagemErro.textContent = ''; // Limpa qualquer mensagem de erro
            alert('Login bem-sucedido! Redirecionando...'); // Mensagem de sucesso (opcional)

            // Redireciona para a página interna
            window.location.href = 'pagina-interna.html';
        } else {
            // Login falhou
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
            mensagemErro.style.color = 'red';
        }
    });
});
