document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const profileAvatarDiv = document.getElementById('profile-avatar');

    if (profileAvatarDiv) {
        const profileAvatarImg = profileAvatarDiv.querySelector('img');
        const loggedInUserJSON = localStorage.getItem('loggedInUser');

        if (loggedInUserJSON) {
            const user = JSON.parse(loggedInUserJSON);

            loginBtn.classList.add('hidden');
            registerBtn.classList.add('hidden');
            profileAvatarImg.src = user.profilePic;
            profileAvatarDiv.classList.remove('hidden');
            profileAvatarDiv.addEventListener('click', () => {
                if (confirm('Deseja sair da sua conta?')) {
                    localStorage.removeItem('loggedInUser');
                    window.location.reload();
                }
            });

        } else {
            loginBtn.classList.remove('hidden');
            registerBtn.classList.remove('hidden');
            profileAvatarDiv.classList.add('hidden');
        }
    }

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const user = {
                email: email,
                profilePic: 'https://placehold.co/150x150/ec4899/ffffff?text=User'
            };

            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'index.html'; 
        });
    }
    const cadastroForm = document.getElementById('cadastro-form');

    if (cadastroForm) {
        const profileImageUpload = document.getElementById('profile-image-upload');
        const profilePreview = document.getElementById('profile-preview');

        profileImageUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePreview.src = e.target.result; 
                }
                reader.readAsDataURL(file);
            }
        });

        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                profilePic: profilePreview.src 
            };

            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'index.html';
        });
    }
});