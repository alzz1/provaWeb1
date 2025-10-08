document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const profileAvatarDiv = document.getElementById('profile-avatar');

  if (profileAvatarDiv) {
      const profileAvatarImg = profileAvatarDiv.querySelector('img');
      const loggedInUserJSON = localStorage.getItem('loggedInUser');

      if (loggedInUserJSON) {
          const user = JSON.parse(loggedInUserJSON);

          // Esconde os botões de login/cadastro
          if (loginBtn) loginBtn.style.display = "none";
          if (registerBtn) registerBtn.style.display = "none";

          // Mostra avatar com a foto do usuário
          profileAvatarImg.src = user.profilePic || "https://placehold.co/150x150/ec4899/ffffff?text=User";
          profileAvatarDiv.classList.remove('hidden');

         viewProfileBtn.addEventListener('click', () => {
  const profile = profilesData.find(p => p.name === modalName.textContent);
  
  if (profile) {
    localStorage.setItem('selectedProfile', JSON.stringify(profile));
    window.location.href = 'perfil.html';
  }
});

      } else {
          // Caso não esteja logado, mantém botões visíveis
          if (loginBtn) loginBtn.style.display = "inline-block";
          if (registerBtn) registerBtn.style.display = "inline-block";
          profileAvatarDiv.classList.add('hidden');
      }
  }
});


    const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // recupera todos os usuários cadastrados
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // procura se existe o usuário com esse email e senha
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // salva o usuário logado
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            // redireciona para a tela inicial
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha inválidos!');
        }
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
            password: document.getElementById('password').value,
            profilePic: profilePreview.src
        };

        // salva na lista de usuários cadastrados
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // define como logado
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = 'index.html';
    });
}

// ===== Modal de Perfil =====
const modal = document.getElementById('profile-modal');
const modalContent = modal.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalAgeLocation = document.getElementById('modal-age-location');
const modalDescription = document.getElementById('modal-description');
const viewProfileBtn = document.getElementById('view-profile-btn');

// Perfis com dados extras
const profilesData = [
  {
    name: "Juliana",
    age: 24,
    location: "São Paulo, SP",
    description: "Atenciosa, divertida e discreta. Amo boas conversas e novos encontros.",
    image: "https://placehold.co/400x500/374151/ffffff?text=Perfil+1",
    likes: "Cinema, viagens, música pop e noites tranquilas.",
    type: "Homens carinhosos, inteligentes e de boa conversa.",
    availability: "Atendo em São Paulo capital, sob agendamento."
  },
  {
    name: "Mariana",
    age: 29,
    location: "Rio de Janeiro, RJ",
    description: "Educada, elegante e apaixonada por aventuras. Atendimento exclusivo.",
    image: "https://placehold.co/400x500/4b5563/ffffff?text=Perfil+2",
    likes: "Praia, esportes aquáticos e boa gastronomia.",
    type: "Homens confiantes, maduros e generosos.",
    availability: "Disponível no Rio de Janeiro, em local reservado."
  },
  {
    name: "Carla",
    age: 22,
    location: "Belo Horizonte, MG",
    description: "Simpática, espontânea e amorosa. Faço de cada momento uma experiência única.",
    image: "https://placehold.co/400x500/6b7280/ffffff?text=Perfil+3",
    likes: "Filmes românticos, sair com amigos e boa comida mineira.",
    type: "Homens divertidos e sinceros, que saibam valorizar uma boa companhia.",
    availability: "Atendo em Belo Horizonte e região metropolitana."
  },
  {
    name: "Beatriz",
    age: 31,
    location: "Curitiba, PR",
    description: "Mulher madura, decidida e intensa. Companheira ideal para bons momentos.",
    image: "https://placehold.co/400x500/1f2937/ffffff?text=Perfil+4",
    likes: "Vinhos, jazz e viagens de fim de semana.",
    type: "Homens elegantes, discretos e com bom papo.",
    availability: "Atendo em Curitiba, sob agendamento prévio."
  },
  {
    name: "Fernanda",
    age: 26,
    location: "Salvador, BA",
    description: "Sorriso contagiante e um toque de mistério. Encante-se comigo.",
    image: "https://placehold.co/400x500/374151/ffffff?text=Perfil+5",
    likes: "Música, dançar e aproveitar a vida.",
    type: "Homens alegres, respeitosos e que saibam se divertir.",
    availability: "Disponível em Salvador, em horários flexíveis."
  }
];


// Atribui evento a cada card
document.querySelectorAll('.profile-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const profile = profilesData[index];
    if (profile) {
      modalImage.src = profile.image;
      modalName.textContent = profile.name;
      modalAgeLocation.textContent = `${profile.age} anos • ${profile.location}`;
      modalDescription.textContent = profile.description;
      modal.classList.add('show');
    }
  });
});

// Fecha modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Fecha ao clicar fora
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show');
});

// Abre página de perfil completo
viewProfileBtn.addEventListener('click', () => {
  const perfilSelecionado = {
    name: modalName.textContent,
    age: modalAgeLocation.textContent.split(' ')[0],
    location: modalAgeLocation.textContent.split('•')[1]?.trim() || '',
    description: modalDescription.textContent,
    image: modalImage.src
  };
  localStorage.setItem('selectedProfile', JSON.stringify(perfilSelecionado));
  window.location.href = 'perfil.html';
}); 

