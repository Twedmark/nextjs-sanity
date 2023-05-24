import type { Footer } from "@/typings";

type Props = {
  data: Footer;
};

const Footer = ({ data }: Props) => {
  return (
    <div className="flex items-center justify-between p-5 ">
      <section>
        <p>{data.companyName}</p>
        <p>{data.address}</p>
        <p>{data.email}</p>
        <p>{data.phoneNumber}</p>
      </section>
      <section className="flex flex-col">
        {data.links.map((link: string) => (
          <a key={link} href={link}>
            {link.split(".")[1]}
          </a>
        ))}
      </section>
    </div>
  );
};

export default Footer;
