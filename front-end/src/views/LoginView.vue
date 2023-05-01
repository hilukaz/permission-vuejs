<template>
  <div class="register-form">
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="func">
          <button type="submit" @click.prevent="submitForm" class="bt">Login</button>
          <button type="button" @click.prevent="logout" class="bt">Logout</button>
          <router-link to="/cadastro" class="bt">Cadastro</router-link>
      </div>
    </form>
    <div class="alert" v-show="alert">erro: {{ this.error }} <button  @click.prevent="close" class="close">X</button></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      alert:false,
      error:''
    }
  },
  methods: {
    logout(){
      localStorage.setItem('token', null)
    }
    ,
    submitForm() {
        console.log(this.email+this.password)
      axios.post('http://localhost:3000/login',{//verifica login
        email: this.email,
        password: this.password,
      })
      .then(
          response => {
              if (response.data.fail) {//pega o fail do json; fail===true]
                  //email e password incorretos
                  console.log('erro: '+ response.data.error)//pega o error: do json
                  this.alert=true
                  this.error=response.data.error
              } else {
                  // console.log(response.data.token)//se usuário existir
                  localStorage.setItem('token', response.data.token); //armazena o token no local
                  // axios.defaults.headers[
                  //   "authorization"
                  // ]=`Bearer ${response.data.token}`

                  this.$router.push('/');
                  
              }
          } 
        )
      .catch((error) => {
        console.log(error);
      });
    }
    ,
    close(){
      this.alert=false
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
}
.close{
  background-color: #cf2626;
  border: black;
}
.close:hover{
  background-color: #ccc;
}
.alert{
  position: fixed;
  left: 5px;
  bottom: 1px;
  background-color: #cf2626;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 250px;
}
.bt{
  margin-right: 30px;
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
