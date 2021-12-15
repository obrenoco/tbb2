import React from "react";
import { Container } from "../components/Container";
import { Email2Icon } from "../components/icons/email2";
import { TelephoneIcon } from "../components/icons/telephone";
import { WhatsappIcon } from "../components/icons/whatsapp";

type FooterLinksProps = {
  Icon: React.VFC<{ className: string; size: number }>;
  href: string;
};

export const linkColor = "green-600";
export const linkHover = "green-800";
export const bgColor = "yellow-400";

const footerLinks: FooterLinksProps[] = [
  { Icon: TelephoneIcon, href: "tel:+33769752343" },
  { Icon: WhatsappIcon, href: "https://wa.me/+33769752343" },
  { Icon: Email2Icon, href: "sms:+33769752343" }
];

const Home = () => {
  return (
    <Container className={`bg-${bgColor}`}>
      <main className="w-3/4 m-auto h-full text-center py-14 lg:w-1/3:m-auto">
        <img
          className="rounded-full w-24 h-24 m-auto mb-4"
          src="https://revolutionnow.com.br/wp-content/uploads/2018/10/white-square.jpg"
          alt=""
        />
        <h1 className="text-3xl font-bold text-green-600">Tudo bem Brasil</h1>
        <p className="mb-6 text-lg text-gray-500">@tudobembrasil</p>
      </main>
      <footer className={`text-center flex justify-around `}>
        {footerLinks.map((x, i) => (
          <a
            key={i}
            href={x.href}
            target="_blank"
            rel="noreferrer"
            className={`w-full h-full py-4 bg-${linkColor} transition-colors hover:bg-${linkHover}`}
          >
            {<x.Icon className="text-white w-30" size={24} />}
          </a>
        ))}
      </footer>
    </Container>
  );
};

export default Home;
