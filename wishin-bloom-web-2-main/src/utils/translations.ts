
import { Translations, Language } from '../types/translations';

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Us',
    occasions: 'Occasions',
    contact: 'Contact',
  },
  hero: {
    title: 'WishIn Bloom',
    slogan: 'Where Every Gift Blooms with Meaning',
    cta: 'Explore Our Creations',
  },
  slideshow: {
    baptism: {
      title: 'Baptism Celebrations',
      description: 'Sacred moments deserve sacred gifts',
    },
    christmas: {
      title: 'Christmas Magic',
      description: 'Handcrafted treasures for the holiday season',
    },
    mothersDay: {
      title: "Mother's Day",
      description: 'Celebrating the nurturing spirit',
    },
  },
  gallery: {
    title: 'Our Handcrafted Creations',
    inquire: 'Inquire',
  },
  footer: {
    title: 'WishIn Bloom',
    slogan: 'Where Every Gift Blooms with Meaning',
    description: 'Handcrafted with love for life\'s special moments.',
    quickLinks: 'Quick Links',
    policies: 'Policies',
    copyright: '© 2025 WishIn Bloom. All rights reserved.',
  },
  occasions: {
    baptism: 'Baptism',
    mothersDay: "Mother's Day",
    christmas: 'Christmas',
    communion: 'First Communion',
    babyShower: 'Baby Shower',
    anniversary: 'Anniversary',
    valentinesDay: "Valentine's Day",
    easter: 'Easter',
    graduation: 'Graduation',
    engagement: 'Engagement',
    newYear: 'New Year',
    retirement: 'Retirement',
    casualGifts: 'Casual Gifts',
  },
};

const fr: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    occasions: 'Occasions',
    contact: 'Contact',
  },
  hero: {
    title: 'WishIn Bloom',
    slogan: 'Où Chaque Cadeau Fleurit avec Sens',
    cta: 'Explorer Nos Créations',
  },
  slideshow: {
    baptism: {
      title: 'Célébrations de Baptême',
      description: 'Les moments sacrés méritent des cadeaux sacrés',
    },
    christmas: {
      title: 'Magie de Noël',
      description: 'Trésors artisanaux pour la saison des fêtes',
    },
    mothersDay: {
      title: 'Fête des Mères',
      description: 'Célébrer l\'esprit nourricier',
    },
  },
  gallery: {
    title: 'Nos Créations Artisanales',
    inquire: 'Demander',
  },
  footer: {
    title: 'WishIn Bloom',
    slogan: 'Où Chaque Cadeau Fleurit avec Sens',
    description: 'Fait à la main avec amour pour les moments spéciaux de la vie.',
    quickLinks: 'Liens Rapides',
    policies: 'Politiques',
    copyright: '© 2025 WishIn Bloom. Tous droits réservés.',
  },
  occasions: {
    baptism: 'Baptême',
    mothersDay: 'Fête des Mères',
    christmas: 'Noël',
    communion: 'Première Communion',
    babyShower: 'Baby Shower',
    anniversary: 'Anniversaire',
    valentinesDay: 'Saint-Valentin',
    easter: 'Pâques',
    graduation: 'Graduation',
    engagement: 'Fiançailles',
    newYear: 'Nouvel An',
    retirement: 'Retraite',
    casualGifts: 'Cadeaux Décontractés',
  },
};

export const translations: Record<Language, Translations> = {
  en,
  fr,
};
