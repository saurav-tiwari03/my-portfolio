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
import { IoMdChatbubbles } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



export type IconProps = React.HTMLAttributes<SVGElement>;

export function MyDock() {
  return (
    <div className="relative">
      <Dock direction="middle">
        {/*Home */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href='#'>
                  <GoHome className="text-3xl hover:text-4xl duration-200"/>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>

        {/*Blog */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href='/blogs'>
                  <FaSquarePen className="text-2xl hover:text-3xl duration-200"  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Blog</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>

        {/*Login */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href='/login'>
                  <FaUserAlt className="text-2xl hover:text-3xl duration-200" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <Separator orientation="vertical" />

        {/*Github */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href='https://github.com/saurav-tiwari03' target="_blank">
                  <IoLogoGithub className="text-2xl hover:text-3xl duration-200" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>

        {/*Twitter */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href='https://x.com/intent/follow?screen_name=Sauravdottsx' target="_blank">
                  <FaXTwitter className="text-2xl hover:text-3xl duration-200" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>X</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <Separator orientation="vertical" />

        {/*THeme */}
        <DockIcon>
          <ModeToggle />

        </DockIcon>

        {/*Chat */}
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href='/chat'>
                  <IoMdChatbubbles className="text-2xl hover:text-3xl duration-200" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
      </Dock>
    </div>
  );
}

