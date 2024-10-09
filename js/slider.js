// var slider = tns({
//   container: ".image__slider",
//   items: 6,
//   speed: 200,
//   slideBy: "1",
//   autoplay: false,
//   containerControls: "#controls",
//   prevButton: ".prev",
//   nextButton: ".next",
//   nav: false,
// });

var slider = tns({
  container: ".image__slider",
  items: 6,
  speed: 200,
  slideBy: "1",
  autoplay: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  nav: false,
  responsive: {
    1250: {
      items: 6,
    },
    200: {
      items: 1,
    },
  },
});
