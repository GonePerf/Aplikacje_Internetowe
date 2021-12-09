let firstNames = ['Jan', 'Marek', 'Kamil', 'Bogusław', 'Wiktoria', 'Franciszek', 'Patrycja', 'Tomasz', 'Mirosław', 'Mieczysław', 
                    'Katarzyna', 'Bogusława', 'Barbara', 'Mateusz', 'Krystyna', 'Katarzyna', 'Krzysztof', 'Piotr', 'Paweł',
                    'Przemek', 'Grzegorz', 'Dawid', 'Daria', 'Dominik', 'Dorota', 'Dariusz', 'Dorian', 'Edward', 'Ewa', 'Ewelina',
                    'Fabian', 'Filip', 'Fryderyk', 'Gabriel', 'Grzegorz', 'Helena', 'Henryk', 'Irena', 'Iza', 'Izabela', 'Izydor',
                    'Jacek', 'Jan', 'Jarosław', 'Jerzy', 'Julia', 'Julian', 'Juliusz', 'Kamil', 'Katarzyna', 'Kazimierz', 'Kornel',
                    'Janina', 'Jerzy', 'Kuba', 'Łukasz', 'Maciej', 'Marian', 'Mariusz', 'Marta', 'Martyna', 'Michał', 'Mieczysław'];

let lastNames = ['Kowalski', 'Nowak', 'Kowalczyk', 'Kozłowski', 'Wójcik', 'Kamiński', 'Kaczmarek', 'Kowal', 'Kozak', 'Nowak', 
                    'Wojciechowski', 'Woźniak', 'Lewandowski', 'Abram', 'Abramowicz', 'Bąk', 'Biel', 'Bielak', 'Bielecki', 'Biernacki',
                    'Błaszczyk', 'Borek', 'Borowski', 'Borowiec', 'Bosak', 'Bosowski', 'Będkowski', 'Cebula', 'Chmielewski', 'Chmura',
                    'Chojnacki', 'Chojnowski', 'Cholewa', 'Chrzanowski', 'Chudzik', 'Cichocki', 'Cichoń', 'Cichy', 'Ciesielski', 'Cieśla',
                    'Cieślak', 'Cieślinski', 'Ciszewski', 'Cybulski', 'Cygan', 'Cyganiewicz', 'Cygowski', 'Czaja', 'Czajka', 'Czajkowski',
                    'Wieszczek', 'Wieczorek', 'Wieczorkowski', 'Wieczór', 'Wierzbicki', 'Wierzbik', 'Wierzbowski', 'Wierzchowski', 'Wieńczak',
                    'Gumienny', 'Grześkowiak', 'Grześkowicz', 'Grześkowski', 'Grzesiak', 'Grześkiewicz', 'Grzeszowski', 'Górecki', 'Górny'];

let cities = ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice', 'Gdynia', 'Toruń', 
                'Białystok', 'Gliwice', 'Zabrze', 'Bielsko-Biała', 'Bytom', 'Zielona Góra', 'Sosnowiec', 'Kielce', 'Rzeszów', 'Opole', 'Krosno', 
                'Legnica', 'Jastrzębie-Zdrój', 'Jaworzno', 'Jelenia Góra', 'Jawor', 'Jastrzębie', 'Jedlina Góra', 'Jędrzejów', 'Jaworzno',
                 'Jelenia Góra', 'Jędrzejów', 'Jawor', 'Jastrzębie', 'Jedlina Góra', 'Jelenia Góra', 'Jędrzejów', 'Jaworzno', 'Jelenia Góra',
                  'Jędrzejów', 'Jawor', 'Jastrzębie', 'Jedlina Góra', 'Jelenia Góra', 'Jędrzejów', 'Jaworzno', 'Jelenia Góra', 'Jędrzejów', 
                  'Jawor', 'Jastrzębie', 'Jedlina Góra', 'Jelenia Góra', 'Jędrzejów', 'Jaworzno', 'Jelenia Góra', 'Jędrzejów', 'Jawor', 
                  'Jastrzębie', 'Jedlina Góra', 'Jelenia Góra', 'Jędrzejów', 'Jaworzno', 'Jelenia Góra'];

let workplaces = ['Mechanik', 'Księgowy', 'Adwokat', 'Murarz', 'Muzyk', 'Aktor', 'Negocjator', 'Brukarz', 'Programista',
                    'Budowlaniec', 'Ceramik', 'Pośrednik', 'Cieśla', 'Piekarz', 'Pedagog', 'Prawnik', 'Pielęgniarka', 'Pilot',
                    'Biolog', 'Automatyk', 'Architekt', 'Chemik', 'Dyrektor', 'Doktor', 'Drukarz', 'Dekarz', 'Dziennikarz',
                    'Dyspozytor', 'Protetyk', 'Ekonomista', 'Geodeta', 'Geolog', 'Grafik', 'Duchowny', 'Historyk', 'Grabarz',
                    'Hutnik', 'Redaktor', 'Fotograf', 'Górnik', 'Socjolog', 'Spawacz', 'Hydraulik', 'Kucharz', 'Kierowca',
                    'Lektor', 'Telemarketer', 'Taksówkarz', 'Magazynier', 'Kierownik', 'Terapeuta', 'Wulkanizator'];

let addresses = ['ul. Krakowska', 'ul. Warszawska', 'ul. Łódzka', 'ul. Wrocławska', 'ul. Poznańska', 'ul. Gdańska', 
                    'ul. Szczecińska', 'ul. Bydgoska', 'ul. Lubelska', 'ul. Katowicka', 'ul. Gdynia', 'ul. Toruńska', 'ul. Białystok', 
                    'ul. Gliwicza', 'ul. Zaborowska', 'ul. Bytomska', 'ul. Zielonej Góry', 'ul. Sosnowicza', 'ul. Kielcza', 'ul. Rzeszowska', 
                    'ul. Opolska', 'ul. Krosnowicza', 'ul. Legnicka', 'ul. Jastrzębiowska', 'ul. Jelenia', 
                    'ul. Jaworowa', 'ul. Jastrzębia', 'ul. Pocztowa', 'ul. Jędrzejów', 'ul. Zielona', 
                    'ul. Jędrzejów', 'ul. Jasielska', 'ul. Jedliny', 'ul. Jasnej Góry', 'ul. Jędrzejów', 
                    'ul. Górna', 'ul. Czarna', 'ul. Pocztowa', 'ul. Jastrzębiowska', 'ul. Jedlina Góra', 
                    'ul. Jędrzejów', 'ul. Biała', 'ul. Jasnowidza', 'ul. Górna', 'ul. Św. Jana Pawła II'];

const getRandomWorkers = () => {
    let workers = [];
    for (let i = 0; i < 10; i++) {
        let worker = {
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            salary: Math.floor(Math.random() * 100000),
            workplace: workplaces[Math.floor(Math.random() * workplaces.length)],
            address: cities[Math.floor(Math.random() * cities.length)] + ' ' + addresses[Math.floor(Math.random() * addresses.length)] + ' ' + Math.floor(Math.random() * 100),
            age: Math.floor(Math.random() * 30)+18
        };
        workers.push(worker);
    }
    return workers;
}

export default getRandomWorkers;