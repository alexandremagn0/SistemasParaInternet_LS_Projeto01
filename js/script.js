//Atendendo ao requisito de importação modular:
import { lista } from "./data.js";

let container = document.getElementById('inserirAqui')

//Atendendo ao requisito de programação funcional (array method map):
function carregarLista () {
    const locais = lista ?? lista.load(itens)
    locais.map((local) => inserirItem(local))
}

//Atendendo ao requisito de criação de um componente dinâmico:
function inserirItem (lista) {
    const insercao = `
    <div class="col-lg-6">
        <a class="portfolio-item" href="#!">
            <div class="caption">
                    <div class="caption-content">
                        <div class="h2">${lista.nome}</div>
                        <p class="mb-0">${lista.endereco}</p>
                        <p class="mb-0">${lista.complemento}</p>
                        <p class="mb-0">${lista.contato}</p>
                    </div>
                    </div>
                        <img class="img-fluid" src="${lista.imagem}" alt="..." />
                        </a>
                    </div>
    `

    container.insertAdjacentHTML("afterbegin", insercao)
}

carregarLista()

function inserirNovoItem () {
    let nome = document.getElementById('nome').value
    let endereco = document.getElementById('endereco').value
    let complemento = document.getElementById('complemento').value
    let contato = document.getElementById('contato').value
    const novaLista = `
    <div class="col-lg-6">
        <a class="portfolio-item" href="#!">
            <div class="caption">
                    <div class="caption-content">
                        <div class="h2">${nome}</div>
                        <p class="mb-0">${endereco}</p>
                        <p class="mb-0">${complemento}</p>
                        <p class="mb-0">${contato}</p>
                    </div>
                    </div>
                        <img class="img-fluid" src="./assets/img/1.jpg" alt="..." />
                        </a>
                    </div>`

    container.insertAdjacentHTML('afterbegin', novaLista)
    console.log(novaLista)
}

let inserir = document.getElementById('inserir')
inserir.addEventListener('click', inserirNovoItem)