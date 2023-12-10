
function inserirPacote() {
    var destino = document.getElementById('destino').value;
    var imagem = document.getElementById('imagem').value;
    var duracao = document.getElementById('duracao').value;
    var inclusos = document.getElementById('inclusos').value.split('\n');
    var preco = document.getElementById('preco').value;

    var novoPacote = document.createElement('div');
    novoPacote.className = 'roteiros-viagens';

    var img = document.createElement('img');
    img.src = imagem;
    img.alt = 'Imagem do novo destino';

    var divDestino = document.createElement('div');
    divDestino.className = 'roteiro-destino';
    divDestino.textContent = destino;

    var ulInclusos = document.createElement('ul');
    ulInclusos.className = 'roteiro-incluso';
    inclusos.forEach(function (itemTexto) {
        var li = document.createElement('li');
        li.textContent = itemTexto;
        ulInclusos.appendChild(li);
    });

    var divPreco = document.createElement('div');
    divPreco.className = 'roteiro-preco';
    divPreco.textContent = preco;

    var buttonComprar = document.createElement('button');
    buttonComprar.className = 'roteiro-comprar';
    buttonComprar.textContent = 'Comprar';

    novoPacote.appendChild(img);
    novoPacote.appendChild(divDestino);
    novoPacote.appendChild(ulInclusos);
    novoPacote.appendChild(divPreco);
    novoPacote.appendChild(buttonComprar);

    var containerDestinos = document.getElementById('containerDestinos');
    containerDestinos.appendChild(novoPacote);

    document.getElementById('formulario').reset();
}
