new Vue({
  el:'#app',
  data:{
    name:'abu adnaan',
    age:33,
    result:'',
  },
  methods:{
    sum(factor){
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