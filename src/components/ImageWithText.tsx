import Image from "next/image";

interface ImageWithTextProps {
  src: string;
  alt: string;
  text: string;
  reverse?: boolean;
}

export default function ImageWithText({
  src,
  alt,
  text,
  reverse = false,
}: ImageWithTextProps) {
  return (
    <div
      className={`flex items-center ${
        reverse ? "flex-row-reverse text-right" : "text-left"
      } gap-6 w-full max-w-4xl`}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-300">{text}</p>
    </div>
  );
}
