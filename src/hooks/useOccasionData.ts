import { OccasionData } from '../types/occasion';

const occasionData: Record<string, OccasionData> = {
  wedding: {
    title: 'Wedding Celebrations',
    description: 'Your perfect wedding day deserves perfect planning. From intimate ceremonies to grand celebrations, we help create the wedding of your dreams.',
    seoTitle: 'Wedding Planning Services',
    seoDescription: 'Expert wedding planning services to create your dream wedding. From intimate ceremonies to grand celebrations, we handle every detail of your special day.',
    seoKeywords: 'wedding planner, wedding planning services, bridal planning, wedding coordination, wedding ceremony, wedding reception',
    galleryItems: [
      {
        id: 'classic-wedding',
        image: '/placeholder.svg',
        alt: 'Elegant classic wedding ceremony with traditional floral arrangements and romantic church setting',
        title: 'Classic Wedding',
        description: 'Timeless and elegant wedding ceremonies with traditional touches'
      },
      {
        id: 'outdoor-wedding',
        image: '/placeholder.svg',
        alt: 'Beautiful outdoor wedding ceremony with garden backdrop and natural floral decorations',
        title: 'Outdoor Wedding',
        description: 'Beautiful outdoor ceremonies in natural settings and gardens'
      },
      {
        id: 'modern-wedding',
        image: '/placeholder.svg',
        alt: 'Contemporary modern wedding ceremony with sleek decor and minimalist style elements',
        title: 'Modern Wedding',
        description: 'Contemporary wedding celebrations with modern style and flair'
      }
    ],
    detailItems: [
      {
        id: 'personalized',
        icon: '✨',
        title: 'Personalized Planning',
        description: 'Every wedding is unique, and we tailor our services to your specific vision and needs.'
      },
      {
        id: 'attention',
        icon: '🎯',
        title: 'Attention to Detail',
        description: 'From the smallest decorative touches to major logistics, we ensure everything is perfect.'
      },
      {
        id: 'support',
        icon: '🤝',
        title: 'Full Support',
        description: 'Our team is with you every step of the way, from initial planning to the final celebration.'
      }
    ],
    serviceItems: [],
    whyChooseTitle: 'Why Choose Us for Your Wedding?',
    servicesTitle: 'Wedding Services'
  },
  birthday: {
    title: 'Birthday Celebrations',
    description: 'Make every birthday unforgettable with our personalized celebration planning services.',
    seoTitle: 'Birthday Party Planning',
    seoDescription: 'Create unforgettable birthday celebrations for all ages. From kids\' themed parties to milestone birthday celebrations, we make every birthday special.',
    seoKeywords: 'birthday party planner, kids birthday parties, adult birthday celebrations, milestone birthdays, birthday party ideas',
    galleryItems: [
      {
        id: 'kids-birthday',
        image: '/placeholder.svg',
        alt: 'Colorful kids birthday party with balloons, cake, and fun decorations in a festive setting',
        title: 'Kids Birthday Party',
        description: 'Fun-filled birthday celebrations with games, decorations, and memorable moments'
      },
      {
        id: 'adult-birthday',
        image: '/placeholder.svg',
        alt: 'Sophisticated adult birthday party with elegant decorations and stylish table settings',
        title: 'Adult Birthday Celebration',
        description: 'Sophisticated birthday parties tailored for adults with elegant themes'
      },
      {
        id: 'milestone-birthday',
        image: '/placeholder.svg',
        alt: 'Special milestone birthday celebration with personalized decorations and memory displays',
        title: 'Milestone Birthday',
        description: 'Special celebrations for milestone birthdays with personalized touches'
      }
    ],
    detailItems: [
      {
        id: 'personalized',
        icon: '✨',
        title: 'Personalized Planning',
        description: 'Every birthday is unique, and we tailor our services to your specific vision and needs.'
      },
      {
        id: 'attention',
        icon: '🎯',
        title: 'Attention to Detail',
        description: 'From the smallest decorative touches to major logistics, we ensure everything is perfect.'
      },
      {
        id: 'support',
        icon: '🤝',
        title: 'Full Support',
        description: 'Our team is with you every step of the way, from initial planning to the final celebration.'
      }
    ],
    serviceItems: [],
    whyChooseTitle: 'Why Choose Us for Your Birthday?',
    servicesTitle: 'Birthday Services'
  },
  anniversary: {
    title: 'Anniversary Celebrations',
    description: 'Celebrate your milestones with beautifully planned anniversary celebrations that honor your journey together.',
    seoTitle: 'Anniversary Celebration Planning',
    seoDescription: 'Professional anniversary celebration planning services. Create memorable milestone celebrations that honor your love story and journey together.',
    seoKeywords: 'anniversary party planner, milestone anniversary, wedding anniversary celebration, vow renewal ceremony, anniversary party ideas',
    galleryItems: [
      {
        id: 'wedding-anniversary',
        image: '/placeholder.svg',
        alt: 'Elegant wedding anniversary celebration with romantic decorations and candlelit dinner setting',
        title: 'Wedding Anniversary',
        description: 'Elegant celebrations marking years of love and commitment with personalized touches'
      },
      {
        id: 'milestone-anniversary',
        image: '/placeholder.svg',
        alt: 'Special milestone anniversary party with family gathering and memory photo displays',
        title: 'Milestone Anniversary',
        description: 'Special celebrations for significant anniversaries like 25th, 50th, and golden years'
      },
      {
        id: 'renewal-ceremony',
        image: '/placeholder.svg',
        alt: 'Beautiful vow renewal ceremony with family and friends in garden setting',
        title: 'Renewal Ceremony',
        description: 'Vow renewal ceremonies with family and friends to celebrate enduring love'
      }
    ],
    detailItems: [
      {
        id: 'meaningful',
        icon: '💍',
        title: 'Meaningful Planning',
        description: 'Every anniversary celebration is designed to honor your unique love story.'
      },
      {
        id: 'attention',
        icon: '🎯',
        title: 'Attention to Detail',
        description: 'From photo displays to memory tables, we capture your journey beautifully.'
      },
      {
        id: 'support',
        icon: '🤝',
        title: 'Full Support',
        description: 'Our team ensures your anniversary celebration is stress-free and memorable.'
      }
    ],
    serviceItems: [],
    whyChooseTitle: 'Why Choose Us for Anniversaries?',
    servicesTitle: 'Anniversary Services'
  },
  'special-occasions': {
    title: 'Special Occasions',
    description: 'Create unforgettable moments for unique celebrations and once-in-a-lifetime events that deserve special attention.',
    seoTitle: 'Special Occasion Planning Services',
    seoDescription: 'Professional planning for unique celebrations, corporate events, milestone achievements, and custom themed events. Make your special occasion unforgettable.',
    seoKeywords: 'special occasion planner, corporate events, milestone celebrations, custom themes, unique events, professional event planning',
    galleryItems: [
      {
        id: 'corporate-events',
        image: '/placeholder.svg',
        alt: 'Professional corporate event with elegant business setting and networking atmosphere',
        title: 'Corporate Events',
        description: 'Professional celebrations for company milestones, launches, and business achievements'
      },
      {
        id: 'milestone-celebrations',
        image: '/placeholder.svg',
        alt: 'Special milestone celebration with personalized decorations and achievement recognition',
        title: 'Milestone Celebrations',
        description: 'Unique events marking significant life achievements and personal milestones'
      },
      {
        id: 'custom-themes',
        image: '/placeholder.svg',
        alt: 'Custom themed event with personalized decorations and unique creative elements',
        title: 'Custom Themes',
        description: 'Personalized celebrations with completely custom themes tailored to your vision'
      }
    ],
    detailItems: [
      {
        id: 'unique',
        icon: '⭐',
        title: 'Unique Planning',
        description: 'Every special occasion is planned with creativity to match your unique vision.'
      },
      {
        id: 'attention',
        icon: '🎯',
        title: 'Attention to Detail',
        description: 'From concept to execution, we ensure every element reflects your special moment.'
      },
      {
        id: 'support',
        icon: '🤝',
        title: 'Full Support',
        description: 'Our team brings your most ambitious celebration ideas to life perfectly.'
      }
    ],
    serviceItems: [],
    whyChooseTitle: 'Why Choose Us for Special Occasions?',
    servicesTitle: 'Special Occasion Services'
  }
};

export const useOccasionData = (occasionType: string): OccasionData | null => {
  return occasionData[occasionType] || null;
};