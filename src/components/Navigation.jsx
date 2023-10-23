"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "@/data/nav";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 h-15 p-0 flex px-3 py-0 font-playfair bg-gradient-to-r from-hiss-blue to-hiss-purple justify-between items-center backdrop-blur-md"
    >
      <Navbar.Brand className="p-0">
        <Link
          className="p-0 no-underline flex items-center gap-2"
          href={{
            pathname: "/",
          }}
        >
          <div className="flex flex-col items-start">
            <div className="px-1 text-white text-3xl font-bold">HISS</div>
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-s"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className=" text-hiss-yellow text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center justify-center">
        <Nav className="mb-2 w-2/7 no-underline text-2xl flex items-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              pathname={item.name}
              className={`hover:cursor-pointer mt-2 py-1 px-3 !text-white !font-small whitespace-nowrap relative group duration-300 `}
            >
              {item.name}
              <span className="absolute bottom-0 left-8 rounded-full h-1 bg-hiss-yellow transition-all transform origin-left group-hover:w-8"></span>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <Nav.Link
        href="/join"
        as={Link}
        className="mt-0 py-1 px-3 !text-white !text-2xl !font-bold"
      >
        JOIN
      </Nav.Link>
    </Navbar>
  );
};

export default Navigation;
