// src/app/page.js
import Card from "@/components/Card";

export default function HomePage() {
  const cards = [
    {
      id: 1,
      title: "Post 1",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/juara.png",
    },
    {
      id: 2,
      title: "Post 2",
      content:
        "This is the second card absolute inset-0 h-full w-full object-cover lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 3,
      title: "Post 3",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw.",
      imageUrl: "/juara2.jpg",
    },
    {
      id: 4,
      title: "Post 4",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl:
        "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/432540512_1995621987506722_7805268495414454534_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDI1NjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=07BaIWa8jcUQ7kNvgHFulQ5&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzMyMTg2NzM3OTgyMTgyMzQ5OQ%3D%3D.2-ccb7-5&oh=00_AYB9vbf4fuEdhfttpeLPMsYH-J5EZsldRJ4Xx7p84JVi8g&oe=66A5150B&_nc_sid=5a0a6d",
    },
    {
      id: 5,
      title: "Post 5",
      content:
        "This is the second card absolute inset-0 h-full w-full object-cover lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 6,
      title: "Post 6",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw.",
      imageUrl: "/blog2.jpg",
    },
    // Tambahkan lebih banyak kartu jika diperlukan
  ];

  return (
    <div>
      <header className="bg-blue-dark pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Blog
              </h1>

              <p className="mt-1.5 text-sm text-white">
                Berita tentang kelfast fc
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="block rounded-lg bg-white px-5 py-3 text-sm font-medium border-yellow-500 text-blue-dark transition hover:bg-blue-dark  hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                type="button"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
