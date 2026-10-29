//funcionalidade base (exibir sol ou lua)
const toggle = document.querySelector("button");

    toggle.addEventListener("click", () => {
      const isOn = document.body.classList.toggle("is-on");
      toggle.setAttribute("aria-pressed", String(isOn));

      var sun = "./sun.png";
      var moon = "./moon.png";
      var image = document.querySelector("img");

      console.log(image.src);

      if (image.getAttribute("src") === "./moon.png") {
        image.setAttribute("src", "./sun.png");
      } else {
        image.setAttribute("src", "./moon.png");
      }
    });

//registrar service worker
    if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(function() {
                console.log("service worker registered")
            })
            .catch(function(err) {
                console.log("service worker not registered", err)
            })
    })
}

// This variable will save the event for later use.
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  // Your own UI doesn't have to be a single element, you
  // can have buttons in different locations, or wait to prompt
  // as part of a critical journey.
 // showInAppInstallPromotion();
});

const installButton = document.querySelector("#install-button");

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  //------------------- Trigger the browser's installation dialog on demand
  deferredPrompt.prompt();

  await  deferredPrompt.userChoice;

  //------------- This event can only be used once
   deferredPrompt = null;
  installButton.hidden = true;
});
