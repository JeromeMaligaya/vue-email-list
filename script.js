const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      randomEmails: [],
    }
  },
  methods: {
    getRandomEmail(){
      axios.get(this.apiUrl)
        .then( response => {
          email = response.data.response;
          this.randomEmails.push({response: email, success: true});
          console.log(this.randomEmails)
        }
      ) 
    },
    printEmail(){
      const emails = setInterval( () => {
        this.getRandomEmail();
        if (this.randomEmails.length === 10) clearInterval(emails)
      }, 150)
    }
  },
  created(){
    this.printEmail() 
  }
}).mount('#app')

/*
studio del dato

data: 
  response: "eva12@gmail.com"
  success: true
*/

// esercizio finito