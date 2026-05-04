export const SUB_NAVBAR_ITEMS = [
    {
      name: "Paneles Solares",
      href: "/productos-solares?category=paneles",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Inversores",
      href: "#ingenieria",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      name: "Baterías",
      href: "#formacion",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      name: "Estructuras",
      href: "#seleccion-productos",
      icon: <Package className="h-5 w-5" />,
    },
    {
      name: "Interruptores",
      href: "#soporte-tecnico",
      icon: <LifeBuoy className="h-5 w-5" />,
    },
    {
      name: "Kits Solares",
      href: "#soporte-tecnico",
      icon: <LifeBuoy className="h-5 w-5" />,
    },
] as const;

export type SubNavbarItem = (typeof SUB_NAVBAR_ITEMS)[number];
