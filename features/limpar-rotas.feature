@TestesFuncionalidadeLimparRota
Feature: Limpar Rota
  Como um usuário do aplicativo TerraPlanner
  Eu quero limpar uma rota entre dois pontos
  Para que eu possa planejar minha viagem

  Background:
    Given que estou na página inicial
    When clico no menu sanduíche
    And clico na aba de rotas
    When preencho o endereço de origem com "Ouro Preto, MG"
    And preencho o endereço de destino com "Mariana, MG"
  
  @LimparRotaInseridaManualmente
  Scenario: Limpar campos adicionados manualmente  
    And clico no botão para limpar a rota manual 
    Then os campos de origem e destino manuais estarão vazios

  @LimparRotaSelecionandoDaPilhaDeRotas
  Scenario: Limpar campos adicionados através da pilha de rotas
    Given clico no botão de adicionar rota
    Given clico na aba de pilha rotas
    And clico em uma rota da pilha de rotas
    And clico no botão para limpar a rota selecionada
    Then os campos de origem e destino selecionados estarão vazios