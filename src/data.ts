export const TELEGRAM_URL = 'https://t.me/Ivan_websites';

export const ABOUT_TEXT =
  'У меня большой опыт в веб-разработке, мобильных приложениях и интерактивном дизайне. Я превращаю сложные идеи в понятные цифровые продукты: продумываю архитектуру, собираю интерфейс, добавляю движение и довожу проект до готового релиза - от первого экрана до устойчивого опыта пользователя.';

export const MARQUEE_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export interface Service {
  name: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    name: 'Веб-разработка',
    description:
      'Сайты и веб-приложения: от лендингов до сервисов с бронированием. Продумываю архитектуру и собираю всё так, чтобы работало быстро и без сюрпризов.',
  },
  {
    name: 'Мобильные приложения',
    description:
      'Приложения для телефона с понятной логикой и удобными экранами, которыми приятно пользоваться каждый день.',
  },
  {
    name: 'Интерактивный дизайн',
    description:
      'Интерфейсы, которые реагируют на действия человека: понятная навигация, аккуратные состояния и продуманный путь пользователя.',
  },
  {
    name: 'Интерфейс и движение',
    description:
      'Собираю интерфейс и добавляю анимацию там, где она помогает: плавные переходы, появление блоков и живые детали.',
  },
  {
    name: 'Доведение до релиза',
    description:
      'Беру проект от первого экрана до публикации: проверяю адаптацию под телефон, исправляю мелочи и запускаю готовый результат.',
  },
];

export interface Project {
  name: string;
  category: string;
  url: string;
  /** Имя локального файла в public/shots (необязательно, проверяется первым) */
  localShot: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Бренд соусов',
    category: 'Лендинг',
    url: 'https://emberrandco.netlify.app',
    localShot: 'ember',
  },
  {
    name: 'Alpha Villa',
    category: 'Сайт с бронированием',
    url: 'https://alpha-villaa.netlify.app',
    localShot: 'alpha-villa',
  },
  {
    name: 'Кафе Уют',
    category: 'Сайт для кафе',
    url: 'https://cafe-uyt.netlify.app',
    localShot: 'cafe-uyt',
  },
  {
    name: 'SV Barber',
    category: 'Сайт для барбершопа',
    url: 'https://svbarber.netlify.app',
    localShot: 'svbarber',
  },
];
