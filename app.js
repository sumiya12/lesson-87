// let human = {
//   name: 'Сараа',
//   mendleh: function() {
//     // let that = this;
//     console.log('Сайн байна уу, би бол  ' + this.name);
//     setTimeout(function(){
//       console.log('Намайг ' + this.name + ' гэдэг...');
//     }, 1000);
//   }
// }
// human.mendleh();

window.name = "saraa";

let angi = {
  name: "Програм хангамж",
  info: function () {
    let human1 = {
      name: "Батболд",
      mendleh: () => {
        console.log("Сайн байна уу, би бол  " + this.name);
        setTimeout(
          () => console.log("Намайг " + this.name + " гэдэг..."),
          1000
        );
      },
      hello: function () {
        console.log("Hello " + this.name);
      },
    };

    human1.mendleh();
    human1.hello();
  },
};

angi.info();

// human1.mendleh();
// human1.hello();
