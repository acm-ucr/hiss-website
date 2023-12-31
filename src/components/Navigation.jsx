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
      className="w-full m-0 md:h-[8vh] p-0 flex px-3 py-0 bg-gradient-to-r from-hiss-blue to-hiss-purple justify-between items-center backdrop-blur-md"
    >
      <Navbar.Brand className="p-0">
        <Link className="p-0 no-underline flex items-center gap-2" href="/">
          <div className="flex flex-col items-start">
            <div className="px-0 py-3 text-white text-3xl font-bold">HiSS</div>
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-1 mr-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-hiss-yellow text-2xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center justify-end">
        <Nav className="mb-2 w-2/7 no-underline text-2xl flex items-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              pathname={item.name}
              className="hover:cursor-pointer mt-3 py-1 px-3 !text-white whitespace-nowrap relative group duration-300"
            >
              {item.name}
              <div className="flex flex-col items-center">
                <span className="h-1 rounded-full bg-hiss-yellow transition-all transform origin-left group-hover:w-8"></span>
              </div>
            </Nav.Link>
          ))}
          <Nav.Link
            href="https://discord.gg/NrsJjtAQAE"
            as={Link}
            target="_blank"
            className="hover:cursor-pointer mt-3 py-1 px-3 !font-bold !text-white whitespace-nowrap relative group duration-300"
          >
            JOIN
            <div className="flex flex-col items-center">
              <span className="h-1 rounded-full bg-hiss-yellow transform origin-left hover:w-8"></span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
