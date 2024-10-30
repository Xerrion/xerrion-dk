import Image from "next/image";

interface CardProps {
  url: string;
  image: string;
  title?: string;
  description?: string;
}

export default function Card({ url, image, title, description }: CardProps) {
  const titleContent = title ? (
    <h2 className="font-semibold text-zinc-800 dark:text-zinc-200 zinc mb-1 line-clamp-1">{title}</h2>
  ) : null;
  const descriptionContent = description ? (
    <p className="font-normal text-zinc-700 dark:text-zinc-400 line-clamp-2">{description}</p>
  ) : null;

  return (
    <div className="h-64">
      <a href={url}
         className="max-w-sm h-full p-6 border border-zinc-200 rounded-lg shadow hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 flex flex-col justify-between">
        <Image src={image} alt="Card image" className="mb-2 rounded-lg" width={32} height={32}/>
        <div className="flex-grow">
          {titleContent}
          {descriptionContent}
        </div>
      </a>
    </div>
  );
}
