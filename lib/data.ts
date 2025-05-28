import { Movie, Review } from './types';

export const genres = [
  'Ação',
  'Aventura',
  'Animação',
  'Comédia',
  'Crime',
  'Documentário',
  'Drama',
  'Fantasia',
  'Ficção Científica',
  'Terror',
  'Romance',
  'Suspense'
];

export const movieData: Movie[] = [
  {
    id: '1',
    title: 'Vingadores: Ultimato',
    poster: 'https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    year: 2019,
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    synopsis: 'Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo.',
    duration: 181,
    director: 'Anthony Russo, Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson']
  },
  {
    id: '2',
    title: 'Coringa',
    poster: 'https://images.pexels.com/photos/1422286/pexels-photo-1422286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    year: 2019,
    genres: ['Crime', 'Drama', 'Suspense'],
    synopsis: 'Em Gotham City, o comediante falido Arthur Fleck se sustenta como palhaço. Isolado, menosprezado e maltratado pela sociedade, o fracasso de Arthur desencadeia uma descida à loucura e, eventualmente, ao crime.',
    duration: 122,
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy']
  },
  {
    id: '3',
    title: 'Interestelar',
    poster: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    year: 2014,
    genres: ['Aventura', 'Drama', 'Ficção Científica'],
    synopsis: 'Quando a Terra se torna inabitável no futuro, um fazendeiro e ex-piloto da NASA, Joseph Cooper, é encarregado de pilotar uma nave em uma viagem interestelar para encontrar um novo lar para a humanidade.',
    duration: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine']
  },
  {
    id: '4',
    title: 'Parasita',
    poster: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    year: 2019,
    genres: ['Comédia', 'Drama', 'Suspense'],
    synopsis: 'A família Kim, pobre e desempregada, se infiltra na vida da rica família Park, forjando suas qualificações. Quando um intruso ameaça o esquema de sustento dos Kim, o caos se instala.',
    duration: 132,
    director: 'Bong Joon-ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong', 'Choi Woo-shik', 'Park So-dam']
  },
  {
    id: '5',
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    poster: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    year: 2001,
    genres: ['Aventura', 'Fantasia'],
    synopsis: 'Um jovem hobbit, Frodo Bolseiro, embarca em uma perigosa jornada para destruir um anel poderoso e impedir que o Senhor das Trevas Sauron conquiste a Terra-média.',
    duration: 178,
    director: 'Peter Jackson',
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen', 'Sean Astin']
  },
  {
    id: '6',
    title: 'Pantera Negra',
    poster: 'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/4631294/pexels-photo-4631294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.4,
    year: 2018,
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    synopsis: 'Após a morte de seu pai, T\'Challa retorna a Wakanda para tomar seu lugar como rei. No entanto, ele logo descobre que enfrenta um desafio pelo trono de um adversário que tem planos para o futuro de Wakanda.',
    duration: 134,
    director: 'Ryan Coogler',
    cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o', 'Danai Gurira']
  },
  {
    id: '7',
    title: 'Divertida Mente',
    poster: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    year: 2015,
    genres: ['Animação', 'Aventura', 'Comédia'],
    synopsis: 'Após a jovem Riley ser desarraigada de sua vida no Meio-Oeste e se mudar para São Francisco, suas emoções – Alegria, Medo, Raiva, Nojinho e Tristeza – entram em conflito sobre como lidar com a mudança.',
    duration: 95,
    director: 'Pete Docter',
    cast: ['Amy Poehler', 'Phyllis Smith', 'Richard Kind', 'Bill Hader', 'Lewis Black']
  },
  {
    id: '8',
    title: 'Clube da Luta',
    poster: 'https://images.pexels.com/photos/7648484/pexels-photo-7648484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    year: 1999,
    genres: ['Drama', 'Suspense'],
    synopsis: 'Um executivo insone e um fabricante de sabão formam um clube de luta clandestino que evolui para algo muito mais perigoso.',
    duration: 139,
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter']
  },
  {
    id: '9',
    title: 'Matrix',
    poster: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    year: 1999,
    genres: ['Ação', 'Ficção Científica'],
    synopsis: 'Um hacker descobre a verdade chocante sobre a realidade em que vive e seu papel na guerra contra seus controladores.',
    duration: 136,
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving']
  },
  {
    id: '10',
    title: 'Pulp Fiction: Tempo de Violência',
    poster: 'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    year: 1994,
    genres: ['Crime', 'Drama'],
    synopsis: 'As vidas de dois assassinos da máfia, um boxeador, um gângster e sua esposa, e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.',
    duration: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis']
  },
  {
    id: '11',
    title: 'Cidade de Deus',
    poster: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    year: 2002,
    genres: ['Crime', 'Drama'],
    synopsis: 'Dois meninos crescem na violenta favela do Rio de Janeiro. Um se torna fotógrafo, o outro, traficante.',
    duration: 130,
    director: 'Fernando Meirelles, Kátia Lund',
    cast: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele', 'Seu Jorge']
  },
  {
    id: '12',
    title: 'Star Wars: Episódio IV - Uma Nova Esperança',
    poster: 'https://images.pexels.com/photos/4165323/pexels-photo-4165323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop: 'https://images.pexels.com/photos/6499007/pexels-photo-6499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    year: 1977,
    genres: ['Aventura', 'Fantasia', 'Ficção Científica'],
    synopsis: 'O jovem Luke Skywalker embarca em uma missão para resgatar a princesa Leia das garras do mal Império Galáctico.',
    duration: 121,
    director: 'George Lucas',
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Alec Guinness']
  }
];

