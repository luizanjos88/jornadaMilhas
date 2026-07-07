import { Locator, Page, expect } from "@playwright/test";
import { Genero } from "e2e/specs/operações/gerarPerfil";

export default class PaginaCadastro {
  private readonly page: Page;
  private readonly botaoVisitarPaginaDeCadastro: Locator;
  private readonly inputName: Locator;
  private readonly inputDataDeNascimento: Locator;
  private readonly inputCpf: Locator;
  private readonly inputTelefone: Locator;
  private readonly inputCidade: Locator;
  private readonly inputEstado: Locator;
  private readonly inputEmail: Locator;
  private readonly confirmaEmail: Locator;
  private readonly inputSenha: Locator;
  private readonly confirmSenha: Locator;
  private readonly checkBoxTermo: Locator;
  private readonly botaoConfirmar: Locator;
  private readonly inputSenhaLogin: Locator;
  private readonly inputEmailLogin: Locator;
  private readonly botaoAcessarConta: Locator;
  radioGenero: { [chave in Genero]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.botaoVisitarPaginaDeCadastro = page.getByTestId('header-botao-cadastre-se');
    this.inputName = page.getByTestId('form-base-input-nome');
    this.inputDataDeNascimento = page.getByText('Data de Nascimento');
    this.inputCpf = page.getByTestId('form-base-input-cpf');

    const radioGeneroFeminino = page.getByTestId('form-base-radio-genero-feminino').getByLabel('Feminino');
    const radioGeneroMasculino = page.getByTestId('form-base-radio-genero-masculino').getByLabel('Masculino');
    const radioGeneroNaoInformar = page.getByTestId('form-base-radio-genero-nao-informar').getByLabel('Prefiro não informar');

    this.radioGenero = {
      [Genero.FEMININO]: radioGeneroFeminino,
      [Genero.MASCULINO]: radioGeneroMasculino,
      [Genero.OUTRO]: radioGeneroNaoInformar
    }

    this.inputTelefone = page.getByTestId('form-base-input-telefone');
    this.inputCidade = page.getByTestId('form-base-input-cidade');
    this.inputEstado = page.getByRole('combobox', { name: 'Estado' });
    this.inputEmail = page.getByTestId('form-base-input-email');
    this.confirmaEmail = page.getByText('Confirmar E-mail');
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

  async definirNome(nome: string) {
    await this.inputName.fill(nome);
  }

  async definirDataNascimento(dataDeNascimento: Date) {
    const dataFormatada = dataDeNascimento.toLocaleString('en-US', { dateStyle: 'short' });
    await this.inputDataDeNascimento.fill(dataFormatada);
  }

  async definirGenero(genero: Genero) {
    const radioGenero = this.radioGenero[genero];
    await radioGenero.check();
  }

  async definiirCpf(cpf: string) {
    await this.inputCpf.fill(cpf);
  }

  async definirTelefone(telefone: string) {
    await this.inputTelefone.fill(telefone);

  }

  async definirCidade(cidade: string) {
    await this.inputCidade.fill(cidade);
  }

  async definirEstado(estado: string) {
    await this.inputEstado.fill(estado);
    await this.inputEstado.press('Enter');

  }

  async definirEmail(email: string) {
    await this.inputEmail.fill(email);
  }

  async confirmarEmail(email: string) {
    await this.confirmaEmail.fill(email);
  }

  async definirSenha(senha: string) {
    await this.inputSenha.fill(senha);

  }

  async confirmarSenha(senha: string) {
    await this.confirmSenha.fill(senha);
  }

  async aceitarTermos() {
    await this.checkBoxTermo.check();

  }

  async cadastrarConta() {
    await this.botaoConfirmar.click();
    await expect(this.page).toHaveURL('/auth/login');

  }

  async LoginNovoUsuario(email: string, senha: string) {
    await this.page.goto('/auth/login')
    await this.inputEmailLogin.fill(email);
    await this.inputSenhaLogin.fill(senha);
    await this.botaoAcessarConta.click();
    await expect(this.page).toHaveURL('/home')

  }
  //async estaMostrandoMensagemDeErro(mensagem: string) {

  //const elementoErro = this.page.getByText(mensagem);
  // await expect(elementoErro).toBeVisible();

  // }
}
