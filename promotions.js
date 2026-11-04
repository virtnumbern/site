// Публичные данные. Измените этот файл и загрузите его на хостинг заново.
// oldRub/oldStars — старые цены, rub/stars — новые цены.
// Указывайте реальные скидки; пустой массив означает отсутствие активных акций.
window.VN_PROMOTIONS = {
  bannerEnabled: false,
  bannerTitle: 'Новости и специальные предложения',
  bannerText: 'Скидки, розыгрыши и обновления каталога',
  news: [
    {id:'welcome',date:'29.10.2026',title:'Новости магазина',text:'Здесь будут появляться объявления о скидках, розыгрышах и новых услугах.',items:[]}
  ],
  discounts: [
    // Пример: {productId:1,oldRub:250,rub:220,oldStars:150,stars:130,newsId:'welcome'}
  ],
  promoCodes: [
    // Пример: {code:'SALE10',percent:10,active:true}
  ]
};
