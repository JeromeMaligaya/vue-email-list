const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    }
  },
  methods: {
    getRandomEmail(){
      axios.get(this.apiUrl)
        .then( response => console.log(response))
      
    }
  },
  mounted(){
    this.getRandomEmail()
  }
}).mount('#app')

/*
studio del dato

data: 
  response: "eva12@gmail.com"
  success: true
*/