<template>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Perfil de Usuário</title>
    </head>
    <body>
        <div class="profile">
        <img src="https://via.placeholder.com/150" alt="Foto de perfil">
        <h1>{{name}}</h1>

        <ul>
            <li><strong>Email:</strong> {{email}}</li>
            <li v-show=false><strong>Empresa:</strong> {{ company }}</li>
        </ul>
        </div>
    </body>
    </html>

</template>

<script>
    // const token = localStorage.getItem('token');
    import axios from './axiosConfig.ts'//arquivo de configuração do axios
    export default{
      name:'Perfil',
        data(){
            return{

                // perfil:this.perfil
            }
        },
        props:{
            name: String,
            email: String,
            company:String
        },
        
    }
    
</script>

<style scoped>
    body {
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
}

.profile {
  margin: 0 auto;
  width: 50%;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #dcdcdc;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;
}

.profile h1 {
  margin: 0;
  font-size: 36px;
  color: #333;
}

.profile p {
  margin-top: 0;
  font-size: 18px;
  color: #666;
}

.profile ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.profile li {
  margin-bottom: 10px;
  font-size: 18px;
  color: #666;
}

.profile li strong {
  font-weight: bold;
  margin-right: 10px;
  color: #333;
}

</style>