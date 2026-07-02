import { Page, Locator, expect } from "@playwright/test";

export default class PaginaCadastro {

    private readonly page
    private readonly botaoCadastrar: Locator;
    private readonly inputName: Locator;
    private readonly inputDataDeNascimento: Locator;
    private readonly inputCPF: Locator;
    private readonly radioFeminino: Locator;
    private readonly radioMasculino: Locator;
    private readonly radioNaoInformar: Locator;
    private readonly inputTelefone: Locator;
    private readonly inputCidade: Locator;
    private readonly inputEstado: Locator;
    private readonly inputEmail: Locator;
    private readonly confirmEmail: Locator;
    private readonly inputSenha: Locator;
    private readonly confirmSenha: Locator;
    private readonly checkBoxTermo: Locator;
    private readonly botaoConfirmar: Locator;
    inputSenhaLogin: Locator;
    inputEmailLogin: Locator;
    botaoAcessarConta: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoCadastrar = page.getByTestId('header-botao-cadastre-se');
        this.inputName = page.getByTestId('form-base-input-nome');
        this.inputDataDeNascimento = page.getByText('Data de Nascimento');
        this.inputCPF = page.getByTestId('form-base-input-cpf');
        this.radioFeminino = page.getByTestId('form-base-radio-genero-feminino');
        this.radioMasculino = page.getByTestId('form-base-radio-genero-masculino');
        this.radioNaoInformar = page.getByTestId('form-base-radio-genero-nao-informar');
        this.inputTelefone = page.getByTestId('form-base-input-telefone');
        this.inputCidade = page.getByTestId('form-base-input-cidade');
        this.inputEstado = page.getByRole('combobox', { name: 'Estado' });
        this.inputEmail = page.getByTestId('form-base-input-email');
        this.confirmEmail = page.getByText('Confirmar E-mail');
        this.inputSenha = page.getByTestId('form-base-input-senha');
        this.confirmSenha = page.getByTestId('form-base-input-confirmar-senha');
        this.checkBoxTermo = page.getByRole('checkbox', { name: 'Li e aceito os termos e condi' });
        this.botaoConfirmar = page.getByTestId('form-base-botao-submeter-form');
        this.inputEmailLogin = page.getByTestId('input-email');
        this.inputSenhaLogin = page.getByTestId('input-senha');
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');


    }

    async visitarPaginaCadastro() {
        await this.page.goto('/');
        await this.botaoCadastrar.click();

    }

    async verificarPaginaDeCadastro() {
        await expect(this.page).toHaveURL('/auth/cadastro');

    }

    async preencherDadosPessoais(nome: string, datadeNascimento: Date, genero: 'Feminino' | 'Masculino' | 'Prefiro não informar', CPF: string, telefone: string) {

        const dataFormatada = datadeNascimento.toLocaleString('en-US', { dateStyle: 'short' });

        await this.inputName.fill(nome);
        await this.inputDataDeNascimento.fill(dataFormatada);

        if (genero === 'Feminino') {
            await this.radioFeminino.click();
        } else if (genero === 'Masculino') {
            await this.radioMasculino.click();
        } else if (genero === 'Prefiro não informar') {
            await this.radioNaoInformar.click();
        }

        await this.inputCPF.fill(CPF);
        await this.inputTelefone.fill(telefone)

    }

    async preenchimentoDadoEndereçosESenha(cidade: string, estado: string, email: string, senha: string) {

        await this.inputCidade.fill(cidade);
        await this.inputEstado.fill(estado)
        await this.inputEstado.press('Enter');
        await this.inputEmail.fill(email);
        await this.confirmEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.confirmSenha.fill(senha);
    }
    async assinandoTermosEConfirmando() {
        await this.checkBoxTermo.check();
        await this.botaoConfirmar.click();
        await expect(this.page).toHaveURL('/auth/login');

    }
    async fazerLoginDeUsuarioNovo(email: string, senha: string) {
        await this.inputEmailLogin.fill(email);
        await this.inputSenhaLogin.fill(senha);
        await this.botaoAcessarConta.click();
        await expect(this.page).toHaveURL('/home');
    }
}
