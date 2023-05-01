<template>

    <html>
        <head>
            <title>Perfil de Usuário</title>
        </head>
        <body>
            <PerfilUser v-bind="{ name,email,company }"/>
            
        </body>
    </html>

</template>

<script>
    // const token = localStorage.getItem('token');
    import axios from '../components/axiosConfig.ts'//arquivo de configuração do axios
    import PerfilUser from '../components/Perfil.vue'
    export default{
        name:'perfilone',
        components:{
            PerfilUser,
        },
        data(){
            return{
              name:this.name,
              email:this.email,
              company:this.company,
              
                
                // perfil:this.perfil
            }
        },
        mounted () {
            const token = localStorage.getItem('token')
            axios
            .get('http://localhost:3000/perfil'
            )
            .then(response => (
                // this.perfil=response.data,
                this.name=response.data.name,
                this.email=response.data.email,
                this.company=response.data.company
                ))
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
            // console.log('aa')
            // console.log(this.perfil)
        }
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