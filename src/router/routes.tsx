import CollectionPage from "../modules/collection-page/index";
import ContactUs from "../modules/contact-us/index";


export const routes = [
  { path: "/", element: <CollectionPage /> },
  { path: "/CollectionPage", element: <CollectionPage /> },
  { path: "/ContactUs", element: <ContactUs /> },
];
