import { test } from "e2e/setup/fixtures";

test.describe("Página de Cadastro", () => {
    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
        await paginaCadastro.visitar();
    })
})
