import Head from 'next/head';
import { useState } from 'react';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web0 from '../public/web0.png';
import web1 from '../public/web1.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>My Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-8 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-5 px-16 mb-8 flex justify-between fixed top-0 left-0 right-0 bg-teal-600">
            <a href="#" className="text-xl font-burtons dark:text-white">
              JstCode.Hub
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li>
                <a href="#portofolio" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white   px-4 py-2 rounded-md ml-4 md:ml-8">
                  Portofolio
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 mt-10">
            <h2 className="text-5xl text-teal-600 font-medium md:text-6xl ">Moh. Angga Yunus</h2>
            <h3 className="text-2xl pt-4 md:text-3xl dark:text-white">Javascript Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Seorang manusia yang mencari nikmat duniawi agar bisa hidup bahagia</p>
          </div>
          <div>
            <ul className="text-5xl flex justify-center gap-4 md:gap-16 py-3 text-gray-600 dark:text-white">
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image src={deved} alt="Foto" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-5 dark:text-white">Ringkasan singkat tentangku</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Saya merupakan siswa lulusan SMK Krian 1 jurusan rekayasa lunak, menguasai beberapa teknologi pemograman antara lain: Javascript, PHP, CSS, dan Java
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Sekarang masih mencari free job dan sedang mencari universitas</p>
          </div>
          <div className="lg:flex gap-10 dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
              <Image src={design} alt="Design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Design Yang Indah</h3>
              <p className="py-2">Membuat sebuah design yang merepesentasikan tentang diri dan produk anda ke khalayak ramai</p>
              <h4 className="py-4 text-teal-600 dark:text-white font-medium">Beberapa tools yang saya gunakan</h4>
              <div className="text-gray-800 dark:text-white ">
                <p className="py-1">Photoshop</p>
                <p className="py-1">Illustrator</p>
                <p className="py-1">Figma</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
              <Image src={code} alt="Code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Kodingan Yang Elegant</h3>
              <p className="py-2">Menulis program yang elegant, rapih, dan mudah di baca serta teknologi yang up to date</p>
              <h4 className="py-4 text-teal-600 dark:text-white font-medium">Beberapa tools yang saya gunakan</h4>
              <div className="text-gray-800 dark:text-white">
                <p className="py-1">Visual Studio Code</p>
                <p className="py-1">Android Studio</p>
                <p className="py-1">Visual Studio</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
              <Image src={consulting} alt="Consulting" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Konsultasi</h3>
              <p className="py-2">Membantu memecahkan masalah yang sedang kalian hadapi di perjalan karir anda</p>
              <h4 className="py-4 text-teal-600 dark:text-white font-medium">Beberapa tools yang saya gunakan</h4>
              <div className="text-gray-800 dark:text-white">
                <p className="py-1">Google Meet</p>
                <p className="py-1">Zoom Meet</p>
                <p className="py-1">Notion</p>
              </div>
            </div>
          </div>
        </section>
        <section id="portofolio" className="pt-20">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Kumpulan Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Kumpulan beberapa portofolio maupun tugas yang pernah saya buat</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Beberapa portofolio ini saya buat dengan dengan tujuan unutuk memperlihatkan seberapa jauh pengalaman ataupun keahlian yang sudah saya capai
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white">
            <div className="basis-1/3 flex-1 rounded-2xl p-3 shadow-2xl dark:bg-gray-600">
              <a href="https://axifiveth.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image src={web0} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
              </a>
              <p className="my-3 p-3">
                Ini merupakan sebuah tugas saya untuk tugas akhir sekolah. Ini merupakan aplikasi chatting bersama untuk membantu kalian mencari teman baru. Teknologi yang saya gunakan meliputi Next.js dan
                Firebase dengan sistem auth google di dalamnya. Anda dapat mengunjungi halaman tersebut di link berikut ini :{' '}
                <a href="https://axifiveth.vercel.app/" target="_blank" rel="noopener noreferrer" className="">
                  https://axifiveth.vercel.app
                </a>
              </p>
            </div>
            <div className="basis-1/3 flex-1 rounded-2xl p-3 shadow-2xl dark:bg-gray-600">
              <a href="https://clone-netflix-jstcode-hub.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image src={web1} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout={'responsive'} />
              </a>
              <p className="my-3 p-3">
                Saya membuat web ini untuk melatih seberapa jauh keahlian saya, dan saya memilih netflix sebagai bahan untuk latihan. Meskipun banyak kekurangan saya akan terus melatih kemampuan saya. Anda
                dapat mengunjungi halaman tersebut di link berikut ini :{' '}
                <a href="https://clone-netflix-jstcode-hub.vercel.app/" target="_blank" rel="noopener noreferrer">
                  https://clone-netflix-jstcode-hub.vercel.app/
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
