export default function AboutPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif'>About Me</h1>
      <p className='my-5 text-neutral-800 dark:text-neutral-200'>
        Hey, I'm potran, but most people call me PO.
      </p>
      <p>
        I'm currently lead developer at <b>capsule</b>, building the next
        generation of sales enablement software.
      </p>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      <p className='my-5 text-neutral-800 dark:text-neutral-200'>
        I try to maintain a healthy balance between work and play. I love
        playing video games, watching movies, and reading books. I also enjoy
        working out and going on hikes.
      </p>
      <p className='my-5 text-neutral-800 dark:text-neutral-200'>
        I firmly believe in the power of habits, and ownership. After a few
        rough years, I decided to take control of my life and make it better.
      </p>
      <p className='my-5 text-neutral-800 dark:text-neutral-200'>
        Start your day by making your bed, then hit the gym. Take a cold shower,
        drink a glass of water.
      </p>
      <h2 className='my-3 text-neutral-800 dark:text-neutral-200'>
        Books that changed my life
      </h2>
      <ul>
        <li>
          <b>Atomic Habits</b>, by James Clear
        </li>
        <li>
          <b>The Power of Habit</b>, by Charles Duhigg
        </li>
        <li>
          <b>The 7 Habits of Highly Effective People</b>, by Stephen Covey
        </li>
      </ul>
    </section>
  );
}
