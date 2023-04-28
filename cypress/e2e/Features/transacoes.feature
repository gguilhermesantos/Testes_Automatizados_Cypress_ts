Feature: Testando transações no site

Scenario: Adicionar transação de entrada
  Given acesso o site
  And clico no botao de "adicionar" transacao
  When preencho dados de "entrada"
  Then verifico que o dado foi "inserido"

Scenario: Adicionar transação de saida
  Given acesso o site
  And clico no botao de "adicionar" transacao
  When preencho dados de "saida"
  Then verifico que o dado foi "inserido"

Scenario: Editar transação
  Given acesso o site
  And crio uma transacao
  And clico no botao de "editar" transacao
  When preencho dados de "saida reescrita"
  Then verifico que o dado foi "alterado"

Scenario: Deletar transação
  Given acesso o site
  And crio uma transacao
  When clico no botao de "deletar" transacao
  Then verifico que o dado foi "deletado"