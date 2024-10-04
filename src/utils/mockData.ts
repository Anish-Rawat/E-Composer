import {
  CALL_ICON,
  CHAT_ICON,
  DISCOUNT_CODE_ICON,
  EMAIL_ICON,
  LOYALTY_PROGRAM_ICON,
  MESSAGE_ICON,
  ORDER_TRACKING_ICON,
  PAYMENT_ICON,
  PAYMENT_METHOD_IMG,
  RETURN_ICON,
  SHIPPING_ICON,
  SIZE_GUIDE_ICON,
  STORE_LOCATION_ICON,
} from "./iconLinks";
import { DURABLE_ICON, STAR_ICON, ECO_FRIENDLY_ICON } from './iconLinks';

export interface FurnitureListState {
  id: number;
  name: string;
  description?: string; 
  price: string;
  image1: string;
  image2?: string; 
  image3?: string; 
};

export const furnitureList: FurnitureListState[] = [
  {
    id: 1,
    name: "Lenia Walnut Console",
    price: "$215.00",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-1_533x.jpg?v=1704247033",
  },
  {
    id: 2,
    name: "Bouclé Oak Dining Chair",
    price: "$215.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-2_120x120_crop_center.jpg?v=1704247006",
    image2:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-2-2_120x120_crop_center.jpg?v=1704248600",
    image3:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-2-4_120x120_crop_center.jpg?v=1704248600",
  },
  {
    id: 3,
    name: "Sven Charme Tan Chair",
    price: "$135.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-3_533x.jpg?v=1704246982",
  },
  {
    id: 4,
    name: "Gabriola Ivory Bouclé Bench",
    price: "$155.00",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-4_533x.jpg?v=1704246957",
  },
  {
    id: 5,
    name: "Sablon Sisal Beige Pillow Set",
    price: "$155.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-5_533x.jpg?v=1704246923",
  },
  {
    id: 6,
    name: "Atra Concrete Round Cafe Table",
    price: "$165.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-6_533x.jpg?v=1704246798",
  },
  {
    id: 7,
    name: "Solina White Terrazzo Stool",
    price: "$145.00",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-7_533x.jpg?v=1704246775",
  },
  {
    id: 8,
    name: "Zola Volcanic Gray Dining Chair",
    price: "$139.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-8_533x.jpg?v=1704246758",
  },
  {
    id: 9,
    name: "Madera Oak 71 Desk",
    price: "$139.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-9_533x.jpg?v=1704246729",
  },
  {
    id: 10,
    name: "Dako Oak Cabinet",
    price: "$158.00",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-10_533x.jpg?v=1704246693",
  },
  {
    id: 11,
    name: "Vireo Oak Drawer Nightstand",
    price: "$315.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-15-1_120x120_crop_center.jpg?v=1704250479",
    image2:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-15-2_120x120_crop_center.jpg?v=1704250478",
  },
  {
    id: 12,
    name: "Maris White Marble Clock",
    price: "$58.00",
    description: "A stylish and comfortable dining chair with oak finish.",
    image1:
      "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/fr-11_533x.jpg?v=1704246450",
  },
];

export const sortOptions = [
  { value: "Featured", label: "Featured" },
  { value: "BestSelling", label: "Best Selling" },
  { value: "AlphabeticalAZ", label: "Alphabetically, A-Z" },
  { value: "AlphabeticalZA", label: "Alphabetically, Z-A" },
  { value: "PriceLowToHigh", label: "Price, Low to High" },
  { value: "PriceHighToLow", label: "Price, High to Low" },
  { value: "DateOldToNew", label: "Date, Old to New" },
  { value: "DateNewToOld", label: "Date, New to Old" },
];

export interface ContactChannel {
  label: string;
  linkText: string;
  href: string;
  icon: string;
}

export const contactChannels: ContactChannel[] = [
  {
    label: "Call",
    linkText: "012-345-6789",
    href: "tel:0123456789",
    icon: CALL_ICON,
  },
  {
    label: "Email",
    linkText: "Contact Us",
    href: "mailto:support@example.com",
    icon: EMAIL_ICON,
  },
  {
    label: "Chat",
    linkText: "Chat Now",
    href: "#",
    icon: CHAT_ICON,
  },
  {
    label: "Message",
    linkText: "Support Now",
    href: "#",
    icon: MESSAGE_ICON,
  },
];

export interface HelpDeskState{
  icon: string;
  title: string;
  subtitle: string;
}

