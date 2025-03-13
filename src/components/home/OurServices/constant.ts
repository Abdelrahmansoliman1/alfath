import { serviceProps } from "./service";

export const servicesList: serviceProps[] = [
  {
    title: "Shipping Agency",
    desc: ` 
The company provides 24/7 services that meet the highest international standards through a team of specialists dedicated to fulfilling the requirements of shipping lines (liners – NVOCC) that we represent in Egypt. Additionally, we handle all types of ships (dry bulk – general cargo), facilitating all procedures and requirements from the moment a ship arrives at Egyptian ports until it sets sail. We proudly represent our clients, ship owners, captains, and ship crews to ensure seamless operations.`,
    goTo: "/our-services/shipping-agency",
    image: "https://dummyimage.com/500x500.png",
  },
  {
    title: "Storage Services",
    desc: `The company provides storage services for all types of cargo, including dry bulk, general cargo, and containers.`,
    goTo: "/our-services/storage-services",
    image: "https://dummyimage.com/500x500.png",
    reverse: true,
    imageClassName: "md:-mt-15",
  },
  {
    title: "Transportation Services",
    desc: `The company provides transportation services for all types of cargo, including dry bulk, general cargo, and containers.`,
    goTo: "/our-services/transportation-services",
    image: "https://dummyimage.com/500x500.png",
    imageClassName: "md:-mt-15",
  },
  {
    title: "Other Shipping Services",
    desc: "The company provides all types of shipping services, including dry bulk, general cargo, and containers.",
    goTo: "/our-services/other-shipping-services",
    image: "https://dummyimage.com/500x500.png",
    reverse: true,
    imageClassName: "md:-mt-15",
  },
];
