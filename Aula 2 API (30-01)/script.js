function showCatFact(photoId){
    const catFactApiUrl = "https://catfact.ninja/fact?max_lenght=140"

    fetch(catFactApiUrl)
        .then(response => response.json())
        .then(data => {
            const catFact = data.fact; 
            document.getElementById('catFactMessage').innerText = catFact
        })
        .catch(error => {
            console.error("Erro ao obter um fato de um gato")
            document.getElementById('catFactMessage').innerText = "Erro ao obter um fato"
        })
    }