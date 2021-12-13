import React from "react";
import { Container } from "../../components/Container";
import { EmailIcon } from "../../components/icons/email";
import { InstagramIcon } from "../../components/icons/instagram";

type LinkProps = {
  title: string;
  link: string;
};

type SocialMediaProps = { title: string; link: string; Icon: React.VFC };

const linkColor = "green-600";
const bgColor = "yellow-400";

const Link = ({ title, link }: LinkProps) => (
  <li
    title={title}
    className={`w-full rounded-full mb-2 border-${linkColor} border-4 text-${linkColor} font-bold py-2 cursor-pointer hover:bg-${linkColor} hover:text-white`}
  >
    <a href={link} target="_blank" rel="noreferrer">
      {title}
    </a>
  </li>
);

const SocialLinks: React.FC<SocialMediaProps> = ({
  title,
  link,
  Icon = InstagramIcon
}) => (
  <li title={title}>
    <a href={link} target="_blank" rel="noreferrer">
      <Icon size={40} className={`text-${linkColor} hover:text-gray-500`} />
    </a>
  </li>
);

const links: LinkProps[] = [
  { title: "Premier contact", link: "" },
  { title: "Test de niveau", link: "" }
];

const socialLinks: SocialMediaProps[] = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/tudobem.brasil/",
    Icon: InstagramIcon
  },
  {
    title: "Email",
    link:
      "mailto:tudobembrasil@gmail.com&subject=Premier Cours&body=Bonjours, j'aimerais avoir plus d'information!",
    Icon: EmailIcon
  }
];

const Linktree = () => {
  return (
    <Container className={`bg-${bgColor}`}>
      <main className="w-3/4 m-auto h-full text-center py-14 lg:w-1/3 lg:m-auto">
        <img
          className="rounded-full w-24 h-24 m-auto mb-4"
          src="https://revolutionnow.com.br/wp-content/uploads/2018/10/white-square.jpg"
          alt=""
        />
        <h1 className="text-3xl font-bold text-green-600">Tudo bem Brasil</h1>
        <p className="mb-6 text-lg text-gray-500">@tudobembrasil</p>
        <ul className="">
          {links.map((x) => (
            <Link key={x.title} title={x.title} link={x.link} />
          ))}
        </ul>
        <ul className="w-full flex justify-center gap-x-2 mt-6">
          {socialLinks.map((x) => (
            <SocialLinks
              key={x.title}
              title={x.title}
              link={x.link}
              Icon={x.Icon}
            />
          ))}
        </ul>
      </main>
      <footer className="w-full text-center py-4 border-t-2">
        <a
          href="https://www.github.com/obrenoco"
          target="_blank"
          rel="noreferrer"
        >
          ❤
        </a>
      </footer>
    </Container>
  );
};

export default Linktree;
