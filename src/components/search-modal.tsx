"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { adminMenus } from "./dashboard-sidebar";
import { UsersIcon } from "./icons";
import { ScrollArea } from "./ui/scroll-area";

const menus = [
  ...adminMenus,
  {
    id: 22,
    label: "Create Job",
    href: "/dashboard/jobs/new",
    icon: <UsersIcon />,
  },
  {
    id: 23,
    label: "Create Article",
    href: "/dashboard/articles/new",
    icon: <UsersIcon />,
  },
  {
    id: 24,
    label: "Create Case Studies",
    href: "/dashboard/case-studies/new",
    icon: <UsersIcon />,
  },
  {
    id: 25,
    label: "Create Portfolio",
    href: "/dashboard/portfolios/new",
    icon: <UsersIcon />,
  },
  {
    id: 26,
    label: "Add Team Member",
    href: "/dashboard/teams/new",
    icon: <UsersIcon />,
  },
  {
    id: 27,
    label: "Add Faq",
    href: "/dashboard/faq/new",
    icon: <UsersIcon />,
  },
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<
    Array<{ label: string; href: string; icon: JSX.Element; id: number }>
  >(() => menus);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setSearch(menus);
      return;
    }

    const filteredAdminMenus = menus.filter(
      (menu) =>
        menu.label.toLowerCase().includes(event.target.value.toLowerCase()) ||
        menu.href.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(filteredAdminMenus);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-5 w-5 text-gray-500 "
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <div className="relative mt-4">
            <Input
              className="pl-11 text-base py-7 font-medium rounded-full"
              placeholder="Search"
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute h-5 w-5 text-gray-500 top-1/2 left-5 -translate-y-1/2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </DialogHeader>
        <ScrollArea className="h-[350px]">
          <ul className="space-y-2">
            {search.map((menu, i) => (
              <li key={i} className="py-2 px-4 hover:bg-gray-100 rounded-xl ">
                <Link
                  href={menu.href}
                  className="w-full "
                  onClick={() => setIsOpen(false)}
                >
                  <p className="text-base font-medium">{menu.label}</p>
                  <p className="text-sm text-gray-600">{menu.href}</p>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}