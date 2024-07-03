// Função para limpar os campos de endereço
function clearCepFields() {
  document.getElementById("address").value = "";
  document.getElementById("complement").value = "";
  document.getElementById("neighborhood").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}

// Função para requisitar dados a API
async function fetchCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const content = await response.json();

    console.log(content);

    if (!("erro" in content)) {
      //Atualiza os campos com os valores
      document.getElementById("address").value = content.logradouro;
      document.getElementById("complement").value = content.complemento;
      document.getElementById("neighborhood").value = content.bairro;
      document.getElementById("city").value = content.localidade;
      document.getElementById("state").value = content.uf;
    }
  } catch (error) {
    console.error("Erro na consulta do cep!");
  }
}

// Função para buscar o endereço com base no CEP
function getAddress(cepValue) {
  let cep = cepValue.replace(/\D/g, "");

  //verifica se o cep possui valor informado
  if (cep != "") {
    console.log(cep);

    //expressão regular para validar o cep
    let cepValidate = /^[0-9]{8}$/;

    //valid o formato do cep
    if (cepValidate.test(cep)) {
      //CEP válido: limpa as mensagens de erro do CEP
      validation.clearErrors("#cep");

      document.getElementById("address").value = "...";
      document.getElementById("complement").value = "...";
      document.getElementById("neighborhood").value = "...";
      document.getElementById("city").value = "...";
      document.getElementById("state").value = "...";

      fetchCep(cep);
    } else {
      validation.showErrors({
        "#cep": ["CEP inválido"], // Mensagem de erro personalizada
      });
    }
  } else {
    // CEP inválido: exibe mensagem de erro do JustValidate
    validation.showErrors({
      "#cep": ["CEP não informado ou inválido!"], // Mensagem de erro personalizada
    });
    //cep sem valor, limpa formulário
    clearCepFields();
  }
}

//===== Máscara CNPJ =====
let handleCnpj = (event) => {
  let input = event.target;
  input.value = cnpjMask(input.value);
};

const cnpjMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  return value;
};
