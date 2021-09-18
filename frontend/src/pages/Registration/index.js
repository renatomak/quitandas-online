import React from 'react';

const Registration = () => (
  <main className="flex-fill">
    <div className="container">
      <h1>Informe seus dados, por favor</h1>
      <hr />
      <form className="mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <fieldset className="row gx-3">
              <legend>Dados Pessoais</legend>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="txtNome"
                  placeholder=" "
                  autofocus
                />
                <label for="txtNome">Nome</label>
              </div>
              <div className="form-floating mb-3 col-md-6 col-xl-4">
                <input
                  className="form-control"
                  type="text"
                  id="txtCPF"
                  placeholder=" "
                />
                <label for="txtCPF">CPF</label>
              </div>
              <div className="form-floating mb-3 col-md-6 col-xl-4">
                <input
                  className="form-control"
                  type="date"
                  id="txtDataNascimento"
                  placeholder=" "
                />
                <label
                  for="txtDataNascimento"
                  className="d-inline d-sm-none d-md-inline d-lg-none"
                >
                  Data Nascimento
                </label>
                <label
                  for="txtDataNascimento"
                  className="d-none d-sm-inline d-md-none d-lg-inline"
                >
                  Data de Nascimento
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Contatos</legend>
              <div className="form-floating mb-3 col-md-8">
                <input
                  className="form-control"
                  type="email"
                  id="txtEmail"
                  placeholder=" "
                />
                <label for="txtEmail">E-mail</label>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  id="txtTelefone"
                />
                <label for="txtTelefone">Telefone</label>
              </div>
            </fieldset>
          </div>
          <div className="col-sm-12 col-md-6">
            <fieldset className="row gx-3">
              <legend>Endereço</legend>
              <div className="form-floating mb-3 col-md-6 col-lg-4">
                <input
                  className="form-control"
                  type="text"
                  id="txtCEP"
                  placeholder=" "
                />
                <label for="txtCEP">CEP</label>
              </div>
              <div className="mb-3 col-md-6 col-lg-8 align-self-end">
                <textarea
                  className="form-control text-muted bg-light"
                  style={{ height: '58px', fontSize: '14px' }}
                  disabled
                >
                  Digite o CEP para buscarmos o endereço.
                </textarea>
              </div>
              <div className="clearfix"></div>
              <div className="form-floating mb-3 col-md-4">
                <input
                  className="form-control"
                  type="text"
                  id="txtNumero"
                  placeholder=" "
                />
                <label for="txtNumero">Número</label>
              </div>
              <div className="form-floating mb-3 col-md-8">
                <input
                  className="form-control"
                  type="text"
                  id="txtComplemento"
                  placeholder=" "
                />
                <label for="txtComplemento">Complemento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="txtReferencia"
                  placeholder=" "
                />
                <label for="txtReferencia">Referência</label>
              </div>
            </fieldset>
            <fieldset className="row gx-3">
              <legend>Senha de Acesso</legend>
              <div className="form-floating mb-3 col-lg-6">
                <input
                  className="form-control"
                  type="password"
                  id="txtSenha"
                  placeholder=" "
                />
                <label for="txtSenha">Senha</label>
              </div>
              <div className="form-floating mb-3 col-lg-6">
                <input
                  className="form-control"
                  id="txtConfirmacaoSenha"
                  placeholder=" "
                />
                <label className="form-label" for="txtConfirmacaoSenha">
                  Confirmação da Senha
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <hr />
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Desejo receber informações sobre promoções.
          </label>
        </div>
        <div className="mb-3 text-left">
          <a className="btn btn-lg btn-light btn-outline-danger" href="/">
            Cancelar
          </a>
          <input
            type="button"
            value="Criar meu cadastro"
            className="btn btn-lg btn-danger"
            onclick="window.location.href='/confirmarcadastro.html'"
          />
        </div>
      </form>
    </div>
  </main>
);

export default Registration;
