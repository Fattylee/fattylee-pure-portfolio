new Vue({
  el: "#app",
  computed: {
    baba() {
      return 7 + 9;
    },
  },
  data: {
    num: 0,
    myStyle: {
      background: "pink",
      last: "purple",
    },
    name: "abu adnaan",
    age: 33,
    result: "",
    isVisible: true,
    names: ["abdullah", "fattylee", "habhiyolah"],
    employees: [
      { name: "abullah", salary: 234 },
      { name: "fattylee", salary: 983 },
      { name: "lukman", salary: 333 },
    ],
    password: "",
    categories: [
      { name: "Javascript", sub: ["Vue.js", "React", "Angular2"] },
      { name: "Databases", sub: ["MySQL", "PostgreSQL", "MariaDB"] },
      { name: "Operating Systems", sub: ["macOS.js", "Linux", "Windows"] },
    ],
  },
  computed: {},
  methods: {
    calculateHex(value) {
      console.log(value);
      return "#" + this.myStyle.last;
    },
    sum(factor = 0) {
      // alert('Computing sum')
      return this.age + factor;
    },
    keyPressed(tap) {
      const { value } = tap.target;
      console.log("Some keys...", value);
      this.result = value;
    },
    clickMe(msg) {
      console.log("Button clicked!!", msg);
    },
    submitForm(e) {
      console.log("Hello world!");
    },
    shuffle() {
      console.log("Shuffling method");
      const shallowCopy = [...this.employees];
      console.table(shallowCopy);
      const shuffledArray = [];

      for (
        let index = 0, length = shallowCopy.length;
        index < length;
        index++
      ) {
        const randomIndex = Math.floor(Math.random() * shallowCopy.length);
        shuffledArray.push(shallowCopy.splice(randomIndex, 1));
      }
      this.employees.splice(0, 0, ...shuffledArray);
    },
  },
});
