
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => resolve(resposta));
  });
}


async function iniciarLogin() {
  console.log('Bem-vindo ao Sweetly!');
  console.log('Digite seu nome de usuário e senha para continuar.\n');

  const nomeDeUsuario = await perguntar('Nome de usuário: ');
  const senha = await perguntar('Senha: ');

  //verificação
  if (!nomeDeUsuario || !senha) {
    console.log('\nPreencha todos os campos.');
    rl.close();
    return;
  }

  //testando um carregamento 
  console.log('\n Verificando as suas credenciais...');

  setTimeout(() => {
    if (nomeDeUsuario === 'Nome' && senha === 'Senha') {
      console.log('\nLogin realizado com sucesso!');
    } else {
      console.log('\nErro: Credenciais inválidas.');
    }
    rl.close(); 
  }, 1500); 
}

iniciarLogin();
