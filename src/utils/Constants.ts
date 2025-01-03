import { productSizeType } from "./types/types";

export const product = {
  brand: "Luis Phillipe",
  category: "64610011cbb60b4ead530aff",
  description: "Formal shirts for every day use",
  price: 86,

  type: [
    {
      color: "red",
      image: [
        "http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133995/ypm9jxbmwdtotoyzx5fe.jpg",
      ],
      isListed: true,
      size: [
        { available: "SM", stock: 103 },
        { available: "M", stock: 104 },
        { available: "L", stock: 102 },
        { available: "XL", stock: 10 },
        { available: "XXL", stock: 109 },
      ],
    },
    {
      color: "blue",
      image: [
        "http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133995/ypm9jxbmwdtotoyzx5fe.jpg",
      ],
      isListed: true,
      size: [
        { available: "SM", stock: 14 },
        { available: "M", stock: 13 },
        { available: "L", stock: 12 },
        { available: "XL", stock: 10 },
        { available: "XXL", stock: 109 },
      ],
    },
    {
      color: "green",
      image: [
        "http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133995/ypm9jxbmwdtotoyzx5fe.jpg",
      ],
      isListed: true,
      size: [
        { available: "SM", stock: 104 },
        { available: "M", stock: 103 },
        { available: "L", stock: 182 },
        { available: "XL", stock: 130 },
        { available: "XXL", stock: 119 },
      ],
    },
  ],
  title: "Mens's Shirt ",
  uniqueId: "ae0ed4b2f0601d33",
  _id: "6461d86b3402c4fd6f42b82d",
  rating: 4.3,
  reviews: [],
};

export const Addresses = [
  {
    name: "Alan gomez",
    mobileNo: "9526506077",
    locality: "Arrattuvazhi",
    pincode: "",
    address: "Green land, Arrattuvazhi ward, Alappuzha",
    AlternateMobile: "9895480287",
    landMark: "",
  },
  {
    name: "John gomez",
    mobileNo: "9526506077",
    locality: "Arrattuvazhi",
    pincode: "",
    address: "Green land, Arrattuvazhi ward, Alappuzha",
    AlternateMobile: "9895480287",
    landMark: "",
  },
  {
    name: "Milan gomez",
    mobileNo: "9526506077",
    locality: "Arrattuvazhi",
    pincode: "",
    address: "Green land, Arrattuvazhi ward, Alappuzha",
    AlternateMobile: "9895480287",
    landMark: "",
  },
];

export const productSizes: productSizeType = [
  { type: "Pants", sizes: [28, 30, 32, 34, 36] },
  { type: "Shoes", sizes: [6, 7, 8, 9, 10] },
  { type: "Others", sizes: ["SM", "M", "L", "XL", "XXL"] }
];


export const products = [
  {
    uniqueId: 'ae0ed4b2f0601d33',
    title: "Mens's Shirt ",
    description: 'Formal shirts for every day use',
    brand: 'Luis Phillipe',
    price: 86,
    category: '64610011cbb60b4ead530aff',
    stock: 860,
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133995/ypm9jxbmwdtotoyzx5fe.jpg'
    ],
    variants: [ [Object], [Object] ]
  },
  {
    uniqueId: 'a2ff92e131eeaf1c',
    title: 'Black shirt',
    description: 'Black shirt for cool boys',
    brand: 'US Polo Assn',
    price: 97,
    category: '64648db06b85753534754282',
    stock: 6,
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1685166016/vsllzunfmu5z2tbwqtnr.jpg'
    ],
    variants: []
  },
  {
    uniqueId: '8b7ad03351f354af',
    title: 'Dress',
    description: 'Dress for every occassion',
    brand: 'dafodils',
    price: 89,
    category: '6461cec603b04ecbcac400a9',
    stock: '10',
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133423/k8otwyhwmkqqoqxv0g2y.jpg'
    ],
    variants: []
  },
  {
    uniqueId: '63065ae6ca27c7a1',
    title: 'Troussers',
    description: 'Troussers for kids.',
    brand: 'Adidas',
    price: 68,
    category: '64648db06b85753534754282',
    stock: 30,
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1685099919/azylutdm0pdeolutrgpt.jpg'
    ],
    variants: []
  },
  {
    uniqueId: '798e8f76e8008d29',
    title: 'T-shirt',
    description: 'T-shirt for this crazy summer weather',
    brand: 'Puma',
    price: 97,
    category: '6461cec603b04ecbcac400a9',
    stock: 488,
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133602/qlkqtofbbrsvpqbupnc0.jpg'
    ],
    variants: []
  },
  {
    title: 'title ',
    brand: 'title brand',
    description: "title brand is a vejf;la akjlakj'",
    price: 87,
    stock: 56,
    color: '#FFFFFF',
    category: 'kids',
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1733985094/vowku4clhzozuxj386yt.png'
    ],
    variants: [ [Object], [Object], [Object], [Object] ]
  },
  {
    title: 'title 2',
    brand: 'title broski',
    description: 'l;kadjfj akjf;lka dkjf;lak dkjfa; ',
    price: 78,
    stock: 5,
    color: '#HEHEHE',
    category: 'men',
    uniqueId: '8587dd4b4ce2dcb7',
    isListed: true,
    image: [
      'http://res.cloudinary.com/dm0zmjhwf/image/upload/v1734012094/kharrpq0zw73b5g2voth.jpg'
    ],
    variants: []
  }
]