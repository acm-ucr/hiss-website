"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "@/data/nav";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 h-15 p-0 flex px-3 py-0 font-playfair bg-gradient-to-r from-hiss-blue to-hiss-purple justify-between items-center backdrop-blur-md"
    >
      <Navbar.Brand className="p-0">
        <Link
          onClick={() => setSelected("")}
          eventkey="1"
          className="p-0 no-underline flex items-center gap-2"
          href="/"
        >
          <div className="flex flex-col items-start">
            <div className="text-white text-3xl font-bold">HISS</div>
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
        <Nav className="mb-2 w-2/6 no-underline text-2xl flex items-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => setSelected(item.name)}
              className={`hover:cursor-pointer mt-2 py-1 px-3 !text-white !font-small whitespace-nowrap 
              hover:!underline !decoration-hiss-yellow !decoration-4 !underline-offset-8 duration-300${
                selected === item.name && "!bg-white/10"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
          <Nav.Link
            href="/join"
            as={Link}
            className="mt-2 py-1 px-3 !text-white !text-2xl !font-bold absolute right-6 "
          >
            JOIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
