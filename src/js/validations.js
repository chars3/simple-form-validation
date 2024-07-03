const validation = new window.JustValidate("#basic_form");

validation
  .addField("#company", [
    {
      rule: "required",
      errorMessage: "Razão Social é obrigatória",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email é obrigatório",
    },
    {
      rule: "email",
      errorMessage: "Email inválido",
    },
  ])
  .addField("#cnpj", [
    {
      rule: "required",
      errorMessage: "CNPJ é obrigatório",
    },
    {
      rule: "minLength",
      value: 18,
      errorMessage: "CNPJ deve ter 14 dígitos",
    },
    {
      rule: "maxLength",
      value: 18,
      errorMessage: "CNPJ deve ter 14 dígitos",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Telefone é obrigatório",
    },
    {
      rule: "number",
      errorMessage: "Telefone deve conter apenas números",
    },
  ])
  .addField("#cep", [
    {
      rule: "required",
      errorMessage: "CEP é obrigatório",
    },
    {
      rule: "number",
      errorMessage: "CEP deve conter apenas números",
    },
  ])
  .addField("#address", [
    {
      rule: "required",
      errorMessage: "Endereço é obrigatório",
    },
  ])
  .addField("#number", [
    {
      rule: "required",
      errorMessage: "Número é obrigatório",
    },
  ])
  .addField("#neighborhood", [
    {
      rule: "required",
      errorMessage: "Bairro é obrigatório",
    },
  ])
  .addField("#city", [
    {
      rule: "required",
      errorMessage: "Cidade é obrigatória",
    },
  ])
  .addField("#state", [
    {
      rule: "required",
      errorMessage: "Estado é obrigatório",
    },
    {
      rule: "maxLength",
      value: 2,
      errorMessage: "Estado deve ter 2 letras",
    },
    {
      rule: "required",
      errorMessage: "Estado deve estar em letras maiúsculas",
    },
  ])
  .addField("#connections", [
    {
      rule: "required",
      errorMessage: "Número de Conexões é obrigatório",
    },
    {
      rule: "number",
      errorMessage: "Número de Conexões deve ser um número",
    },
  ])
  .addField("#users", [
    {
      rule: "required",
      errorMessage: "Número de Usuários é obrigatório",
    },
    {
      rule: "number",
      errorMessage: "Número de Usuários deve ser um número",
    },
  ]);
