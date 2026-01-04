import type { Category } from "../types/catalog";

export const categories: Category[] = [
  {
    _id: "cat-1",
    name: "Shoes",
    slug: "shoes",
    image: {
      url: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },
    products: [
      {
        _id: "164",
        name: "Кроссовки Nike Air Max",
        slug: "nike-air-max",
        price: { price: 150, discountedPrice: 120 },
        currency: "USD",
        category: "Обувь",
        subCategory: "Кроссовки",
        description:
          "Удобные и стильные кроссовки Nike Air Max для повседневной носки и спорта.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
              },
            },
          ],
        },
        bestseller: true,
        sizes: ["36", "37", "38", "39", "40"],
      },
      {
        _id: "2345",
        name: "Adidas Ultraboost",
        slug: "adidas-ultraboost",
        price: { price: 140 },
        currency: "USD",
        category: "Обувь",
        subCategory: "Кроссовки",
        description:
          "Комфортные беговые кроссовки Adidas Ultraboost с отличной амортизацией.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
              },
            },
          ],
        },
        bestseller: false,
        sizes: ["37", "38", "39", "40", "41"],
      },
    ],
  },

  {
    _id: "cat-2",
    name: "Cloth",
    slug: "clothing",
    image: {
      url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
    products: [
      {
        _id: "345",
        name: "Футболка Oversize",
        slug: "oversize-tshirt",
        price: { price: 45, discountedPrice: 35 },
        currency: "USD",
        category: "Одежда",
        subCategory: "Футболки",
        description:
          "Стильная футболка Oversize из мягкого хлопка для повседневного образа.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
              },
            },
          ],
        },
        bestseller: true,
        sizes: ["S", "M", "L", "XL"],
      },
      {
        _id: "4234",
        name: "Худи с капюшоном",
        slug: "hoodie",
        price: { price: 65 },
        currency: "USD",
        category: "Одежда",
        subCategory: "Худи",
        description:
          "Тёплое худи с капюшоном для комфорта и уюта в прохладную погоду.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
              },
            },
          ],
        },
        bestseller: false,
        sizes: ["M", "L", "XL"],
      },
    ],
  },

  {
    _id: "cat-3",
    name: "Accessories",
    slug: "accessories",
    image: {
      url: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg",
    },
    products: [
      {
        _id: "579",
        name: "Солнцезащитные очки",
        slug: "sunglasses",
        price: { price: 60, discountedPrice: 50 },
        currency: "USD",
        category: "Аксессуары",
        subCategory: "Очки",
        description:
          "Модные солнцезащитные очки с UV-защитой, подходят к любому образу.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
              },
            },
          ],
        },
        bestseller: true,
        sizes: [],
      },
      {
        _id: "6689",
        name: "Кожаный ремень",
        slug: "leather-belt",
        price: { price: 45 },
        currency: "USD",
        category: "Аксессуары",
        subCategory: "Ремни",
        description:
          "Классический кожаный ремень для ежедневного использования.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
              },
            },
          ],
        },
        bestseller: false,
        sizes: [],
      },
    ],
  },

  {
    _id: "cat-4",
    name: "Home",
    slug: "home",
    image: {
      url: "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg",
    },
    products: [
      {
        _id: "9001",
        name: "Декоративная лампа",
        slug: "decor-lamp",
        price: { price: 80, discountedPrice: 65 },
        currency: "USD",
        category: "Дом",
        subCategory: "Лампы",
        description:
          "Современная декоративная лампа для уютного освещения дома.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg",
              },
            },
          ],
        },
        bestseller: true,
        sizes: [],
      },
      {
        _id: "9002",
        name: "Кофейный набор",
        slug: "coffee-set",
        price: { price: 20, discountedPrice: 15 },
        currency: "USD",
        category: "Дом",
        subCategory: "Посуда",
        description: "Стильный кофейный набор из чашек и блюдец для дома.",
        media: {
          mainMedia: {
            image: {
              url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
            },
          },
          items: [
            {
              image: {
                url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg",
              },
            },
            {
              image: {
                url: "https://images.pexels.com/photos/1128112/pexels-photo-1128112.jpeg",
              },
            },
          ],
        },
        bestseller: false,
        sizes: [],
      },
    ],
  },
];
