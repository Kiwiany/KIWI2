const form = document.getElementById('contatoForm');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    resposta.style.color = 'red';
    resposta.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  // Simular envio
  resposta.style.color = 'green';
  resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

  form.reset();
});
