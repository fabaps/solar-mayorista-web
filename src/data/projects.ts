export const PROJECTS = [
  {
    img: "https://app.seeker.uy/UpLoad/Tenant_Resources/20043/Video/IMG_20200708_141328.jpg",
    place: "Jutiapa",
    title: "Sistema residencial",
    description: "Ahorro anual Q10,000",
  },
  {
    img: "https://app.seeker.uy/UpLoad/Tenant_Resources/20043/Video/IMG_20200708_141328.jpg",
    place: "Jutiapa",
    title: "Sistema residencial",
    description: "Ahorro anual Q10,000",
  },
  {
    img: "https://app.seeker.uy/UpLoad/Tenant_Resources/20043/Video/IMG_20200708_141328.jpg",
    place: "Jutiapa",
    title: "Sistema residencial",
    description: "Ahorro anual Q10,000",
  },
  {
    img: "https://app.seeker.uy/UpLoad/Tenant_Resources/20043/Video/IMG_20200708_141328.jpg",
    place: "Jutiapa",
    title: "Sistema residencial",
    description: "Ahorro anual Q10,000",
  },
] as const;

export type Project = (typeof PROJECTS)[number];
