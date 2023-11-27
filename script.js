


const lettereM = document.querySelectorAll('g > g path'); // Seleziona tutte le lettere "M"
  const numDaAnimare = 100; // Numero di lettere "M" da animare
  let lettereDaAnimare = []; // Array delle lettere "M" da animare
  let indiceCorrente = 0; // Indice corrente nell'array delle lettere animate

  function animazioneCiclica() {
    if (indiceCorrente < numDaAnimare) {
      const letteraCorrente = lettereDaAnimare[indiceCorrente];
      letteraCorrente.setAttribute('opacity', 1);
      indiceCorrente++;
      setTimeout(animazioneCiclica, 50);
    } else if (indiceCorrente >= numDaAnimare && indiceCorrente < lettereDaAnimare.length * 2) {
      const indiceScomparsa = lettereDaAnimare.length * 2 - indiceCorrente - 1;
      const letteraScomparsa = lettereDaAnimare[indiceScomparsa];
      letteraScomparsa.setAttribute('opacity', 0);
      indiceCorrente++;
      setTimeout(animazioneCiclica, 50);
    } else {
      indiceCorrente = 0; // Resetta l'indice per ricominciare l'animazione
      setTimeout(animazioneCiclica, 100); // Intervallo tra un ciclo e l'altro (1 secondo)
    }
  }

  while (lettereDaAnimare.length < numDaAnimare) {
    const indiceCasuale = Math.floor(Math.random() * lettereM.length);
    const lettera = lettereM[indiceCasuale];
    if (!lettereDaAnimare.includes(lettera)) {
      lettereDaAnimare.push(lettera);
      lettera.setAttribute('opacity', 0);
    }
  }

  animazioneCiclica();


  function cambiaStileConScroll() {
    var header = document.getElementById('testa');
    var button = document.getElementById('bottone');
    var testoSottoHeader = document.getElementById('testoSottoHeader');
    var headerHeight = header.offsetHeight;

    // Aggiungi un listener per il cambiamento dello scroll
    window.addEventListener('scroll', function () {
      // Verifica se la posizione di scroll supera l'altezza dell'header
      if (window.scrollY > headerHeight) {
        // Modifica lo stile quando lo scroll raggiunge il main
        header.style.backgroundColor = 'white';
        button.style.backgroundColor = '#2ecc71';
       
      } else {
        // Ripristina lo stile iniziale quando si è sopra l'header
        header.style.backgroundColor = '#ffc017'; 
        button.style.backgroundColor = '#black';
        
      }
    });
  }

  // Chiamata alla funzione al caricamento della pagina
  window.onload = function () {
    cambiaStileConScroll();
  };