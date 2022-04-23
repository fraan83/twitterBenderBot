const quotes = {
  frasi: [
    {
      id: 1,
      frase: "Vaffanchiappola!",
    },
    {
      id: 2,
      frase: "Devo controllare il mio programma. ",
    },
    {
      id: 3,
      frase:
        "Ho frequentato la facoltà per piegatori. Mi sono laureato in piegamento.",
    },
    {
      id: 4,
      frase: " Idioti che fanno regalini ad altri idioti! ",
    },
    {
      id: 5,
      frase: "Una scossa al giorno toglie il tecnico di torno. ",
    },
    {
      id: 7,
      frase:
        "Penso che un robot debba essere svalvolato per voler diventare un cantante folk. ",
    },
    {
      id: 8,
      frase: "Devo controllare il mio programma. ",
    },
    {
      id: 9,
      frase:
        " Ah non c'è posto per Bender, eh? E allora mi costruirò un modulo tutto mio, con blackjack e squillo di lusso! Anzi, senza modulo e senza blackjack.",
    },
    {
      id: 10,
      frase:
        "Voglio stare attento al mio input. Ingurgito solo alcool che è sano e nutriente. L'energia chimica tiene cariche le pile a combustibile.",
    },
    {
      id: 11,
      frase: "Io mi rifiuto di combattere! Sono un obiettore di coscienza!",
    },
    {
      id: 12,
      frase: "Sante rotelle!",
    },
    {
      id: 13,
      frase:
        "È proprio vero quello che dicono: le donne sono di Omicron Perseo 7 e gli uomini di Omicron Perseo 9! ",
    },
    {
      id: 14,
      frase: "Io odio quelli che mi vogliono bene, e loro odiano me.",
    },
    {
      id: 15,
      frase:
        "Lascia perdere, è gay.  Io ho la tecnologia! Il radar che li individua: il gaydar!",
    },
    {
      id: 16,
      frase:
        "Ammettetelo, voi credete che i robot siano macchine costruite da umani per facilitare la loro vita!",
    },
    {
      id: 18,
      frase:
        "È il Robanukah, le due più sacre settimane del calendario robotico.",
    },
    {
      id: 19,
      frase:
        " Mi hanno definito un estremista violento e sanguinario, quando per la prima volta invocai l'annientamento della specie umana insieme a quello delle scimmie più astute ed evolute. Ma dopo aver vissuto sulla Terra posso dirvi con cognizione di causa che sono anche troppo clemente!",
    },
    {
      id: 20,
      frase:
        "Dunque, l'essere umano medio è alto tra i novanta centimetri e i sette metri ed è fatto di un materiale molliccio e peloso avvolto in una T-shirt.",
    },
    {
      id: 21,
      frase: "Oh, cazzuola!",
    },
    {
      id: 22,
      frase:
        "Ah sì? Allora mi costruirò un Luna Park tutto mio, con black jack e squillo di lusso; anzi, senza Luna Park.",
    },
    {
      id: 23,
      frase: "Baciate il mio scintillante fondoschiena metallico!",
    },
    {
      id: 24,
      frase: "Andate a quel pianeta!",
    },
    {
      id: 25,
      frase: "Sono al 4% di zinco!",
    },
    {
      id: 26,
      frase:
        "L'unico motivo per cui acchiappi è perché ti vesti in modo provocante!",
    },
    {
      id: 27,
      frase: "Mi sento solo... Vado ad ingozzarmi di gelato alla crema...",
    },
    {
      id: 28,
      frase:
        "Occhiali-clicca-fortuna. Li ho rubati ad un umanoide fortunato mentre il suo cane guida si era fermato a fare pipi.",
    },
    {
      id: 29,
      frase:
        "Noi robot non possiamo provare emozioni e questo mi rende molto triste.",
    },
    {
      id: 30,
      frase: "A volo d'angelo!",
    },
    {
      id: 31,
      frase: "Io sono Bender, prego inserire floppino.",
    },
  ],
  risposte: [
    {
      id: 1,
      frase:
        "Ehi ${username}, bacia il mio scintillante fondoschiena metallico!",
    },
    {
      id: 2,
      frase:
        "Lascia perdere, ${username} è gay.  Io ho la tecnologia! Il radar che li individua: il gaydar!",
    },
    {
      id: 3,
      frase:
        "Ciao ${username}. Io sono Bender, lo showman robot, o per meglio dire lo showbot!",
    },
    {
      id: 4,
      frase:
        "Va bene  ${username}, ma non voglio che la gente pensi che siamo dei robotsessuali. Perciò se fanno domande tu sei il mio tecnico.",
    },
    {
      id: 5,
      frase: "Ehi ${username}! Non rompermi le valvole!",
    },
    {
      id: 6,
      frase: "Certo, ${username}! Col quarzo!",
    },
    {
      id: 7,
      frase:
        "Ehi ${username}, tieni quella roba alla larga da me! Le calamite sbloccano le mie inibizioni!",
    },
    {
      id: 8,
      frase: "Ciao ${username}! Hai già deciso dove andare?",
    },
    {
      id: 9,
      frase:
        "Ehi ${username}, quello che non faccio non ti deve riguardare! È chiaro?",
    },
    {
      id: 10,
      frase: "Rallenta ${username}, sexy gnocca!",
    },
    {
      id: 11,
      frase: " ${username}, amore, mordicchiami le chiappe!",
    },
    {
      id: 12,
      frase:
        "  Eh, cosa? Non ti ho sentito ${username}, ero troppo occupato a ficcanasare nelle cose col raggio F.",
    },
    {
      id: 13,
      frase:
        " Mi spiace  ${username}, Noi robot non possiamo provare emozioni e questo mi rende molto triste.",
    },
    {
      id: 14,
      frase: "Ehi  ${username}, stai usando la psicologia negativa, eh?",
    },
    {
      id: 15,
      frase:
        " Ah la metti così ${username}? Allora mi costruirò un Twitter tutto mio, con black jack e squillo di lusso; anzi, senza Twitter.",
    },
    {
      id: 16,
      frase: "Ciao ${username}. Io sono Bender, prego, inserire floppino.",
    },
    {
      id: 17,
      frase: "Ehi ${username}, Sei più svitata di mia zia Rita. E lei è una vite...",
    },
    {
      id: 18,
      frase:
        "No ${username}, voglio vivere. Ci sono ancora un sacco di cose che ancora non possiedo.",
    },
    {
      id: 19,
      frase: "Evvai ${username}! Magnifico!",
    },
    {
      id: 20,
      frase: "Ehi ${username}, sono io quello che dice le battute toste!!",
    },
    {
      id: 21,
      frase: "Ebbene sì ${username}. Sono stato io, Bender, il genio del crimine.",
    },
    {
      id: 22,
      frase: "Vogliamo scherzare  ${username}? La mia bisnonna era un buldozeer!",
    },
    {
      id: 23,
      frase: "E andiamo! Grande ${username}!",
    },
    {
      id: 24,
      frase:
        "Amici miei, amici di ${username}, non c'è mai nessun grande amore senza una grande gelosia. Ah, quanto vi amo insaccati miei.",
    },
  ],
};

module.exports = quotes;
