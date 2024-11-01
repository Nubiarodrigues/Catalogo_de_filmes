🎬 Catálogo de Filmes
Bem-vindo ao Catálogo de Filmes! Esta é uma aplicação simples que permite que você explore um catálogo de filmes através de uma interface, com backend em Django e frontend em React e estilização com CSS.

## ✨ Visão geral

- **Backend**: Django (Python), fornecendo uma API simulada com dados de filmes.
- **Frontend**: React, responsável pela interface e interações do usuário.

---

## 📋 Pré-requisitos

Ferramentas necessárias:

- **Python** (versão 3.6 ou superior)
- **Node.js** e **npm** (para o frontend com React)
- **Git** (para clonar o repositório)

---

## 🚀 Começando

Siga os passos abaixo para configurar e iniciar o projeto em sua máquina local.

### 1. Clonando o repositório

1. Abra o terminal e clone o repositório:
   ```bash
   git clone https://github.com/Nubiarodrigues/Catalogo_de_filmes.git
   
2. Navegue até a pasta do projeto:
   ```bash
   cd seu-repositorio

### 2. Configurando o Backend (Django)

1. Entre na pasta catalogo_backend:
   ```bash
   cd catalogo_backend
   
2. Crie um ambiente virtual:
   ```bash
   python -m venv venv
   
3. Ative o ambiente virtual:
   
   - **No Windows**: 
     ```bash
     venv\Scripts\activate
     ```
   - **No Linux**: 
     ```bash
     source venv/bin/activate
     ```     
5. Instale as dependências do projeto:
   ```bash
   pip install -r requirements.txt
   
6. Realize as migrações para configurar o banco de dados:
   ```bash
   python manage.py migrate
   
7. Incie o servidor Django:
   ```bash
   python manage.py runserver

O servidor estará rodando em:
  ```bash
  http://127.0.0.1:8000
  ```
### Configurando o Frontend (React)

1. Navegue para a pasta catalogo_frontend:
  ```bash
  cd ../catalogo_frontend
  ```
2. Instale as dependências do projeto react:
 ```bash
  npm install
 ```
3. Incie o servidor de desenvolvimento do react:
 ```bash
  npm start
 ```
O frontend estará disponível em:
 ```bash
  http://localhost:3000

