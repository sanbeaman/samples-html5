
var tl1001;
$(document).ready(function() {
//stdPageInit("s1001");

  var s1001_slideheader = $(".slideheader");
    var s1001_slideheadertxt = $(".slideheadertext");
  var s1001_graph01 =$("#s1001_graph01");
    var s1001_graph02 =$("#s1001_graph02");

	var s1001_txt1 = $("#s1001_txt1");
	var s1001_txtR1 = $("#s1001_txtR1");
	var s1001_txtR2 = $("#s1001_txtR2");
	var s1001_txtR3 = $("#s1001_txtR3");
	var s1001_carLine1 = $("#s1001_carLine1");
	var s1001_carLine2 = $("#s1001_carLine2");


	var s1001_car1a = $("#s1001_car1a");
	var s1001_car1b = $("#s1001_car1b");
	var s1001_car2a = $("#s1001_car2a");
	var s1001_car2b = $("#s1001_car2b");
	tl1001 = new TimelineMax();
	////tl1001.add(TweenMax.to("#btn1001JW", 0, {opacity: 0}));


  // tl1001.add(TweenMax.to(s1001_slideheader, 0, {
  //   backgroundPosition: "-1200 px 0"
  //   }));

  /*
  tl1001.add(TweenMax.to(s1001_slideheadertxt, 0, {opacity: 0,
    left: "-500px"}))
  tl1001.add(TweenMax.to(s1001_graph01, 0, {opacity: 0}));
  tl1001.add(TweenMax.to(s1001_graph02, 0, {opacity: 0}));

	tl1001.add(TweenMax.to(s1001_txt1, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_txtR1, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_txtR2, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_txtR3, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_car1a, 0, {opacity: 0}));
  //tl1001.add(TweenMax.to(s1001_car1b, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_carLine1, 0, {opacity: 0}));
  tl1001.add(TweenMax.to(s1001_car1b, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_car2a, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_carLine2, 0, {opacity: 0}));
	tl1001.add(TweenMax.to(s1001_car2b, 0, {opacity: 0}));

  */
//	tl1001.addPause();
  tl1001.to(s1001_slideheader, 3, {
    backgroundPosition: "400px 0",
    ease: Back.easeOut
  });
  tl1001.from(s1001_slideheadertxt, 1, {
            opacity: 0,
            left: "-=500px",
            ease: Power3.easeOut
  }, "-=0.5");

//  tl1001.addPause();

tl1001.from(s1001_graph01, 1, {opacity: 0});

tl1001.from(s1001_txt1, 1, {opacity: 0, top: "+=20", ease: Power3.easeOut});
tl1001.from(s1001_graph02, 1.5, {opacity: 0,
                                ease: Power3.easeOut
                              });

tl1001.from(s1001_car1a, 2, {opacity: 0 }, "carstart");
tl1001.from(s1001_car2a, 2, {opacity: 0 }, "carstart+=0.25");


var tl_car1 = new TimelineMax();
tl_car1.from(s1001_txtR1, 1.0, {opacity: 0, top: "+=20", ease: Power3.easeOut});
tl_car1.from(s1001_car1b, 0.5, {opacity: 0});
tl_car1.to(s1001_car1a, 0.5, {opacity: 0});
tl_car1.from(s1001_carLine1, 0.5, {opacity: 0});

tl_car1.to(s1001_car1b, 1.5, {left: "+=140px", ease: Power3.easeInOut}, "car1amove");
tl_car1.to(s1001_carLine1, 1.5, {width: "+=140px", ease: Power3.easeInOut}, "car1amove");

tl_car1.to(s1001_txtR1, .5, {opacity: 0}, "-=1.0");
tl_car1.from(s1001_txtR2, 1.5, {opacity: 0, left: "-=10", ease: Power3.easeOut}, "-=0.5");

tl1001.add(tl_car1);


var tl_car2 = new TimelineMax();
tl_car2.from(s1001_car2b, 0.5, {opacity: 0});
tl_car2.to(s1001_car2a, 0.5, {opacity: 0});
tl_car2.from(s1001_carLine2, 0.5, {opacity: 0});
tl_car2.to(s1001_car2b, 3, {left: "+=400px", ease: Power3.easeInOut}, "car2start");
tl_car2.to(s1001_carLine2, 3, {width: "+=400px", ease: Power3.easeInOut}, "car2start");
tl_car2.from(s1001_txtR3, 1, {opacity: 0, left: "-=20px"}, "-=0.75");
//	tl1001.add(tl_car2, 48);
tl1001.add(tl_car2);
/*
  tl1001.add(TweenMax.to(s1001_graph01, 1, {opacity: 1}));

	tl1001.add(TweenMax.to(s1001_txt1, 1, {opacity: 1}));
  tl1001.add(TweenMax.to(s1001_graph02, 1, {opacity: 1}));

	tl1001.add(TweenMax.to(s1001_car1a, 2, {opacity: 1}));
	tl1001.add(TweenMax.to(s1001_car2a, 2, {opacity: 1}));
*/

//	tl1001.add(TweenMax.to(s1001_txtR1, 1.5, {opacity: 1}));
//	tl1001.add(TweenMax.to(s1001_txtR1, .5, {opacity: 0}), "+=1");
	// var tl_car1 = new TimelineMax();
  // tl_car1.add(TweenMax.to(s1001_txtR1, 1.5, {opacity: 1}));
	// tl_car1.add(TweenMax.to(s1001_car1b, 0.5, {opacity: 1}));
	// tl_car1.add(TweenMax.to(s1001_car1a, 0.5, {opacity: 0}));
	// tl_car1.add(TweenMax.to(s1001_carLine1, 0.5, {opacity: 1}));
	// tl_car1.add(TweenMax.to(s1001_txtR2, 1.5, {opacity: 1}));
	// tl_car1.add(TweenMax.to(s1001_car1b, 2, {left: "+=140px"}), 2);
	// tl_car1.add(TweenMax.to(s1001_carLine1, 2, {width: "+=140px"}), 2);
  // tl_car1.add(TweenMax.to(s1001_txtR1, .5, {opacity: 0}), "-=1.5");
//	tl1001.add(tl_car1, 18);
//  tl1001.add(tl_car1);
// 	var tl_car2 = new TimelineMax();
// 	tl_car2.add(TweenMax.to(s1001_car2b, 0.5, {opacity: 1}), 0);
// 	tl_car2.add(TweenMax.to(s1001_car2a, 0.5, {opacity: 0}));
// 	tl_car2.add(TweenMax.to(s1001_carLine2, 0.5, {opacity: 1}));
// 	tl_car2.add(TweenMax.to(s1001_car2b, 3, {left: "+=400px"}), 1.5);
// 	tl_car2.add(TweenMax.to(s1001_carLine2, 3, {width: "+=400px"}), 1.5);
// 	tl_car2.add(TweenMax.to(s1001_txtR3, 1, {opacity: 1}));
// //	tl1001.add(tl_car2, 48);
// 	tl1001.add(tl_car2);
  tl1001.play();
});
