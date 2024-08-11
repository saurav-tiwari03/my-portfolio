import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { GoHome } from "react-icons/go";
import { FaSquarePen } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ThemeChanger";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function MyDock() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <Link href='/'>
            <GoHome className="text-3xl hover:text-4xl duration-200"/>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href='/blogs'>
            <FaSquarePen className="text-2xl hover:text-3xl duration-200"  />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href='/login'>
            <FaUserAlt className="text-2xl hover:text-3xl duration-200" />
          </Link>
        </DockIcon>
        <Separator orientation="vertical" />
        <DockIcon>
          <a href='https://github.com/saurav-tiwari03' target="_blank">
            <IoLogoGithub className="text-2xl hover:text-3xl duration-200" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href='https://x.com/intent/follow?screen_name=Sauravdottsx' target="_blank">
            <FaXTwitter className="text-2xl hover:text-3xl duration-200" />
          </a>
        </DockIcon>
        <Separator orientation="vertical" />
        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}

