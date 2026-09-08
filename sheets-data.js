/*
  SHEETS — one entry per sheet-sticker product.

  To add a new sheet, copy an object below and edit it:
    id          — unique, no spaces (used in the URL: sheet-detail.html?id=THIS)
    name        — sheet title shown on the card and detail page
    price       — shown as text, e.g. "40 pounds"
    mainImage   — the big photo of the whole sheet
    description — a couple of sentences about the sheet
    contents    — array of image paths for the small designs inside the sheet
                  (use as many as the sheet actually has)

  Placeholder images below reuse pictures already in /images from the
  single-stickers page — swap them for real sheet photos.
*/
const SHEETS = [
  {
    id: "Dental-icons",
    name: "Dental Sheet",
    price: "70 pounds",
    mainImage: "images/dental-sheet/laptop.png",
    description:
      "A sheet packed with dental-themed designs — great for laptops, Dental  boxes, and notebooks. Every sticker is die-cut and ready to peel.",
    contents: [
      "images/dental-sheet/amoung.png",
      "images/dental-sheet/iron.png",
      "images/dental-sheet/msh.png",
      "images/dental-sheet/high.png",
       "images/dental-sheet/don't worry.png",
       "images/dental-sheet/gh.png",
      "images/dental-sheet/kit.png",
      "images/dental-sheet/squid.png",
      "images/dental-sheet/simpsons.jpg",
        "images/dental-sheet/teeth.png",
           "images/dental-sheet/tears.png",
         "images/dental-sheet/floss.png",
    ],
  },
  {
    id: "Spiderman-icons",
    name: "Spiderman Sheet",
    price: "65 pounds",
    mainImage: "images/spider/laptop.jpg",
    description:
      "Spider-Man themed sticker sheet — perfect for laptops,Ipads, and notebooks. Each sticker is die-cut and ready to peel.",
    contents: [
      "images/spider/1.png",
      "images/spider/2.png",
      "images/spider/3.png",
      "images/spider/4.png",
      "images/spider/5.png",
      "images/spider/6.png",
      "images/spider/7.png",
      "images/spider/8.png",
      "images/spider/9.png",
      "images/spider/10.png",
     
    ],
  },
  {
    id: "Egyptian-icons",
    name: "Egyptian Sheet",
    price: "60 pounds",
    mainImage: "images/egypt/laptop.png",
    description:
      "An ancient Egyptian-themed sticker sheet — perfect for laptops,Ipads, and notebooks. Each sticker is die-cut and ready to peel.",
    contents: [
      "images/egypt/1.png",
      "images/egypt/2.png",
      "images/egypt/3.png",
      "images/egypt/4.png",
      "images/egypt/5.png",
      "images/egypt/6.png",
      "images/egypt/7.png",
      "images/egypt/8.png",
      "images/egypt/9.png",
    ],
  },
  {
    id: "liverpool-icons",
    name: "Liverpool Sheet",
    price: "65 pounds",
    mainImage: "images/liverpool/laptop.png",
    description:
      "A Liverpool FC-themed sticker sheet — perfect for laptops,Ipads, and notebooks. Each sticker is die-cut and ready to peel.",
    contents: [
      "images/liverpool/1.png",
      "images/liverpool/2.png",
      "images/liverpool/3.png",
      "images/liverpool/4.png",
      "images/liverpool/5.png",
      "images/liverpool/6.png",
      "images/liverpool/7.png",
      "images/liverpool/8.png",
      "images/liverpool/9.png",
    ],
        id: "Batman-icons",
    name: "Batman Sheet",
    price: "65 pounds",
    mainImage: "images/batman/laptop.png",
    description:
      "A Batman-themed sticker sheet — perfect for laptops,Ipads, and notebooks. Each sticker is die-cut and ready to peel.",
    contents: [
      "images/batman/1.png",
      "images/batman/2.png",
      "images/batman/3.png",
      "images/batman/4.png",
      "images/batman/5.png",
      "images/batman/6.png",
      "images/batman/7.png",
      "images/batman/8.png",
      "images/batman/9.png",
            "images/batman/10.png",

    ],
  },
];
