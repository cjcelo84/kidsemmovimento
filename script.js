document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  if (form) {
    // Máscara para data de nascimento
    const nascimento = document.getElementById('nascimento');
    nascimento.addEventListener('input', () => {
      let valor = nascimento.value.replace(/\D/g, '');
      if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
      if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
      nascimento.value = valor;
    });

    // Máscara para telefone
    const telefone = document.getElementById('telefone');
    telefone.addEventListener('input', () => {
      let valor = telefone.value.replace(/\D/g, '');
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d{5})(\d{4})$/, '$1-$2');
      telefone.value = valor;
    });

    // Ao submeter o formulário
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const novaCrianca = {
        nome: document.getElementById('nome').value,
        nascimento: document.getElementById('nascimento').value,
        idade: document.getElementById('idade').value,
        modalidade: document.getElementById('modalidade').value,
        pai: document.getElementById('pai').value,
        mae: document.getElementById('mae').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value
      };

      const dados = JSON.parse(localStorage.getItem('criancas')) || [];
      dados.push(novaCrianca);
      localStorage.setItem('criancas', JSON.stringify(dados));

      alert('Cadastro realizado com sucesso!');
      form.reset();
    });
  }
});
