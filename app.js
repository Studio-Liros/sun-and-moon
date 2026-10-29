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

      var versionText = document.querySelector("p");
      versionText.classList.toggle("blackP");
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



// Barrar pop up automatico de instalaçao do pwa
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
 
  e.preventDefault();
  
  deferredPrompt = e;
});



// Configurar botao de instalaçao (Android)
const installButton = document.querySelector("#install-button");

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  //------------------- Trigger the browser's installation dialog on demand
  deferredPrompt.prompt();

  await  deferredPrompt.userChoice;

  //--------------------- This event can only be used once
   deferredPrompt = null;
  installButton.hidden = true;
});



//Instalar no iOS (share window)
const installButton2 = document.querySelector("#install-button-2");
const shareData = {
  text: "Install App Now!",
};

installButton2.addEventListener("click", async () => {
    try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
})
