//Ключ от мапбокс
mapboxgl.accessToken = 'pk.eyJ1IjoiemFraGFyMTIiLCJhIjoiY2wzcmNub204MGwwdTNicGZtOXcxMjY5dCJ9.76lreS_WNfQS3xq7te22bQ';

// Инициализируем кнопки
let buttonMap1 = document.getElementById('button-map1');
let buttonMap2 = document.getElementById('button-map2');
let buttonMap3 = document.getElementById('button-map3');
let buttonMap4 = document.getElementById('button-map4');
let buttonMap5 = document.getElementById('button-map5');
let buttonMap6 = document.getElementById('button-map6');
let buttonMap7 = document.getElementById('button-map7');
let buttonMap8 = document.getElementById('button-map8');
let buttonMap9 = document.getElementById('button-map9');
let buttonMap10 = document.getElementById('button-map10');
let buttonMap11 = document.getElementById('button-map11');

//Инициализируем кнопки на мобильной версии
let tabbarButtonLeft = document.getElementById('tabbar-button-left');
let tabbarButtonRight = document.getElementById('tabbar-button-right');

//Изменяемые данные при переключении карт
let nameMap = document.getElementById('name-map');;
let informationImg = document.getElementById('information-img');
let informationHeader = document.getElementById('information-header');
let informationText = document.getElementById('information-text');
let nameLegend = document.getElementById('name-legend');
let legend = document.getElementById('legend');

//Кнопки с начальной страницы
let buttonToMap = document.getElementById('to-map');
let backgroundMenu = document.getElementById('menu');
let buttonIcon = document.getElementById('icon');

//Кнопки меню
let menuButton1 = document.getElementById('menu-button1');
let menuButton2 = document.getElementById('menu-button2');
let menuButton3 = document.getElementById('menu-button3');
let menuButton4 = document.getElementById('menu-button4');
let menuButton5 = document.getElementById('menu-button5');
let menuButton6 = document.getElementById('menu-button6');
let menuButton7 = document.getElementById('menu-button7');
let menuButton8 = document.getElementById('menu-button8');
let menuButton9 = document.getElementById('menu-button9');
let menuButton10 = document.getElementById('menu-button10');
let menuButton11 = document.getElementById('menu-button11');


tabbarButtonLeft.disabled = true;


//Список ссылок на стили карт
let stylesUrls = [
    'mapbox://styles/zakhar12/cl3zpeqlz004014pekwne194n',
    'mapbox://styles/zakhar12/cl407j2yv000d14o7ko5wp1kb',
    'mapbox://styles/zakhar12/cl407xvwi002s14rit1owq786',
    'mapbox://styles/zakhar12/cl4097q1b000115pkelwhra28',
    'mapbox://styles/zakhar12/cl409ltcp003i15o5o5x1qn49',
    'mapbox://styles/zakhar12/cl409smug000f14o7lm7go7m0',
    'mapbox://styles/zakhar12/cl40a0ui8004h14lqodb8oy01',
    'mapbox://styles/zakhar12/cl40aa433000n15l4tyh5385e',
    'mapbox://styles/zakhar12/cl40aic08004j14lqw9wogqkv',
    'mapbox://styles/zakhar12/cl40asr0v000b15o8mi2ht93p',
    'mapbox://styles/zakhar12/cl41bh0z7000414qzzsvfthrx'
];


let namesLegendList = [
    'Доля лесов V и ниже классов<br>бонитета в покрытой лесом<br>(в процентах, по субъектам, 2003 г.)',
    'Доля площади лесовосстановления<br>в лесной площади<br>(в процентах, по субъектам, 2003 г.)',
    'Доля фонда лесовосстановления<br>в не покрытой лесом площади<br>(в процентах, по субъектам, 2003 г.)',
    'Доля не покрытой лесом<br>общей площади лесных земель<br>(в процентах, по субъектам, 2003 г.)',
    'Вырублено древесины<br>(тыс. плотных куб. м, по субъектам, 2005 г.)',
    'Доля рубок главного пользования<br>в объеме расчетной лесосеки<br>(в процентах, по субъектам, 2003 г.)',
    'Рассчетная лесосека<br>(тыс. куб. м, по субъектам, 2003 г.)',
    'Потери древесины<br>(тым. куб. м, среднегодовые значения,<br>по субъектам, 1990-2005 гг.)',
    'Доля пройденной пожарами площади<br>в лесной площади<br>(в процентах, среднегодовые значения,<br>по субъектам, 1998-2003 гг.)',
    'Доля спелых и перестойных<br>лесов в покрытой лесом площади<br>(в процентах, по субъектам, 2003 г.)',
    'Лесные районы'
];

