import { test } from "e2e/setup/fixtures";
import { gerarPerfil } from "./operações/gerarPerfil";

test.describe("Página de Cadastro", () => {
    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {

        await paginaCadastro.visitar();

        const novoUsuario = gerarPerfil();
        const nomeAleatorio = novoUsuario.nome;
        const dataDeNascimento = novoUsuario.dataNascimento;
        const cpf = novoUsuario.cpf;
        const telefone = novoUsuario.telefone;
        const cidade = novoUsuario.cidade;
        const estado = novoUsuario.estado;
        const email = novoUsuario.email;
        const senha = novoUsuario.senha;
        const genero = novoUsuario.genero;

        await paginaCadastro.definirNome(novoUsuario.nome);
        await paginaCadastro.definirDataNascimento(dataDeNascimento);
        await paginaCadastro.definirGenero(genero);
        await paginaCadastro.definiirCpf(cpf);
        await paginaCadastro.definirTelefone(telefone);
        await paginaCadastro.definirCidade(cidade);
        await paginaCadastro.definirEstado(estado);
        await paginaCadastro.definirEmail(email);
        await paginaCadastro.confirmarEmail(email);
        await paginaCadastro.definirSenha(senha);
        await paginaCadastro.confirmarSenha(senha);
        await paginaCadastro.aceitarTermos();
        await paginaCadastro.cadastrarConta();
        await paginaCadastro.LoginNovoUsuario(email, senha);
    })
})
