
export interface Translations {
  nav: {
    home: string;
    about: string;
    occasions: string;
    contact: string;
  };
  hero: {
    title: string;
    slogan: string;
    cta: string;
  };
  slideshow: {
    baptism: {
      title: string;
      description: string;
    };
    christmas: {
      title: string;
      description: string;
    };
    mothersDay: {
      title: string;
      description: string;
    };
  };
  gallery: {
    title: string;
    inquire: string;
  };
  footer: {
    title: string;
    slogan: string;
    description: string;
    quickLinks: string;
    policies: string;
    copyright: string;
  };
  occasions: {
    baptism: string;
    mothersDay: string;
    christmas: string;
    communion: string;
    babyShower: string;
    anniversary: string;
    valentinesDay: string;
    easter: string;
    graduation: string;
    engagement: string;
    newYear: string;
    retirement: string;
    casualGifts: string;
  };
}

export type Language = 'en' | 'fr';
