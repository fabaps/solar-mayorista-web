export const PRODUCTS = [
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Paneles Solares",
    url: "/productos-solares?category=paneles",
  },
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Inversores",
    url: "/productos-solares?category=inversores",
  },
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Baterías",
    url: "/productos-solares?category=baterias",
  },
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Estructuras",
    url: "/productos-solares?category=estructuras",
  },
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Interruptores",
    url: "/productos-solares?category=interruptores",
  },
  {
    img: "https://cmsdata.solisinverters.com/uploads/image/5d414122d4914.png",
    title: "Kits Solares",
    url: "/productos-solares?category=kits",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];
