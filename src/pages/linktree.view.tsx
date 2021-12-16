import { Link } from "brouther";
import React, { Fragment } from "react";
import { Container } from "../components/Container";
import { EmailIcon } from "../components/icons/email";
import { InstagramIcon } from "../components/icons/instagram";
import { bgColor, linkClassname, linkColor } from "./home.view";

type LinkProps = {
  title: string;
  link: string;
  internalLink?: boolean;
};

type SocialMediaProps = { title: string; link: string; Icon: React.VFC };

const ListLink = ({ title, link, internalLink = false }: LinkProps) => (
  <Fragment>
    {internalLink ? (
      <Link className={linkClassname} href={link} rel="noreferrer">
        {title}
      </Link>
    ) : (
      <a href={link} className={linkClassname} target="_blank" rel="noreferrer">
        {title}
      </a>
    )}
  </Fragment>
);

const SocialLinks: React.FC<SocialMediaProps> = ({
  title,
  link,
  Icon = InstagramIcon,
}) => (
  <li title={title}>
    <a href={link} target="_blank" rel="noreferrer">
      <Icon size={40} className={`text-${linkColor} hover:text-gray-500`} />
    </a>
  </li>
);

const links: LinkProps[] = [
  { title: "Premier contact", link: "" },
  { title: "Test de niveau", link: "" },
  { title: "Website", link: "./", internalLink: true },
];

const socialLinks: SocialMediaProps[] = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/tudobem.brasil/",
    Icon: InstagramIcon,
  },
  {
    title: "Email",
    link: "mailto:tudobembrasil@gmail.com&subject=Premier Cours&body=Bonjours, j'aimerais avoir plus d'information!",
    Icon: EmailIcon,
  },
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
        <div className="flex flex-col">
          {links.map((x) => {
            console.log(x.internalLink);

            return (
              <ListLink
                key={x.title}
                title={x.title}
                link={x.link}
                internalLink={x.internalLink}
              />
            );
          })}
        </div>
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
      <footer className={`text-center flex justify-around bg-${linkColor}`}>
        <a
          href="https://www.github.com/obrenoco"
          target="_blank"
          rel="noreferrer"
          className="py-4"
        >
          ❤
        </a>
      </footer>
      {/* <footer className={`w-full text-center py-4 bg-${linkColor}`}>
        <a
          href="https://www.github.com/obrenoco"
          target="_blank"
          rel="noreferrer"
        >
          ❤
        </a>
      </footer> */}
    </Container>
  );
};

export default Linktree;
