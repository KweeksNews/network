import Image from 'next/image';
import Link from 'next/link';
import sites from '../../data/sites.json';
import {
  Launch as LaunchIcon,
  InsertChart as InsertChartIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import { SiteCard } from './SiteCard';
import { useOnScrollOver } from '../../hooks';

export function Content() {
  const scrollOver = useOnScrollOver(50);

  return (
    <>
      <section className="flex items-end min-h-screen mt-36 pb-7 lg:mt-20">
        <div className="grid grid-cols-1 gap-7 items-end justify-items-center max-w-7xl w-full mx-auto md:grid-cols-2 lg:grid-cols-4">
          <div
            className={`sitecard z-10 col-span-1 !duration-300 active:outline-none lg:col-span-2 ${
              !scrollOver
                ? 'max-w-[calc(100%+3.5rem)] w-screen h-[calc(100vh+51px)] -mt-[calc(9rem+1px)] -mx-7 pb-[50px] bg-chinese-black-900 border-none rounded-none md:max-w-[calc(200%+5.25rem)] md:-ml-7 md:-mr-[calc(100%+3.5rem)] lg:-mt-[calc(5rem+1px)]'
                : 'h-96 md:h-56'
            }`}
          >
            <Image
              className="max-w-[80%] mx-auto"
              src="/assets/images/kweeksnews-network.svg"
              alt="KweeksNews Network"
              title="KweeksNews Network"
              width={260.122}
              height={45}
            />
            <p className="text-base text-white mt-5">KweeksNews Network</p>
            <KeyboardArrowDownIcon
              className={`text-white bottom-24 animate-rebound ${
                !scrollOver ? `absolute` : `!hidden`
              }`}
            />
          </div>
          <Link
            className="sitecard col-span-1 lg:col-span-2"
            href="https://status.kweeksnews.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <InsertChartIcon
                className="inline-block align-middle mr-2 !text-3xl text-white"
                fontSize="inherit"
              />
              <p className="inline-block align-middle font-bold text-2xl text-white">Status</p>
            </span>
            <p className="sitecard-link">https://status.kweeksnews.com/</p>
            <span className="sitecard-launch">
              <LaunchIcon fontSize="inherit" />
            </span>
          </Link>
          {sites.map(({ name, link, image }, i) => (
            <SiteCard key={i} className="col-span-1" name={name} link={link} image={image} />
          ))}
        </div>
      </section>
    </>
  );
}
