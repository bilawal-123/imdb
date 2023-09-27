import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandBehance,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandMailgun,
  TbPhone,
  TbBrandWhatsapp,
  TbLocationPin,
} from "react-icons/tb";
export default function Developer() {
  return (
    <div className="px-2 max-w-6xl mx-auto space-y-3">
      <h1 className="font-bold text-amber-500 text-2xl mt-6">
        About Developer
      </h1>
      <div className="text-center mx-auto space-y-2 border-b border-slate-500 ">
        <Image
          src="/muhammad-bilawal-sr.frontend-developer.jpg"
          alt="muhammad bilawal sr. frontend developer"
          width={60}
          height={60}
          className="rounded-full mx-auto"
        />
        <h1 className="font-bold text-2xl drop-shadow-lg shadow-gray-50">
          Muhammad Bilawal
        </h1>
        <p className="bg-amber-500 shadow-sm shadow-slate-400 inline-block text-white w-auto font-bold rounded-md py-1 px-5 translate-x-1">
          Sr. Frontend Developer
        </p>
        <ul className="flex justify-between flex-col md:flex-row space-y-2 md:space-y-0 md:pt-3 pt-4  bg-slate-400 bg-opacity-10 py-3 px-6 !mt-6">
          <li>
            <Link
              href={"https://www.linkedin.com/in/muhammad-bilawal-73641b102"}
              className="text-md flex items-center"
            >
              <TbBrandLinkedin />
              <span className="!text-sm">/ muhammad-bilawal </span>
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/bilawal-123"}
              className="text-md flex items-center"
            >
              <TbBrandGithub /> <span className="!text-sm"> / bilawal-123</span>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.behance.net/bill_portfolio"}
              className="text-md flex items-center"
            >
              <TbBrandBehance />
              <span className="!text-sm"> / bill_portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com/bill_officials/"}
              className="text-md flex items-center"
            >
              <TbBrandInstagram />
              <span className="!text-sm"> / bill_officials/</span>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.facebook.com/bilawalkhan.bilu"}
              className="text-md flex items-center"
            >
              <TbBrandFacebook />
              <span className="!text-sm"> / bilawalkhan.bilu</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="!mt-8">
        <h4 className="text-amber-500 font-bold uppercase mb-3">
          Work Technologies
        </h4>
        <ul className="bg-slate-400 bg-opacity-10 py-6 px-6">
          <li>React, Next Js</li>
          <li>Angular</li>
          <li>.Net, MVC</li>
          <li>Php, Code Igniter, Laravel</li>
          <li>Wirdoress</li>
          <li>Dev Extreme</li>
          <li>Wireframing, Psd Designing</li>
        </ul>
      </div>
      <div className="!mt-8">
        <h4 className="text-amber-500 font-bold uppercase mb-3">
          Skills Summary
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-400 bg-opacity-10 py-6 px-6">
          <li>HTML5</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Kube</li>
          <li>Foundation</li>
          <li>SCSS</li>
          <li>Less</li>
          <li>jQuery</li>
          <li>JavaScript</li>
          <li>Angular</li>
          <li>React</li>
          <li>Next Js</li>
          <li>Dev Extreme</li>
          <li>Responsive web design</li>
          <li>Transition & Animations</li>
          <li>PDF Design</li>
          <li>Email Template Design</li>
          <li>Invoices Template Design</li>
          <li>PSD to HTML CSS</li>
          <li>W3C Validatoin</li>
          <li>Cross Browser Compatibility</li>
          <li>WordPress</li>
          <li>PSD to WordPress</li>
          <li>Wordpress theme customization</li>
          <li>Adobe Photoshop</li>
          <li>Adobe XD</li>
          <li>PSD Designing</li>
          <li>Figma</li>
          <li>Wireframing</li>
          <li>Mobile Apps Design</li>
          <li>SEO</li>
          <li>Codeigniter</li>
          <li>Grunt</li>
          <li>Bower</li>
          <li>Git</li>
          <li>SVN</li>
          <li>APIs</li>
          <li>Front-End Development</li>
          <li>User Interface (UI)</li>
          <li>Problem Solving</li>
        </ul>
      </div>
      <div className="!mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-amber-500 font-bold uppercase mb-3">
            Permanant Info
          </h4>
          <ul className="space-y-2 md:space-y-1 bg-slate-400 bg-opacity-10 py-6 px-6">
            <li>
              <a
                href="mailto:bilawal.officials@gmail.com"
                className="flex items-center gap-1"
              >
                <TbBrandMailgun />
                <span>bilawal.officials@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-1">
              <TbPhone />
              <span>+92 335 668 2692</span>
            </li>
            <li className="flex items-center gap-1">
              <TbBrandWhatsapp />
              <span>+92 335 668 2692</span>
            </li>
            <li className="flex items-center gap-1">
              <TbLocationPin />
              <span>E-127 Cavalry Ground Lahore</span>
            </li>
          </ul>
        </div>

        <div className="mt-5 md:mt-0 ">
          <h4 className="text-amber-500 font-bold uppercase mb-3">
            Current Info
          </h4>
          <ul className="space-y-2 md:space-y-1 bg-slate-400 bg-opacity-10 py-6 px-6">
            <li>
              <a
                href="mailto:bilawal.officials@gmail.com"
                className="flex items-center gap-1"
              >
                <TbBrandMailgun />
                <span>bilawal.officials@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-1">
              <TbBrandWhatsapp />
              <span>+971 55 343 9919</span>
            </li>
            <li className="flex items-center  gap-1">
              <TbLocationPin />
              <span>
                213 Masaar Residence Jumeirah, Dubai, United Arab Emirates
              </span>
            </li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
