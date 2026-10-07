(function () {
  if (window.JsBarcode) {
    JsBarcode("#barcode", "https://github.com/claudia-ortegamartin", {
      format: "CODE128",
      lineColor: "#16293a",
      width: 1,
      height: 34,
      displayValue: false,
      margin: 0,
    });
  }

  var ticket = document.getElementById("ticket");
  if (!ticket) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  ticket.setAttribute("data-printed", "false");

  // Pausa de arranque, como el motor de una impresora de tickets antes de empezar a sacar papel.
  setTimeout(function () {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        ticket.setAttribute("data-printing", "true");
        ticket.setAttribute("data-printed", "true");
      });
    });
  }, 450);
})();
