import Image from "next/image";

const BlogCard = ({ title, description, imageUrl, date }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-xl">
      <div className="relative w-full h-64">
        <Image className="w-full" src={imageUrl} alt={title} layout="fill" />
      </div>
      <div className="px-6 bg-white py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {date}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
