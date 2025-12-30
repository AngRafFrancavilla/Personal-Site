export const projects = [
    {
      title: "Gioco Punti Attacco",
      description: "Ho scritto un piccolo programma in java in cui in maniera Random il personaggio ha un tot di punti attacco , la console stampa il nome del personaggio, i punti attacco e i punti salute.",
      url: "https://github.com/AngRafFrancavilla/giocoEasy"
    },
    {
      title: "Connessione al DataBase",
      description: "Questo repository contiene un programma Java che si connette a un database MySQL, esegue query per leggere i dati da una tabella e li stampa in console. Il programma permette anche di aggiungere nuovi record al database inserendo nome e cognome.",
      url: "https://github.com/AngRafFrancavilla/EsercizioDB"
    },
    {
      title: "GestioneDipendenti",
      description: "Il programma gestisce un'azienda con diversi tipi di dipendenti, inclusi amministratori, dirigenti, progettisti e stagisti. Permette di inserire nuovi stagisti, pensionare dipendenti con oltre 35 anni di anzianità, assumere stagisti con almeno 100 ore di stage e stampare i dati e gli stipendi netti dei dipendenti.",
      url: "https://github.com/AngRafFrancavilla/GestioneDipendenti"
    },
    {
      title: "MS1-BackEnd",
      description: "MS1 è il servizio principale. Ho utilizzato Spring Boot con Spring Security per gestire l’autenticazione tramite JWT, Spring Data JPA e MySQL per la persistenza dei dati.I ruoli sono USER e ADMIN. Gli endpoint principali includono: registrazione e login, CRUD dei titoli con paginazione e filtri, creazione recensioni, approvazione e verifica. Le tabelle sono relazionate tra loro, in particolare gli utenti e i titoli sono collegati alle recensioni. La paginazione è gestita tramite Pageable di Spring",
      url: "https://github.com/AngRafFrancavilla/MS1_Back-End"
    },
    {
      title: "MS2-BackEnd",
      description: "MS2 è stato una parte aggiuntiva che ho scelto di realizzare per completare l’architettura richiesta. È sviluppato in Node.js con Express e MongoDB tramite Mongoose. La caratteristica principale è un cron job che ogni minuto interroga MS1, legge tutte le recensioni approvate, calcola la media dei voti e il numero di recensioni per ogni titolo e salva tutto su MongoDB in modalità upsert.Mongo è ideale per questo tipo di aggregazioni leggere e aggiornamenti frequenti perché è molto flessibile e veloce.",
      url: "https://github.com/AngRafFrancavilla/MS2_Back-End"
    },
    {
      title: "MSC-FrontEnd",
      description: "Il frontend è stato sviluppato in Angular 16 standalone, quindi senza moduli, con componenti più leggeri e moderni.Ho realizzato diverse sezioni: la homepage, la lista dei titoli con paginazione e filtri, la pagina dei rating con media + recensioni pubbliche, login e registrazione, e infine un’area admin per la moderazione. La comunicazione avviene tramite HttpClient e l’autenticazione usa un interceptor che aggiunge automaticamente il JWT nelle chiamate protette.Ho usato sessionStorage per gestire la sessione utente.",
      url: "https://github.com/AngRafFrancavilla/MSC_Front-End"
    },

  ];