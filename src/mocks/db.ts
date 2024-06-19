import { TGetGenreResponse, TGetMoviesResponse } from "../shared/api/api";

export const genres: TGetGenreResponse = [
  {
    name: "аниме",
    slug: "anime",
  },
  {
    name: "биография",
    slug: "biografiya",
  },
  {
    name: "боевик",
    slug: "boevik",
  },
  {
    name: "вестерн",
    slug: "vestern",
  },
  {
    name: "военный",
    slug: "voennyy",
  },
  {
    name: "детектив",
    slug: "detektiv",
  },
  {
    name: "детский",
    slug: "detskiy",
  },
  {
    name: "для взрослых",
    slug: "dlya-vzroslyh",
  },
  {
    name: "документальный",
    slug: "dokumentalnyy",
  },
  {
    name: "драма",
    slug: "drama",
  },
  {
    name: "игра",
    slug: "igra",
  },
  {
    name: "история",
    slug: "istoriya",
  },
  {
    name: "комедия",
    slug: "komediya",
  },
  {
    name: "концерт",
    slug: "koncert",
  },
  {
    name: "короткометражка",
    slug: "korotkometrazhka",
  },
  {
    name: "криминал",
    slug: "kriminal",
  },
  {
    name: "мелодрама",
    slug: "melodrama",
  },
  {
    name: "музыка",
    slug: "muzyka",
  },
  {
    name: "мультфильм",
    slug: "multfilm",
  },
  {
    name: "мюзикл",
    slug: "myuzikl",
  },
  {
    name: "новости",
    slug: "novosti",
  },
  {
    name: "приключения",
    slug: "priklyucheniya",
  },
  {
    name: "реальное ТВ",
    slug: "realnoe-TV",
  },
  {
    name: "семейный",
    slug: "semeynyy",
  },
  {
    name: "спорт",
    slug: "sport",
  },
  {
    name: "ток-шоу",
    slug: "tok-shou",
  },
  {
    name: "триллер",
    slug: "triller",
  },
  {
    name: "ужасы",
    slug: "uzhasy",
  },
  {
    name: "фантастика",
    slug: "fantastika",
  },
  {
    name: "фильм-нуар",
    slug: "film-nuar",
  },
  {
    name: "фэнтези",
    slug: "fentezi",
  },
  {
    name: "церемония",
    slug: "ceremoniya",
  },
].map((item) => ({ name: item.name }));

