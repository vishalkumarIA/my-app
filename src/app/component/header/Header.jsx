"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "./logo.png";
import NavItem from "./NavItem";
import "./header.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../fancybox";
import SignUpForm from "../FormComp/FormComp";

export default function MyHeader() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="headerWrapp">
      <header>
        <div className="headerWrapp">
          <div className="logoWrapp">
            <Link href="/">
              <Image src={logoImg} alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul className="navLink">
              <NavItem
                href="/"
                index={0}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Home
              </NavItem>
              <NavItem
                href="#"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                About
              </NavItem>
              <NavItem
                href="#"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Facility
              </NavItem>
              <NavItem
                href="#"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Community
              </NavItem>
            </ul>
          </nav>
          <div className="joinWrapp">
            <Fancybox>
              <a data-fancybox href="#lightbox-content">
                Join Now
              </a>
            </Fancybox>
          </div>
        </div>
      </header>

      <div id="lightbox-content" style={{ display: "none" }}>
        <SignUpForm />
      </div>
    </div>
  );
}
