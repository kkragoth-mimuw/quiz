const questions = [
  {
    question: 'Czym są prawa człowieka?',
    answers: [
      {
        label:
          'prawa, które przysługują każdej jednostce bez wyjątku. Wywodzą się one z koncepcji filozofów Oświecenia. Obejmują zarówno kwestie socjalne (prawo do pracy, zamieszkania, pożywienia, itd.), jak i polityczne (np . wolność słowa i poglądów, ochrona przed niewolą i torturami). Wszystkie państwa w Europie, z wyjątkiem kilku najmniejszych lub najmłodszych, podpisały Europejską Deklarację Praw Człowieka oraz Deklarację Praw Człowieka Narodów Zjednoczonych.',
        correct: true,
      },
      {
        label:
          'autorskie prawa majątkowe (ang. copyright) to monopol praw majątkowych na rzecz autora utworu lub posiadacza praw (który najczęściej uzyskał te prawa na mocy umowy z autorem)',
      },
      {
        label:
          'gałąź prawa obejmująca zespół norm prawnych regulujących stosunki między podmiotami prawa prywatnego, stanowiąca zarazem trzon prawa prywatnego',
      },
    ],
  },
  {
    question: 'Czym jest równość?',
    answers: [
      {
        label:
          'Inaczej: zasada ograniczenia zakresu ingerencji władz państwa w sferę praw zastrzeżonych do kompetencji organów wyłanianych przez mniejszości polityczne. Dzięki autonomii politycznej władze nie mają pełnej kontroli oraz nie mogą ingerować, wtrącając się do praw zastrzeżonych przez ludzi wyłonionych przez mniejszość polityczną.',
      },
      {
        label:
          'stan, w którym ludzie są równi. Oznacza to, że żadna jednostka nie jest więcej warta od drugiej, bez względu na pochodzenie czy status społeczny. Oczywiście, nie oznacza to, ze wszyscy są czy powinni być identyczni, ale że mają te same prawa i równe szanse rozwoju w pracy i edukacji, zależne tylko od ich własnych starań. Równość będzie faktem tylko wtedy, kiedy wszyscy będą mieli równy dostęp do zamieszkania, opieki społecznej, praw człowieka i obywatela.',
        correct: true,
      },
      {
        label:
          'niezależność państwa od formalnego i nieformalnego wpływu innych jednostek politycznych.',
      },
    ],
  },
  {
    question: 'Tolerancja:',
    answers: [
      {
        label:
          'zdolność do samodzielnego, niezależnego od innych podmiotów, sprawowania władzy politycznej nad określonym terytorium',
      },
      {
        label:
          'oznacza poszanowanie i akceptowanie różnorodnych kultur i sposobów bycia. Tolerancja to stan harmonii przy jednoczesnej różnorodności. Rozwija się dzięki wiedzy, otwartości, komunikacji, wolności myśli i słowa. Tolerancja oznacza, że możesz być sobą, jednocześnie nie narzucając niczego innym. Tolerancja nie zmusza do bierności, to przede wszystkim postawa aktywna, możliwa dzięki zaakceptowaniu uniwersalnych praw człowieka i niezbywalnej wolności innych, bycie tolerancyjnym nie oznacza akceptacji społecznej niesprawiedliwości albo osłabiania własnych przekonań.',
        correct: true,
      },
      {
        label:
          'stan emocjonalny, który wyraża w świadomości uczucia całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. Jest uczuciem towarzyszącym przy wykonywaniu pracy fizycznej jak i umysłowej, działaniom twórczym lub rekreacyjnym, rozwiązywaniu zadań o umiarkowanym stopniu trudności.',
      },
    ],
  },
  {
    question: 'Nietolerancja:',
    answers: [
      {
        label:
          'brak szacunku dla cudzych praktyk lub przekonań. Objawia się w niedopuszczaniu zachowań czy poglądów różnych od własnych. Nietolerancja oznacza, że ludzie mogą być traktowani niesprawiedliwie z powodu swoich przekonań religijnych, orientacji seksualnej czy nawet fryzury i ubioru. Nietolerancja nie akceptuje różnic. Leży ona u korzeni rasizmu, ksenofobii i ogólnie dyskryminacji. Może często prowadzić do przemocy.',
        correct: true,
      },
      {
        label:
          'podstawowa wartość hedonistyczna o charakterze pozytywnym, będąca doświadczeniem zmysłowym o charakterze indywidualnym, przeciwieństwo nieprzyjemności',
      },
      {
        label:
          'jeden z elementów ludzkiego zdrowia, definiowanego nie tylko na podstawie negatywnych mierników stanu zdrowia (brak choroby lub\n' +
          'niepełnosprawności), lecz również jako subiektywnie postrzegane przez człowieka zadowolenie z fizycznego, psychicznego i społecznego stanu własnego życia.',
      },
    ],
  },
  {
    question: 'Uprzedzenie:',
    answers: [
      {
        label:
          'okazywanie innym jednostkom i samemu sobie identyfikacji (utożsamiania się) z jakimiś elementami rzeczywistości społecznej.',
      },
      {
        label:
          ' świadomość samego siebie, zdawanie sobie sprawy z doświadczanych aktualnie doznań, emocji, potrzeb, myśli, swoich możliwości, czy ograniczeń, autokoncentracja uwagi. Jest to także pojmowanie, idea samego siebie.\n',
      },
      {
        label:
          'jeśli wyrabiasz sobie opinię o nieznanej ci osobie na podstawie domniemanych cech grupy społecznej, do której ona należy, wtedy jesteś uprzedzony. Uprzedzenia to złożone zbiory przesądów, przyjmowane za prawdę bez udowodnienia ich prawdziwości. Jeśli stają się stałym elementem czyichś przekonań, nazywane są stereotypami.\n',
        correct: true,
      },
    ],
  },
  {
    question: 'Ksenofobia:',
    answers: [
      {
        label:
          'fobia, objawiająca się bardzo silnym lękiem przed pająkami lub innymi bezkręgowcami zbliżonymi do nich wyglądem. Jest to jedna z najczęściej występujących fobii.',
      },
      {
        label:
          ' w sensie dosłownym ksenofobia to lęk przed obcymi. Oznacza wrogość wobec ludzi pochodzących z innych krajów lub grup etnicznych oraz brak szacunku dla ich tradycji i kultur.',
        correct: true,
      },
      {
        label:
          'znaczny strach lub lęk, dotyczący specyficznej sytuacji lub obiektu (np. latania, wysokości, zastrzyków, krwi, zwierząt). Sytuacje związane z fobią niemal zawsze i natychmiastowo wywołują strach lub lęk.',
      },
    ],
  },
  {
    question: 'Rasizm:',
    answers: [
      {
        label:
          'pogląd, że ktoś może być lepszy od innych z powodu przynależenia do pewnej rasy. Rasiści definiują rasy jako grupy ludzi o wspólnym pochodzeniu. Rozróżniają rasy na podstawie cech fizycznych, takich jak kolor skóry. Prawda jest jednak taka, że nie ma zasadniczych różnic między rasami, a w każdym razie takich, które mogłyby mieć jakieś specjalne znaczenie. Ostatnie badania wykazują, że rasa jest\n' +
          'pojęciem wyobrażonym i nie ma naukowych podstaw na gruncie biologii. Pojęcie rasizmu jest też używane na określenie obraźliwych czy agresywnych zachowań wobec mniejszości. Rasizm przybiera rożne formy w różnych krajach. Nauka wyszczególnia tylko jedną rasę, rasę ludzką.',
        correct: true,
      },
      {
        label:
          'duma z przynależności do określonego narodu. Jest związany z emocjonalnym nastawieniem względem swego kraju, kultury i historii. Nie wyklucza to przyjaznego nastawienia i poszanowania innych krajów i narodowości',
      },
      {
        label:
          'według psychoanalizy skupia wyobrażenia, które są nieakceptowane przez świadomość i między innymi z tego względu nie mogą zostać uświadomione. Zachowują jednak duży ładunek energetyczny, dzięki czemu stale próbują przedostać się do świadomości. Efektem tych dążeń mają być takie akty psychiczne jak marzenia senne, objawy nerwicowe (np. lęki, natręctwa, objawy konwersyjne), przejęzyczenia i czynności pomyłkowe.',
      },
    ],
  },
  {
    question: 'Antysemityzm',
    answers: [
      {
        label:
          'uprzedzenie skierowane przeciwko Żydom . Antysemici twierdzą, że Żydzi fundamentalnie różnią się od innych, pragną rządzić światem poprzez ogólnoświatowy spisek. Ta forma ksenofobii i nietolerancji prowadzi do dyskryminacji zarówno pojedynczych Żydów, jak i całych społeczności żydowskich. Do najbardziej skrajnych skutków antysemityzmu należało nazistowskie ludobójstwo (Holokaust, Szoa) w czasie II wojny światowej.',
        correct: true,
      },
      {
        label:
          'postawa sprzeciwu wobec ideologii i praktyki syjonizmu. Ten punkt widzenia charakteryzuje różne grupy o zróżnicowanych motywach, m.in. środowiska komunistyczne, anarchistyczne, pewne środowiska żydowskie i przeważającą część organizacji palestyńskich, a także środowiska antysemickie, np. nacjonalistów arabskich i fundamentalistów islamskich.',
      },
      {
        label:
          'ruch polityczny i społeczny, dążący do odtworzenia żydowskiej siedziby narodowej na terenach starożytnego Izraela, będących w okresie międzywojennym mandatem Wielkiej Brytanii (Brytyjski Mandat Palestyny), doprowadził do powstania państwa Izrael w 1948. Współcześnie jego celem jest także utrzymanie jedności narodu żydowskiego żyjącego w rozproszeniu i jego więzi z Izraelem.\n',
      },
    ],
  },
  {
    question: 'Faszyzm:',
    answers: [
      {
        label:
          'doktryna polityczna głosząca zjednoczenie wszystkich ludów arabskojęzycznych. Jego początki wiążą się z rozwojem arabskiego nacjonalizmu w XIX wieku. Ruch ten przyczynił się do powstania w 1945 roku Ligi Państw Arabskich.',
      },
      {
        label:
          'oparty na przemocy skrajnie prawicowy ruch polityczny, realizujący się w pełni w reżimie dysponującym aparatem terroru. Faszyzm rekrutuje swych zwolenników ze wszystkich grup społecznych, szczególnie w okresach politycznych i ekonomicznych kryzysów. Neguje wartości demokratyczne i zakłada dyskryminację mniejszości narodowych i ludzi o odmiennych poglądach. Faszyści wierzą w rządy silnej ręki, odrzucając demokrację parlamentarną. Faszyzm bazuje na nacjonalizmie, który często przeradza się w rasizm. W naszych czasach istnieją grupy, organizacje i partie będące kontynuatorami tej ideologii; są one określane jako neofaszystowskie.',
        correct: true,
      },
      {
        label:
          'polityczna i ekonomiczna ideologia klasyfikowana jako utopijna, której celem jest utworzenie społeczeństwa pozbawionego ucisku i wyzysku klasowego, opartego na braku własności prywatnej, kolektywnej własności środków produkcji i wspólnotowym podziale dóbr. W pismach Karola Marksa, Fryderyka Engelsa i innych teoretyków marksizmu jest przyszłym ustrojem rozwiniętych społeczeństw, w którym wspólnota własności obejmować będzie przede wszystkim środki produkcji. Jako ideologia zaczął się krystalizować już od XV wieku, gdy przyjmował postać komunizmu utopijnego, który głosił hasła likwidacji nierówności społecznych i prywatnej własności.\n',
      },
    ],
  },
  {
    question: 'Nazizm:',
    answers: [
      {
        label:
          'oznacza również sposób zarządzania oparty na wspólnej własności środków produkcji i pogląd uzasadniający celowość takiego sposobu gospodarowania,, jest powszechny w państwach słabo rozwiniętych i zaliczanych do krajów trzeciego świata (np. Gwatemala, Kolumbia, Pakistan, Ekwador), nie sprzyja tam rozwojowi gospodarki i jest powiązany z zacofaniem gospodarczym państwa. Istnieją kraje, jak Japonia, Singapur i Hongkong, które pomimo średniego poziomu kolektywizacji są dobrze rozwinięte gospodarczo i tworzą produkty o wysokiej jakości.',
      },
      {
        label:
          'nauczanie Kościoła katolickiego w kwestiach odnoszących się do zbiorowych problemów społeczności lub też całej ludzkości. Nauczanie to może być przedstawiane pod trzema określeniami: „społeczna nauka Kościoła” lub „doktryna społeczna Kościoła” oraz „nauczanie społeczne Kościoła”. Powstanie nauki społecznej Kościoła jest związane z encykliką Leona XIII Rerum novarum, która była odpowiedzią na zachodzące w XIX wieku przemiany społeczno- polityczne związane z powstaniem nowoczesnych społeczeństw.',
      },
      {
        label:
          'ideologia i praktyka polityczna faszyzmu niemieckiego, cechująca się rasizmem, antysemityzmem, totalitaryzmem, demagogią, agresywnością i poczuciem wyższości nad innymi narodami.\n' +
          'Słowo ,,nazizm” pochodzi od wyrażenia „narodowy socjalizm”, będącego określeniem ruchu politycznego kierowanego przez NSDAP (Narodowo-Socjalistyczna Niemiecka Partia Robotnicza). NSDAP została założona w 1919 roku, zaś w 1933 przejęła pełnię władzy w Niemczech. Została określona jako organizacja zbrodnicza podczas procesu w Norymberdze. Reżim nazistowski jest odpowiedzialny za śmierć milionów cywilów, z których część została zagazowana w obozach zagłady z powodu swej domniemanej niższości rasowej . Szczególnie prześladowane grupy to Żydzi, a także Romowie, homoseksualiści oraz komuniści i socjaliści. Do dziś istnieją zwolennicy nazizmu i są określani jako neonaziści.',
        correct: true,
      },
    ],
  },
  {
    question: 'Homofobia:',
    answers: [
      {
        label:
          'społeczny lek przed homoseksualistami. Mówiąc ogólnie, ludzie ogarnięci homofobią oceniają kogoś tylko na podstawie jego orientacji seksualnej. Homoseksualiści byli prześladowani przez wiele stuleci, zaś w wielu krajach w tej kwestii nic się nie zmieniło.',
        correct: true,
      },
      {
        label:
          'termin wieloznaczny z zakresu teorii prawa, oznaczający uporządkowany układ powiązanych ze sobą elementów (najczęściej norm prawnych). Pojęcie to obejmuje: systemy prawa poszczególnych państw, gałęzi prawa i źródeł prawa.',
      },
      {
        label:
          'gałąź prawa obejmująca zespół norm prawnych regulujących stosunki między podmiotami prawa prywatnego, stanowiąca zarazem trzon prawa prywatnego.',
      },
    ],
  },
  {
    question: 'Naród:',
    answers: [
      {
        label:
          'określenie każdej wspólnoty etnicznej niezależnie od wielkości, stopnia wewnętrznego zorganizowania lub typu etnicznej tożsamości, która wyodrębnia się wśród innych sąsiadujących z nią grup charakterystyczną kulturą. W latach 60. XX wieku był niezwykle popularny w etnografii sowieckiej.',
      },
      {
        label:
          'grupa ludzi zamieszkująca obszar danego państwa, odróżniająca się od większości społeczeństwa językiem, kulturą, pochodzeniem etnicznym bądź religią.',
      },
      {
        label:
          'grupa ludzi skłonna do postrzegania siebie jako zwartej wspólnoty, opartej na wspólnych korzeniach, wspólnej historii i zwykle wspólnym terytorium. Narody nie są tworami biologicznymi czy naturalnymi, ale umownymi, istniejącymi tylko w umysłach ludzkich, co nie oznacza, że są nierealne. Nowoczesna koncepcja narodów jest relatywnie świeża, pochodzi bowiem z XIX wieku.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nacjonalizm:',
    answers: [
      {
        label:
          'ideologia polityczna przedkładająca interesy jednego narodu nad interesy innych narodów, a także twierdząca, że więzi narodowe są ważniejsze od wszystkich innych, takich jak np. rodzina czy przyjaźń. Nacjonalizm uznaje przedstawicieli jednego narodu za lepszych od innych, co często owocuje podejrzliwością i ksenofobią. Skrajną formą nacjonalizmu jest szowinizm.',
        correct: true,
      },
      {
        label:
          'proces określający całokształt zmian społecznych i psychicznych, jakim ulegają jednostki, odłączając się od swojej grupy i przystosowując się do życia w innej grupie o odmiennej kulturze.\n',
      },
      {
        label:
          'termin stosowany w naukach społecznych (m.in. antropologia, etnologia, pedagogika, psychologia, socjologia) oraz naukach o zarządzaniu (m.in. zarządzanie międzykulturowe, kultura organizacji) na określenie zjawisk zachodzących na styku kultur pomiędzy ludźmi (jednostkami i grupami).\n',
      },
    ],
  },
  {
    question: 'Patriotyzm:',
    answers: [
      {
        label:
          'strategia separacji polegająca na odrzuceniu nowej, obcej kultury, przyjmująca charakter całkowitej hermeneutyczności, nieprzemakalności kultury własnej, co skutkuje izolowaniem się i tworzeniem zamkniętych enklaw „obcych”. Potwierdza słuszność ich naznaczenia w społeczności przyjmującej.',
      },
      {
        label:
          'polega na tym, że społeczeństwo determinuje sposoby zaspokajania potrzeb przez jednostkę. Stosuje ono jeden, albo zaledwie kilka sposobów, które przyswaja dana osoba i je realizuje w swoim życiu. Staje się w ten sposób zdolną do powielania tych metod i wynajdywania środków w otoczeniu do zaspokajania własnych potrzeb. Zresztą grupa nie pozostawia zbytniego marginesu swobody w wyborze tych środków i stosowaniu określonych sposobów.\n',
      },
      {
        label:
          'patriotyzm to duma z przynależności do określonego narodu. Jest związany z emocjonalnym nastawieniem względem swego kraju, kultury i historii . Nie wyklucza to przyjaznego nastawienia i poszanowania innych krajów i narodowości. Chociaż patriotyzm to nie to samo, co nacjonalizm, może stać się jego podłożem.',
        correct: true,
      },
    ],
  },
  {
    question: 'Internacjonalizm:',
    answers: [
      {
        label:
          'charakteryzuje się trwałym wzorcem lekceważenia i łamania norm społecznych oraz praw innych ludzi.',
      },
      {
        label:
          'sposób postrzegania świata, według którego prawa człowieka, ludzkie życie i godność są ważniejsze od podziałów narodowych zakłada, że nie ma żadnych zasadniczych różnic między narodami. Konsekwencją tego podejścia jest zwalczanie nacjonalizmu.',
        correct: true,
      },
      {
        label:
          'cecha osobowości, polegająca m.in. na braku uczuć wyższych, instrumentalnym traktowaniu innych i chłodnych relacjach interpersonalnych.',
      },
    ],
  },
  {
    question: 'Wielokulturowość:',
    answers: [
      {
        label: 'współistnienie różnych kultur w jednym kraju',
        correct: true,
      },
      {
        label:
          'postawa ujawniająca się przy zetknięciu z innymi kulturami, polegająca na uznawaniu własnego narodu lub grupy etnicznej za szczególnie wartościową oraz na wywyższaniu własnej kultury, którą traktuje się jako miernik w ocenianiu innych grup, co prowadzi często do postaw niechęci, a nawet wrogości\n',
      },
      {
        label:
          'twierdzenie o wyższości, niezwykłości danego narodu, a przez to jego szczególnej misji dziejowej i posłannictwa wobec innych narodów.',
      },
    ],
  },
];

export default questions;

