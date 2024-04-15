@TestesFuncionalidadeTracarRota
Feature: Traçar Rota
  Como um usuário do aplicativo TerraPlanner
  Eu quero traçar uma rota entre dois pontos
  Para que eu possa planejar minha viagem

  Background:
    Given que estou na página inicial
    When clico no menu sanduíche
    And clico na aba de rotas
  
  @AdicionandoCamposManualmente
  Scenario: Adicionando campos manualmente
    Given preencho o endereço de origem com "Ouro Preto, MG"
    And preencho o endereço de destino com "Mariana, MG"
    Then a rota será traçada no mapa

  # @AdicionandoCamposAtravesDoBotaoPin
  # Scenario: Adicionando campos através do botão de pin
  #   Given clico no botão pin referente ao endereço de origem
  #   And clico em um ponto específico no mapa para o endereço de origem
  #   And clico no botão pin referente ao endereço de destino
  #   And clico em um ponto específico no mapa para o endereço de destino
  #   Then a rota será traçada no mapa