export const helpDeskData: HelpDeskState[] = [
  {
    icon: SIZE_GUIDE_ICON, 
    title: "Size Guide",
    subtitle: "Ensure your customers get the right fit.",
  },
  {
    icon: LOYALTY_PROGRAM_ICON,
    title: "Loyalty Program",
    subtitle: "Offer exclusive rewards.",
  },
  {
    icon: SHIPPING_ICON, 
    title: "Order & Shipping",
    subtitle: "Looking for your order status?",
  },
  {
    icon: PAYMENT_ICON, 
    title: "Payment & Gift Cards",
    subtitle: "Wondering what payment methods we accept?",
  },
  {
    icon: DISCOUNT_CODE_ICON,
    title: "Discount Codes",
    subtitle: "Have a discount you'd like to use?",
  },
  {
    icon: STORE_LOCATION_ICON,
    title: "Store Location",
    subtitle: "Want to find a store near you?",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How do I join the affiliate program?",
    answer: "Simply sign up through our affiliate program page by filling out the registration form. Once approved, you’ll receive a unique affiliate link to start promoting our products.",
  },
  {
    question: "What commission rates do you offer?",
    answer: "We offer competitive commission rates depending on your performance and the program you choose to join.",
  },
  {
    question: "How and when do I get paid?",
    answer: "Payments are processed every month, and you’ll get paid directly to your account after reaching the minimum threshold.",
  },
  {
    question: "What marketing resources are available to affiliates?",
    answer: "We provide banners, text links, and other promotional resources to help you maximize your earnings.",
  },
];

export interface ActionCardState {
  icon: string;       
  title: string;      
  subtitle: string;   
  actionText: string; 
}

export const actionCardData: ActionCardState[] = [
  {
    icon: ORDER_TRACKING_ICON,
    title: "Order Tracking",
    subtitle: "Log in to check the status of your order",
    actionText: "Track your order",
  },
  {
    icon: RETURN_ICON,
    title: "Return & Exchange",
    subtitle: "We make it easy to return and exchange styles.",
    actionText: "Start a return",
  },
];


interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
}

interface Newsletter {
  message: string;
}

interface PaymentMethods {
  imgSrc: string;
}

interface FooterData {
  companyInfo: CompanyInfo;
  newsletter: Newsletter;
  sections: FooterSection[];
  paymentMethods: PaymentMethods;
}

export const footerMockData: FooterData = {
  companyInfo: {
    name: "Vince",
    email: "info@ecomposershop.com",
    phone: "(212) 555-1234",
  },
  newsletter: {
    message: "Sign up for sale, new arrivals & more",
  },
  sections: [
    {
      title: "About Us",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Affiliate", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
    {
      title: "Resource",
      links: [
        { label: "Return Policy", href: "#" },
        { label: "My Account", href: "#" },
        { label: "Find a Store", href: "#" },
        { label: "Legal & Privacy", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Visit Our Store", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Account", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
  ],
  paymentMethods: {
    imgSrc: PAYMENT_METHOD_IMG,
  },
};

export interface FooterPageHeaderData {
  title: string;
  subtitle: string;
}

export const footerPageHeaderMockData: FooterPageHeaderData = {
  title: "HELP CENTER",
  subtitle: "Let us know how we may help you?",
};

interface collectionFeaturesState {
  title:string;
  description : string;
  icon : string;
}

export const collectionFeatures : collectionFeaturesState[] = [
  {
    title: 'Durable Furniture',
    description: 'Invest in long-lasting furniture built with sturdy materials',
    icon: DURABLE_ICON,
  },
  {
    title: 'Stylish Designs',
    description: 'Make a statement with our elegant and on-trend furniture options',
    icon: STAR_ICON,
  },
  {
    title: 'Eco-Friendly Choices',
    description: 'Support a healthier planet by choosing furniture made with sustainable materials',
    icon: ECO_FRIENDLY_ICON,
  },
];

export const brands = [
  { id: 'EComposer', name: 'EComposer', count: 9 },
  { id: 'Kalles', name: 'Kalles', count: 2 },
  { id: 'The4', name: 'The4', count: 2 },
];

export const colors = [
  { id: 'Brown', name: 'Brown', count: 2 },
  { id: 'Black', name: 'Black', count: 3 },
  { id: 'White', name: 'White', count: 5 },
];

export const collections = [
  'Furniture',
  'Bedroom',
  'Home Decor',
  'Storage',
  'Dining & Kitchen',
];
