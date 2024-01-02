document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('postgres://aluno_20201214010022:706384@177.136.201.182:5439/temp?schema=aluno_20201214010022', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 200) {
                isAuthenticated = true;
                window.location.href = 'logout.html';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
            alert('Erro ao fazer a solicitação. Tente novamente mais tarde.');
        }
    });

});