export const featuredMovies = [
  {
    id: '1',
    title: 'Vingadores: Ultimato',
    backdrop: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    synopsis: 'Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo.',
    genres: ['Ação', 'Aventura', 'Ficção Científica']
  },
  {
    id: '3',
    title: 'Interestelar',
    backdrop: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    synopsis: 'Quando a Terra se torna inabitável no futuro, um fazendeiro e ex-piloto da NASA, Joseph Cooper, é encarregado de pilotar uma nave em uma viagem interestelar para encontrar um novo lar para a humanidade.',
    genres: ['Aventura', 'Drama', 'Ficção Científica']
  },
  {
    id: '5',
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    backdrop: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    synopsis: 'Um jovem hobbit, Frodo Bolseiro, embarca em uma perigosa jornada para destruir um anel poderoso e impedir que o Senhor das Trevas Sauron conquiste a Terra-média.',
    genres: ['Aventura', 'Fantasia']
  },
  {
    id: '6',
    title: 'Pantera Negra',
    backdrop: 'https://images.pexels.com/photos/4631294/pexels-photo-4631294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    synopsis: 'Após a morte de seu pai, T\'Challa retorna a Wakanda para tomar seu lugar como rei. No entanto, ele logo descobre que enfrenta um desafio pelo trono de um adversário que tem planos para o futuro de Wakanda.',
    genres: ['Ação', 'Aventura', 'Ficção Científica']
  },
  {
    id: '12',
    title: 'Star Wars: Episódio IV - Uma Nova Esperança',
    backdrop: 'https://images.pexels.com/photos/6499007/pexels-photo-6499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    synopsis: 'O jovem Luke Skywalker embarca em uma missão para resgatar a princesa Leia das garras do mal Império Galáctico.',
    genres: ['Aventura', 'Fantasia', 'Ficção Científica']
  }
];

