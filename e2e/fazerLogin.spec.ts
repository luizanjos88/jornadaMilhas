import { test } from './page-objects/PaginaLogin';

test.describe("Página de Login", () => {
  test("Deve conseguir fazer login com email e senha válidos", async ({ paginaLogin }) => {
    await paginaLogin.fazerLogin('luizanjos88@gmail.com', '123456');
    await paginaLogin.loginFeitoComSucesso();
  });

  test("Não deve conseguir fazer login com email inválido", async ({ paginaLogin }) => {
    await paginaLogin.fazerLogin('luizerrado@gmail.com', '123456');
    await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
  });
});