let imgLegendList = [
    'img/legend_1.png',
    'img/legend_2.png',
    'img/legend_3.png',
    'img/legend_4.png',
    'img/legend_5.png',
    'img/legend_6.png',
    'img/legend_7.png',
    'img/legend_8.png',
    'img/legend_9.png',
    'img/legend_10.png',
    ''
]

//Номер карты
let indexOfMap = 0;

//Список названий
let titleList = [
    'Классы бонитета', 'Площадь лесовосстановления', 'Фонд лесовосстановления',
    'Не покрытая лесом площадь', 'Рубки промежуточного пользования',
    'Рубки главного пользования', 'Расчётная лесосека', 'Потери древесины вследствие лесных пожаров',
    'Лесная площадь, пройденная пожарами', 'Возраст древостоя', 'Лесные районы'
];

//Текст про карты
let informationList = [
    'Бонитет — показатель продуктивности леса.\
    Он в общей форме отражает скорость роста насаждения и может,\
    следовательно, служить также показателем соответствия условий\
    местопроизрастания потребностям данной древесной породы.\
    Бонитет определяют по возрасту и высоте насаждения.\
    Высота насаждения — один из главных показателей его продуктивности, \
    она легко поддается измерению, поэтому используется для нахождения бонитета. \
    Бонитет определяют по таблицам, составленным в 1911 г. М. М. Орловым. \
    Чем выше класс бонитета у насаждения, тем при рассматриваемом возрасте \
    у насаждения больше высота и ценность. Насаждения II и выше класса бонитета\
    называют высокобонитетными, III-IV - среднебонитетными, V - низкобонитетными,\
    Vа и Vб - непродуктивными.',
    'Лесовосстановле́ние — выращивание лесов на территориях, \
    подвергшихся вырубкам, пожарам и т. д. Лесовосстановление применяется \
    для создания новых лесов или улучшения состава древесных пород\
    в уже существующих.Существует два разных способа лесовосстановительных работ \
    — искусственный (посадка или посев леса) и естественный\
    без вмешательства человека и с помощью человека - содействие\
    естественному возобновлению. Содействие естественному возобновлению \
    проводится на тех площадях, где восстановление хозяйственно ценных пород \
    можно обеспечить путём сохранения подроста или минерализации почвы.\
    Но основным способом лесовосстановления считается посадка лесных культур, \
    которая выполняется вручную с использованием меча Колесова',
    'Фонд лесовосстановления – земли лесного фонда,\
    не покрытые лесной растительностью лесные земли лесного фонда\
    предназначенные или пригодные для создания лесных культур\
    и проведения мер содействия естественному возобновлению леса,\
    образуют , который подразделяется на следующие категории: лесокультурный фонд, \
    фонд земель для естественного возобновления леса, фонд лесоразведения.',
    'Непокрытые лесом земли - территории, предназначенные под лес,\
    но временно им не занятые в силу влияния различных факторов\
    (рубка леса, лесные пожары и т.д.). В них входят редины, гари,\
    вырубки, прогалины и пустыри.',
    'Рубки промежуточного пользования (сюда входят рубки ухода, \
    выборочные санитарные и некоторые другие виды рубок) – это \
    прижизненное пользование древесиной с целью повышения\
    продуктивности лесов, предотвращения развития вредителей и болезней\
    и получение дополнительного экономического эффекта от лесопользования.',
    'Рубка главного пользования — рубка спелого и перестойного древостоя\
    для заготовки древесины и восстановления леса; система рубок главного\
    пользования — совокупность способов рубок, близких по\
    организационно-техническим показателям и особенностям их влияния\
    на возобновление леса.',
    'Расчетная лесосека определяет допустимый ежегодный объем изъятия\
    древесины в эксплуатационных и защитных лесах, обеспечивающий многоцелевое,\
    рациональное, непрерывное, неистощительное использование лесов, исходя\
    из установленных возрастов рубок, сохранение биологического разнообразия,\
    водоохранных, защитных и иных полезных свойств лесов.',
    'Потери древесины возникают вследствие сгорания и отмирания\
    после пожара части деревьев в насаждениях, поврежденных огнем.\
    Потери древесины в процентах от общего корневого запаса древесины\
    определяются с учетом вида пожара, его интенсивности, преобладающей породы\
    в насаждении и ее среднего диаметра',
    'Лесная площадь, пройденная пожарами,\
    включает площади всех лесных земель лесного фонда\
    и земель иных категорий, на которых расположены леса,\
    пройденные верховыми, низовыми и подземными пожарами.',
    'Возраст спелости – возраст древостоя, с наступлением которого\
    он приобретает количественные и качественные признаки, наиболее\
    соответствующие целям хозяйства, которые с течением времени больше\
    не будут улучшаться, но, наоборот начинают постепенно утрачиваться.\
    Возраст спелости является отправной точкой для распределения насаждений\
    по группам возраста. Всего выделяют пять групп возраста: спелые - насаждения,\
    относящиеся к двум классам возраста после возраста спелости, перестойные –\
    насаждения всех возрастов после спелых, приспевающие – насаждения одного\
    класса возраста перед возрастом спелости, средневозрастные – насаждения\
    всех возрастов между молодняками и приспевающими, молодняки – насаждения\
    1 и 2 классов возраста (молодняки 2класса возраста иначе называют жердняками)',
    'Лесные районы на данной карте отображены в соответствии\
    с приказом Минприроды России от 18 августа 2014 года №367 «Об\
    утверждении Перечня лесорастительных зон Российской Федерации и Перечня\
    лесных районов Российской Федерации» с изменениями на 18 октября 2018 года.'
];


