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

  var STALL = 350;   // el motor arranca antes de mover papel
  var FEED = 850;    // avance del papel, a tirones
  var SETTLE = 170;  // el papel ya ha salido, justo antes del tiron

  // Cuanto papel hay que sacar para cubrir la pantalla; el resto queda por
  // debajo del pliegue y se completa de golpe al rasgar, sin que se note.
  var visible = (window.innerHeight * 1.08) / ticket.offsetHeight;
  ticket.style.setProperty("--feed-stop", Math.max(0, 100 - visible * 100) + "%");

  ticket.setAttribute("data-stage", "hidden");

  if (window.gsap) {
    gsap.set(ticket, { y: 34 });
  }

  setTimeout(function () {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        ticket.setAttribute("data-stage", "feeding");
        if (window.gsap) {
          gsap.to(ticket, { y: 0, duration: FEED / 1000, ease: "steps(26)" });

        }
      });
    });
  }, STALL);

  setTimeout(function () {
    ticket.setAttribute("data-stage", "torn");
    if (window.gsap) {
      gsap
        .timeline()
        .to(ticket, { y: -6, duration: 0.06, ease: "power2.in" })
        .to(ticket, { y: 0, duration: 0.3, ease: "back.out(2)" });
    }
  }, STALL + FEED + SETTLE);
})();
