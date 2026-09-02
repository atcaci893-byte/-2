export const siteConfig = {
  name: 'Pokerbet Play',
  shortName: 'Pokerbet Play',
  locale: 'uk_UA',
  language: 'uk',
  cta: {
    label: 'Реєстрація',
    href: '/startgame/',
  },
  disclaimer:
    'Незалежний інформаційний ресурс. Сайт не є офіційним сайтом оператора Pokerbet і не приймає ставки чи платежі.',
};

export const primaryNavigation = [
  { label: 'Бонуси', href: '/bonus/' },
  { label: 'Промокод', href: '/promokod/' },
  { label: 'Реєстрація', href: '/registration/' },
  { label: 'Додаток', href: '/app/' },
  { label: 'Платежі', href: '/payments/' },
  { label: 'Верифікація', href: '/verification/' },
  { label: 'Підтримка', href: '/support/' },
  { label: 'Новини', href: '/news/' },
];

export const headerNavigation = primaryNavigation.slice(0, 6);

export const moreNavigation = [
  { label: 'Підтримка', href: '/support/' },
  { label: 'Безпека', href: '/security/' },
  { label: 'Новини', href: '/news/' },
];

export const trustNavigation = [
  { label: 'Безпека', href: '/security/', enabled: true },
  { label: 'Відповідальна гра', href: '/responsible-gambling/', enabled: true },
  { label: 'Політика конфіденційності', href: '/privacy/', enabled: false },
  { label: 'Умови використання', href: '/terms/', enabled: false },
];
