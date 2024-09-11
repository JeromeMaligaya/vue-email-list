const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      randomEmails: []
    }
  },
  methods: {
    getRandomEmail(){
      axios.get(this.apiUrl)
        .then( response => {
          email = response.data.response;
          this.randomEmails.push({email});
          console.log(this.randomEmails)
        }
      ) 
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