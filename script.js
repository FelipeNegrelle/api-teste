async function getElements(){
    
    try {
        const resposta = await fetch('http://localhost:1112');
        const dados = await resposta.json();
        mostraDados(dados);
    } catch (error) {
        console.error(error);
    }

    function mostraDados(objeto) {
        let saida = '';
        for (let usuario of objeto) {
            saida += `<li>${usuario.name.official}</li>`;
        }
        document.querySelector('main').innerHTML = saida;
    }
    
}

getElements();