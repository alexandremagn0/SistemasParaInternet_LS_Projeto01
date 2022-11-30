import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './styles.css';


function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary bg-gradient sticky-top d-flex">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand link-light me-auto navItem" href="*">
              Descarte Certo João Pessoa
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link link-light px-3 navItem" href="*">
                  Página inicial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-light px-3 navItem" href="*">
                  Contato
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-light px-3 navItem" href="*">
                  Sobre nós
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-light px-3 navItem" href="*">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="callout" id="callout">
        <div class="container px-4 px-lg-5 text-center d-flex align-items-center">
          <div>
            <h2 class="mx-auto mb-4">Descarte certo João Pessoa</h2>
            <h5>Esta página tem por finalidade trazer a conhecimento público os pontos de descarte de lixo eletrônico na cidade de João Pessoa. Devido a pouco interesse do serviço público municipal, não há uma lista oficial atualizada destes pontos. Assim, convidamos a população pessoense para contribuir com a formação de uma lista extraoficial com os pontos de coleta ativos. Verifique a lista abaixo e contribua com algum ponto que conheça.</h5>
            <a class="btn btn-primary btn-xl mt-4" href="#portfolio">Conhecer</a>
          </div>
          <div>
            <img id="imagemMain" src="../public/img/7.png" alt="Lixo eletrônico e seus impactos socioambientais"/>
          </div>
            <h4>Sua fonte de informação sobre descarte apropriado <br/> de lixo eletrônico na cidade de João Pessoa.</h4>
        </div>
      </section>

      <section class="content-section" id="portfolio">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">Lista completa</h3>
                    <h2 class="mb-5">Pontos de descarte</h2>
                    <form class="d-flex mb-3 form-inline" role="search">
                        <input class="form-group me-1" type="search" placeholder="Pesquisar por rua, cidade ou UF" aria-label="Search"/>
                        <button class="btn btn-primary" type = "submit">Pesquisar</button>
                    </form>
                </div>
                <div class="row gx-0" id="inserirAqui">
                </div>
                <p class="source">Fonte: Prefeitura de João Pessoa.</p>
            </div>
      </section>

      <section class="content-section bg-primary text-white">
        <div class="container px-4 px-lg-5 text-center">
          <h2 class="mb-4">Encontrou alguma informação desatualizada?</h2>
          <div class="container mt-3">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
              <a class="btn btn-light btn-xl" href="#!">Sugerir atualização</a>
            </button>
            <div class="modal" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                      <h4 class="modal-title text-primary">Informe o novo ponto de descarte</h4>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>  
                  <div class="modal-body text-primary d-flex flex-column mb-3">
                    <label class="form-label" for="nome">Nome do local: </label>
                    <input
                      type="text"
                      id="nome"
                      placeholder="IFPB CAMPUS JOÃO PESSOA"
                      />
                    <label class="form-label" for="endereco">Endereço: </label>
                    <input
                      type="text"
                      id="endereco"
                      placeholder="Av. Primeiro de Maio, 720 - Jaguaribe"
                      />
                    <label class="form-label" for="complemento">Complemento: </label>
                    <input
                      type="text"
                      id="complemento"
                      placeholder="Próximo à feira de Jaguaribe"
                      />
                    <label class="form-label" for="contato">Contato: </label>
                    <input
                      type="text"
                      id="contato"
                      placeholder="(83) 00000-0000"
                      />
                  </div>
                  <div class="modal-footer">
                    <button id="inserir" type="button" class="btn btn-success" data-bs-dismiss="modal">Adicionar novo ponto de descarte</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
