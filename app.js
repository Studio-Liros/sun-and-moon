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

/*

//Barrar pop up automático de instalação
let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the browser's automatic installation prompt
  event.preventDefault();

  // Save the event so installation can be offered later
  deferredInstallPrompt = event;

  console.log("PWA install prompt saved for later");
});



//funcionalidade do botao de instalar

let deferredInstallPrompt = null;

const installButton = document.querySelector("#install-button");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  deferredInstallPrompt = event;

  //--------- Show your own button instead of the browser's prompt
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;

  //------------------- Trigger the browser's installation dialog on demand
  deferredInstallPrompt.prompt();

  await deferredInstallPrompt.userChoice;

  //------------- This event can only be used once
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

*/

const installButton = document.querySelector("#install-button");

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;

  //------------------- Trigger the browser's installation dialog on demand
  deferredInstallPrompt.prompt();

  await deferredInstallPrompt.userChoice;

  //------------- This event can only be used once
  deferredInstallPrompt = null;
  installButton.hidden = true;
});
