import Link from "next/link";
import HighlightText from "../../components/highlight-text";

export default async function HomepageHero() {
  return (
    <div className="mx-auto flex h-fit w-[90%] max-w-[1200px] flex-col justify-center py-[2rem] text-primary lg:min-h-[500px]">
      <p className="mb-4 font-epilogue text-xl font-bold uppercase tracking-widest text-primary md:text-xl">
        {`Heya, I'm Nadhif `}
      </p>
      <p className="mb-2 font-playfair text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
        I Translate Ideas to Websites
      </p>

      <span className="mt-4 flex flex-col font-epilogue text-lg tracking-wide sm:text-lg md:text-2xl">
        <p className="text-text md:max-w-[70%]">
          {`I'm a website developer at Sprout Digital Lab, a startup based in Indonesia. I also write tips about web development on `}
          <HighlightText className="before:bg-accent after:bg-secondary">
            <Link
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text"
            >
              Medium
            </Link>
          </HighlightText>
          {` and `}
          <HighlightText className="before:bg-accent after:bg-secondary">
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text"
            >
              LinkedIn
            </Link>
          </HighlightText>
          .
        </p>
      </span>
    </div>
  );
}
