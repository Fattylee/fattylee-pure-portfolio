new Vue({
  el:'#app',
  data:{
    myStyle:{
background:'pink',
last:'purple'
    },
    name:'abu adnaan',
    age:33,
    result:'',
    isVisible:true,
    names:['abdullah','fattylee','habhiyolah'],
    employees:[{name:'abullah',salary:234},{name:'fattylee',salary:983},{name:'lukman',salary:333}],
    password:'',

    categories:[
      {name:'Javascript',sub:['Vue.js','React','Angular2']},
      {name:'Databases',sub:['MySQL','PostgreSQL','MariaDB']},
      {name:'Operating Systems',sub:['macOS.js','Linux','Windows']}
    ],
  },
  computed:{
  },
  methods:{
    calculateHex(value){
  console.log(value)
  return '#'+this.myStyle.last
},
    sum(factor=0){
      // alert('Computing sum')
      return this.age+factor;
    },
    alert(){
      console.log('see me');
      alert(7);
    },
    keyPressed(tap){
const {value}=tap.target;
      console.log('Some keys...',value)
      this.result=value;
    },
    clickMe(event){
      console.log('Button clicked!!')
    },
   submitForm(e){
     console.log('Hello world!')
   } 
  }
})