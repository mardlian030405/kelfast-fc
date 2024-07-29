import ImageSlider from "@/components/ImageSlider";
import JuaraSlider from "@/components/JuaraSlider";
import VideoCard from "../components/VideoCard";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
import juara from "/public/juara.png";
import logo from "/public/logo.png";
import blog1 from "/public/blog1.jpg";
import blog2 from "/public/blog2.jpg";

const videos = [
  {
    videoUrl: "https://www.instagram.com/reel/C59wqZYPATc/embed",
    title: "Cuplikan Kelfast di Respati CUP",
  },
  {
    videoUrl: "https://www.instagram.com/reel/C1ZShrsvUpG/embed",
    title: "Cuplikan Seleksi pemain Kelfast U13",
  },
  {
    videoUrl: "https://www.instagram.com/reel/C6fLXdIP9e4/embed",
    title: "Cuplikan Kelfast on training routine",
  },
];

const blogPosts = [
  {
    title: "My First Blog Post",
    description: "This is the description for my first blog post.",
    imageUrl: "/juara2.jpg",
    date: "July 23, 2024",
  },
  {
    title: "Another Blog Post",
    description: "This is the description for another blog post.",
    imageUrl:
      "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.29350-15/410309492_3500007626905139_1186460993421857155_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDE4MjAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=nrLL8aYPjisQ7kNvgHcUckw&edm=AGFyKLkBAAAA&ccb=7-5&ig_cache_key=MzI1ODAwNDQ3MzExNjU5MDkzOA%3D%3D.2-ccb7-5&oh=00_AYCutHShhuPoU5FdtU8XpytKTmA7cqRJtClKs8ozM0u_ZA&oe=66A50AD9&_nc_sid=5a0a6d",
    date: "July 22, 2024",
  },
  {
    title: "Another Blog Post",
    description: "This is the description for another blog post.",
    imageUrl: "/juara3.jpg",
    date: "July 22, 2024",
  },
];

const Page = () => {
  return (
    <div>
      <ImageSlider />
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative max-md:hidden h-auto overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="lg:py-24 max-sm:pt-10 max-sm:text-center">
              <h1 className="text-2xl font-extrabold sm:text-4xl text-white">
                ACADEMY FUTSAL TEAM
              </h1>
              <h2 className="font-extrabold max-sm:text-center text-3xl sm:text-4xl text-yellow-400 sm:block">
                KELFAST FC
              </h2>

              <p className="mt-4 sm:text-2xl max-sm:text-center text-lg text-white">
                OFFICIAL PARTNERS SAMPEYAN GROUP
              </p>

              <a
                href="/About"
                className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-green-800 transition hover:bg-blue-dark hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 max-sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="lg:text-7xl font-extrabold text-yellow-400 text-4xl">
              CHAMPIONS
            </h2>
          </header>
          <JuaraSlider />
        </div>
      </section>
      <div className="bg-blue-light min-h-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-8">VIDEO</h1>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 justify-center items-center">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
      <div className=" bg-blue-light min-h-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-5 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gallery Kelfast fc
            </h2>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={juara}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li>
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={blog1}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={blog2}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page;
