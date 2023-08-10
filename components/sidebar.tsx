"use client";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'

const Sidebar = () => {

    const pathname=usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-600",
      },
      {
        label: "Image generation",
        icon:ImageIcon,
        href: "/image",
        color: "text-pink-700",
      },
      {
        label: "Video generation",
        icon:VideoIcon,
        href: "/video",
        color: "text-orange-700",
      },
      {
        label: "Music generation",
        icon:Music,
        href: "/music",
        color: "text-emerald-700",
      },
      {
        label: "Code generation",
        icon:Code,
        href: "/code",
        color: "text-green-700",
      },
      {
        label: "Settings",
        icon:Settings,
        href: "/settings",
      },
      
  ];
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold ">Maestro</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",pathname===route.href?'text-white bg-white/10':'text-gray-400')}
              >
                <div className="flex item-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
