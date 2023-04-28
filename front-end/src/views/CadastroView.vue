<template>
    <div class="register-form">
      <form>
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <button type="submit" @click.prevent="submitForm">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {

    data() {
      return {
        name: '',
        password: '',
        email: ''
      }
    },
    methods: {
      async submitForm() {//await é necessário o método async
        // aqui você pode enviar os dados do formulário para o servidor
        // ou fazer outras ações com os dados
        
        axios.post('http://localhost:3000/user',{
        name: this.name,
        email: this.email,
        password: this.password,
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => {
            console.log(error);
        });
        this.$router.push('login');//direciona pra rota login
      }
    }
  }
  </script>
  
  <style scoped>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  label {
    display: block;
    margin-bottom: 4px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
  </style>
  