ymaps.ready(init);
ymaps.ready(initContact);

function init() {
  const map = document.querySelector('#map');

  if (map) {
    const lat = map.getAttribute('data-lat');
    const lon = map.getAttribute('data-lon');

    var myMap = new ymaps.Map(map, {
      center: [lat, lon],
      controls: ['zoomControl', 'geolocationControl', 'fullscreenControl'],
      zoom: 15
    }),

      // Создаем метку с помощью вспомогательного класса.
      myPlacemark1 = new ymaps.Placemark([lat, lon], {
        // Содержимое хинта.
        hintContent: ''
      }, {
        // Опции
        // Своё изображение иконки метки.
        iconLayout: 'default#image',
        iconImageHref: '/local/assets/images/icons/place.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        //iconImageOffset: [-65, -110]
      })

    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark1)

    myMap.behaviors.disable('scrollZoom');
  }

}

function initContact() {
  const mapContact = document.querySelector('#map-contact');

  if (mapContact) {
    const lat = mapContact.getAttribute('data-lat');
    const lon = mapContact.getAttribute('data-lon');

    var myMap = new ymaps.Map(mapContact, {
      center: [lat, lon],
      controls: ['zoomControl', 'geolocationControl', 'fullscreenControl'],
      zoom: 15
    }),

      // Создаем метку с помощью вспомогательного класса.
      myPlacemark1 = new ymaps.Placemark([lat, lon], {
        // Содержимое хинта.
        hintContent: ''
      }, {
        // Опции
        // Своё изображение иконки метки.
        iconLayout: 'default#image',
        iconImageHref: '/local/assets/images/icons/place.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        //iconImageOffset: [-65, -110]
      })

    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark1)

    myMap.behaviors.disable('scrollZoom');
  }

}