export const reviewData: Review[] = [
  {
    id: '1',
    author: 'João Silva',
    authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Vingadores: Ultimato',
    movieId: '1',
    rating: 5,
    content: 'Simplesmente incrível! Uma conclusão épica para a saga dos Vingadores. Os efeitos especiais são de tirar o fôlego, e as atuações são excelentes. A forma como amarraram todas as histórias dos filmes anteriores foi muito bem feita. Fiquei emocionado em várias partes do filme. Definitivamente vale cada minuto dos seus 3 horas de duração. É um marco na história do cinema de super-heróis!',
    date: '2023-01-15T14:32:00Z',
    likes: 42
  },
  {
    id: '2',
    author: 'Maria Oliveira',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Coringa',
    movieId: '2',
    rating: 4,
    content: 'Um filme perturbador, mas brilhantemente executado. Joaquin Phoenix merece todos os prêmios por sua interpretação do Coringa. A transformação do personagem é assustadoramente realista. A cinematografia e a trilha sonora complementam perfeitamente a narrativa sombria. Não é um filme fácil de assistir, mas é uma obra-prima em termos de atuação e direção. Recomendo para quem aprecia cinema de qualidade, mas não é para quem busca entretenimento leve.',
    date: '2023-02-22T09:15:00Z',
    likes: 38
  },
  {
    id: '3',
    author: 'Pedro Santos',
    authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Interestelar',
    movieId: '3',
    rating: 5,
    content: 'Uma obra-prima científica com coração. Christopher Nolan conseguiu criar um filme que é tecnicamente impressionante e emocionalmente poderoso ao mesmo tempo. As cenas no espaço são de tirar o fôlego, e a trilha sonora de Hans Zimmer é perfeita. A história sobre amor transcendendo tempo e espaço me tocou profundamente. Matthew McConaughey entrega uma de suas melhores performances. É um filme que faz você pensar sobre seu lugar no universo por dias depois de assistir.',
    date: '2023-03-05T21:45:00Z',
    likes: 57
  },
  {
    id: '4',
    author: 'Ana Costa',
    authorAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Parasita',
    movieId: '4',
    rating: 5,
    content: 'Um filme absolutamente brilhante que merece todos os prêmios que recebeu. A maneira como Bong Joon-ho mistura gêneros - da comédia ao suspense - é magistral. O comentário social sobre desigualdade é poderoso e relevante. Cada cena é meticulosamente construída, cada performance é perfeita. É um daqueles filmes que revela novas camadas a cada vez que você assiste. Uma obra-prima do cinema contemporâneo que transcende barreiras culturais.',
    date: '2023-04-10T18:20:00Z',
    likes: 63
  },
  {
    id: '5',
    author: 'Lucas Mendes',
    authorAvatar: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'O Senhor dos Anéis: A Sociedade do Anel',
    movieId: '5',
    rating: 5,
    content: 'Um clássico atemporal e a melhor adaptação literária já feita para o cinema. Peter Jackson criou um mundo vivo e respirável com a Terra-média. Os cenários da Nova Zelândia são deslumbrantes, os efeitos especiais continuam impressionantes mesmo após tantos anos, e o elenco não poderia ser mais perfeito. A trilha sonora de Howard Shore é icônica. Este filme definiu um novo padrão para o gênero fantasia e continua sendo uma experiência cinematográfica imersiva e emocionante. Imperdível!',
    date: '2023-05-17T11:05:00Z',
    likes: 49
  },
  {
    id: '6',
    author: 'Carla Rodrigues',
    authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Pantera Negra',
    movieId: '6',
    rating: 4,
    content: 'Muito mais que um filme de super-herói, Pantera Negra é culturalmente significativo e visualmente deslumbrante. Wakanda é um mundo fascinante, e os figurinos e design de produção são impressionantes. Chadwick Boseman entrega uma performance digna, e Michael B. Jordan cria um dos vilões mais complexos do MCU. A representatividade importa, e este filme mostra o porquê. As sequências de ação são bem coreografadas, e a mensagem sobre responsabilidade global ressoa. Um marco importante no gênero.',
    date: '2023-06-22T16:40:00Z',
    likes: 35
  },
  {
    id: '7',
    author: 'Fernando Almeida',
    authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Divertida Mente',
    movieId: '7',
    rating: 5,
    content: 'Um filme de animação que é igualmente apreciado por crianças e adultos. A Pixar conseguiu transformar emoções abstratas em personagens adoráveis e criar uma história profundamente tocante sobre crescimento e aceitação. A criatividade em visualizar a mente humana é impressionante. O filme aborda temas complexos como saúde mental de uma forma acessível e sensível. Ri e chorei durante o filme, especialmente na história do Bing Bong. Uma obra-prima que mostra o poder do cinema de animação.',
    date: '2023-07-08T10:25:00Z',
    likes: 41
  },
  {
    id: '8',
    author: 'Juliana Martins',
    authorAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Clube da Luta',
    movieId: '8',
    rating: 5,
    content: 'Um filme que desafia convenções e se torna mais relevante a cada ano que passa. A direção de David Fincher é impecável, criando uma atmosfera única e visualmente hipnotizante. Brad Pitt e Edward Norton entregam performances inesquecíveis. O roteiro é cheio de diálogos memoráveis e reviravoltas chocantes. A crítica ao consumismo e à busca de identidade masculina na sociedade moderna continua extremamente atual. Um filme que melhora a cada vez que você assiste e percebe novos detalhes.',
    date: '2023-08-14T22:10:00Z',
    likes: 52
  },
  {
    id: '9',
    author: 'Rafael Moreira',
    authorAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Matrix',
    movieId: '9',
    rating: 5,
    content: 'Um filme revolucionário que mudou para sempre o cinema de ação e ficção científica. Os efeitos visuais como o bullet time foram inovadores e continuam impressionantes. O conceito filosófico da realidade simulada é fascinante e provocativo. Keanu Reeves é perfeito como Neo, e toda a estética do filme - dos óculos escuros aos sobretudos de couro - se tornou icônica. A coreografia das lutas é espetacular, misturando artes marciais com efeitos digitais de forma única. Um clássico moderno indiscutível.',
    date: '2023-09-03T14:55:00Z',
    likes: 47
  },
  {
    id: '10',
    author: 'Tatiana Lopes',
    authorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    movieTitle: 'Pulp Fiction: Tempo de Violência',
    movieId: '10',
    rating: 5,
    content: 'Tarantino no seu auge! A estrutura não-linear da narrativa foi revolucionária e influenciou inúmeros filmes posteriores. Os diálogos são simplesmente brilhantes - cheios de referências culturais, humor negro e filosofia de bar. O elenco é perfeito, com John Travolta, Samuel L. Jackson e Uma Thurman entregando performances icônicas. A trilha sonora é impecável e complementa perfeitamente cada cena. É violento, é engraçado, é cool e é cinema puro. Um filme que define uma geração e continua a encantar novos espectadores.',
    date: '2023-10-19T20:30:00Z',
    likes: 58
  }
];