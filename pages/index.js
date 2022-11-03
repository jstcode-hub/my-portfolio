import Head from 'next/head';
import { useState } from 'react';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>My Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">DevelopmentByJstCode.Hub</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white   px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium md:text-6xl ">Moh. Angga Yunus</h2>
            <h3 className="text-2xl pt-4 md:text-3xl dark:text-white">Javascript Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Freelance providing service for programming and design content needs. Join me and let`s get cracking!
            </p>
          </div>
          <div>
            <ul className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <li>
                <a href="https://www.instagram.com/jstkidng_/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jsttalk_">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moh-angga-518701242/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/jstcode-hub">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="Foto" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-5 dark:text-white">Service I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of may journey as a freelance javascript developer, I`ve done remote work for agencies consultad for startup and collaborated with talented people to create digital products
              for both businnes and consumer user
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">I offer a wide range of service, including brand design, programming and teaching</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="Design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 text-teal-600 font-medium">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="Code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Elegant Code</h3>
              <p className="py-2">Programs must be written for people to read, and only incidentally for machines to execute.</p>
              <h4 className="py-4 text-teal-600 font-medium">Coding tools I use</h4>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Android Studio</p>
              <p className="text-gray-800 py-1">Visual Studio</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} alt="Consulting" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Consultant</h3>
              <p className="py-2">My greatest strenght as a consultant is to be ignorant and ask a few questions.</p>
              <h4 className="py-4 text-teal-600 font-medium">Consultant tools I use</h4>
              <p className="text-gray-800 py-1">Google Meet</p>
              <p className="text-gray-800 py-1">Zoom Meet</p>
              <p className="text-gray-800 py-1">Notion</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">My Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">These are some of the projects I`ve created</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">I offer a wide range of service, including brand design, programming and teaching</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
