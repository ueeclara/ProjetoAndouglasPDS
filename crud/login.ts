document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const logoutButton = document.getElementById('logout') as HTMLButtonElement;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;

        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('https://649a1d4a79fbe9bcf8404b5a.mockapi.io/users/20201214010022/products', {
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
