import { Locator, Page, expect } from "@playwright/test";

export default class PaginaCadastro {
  private readonly page: Page;
  private readonly botaoVisitarPaginaDeCadastro: Locator;
  private readonly inputName: Locator;
  private readonly inputDataDeNascimento: Locator;
  private readonly inputCpf: Locator;
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
  private readonly inputSenhaLogin: Locator;
  private readonly inputEmailLogin: Locator;
  private readonly botaoAcessarConta: Locator;

  constructor(page: Page) {
    this.page = page;
    this.botaoVisitarPaginaDeCadastro = page.getByTestId('header-botao-cadastre-se');
    this.inputName = page.getByTestId('form-base-input-nome');
    this.inputDataDeNascimento = page.getByText('Data de Nascimento');
    this.inputCpf = page.getByTestId('form-base-input-cpf');
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

  async visitar() {
    await this.page.goto('/');
    await this.botaoVisitarPaginaDeCadastro.click();
    await expect(this.page).toHaveURL('/auth/cadastro');
  }
  async estaMostrandoMensagemDeErro(mensagem: string) {

    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();

  }
}