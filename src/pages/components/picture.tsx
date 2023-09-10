import Link from "next/link";
import Image from "next/image";

export default function Picture(props) {
  const loremParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const loremSentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href={`production/${props.title.toLowerCase().replace(/ /g, "-")}`}
      >
        <Image
          src={props.url}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
        <h3 className="text-2xl font-bold">{props.title} →</h3>
        <div className="text-lg">{props.text ? props.text : loremSentence}</div>
      </Link>
    </>
  );
}
