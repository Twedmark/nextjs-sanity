import type { Footer } from "@/typings";

type Props = {
  data: Footer;
};

const Footer = ({ data }: Props) => {
  return (
    <footer>
      <div className="flex items-center justify-between p-4 text-sm">
        <div>
          <p>{data.companyName}</p>
          <p>{data.address}</p>
          <p>{data.email}</p>
          <p>{data.phoneNumber}</p>
        </div>
        <div className="flex flex-col">
          {data.links.map((link: string) => (
            <a key={link} href={link}>
              {link.split(".")[1]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
