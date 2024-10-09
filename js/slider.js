// var slider = tns({
//   container: ".image__slider",
//   items: 6,
//   slideBy: "1",
//   autoplay: false,
//   controlsContainer: "#controls",
//   prevButton: ".prev",
//   nextButton: ".next",
//   nav: false,
//   speed: 300,
//   responsive: {
//     1024: {
//       items: 6,
//     },
//     520: {
//       items: 2,
//     },
//     480: {
//       items: 1,
//     },
//   },
// });

var slider = tns({
  container: ".image__slider",
  items: 6,
  speed: 200,
  gutter: 100,
  slideBy: "1",
  autoplay: false,
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  nav: false,
  responsive: {
    1024: {
      items: 6,
    },
    520: {
      items: 2,
    },
    480: {
      items: 1,
    },
  },
});
