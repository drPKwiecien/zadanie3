const posts = {
    'gass74': {
      textPart1: 'Najgorszy tor w Hiszpanii',
      textPart2: `Jedno z większych rozczarowań. Na zdjęciach i nawet na żywo tor wygląda zachęcająco (to te szerokie kolorowe tralki) - 
  jest szeroko i mogłoby być fajnie i szybko. Niestety, wózki to złom - brak hamulca jeszcze byłbym w stanie przeżyć, 
  ale brak opon już nie. Wymiana wózka nic nie dała, więc to raczej nie "bad luck". Zatem szczerze nie polecam. Szczególnie za 25e/10min`,
      images: [
        { src: '/pictures/gass1.jpg', alt: 'Image 1' },
        { src: '/pictures/gass2.jpg', alt: 'Image 2' },
      ],
    },
    'karting932': {
      textPart1: 'Fajne elektryczne gokarty',
      textPart2: `Południowcy z oczywistych względów większość torów mają otwartych, a tu nowy zamknięty obiekt - musiałem zatem go odwiedzić 🙂 
  Wózki elektryczne - ja wolę spalinowe, ale te były w perfekcyjnym stanie i zapeniły fajny trening (w elektryku należy unikać całkowitego puszczenia gazu 
      bo wtedy gokart bardzo zwalnia). Byłem tam w sobotę rano, nie było nikogo innego i manager (mimo że nie mówił słowa po angielsku 😉 ) zaproponował mi wspólny race!
       🙂 Wow, uwielbiam ich pasję do tego sportu. Na minus jedynie dość krótka nitka, która pomimo dość ciasnej konfiguracji jest jedynie na 26 sekund.
        Wyobrażam sobie, że przy 8-10 wózkach (szczególnie z przypadkowymi osobami) frajda z jazdy może tam szyko zniknąć.`,
      images: [{ src: '/pictures/alicante1.jpg', alt: 'Image 1' },
      { src: '/pictures/alicante2.jpg', alt: 'Image 2' },], 
    },
    'ikbarcelona': {
      textPart1: 'Ciekawy, techniczny tor',
      textPart2: `Ten tor reklamowany jest jako "najlepszy halowy w Europie".
  Okazał się niezły, ale z pewnością nie najlepszy. Na plus ciekawa angażująca nitka z dwoma rampami (wielopoziomowością bym jednak tego nie nazwał). 
  Na minus - jak niemal wszędzie - losowe wózki (jeden miał walnięty układ kierowniczy). 
  Na 100% Karting Carlos Sainz w Madrycie jest lepszy (ten duży, nie w La Rochas). 
  A o tytuł halowego nr1 w Europie walczy moim zdaniem E1GOKART Gokarty Chorzów - kiedy wreszcie będą tam szybsze wózki`,
      images: [{ src: '/pictures/barcelona1.jpg', alt: 'Image 1' },
      { src: '/pictures/barcelona2.jpg', alt: 'Image 2' },], 
    },
    'krakowWRT': {
        textPart1: 'Gernialna relacja cena/jakość',

        images: [{ src: '/pictures/krakowWRT1.jpg', alt: 'Image 1' },
        { src: '/pictures/krakowWRT2.jpg', alt: 'Image 2' },
        { src: '/pictures/krakowWRT3.jpg', alt: 'Image 3' },], 
      },
  };
  
  export function getPostContent(slug) {
    return posts[slug];
  }
  
  export function getAllPostSlugs() {
    // This would be generated based on the files in your posts directory or via API/database calls.
    return Object.keys(posts).map(slug => {
      return {
        params: {
          post: slug,
        },
      };
    });
  }
  