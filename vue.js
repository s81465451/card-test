const app = new Vue({
  el: "#app",
  data: {
    name: "Sophie Wu",
    work: "ThinkPower Engineer",
    date: "20/02/15 by Sophie",
    imgClass: "img-box",
    imgSrc: "./images/homepage_deco01.png",
    inputText: "",
    inputColor: ''
  },
  methods: {
    btnClick() {
      this.work = this.inputText;
      this.inputText = "";
    }
  }
});