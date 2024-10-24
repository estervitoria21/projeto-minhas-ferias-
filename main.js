// Seleciona o botão
const button = document.getElementById('changeColorButton');

// Array com cores
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];

// Função para mudar a cor de fundo
button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

