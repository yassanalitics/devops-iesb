async function fetchCat() {
    const url = 'https://api.thecatapi.com/v1/images/search'; 
    const imgElement = document.getElementById('cat-image');
    const errorElement = document.getElementById('error-message');

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erro ao conectar com a API');
        }

        const data = await response.json(); // Converte para JSON
        
        // Extrai o link da imagem da estrutura do JSON
        imgElement.src = data[0].url; 
        imgElement.style.display = 'block';
        errorElement.innerText = '';

    } catch (error) {
        // Mensagem de erro amigável
        errorElement.innerText = 'Não foi possível carregar o gatinho agora. Tente novamente!';
        imgElement.style.display = 'none';
    }
}

// Executa ao carregar a página
window.onload = fetchCat;