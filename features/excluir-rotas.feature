@TestesFuncionalidadeExcluirRota
Feature: Excluir Rota
  Como um usuário do aplicativo TerraPlanner
  Eu quero excluir uma rota entre dois pontos
  Para que eu possa planejar minha viagem ou negócios

  @ExcluirRota
  Scenario: Excluindo rota da pilha de rotas
    Given que estou na página inicial
    When clico no menu sanduíche
    And clico na aba de rotas
    When preencho o endereço de origem com "Ouro Preto, MG"
    And preencho o endereço de destino com "Mariana, MG"
    When clico no botão de adicionar rota
    And clico na aba de pilha rotas
    And clico no botão de lixeira
    Then a rota é excluída da pilha de rotas