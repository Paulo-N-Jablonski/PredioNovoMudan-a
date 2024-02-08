function showDuckPhoto(photoId) {
    const duckPhotoApiUrl = 'https://random-d.uk/api/random';

    fetch(duckPhotoApiUrl)
        .then(response => response.json())
        .then(data => {
            const duckPhoto = data.url;
            document.getElementById('duckPhotoUrl').innerText = duckPhoto;
        })
        .catch(error => {
            console.error('Erro ao obter uma imagem de pato:', error);
            
            // Em caso de erro, você pode exibir uma mensagem alternativa ou lidar com a situação de outra forma.
            document.getElementById('duckPhotoUrl').innerText = 'Erro ao obter uma imagem de pato. Tente novamente mais tarde.';
        });
}