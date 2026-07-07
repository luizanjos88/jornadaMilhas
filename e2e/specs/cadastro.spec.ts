import { test } from "e2e/setup/fixtures";
import { Perfil, gerarPerfil } from "./operações/gerarPerfil";


test.describe("Página de Cadastro", () => {

    let novoUsuario: Perfil;

    test.beforeEach(async ({ paginaCadastro }) => {
        await paginaCadastro.visitar();

        novoUsuario = gerarPerfil();

    });

    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {

        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.cadastroRealizadoComSucesso();
        await paginaCadastro.LoginNovoUsuario(novoUsuario.email, novoUsuario.senha);
    });
    test("Não deve conseguir fazer cadastro com email duplicado", async ({ paginaCadastro }) => {

        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.cadastroRealizadoComSucesso();

        await paginaCadastro.visitar();
        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.estaMostrandoMensagemDeErro('E-mail já utilizado');


    })
})
