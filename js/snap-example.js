$(function() {
  var s = Snap("#svg");
  var gear = s.group();
  gear.add(s.circle(275, 275, 200).attr({
    fill: "#333"
}));
  gear.add(s.circle(275, 275, 160).attr({
    fill: "#fff"
}));
  for (var i = 0; i <= 360; i += 45) {
    gear.add(s.rect(225, 20, 80, 80).attr({
      fill: "#333",
      transform: "rotate(" + i + ", 275, 275)"
    }));
}

function rotateGear() {
    gear.animate({
      transform: "rotate(360, 275, 275)"
    }, 3000, function() {
      // reset the transformation so the animation can start again
      gear.attr({
        transform: "r0, 275, 275"
      });
      // rerun the animation
      rotateGear();
    });
}
  rotateGear();

});
