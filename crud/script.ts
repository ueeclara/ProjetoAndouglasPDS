const form = document.getElementById('produtoForm') as HTMLFormElement;
const categoriaSelect = document.getElementById('categoriaSelect') as HTMLSelectElement;
const nomeInput = document.getElementById('nomeInput') as HTMLInputElement;
const precoInput = document.getElementById('precoInput') as HTMLInputElement;
const descricaoInput = document.getElementById('descricaoInput') as HTMLInputElement;
const produtosBody = document.getElementById('produtosBody') as HTMLTableElement;
const apiUrl = 'https://649a1d4a79fbe9bcf8404b5a.mockapi.io/users/20201214010022/products';

// Definindo a interface para o objeto Produto
interface Produto {
  id: string;
  categoria: string;
  nome: string;
  preco: string;
  descricao: string;
}

// Criar um novo produto
function criarProduto(event: Event) {
  event.preventDefault();

  const produto: Produto = {
    categoria: categoriaSelect.value,
    nome: nomeInput.value,
    preco: precoInput.value,
    descricao: descricaoInput.value,
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(produto),
  })
    .then((response) => response.json())
    .then((data: Produto) => {
      adicionarProdutoTabela(data);

      categoriaSelect.value = '';
      nomeInput.value = '';
      precoInput.value = '';
      descricaoInput.value = '';
    })
    .catch((error) => {
      console.log('Erro ao criar o produto:', error);
    });
}

// Adicionar um produto à tabela
function adicionarProdutoTabela(produto: Produto) {
  const row = document.createElement('tr');
  row.setAttribute('data-id', produto.id);
  row.innerHTML = `
    <td>${produto.categoria}</td>
    <td>${produto.nome}</td>
    <td>R$ ${produto.preco}</td>
    <td>${produto.descricao}</td>
    <td class="actions">
      <button onclick="editarProduto('${produto.id}')"><i class='bx bx-edit' ></i></button>
      <button onclick="excluirProduto('${produto.id}')"><i class='bx bx-trash'></i></button>
    </td>
  `;
  produtosBody.appendChild(row);
}

// Carregar produtos
function carregarProdutos() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data: Produto[]) => {
      data.forEach((produto) => {
        adicionarProdutoTabela(produto);
      });
    })
    .catch((error) => {
      console.log('Erro ao carregar os produtos:', error);
    });
}

// Excluir um produto
function excluirProduto(id: string) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        const row = document.querySelector(`#produtosBody tr[data-id="${id}"]`);
        if (row) {
          row.remove();
        }
      } else {
        console.log('Erro ao excluir o produto:', response.status);
      }
    })
    .catch((error) => {
      console.log('Erro ao excluir o produto:', error);
    });
}

// Editar um produto
function editarProduto(id: string) {
  const categoria = prompt('Nova categoria:');
  const nome = prompt('Novo nome:');
  const preco = prompt('Novo preço:');
  const descricao = prompt('Nova descrição:');

  const produto: Produto = {
    categoria,
    nome,
    preco,
    descricao,
  };

  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(produto),
  })
    .then((response) => response.json())
    .then((data: Produto) => {
      const row = document.querySelector(`#produtosBody tr[data-id="${id}"]`);
      if (row) {
        row.innerHTML = `
          <td>${data.categoria}</td>
          <td>${data.nome}</td>
          <td>${data.preco}</td>
          <td>${data.descricao}</td>
          <td class="actions">
            <button onclick="editarProduto('${data.id}')">Editar</button>
            <button onclick="excluirProduto('${data.id}')">Excluir</button>
          </td>
        `;
      }
    })
    .catch((error) => {
      console.log('Erro ao editar o produto:', error);
    });
}

carregarProdutos();

form.addEventListener('submit', criarProduto);
