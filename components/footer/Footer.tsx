import Link from "next/link";
import React from "react";
import Image from "next/image";
import LocalizationButton from "../buttons/LocalizationButton";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-zinc-800 p-6">
      <div className="flex flex-row text-gray-50 text-sm font-normal px-6">
        <div className="flex flex-col gap-2 w-72">
          <Link href="#">Udemy Business</Link>
          <Link href="#">Teach on Udemy</Link>
          <Link href="#">Get the app</Link>
          <Link href="#">About us</Link>
          <Link href="#">Contact us</Link>
        </div>
        <div className="flex flex-col gap-2 w-72">
          <Link href="#">Careers</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Help and Support</Link>
          <Link href="#">Affiliate</Link>
          <Link href="#">Investors</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Cookie settings</Link>
          <Link href="#">Sitemap</Link>
          <Link href="#">Accessibility Statement</Link>
        </div>
        <div className="flex-1"></div>
        <div>
          <LocalizationButton title="English" />
        </div>
      </div>
      <div className="flex flex-row px-6 mt-16 justify-between">
        <div>
          <Image
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="udemy logo"
            width={91}
            height={34}
          />
        </div>
        <div>
          <p className="text-gray-50 mt-2 font-medium text-xs">
            © 2024 Udemy, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
