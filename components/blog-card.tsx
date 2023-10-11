import Image from "next/image";

type BlogProps = {
  title?: string;
  tags?: string[];
  image?: string;
};

export default function BlogCard({
  title,
  tags,
  image = "/img/blank.png",
}: BlogProps) {
  return (
    <div className="group cursor-pointer">
      <Image
        src={image}
        alt="blog image"
        className="aspect-video"
        height={270}
        width={480}
      />
      <p className="text-lg md:text-xl my-2 line-clamp-2 group-hover:underline">
        {title}
      </p>
      <div className="flex overflow-x-auto gap-2 no-scrollbar snap-x">
        {tags?.map((tag) => (
          <p
            key={tag}
            className="bg-slate-950 text-gray-100 text-xs px-3 py-1 rounded-lg flex-shrink-0 snap-start"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
