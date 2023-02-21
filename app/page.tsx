import Image from "next/image";
import { getBlogViews, getTweetCount, getStarCount } from "lib/metrics";
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export const metadata = {
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Pierre Olivier Tran",
    description: "Developer, writer, and creator.",
    url: "https://potran.vercel.app",
    siteName: "Pierre Olivier Tran",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const Tweets = () => {
  const tweetCount = 0;
  const starCount = 0;

  return (
    <>
      <p className='flex items-center gap-2'>
        <GitHubIcon />
        {`${starCount.toLocaleString()} stars on this repo`}
      </p>
      <p className='flex items-center gap-2'>
        <TwitterIcon />
        {`${tweetCount.toLocaleString()} tweets all time`}
      </p>
    </>
  );
};

export default async function HomePage() {
  const [views] = await Promise.all([getBlogViews()]);

  return (
    <section className=''>
      <h1 className='font-bold text-3xl font-serif'>{name}</h1>
      <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
        {about()}
      </p>
      <div className='flex items-start md:items-center my-8 flex-col md:flex-row'>
        <Image
          alt={name}
          className='rounded-full grayscale'
          src={avatar}
          placeholder='blur'
          width={100}
          priority
        />
        <div className='mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'>
          <p className='flex items-center'>
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </p>
        </div>
      </div>
      <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
        {bio()}
      </p>
      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400'>
        <li>
          <a
            className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all'
            rel='noopener noreferrer'
            target='_blank'
            href='https://twitter.com/p0tran'
          >
            <ArrowIcon />
            <p className='h-7'>follow me on twitter</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