export const movies: TGetMoviesResponse = {
  docs: [
    {
      id: 1339977,
      name: "Уровень тревоги: Полночь",
      rating: {
        kp: 9.23,
        imdb: 9.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: null,
      year: 2011,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/ff7fd32d-309d-40e7-8276-eaed46f8e4b0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/ff7fd32d-309d-40e7-8276-eaed46f8e4b0/x1000",
      },
      genres: [
        {
          name: "короткометражка",
        },
        {
          name: "боевик",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 1003587,
      name: "Гамильтон",
      rating: {
        kp: 9.228,
        imdb: 8.3,
        filmCritics: 7.6,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Рассказ о жизни американского государственного и политического деятеля Александра Гамильтона.",
      year: 2016,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/83af1bdc-554e-49d2-8c4d-5b70d884ec6b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/83af1bdc-554e-49d2-8c4d-5b70d884ec6b/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "биография",
        },
      ],
    },
    {
      id: 2500772,
      name: "Жизнь человека. Последнее интервью",
      year: 2020,
      description:
        "В марте 2018 года один из лучших хирургов-онкологов страны Андрей Павленко узнал, что у него рак желудка агрессивной формы. Как онколог, Андрей понимал, что скорее всего умрет, но решил лечиться и запустить в России публичный медиапроект «Жизнь человека» о том, как принять диагноз и бороться с онкологическими заболеваниями, что нужно делать и где искать помощь.\n\nВ ноябре 2019 года Андрей дал последнее интервью команде проекта «Жизнь человека». Этот фильм — своеобразное завещание Андрея. Послание всем, кто следил за его судьбой, онкологическим пациентам, их родственникам, и врачам.",
      rating: {
        kp: 9.212,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/5df6b993-23e1-483d-93be-34a1114e7901/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/5df6b993-23e1-483d-93be-34a1114e7901/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5461779,
      name: "Самые милые существа",
      year: 2021,
      description:
        "Если бы вас попросили назвать самое милое животное на свете, вам наверняка было бы трудно определиться с ответом. Коала? Пингвин? Большеглазый олененок? Пушистый белек, детеныш тюленя? Белый медвежонок? Давайте попробуем выбрать вместе.",
      rating: {
        kp: 9.191,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10809116/c4cab1cd-a5b5-45b3-ad8e-dd12c1ba80a5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10809116/c4cab1cd-a5b5-45b3-ad8e-dd12c1ba80a5/x1000",
      },
      genres: [
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 4866668,
      name: "BTS Permission To Dance: On Stage — Seoul",
      year: 2022,
      description: "Уникальное шоу, во время которого BTS и АРМИ станцуют вместе.",
      rating: {
        kp: 9.115,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/1ffd1105-9ce2-43f1-ba56-11016e166ed0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/1ffd1105-9ce2-43f1-ba56-11016e166ed0/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 9.109,
        imdb: 9.3,
        filmCritics: 8.2,
        russianFilmCritics: 0,
        await: null,
      },
      id: 326,
      name: "Побег из Шоушенка",
      description:
        "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      year: 1994,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 9.076,
        imdb: 8.6,
        filmCritics: 6.8,
        russianFilmCritics: 0,
        await: null,
      },
      id: 435,
      name: "Зеленая миля",
      description:
        "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      year: 1999,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "фэнтези",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      rating: {
        kp: 9.045,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 1101247,
      name: "Самадхи, часть 1: Майя, иллюзия обособленного себя",
      description: "",
      year: 2017,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7cee11a7-84e8-4374-aad5-1113dfab6800/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/7cee11a7-84e8-4374-aad5-1113dfab6800/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 1405666,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Убежище. Истории о выживании в Альпах",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/63d4e96c-1485-422a-bc94-9a0397f87dbc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/63d4e96c-1485-422a-bc94-9a0397f87dbc/x1000",
      },
      rating: {
        kp: 9.003,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2019,
    },
    {
      id: 542577,
      name: "Серафим — рожденный пламенным",
      rating: {
        kp: 9,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Четыре раза он мог умереть. Но смерть оказывалась бессильна. Пять лет никто не видел его лица. И еще пять лет никто не слышал его голоса. А когда он заговорил, первый посетитель исцелился от неизлечимой болезни. Он мог стать богатым и знаменитым, но выбрал нищету. Он всю жизнь называл себя «убогим». Но к нему, как к последней надежде, стекались тысячи людей со всей России. Он избегал почестей и славы, но прославился на весь мир. Он жил во имя Господа. И Господь не предал Его забвению.",
      year: 2006,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/1ed19ddf-0c0c-48aa-a163-3a5aa37a579f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/1ed19ddf-0c0c-48aa-a163-3a5aa37a579f/x1000",
      },
      genres: [],
    },
    {
      id: 1105410,
      name: "Ханс Циммер: Live on Tour",
      year: 2017,
      description:
        "Известный кинокомпозитор Ханс Циммер и его первоклассные музыканты исполнили перед многотысячной публикой знаменитую музыку из голливудских блокбастеров. Это уникальный шанс увидеть художника во всем великолепии его музыкального дара и насладиться прекрасными мелодиями в кругу семьи и друзей.",
      rating: {
        kp: 8.99,
        imdb: 9.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/61a2e1ac-17f1-4d12-b475-93dfcb3293a7/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/61a2e1ac-17f1-4d12-b475-93dfcb3293a7/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 734128,
      name: "Время не терпит",
      rating: {
        kp: 8.978,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: "",
      year: 2016,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/69bf747c-e5cb-4498-9d27-93d8dd97a11a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/69bf747c-e5cb-4498-9d27-93d8dd97a11a/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 8.963,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 1346348,
      name: "Проклятие серого слонёнка",
      description:
        "О появлении и распространении в России в 90-ых годах 8-битных приставок и всего, что с ними связано.",
      year: 2011,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/0003cfcc-3fa2-40ab-afd9-305d60f63760/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/0003cfcc-3fa2-40ab-afd9-305d60f63760/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 982493,
      description: "Набор роликов из прошлых эпизодов перед заключительным сезоном.",
      genres: [
        {
          name: "комедия",
        },
      ],
      name: "Друзья: Ещё один эпизод перед последним – Десять лет Друзей",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/38bc17a1-e639-4391-906a-a769accb24fe/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/38bc17a1-e639-4391-906a-a769accb24fe/x1000",
      },
      rating: {
        kp: 8.95,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2004,
    },
    {
      id: 647823,
      name: "Моцарт. Рок-опера",
      year: 2009,
      description:
        "Судьба Моцарта преподносит ему испытание: Коллоредо сменяет принца-архиепископа Зальцбурга. Новый правитель - строгий и авторитарный человек, не воспринимающий музыку молодого композитора и не терпящий его пыл и дерзость. Жизнь в Зальцбурге становится для двадцатилетнего юноши невыносимой. Он решает оставить свой родной город и уехать с матерью на поиски лучшего будущего в европейских столицах.",
      rating: {
        kp: 8.945,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/82e6838a-dc86-4e34-824b-cabb5140dca9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/82e6838a-dc86-4e34-824b-cabb5140dca9/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
      ],
    },
    {
      id: 651374,
      description: "",
      genres: [
        {
          name: "мюзикл",
        },
      ],
      name: "Моцарт. Рок-опера",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/bd9a404e-b3ce-4408-95f0-67ff8c9e1844/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/bd9a404e-b3ce-4408-95f0-67ff8c9e1844/x1000",
      },
      rating: {
        kp: 8.936,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2011,
    },
    {
      id: 1313572,
      name: "Монте-Кристо. Мюзикл",
      rating: {
        kp: 8.933,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Киноверсия легендарного московского мюзикла «Монте-Кристо». Это знаменитый российский мюзикл-хит, рекордсмен по продолжительности театрального проката, в котором зрителя ждут звёздный состав актеров, потрясающие голоса, красочные костюмы и грандиозные декорации.",
      year: 2019,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/f8ffc5e3-dd46-4f55-adb1-0100e622d531/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/f8ffc5e3-dd46-4f55-adb1-0100e622d531/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 1029333,
      name: "Земля: Один потрясающий день",
      year: 2017,
      description:
        "Солнце восходит над Землей, и множество живых существ начинают свой день, полный трогательных, увлекательных и опасных событий. Игуаны спасаются бегством от ядовитых змей, очаровательные панды лакомятся побегами бамбука, жирафы сражаются за сердце «прекрасной дамы»... Жизнь в африканской саванне, на безлюдных островах в Тихом океане, в лесах Азии и на морском дне разворачивается по законам остросюжетного боевика, сентиментальной мелодрамы или головокружительного триллера. Никогда прежде чудеса не были так близко.",
      rating: {
        kp: 8.924,
        imdb: 7.8,
        filmCritics: 6.7,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/c9ed5b01-61d0-4da1-bc76-510d0e30ecbf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/c9ed5b01-61d0-4da1-bc76-510d0e30ecbf/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "семейный",
        },
      ],
    },
    {
      id: 5332560,
      name: "Как я стал ребенком",
      year: 2023,
      description:
        "Помогать — просто! Это уже 15 лет на личном примере доказывает народный артист России, художественный руководитель МХТ им. А. П. Чехова Константин Хабенский. Зрители знают и любят его по многочисленным ролям в кино и театре, но в этом фильме он расскажет о другой, пожалуй, самой сложной своей роли. Константин — основатель благотворительного фонда, который помогает детям и молодым взрослым с опухолями мозга.",
      rating: {
        kp: 8.921,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/54fbc0a6-d237-47a1-a45d-4340a3a9b4e6/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/54fbc0a6-d237-47a1-a45d-4340a3a9b4e6/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.921,
        imdb: 8.8,
        filmCritics: 7.9,
        russianFilmCritics: 0,
        await: null,
      },
      id: 448,
      name: "Форрест Гамп",
      description:
        "Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни.\n\nС самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.",
      year: 1994,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/3560b757-9b95-45ec-af8c-623972370f9d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/3560b757-9b95-45ec-af8c-623972370f9d/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
        {
          name: "мелодрама",
        },
        {
          name: "история",
        },
        {
          name: "военный",
        },
      ],
    },
    {
      id: 734467,
      description:
        "В спектакле два главных действующих лица: мальчик Оскар, который неизлечимо болен, и Розовая дама, одна из тех сиделок, одетых в розовую одежду, которые ухаживают за больными детьми. Розовая Дама, или, как Оскар её называет, Розовая Мама, предлагает мальчику игру — каждый день он как бы проживает 10 лет жизни. И за 10 дней, оставшихся до смерти мальчика, проходит вся жизнь: от детства, юности, женитьбы до старости и смерти. И ещё, по совету Розовой Дамы, Оскар обращается к Богу, он пишет Ему письма.",
      genres: [],
      name: "Оскар и Розовая дама",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/c7028133-8c62-4ebd-aaf2-ce9ce0dff7f1/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/c7028133-8c62-4ebd-aaf2-ce9ce0dff7f1/x1000",
      },
      rating: {
        kp: 8.899,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2006,
    },
    {
      id: 367456,
      name: "Собор Парижской Богоматери",
      year: 1998,
      description:
        "Юная девушка-цыганка по имени Эсмеральда своей красотой привлекает к себе внимание мужчин. Среди них - архидьякон Собора Парижской Богоматери Фролло, молодой красавец - капитан королевских стрелков Феб и уродливый звонарь Квазимодо, воспитанник Фролло. Эсмеральда без памяти влюбляется в самого красивого из них - Феба. Он не против воспользоваться этим, несмотря на то, что у него есть невеста - Флер-де-Лис...",
      rating: {
        kp: 8.898,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/9edc2e1a-30d7-4294-8ae8-915e8d389416/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/9edc2e1a-30d7-4294-8ae8-915e8d389416/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 5418900,
      name: "Ничего не бойся, я с тобой",
      year: 2023,
      description:
        "Ленинград, 1983 г. Слава, Антон и Денис тусуются на рок-квартирниках, ловят волны западных радиостанций, продают редкий винил и мечтают о поездке на родину обожаемых «битлов». Романтик Слава встречает на крыше прекрасную незнакомку, но та от него ускользает, ботаник Антон тайно вздыхает по хозяйке самых крутых вечеринок в городе, а у мажора Дениса страстный роман, но он не верит в их с любимой будущее. Крепкая мужская дружба даёт большую трещину, когда отец Дениса решает женить его по расчёту на профессорской дочке.",
      rating: {
        kp: 8.884,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10592371/ee005e8a-2b55-4a90-87f8-ce2de1c64def/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10592371/ee005e8a-2b55-4a90-87f8-ce2de1c64def/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 1115424,
      name: "Медведи Камчатки. Начало жизни",
      year: 2018,
      description:
        "Документальный фильм рассказывает о первом годе жизни бурых медведей по сценарию, написанному самой природой. На протяжении семи месяцев съёмочная группа наблюдала за несколькими медвежьими семьями на территории Южно-Камчатского федерального заказника им. Т.И. Шпиленка, чтобы запечатлеть тайны взросления одного из самых крупных хищников России. \n\nЭто особенная картина, которая переносит зрителя в мир вулканов, рек и диких животных — мир, где человеку отведена роль наблюдателя. Цель создателей — погрузить зрителей в атмосферу природного равновесия, которая все ещё сохраняется на заповедных территориях.",
      rating: {
        kp: 8.877,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/f894df38-428c-42d1-8af6-ebe29fa0a790/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/f894df38-428c-42d1-8af6-ebe29fa0a790/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 4756142,
      name: "Ласточки Христовы",
      year: 2021,
      description:
        "27 декабря 2019 года парламент Черногории принял законопроект об изъятии всей церковной собственности у Сербской православной церкви. Сотни тысяч человек в Черногории встали на соборную молитву во главе с митрополитом Амфилохием (Радовичем). Митрополит вместе со своим народом за время своего служения построил и восстановил 700 храмов и монастырей. Неожиданно для всех от коронавируса умирает народный пастырь. Но его молитвы услышаны. На сороковой день после смерти владыки меняется правительство и вносит поправки в законопроект о церкви.",
      rating: {
        kp: 8.869,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/855d1834-e7fa-49f5-8446-710d38566b16/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/855d1834-e7fa-49f5-8446-710d38566b16/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 220054,
      name: "Крестный отец: Трилогия 1901-1980",
      year: 1992,
      description:
        "«Крёстный отец. Трилогия. 1901—1980» — выпущенный на видео кинофильм-спецпроект Фрэнсиса Форда Копполы, представляющий собой все три серии саги Крестный отец, перемонтированные в хронологическом относительно действия фильма порядке. «Трилогия» сделана на основе выпущенного в 1977 телесериала «Крестный отец: Сага» (перемонтированные в хронологическом порядке фильмы «Крестный отец» и «Крестный отец 2» с дополнительными сценами в 60 минут), к которому добавлен материал фильма «Крестный отец 3».",
      rating: {
        kp: 8.869,
        imdb: 9.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/3db6b433-9450-46a4-bd3f-31a3731cf838/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/3db6b433-9450-46a4-bd3f-31a3731cf838/x1000",
      },
      genres: [
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 339061,
      name: "Властелин танца",
      year: 1997,
      description: null,
      rating: {
        kp: 8.866,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/fdecc415-103e-4673-870a-ce5ae28000fc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/fdecc415-103e-4673-870a-ce5ae28000fc/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 8.846,
        imdb: 9,
        filmCritics: 9.2,
        russianFilmCritics: 0,
        await: null,
      },
      id: 329,
      name: "Список Шиндлера",
      description:
        "Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.",
      year: 1993,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "биография",
        },
        {
          name: "история",
        },
        {
          name: "военный",
        },
      ],
    },
    {
      id: 978306,
      name: "Щенячья школа",
      year: 2018,
      description:
        "История превращения щенков в профессиональных собак-поводырей. Только лучшие из лучших попадают в этот отряд и, проходя через многочисленные этапы обучения, становятся настоящими друзьями и опорой нуждающимся в помощи людям.",
      rating: {
        kp: 8.833,
        imdb: 7.6,
        filmCritics: 7.2,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/6e13e429-43b6-450d-88e4-39a2d5a9f578/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/6e13e429-43b6-450d-88e4-39a2d5a9f578/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5401992,
      name: "Мой мир Shinee",
      year: 2023,
      description: "История кей-поп-группы SHINee на протяжении 15 лет.",
      rating: {
        kp: 8.833,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4716873/9578b9f4-b794-4cfb-b2fa-d899efbaa2cc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4716873/9578b9f4-b794-4cfb-b2fa-d899efbaa2cc/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 4826246,
      description:
        "Конец 60-х. Отношения между участниками Битлз накалены, планы рушатся, но именно в этот период сочиняются и исполняются одни из самых знаковых песен в мире.",
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
      name: "The Beatles: Get Back — Концерт на крыше",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/c7bb85fc-160b-4fa0-b0d4-084261c1ddc5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/c7bb85fc-160b-4fa0-b0d4-084261c1ddc5/x1000",
      },
      rating: {
        kp: 8.832,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2022,
    },
    {
      id: 584126,
      name: "Музыкальный фестиваль Live Aid",
      year: 1985,
      description: null,
      rating: {
        kp: 8.827,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/6eb54f70-fb50-4a68-8793-9223ecf52503/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/6eb54f70-fb50-4a68-8793-9223ecf52503/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 535341,
      name: "1+1",
      year: 2011,
      description:
        "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
      rating: {
        kp: 8.826,
        imdb: 8.5,
        filmCritics: 6.8,
        russianFilmCritics: 100,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 329385,
      name: "Queen: Live at Wembley Stadium",
      year: 1986,
      description: "Концерт группы Queen на стадионе Уэмбли в 1986 году.",
      rating: {
        kp: 8.821,
        imdb: 9.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/7411d2bd-f825-48ff-8985-fa12583ed479/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/7411d2bd-f825-48ff-8985-fa12583ed479/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 1040555,
      name: "История одного землетрясения",
      year: 2016,
      description:
        "Разрушительное Спитакское землетрясение, произошедшее 7 декабря 1988 года,  унесло тысячи человеческих жизней. В Армении не осталось практически ни одной семьи, которой бы ни коснулась ужасающая катастрофа. По некоторым данным, в эпицентре землетрясения – городе Спитаке и его окрестностях – погиб каждый третий житель.\n\nВ документальном фильме «История одного землетрясения» очевидцы и участники тех событий  – врачи, спасатели, политики – вспоминают о трагедии, потрясшей весь мир.",
      rating: {
        kp: 8.82,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4486454/0dd0dfd7-0f1b-49d3-a23d-5d5aa4f7ef13/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4486454/0dd0dfd7-0f1b-49d3-a23d-5d5aa4f7ef13/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 789467,
      description:
        "На протяжении 60 лет королева Елизавета II проводила в Букингемском дворце серию аудиенций для каждого из девяти премьер-министров Великобритании. Существует негласное правило для обеих сторон о неразглашении подробностей бесед этих встреч. «Аудиенция» нарушает это правило и представляет ряд предполагаемых диалогов между королевой и премьер-министрами, от Черчилля до Кэмерона.\n\nПервую аудиенцию королева провела, будучи совсем молодой. Эти частные встречи очерчивают вторую Елизаветинскую Эпоху. Политические деятели приходят и уходят, а королева остается – в ожидании следующего премьер-министра.",
      genres: [
        {
          name: "драма",
        },
      ],
      name: "Аудиенция",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/8b9ba079-7140-44a3-ba55-d583fff93ee0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/8b9ba079-7140-44a3-ba55-d583fff93ee0/x1000",
      },
      rating: {
        kp: 8.82,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2012,
    },
    {
      id: 574829,
      name: "Только Армин: Ахой 2006",
      year: 2006,
      description:
        "Шоу с живыми выступлениями Армина ван Бюрена с разными вокалистками, а так же проекта «Rank1». Вторая часть громкого мероприятия «Armin Only» состоялась в Роттердаме в местечке под названием Ахой в субботу 11 ноября 2006 года.",
      rating: {
        kp: 8.819,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/6b1bf5ec-f1cc-47be-ad8c-9e820d12b00d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/6b1bf5ec-f1cc-47be-ad8c-9e820d12b00d/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 5330955,
      name: "Норд-Ост",
      year: 2003,
      description:
        "История любви Кати Татариновой и Сани Григорьева, в которой, как в капле воды, преломляется история великой страны и великих открытий.",
      rating: {
        kp: 8.817,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/cf18fc0a-1702-4d80-9e04-a279538c06d9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/cf18fc0a-1702-4d80-9e04-a279538c06d9/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
      ],
    },
    {
      id: 798117,
      name: "Двенадцатая ночь",
      rating: {
        kp: 8.817,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "«Двенадцатая ночь» – комедия запутанных романтических отношений, искрящаяся наиболее изящными диалогами, когда-либо написанными Уильямом Шекспиром.",
      year: 2012,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/60b274dc-da95-4e48-9218-f8fdac9dcd1d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/60b274dc-da95-4e48-9218-f8fdac9dcd1d/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 490292,
      name: "Волшебство Queen в Будапеште",
      year: 1987,
      description:
        "27 июля 1986 года. Будапешт, сумерки. Nepstadion — самый большой стадион Венгрии. За считанные мгновения трибуны и само поле стадиона заполняются десятками зрителей, а потом наступит вечер — и на сцене появятся Джон Дикон, Брайан Мэй, Роджер Тейлор и Фредди Меркьюри.",
      rating: {
        kp: 8.816,
        imdb: 8.6,
        filmCritics: 6.4,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/9c17e7cd-c954-4011-95df-6d53b59980a2/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/9c17e7cd-c954-4011-95df-6d53b59980a2/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 1142666,
      name: "Последнее испытание",
      year: 2017,
      description:
        "Чародей в поисках абсолютной власти готов спуститься в Бездну, чтобы сразиться с Богиней Тьмы. Вместе с ним в путешествие отправляются его брат-близнец и жрица Светлого Бога. Между ней и Чародеем вспыхивает любовь. Впервые в жизни перед волшебником открылся иной путь к счастью. Но последнее испытание потребует отказаться от всего, что он приобрел.",
      rating: {
        kp: 8.815,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/77a3b919-aff2-47c5-83e7-e4473c48c098/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/77a3b919-aff2-47c5-83e7-e4473c48c098/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "фэнтези",
        },
      ],
    },
    {
      id: 571919,
      name: "Отверженные: 25-ая годовщина мюзикла",
      year: 2010,
      description:
        "«Отверженные» — мюзикл Клода-Мишеля Шонберга и Алана Бублиля по одноименному роману Виктора Гюго. Премьера мюзикла состоялась 17 сентября 1980 года в Palais des Sports, в Париже. Постановка не сходила со сцены в течение 21 года и названа самым долгоиграющим мюзиклом в истории. Мюзикл ставили в 221 городе в 38 странах. Этот грандиозный концерт на Лондонской арене О2 приурочен к 25-летнему юбилею мюзикла.",
      rating: {
        kp: 8.815,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/94cb4e3d-1ed0-4c24-bc80-84162c08ba64/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/94cb4e3d-1ed0-4c24-bc80-84162c08ba64/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 1140681,
      name: "Русская пятёрка",
      year: 2018,
      description:
        "Документальный фильм о главном русском сочетании в истории «Детройта» и всей НХЛ. В нём – истории появления каждого из участников – Константинова, Фетисова, Ларионова, Федорова и Козлова – в команде и рассказ об их игре, которая привела «Ред Уингс» к победам в Кубке Стэнли.",
      rating: {
        kp: 8.805,
        imdb: 8.1,
        filmCritics: 7.8,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/4b0db587-df81-4142-a0c2-58c95921c4b4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/4b0db587-df81-4142-a0c2-58c95921c4b4/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "спорт",
        },
      ],
    },
    {
      id: 4868855,
      name: "Итальянское Рождество Джейми Оливера",
      year: 2017,
      description:
        "Джейми готовит незабываемый стол для празднования Рождества, декорацией для которого станут виды украшенной итальянской горной деревушки на фоне покрытых снегом гор. Он сделает акцент на двух главных блюдах — индейке с итальянским гарниром и классической поркетте.",
      rating: {
        kp: 8.803,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/19ab8996-84f8-479f-be43-72191deb56d5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/19ab8996-84f8-479f-be43-72191deb56d5/x1000",
      },
      genres: [
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 1274277,
      description: null,
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
        {
          name: "биография",
        },
      ],
      name: "Разгадка тайны: Прощание с Большим Взрывом",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/1dbd2f12-b9a1-4095-9efc-3725732c4f4a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/1dbd2f12-b9a1-4095-9efc-3725732c4f4a/x1000",
      },
      rating: {
        kp: 8.802,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2019,
    },
    {
      id: 4913478,
      genres: [
        {
          name: "драма",
        },
      ],
      description: null,
      name: "Война и мир",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/de6db7e1-1f21-4f68-aa44-c947cbd4927c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/de6db7e1-1f21-4f68-aa44-c947cbd4927c/x1000",
      },
      rating: {
        kp: 8.797,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2022,
    },
    {
      id: 42664,
      name: "Иван Васильевич меняет профессию",
      year: 1973,
      description:
        "Инженер-изобретатель Тимофеев сконструировал машину времени, которая соединила его квартиру с XVI веком — точнее, с палатами государя Ивана Грозного. Туда-то и попадают тёзка царя пенсионер-общественник Иван Васильевич Бунша и квартирный вор Жорж Милославский, а сам великий государь оказывается в квартире Тимофеева.",
      rating: {
        kp: 8.788,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "фантастика",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      rating: {
        kp: 8.784,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 265114,
      name: "Наваждение",
      description:
        "Студенту Шурику осталось несколько часов до сдачи экзамена, а у него даже нет лекций. Случайно в толпе он видит тетрадку с нужными записями и увязывается за обладателем драгоценного материала.",
      year: 1965,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f056d550-6dbc-49b3-bd2d-43e169181ccb/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f056d550-6dbc-49b3-bd2d-43e169181ccb/x1000",
      },
      genres: [
        {
          name: "короткометражка",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 302136,
      name: "Элизабет",
      year: 2005,
      description: null,
      rating: {
        kp: 8.765,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/39ed1f15-6b40-45ce-964d-9b00d813e2ef/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/39ed1f15-6b40-45ce-964d-9b00d813e2ef/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "биография",
        },
      ],
    },
    {
      id: 624506,
      description:
        "Официальная биография Queen, приуроченная к 40-летнему юбилею легендарной группы. Над проектом работала непосредственно Queen Productions, что дало возможность включить в фильм десятки минут редких интервью Фредди Меркьюри и Джона Дикона, нарезки студийных сессий и комментарии людей, имевших к группе самое непосредственное отношение.",
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
      name: "Queen: Дни наших жизней",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/9df4ab62-c538-4a87-8b27-9778d705a629/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/9df4ab62-c538-4a87-8b27-9778d705a629/x1000",
      },
      rating: {
        kp: 8.763,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2011,
    },
    {
      rating: {
        kp: 8.763,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 10282,
      name: "Мать",
      description:
        "В 1921 году семья армян, спасаясь от геноцида, приезжает в Марсель. Через воспоминания шестилетнего ребенка представлена история семьи, объединенной любовью и нежностью. В фильме рассказывается о судьбе семьи Закарян. Азат Закарян высаживается в порту Марселя со своей семьей: отцом, матерью и двумя тетушками. \n\nАрмяне, преследуемые турками, они знают, как тяжело приспособиться к новой жизни и трудным работам. Но несмотря на все тяготы, семья остается крепко сплоченной. Взрослые многого лишают себя, ради того, чтобы в будущем Азат получил образование и стал инженером.",
      year: 1991,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/08d733ad-088b-4fa4-a144-dfce5c0bf02a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/08d733ad-088b-4fa4-a144-dfce5c0bf02a/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 673773,
      description: "",
      genres: [
        {
          name: "драма",
        },
      ],
      name: "Я предпочитаю рай",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/9eeb0b33-1d43-4b1b-8d08-dd900653c8f6/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/9eeb0b33-1d43-4b1b-8d08-dd900653c8f6/x1000",
      },
      rating: {
        kp: 8.756,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2010,
    },
    {
      rating: {
        kp: 8.756,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 893071,
      name: "Внутренние миры, внешние миры",
      description:
        "Существует единое вибрационное поле, соединяющее все вещи. Его называли Акаша, Логос, первобытное ОМ, музыка сфер, поле Хиггса, тёмная энергия, и тысяче других имён появлялась на протяжении истории. Вибрационное поле лежит в корне всего духовного опыта и научного исследования.\n\nЭто тот же самый духовный опыт, который святые, будды, йоги, мистики, священники, шаманы и провидцы наблюдали, обращая взор вовнутрь самих себя. Многие из монументальных мыслителей истории — Пифагор, Кеплер, Леонардо Да Винчи, Тесла и Эйнштейн — подходили к порогу этой великой тайны. Это общее звено между всеми религиями, всеми науками, и связь между нашими внутренними мирами и внешними мирами.",
      year: 2012,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/4284b7a2-e88a-4755-ba76-26ea97c767f9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/4284b7a2-e88a-4755-ba76-26ea97c767f9/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 439227,
      name: "Тьерри Анри: Легенда",
      year: 2008,
      description:
        "Фильм посвящен, пожалуй, самому легендарному нападающему в истории Арсенала. Тьерри Анри отыграл за Арсенал 8 лет, и за этот период выиграл огромное количество как клубных, так и личных трофеев. Он стал лучшим бомбардиром в истории Арсенала, забив в общей сложности 226 голов, тем самым вписав свое имя в истории клуба как самый лучший игрок Арсенала.Видео содержит эксклюзивные разговоры с Тьери Анри и другими звёздами Арсенала.Плюс все голы легендарного игрока за Арсенал.",
      rating: {
        kp: 8.753,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/c11e2fb7-5ab5-4e1e-b0d5-d803dbbd09de/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/c11e2fb7-5ab5-4e1e-b0d5-d803dbbd09de/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 837814,
      name: "Создание игры «The Last of Us»",
      year: 2013,
      description:
        "Документальный фильм, рассказывающий о создании видеоигры «The Last of Us».",
      rating: {
        kp: 8.746,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/919963d7-095d-44db-bb9f-f448b768b364/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/919963d7-095d-44db-bb9f-f448b768b364/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 840973,
      name: "Тим Минчин и The Heritage Orchestra: Концерт в The Royal Albert Hall",
      year: 2011,
      description: null,
      rating: {
        kp: 8.744,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/c5f1a795-c3c6-4c05-b8a3-872f639a4f3a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/c5f1a795-c3c6-4c05-b8a3-872f639a4f3a/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 8.743,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 77413,
      name: "Земляне",
      description:
        "Документальный фильм, посвящённый тематике жестокого обращения человека к животным. Фильм поделён на несколько частей, каждая из которых затрагивает проблемы в той или иной области, что в целом указывает на эгоизм и бессердечность человеческого рода, а также на пагубность животноводства и рыболовства в глобальных масштабах.",
      year: 2005,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/ced82414-4e9b-4222-b0e4-4ade11f0ff78/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/ced82414-4e9b-4222-b0e4-4ade11f0ff78/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 1370458,
      name: "Свидетели",
      year: 2015,
      description:
        "Одним из самых ярких событий Нюрнбергского процесса стали свидетельские показания Мари-Клод Вайян-Кутюрье. Молодая красивая женщина спокойно и подробно рассказала о своем пребывании в двух концентрационных лагерях – Освенциме и Равенсбрюке. И хотя к тому времени процесс продолжался уже несколько месяцев и судьи выслушали немало ужасных свидетельств о преступлениях нацистского режима, все присутствующие в зале № 600 были глубоко потрясены ее рассказом.",
      rating: {
        kp: 8.742,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/9813a48f-b6b7-4b60-b4e9-a66f1e38f276/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/9813a48f-b6b7-4b60-b4e9-a66f1e38f276/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      rating: {
        kp: 8.741,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 202421,
      name: "Песня остаётся всё такой же",
      description:
        "Фильм состоит множества сцен, включающих в себя записи концертов в Madison Square Garden и съёмки за кулисами в Baltimore Civic Centre осуществлённые в том же туре, которые перемежаются с постановочными сюжетами. В кинематографических сценах отображены эпизоды нападения мафии и эпизоды в стиле фэнтэзи.",
      year: 1976,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/76322126-9d17-4e5c-97bf-7c2e6357a469/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/76322126-9d17-4e5c-97bf-7c2e6357a469/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 4933779,
      name: "Осанна",
      year: 2018,
      description: "О жизни Елизаветы Федоровны, сестры последней русской императрицы.",
      rating: {
        kp: 8.739,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/8b4e9c83-27d4-41c6-a95a-43fa8aea2c37/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/8b4e9c83-27d4-41c6-a95a-43fa8aea2c37/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 807917,
      name: "Человек",
      year: 2015,
      description:
        "Огромное кинополотно, собравшее рассказы 2 тысяч людей из 60 стран мира, возможно, не ответит на вопрос «Что делает нас людьми?», но является отправной точкой для диалога на эту тему.",
      rating: {
        kp: 8.739,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/06f9089e-e55d-439d-9c9e-a7f0bb65d5b9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/06f9089e-e55d-439d-9c9e-a7f0bb65d5b9/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 4951085,
      name: "Истории в кино: Однажды в парке",
      year: 2022,
      description:
        "Новые выпуски шоу, где актеры придумывают сюжет и героев прямо на сцене, на основе истории, рассказанной случайным зрителем из зала — без заготовленного сценария.",
      rating: {
        kp: 8.737,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/bdea7af2-3d0c-43f8-aefb-8d9b8f76e50a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/bdea7af2-3d0c-43f8-aefb-8d9b8f76e50a/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 5461786,
      name: "Самые опасные существа",
      year: 2021,
      description:
        "Какое животное самое опасное для человека? Лев? Тигр? Да, это и вправду свирепые хищники, иногда нападающие на людей. Но гораздо больше людей погибло от нападения бегемотов или буйволов, а также домашних коров, свиней и собак.",
      rating: {
        kp: 8.733,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/x1000",
      },
      genres: [
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 843043,
      description:
        "Геро и Клаудио должны пожениться через неделю. Время идет, и они заключают пари с доном Педро, что сведут убежденного холостяка Бенедикта с язвительной спорщицей Беатриче, его давней знакомой. Тем временем злодей дон Хуан хочет расстроить свадьбу Клаудио, обвинив Геро в неверности. И, казалось бы, до истины уже не докопаться, но, к счастью, все это лишь только шум… шум из ничего.",
      genres: [
        {
          name: "мелодрама",
        },
        {
          name: "комедия",
        },
      ],
      name: "Много шума из ничего",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/1cffd8c3-f55d-49b6-afce-c0a829975cd5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/1cffd8c3-f55d-49b6-afce-c0a829975cd5/x1000",
      },
      rating: {
        kp: 8.732,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2011,
    },
    {
      id: 392106,
      description:
        "История святого Джузеппе Москати - неаполитанского врача и величайшего гуманиста. Москати всю свою жизнь декларировал, что главная сила - любовь. Он постоянно доказывал это, сочетая блестящие врачебные способности с любовью к ближнему. Москати утверждал, что даже простое сочувствие исцелит больного скорее, чем равнодушное исполнение врачом своих обязанностей, и убеждал в этом своих учеников.",
      genres: [
        {
          name: "драма",
        },
        {
          name: "биография",
        },
      ],
      name: "Джузеппе Москати: Исцеляющая любовь",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/f77a0100-2cef-4405-98ef-576350c1918d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/f77a0100-2cef-4405-98ef-576350c1918d/x1000",
      },
      rating: {
        kp: 8.731,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2007,
    },
    {
      id: 1008050,
      name: "Placebo: Alt.Russia",
      rating: {
        kp: 8.727,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Отметив 20-летие, летом 2014 года группа Placebo отправляется в удивительный тур по 10 российским городам, отчасти следующий по транссибирской магистрали и тем самым дающий группе возможность проехать по пути, по которому в свое время путешествовали Дэвид Боуи и Игги Поп.",
      year: 2016,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/a23cf605-1c59-4bf8-952e-52d24309a5ef/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/a23cf605-1c59-4bf8-952e-52d24309a5ef/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 846454,
      name: "Суровое испытание",
      rating: {
        kp: 8.726,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Ранним утром юные девушки собираются в лесу, чтобы приворожить понравившихся им молодых людей – и в этом деле им на помощь приходит негритянка Титуба. Но когда становится ясно, что девушек в лесу видел посторонний, одна из них, Абигейл, пытаясь отвести подозрения от себя и других, говорит, что Титуба одержима дьяволом. Титуба же, в свою очередь, называет имена «настоящих ведьм», и круг обвиняемых начинает стремительно расширяться…\nВ этой истории личные трагедии переплетаются с предрассудками – и в результате массовая истерия накрывает с головой маленькое поселение Салем. Центральными темами вечно актуальной притчи Миллера становятся опасность бездумных преследований и пугающая могущественность ложных обвинений.",
      year: 2014,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/0528cfe4-36c6-412d-a9ef-ca4129a8da58/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/0528cfe4-36c6-412d-a9ef-ca4129a8da58/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 4417912,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Встречайте семью пингвинов",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/68f68ac9-77c4-49cf-89cf-e971e98ed50f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/68f68ac9-77c4-49cf-89cf-e971e98ed50f/x1000",
      },
      rating: {
        kp: 8.725,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2020,
    },
    {
      id: 1199528,
      name: "Франкенштейн: Камбербэтч",
      year: 2011,
      description:
        "Доктор Виктор Франкенштейн создает Чудовище, вдохнув жизнь в тело, созданное из частей разных умерших людей. Однако, в ужасе от безобразности своего творения, он бросает его на произвол судьбы. Одинокий, уродливый, по-детски невинный монстр ждёт от мира доверия и любви, но повсюду сталкивается лишь со злобой, жестокостью и ненавистью. Окончательно отчаявшись, Чудовище клянется разыскать своего создателя и отомстить ему самым страшным образом.",
      rating: {
        kp: 8.723,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/ffba77fe-e7cf-4a54-b7e3-978428d6aed4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/ffba77fe-e7cf-4a54-b7e3-978428d6aed4/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 632602,
      name: "Призрак оперы в Королевском Алберт-холле",
      rating: {
        kp: 8.723,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Таинственный голос взывает к молодой оперной певице Кристине из мрачных недр величественной Парижской оперы. Лишь один человек в труппе знает, что невидимый покровитель и наставник Кристины, наводящий ужас на артистов, — обезображенный гений музыки, влюбленный в юную красавицу...",
      year: 2011,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/b0c227bb-becc-4af5-a810-f3cf27f8e365/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/b0c227bb-becc-4af5-a810-f3cf27f8e365/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 714487,
      name: "Концерт Big Bang 3D",
      year: 2010,
      description: null,
      rating: {
        kp: 8.722,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/5b1e274b-662a-4ff3-80cf-97cc6afd02d8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/5b1e274b-662a-4ff3-80cf-97cc6afd02d8/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 25108,
      name: "В бой идут одни «старики»",
      rating: {
        kp: 8.719,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Эта эскадрилья стала «поющей» - так капитан Титаренко подбирал себе новичков. Его «старикам» было не больше двадцати, но «желторотиков», пополнение из летных училищ ускоренного выпуска, в бой все равно, по возможности, не пускали. \r\n\r\nИм еще многое предстояло испытать - и жар боев, и радость первой победы над врагом, и величие братства, скрепленного кровью, и первую любовь, и горечь утраты... И настанет день, когда по команде «в бой идут одни старики» бывшие желторотики бросятся к своим самолетам...",
      year: 1973,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/03265560-cacb-429a-8ccd-50403f2db552/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/03265560-cacb-429a-8ccd-50403f2db552/x1000",
      },
      genres: [
        {
          name: "военный",
        },
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 1372001,
      name: "Без срока давности. Пепел «Зимнего волшебства»",
      year: 2017,
      description:
        "«Минский процесс» (январь 1946 года). Самый массовый процесс над нацистами в СССР. Перед судом предстали 18 немецких офицеров, многие из них – ближайшие соратники фюрера. История чудовищной операции «Зимнее волшебство» – нацисты выжгли и опустошили 433 деревни, расстреляли, замучили, отправили в лагеря или угнали в Германию тысячи людей.",
      rating: {
        kp: 8.717,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/6c4ee7a0-9d0e-414f-9bea-4722a1f77291/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/6c4ee7a0-9d0e-414f-9bea-4722a1f77291/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 5105159,
      genres: [
        {
          name: "драма",
        },
      ],
      description: "Постановка знаменитой пьесы на сцене МХТ им. Чехова.",
      name: "Сирано де Бержерак",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/d6a969e9-3d77-4d43-99b1-3a7d094d9c72/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/d6a969e9-3d77-4d43-99b1-3a7d094d9c72/x1000",
      },
      rating: {
        kp: 8.712,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2022,
    },
    {
      rating: {
        kp: 8.712,
        imdb: 5.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 722055,
      name: "Бобби и охотники за привидениями",
      description:
        "Подросток по имени Санне очень интересуется пугающими историями о привидениях, злых духах и других таинственных и необъяснимых вещах, о которых он наслышан с раннего детства. Дело в том, что его отец Лукас является очень известным охотником за привидениями, и он часто рассказывает сыну занимательные истории. И вот однажды Лукас получает задание отправиться на бывший морской лайнер «Роттердам», чтобы выяснить причину происходящих там странных вещей. Он берет сына с собой на задание. На заброшенном лайнере Санне встречает мальчика по имени Бобби примерно своего возраста и твердо решает ему помочь. Вот только возможно ли помочь призраку, или Бобби — самый что ни есть реальный человек?",
      year: 2013,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/7bda1280-a17f-4bff-b9b2-5710982f8666/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/7bda1280-a17f-4bff-b9b2-5710982f8666/x1000",
      },
      genres: [
        {
          name: "семейный",
        },
      ],
    },
    {
      id: 42782,
      name: "Операция «Ы» и другие приключения Шурика",
      year: 1965,
      description:
        "Студент Шурик попадает в самые невероятные ситуации: сражается с хулиганом Верзилой, весьма оригинальным способом готовится к экзамену и предотвращает «ограбление века», на которое идёт троица бандитов — Балбес, Трус и Бывалый.",
      rating: {
        kp: 8.709,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/ccd69a69-7405-4b41-89a8-60dd6dc2a3ee/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/ccd69a69-7405-4b41-89a8-60dd6dc2a3ee/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "мелодрама",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 502934,
      name: "Джиллиан Майклс: Стройная фигура за 30 дней",
      year: 2007,
      description:
        "Перед Вами эффективный 30-дневный курс упражнений от эксперта в мире фитнеса Джиллиан Майклс. Этот комплекс специально подготовлен для людей не занимающихся постоянно спортом, но желающих сбросить лишний вес. Упражнения из него просты и выполняются по схеме «3-2-1»: три минуты посвящаются силовым упражнениям, две минуты — кардио упражнениям и одна минута — упражнениям для пресса. Выполняя эти упражнения последовательно, Вы сможете максимально эффективно сжигать лишние калории, укреплять мышцы и получить результат уже через 30 дней.",
      rating: {
        kp: 8.708,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/375c1881-a228-4d2f-9b32-f20a2a6e00c0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/375c1881-a228-4d2f-9b32-f20a2a6e00c0/x1000",
      },
      genres: [
        {
          name: "спорт",
        },
      ],
    },
    {
      id: 1046239,
      name: "Ангелы в Америке. Часть 2: Перестройка",
      rating: {
        kp: 8.708,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: null,
      year: 2017,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/3a2bf14d-4315-499b-9c6e-b68151d84dc9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/3a2bf14d-4315-499b-9c6e-b68151d84dc9/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 655544,
      name: "The Prodigy: World's on Fire",
      year: 2011,
      description:
        "Запись выступления коллектива The Prodigy на фестивале Warroir's Dance в июле 2010 года, на котором собралось около 65000 почитателей творчества проекта.",
      rating: {
        kp: 8.706,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/b1f1c22f-0571-4a4d-8d96-00349f7154c8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/b1f1c22f-0571-4a4d-8d96-00349f7154c8/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 707240,
      description:
        "Действие спектакля происходит в Америке, в семье Куперов. Придя на обед к родителям, дети узнают неприятную новость — родители вынуждены расстаться с домом из-за задолженности банку. Скидываться на оплату жилья для родителей дети не желают, и начинаются разборки — куда девать мать и отца. Старики становятся в тягость своим детям. Паре, прожившей 50 лет вместе, приходится расстаться навсегда.",
      genres: [
        {
          name: "драма",
        },
      ],
      name: "Дальше — тишина",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/529cd9b9-38be-4160-be86-66f0b0dd4531/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/529cd9b9-38be-4160-be86-66f0b0dd4531/x1000",
      },
      rating: {
        kp: 8.706,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 1978,
    },
    {
      id: 1371999,
      name: "Без срока давности. «Мертвая зона» и «Живой щит»",
      year: 2018,
      description:
        "В сентябре 1943 года в немецкий офицерский госпиталь в станице Старотитаровская было доставлено 40 детей в возрасте от 6 до 13 лет, у которых врачи выкачали кровь для переливания раненым немецким офицерам. В результате этой операции все дети погибли. Это – всего лишь одно из чудовищных преступлений, в которых обвинялись командующий оккупационными войсками Германии в Крыму генерал Эрвин Енеке и еще 11 немецких офицеров на Севастопольском процессе.",
      rating: {
        kp: 8.705,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/125f0425-d3b4-48cf-a05b-0546ec95c0d8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/125f0425-d3b4-48cf-a05b-0546ec95c0d8/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 4417919,
      description: "",
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Мир природы. Миниатюрные чудеса",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/882543f7-4d88-4c29-8e51-5c53839250af/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/882543f7-4d88-4c29-8e51-5c53839250af/x1000",
      },
      rating: {
        kp: 8.704,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2017,
    },
    {
      rating: {
        kp: 8.704,
        imdb: 9.2,
        filmCritics: 9.4,
        russianFilmCritics: 0,
        await: null,
      },
      id: 325,
      name: "Крестный отец",
      description:
        "Криминальная сага, повествующая о нью-йоркской сицилийской мафиозной семье Корлеоне. Фильм охватывает период 1945-1955 годов.\n\nГлава семьи, Дон Вито Корлеоне, выдаёт замуж свою дочь. В это время со Второй мировой войны возвращается его любимый сын Майкл. Майкл, герой войны, гордость семьи, не выражает желания заняться жестоким семейным бизнесом. Дон Корлеоне ведёт дела по старым правилам, но наступают иные времена, и появляются люди, желающие изменить сложившиеся порядки. На Дона Корлеоне совершается покушение.",
      year: 1972,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/c11652e8-653b-47c1-8e72-1552399a775b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/c11652e8-653b-47c1-8e72-1552399a775b/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 839872,
      description:
        "Перед 15-летним Кристофером лежит мертвая соседская собака – её закололи вилами. На часах семь минут первого ночи, и мальчик – главный подозреваемый. Чтобы расследовать загадочное убийство животного, он записывает все факты, хотя отец запрещает ему вмешиваться в эту историю. У Кристофера острый ум, он силён в математике, но мало что понимает в повседневной жизни. Он не выносит прикосновений, не доверяет незнакомым и никогда не сходит с привычного пути в одиночку. Кристофер ещё не знает, что расследование перевернет всю его жизнь.",
      genres: [
        {
          name: "драма",
        },
        {
          name: "детектив",
        },
      ],
      name: "Загадочное ночное убийство собаки",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/2e519a54-1193-49e4-8740-133cb5c18f05/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/2e519a54-1193-49e4-8740-133cb5c18f05/x1000",
      },
      rating: {
        kp: 8.703,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2012,
    },
    {
      id: 501820,
      name: "Green Day: Пуля в Библии",
      year: 2005,
      description:
        "Один из крупнейших концертов группы Green Day, сыгранный 18 и 19 июня 2005 года.",
      rating: {
        kp: 8.698,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/60a13216-6c48-41e9-8948-a08ce752e460/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/60a13216-6c48-41e9-8948-a08ce752e460/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 655543,
      name: "Адель: Концерт в Королевском Альберт-Холле",
      year: 2011,
      description: null,
      rating: {
        kp: 8.698,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/deae14d9-7b2e-4825-8272-a68cc2b78a1c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/deae14d9-7b2e-4825-8272-a68cc2b78a1c/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 807413,
      name: "Muse – Live in Rome",
      year: 2013,
      description:
        "Концерт «The Unsustainable Tour» с аудиторией более чем в 60 тысяч человек состоялся в июле 2013 года на легендарном итальянском стадионе Olympic Stadium в Риме. Шоу, с которым группа объехала все главные концертные площадки мира.",
      rating: {
        kp: 8.697,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/bb7f0ec5-5874-4b47-81b2-af4a2bfa9cac/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/bb7f0ec5-5874-4b47-81b2-af4a2bfa9cac/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 489402,
      name: "Форпост",
      rating: {
        kp: 8.697,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: null,
      year: 2007,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/0bf16ef2-c232-4219-963b-e062c377e9b8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/0bf16ef2-c232-4219-963b-e062c377e9b8/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 438343,
      name: "Мадонна: Живой концерт в Лондоне",
      year: 2006,
      description: "Выступление Мадонны в Лондоне.",
      rating: {
        kp: 8.694,
        imdb: 9.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/71a05e24-d376-4180-af0b-e87128dc825d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/71a05e24-d376-4180-af0b-e87128dc825d/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 714255,
      name: "Coldplay Live 2012",
      year: 2012,
      description:
        "«Coldplay Live 2012» – это первый фильм группы за 9 лет, представляющий их новый альбом. Это запись мирового концертного тура «Mylo Xyloto», который с 2011 года собрал более трех миллионов зрителей.",
      rating: {
        kp: 8.693,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/00bcd813-c35b-45f0-be35-879c0ac31e6d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/00bcd813-c35b-45f0-be35-879c0ac31e6d/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 4417930,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Белый медвежонок",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/62e48881-27d3-4621-97c5-c0de2777ab5f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/62e48881-27d3-4621-97c5-c0de2777ab5f/x1000",
      },
      rating: {
        kp: 8.69,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2018,
    },
    {
      id: 303038,
      name: "Одна ночь в Париже",
      year: 2002,
      description: "Запись парижского концерта Depeche Mode 10 октября 2001 года.",
      rating: {
        kp: 8.682,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/8782d59c-1b71-4282-a7b7-2c126a2c581c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/8782d59c-1b71-4282-a7b7-2c126a2c581c/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 542232,
      name: "Владимир Высоцкий. Монолог",
      rating: {
        kp: 8.68,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Встреча состоялась 22 января 1980 года. В программу вошли 12 песен, большая часть которых прозвучала в телефильме «Вертикаль». Из этой записи не вырезали песни, которые у Высоцкого в тот раз «не получились». Остались его маленькие комментарии, иногда неуклюжие, иногда забавные, но всегда очень сердечные и трогательные...",
      year: 1987,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/e8e09283-6823-4390-af0e-2d680e62efc8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/e8e09283-6823-4390-af0e-2d680e62efc8/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 5253702,
      name: "Женщины Алтая",
      year: 2022,
      description:
        "Алтай — это сакральное место, сосредоточие особой энергии. Там можно встретить себя и услышать истинный голос своей души. Четыре героини фильма олицетворяют всю мудрость этого необыкновенного места, хранят его традиции и являются проводниками его силы. Их искренность, честность прежде всего с собой, их видение мира и громадная связь с этой землёй целительны, как и сам Алтай. Они покажут это место таким, каким знают его сами — местом силы.",
      rating: {
        kp: 8.677,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/b02ea758-a133-4a03-8ba5-dbe3bb126362/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/b02ea758-a133-4a03-8ba5-dbe3bb126362/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 4959313,
      name: "Заступница",
      year: 2013,
      description:
        "В центре сюжета — Ватиканский список Казанской иконы Божией матери — главная православная святыня Казани.\n\nВ фильме описаны четыре пласта российской истории: освобождение Москвы ополчением Минина и Пожарского, битва под Полтавой, Отечественная война 1812 года и Великая Отечественная война. Во время всех этих событий православные жители Татарстана обращались за помощью к своей защитнице — иконе Казанской Божией матери. Считается, что икона была унесена в 1611 году Казанским ополчением и позднее помогла Минину и Пожарскому освободить Москву от поляков.",
      rating: {
        kp: 8.675,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4486362/6fd71e0d-483d-444a-a420-12b7643ebce0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4486362/6fd71e0d-483d-444a-a420-12b7643ebce0/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 389,
      name: "Леон",
      year: 1994,
      description:
        "Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.",
      rating: {
        kp: 8.673,
        imdb: 8.5,
        filmCritics: 6.9,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/8662d92a-5881-4600-a7ae-549e6fd53b03/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/8662d92a-5881-4600-a7ae-549e6fd53b03/x1000",
      },
      genres: [
        {
          name: "боевик",
        },
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 935890,
      name: "Эд Ширан: «Jumpers for Goalposts»",
      year: 2015,
      description:
        "В «Jumpers for Goalposts» сведены вместе захватывающие выступления Эда на крупнейших шоу за всю его карьеру на стадионе Уэмбли в июле 2015 года, где он очаровывает 80 000 толпу своими крупнейшими хитами, в том числе: «The A Team», «Sing» и «Thinking Out Loud» - включен также сюрприз – дуэт с сэром Элтоном Джоном.\n\nВ «Jumpers for Goalposts» захватывающие выступления на сцене перемежаются эпизодами триумфального пути Эда в Уэмбли, давая нам откровенную картину жизни за кулисами и в дороге, а также честные и глубоко личные размышления Эда и близких ему людей о его достижениях.",
      rating: {
        kp: 8.673,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/16679b72-73f3-46cc-995b-d9089e155d65/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/16679b72-73f3-46cc-995b-d9089e155d65/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 303999,
      name: "Рождённые в СССР. Семилетние",
      year: 1991,
      description:
        "Рассказ о детях, родившихся в середине 80-х. В начале 90-х им было по 7 лет, тогда же в стране начали происходить известные события.",
      rating: {
        kp: 8.672,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/b27ca08b-f0fe-4fe7-918c-3f160a124053/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/b27ca08b-f0fe-4fe7-918c-3f160a124053/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 361,
      name: "Бойцовский клуб",
      year: 1999,
      description:
        "Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение.\n\nПроходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.",
      rating: {
        kp: 8.671,
        imdb: 8.8,
        filmCritics: 7.4,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/x1000",
      },
      genres: [
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 320972,
      name: "Nightwish: Конец эры",
      year: 2006,
      description:
        "Последний концерт мирового тура Nightwish «Once», который длился более чем полтора года, состоялся 21 октября на Арене Хартуолл (Hartwall Arena) в Хельсинки.",
      rating: {
        kp: 8.671,
        imdb: 9.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/8efa28fd-09d3-46b4-b398-9b5b9e076f7d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/8efa28fd-09d3-46b4-b398-9b5b9e076f7d/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.671,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 667041,
      name: "Парад Победы",
      description: "Кинохроника Парада Победы в 1945 году в Москве.",
      year: 1945,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/1cd9e4b9-6bc1-4101-9566-779fdd546474/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/1cd9e4b9-6bc1-4101-9566-779fdd546474/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      id: 1372003,
      name: "Без срока давности. Эшелоны смерти",
      year: 2018,
      description:
        "Война пришла в Псков, когда Вере Цоблиной было 8 лет. Вместо школы, она училась выживать на улицах родного города. Зима 1941-1942 годов выдалась особенно холодной. Дети часто бегали на железную дорогу – искать куски угля, не сгоревшие до конца в паровозных топках. Однажды во время такой «вылазки» дети увидели штабели, сложенные вдоль полотна железной дороги. Им показалось, что это дрова. Но это были замороженные в лед тела советских военнопленных – здесь разгрузили целый эшелон, в котором не выжил никто. Эти страшные «эшелоны смерти» приходили в Псков всю первую военную зиму.",
      rating: {
        kp: 8.67,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/76dea547-b008-485e-956e-970a67c25612/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/76dea547-b008-485e-956e-970a67c25612/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 57492,
      name: "Пусть они будут нежными (Распутница 2)",
      year: 1988,
      description:
        "Продолжение истории вражды двух женщин развивается на фоне батальных сражений Семилетней войны.",
      rating: {
        kp: 8.669,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/d4508880-fdb1-4e24-bb57-6be01931415e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/d4508880-fdb1-4e24-bb57-6be01931415e/x1000",
      },
      genres: [
        {
          name: "короткометражка",
        },
        {
          name: "музыка",
        },
        {
          name: "мелодрама",
        },
        {
          name: "военный",
        },
      ],
    },
    {
      id: 1388457,
      name: "Почему «500 дней лета» — культовое кино",
      year: 2019,
      description: null,
      rating: {
        kp: 8.667,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/eb6acedf-b56f-463c-a3f8-a7014af2dd68/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/eb6acedf-b56f-463c-a3f8-a7014af2dd68/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 471514,
      name: "Внутренний мир Шахрукх Кхана",
      rating: {
        kp: 8.666,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Документальный фильм «Внутренний мир Шахрукх Кхана» был снят известной британской режиссером-документалистом Насрин Мунни Кабир и посвящен 40-летнему юбилею известного болливудского актера.\n\nНа протяжении 2004 года режиссер следовала по пятам за суперзвездой индийского кино и фиксировала каждый его шаг. Качество фильма было гарантировано послужным списком режиссера, которая в свое время сняла более 80 кинобиографий (включая фильмы-биографии Амитабха Баччана, Шамми Капура и Гуру Дата).",
      year: 2004,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/9abccf10-1f60-4f24-9d48-fd816d94d136/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/9abccf10-1f60-4f24-9d48-fd816d94d136/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.666,
        imdb: 8.8,
        filmCritics: 8.2,
        russianFilmCritics: 80.9524,
        await: null,
      },
      id: 447301,
      name: "Начало",
      description:
        "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. \n\nИ вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. \n\nНо никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
      year: 2010,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "боевик",
        },
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "детектив",
        },
      ],
    },
    {
      rating: {
        kp: 8.665,
        imdb: 9,
        filmCritics: 8.7,
        russianFilmCritics: 100,
        await: null,
      },
      id: 3498,
      name: "Властелин колец: Возвращение короля",
      description:
        "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.",
      year: 2003,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/x1000",
      },
      genres: [
        {
          name: "фэнтези",
        },
        {
          name: "приключения",
        },
        {
          name: "драма",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      rating: {
        kp: 8.661,
        imdb: 7.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 843288,
      name: "О мышах и людях",
      description: "",
      year: 2014,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/8219558d-82c7-4aa6-9fa2-5f388bfddaa2/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/8219558d-82c7-4aa6-9fa2-5f388bfddaa2/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 5396299,
      name: "Тейлор Свифт: The Eras Tour",
      year: 2023,
      description: "Концертный тур певицы Тейлор Свифт в 2023 году.",
      rating: {
        kp: 8.66,
        imdb: 8,
        filmCritics: 8.4,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10835644/dfafdcd4-008b-42ac-a9e7-e551c8884e38/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10835644/dfafdcd4-008b-42ac-a9e7-e551c8884e38/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.66,
        imdb: 7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 722212,
      name: "Пожалеете!",
      description:
        "Йохем — главный герой фильма, учится во втором классе, и этот мальчик может смело сказать, что он не счастлив, потому что в школе ему постоянно приходится терпеть издевательства. Его лучший друг Дэвид, хоть и видит все это, но ничего не может изменить, а классный руководитель и вовсе не лезет в отношения, которые складываются внутри класса. Ситуация накаляется с каждым днем, пока однажды вечером Йохем не возвращается домой после школы…",
      year: 2013,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/85f5a6d6-194e-48db-81de-b070df4b2f61/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/85f5a6d6-194e-48db-81de-b070df4b2f61/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 156956,
      name: "Пинк Флойд: Концерт в Помпеи",
      year: 1972,
      description: null,
      rating: {
        kp: 8.658,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/f4fbaf33-bbce-4d1a-a99d-ce05ff28959f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/f4fbaf33-bbce-4d1a-a99d-ce05ff28959f/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 1200750,
      name: "Выжги сцену: Фильм",
      year: 2018,
      description: "Мировой тур 2017 года k-pop-группы BTS.",
      rating: {
        kp: 8.652,
        imdb: 8.5,
        filmCritics: 6,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/54de364f-0042-4a49-b9ea-4f09a501b507/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/54de364f-0042-4a49-b9ea-4f09a501b507/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 690289,
      name: "The Prodigy: Their Law — Синглы 1990-2005",
      year: 2005,
      description: null,
      rating: {
        kp: 8.651,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/c4abe359-3528-4b23-b3bb-3fd2aafeb1b4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/c4abe359-3528-4b23-b3bb-3fd2aafeb1b4/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 8.651,
        imdb: 8.9,
        filmCritics: 9.3,
        russianFilmCritics: 100,
        await: null,
      },
      id: 342,
      name: "Криминальное чтиво",
      description:
        "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.\nВ первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
      year: 1994,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/x1000",
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      id: 1420395,
      description: "",
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Звери в миниатюре",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/2fcb5b83-34ab-4f7b-a7a5-9ebbed3c04f3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/2fcb5b83-34ab-4f7b-a7a5-9ebbed3c04f3/x1000",
      },
      rating: {
        kp: 8.649,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2017,
    },
    {
      rating: {
        kp: 8.647,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 1048766,
      name: "Доминион",
      description:
        "Создатели фильма используют беспилотные дроны и скрытые карманные камеры, чтобы разоблачить темное подбрюшье современного животноводства, подвергая сомнению нравственность и обоснованность господства человечества над животным царством.\n\nОсновное внимание уделяется животным, используемым для производства продуктов питания, но также затрагиваются другие способы, которыми животные эксплуатируются и подвергаются насилию со стороны людей, включая одежду, развлечения и исследования.",
      year: 2018,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/546d977c-3b70-47ef-9612-1079b09dbac6/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/546d977c-3b70-47ef-9612-1079b09dbac6/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "ужасы",
        },
      ],
    },
    {
      id: 1388468,
      name: "Крош, Джармуш, рок-н-ролл: Как устроены «Смешарики»",
      year: 2020,
      description: null,
      rating: {
        kp: 8.646,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/a368a4f1-e499-44f3-a74b-3810581a0e9e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/a368a4f1-e499-44f3-a74b-3810581a0e9e/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      rating: {
        kp: 8.646,
        imdb: 8.5,
        filmCritics: 8.8,
        russianFilmCritics: 0,
        await: null,
      },
      id: 476,
      name: "Назад в будущее",
      description:
        "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
      year: 1985,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "комедия",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      id: 32898,
      name: "Достучаться до небес",
      year: 1997,
      description:
        "Волею судеб две абсолютные противоположности, тихоня Руди и разгильдяй Мартин, оказываются в одной больничной палате. Узнав неутешительные прогнозы, друзья решают использовать последние дни на полную катушку — угнать машину с деньгами, напиться текилы, и, конечно, увидеть море.",
      rating: {
        kp: 8.641,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 100,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      rating: {
        kp: 8.639,
        imdb: 8.7,
        filmCritics: 7.1,
        russianFilmCritics: 80.6452,
        await: null,
      },
      id: 258687,
      name: "Интерстеллар",
      description:
        "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
      year: 2014,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/430042eb-ee69-4818-aed0-a312400a26bf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/430042eb-ee69-4818-aed0-a312400a26bf/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "драма",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      id: 840281,
      name: "Цвет нации",
      year: 2013,
      description:
        "Документальный фильм о С.М. Прокудине-Горском, русском фотографе, который зафиксировал в цвете несколько тысяч объектов Российской империи. Фильм посвящен его 150-летию, но даже в большей степени - столетию 1913 года. Это возможность сегодняшними глазами взглянуть на ту страну, которая была и которой нет.",
      rating: {
        kp: 8.638,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/e4ec0d4a-0d85-4ec1-ae43-3fad3245b31d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/e4ec0d4a-0d85-4ec1-ae43-3fad3245b31d/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "биография",
        },
        {
          name: "история",
        },
      ],
    },
    {
      rating: {
        kp: 8.638,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 507771,
      name: "Локальное решение глобальных проблем",
      description: "",
      year: 2010,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/4448c14c-da6b-49c5-ae7e-43bd1d516444/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/4448c14c-da6b-49c5-ae7e-43bd1d516444/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 77263,
      name: "Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей",
      year: 1981,
      description:
        "Труп Чарльза Баскервиля обнаруживают неподалеку от его родового поместья. Выражение нечеловеческого ужаса на лице покойника и следы крупной собаки поблизости заставляют вспомнить старинную легенду о проклятии, тяготеющем над родом Баскервилей. Шерлоку Холмсу предстоит докопаться до истины.",
      rating: {
        kp: 8.637,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f08ba921-02dd-4d19-9c15-757e040335d6/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f08ba921-02dd-4d19-9c15-757e040335d6/x1000",
      },
      genres: [
        {
          name: "детектив",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 181752,
      name: "Нирвана. Вживую! Сегодня вечером! Билетов нет!!",
      year: 1994,
      description:
        "Нарезка записей с концертных выступлений группы в период с октября 1991 по январь 1993 года, также включающая документальные закулисные съёмки.",
      rating: {
        kp: 8.634,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/fbbf5127-889c-4717-acbd-264cec962c14/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/fbbf5127-889c-4717-acbd-264cec962c14/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 4417925,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Шпион в снегах",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/aad634d3-f41e-4b6a-9db1-267ed877c672/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/aad634d3-f41e-4b6a-9db1-267ed877c672/x1000",
      },
      rating: {
        kp: 8.631,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2018,
    },
    {
      id: 5355791,
      name: "Неведомая Россия",
      year: 2020,
      description:
        "Россия, самая большая в мире страна, поражает разнообразием природных зон: от арктических льдов до субтропиков, от Атлантического океана до Тихого; степи, озера и реки, действующие вулканы, огромные леса — природа России поистине уникальна.",
      rating: {
        kp: 8.63,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4486454/ea66dbcf-ae30-44d4-97d0-5e3ccd6db453/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4486454/ea66dbcf-ae30-44d4-97d0-5e3ccd6db453/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 339866,
      name: "Элвис",
      year: 1968,
      description:
        "Телеконцерт американского певца Элвиса Пресли, снятый для телеканала Эн-би-си.",
      rating: {
        kp: 8.627,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/4421f663-111b-4e0b-9adb-2e85b6bb6f8d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/4421f663-111b-4e0b-9adb-2e85b6bb6f8d/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.627,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 16002,
      name: "101",
      description:
        "18 июня в Пасадене на стадионе РоузБоул прошел 101-й концерт в рамках мирового турне группы Депеш Мод. Вернувшись в Англию, группа выпустила двойной концертный альбом «101»  и этот одноимённый документальный фильм.",
      year: 1989,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/051a6dbe-6cb2-4c0d-abff-5168a724c3b0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/051a6dbe-6cb2-4c0d-abff-5168a724c3b0/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 532884,
      name: "Queen Rock In Montreal",
      year: 1981,
      description: null,
      rating: {
        kp: 8.626,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/8fed31fe-9a28-4f01-a63a-82ecd2b4b9dd/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/8fed31fe-9a28-4f01-a63a-82ecd2b4b9dd/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.626,
        imdb: 8.6,
        filmCritics: 7.5,
        russianFilmCritics: 0,
        await: null,
      },
      id: 381,
      name: "Жизнь прекрасна",
      description:
        "Во время Второй мировой войны из Италии в концлагерь были отправлены евреи - отец с маленьким сыном. Жена-итальянка добровольно последовала за ними. В лагере отец сказал мальчику, что всё происходящее вокруг является большой интересной игрой за приз в виде настоящего танка. И этот классный приз достанется тому мальчику, который сможет не попасться на глаза надзирателям.",
      year: 1997,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/97353be9-362d-47bc-bbeb-c366db381c33/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/97353be9-362d-47bc-bbeb-c366db381c33/x1000",
      },
      genres: [
        {
          name: "военный",
        },
        {
          name: "комедия",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 818536,
      name: "История группы CNBlue: Никогда не останавливайся",
      rating: {
        kp: 8.625,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: null,
      year: 2013,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/37eda1e3-d7ac-44e9-868f-f97f4062e461/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/37eda1e3-d7ac-44e9-868f-f97f4062e461/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 8.621,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 320106,
      name: "Эмилия Мюллер",
      description:
        "Короткометражный фильм о молодой актрисе Эмилии Мюллер, пришедшей на пробы к фильму, на которых режиссер попросил её на камеру рассказать о содержимом своей сумочки.",
      year: 1994,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/5e2ca47f-568a-4aa0-ae9f-4efb311c8e4c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/5e2ca47f-568a-4aa0-ae9f-4efb311c8e4c/x1000",
      },
      genres: [
        {
          name: "короткометражка",
        },
      ],
    },
    {
      rating: {
        kp: 8.617,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 843284,
      name: "Верхний свет",
      description:
        "Кира Холлис живет на окраине города в небольшой квартире в блочном доме. Каждый будний день она садится в автобус, открывает книгу и едет на работу в школу. Ее цель – сделать жизнь других людей немного лучше. Но счастлива ли она сама?\n\nНа этот вопрос девушка попытается ответить сегодня вечером – когда в ее дверь неожиданно постучит Эдвард, сын бывшего возлюбленного Киры, и сообщит ей печальную новость: его мама умерла некоторое время назад. Следом на пороге появится и сам Том, отец Эдварда. Он будет шутить по поводу холодного обогревателя, раздавать советы по приготовлению спагетти и отказываться резать сыр – но что в действительности скрывается за этой маской беззаботности. Смогут ли этим зимним вечером бывшие возлюбленные снова найти общий язык?",
      year: 2014,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/0b13bb6a-ac1a-4c1a-badb-eb52beb5e7a5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/0b13bb6a-ac1a-4c1a-badb-eb52beb5e7a5/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 4934942,
      name: "Пепел детства",
      year: 2012,
      description:
        "Как война отражается на психике детей? Могут ли простить фашизм его жертвы? Фильм исследует мироощущение людей из разных стран, чье детство прошло в фашистских концлагерях.",
      rating: {
        kp: 8.615,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/5896ad3e-d3f4-4d0a-8a80-fac1c0ed250e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/5896ad3e-d3f4-4d0a-8a80-fac1c0ed250e/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.613,
        imdb: 8.9,
        filmCritics: 8.2,
        russianFilmCritics: 71.4286,
        await: null,
      },
      id: 328,
      name: "Властелин колец: Братство Кольца",
      description:
        "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. \nТихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
      year: 2001,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/x1000",
      },
      genres: [
        {
          name: "фэнтези",
        },
        {
          name: "приключения",
        },
        {
          name: "драма",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      rating: {
        kp: 8.609,
        imdb: 8.8,
        filmCritics: 8.5,
        russianFilmCritics: 83.3333,
        await: null,
      },
      id: 312,
      name: "Властелин колец: Две крепости",
      description:
        "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
      year: 2002,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/772093e4-7f68-49aa-a805-d654693aee26/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/772093e4-7f68-49aa-a805-d654693aee26/x1000",
      },
      genres: [
        {
          name: "фэнтези",
        },
        {
          name: "приключения",
        },
        {
          name: "драма",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      id: 474867,
      genres: [
        {
          name: "драма",
        },
      ],
      description:
        "Никаких сокращений и утрирований, все монологи-диалоги воспроизведены полностью в соответствии с оригинальным текстом на языке оригинала. И пусть главные герои ходят в современной одежде, дух классического произведения воссоздан безупречно, тонко и изящно.",
      name: "Гамлет",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7ed09896-25d0-4051-981f-49ed7c2d0bcc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/7ed09896-25d0-4051-981f-49ed7c2d0bcc/x1000",
      },
      rating: {
        kp: 8.604,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2009,
    },
    {
      id: 320029,
      genres: [
        {
          name: "музыка",
        },
      ],
      description:
        "Принц,  на которого королева, занятая государственными обязанностями и флиртом, не обращает ни малейшего внимания, страдает от одиночества. Взрослый наследник, обделенный материнской любовью, имеет проблемы с женщинами и решает покончить с жизнью, утопившись в озере. Но там он встречает стаю лебедей и влюбляется в вожака стаи...",
      name: "Лебединое озеро",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/c7cf6c05-4430-4ccc-b96e-9fb8f039caec/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/c7cf6c05-4430-4ccc-b96e-9fb8f039caec/x1000",
      },
      rating: {
        kp: 8.603,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 1998,
    },
    {
      id: 370094,
      genres: [
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
        {
          name: "музыка",
        },
      ],
      description:
        "Телевизионная версия одной из самых известных и популярных опер Верди - «Травиаты».",
      name: "Травиата",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/1a63cddf-d608-459d-9911-20297ce81424/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/1a63cddf-d608-459d-9911-20297ce81424/x1000",
      },
      rating: {
        kp: 8.602,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2005,
    },
    {
      id: 1370473,
      name: "Нюрнберг. Чтобы помнили… Процесс глазами журналистов",
      year: 2015,
      description:
        "Нюрнбергский процесс был гласным в самом широком смысле этого слова. Все 403 заседания трибунала были открытыми. Печать, радио, кино дали возможность миллионам людей во всём мире следить за ходом процесса. Представителям средств массовой информации была отведена большая часть мест в зале заседаний. В фильме – самые яркие события процесса: признание заместителя Гитлера Рудольфа Гесса в симуляции безумия, неожиданное появление фельдмаршала Паулюса, шокирующее выступление советского судьи Льва Смирнова, перекрестный допрос «наци номер 2» Германа Геринга главными обвинителями союзников.",
      rating: {
        kp: 8.598,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/146c44c7-9515-47b2-a8d3-4696412b6ecf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/146c44c7-9515-47b2-a8d3-4696412b6ecf/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 5236800,
      name: "Истории в кино: Притворись моей",
      description: null,
      rating: {
        kp: 8.598,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/07e60257-4ac7-4a4f-8de6-061809541b5a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/07e60257-4ac7-4a4f-8de6-061809541b5a/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
      year: 2022,
    },
    {
      id: 570046,
      name: "Последние львы",
      year: 2011,
      description:
        "Львы мудрые и сильные животные по праву считаются царями природы. Так и было до недавнего времени... Человеческий эгоизм, неукротимая жажда развития поставила этот вид кошачьих на грань вымирания. Те особи, что остались в дикой природе, находятся под пристальным вниманием как защитников природы, так и алчных браконьеров. Ведь на черном рынке шкура льва стоит невероятно большие суммы. И находятся те люди, которые истребляют и без того вымирающий вид. Документальная лента «Последние львы» говорит сама за себя: этот фильм полностью посвящен жизни львов, проблемам, которые связаны с выживанием вида и возможными способами спасения величественных животных...",
      rating: {
        kp: 8.597,
        imdb: 8.2,
        filmCritics: 7.3,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/30cb3c54-6548-4487-8ee0-513b98f50711/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/30cb3c54-6548-4487-8ee0-513b98f50711/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "семейный",
        },
      ],
    },
    {
      id: 4671880,
      name: "Вечер с Адель",
      year: 2021,
      description:
        "Спустя четыре года 15-кратная обладательница премии «Грэмми» певица Адель триумфально возвращается на сцену. Камерное выступление состоит не только из главных хитов певицы, но и премьер новых песен из четвертого студийного альбома «30». Так же в программу вошло её первое за долгие годы большое эксклюзивное интервью с Опрой Уинфри. Во время беседы Адель рассказала о работе над альбомом, сыне, жизни после развода и потере веса.",
      rating: {
        kp: 8.596,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/71bd2e57-59c3-41fb-a378-8c8e8ed85cc4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/71bd2e57-59c3-41fb-a378-8c8e8ed85cc4/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "реальное ТВ",
        },
        {
          name: "ток-шоу",
        },
      ],
    },
    {
      id: 1398909,
      name: "Прости, мама",
      year: 2020,
      description:
        "Саша заезжает к матери, чтобы просто оставить пакеты с продуктами и поехать дальше по своим делам. Погружённый в обычные серые будни, он даже не задумывается о том, что эта встреча может стать последней... ",
      rating: {
        kp: 8.591,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f566ae68-56e6-44a7-b968-c00760832b9e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f566ae68-56e6-44a7-b968-c00760832b9e/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      id: 1399265,
      description:
        "Дикий лосось юга Камчатки — озерновская нерка — создаёт здесь рай. Немыслимое изобилие пищи для всех животных и птиц полуострова, источник сверхдоходов для человека. Это неисчерпаемый ресурс, который кормит миллионы людей, возрождаясь каждый год. Нерка, ничего не забирая, даёт возможность процветать всему живому.",
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Нерка. Рыба красная",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/a14da627-42f1-4942-86ec-6ccd4f12cb91/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/a14da627-42f1-4942-86ec-6ccd4f12cb91/x1000",
      },
      rating: {
        kp: 8.589,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2020,
    },
    {
      id: 892297,
      name: "ОЕ.20 Live in Kyiv",
      year: 2015,
      description:
        "В кинотеатральную версию уникального концерта «Океана Ельзи», который состоялся 21 июня 2014 года на НСК «Олимпийский» в Киеве, вошло 20 композиций. Среди них самые любимые хиты, исполненные как нынешним, так и классическим составом культовой группы. Каждый зритель сможет прикоснуться к легенде и сполна прочувствовать мощную энергию и драйв этого вечера.",
      rating: {
        kp: 8.588,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/9367f86f-3e25-4061-8266-0730905d0c57/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/9367f86f-3e25-4061-8266-0730905d0c57/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 77269,
      name: "Шерлок Холмс и доктор Ватсон: Знакомство",
      year: 1979,
      description:
        "Молодой доктор по фамилии Ватсон возвратился из Афганистана в родной туманный Лондон. Ему нужно недорогое жилье. И вот, по совету друга, он поселяется в маленьком домике на Бейкер-стрит. Его хозяйка - милая чудаковатая старушка миссис Хадсон. Также там имеется сосед - некий мистер Шерлок Холмс. Это непонятная и таинственная личность - к нему в гости приходят оборванцы и бандиты, а иногда полицейские и лорды. Кто же он? Доктор в растерянности...",
      rating: {
        kp: 8.587,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/c5ee4880-336c-428e-9829-029bb54bcf17/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/c5ee4880-336c-428e-9829-029bb54bcf17/x1000",
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "детектив",
        },
      ],
    },
    {
      rating: {
        kp: 8.587,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 737716,
      name: "Бродвейский идиот",
      description:
        "Фильм рассказывает историю Билли Джо Армстронга, начиная с концерта группы Green Day в Мэдисон Сквер Гарден и вплоть до премьеры его собственного мюзикла «American Idiot» на Бродвее.",
      year: 2013,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/c97c7a05-3b80-4a9e-9ae4-ba5a1644a9f1/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/c97c7a05-3b80-4a9e-9ae4-ba5a1644a9f1/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
        {
          name: "мюзикл",
        },
      ],
    },
    {
      id: 4448995,
      name: "Михаил Зорин. Жизнь продолжается!",
      year: 2020,
      description:
        "Михаил Петрович Зорин — последний доживший до наших дней связист первого состава легендарного 330-го стрелкового полка (86-й стрелковой дивизии), героически сражавшегося на Невском пятачке в ходе обороны Ленинграда в годы Великой Отечественной войны. В апреле 1942 г. в ходе мощнейшего натиска немецкой группировки пали практически все бойцы, находившиеся на тот момент в расположении полка, а раненые попали в плен. Михаил Зорин остался жив благодаря уникальному стечению обстоятельств.",
      rating: {
        kp: 8.584,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/35430c75-b43d-48a0-9b70-18d921c53c1d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/35430c75-b43d-48a0-9b70-18d921c53c1d/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
        {
          name: "военный",
        },
      ],
    },
    {
      id: 369153,
      name: "Рождённые в СССР. Четырнадцатилетние",
      year: 1998,
      description:
        "«Рожденные в СССР» — фильм о детях, родившихся где-то в середине 80-х. В начале 90-х им было по 7 лет, тогда же в стране начали происходить известные события. Скорее всего, одной из идей авторов было показать жизнь простых советских детей на фоне перемен в стране. Дети были подобраны из абсолютно разных культурных и социальных слоев общества, и о каждом из них сняли сюжет.\n\nЧерез семь лет та же съемочная группа разыскала тех же детей и сняла вторую серию фильма — «14-летние. Рожденные в СССР». Общая идея та же: как дети растут в теперь уже постперестроечной России (как выяснилось, в России остались далеко не все).",
      rating: {
        kp: 8.584,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/1c833986-2499-4ca4-8972-bc71dd8c456e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/1c833986-2499-4ca4-8972-bc71dd8c456e/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 1398916,
      name: "BTS: Разбей тишину: Фильм",
      year: 2020,
      description:
        "После завершения мирового тура «Love Yourself: Speak Yourself» BTS попали в топ чарта Billboard Boxscore и стали первой корейской группой в истории, выступившей на стадионе Уэмбли в Лондоне. В рамках тура концерты прошли в Лос-Анджелесе, Чикаго, Нью-Йорке, Сан-Паулу, Лондоне, Париже, Осаке, Сидзуоке, Эр-Рияде и Сеуле.\n\nЭтот документальный фильм дает доступ к кадрам за сценой, следуя шаг за шагом с участниками группы по всем городам тура. За кулисами BTS предстанут c новой стороны. Участники коллектива откровенно делятся личными историями, которые до этого никогда не произносились вслух.",
      rating: {
        kp: 8.584,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/922f3137-5b9d-4b6f-b644-0d2af94a977c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/922f3137-5b9d-4b6f-b644-0d2af94a977c/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "документальный",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.584,
        imdb: 8.5,
        filmCritics: 7.4,
        russianFilmCritics: 50,
        await: null,
      },
      id: 474,
      name: "Гладиатор",
      description:
        "В великой Римской империи не было военачальника, равного генералу Максимусу. Непобедимые легионы, которыми командовал этот благородный воин, боготворили его и могли последовать за ним даже в ад.\n\nНо случилось так, что отважный Максимус, готовый сразиться с любым противником в честном бою, оказался бессилен против вероломных придворных интриг. Генерала предали и приговорили к смерти. Чудом избежав гибели, Максимус становится гладиатором.\n\nБыстро снискав себе славу в кровавых поединках, он оказывается в знаменитом римском Колизее, на арене которого он встретится в смертельной схватке со своим заклятым врагом...",
      year: 2000,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/x1000",
      },
      genres: [
        {
          name: "история",
        },
        {
          name: "боевик",
        },
        {
          name: "драма",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      id: 4626579,
      name: "В поисках снежного барса",
      year: 2021,
      description:
        "Снежный барс — один из самых неуловимых обитателей нашей планеты. Двое путешественников отправляются в Тибет в надежде запечатлеть грациозную горную кошку. Наблюдая за величественной природой и уникальными животными, они задумываются, какое место в этом удивительном мире занимает человек?",
      rating: {
        kp: 8.583,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10671298/5e668d26-d17c-4040-a435-e2db15831e85/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10671298/5e668d26-d17c-4040-a435-e2db15831e85/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      id: 710071,
      name: "Led Zeppelin «Celebration Day»",
      year: 2012,
      description:
        "Грандиозный концерт группы Led Zeppelin на площадке O2 Arena в Лондоне, который посетили  18 тысяч зрителей из 20 миллионов желающих.",
      rating: {
        kp: 8.583,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/cfb78b7d-02a6-4d79-a6f6-d0d6bfe6051b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/cfb78b7d-02a6-4d79-a6f6-d0d6bfe6051b/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      rating: {
        kp: 8.583,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 1181294,
      name: "Анна Каренина. Мюзикл",
      description:
        "«Анна Каренина» — шедевр мировой классики о взаимоотношениях мужчины и женщины. Драматическая история любви замужней дамы Анны Карениной и блестящего молодого офицера Алексея Вронского разворачивается на фоне блеска и роскоши дворянской жизни второй половины XIX века.",
      year: 2018,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/a34d68be-08c8-4bc5-9d95-2bec162b73b5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/a34d68be-08c8-4bc5-9d95-2bec162b73b5/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 472253,
      name: "Время ДДТ",
      rating: {
        kp: 8.579,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Уникальные исторические кинокадры и репортажные видеозаписи, многочисленные свидетельства друзей-рокеров и, наконец сам Юрий Шевчук, как основной комментатор собственного творчества. 20-летняя история группы, рассказанная самими участниками.",
      year: 2002,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/0e6005c6-f2b3-4cef-a4e8-f89f81a570bf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/0e6005c6-f2b3-4cef-a4e8-f89f81a570bf/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 1143242,
      name: "Джентльмены",
      year: 2019,
      description:
        "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
      rating: {
        kp: 8.578,
        imdb: 7.8,
        filmCritics: 6.5,
        russianFilmCritics: 86.3636,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/x1000",
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "комедия",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      id: 4395219,
      name: "Мой Хатико",
      year: 2023,
      description:
        "Чунцин, начало 2000-х годов. Во время поездки за город с коллегами немолодой университетский преподаватель Чэнь подбирает на дороге грязного и испуганного щенка. Никто не соглашается взять пёсика себе, поэтому мужчине приходится втихаря принести его домой, хотя супруга терпеть не может собак. Пообещав, что найдёт щенку новый дом, Чэнь тем не менее отказывает всем претендентам — так пёс получает кличку Хатико и становится новым членом семьи.",
      rating: {
        kp: 8.572,
        imdb: 7.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/9784475/50e2559d-c29c-494b-b729-3961352e20bc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/9784475/50e2559d-c29c-494b-b729-3961352e20bc/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 319354,
      name: "Майти Буш: Концерт",
      year: 2006,
      description: null,
      rating: {
        kp: 8.571,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f1febfeb-3a74-49d2-a579-2d9db9adeaac/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f1febfeb-3a74-49d2-a579-2d9db9adeaac/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      rating: {
        kp: 8.571,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 725142,
      name: "Легион Блэк",
      description: null,
      year: 2012,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/bfa2aaea-9aae-475a-9880-a07ea6e1e45d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/bfa2aaea-9aae-475a-9880-a07ea6e1e45d/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 1049551,
      name: "Другая жизнь",
      rating: {
        kp: 8.571,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Фильм о вере человека в себя и о великом навыке выживания. Это фильм о сильных, свободных духом людях, которых не заботит большинство вещей, волнующих жителей городов.",
      year: 2017,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/e2c786fc-3a4d-4936-bad7-812d071e2d73/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/e2c786fc-3a4d-4936-bad7-812d071e2d73/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5105855,
      name: "Одна жизнь",
      year: 2023,
      description:
        "Скромного и непубличного джентльмена Николаса Уинтона приглашают на телевизионное ток-шоу, где он наконец-то узнает всю правду о событиях Второй мировой войны, когда он пытался спасти сотни детей от гибели в концлагере. Одна жизнь может изменить судьбы сотен людей — как в прошлом, так и в настоящем.",
      rating: {
        kp: 8.568,
        imdb: 7.5,
        filmCritics: 7.3,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "биография",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 1043228,
      name: "Rammstein: Paris!",
      year: 2017,
      description:
        "Концертный фильм, записанный на выступлениях группы Rammstein в Париже 6 и 7 марта 2012 года в рамках тура «Made in Germany».",
      rating: {
        kp: 8.565,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/c4883a72-a74b-4f25-a220-ceb0d75c9533/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/c4883a72-a74b-4f25-a220-ceb0d75c9533/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 10279,
      name: "Улица Паради, дом 588",
      rating: {
        kp: 8.565,
        imdb: 6.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Продолжение фильма «Мать» («Mayrig»), рассказывающего о судьбе одной армянской семьи, вынужденной бежать во Францию во время геноцида.  События переносят нас в современность. Прошло много лет, сын вырос и стал известным театральным режиссером, он женат на француженке, его дети не знают армянского языка. Но вот, ставя спектакль по истории своей семьи, он заново переживает все то, о чем забыл, попав в круговорот собственной жизни, и эти воспоминания заставляют его многое в ней изменить.",
      year: 1991,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/f88de6a7-1063-48d2-9688-73b6cffe0a16/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/f88de6a7-1063-48d2-9688-73b6cffe0a16/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 683014,
      description:
        "Путешествие по Земле, заселенной доисторическими динозаврами, продолжается. Но на этот раз со зрителем будет опытный проводник Найджел Марвин. Он собирает уникальный материал о сильнейшем оружии доисторических гигантов – это их когти. Исследователь попробует спровоцировать животное на агрессию, чтобы увидеть, как применяется это главное оружие. Возможно, что Найджелу удастся поймать одного из гигантов и поближе рассмотреть строение его когтей.",
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
      name: "BBC: Прогулки с динозаврами. Гигантский коготь",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4486362/c9a1c37c-a744-4c4d-8ea7-b118f17cd5b1/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4486362/c9a1c37c-a744-4c4d-8ea7-b118f17cd5b1/x1000",
      },
      rating: {
        kp: 8.564,
        imdb: 7.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2002,
    },
    {
      id: 5413367,
      name: "Кибердеревня. Фильм о фильме",
      year: 2023,
      description:
        "Создатели «Кибердеревни» — режиссер Сергей Васильев, продюсеры, актерский состав, специалисты по компьютерной графике, художники-постановщики и другие — рассказывают, как у них получилось развить короткий шутливый ролик в целый фантастический сериал-блокбастер, отправляющий нас в мир России будущего.",
      rating: {
        kp: 8.563,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/363d2538-2414-4561-ac3b-47dac74443a0/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/363d2538-2414-4561-ac3b-47dac74443a0/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.563,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 493885,
      name: "Без обратного пути",
      description: "",
      year: 2010,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/31ae359e-cf60-4c80-97e0-c19c17d5f917/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/31ae359e-cf60-4c80-97e0-c19c17d5f917/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "биография",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 4987695,
      name: "Бо Бёрнем: Дома (Невошедшее)",
      year: 2022,
      description: null,
      rating: {
        kp: 8.562,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/bfa02a95-464e-45ee-b27c-edea709205be/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/bfa02a95-464e-45ee-b27c-edea709205be/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      rating: {
        kp: 8.562,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 843290,
      name: "Трамвай «Желание»",
      description:
        "Уже не молодая, но не потерявшая обаяния и красоты, Бланш ДюБуа приезжает к своей беременной сестре Стелле, живущей с мужем в бедном районе Нового Орлеана. Бланш разорена, ей не на что и негде жить. Стэнли Ковальски, муж Стеллы, воплощает собой грубость и естественность в самом неприятном значении этого слова. Он относится к Бланш с неприязнью и позже, узнав о тайнах ее прошлого, становится главной причиной невозможности ее счастья. Куда же привез красавицу «Трамвай «Желание»» и что ее ждет здесь?",
      year: 2014,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/3ab46892-a812-46d2-a373-2b58b662a49b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/3ab46892-a812-46d2-a373-2b58b662a49b/x1000",
      },
      genres: [],
    },
    {
      id: 400400,
      genres: [
        {
          name: "документальный",
        },
      ],
      description:
        "От нашего первого крика до нашего последнего вздоха наши тела секунда за секундой подвергаются непрерывному преобразованию. Национальный Географический Канал (NGC) забрался внутрь человека, чтобы выяснить, как наши тела эволюционируют от рождения к старости.",
      name: "Внутри живого тела",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/c9109547-ddfe-4891-919e-f8b3419d7bdb/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/c9109547-ddfe-4891-919e-f8b3419d7bdb/x1000",
      },
      rating: {
        kp: 8.559,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2007,
    },
    {
      rating: {
        kp: 8.559,
        imdb: 8.1,
        filmCritics: 6.7,
        russianFilmCritics: 0,
        await: null,
      },
      id: 522,
      name: "Карты, деньги, два ствола",
      description:
        "Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.\nВ противном случае и ему и его «спонсорам» каждый день будут отрубать по пальцу, а потом... Чтобы выйти из положения, ребята решили ограбить бандитов, решивших ограбить трех «ботаников», выращивающих марихуану для местного наркобарона. Но на этом приключения четверки не заканчиваются...",
      year: 1998,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/x1000",
      },
      genres: [
        {
          name: "боевик",
        },
        {
          name: "комедия",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 671693,
      name: "Мост над бездной",
      rating: {
        kp: 8.555,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Авторский проект Паолы Волковой, посвященный шедеврам изобразительного искусства.",
      year: 2012,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/47e1a3cf-34f4-4303-904c-0d2a687dd3e4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/47e1a3cf-34f4-4303-904c-0d2a687dd3e4/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      rating: {
        kp: 8.554,
        imdb: 8.2,
        filmCritics: 6.4,
        russianFilmCritics: 100,
        await: null,
      },
      id: 526,
      name: "Большой куш",
      description:
        "Фрэнки Четыре Пальца должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, он попал в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.",
      year: 2000,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/x1000",
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "комедия",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      id: 309397,
      name: "Дом. История путешествия",
      year: 2009,
      description:
        "Фильм демонстрирует нам красоту планеты и последствия разрушений, нанесенных деятельностью человека. Незаживающие шрамы, нанесенные Земле промышленными производствами, последствия войн, экологических катастроф, раскрывают зрителю реальную ситуацию на планете.",
      rating: {
        kp: 8.552,
        imdb: 8.5,
        filmCritics: 5.3,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/ca2465ca-2cea-4ee9-bc08-d58a695a5e2b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/ca2465ca-2cea-4ee9-bc08-d58a695a5e2b/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "семейный",
        },
      ],
    },
    {
      id: 4960502,
      name: "Истории в кино: Купи коня",
      year: 2022,
      description:
        "Шоу, где актеры придумывают сюжет и героев прямо на сцене, на основе истории, рассказанной случайным зрителем из зала — без заготовленного сценария.",
      rating: {
        kp: 8.551,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/19cd1118-49fd-4941-93e1-27bf391e9b55/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/19cd1118-49fd-4941-93e1-27bf391e9b55/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 604183,
      genres: [
        {
          name: "документальный",
        },
      ],
      description: "Серия интервью с Жилем Делёзом.",
      name: "Алфавит Жиля Делёза",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f70d89c9-aaac-47e2-a90e-bd0306d714b4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f70d89c9-aaac-47e2-a90e-bd0306d714b4/x1000",
      },
      rating: {
        kp: 8.551,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 1996,
    },
    {
      id: 44386,
      name: "Джентльмены удачи",
      year: 1971,
      description:
        "Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.\n\nМилиция внедряет добряка Трошкина в воровскую среду - и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...",
      rating: {
        kp: 8.55,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/218102a7-96be-4d7e-8029-815de0f37cfa/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/218102a7-96be-4d7e-8029-815de0f37cfa/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
        {
          name: "детектив",
        },
      ],
    },
    {
      id: 43395,
      name: "...А зори здесь тихие",
      year: 1972,
      description:
        "В прифронтовой полосе группа девушек-зенитчиц вынуждена вступить в неравный бой с вражескими десантниками. Эти девчонки мечтали о большой любви, нежности, семейном тепле - но на их долю выпала жестокая война, и они до конца выполнили свой воинский долг…",
      rating: {
        kp: 8.548,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/7d011306-5cf5-421d-b01d-3684e500be92/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/7d011306-5cf5-421d-b01d-3684e500be92/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "военный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 847406,
      name: "Роджер Уотерс: The Wall",
      year: 2014,
      description:
        "Фильм представляет собой уникальный сплав реставрированных концертных съемок, документальной хроники, анимационных фрагментов и самых передовых технологий визуального изображения и спец-эффектов, Роджер Уотерс также включил кадры из своей автобиографии.",
      rating: {
        kp: 8.546,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/f503dda9-eff6-4235-b77f-ff7acec01200/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/f503dda9-eff6-4235-b77f-ff7acec01200/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 530,
      genres: [
        {
          name: "биография",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
      ],
      description:
        "От всемирной известности до греховных глубин — все это познал на своей шкуре Джон Форбс Нэш-младший. Математический гений, он на заре своей карьеры сделал титаническую работу в области теории игр, которая перевернула этот раздел математики и практически принесла ему международную известность.\n\nОднако буквально в то же время заносчивый и пользующийся успехом у женщин Нэш получает удар судьбы, который переворачивает уже его собственную жизнь.",
      name: "Игры разума",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/x1000",
      },
      rating: {
        kp: 8.543,
        imdb: 8.2,
        filmCritics: 7.2,
        russianFilmCritics: 80,
        await: null,
      },
      year: 2001,
    },
    {
      id: 4417920,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Супер белки",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/0b32ccf9-2ea1-45ae-b2e6-e9afbc76fd6e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/0b32ccf9-2ea1-45ae-b2e6-e9afbc76fd6e/x1000",
      },
      rating: {
        kp: 8.543,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2018,
    },
    {
      id: 1263355,
      name: "Женщина",
      year: 2019,
      description:
        "Всемирный проект, собравший рассказы 2000 женщин из 50 стран мира. Героини проекта делятся историями на темы материнства, образования, брака и финансовой независимости, говорят о менструации и сексуальности. Здесь вы услышите голоса женщин, которые впервые смогли поделиться своей историей. Большую часть фильма составляют истории, рассказанные от первого лица, — сотни рассказов самых разных женщин, от глав государств до королев красоты, от водителей автобусов до женщин-фермеров из отдаленных районов.",
      rating: {
        kp: 8.541,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/c6702c7e-3300-423d-b0f3-265453bb80bb/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/c6702c7e-3300-423d-b0f3-265453bb80bb/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 557936,
      name: "Дорога к счастью",
      year: 2009,
      description: null,
      rating: {
        kp: 8.538,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/1e2a5c32-4f90-4956-b28c-89fe07f2db03/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/1e2a5c32-4f90-4956-b28c-89fe07f2db03/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5274402,
      name: "Дикие кошки",
      year: 2021,
      description: "О жизни одной семьи рысей в предгорьях Юры.",
      rating: {
        kp: 8.532,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/f9f1960b-624b-40fc-bb2b-4e78664e0084/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/f9f1960b-624b-40fc-bb2b-4e78664e0084/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5088750,
      name: "Истории в кино: Паранормальное",
      description: null,
      rating: {
        kp: 8.532,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/5c7c5713-2898-4858-8659-fe49e828dfeb/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/5c7c5713-2898-4858-8659-fe49e828dfeb/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
      year: 2022,
    },
    {
      id: 4715352,
      description:
        "Фильм рассказывает о единственном в мире цирке, где трудные подростки обучаются цирковому искусству и становятся настоящими артистами. На своем примере проект «‎Упсала-Цирк» показывает, как при помощи творчества можно подарить детям возможность прожить более интересную и успешную жизнь. История дает понять подросткам, что есть и места, где им будут рады, и люди, готовые понять и помочь.",
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Берегите хулиганов",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4716873/303bc8c5-b064-4588-9d2b-890b1f880c86/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4716873/303bc8c5-b064-4588-9d2b-890b1f880c86/x1000",
      },
      rating: {
        kp: 8.531,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2021,
    },
    {
      rating: {
        kp: 8.531,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 799312,
      name: "МакКонки",
      description:
        "Этот полнометражный документальный фильм студии Red Bull Media House, снятый совместно с компанией Matchstick Productions, посвящен великому спортсмену, сделавшему очень много для развития своего вида спорта и для воплощения в жизнь своих устремлений.  Шейн был одним из основоположников такого направления фристайла, как фрирайд, он же и придумал этот термин.  Он стал первым человеком в истории, совершившим бейс-прыжок со здания на лыжах. Он понял, что с парашютом сможет добраться до таких склонов, о которых раньше мог только мечтать, не говоря уже о ни с чем не сравнимом ощущении полета. Шейн стал одним из первых спортсменов, рискнувших объединить несколько дисциплин в одну: он съезжал на лыжах со склона, затем, уже без лыж, взмывал в воздух в вингсьюте, а затем приземлялся с парашютом.",
      year: 2013,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/4164a715-1b86-4713-a318-fc2ffa4c21ad/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/4164a715-1b86-4713-a318-fc2ffa4c21ad/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "спорт",
        },
        {
          name: "приключения",
        },
        {
          name: "биография",
        },
      ],
    },
    {
      id: 397667,
      name: "Остров проклятых",
      year: 2009,
      description:
        "Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.",
      rating: {
        kp: 8.53,
        imdb: 8.2,
        filmCritics: 6.7,
        russianFilmCritics: 85.7143,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/617303b7-cfa7-4273-bd1d-63974bf68927/x1000",
      },
      genres: [
        {
          name: "триллер",
        },
        {
          name: "детектив",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 8.53,
        imdb: 9,
        filmCritics: 9.7,
        russianFilmCritics: 0,
        await: null,
      },
      id: 327,
      name: "Крестный отец 2",
      description:
        "Для дона Корлеоне и его сына не существует моральных преград на пути к достижению целей. Они превращают мафию, построенную по патриархальным сицилийским законам, в весьма прагматичную, жесткую корпорацию, плавно интегрируя её в большой бизнес Америки.",
      year: 1974,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/33474b2a-d670-47c8-9cbe-51291847b6d4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/33474b2a-d670-47c8-9cbe-51291847b6d4/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      rating: {
        kp: 8.53,
        imdb: 8.1,
        filmCritics: 7.9,
        russianFilmCritics: 80,
        await: null,
      },
      id: 324,
      name: "Поймай меня, если сможешь",
      description:
        "Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам.\n\nАгент ФБР Карл Хэнрэтти отдал бы все, чтобы схватить Фрэнка и привлечь к ответственности за свои деяния, но Фрэнк всегда опережает его на шаг, заставляя продолжать погоню.",
      year: 2002,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/x1000",
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "биография",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 736713,
      name: "Тим Минчин: Вы к этому готовы?",
      year: 2009,
      description: null,
      rating: {
        kp: 8.527,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/c52cd1aa-9834-4d7a-93b6-724e80e4d136/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/c52cd1aa-9834-4d7a-93b6-724e80e4d136/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
    },
    {
      rating: {
        kp: 8.526,
        imdb: 9,
        filmCritics: 8.6,
        russianFilmCritics: 50,
        await: null,
      },
      id: 111543,
      name: "Темный рыцарь",
      description:
        "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.",
      year: 2008,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "боевик",
        },
        {
          name: "триллер",
        },
        {
          name: "криминал",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 8.526,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 1191168,
      name: "Мэйден",
      description:
        "В конце 1980-х никто не мог представить команду из одних девушек на престижной регате. Нужна была героиня, которая бросит вызов стереотипам — и ей стала британка Трейси Эдвардс. В 1989 году она возглавила банду 12 единомышленниц, которые отправились в кругосветную гонку на яхте «Мэйден», доказав, что жажда приключений может быть топливом жизни человека независимо от его пола. Тридцать лет спустя фильм, рассказывающий об их авантюре, вошел в шорт-лист «Оскара» и покорил независимый американский прокат.\n\n",
      year: 2018,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/334fe308-551e-4c31-9cd7-b617df164aed/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/334fe308-551e-4c31-9cd7-b617df164aed/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "биография",
        },
        {
          name: "спорт",
        },
      ],
    },
    {
      id: 46225,
      name: "Бриллиантовая рука",
      year: 1968,
      description:
        "В южном городке орудует шайка валютчиков, возглавляемая Шефом и его помощником Графом (в быту — Геной Козодоевым). Скромный советский служащий и примерный семьянин Семен Семенович Горбунков отправляется в зарубежный круиз на теплоходе, где также плывет Граф, который должен забрать бриллианты в одном из восточных городов и провезти их в загипсованной руке. Но из-за недоразумения вместо жулика на условленном месте падает ничего не подозревающий Семен Семенович, и драгоценный гипс накладывают ему.",
      rating: {
        kp: 8.522,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/32ef92db-5cbb-426d-acf9-2327b695edf8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/32ef92db-5cbb-426d-acf9-2327b695edf8/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 346,
      name: "12 разгневанных мужчин",
      rating: {
        kp: 8.522,
        imdb: 9,
        filmCritics: 9.1,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Юношу обвиняют в убийстве собственного отца, ему грозит электрический стул. Двенадцать присяжных собираются, чтобы вынести вердикт: виновен или нет. С начала заседания почти все считают подсудимого виновным, и лишь только один из двенадцати позволил себе усомниться. И он решает убедить остальных в своей правоте.",
      year: 1956,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/db273efe-5f61-481a-9e42-ad0aff776c1f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/db273efe-5f61-481a-9e42-ad0aff776c1f/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "детектив",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 719915,
      name: "Один год из жизни Армина ван Бюрена",
      rating: {
        kp: 8.521,
        imdb: 7.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: "",
      year: 2012,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/715eb902-9771-4184-a7ab-92237c468ead/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/715eb902-9771-4184-a7ab-92237c468ead/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 331601,
      name: "Полтора года из жизни Металлики",
      year: 1992,
      description: null,
      rating: {
        kp: 8.518,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/1922b493-5069-480f-838a-8f63013328bf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/1922b493-5069-480f-838a-8f63013328bf/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 471475,
      name: "Внешний мир Шахрукх Кхана",
      rating: {
        kp: 8.518,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Эту документальную ленту британского режиссера Насрин Мунни Кабир полтора миллиарда почитателей таланта Короля Болливуда ждали почти десять лет.\n\nСегодня ДВД диск с фильмом «ВНЕШНИЙ МИР ШАХ РУКХ КХАНА» стал доступен сотням тысяч фанатов Шаха на просторах СНГ. Нам предстоит в течение часа совершить в компании Шах Рукха путешествие по США и Великобритании, где его концертные шоу переполняли стадионы и концертные площадки в 15 крупных городах. Режиссер и актер допускают нас за кулисы концертов. И мы можем своими глазами увидеть прелесть взаимоотношений звезды и толпы обезумевших фанатов. А еще услышать размышления уставшего после концерта Шаха о об оборотной стороне шоу-бизнеса.",
      year: 2004,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/d50c336d-10a8-4147-bd3f-66feb6194c39/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/d50c336d-10a8-4147-bd3f-66feb6194c39/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 453204,
      name: "Nightwish: От желаний к вечности",
      year: 2001,
      description: null,
      rating: {
        kp: 8.517,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/5dfcaf92-caf8-489f-bc63-486753f85eca/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/5dfcaf92-caf8-489f-bc63-486753f85eca/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      id: 195334,
      name: "Престиж",
      rating: {
        kp: 8.517,
        imdb: 8.5,
        filmCritics: 7.1,
        russianFilmCritics: 33.3333,
        await: null,
      },
      description:
        "Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.\n\nОни готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…",
      year: 2006,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/0e1384ae-6367-4bba-9e5d-d91c6625371e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/0e1384ae-6367-4bba-9e5d-d91c6625371e/x1000",
      },
      genres: [
        {
          name: "триллер",
        },
        {
          name: "фантастика",
        },
        {
          name: "драма",
        },
        {
          name: "детектив",
        },
      ],
    },
    {
      id: 1372000,
      name: "Без срока давности. Дети «Лебенсборна»",
      year: 2018,
      description:
        "«Лебенсборн» (Lebensborn) – в переводе с немецкого – «источник жизни». Организация была основана в 1935 году. По задумке главы СС Генриха Гиммлера, дома Лебенсборна должны были стать местом, где незамужние женщины могли тайно родить ребёнка и оставить его на воспитание государству. Под лозунгом «Подари ребёнка фюреру!» немецких женщин призывали рожать «истинных арийцев». В реальности программа вылилась в массовое похищение и вывоз детей из СССР и других, оккупированных немцами территорий, в дома Лебенсборн.",
      rating: {
        kp: 8.516,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/6fc8b023-1309-462d-a839-53d81cbd8262/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/6fc8b023-1309-462d-a839-53d81cbd8262/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 737548,
      genres: [
        {
          name: "драма",
        },
        {
          name: "биография",
        },
        {
          name: "история",
        },
      ],
      description:
        "Фильм расскажет о ранней истории создания сериала «Доктор Кто». История о становлении Доктора в зависимости от таланта актера Уильяма Хартнела и о невероятных стечениях обстоятельств, которые преследуют сериал.",
      name: "Приключение в пространстве и времени",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/cb23ef50-2c0a-4987-954c-2d9fbef34724/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/cb23ef50-2c0a-4987-954c-2d9fbef34724/x1000",
      },
      rating: {
        kp: 8.516,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2013,
    },
    {
      id: 349,
      name: "Хороший, плохой, злой",
      rating: {
        kp: 8.514,
        imdb: 8.8,
        filmCritics: 8.8,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Разгар Гражданской войны, Дикий Запад. По воле судьбы трое мужчин вынуждены объединить усилия в поисках украденного золота. Но совместная работа — не самое подходящее занятие для таких отъявленных бандитов. Компаньоны вскоре понимают, что в их дерзком и опасном путешествии по разоренной войной стране самое важное — никому не доверять и держать пистолет наготове.",
      year: 1966,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/8b9d4616-9426-4c74-a63c-296189f28213/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/8b9d4616-9426-4c74-a63c-296189f28213/x1000",
      },
      genres: [
        {
          name: "вестерн",
        },
        {
          name: "боевик",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      rating: {
        kp: 8.514,
        imdb: 8.7,
        filmCritics: 9.1,
        russianFilmCritics: 0,
        await: null,
      },
      id: 336,
      name: "Пролетая над гнездом кукушки",
      description:
        "Рэндла Патрика Макмёрфи, патологического преступника и бунтаря, переводят из колонии в психиатрическую клинику, чтобы установить, является он душевнобольным или нет. В клинике он обнаруживает, что отделение контролирует хладнокровная, строгая и одержимая распорядком старшая медсестра Милдред Рэтчед. Макмёрфи намерен не подчиняться абсурдным, на его взгляд, правилам и одновременно повеселиться от души. Его бунтарская натура заражает других пациентов, но сестра Рэтчед решительно настроена пресечь это.",
      year: 1975,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1704946/3521be40-0419-4864-9d62-461cc7959f2c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1704946/3521be40-0419-4864-9d62-461cc7959f2c/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 1046236,
      name: "Ангелы в Америке. Часть 1: Приближается Миллениум",
      rating: {
        kp: 8.513,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Америка, середина 80-х, администрация Рейгана, эпидемия СПИДа. На этом фоне несколько жителей Нью-Йорка живут самой обычной жизнью, ежедневно решая вопросы жизни и смерти, любви и секса, ада и рая.",
      year: 2017,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/3a2bf14d-4315-499b-9c6e-b68151d84dc9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/3a2bf14d-4315-499b-9c6e-b68151d84dc9/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 686449,
      description:
        "Цветаев преподавал в Московском университете историю искусств и новый музей поначалу замышлял, как учебный. Чтобы в одном зале - Античность, в другом – Средневековье, в третьем – Возрождение. Вместо оригиналов планировал разместить копии. С оригиналов скульптур, выставленных в музеях европейских столиц, по заказу Цветаева были сделаны гипсовые слепки. В Москву везли десятки и сотни слепков гигантских статуй, целых памятников, а еще колонн, ворот, гробниц. Гипс тонировали под мрамор, бронзу, дерево – чтоб точь-в-точь.",
      genres: [
        {
          name: "документальный",
        },
        {
          name: "драма",
        },
        {
          name: "история",
        },
      ],
      name: "Глаз Божий",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/f3656284-4032-4dc9-abaa-395cac0af4f3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/f3656284-4032-4dc9-abaa-395cac0af4f3/x1000",
      },
      rating: {
        kp: 8.508,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2012,
    },
    {
      id: 42736,
      name: "Офицеры",
      year: 1971,
      description:
        "Судьбы двух друзей - Алексея Трофимова и Ивана Вараввы - прослеживаются на протяжении многих лет. В 20-е они вместе служили на пограничной заставе, бились с басмачами. Там они, будучи еще совсем молодыми, на всю жизнь запомнили наказ своего командира: «Есть такая профессия - родину защищать». Потом Испания, Великая Отечественная война и мирные дни. Старые друзья снова встречаются, уже став генералами.",
      rating: {
        kp: 8.503,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/537c0bc2-f5c3-4a17-adc5-f90591bf5aae/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/537c0bc2-f5c3-4a17-adc5-f90591bf5aae/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "военный",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 473534,
      name: "Цирк «Бабочка»",
      rating: {
        kp: 8.5,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "В разгар Великой Депрессии шоумен и владелец собственного небольшого цирка гастролирует со своей труппой по разрушенной американской провинции, радуя и поднимая настроение простых людей в это непростое время. Во время своего путешествия он посещает ярмарочный балаган, где обнаруживает человека без конечностей, которого там эксплуатируют в качестве живого экспоната шоу уродов.\n\nВ результате этот человек становится частью странствующей труппы цирковых артистов. Позднее, с помощью своих новых друзей, он обретает веру в себя, и делает то, о чем раньше не смел даже мечтать...",
      year: 2009,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/d9916cf3-dd9d-48e4-b9cf-e972a54ac826/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/d9916cf3-dd9d-48e4-b9cf-e972a54ac826/x1000",
      },
      genres: [
        {
          name: "короткометражка",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 8.498,
        imdb: 8.7,
        filmCritics: 7.7,
        russianFilmCritics: 60,
        await: null,
      },
      id: 301,
      name: "Матрица",
      description:
        "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
      year: 1999,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/x1000",
      },
      genres: [
        {
          name: "фантастика",
        },
        {
          name: "боевик",
        },
      ],
    },
    {
      id: 1412499,
      genres: [
        {
          name: "документальный",
        },
        {
          name: "биография",
        },
      ],
      description:
        "В свои 93 года Дэвид Аттенборо посетил все континенты земного шара, исследуя дикие места нашей планеты и документируя живой мир во всем его разнообразии. Но также Аттенборо своими глазами увидел колоссальные масштабы воздействия человека на природу. В фильме он размышляет как об определяющих моментах своей жизни как натуралиста, так и о разрушительных изменениях, которые он видел.",
      name: "Дэвид Аттенборо: Жизнь на нашей планете",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/42892a32-cb59-462b-b498-569b8bac747a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/42892a32-cb59-462b-b498-569b8bac747a/x1000",
      },
      rating: {
        kp: 8.497,
        imdb: 8.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2020,
    },
    {
      id: 342160,
      name: "Хатабалада",
      year: 1997,
      description: null,
      rating: {
        kp: 8.496,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7073e80e-a1b8-4107-b970-021027035485/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/7073e80e-a1b8-4107-b970-021027035485/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 5459137,
      name: "Рай под ногами матерей",
      year: 2024,
      description:
        "История 35-летнего Адиля, особого человека, умственное развитие которого осталось на уровне 8-летнего ребенка. Адил живет в небольшом селе со своей 75-летней матерью, Райхан апа, которая всегда говорит Адилю, что его Всевышний любит по-особому, и потому он попадет прямиком в Рай. Но Адил не хочет в Рай без своей мамы. Однажды он узнает от другого 8-летнего мальчика, что если отвести маму пешком в священный город Мекку, то мама может попасть в Рай.",
      rating: {
        kp: 8.495,
        imdb: 8.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10812607/22288e34-c6a2-427b-9aef-df85cdd51041/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10812607/22288e34-c6a2-427b-9aef-df85cdd51041/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 4977377,
      name: "Истории в кино: Свидание",
      year: 2022,
      description:
        "Шоу, где актеры придумывают сюжет и героев прямо на сцене, на основе истории, рассказанной случайным зрителем из зала — без заготовленного сценария.",
      rating: {
        kp: 8.494,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/4b722d8f-9bc1-40cd-b8dc-4384b879545f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/4b722d8f-9bc1-40cd-b8dc-4384b879545f/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      rating: {
        kp: 8.493,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 441237,
      name: "Вот оно – это всё",
      description:
        "На протяжении двух лет продюсеры Трэвис Райс и Курт Морган путешествовали по миру в поисках мест и условий, в которых бы стало возможным полностью передать суть сноубординга. Они побывали в Новой Зеландии, Японии, Германии, Канаде, пытаясь выйти за пределы своих возможностей и разрушить стандартные представления об экстремальном видео.",
      year: 2008,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/991d509f-0951-452b-bde4-45c6ce97d0d2/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/991d509f-0951-452b-bde4-45c6ce97d0d2/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "спорт",
        },
        {
          name: "приключения",
        },
      ],
    },
    {
      id: 5365524,
      name: "Живые",
      year: 2023,
      description:
        "О том, как на крупнейшей верфи России создаются суда, в строительстве которых используются космические технологии. Кроме того, фильм знакомит зрителей с новым супергероем — самым большим, самым тяжелым и самым мощным в мире атомным ледоколом «Лидер».",
      rating: {
        kp: 8.488,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/e52cc5bf-9c2e-4fcc-9e41-4e4411977ea3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/e52cc5bf-9c2e-4fcc-9e41-4e4411977ea3/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      id: 5436761,
      name: "Так называемая",
      year: 2022,
      description:
        "7 героев делятся своими историями противостояния инвалидизирующему заболеванию — рассеянному склерозу.",
      rating: {
        kp: 8.487,
        imdb: 8.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/9784475/e50dd4e7-5eb5-4e67-bb71-1d39c7835f25/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/9784475/e50dd4e7-5eb5-4e67-bb71-1d39c7835f25/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.484,
        imdb: 8.5,
        filmCritics: 9.2,
        russianFilmCritics: 0,
        await: null,
      },
      id: 414,
      name: "Огни большого города",
      description:
        "Маленький Бродяга встречает красивую слепую девушку, торгующую цветами на улице, которая по ошибке принимает его за богатого герцога. Узнав о том, что операция может вернуть ей зрение, маленький Бродяга пускается на поиски денег.",
      year: 1931,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1900788/fc084f01-9350-4bdc-956c-9de80385de4a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1900788/fc084f01-9350-4bdc-956c-9de80385de4a/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "мелодрама",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      id: 913520,
      name: "Выбор за нами",
      rating: {
        kp: 8.483,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      description: "",
      year: 2016,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/440a1039-d577-4a63-a071-238e26307c5b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/440a1039-d577-4a63-a071-238e26307c5b/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 1388570,
      name: "Северный ветер бывает тёплым",
      year: 2019,
      description:
        "Отшельник и философ-оленевод Александр много лет живет один в самом сердце арктической тайги в Якутии. Сотни километров леса, гор и тундры его дом. Его жизнь бесконечная борьба за выживание. Вместо магазина - горы, вместо холодильника - ручей, вместо интернета - рация.  Вот уже 20 лет он не был ни в одном городе. Но когда-нибудь он мечтает отправиться в кругосветное путешествие: увидеть Тибет, Рим, Австралию. Но пока что олени, природа и мечта - все что у него есть.",
      rating: {
        kp: 8.482,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/d729042f-21e3-4f1c-b989-4789a1c8217d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/d729042f-21e3-4f1c-b989-4789a1c8217d/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 255349,
      name: "Ханума",
      year: 1978,
      description:
        "Состоятельный тифлисский купец мечтает выдать свою дочь Сону замуж за разорившегося князя, чтобы получить дворянское звание. Между тем Сона в отчаянии. Она влюблена в своего учителя музыки и французского языка и не хочет выходить замуж за престарелого князя...",
      rating: {
        kp: 8.477,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/7c002b2c-a7a6-4356-a909-678184d871c7/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/7c002b2c-a7a6-4356-a909-678184d871c7/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 1372006,
      name: "Тайна Ладоги. Малютки",
      year: 2019,
      description:
        "Ночью 23 июня 44-го к восточному побережью Ладоги подошли 78 кораблей ладожской военной флотилии с десантом на борту. Они затаились в тумане, совсем недалеко от финских позиций, и стали ждать команды к началу боя. Эта военно-морская операция против фашистской Финляндии – «Тулоксинский десант» - до сих пор считается одной из самых блестящих за всю войну.  Финны тогда бежали, а через два месяца капитулировали. До последнего времени ни финны, ни немцы даже не догадывались о том, что на Ладоге находились подводные лодки, которые были глазами и ушами советского командования у берегов противника.",
      rating: {
        kp: 8.475,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/b66d4a5b-9435-4886-8703-a848179c6957/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/b66d4a5b-9435-4886-8703-a848179c6957/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 699461,
      name: "Библия дрифта",
      year: 2003,
      description: null,
      rating: {
        kp: 8.475,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/51e499e0-061d-4301-80f0-2635ba637b3e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/51e499e0-061d-4301-80f0-2635ba637b3e/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 45465,
      name: "Человек с киноаппаратом",
      year: 1929,
      description:
        "Человек с киноаппаратом снимает людей, места, объекты. Кинокамера является действующим лицом самого процесса съемки: в воздухе, под землей, в самой гуще событий. Киноглаз, который наблюдает, фиксирует малейшие нюансы, не давая оценки, не следуя сценарию.",
      rating: {
        kp: 8.475,
        imdb: 8.3,
        filmCritics: 9.1,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/0f7660b2-f777-4f63-8b3d-94a2232d4fa9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/0f7660b2-f777-4f63-8b3d-94a2232d4fa9/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 5254757,
      name: "Мосты России",
      year: 2023,
      description:
        "В XXI веке в России наступил настоящий бум строительства мостов. Из 37 российских мостов-гигантов 22 построено в последние два десятилетия. Фильм расскажет о четырех из них. Это Русский и Золотой мосты во Владивостоке, Бугринский в Новосибирске и Крымский мост в Керченском проливе.",
      rating: {
        kp: 8.474,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/cf8f0e25-2eef-4b82-bf68-0edb52bd968b/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/cf8f0e25-2eef-4b82-bf68-0edb52bd968b/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "короткометражка",
        },
      ],
    },
    {
      id: 42770,
      name: "Они сражались за Родину",
      year: 1975,
      description:
        "Июль 1942 года. На подступах к Сталинграду обескровленные, измотанные советские войска ведут тяжелые оборонительные бои, неся огромные потери... Фильм рассказывает о подвиге рядовых солдат, любви к родной земле, об истинной цене победы...",
      rating: {
        kp: 8.474,
        imdb: 7.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4716873/3c933437-f01a-4a21-abae-69369456aa9c/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4716873/3c933437-f01a-4a21-abae-69369456aa9c/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "военный",
        },
      ],
    },
    {
      id: 4299813,
      name: "Байкал. Удивительные приключения Юмы",
      year: 2020,
      description:
        "Однажды в одном древнем-предревнем, глубоком-преглубоком, чистом-пречистом озере, где море опасностей, случилось чудо. В маленьком снежном домике появилась на свет крохотная, необыкновенно любопытная и очень смелая Юма. Ей придется в одиночку совершить путешествие на неведомые Ушканьи острова.",
      rating: {
        kp: 8.474,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/a1ac517c-6623-4201-af31-6ee7036eec65/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/a1ac517c-6623-4201-af31-6ee7036eec65/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 45686,
      name: "Вдовы",
      year: 1976,
      description:
        "Под старость две вдовы Александра Матвеевна и Елизавета Егоровна зажили в одном доме. Сблизило их не только одиночество, но и общая забота — могила двух неизвестных солдат, за которой они ухаживают более 30 лет. Внезапно районное начальство решает из «их» могилки сделать мемориал.",
      rating: {
        kp: 8.473,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/55aa3922-0b76-463d-8d0e-fe6534198e24/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/55aa3922-0b76-463d-8d0e-fe6534198e24/x1000",
      },
      genres: [
        {
          name: "драма",
        },
      ],
    },
    {
      id: 1372007,
      name: "Софийский крест. Голубь мира",
      year: 2019,
      description:
        "Фильм рассказывает о возвращении креста с Софийского собора Великого Новгорода на родину – это случилось спустя 62 года после его пропажи. Оказалось, что все эти годы крест находится в часовне музея Военно-инженерной академии Испании под Мадридом. Также в фильме – о загадке  «Альбомы Милы — уникального документа о зверствах нацистов в годы оккупации, о подвиге реставраторов – восстановлении в кратчайшие сроки  грандиозного памятника «Тысячелетия России», о уникальной реставрации древних храмов и монастырей Новгородской земли.",
      rating: {
        kp: 8.471,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/1f4946ef-a88b-46c6-a2be-f45efc26f2cf/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/1f4946ef-a88b-46c6-a2be-f45efc26f2cf/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 44745,
      name: "Кавказская пленница, или Новые приключения Шурика",
      year: 1966,
      description:
        "Отправившись в одну из горных республик собирать фольклор, студент Шурик влюбляется в симпатичную Нину — спортсменку, отличницу, комсомолку и просто красавицу. Однако банда из трёх человек похищает девушку, чтобы насильно выдать замуж. Поняв, что происходит, Шурик отважно бросается освобождать кавказскую пленницу.",
      rating: {
        kp: 8.471,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/d681bcf8-0fc2-4f2e-a772-0a01920e62b3/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/d681bcf8-0fc2-4f2e-a772-0a01920e62b3/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "приключения",
        },
        {
          name: "мелодрама",
        },
        {
          name: "мюзикл",
        },
      ],
    },
    {
      id: 1108577,
      name: "Зеленая книга",
      year: 2018,
      description:
        "1960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли — утонченный светский лев, богатый и талантливый чернокожий музыкант, исполняющий классическую музыку — собирается в турне по южным штатам, где ещё сильны расистские убеждения и царит сегрегация. Он нанимает Тони в качестве водителя, телохранителя и человека, способного решать текущие проблемы. У этих двоих так мало общего, и эта поездка навсегда изменит жизнь обоих.",
      rating: {
        kp: 8.471,
        imdb: 8.2,
        filmCritics: 7.2,
        russianFilmCritics: 93.3333,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/x1000",
      },
      genres: [
        {
          name: "биография",
        },
        {
          name: "комедия",
        },
        {
          name: "драма",
        },
      ],
    },
    {
      rating: {
        kp: 8.468,
        imdb: 7.4,
        filmCritics: 8.8,
        russianFilmCritics: 0,
        await: null,
      },
      id: 64595,
      name: "И в печали, и в радости...",
      description:
        "У богатого бизнесмена и его жены два сына - приемный Рахул и родной Рохан. Рахул дружит с Нэйной, которая влюблена в него, и отец предполагает поженить их. Но Рахул встречает Анджали - симпатичную девушку, живущую в бедном районе, и влюбляется в нее. Несмотря на данное отцу обещание отказаться от девушки, Рахул тайно женится на ней, чем вызывает гнев и проклятия отца. Рахул покидает родной дом и уезжает в Лондон. Проходит 10 лет. Подросший Рохан, чудом превратившийся из неповоротливого толстяка и обжоры в атлета и красавца, узнает о конфликте между отцом и братом и клянется вернуть брата в семью.",
      year: 2001,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/ba2a1339-4fad-4ab0-a0a9-d29d5dc63d4d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/ba2a1339-4fad-4ab0-a0a9-d29d5dc63d4d/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
      ],
    },
    {
      id: 494937,
      description: null,
      genres: [
        {
          name: "документальный",
        },
      ],
      name: "Торчвуд: Внутри втулки",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/5d92100f-a29b-4841-8b70-244605ade5c8/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/5d92100f-a29b-4841-8b70-244605ade5c8/x1000",
      },
      rating: {
        kp: 8.467,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2009,
    },
    {
      id: 355,
      name: "Пианист",
      rating: {
        kp: 8.467,
        imdb: 8.5,
        filmCritics: 8.2,
        russianFilmCritics: 42.8571,
        await: null,
      },
      description:
        "Фильм снят по автобиографии Владислава Шпильмана, одного из лучших пианистов Польши 30-х годов прошлого века. Главный герой фильма — Владек — занимается искусством до тех пор, пока территорию Польши не занимают нацисты. Жизнь всех евреев меняется: их помещают в Варшавское гетто, запрещают работать, унижают, заставляют носить отличительные повязки, а через некоторое время отправляют в концлагерь.",
      year: 2002,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/6d71694e-3796-4e1c-96aa-0e982c2bc03d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/6d71694e-3796-4e1c-96aa-0e982c2bc03d/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "военный",
        },
        {
          name: "биография",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 1346686,
      name: "Друзья: Воссоединение",
      year: 2021,
      description:
        "Исполнители главных ролей сериала «Друзья» воссоединяются и посещают места съёмок легендарного шоу — квартиру Моники, кофейню Central Perk, знаменитый фонтан — а также встречаются с актёрами, исполнившими гостевые роли, и рассказывают о забавных случаях со съёмок.",
      rating: {
        kp: 8.466,
        imdb: 8,
        filmCritics: 6.4,
        russianFilmCritics: 62.5,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4774061/188fa9f4-c5c8-4376-a471-622653cb084e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4774061/188fa9f4-c5c8-4376-a471-622653cb084e/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "биография",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 4714537,
      name: "Горький привкус любви, или Список фрау Шиндлер",
      year: 2021,
      description: null,
      rating: {
        kp: 8.465,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/e227c7be-8aa1-4e6a-ac62-a1a6fcf0a513/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/e227c7be-8aa1-4e6a-ac62-a1a6fcf0a513/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 4868854,
      name: "Простые блюда от Джейми Оливера: Рождественский выпуск",
      year: 2019,
      description:
        "Джейми возвращается к Рождеству. Он покажет, как подготовить праздничный стол без стресса, чтобы провести этот день с семьей.",
      rating: {
        kp: 8.463,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/2fc86453-0ff6-4ba8-8492-d8c6c755779a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/2fc86453-0ff6-4ba8-8492-d8c6c755779a/x1000",
      },
      genres: [
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 978873,
      description:
        "Бо Бёрнэм говорит о жизни, смерти, сексуальности, лицемерии, психических заболеваниях и банках Pringles.",
      genres: [
        {
          name: "комедия",
        },
        {
          name: "музыка",
        },
      ],
      name: "Бо Бёрнэм: Дарить счастье",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/3fbc7f66-5e23-4e47-ab42-9ba5b4f49391/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/3fbc7f66-5e23-4e47-ab42-9ba5b4f49391/x1000",
      },
      rating: {
        kp: 8.463,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2016,
    },
    {
      rating: {
        kp: 8.462,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 394123,
      name: "Сила веры",
      description: "",
      year: 2007,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1773646/816b0925-6b00-40ea-afa5-0d2aff6e932d/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1773646/816b0925-6b00-40ea-afa5-0d2aff6e932d/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 464132,
      description:
        "Целью данного фильма является попытка раскрыть секреты доселе непобедимого бойца в смешанных единоборствах Федора Емельяненко. Здесь представлены многочисленные интервью с ним, с его тренерами и спарринг-партнерами, а также с его соперниками и специалистами по этому виду спорта. Кто он? Как ему это удается? Что для этого надо делать? Вот те немногие вопросы которые раскрываются в этом фильме.",
      genres: [
        {
          name: "документальный",
        },
        {
          name: "спорт",
        },
      ],
      name: "Опаснейший человек на планете",
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/16662d64-2231-45ff-876d-c10c13574fc1/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/16662d64-2231-45ff-876d-c10c13574fc1/x1000",
      },
      rating: {
        kp: 8.461,
        imdb: 8.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      year: 2009,
    },
    {
      id: 5221308,
      name: "Истории в кино: Ведьма",
      description: null,
      rating: {
        kp: 8.46,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/6201401/e5a62e19-536b-4aaa-8062-287f3f492861/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/6201401/e5a62e19-536b-4aaa-8062-287f3f492861/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
      ],
      year: 2022,
    },
    {
      id: 5396104,
      name: "Объяснялкины: Экстра",
      year: 2023,
      description:
        "Пародия — это весело, в мультиках возможно все, а хорошее чувство юмора — залог успеха. Егор Лоскутов и Дмитрий Сыендук рассказывают, как создавался мультсериал «Объяснялкины».",
      rating: {
        kp: 8.458,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/37bc09f6-325c-48e5-a057-533e53f58447/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/37bc09f6-325c-48e5-a057-533e53f58447/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      id: 303998,
      name: "Рождённые в СССР: 21 год",
      year: 2005,
      description:
        'Мы представляем вам один из самых известных в мире документальных проектов. Это третья часть длительного наблюдения за человеческой жизнью, которое началось в конце прошлого века в Советском Союзе. Тогда авторы фильма сняли 20 героев с семилетнего возраста с тем условием, что они будут возвращаться к ним каждые 7 лет вплоть до 70. Сейчас им 21, и они живут в разных странах мира - в США, Израиле, Германии, Франции, Грузии, Литве, Киргизстане и России. У них разные судьбы и разная жизнь. Но их всегда будет связывать то, что они родились в несуществующей теперь империи под названием СССР. Фильм создан при финансовой поддержке Федерального агентства по культуре и кинематографии РФ, Федерального агентства по печати и массовой коммуникации РФ по заказу телеканала "Россия" и Granada Media Group LTD',
      rating: {
        kp: 8.456,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/abea0c87-7edb-462e-b048-cf0b0f9482be/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/abea0c87-7edb-462e-b048-cf0b0f9482be/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
      ],
    },
    {
      rating: {
        kp: 8.456,
        imdb: 8.5,
        filmCritics: 8.3,
        russianFilmCritics: 60,
        await: null,
      },
      id: 81314,
      name: "Отступники",
      description:
        "Два лучших выпускника полицейской академии оказались по разные стороны баррикады: один из них — агент мафии в рядах правоохранительных органов, другой — «крот», внедрённый в мафию. Каждый считает своим долгом обнаружить и уничтожить противника.",
      year: 2006,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/f2c70176-43c8-4ca6-8f67-7119a2b73f19/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/f2c70176-43c8-4ca6-8f67-7119a2b73f19/x1000",
      },
      genres: [
        {
          name: "триллер",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
    },
    {
      id: 5001356,
      name: "Истории в кино: Я — звезда!",
      year: 2022,
      description:
        "Шоу, где актеры придумывают сюжет и героев прямо на сцене, на основе истории, рассказанной случайным зрителем из зала — без заготовленного сценария.",
      rating: {
        kp: 8.455,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4303601/7b02b6cd-af7f-462f-8d1c-6064db7a8d68/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4303601/7b02b6cd-af7f-462f-8d1c-6064db7a8d68/x1000",
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "реальное ТВ",
        },
      ],
    },
    {
      id: 840526,
      name: "Евгений Гришковец: Прощание с бумагой",
      year: 2014,
      description:
        "Спектакль посвящен прощанию человечества с бумагой как с образом жизни – тому, как уходят из жизни бумажные книги, газеты, карты и письма, а также связанные с ними ощущения и эмоции.",
      rating: {
        kp: 8.454,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/dc8217af-f926-4856-bef8-ea5273a22d12/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/dc8217af-f926-4856-bef8-ea5273a22d12/x1000",
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "комедия",
        },
      ],
    },
    {
      id: 356,
      name: "В джазе только девушки",
      rating: {
        kp: 8.45,
        imdb: 8.2,
        filmCritics: 9.1,
        russianFilmCritics: 0,
        await: null,
      },
      description:
        "Когда чикагские музыканты Джо и Джерри случайно становятся свидетелями бандитской перестрелки, они в срочном порядке смываются на поезде во Флориду, прикинувшись женщинами. Теперь они — Джозефина и Дафна, новенькие и хорошенькие инструменталистки женского джаз-бэнда.\n\nДо поры до времени их маскировка срабатывает. Но вскоре любвеобильная солистка влюбляется в «переодетого» мужчиной Джозефину, престарелый миллионер подкатывает к Дафне, а босс мафии, разгадав тайну маскарада, решает срочно разделаться со свидетелями.",
      year: 1959,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/f9d40e34-f5b2-49ca-9fe0-bbdd3e43da3a/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/f9d40e34-f5b2-49ca-9fe0-bbdd3e43da3a/x1000",
      },
      genres: [
        {
          name: "мелодрама",
        },
        {
          name: "комедия",
        },
        {
          name: "криминал",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 726849,
      name: "Иисус Христос — суперзвезда: Live Arena Tour",
      year: 2012,
      description: null,
      rating: {
        kp: 8.449,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/36e7d4cf-c902-4200-b0c9-780479e70985/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/36e7d4cf-c902-4200-b0c9-780479e70985/x1000",
      },
      genres: [
        {
          name: "мюзикл",
        },
        {
          name: "драма",
        },
        {
          name: "история",
        },
      ],
    },
    {
      id: 656607,
      name: "The Chemical Brothers: «Не думай»",
      year: 2011,
      description:
        "31 июля 2011 года группа выступала на фестивале Fuji Rock в Японии перед 50 тыс. зрителями. В это же время 21 камера записывала концерт, который позже режиссер Адам Смит превратил в музыкальный фильм.  «Не думай» - психоделическое путешествие, в котором не успеешь моргнуть, как оказываешься в бурлящей толпе на горе Фуджи, в море света, звука, видео, марширующих роботов, галопирующих лошадей, стробоскопов, клоунов и, конечно, музыки. Ты не смотришь шоу – ты его чувствуешь. Не думай – просто позволь событиям увлечь тебя!",
      rating: {
        kp: 8.449,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/d09e020d-38a9-4775-9b4e-6bbc880a012f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/d09e020d-38a9-4775-9b4e-6bbc880a012f/x1000",
      },
      genres: [
        {
          name: "концерт",
        },
        {
          name: "музыка",
        },
      ],
    },
    {
      id: 601784,
      name: "Концерт Майкла Джексона в Бухаресте",
      year: 1992,
      description: null,
      rating: {
        kp: 8.448,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/eae8f337-8520-4c08-a6d9-4ec63113fc0e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/eae8f337-8520-4c08-a6d9-4ec63113fc0e/x1000",
      },
      genres: [
        {
          name: "музыка",
        },
        {
          name: "концерт",
        },
      ],
    },
    {
      rating: {
        kp: 8.448,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      id: 921479,
      name: "Прирожденные короли",
      description: "",
      year: 2015,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/940e7020-c81b-42aa-8d34-03d6a2909f97/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/940e7020-c81b-42aa-8d34-03d6a2909f97/x1000",
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "драма",
        },
      ],
    },
  ],
  total: 250,
  limit: 250,
  page: 1,
  pages: 1,
};
