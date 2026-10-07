(function () {
  var ticket = document.getElementById("ticket");
  if (!ticket) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  ticket.setAttribute("data-printed", "false");

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      ticket.setAttribute("data-printing", "true");
      ticket.setAttribute("data-printed", "true");
    });
  });
})();
