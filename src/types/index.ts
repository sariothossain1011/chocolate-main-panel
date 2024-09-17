export interface IBlog {
    id: number;
    title: string;
    image: string;
    pathName: string;
    description: {
        para: string;
    }[];
    date: string;
    author: string;
  }



  

// MENU 
  export interface SubMenuItem {
    title: string;
    link: string;
  }
  
  export interface MenuItem {
    title: string;
    link: string;
    submenu: SubMenuItem[];
  }
  


  // PRODUCTS TYPE

// Interface for individual description objects
export interface Description {
  id: number;
  title: string;
  pera: string;
}

// Interface for individual review objects
export interface Review {
  id: number;
  rating: number;
  comment: string;
}

// Main product interface
export interface IProduct {
  id: number;
  title: string;
  permaLink: string;
  weight: string;
  brand: string;
  productType: string; // Correcting prodcutType to productType
  productOrigin: string; // Correcting prodcutOrigin to productOrigin
  sku: string;
  price: number;
  discountPrice: number;
  quantity: number;
  category: string;
  image: string;
  description: Description[]; // Array of description objects
  review: Review[]; // Array of review objects
}
