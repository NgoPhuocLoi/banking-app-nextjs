"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            className="size-[24px] max-xl:size-14"
            alt="Logo"
            src={"/icons/logo.svg"}
            width={34}
            height={34}
          />

          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(link.route + "/");

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  alt="Link icon"
                  src={link.imgURL}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "important !text-white": isActive,
                })}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
