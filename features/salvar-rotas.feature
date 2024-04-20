@TestesFuncionalidadeSalvarRota
Feature: Salvar Rota
  Como um usuário do aplicativo TerraPlanner
  Eu quero traçar e salvar uma rota entre dois pontos
  Para que eu possa planejar minha viagem ou negócios

  @SalvandoRotasComEnderecosInseridosManualmente
  Scenario: Salvando rota com endereços inseridos manualmente
    Given que estou na página inicial
    When clico no menu sanduíche
    And clico na aba de rotas
    And preencho o endereço de origem com "Ouro Preto, MG"
    And preencho o endereço de destino com "Mariana, MG"
    When clico no botão de adicionar rota
    Then a rota será adicionada em pilha de rotas