//Список картинок
let imagesLink = [
    'img/Бонитет4.jpg',
    'img/лесовосстановление3.jpg',
    'img/Фондлесовосстановления2.jpg',
    'img/НепокрытаяЛесомПлощадь.jpg',
    'img/рубкиПромежуточногоПользования.jpg',
    'img/Рубки_главного_пользования.jpg',
    'img/расчётная_лесосека.jpg',
    'img/ПотериДревесиныВследствиеЛесныхПожаров.jpg',
    'img/площадьпройденаяпожарами.jpeg',
    'img/ВозрастДревостоя.jpg',
    'img/Лесные_районы.jpg'
];

//Инициализируем карту
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: stylesUrls[indexOfMap], // style URL
    center: [60, 55], // starting position [lng, lat]
    zoom: 3 // starting zoom
});


let layerList = [
    'true1',
    'true2',
    'true3',
    'layer4',
    'layer5',
    'layer6',
    'layer7',
    'layer8',
    'layer9',
    'layer10',
    'layer11',
]

map.on('load', () => {

    //Вывод сообщения при нажатии на субъект

    map.on('click', 'true2', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.NAME_SUB)
            .addTo(map);
    });
    map.on('mouseenter', 'true2', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back to a pointer
    // when it leaves the states layer.
    map.on('mouseleave', 'true2', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('click', 'click', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.Район)
            .addTo(map);
    });
    map.on('mouseenter', 'click', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back to a pointer
    // when it leaves the states layer.
    map.on('mouseleave', 'click', () => {
        map.getCanvas().style.cursor = '';
    });
});



//Нажатие на кнопку 1
function onButtonMap1Click() {
    indexOfMap = 0;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = true;
    tabbarButtonRight.disabled = false;

}

//Нажатие на кнопку 2
function onButtonMap2Click() {
    indexOfMap = 1;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;

}

