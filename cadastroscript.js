document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  // Prevenir o envio do formulário
  event.preventDefault();

  // Obter os valores das senhas
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;
  
  // Regex para verificar se a senha tem pelo menos uma maiúscula e uma minúscula
  const regexMaiusculaMinuscula = /[a-z]/ && /[A-Z]/;
  
  // Verificar os requisitos de senha
  if (senha.length < 8 || !regexMaiusculaMinuscula.test(senha)) {
    // Exibir a mensagem de erro para os requisitos da senha
    document.getElementById('erroRequisitos').style.display = 'block';
    return; // Impede o envio do formulário
  } else {
    // Se os requisitos da senha forem atendidos, oculta a mensagem de erro
    document.getElementById('erroRequisitos').style.display = 'none';
  }

  // Verificar se as senhas coincidem
  if (senha !== confirmaSenha) {
    // Exibir a mensagem de erro
    document.getElementById('erroSenha').style.display = 'block';
  } else {
    // Se as senhas coincidirem e os requisitos forem atendidos, o formulário é enviado
    document.getElementById('erroSenha').style.display = 'none';
    alert("Cadastro realizado com sucesso!");
    // Aqui você pode prosseguir com o envio do formulário real, como fazer uma requisição AJAX ou algo similar
    // this.submit(); // Para realmente submeter o formulário
  }
});