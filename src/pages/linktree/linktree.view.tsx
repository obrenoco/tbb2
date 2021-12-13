type LinkProps = {
  title: string;
  link: string;
};

const Link = ({ title, link }: LinkProps) => (
  <li className="w-full rounded-full mb-2 text-white p-4 bg-blue-400 cursor-pointer hover:bg-blue-500">
    <a href={link}>{title}</a>
  </li>
);

const links: LinkProps[] = [
  { title: "Email", link: "" },
  { title: "Whatsapp", link: "" },
  { title: "Messenger", link: "" }
];

const Linktree = () => {
  return (
    <div className="main-container flex flex-col bg-white">
      <main className="w-2/3 m-auto h-full text-center py-4">
        <img
          className="rounded-full w-24 h-24 m-auto mb-4"
          src="https://i.pinimg.com/564x/4e/65/73/4e6573459e1640d9ec5cfd540bdf18b2.jpg"
          alt=""
        />
        <h1 className="text-3xl font-bold mb-2">Tudo bem Brasil</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          vitae.
        </p>
        <ul className="">
          {links.map((x) => (
            <Link title={x.title} link={x.link} />
          ))}
        </ul>
      </main>
      <footer className="w-full text-center p-4 uppercase border-t-2">
        Made with {"<3"} by Breno
      </footer>
    </div>
  );
};

export default Linktree;
