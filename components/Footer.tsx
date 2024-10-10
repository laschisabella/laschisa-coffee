import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface LinkSectionProps {
  title: string;
  links: string[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <ul className="text-lg font-thin">
    <li className="transition hover:text-black">
      <h3 className="text-2xl font-bold text-themeSecondary">{title}</h3>
    </li>
    {links.map((link) => (
      <li key={link} className="transition hover:text-black">
        <a href="#">{link}</a>
      </li>
    ))}
  </ul>
);

const SustainabilitySection: React.FC = () => (
  <div className="max-w-64">
    <h3 className="text-2xl font-bold text-themeSecondary">
      We respect our planet
    </h3>
    <Image
      src="/images/sustainability.jpg"
      alt="Sustainability coffee initiative"
      width={250}
      height={200}
      className="w-full object-cover rounded-md my-3"
    />
    <p>
      We&#39;re brewing a better future by making conscious choices to minimize
      our environmental footprint. For us, that means sourcing our coffee
      responsibly.
    </p>
    <a
      href="#"
      className="text-themeTitle font-bold text-lg inline-block mt-2 hover:text-themeSecondary transition"
      aria-label="Learn more about our sustainability efforts"
    >
      Learn more <span>&gt;</span>
    </a>
  </div>
);

const SocialIcons: React.FC = () => (
  <div className="my-10 flex justify-center gap-5 text-4xl text-themeText">
    <a
      href="#"
      className="transition hover:text-themeSecondary"
      aria-label="Facebook"
    >
      <FacebookLogo weight="fill" />
    </a>
    <a
      href="#"
      className="transition hover:text-themeSecondary"
      aria-label="Instagram"
    >
      <InstagramLogo weight="fill" />
    </a>
    <a
      href="#"
      className="transition hover:text-themeSecondary"
      aria-label="LinkedIn"
    >
      <LinkedinLogo weight="fill" />
    </a>
    <a
      href="#"
      className="transition hover:text-themeSecondary"
      aria-label="X (formerly Twitter)"
    >
      <XLogo weight="fill" />
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto my-10 p-5">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row justify-between text-themeText gap-5">
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="Laschisa logo"
            width={80}
            height={80}
          />
          <span className="font-merriweather text-3xl font-bold text-themeSecondary">
            laschisa
          </span>
          <span className="tracking-widest text-sm">coffee shop</span>
        </div>
        <LinkSection
          title="Products"
          links={[
            "Coffee Beans",
            "Ground Coffee",
            "Espresso",
            "Cold Brew",
            "Accessories",
          ]}
        />
        <LinkSection
          title="Brew Methods"
          links={[
            "French Press",
            "Pour Over",
            "AeroPress",
            "Espresso Machine",
            "Cold Brew Maker",
          ]}
        />
        <LinkSection
          title="Services"
          links={[
            "Coffee Tasting",
            "Coffee Subscriptions",
            "Custom Blends",
            "Barista Training",
            "Gift Cards",
          ]}
        />
        <LinkSection
          title="About Us"
          links={["Our Story", "Our Coffee", "Sustainability"]}
        />
        <SustainabilitySection />
      </div>
      <SocialIcons />
      <div className="flex flex-col md:flex-row items-center justify-between text-themeText font-thin">
        <span>© 2024 Agence Dnd</span>
        <ul className="flex gap-3">
          <li className="transition hover:text-black">
            <a href="#">Privacy policy</a>
          </li>
          <li className="transition hover:text-black">
            <a href="#">Terms of service</a>
          </li>
          <li className="transition hover:text-black">
            <a href="#">Language</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