//Нажатие на кнопку 3
function onButtonMap3Click() {
    indexOfMap = 2;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 4
function onButtonMap4Click() {
    indexOfMap = 3;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 5
function onButtonMap5Click() {
    indexOfMap = 4;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 6
function onButtonMap6Click() {
    indexOfMap = 5;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 7
function onButtonMap7Click() {
    indexOfMap = 6;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 8
function onButtonMap8Click() {
    indexOfMap = 7;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 9
function onButtonMap9Click() {
    indexOfMap = 8;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonLeft.disabled = false;
    tabbarButtonRight.disabled = false;
}

//Нажатие на кнопку 10
function onButtonMap10Click() {
    indexOfMap = 9;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonRight.disabled = false;
    tabbarButtonLeft.disabled = false;
}

//Нажатие на кнопку 11
function onButtonMap11Click() {
    indexOfMap = 10;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    tabbarButtonRight.disabled = true;
    tabbarButtonLeft.disabled = false;
}

//Изменение значка на кнопках мобильной версии

function onTabbarButtonLeftClick() {
    indexOfMap--;
    tabbarButtonRight.disabled = false;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];

    if (indexOfMap == 0) {
        tabbarButtonLeft.disabled = true;
    }
}

function onTabbarButtonRightClick() {
    indexOfMap++;
    tabbarButtonLeft.disabled = false;

    map.setStyle(stylesUrls[indexOfMap]);
    nameMap.innerHTML = titleList[indexOfMap];
    informationImg.src = imagesLink[indexOfMap];
    informationHeader.innerHTML = titleList[indexOfMap];
    informationText.innerHTML = informationList[indexOfMap];
    nameLegend.innerHTML = namesLegendList[indexOfMap];
    legend.src = imgLegendList[indexOfMap];


    if (indexOfMap === stylesUrls.length - 1) {
        tabbarButtonRight.disabled = true;
    }
}

//Нажатие по кнопкам в меню
function onMenuButton1Click() {
    menu.className = 'menu-transparent';
    onButtonMap1Click();
}

function onMenuButton2Click() {
    menu.className = 'menu-transparent';
    onButtonMap2Click();
}

function onMenuButton3Click() {
    menu.className = 'menu-transparent';
    onButtonMap3Click();
}

function onMenuButton4Click() {
    menu.className = 'menu-transparent';
    onButtonMap4Click();
}

function onMenuButton5Click() {
    menu.className = 'menu-transparent';
    onButtonMap5Click();
}

function onMenuButton6Click() {
    menu.className = 'menu-transparent';
    onButtonMap6Click();
}

function onMenuButton7Click() {
    menu.className = 'menu-transparent';
    onButtonMap7Click();
}

function onMenuButton8Click() {
    menu.className = 'menu-transparent';
    onButtonMap8Click();
}

function onMenuButton9Click() {
    menu.className = 'menu-transparent';
    onButtonMap9Click();
}

function onMenuButton10Click() {
    menu.className = 'menu-transparent';
    onButtonMap10Click();
}

function onMenuButton11Click() {
    menu.className = 'menu-transparent';
    onButtonMap11Click();
}

function onButtonIconClick() {
    menu.className = 'menu';
}



//Действие при клике
buttonMap1.addEventListener('click', onButtonMap1Click);
buttonMap2.addEventListener('click', onButtonMap2Click);
buttonMap3.addEventListener('click', onButtonMap3Click);
buttonMap4.addEventListener('click', onButtonMap4Click);
buttonMap5.addEventListener('click', onButtonMap5Click);
buttonMap6.addEventListener('click', onButtonMap6Click);
buttonMap7.addEventListener('click', onButtonMap7Click);
buttonMap8.addEventListener('click', onButtonMap8Click);
buttonMap9.addEventListener('click', onButtonMap9Click);
buttonMap10.addEventListener('click', onButtonMap10Click);
buttonMap11.addEventListener('click', onButtonMap11Click);

//Действие при клике по кнопке мобильной версии
tabbarButtonLeft.addEventListener('click', onTabbarButtonLeftClick);
tabbarButtonRight.addEventListener('click', onTabbarButtonRightClick);


buttonIcon.addEventListener('click', onButtonIconClick);

//Действие при нажатие на кнопки меню
menuButton1.addEventListener('click', onMenuButton1Click);
menuButton2.addEventListener('click', onMenuButton2Click);
menuButton3.addEventListener('click', onMenuButton3Click);
menuButton4.addEventListener('click', onMenuButton4Click);
menuButton5.addEventListener('click', onMenuButton5Click);
menuButton6.addEventListener('click', onMenuButton6Click);
menuButton7.addEventListener('click', onMenuButton7Click);
menuButton8.addEventListener('click', onMenuButton8Click);
menuButton9.addEventListener('click', onMenuButton9Click);
menuButton10.addEventListener('click', onMenuButton10Click);
menuButton11.addEventListener('click', onMenuButton11Click);
