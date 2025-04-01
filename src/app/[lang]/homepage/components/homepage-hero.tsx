export default async function HomepageHero() {
  return (
    <div className="mx-auto flex h-fit max-w-[1200px] flex-col justify-center py-[2rem] text-accent lg:min-h-[500px]">
      <p className="mb-4 text-xl font-semibold md:text-xl">
        {`Heya, I'm Nadhif Rafifaiz`}
      </p>

      <p className="mb-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        I Translate Ideas to Websites
      </p>

      <span className="mt-4 flex flex-col text-lg sm:text-xl md:text-2xl">
        <p>
          {`I'm a website developer at Sprout Digital Lab, a startup based in
          Indonesia.`}
        </p>
        <p>I also write tips about web development on Medium and LinkedIn.</p>
      </span>
    </div>
  );
}
