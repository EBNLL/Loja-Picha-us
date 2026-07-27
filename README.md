<p align="center">
  <img src="principal/Gemini_Generated_Image_ttbcifttbcifttbc-removebg-preview.png" alt="Loja-Picha-us" width="900">
</p>

<h1 align="center">🛒 Loja-Picha-us</h1>

<p align="center">
  Sistema de gerenciamento de estoque e loja virtual.
</p>

## 📖 Sobre o projeto

A **Loja-Picha-us** é um sistema web desenvolvido como uma nova loja oficial da Pichau após a indisponibilidade da anterior.

O projeto conta com um sistema completo de autenticação, separação de permissões entre **clientes** e **gerentes**, gerenciamento de estoque e uma área dedicada aos clientes para navegação e compras.

---

# ✨ Funcionalidades

## 👤 Autenticação

- Cadastro de contas de **Cliente** e **Gerente**.
- Login para contas existentes.
- Controle de permissões conforme o tipo de usuário.

---

## 🛠️ Área do Gerente

> Apenas usuários cadastrados como **Gerente** podem acessar e administrar o estoque da loja.

### Funcionalidades disponíveis

- ➕ Adicionar novos produtos.
- ✏️ Atualizar informações de produtos.
  - Nome
  - Marca
  - Preço
  - Quantidade em estoque
- ❌ Remover produtos.
- 📦 Visualizar todo o estoque.

---

## 🛍️ Área do Cliente

Os usuários cadastrados como **Cliente** possuem acesso às seguintes páginas:

### 📦 Produtos

- Visualização de todos os produtos disponíveis na loja.

### ❤️ Favoritos

- Permite marcar produtos como favoritos.
- Os produtos favoritados ficam salvos para o próprio usuário.

### 🛒 Carrinho de Compras

- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Visualizar todos os itens adicionados antes da compra.

---

# 📁 Estrutura do Projeto

> 🚧 O projeto ainda está em desenvolvimento. A estrutura de pastas poderá sofrer alterações conforme novas funcionalidades forem sendo implementadas.

---

# 🚀 Como executar o projeto

## Pré-requisitos

- Git
- Visual Studio Code

### 1. Clone o repositório

```bash
git clone https://github.com/ImDr3ek/Loja-Picha-us.git
```

### 2. Abra a pasta do projeto

```bash
cd Loja-Picha-us
```

### 3. Abra o projeto no Visual Studio Code

```bash
code .
```

### 4. Execute o projeto

Abra o arquivo:

```
login.html
```

Recomenda-se utilizar a extensão **Live Server** do Visual Studio Code para uma melhor experiência durante o desenvolvimento.

---

# 🔒 Controle de Permissões

| Funcionalidade | Cliente | Gerente |
|---------------|:-------:|:--------:|
| Cadastro | ✅ | ✅ |
| Login | ✅ | ✅ |
| Visualizar produtos | ✅ | ✅ |
| Favoritos | ✅ | ❌ |
| Carrinho de compras | ✅ | ❌ |
| Visualizar estoque | ❌ | ✅ |
| Adicionar produtos | ❌ | ✅ |
| Editar produtos | ❌ | ✅ |
| Remover produtos | ❌ | ✅ |

---

# 💻 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

---

# 📌 Objetivo

O objetivo do projeto é desenvolver uma loja virtual funcional utilizando tecnologias web, implementando autenticação, controle de acesso por nível de usuário, gerenciamento de estoque e funcionalidades básicas de um e-commerce.

---

## 👨‍💻 Desenvolvido por

@ImDr3ek / Clientes
@EBNLL / Loguin-Cadastro
@ManinhoGTP / Estoque-Gerenciamento 

Projeto desenvolvido para fins acadêmicos e de aprendizado.
