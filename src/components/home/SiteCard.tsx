import Image from 'next/image';
import Link from 'next/link';
import { Launch as LaunchIcon } from '@mui/icons-material';

type Props = {
  className: string;
  name: string;
  link: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export function SiteCard({ className, name, link, image }: Props) {
  return (
    <Link className={`sitecard ${className}`} href={link} target="_blank" rel="noreferrer">
      <Image
        className="max-w-[80%] max-h-[45px] mx-auto"
        src={image.src}
        alt={name}
        title={name}
        width={image.width}
        height={image.height}
      />
      <p className="sitecard-link">{link}</p>
      <span className="sitecard-launch">
        <LaunchIcon fontSize="inherit" />
      </span>
    </Link>
  );
}
