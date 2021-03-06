import React from 'react';

export default function Footer() {
  return (
    <footer class="border-top text-muted bg-light">
      <div class="container">
        <div class="row py-3">
          <div class="col-12 col-md-4 text-center">
            &copy; 2020 - Quitanda Online Ltda ME
            <br />
            Rua Virtual Inexistente, 171, Compulândia/PC <br />
            CPNJ 99.999.999/0001-99
          </div>
          <div class="col-12 col-md-4 text-center">
            <a href="/privacy-policy" class="text-decoration-none text-dark">
              Política de Privacidade
            </a>
            <br />
            <a href="/terms-of-use" class="text-decoration-none text-dark">
              Termos de Uso
            </a>
            <br />
            <a href="/who-we-are" class="text-decoration-none text-dark">
              Quem Somos
            </a>
            <br />
            <a href="/exchanges-retuns" class="text-decoration-none text-dark">
              Trocas e Devoluções
            </a>
          </div>
          <div class="col-12 col-md-4 text-center">
            <a href="/contact" class="text-decoration-none text-dark">
              Contato pelo Site
            </a>
            <br />
            E-mail:{' '}
            <a
              href="mailto:email@dominio.com"
              class="text-decoration-none text-dark"
            >
              email@dominio.com
            </a>
            <br />
            Telefone:{' '}
            <a href="phone:28999990000" class="text-decoration-none text-dark">
              (28) 99999-0000
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
