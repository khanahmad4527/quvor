export interface middleLayout1CardInterface {
  id: number;
  img: any;
  title: string;
  paragraph: string;
}

export interface carouselDataInterface {
  id: number;
  image: string;
  name: string;
  profession: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

export interface footerCardDataInterface {
  id: number;
  heading: string;
  links: Array<{
    title: string;
    link: string;
  }>;
}
