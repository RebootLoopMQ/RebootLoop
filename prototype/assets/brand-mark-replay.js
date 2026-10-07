// Replays the header logo's draw-in animation each time it's hovered, by reloading
// the SVG as a fresh resource (an <img>'s CSS animations only run once per load).
(function () {
  var mark = document.querySelector(".brand-mark img");
  var trigger = document.querySelector(".brand-mark");
  if (!mark || !trigger) return;
  var baseSrc = mark.getAttribute("src").split("?")[0];
  trigger.addEventListener("mouseenter", function () {
    mark.src = baseSrc + "?replay=" + Date.now();
  });
})();
