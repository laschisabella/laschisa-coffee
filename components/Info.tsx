const InfoBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="lg:m-3 mb-8 lg:mb-0">
    <h2 className="text-themeTitle text-lg lg:text-2xl font-bold mb-2">
      {title}
    </h2>
    <p className="text-themeText text-base lg:text-lg">{description}</p>
  </div>
);

export default function Info() {
  return (
    <section
      className="w-full lg:h-[50vh] flex flex-col lg:flex-row items-center p-11 min-h-max max-w-screen-xl mx-auto"
      id="info"
      aria-labelledby="info-title"
    >
      <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left justify-center items-center lg:items-start">
        <h1
          id="info-title"
          className="text-3xl lg:text-5xl lg:max-w-md text-balance font-merriweather text-themeSecondary"
        >
          We&apos;re here to help you craft your coffee experience
        </h1>
        <a
          href="#"
          className="font-karla text-themeTitle font-bold mt-5"
          aria-label="Discover more about our coffee services"
        >
          Discover more <span>&gt;</span>
        </a>
      </div>

      <div className="lg:w-1/2 sm:grid grid-cols-2 mt-10 lg:my-auto max-w-2xl gap-5">
        <InfoBlock
          title="Our Recommendations"
          description="Why not take this unique opportunity to explore new coffee flavors? Since you're spending more time at home, make it a delightful experience."
        />
        <InfoBlock
          title="Click and Collect"
          description="Convenient and contactless. Free for orders over $200 at participating locations."
        />
        <InfoBlock
          title="Consultation Service"
          description="Tailored advice from a coffee expert to enhance your brewing and tasting experience."
        />
        <InfoBlock
          title="Brewing Assistance"
          description="Our coffee makers come with easy-to-follow instructions, but you can reach out to our partner for professional setup."
        />
      </div>
    </section>
  );
}
