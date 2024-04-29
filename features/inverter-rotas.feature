@TestesFuncionalidadeInverterRota
Feature: Inverter Rota
  Como um usuário do aplicativo TerraPlanner
  Eu quero inverter uma rota entre dois pontos
  Para que eu possa planejar melhor minha viagem

  Background:
    Given que estou na página inicial
    When clico no menu sanduíche
    And clico na aba de rotas
    When preencho o endereço de origem com "Ouro Preto, MG"
    And preencho o endereço de destino com "Mariana, MG"
  
  @InverterRotaInseridaManualmente
  Scenario: inverter campos adicionados manualmente  
    And clico no botão para inverter a rota traçada 
    Then os campos de origem e destino traçados estarão invertidos

  @InverterRotaSelecionandoDaPilhaDeRotas
  Scenario: inverter campos adicionados através da pilha de rotas
    Given clico no botão de adicionar rota
    Given clico na aba de pilha rotas
    And clico em uma rota da pilha de rotas
    And clico no botão para inverter a rota carregada
    Then os campos de origem e destino carregados estarão invertidos