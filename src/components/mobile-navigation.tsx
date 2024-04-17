"use client";
import Link from "next/link";
import { useState } from "react";
import { MobileNavIcon } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent } from "./ui/sheet";

// export default function MobileNavigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <Button
//         aria-label="Open Navigation"
//         variant="ghost"
//         onClick={() => setIsOpen(true)}
//       >
//         <MobileNavIcon />
//       </Button>

//       <SheetContent className="overflow-y-auto">
//         <NavigationMenu className="block max-w-none space-y-4">
//           <NavigationMenuList className="flex-col items-start mt-8 w-full space-x-0 space-y-1">
//             {navLinks.map((link) => (
//               <NavigationMenuItem
//                 key={link.id}
//                 className="block w-full"
//                 // onClick={() => setIsOpen(false)}
//               >
//                 {link?.submenus.length > 0 ? (
//                   <Accordion type="multiple">
//                     <AccordionItem
//                       value={`item-${link.id}`}
//                       className="border-none"
//                     >
//                       <AccordionTrigger className="py-3 px-4 rounded-lg hover:bg-gray-50">
//                         {link.label}
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         {link.submenus.length > 0 ? (
//                           <Accordion type="multiple" className="ml-4">
//                             {link.submenus.map((l) => (
//                               <>
//                                 {l.submenus.length > 0 ? (
//                                   <AccordionItem
//                                     key={l.id}
//                                     value={`item-${l.id}`}
//                                     className="border-none"
//                                   >
//                                     <AccordionTrigger className="p-3 rounded-lg hover:bg-gray-50 text-base">
//                                       {l.label}
//                                     </AccordionTrigger>
//                                     <AccordionContent>
//                                       {l.submenus.map((s) => (
//                                         <NavLink
//                                           key={s.id}
//                                           href={s.href}
//                                           label={s.label}
//                                           className="ml-2 p4"
//                                         />
//                                       ))}
//                                     </AccordionContent>
//                                   </AccordionItem>
//                                 ) : (
//                                   <NavLink
//                                     href={l.href}
//                                     label={l.label}
//                                     className="ml-0 p4"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </Accordion>
//                         ) : (
//                           <NavLink href={link.href} label={link.label} />
//                         )}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 ) : (
//                   <NavLink href={link.href} label={link.label} />
//                 )}
//               </NavigationMenuItem>
//             ))}
//             <li className="w-full">
//               <Link
//                 href="/contact"
//                 className={buttonVariants({ className: "mt-4 w-full" })}
//               >
//                 Contact
//               </Link>
//             </li>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </SheetContent>
//     </Sheet>
//   );
// }

// function NavLink({
//   href,
//   label,
//   className = "",
// }: {
//   href: string;
//   label: string;
//   className?: string;
// }) {
//   return (
//     <Link href={href} legacyBehavior passHref className="w-full">
//       <NavigationMenuLink
//         className={navigationMenuTriggerStyle({
//           className: `!w-full !flex-start !p-4 text-base !justify-start ${className}`,
//         })}
//       >
//         {label}
//       </NavigationMenuLink>
//     </Link>
//   );
// }

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClose?: () => void;
}

interface SubmenuProps {
  id: number | string;
  label: string;
  href: string;
  submenus?: NavLinkProps[];
}

interface MobileNavigationProps {
  id: number | string;
  label: string;
  href: string;
  submenus?: (SubmenuProps | NavLinkProps)[];
}

function MobileNavigationItem({
  link,
  onClose,
}: {
  link: MobileNavigationProps;
  onClose?: () => void;
}) {
  if (link.submenus && link.submenus.length > 0) {
    return (
      <Accordion type="multiple">
        <AccordionItem value={`item-${link.id}`} className="border-none">
          <AccordionTrigger className="py-3 px-4 rounded-lg hover:bg-gray-50">
            {link.label}
          </AccordionTrigger>
          <AccordionContent>
            <Submenus
              submenus={link.submenus as SubmenuProps[]}
              onClose={onClose}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return <NavLink href={link.href} label={link.label} onClose={onClose} />;
}

function Submenus({
  submenus,
  onClose,
}: {
  submenus: SubmenuProps[];
  onClose?: () => void;
}) {
  return (
    <Accordion type="multiple" className="ml-4">
      {submenus.map((submenu) => (
        <Submenu key={submenu.id} submenu={submenu} onClose={onClose} />
      ))}
    </Accordion>
  );
}

function Submenu({
  submenu,
  onClose,
}: {
  submenu: SubmenuProps;
  onClose?: () => void;
}) {
  if (submenu.submenus && submenu.submenus.length > 0) {
    return (
      <AccordionItem
        key={submenu.id}
        value={`item-${submenu.id}`}
        className="border-none"
      >
        <AccordionTrigger className="p-3 rounded-lg hover:bg-gray-50 text-base">
          {submenu.label}
        </AccordionTrigger>
        <AccordionContent>
          <Submenus
            submenus={submenu.submenus as SubmenuProps[]}
            onClose={onClose}
          />
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <NavLink
      href={submenu.href}
      label={submenu.label}
      className="ml-0 p4"
      onClose={onClose}
    />
  );
}

const MobileNavigation: React.FC<{ navLinks: MobileNavigationProps[] }> = ({
  navLinks,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Open Navigation"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        <MobileNavIcon />
      </Button>

      <SheetContent className="overflow-y-auto">
        <NavigationMenu className="block max-w-none space-y-4">
          <NavigationMenuList className="flex-col items-start mt-8 w-full space-x-0 space-y-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id} className="block w-full">
                <MobileNavigationItem link={link} onClose={handleClose} />
              </NavigationMenuItem>
            ))}
            <li className="w-full">
              <Link
                href="/contact"
                className={buttonVariants({ className: "mt-4 w-full" })}
              >
                Contact
              </Link>
            </li>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className = "",
  onClose,
}) => {
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      legacyBehavior
      passHref
      className="w-full"
    >
      <NavigationMenuLink
        className={navigationMenuTriggerStyle({
          className: `!w-full !flex-start !p-4 text-base !justify-start ${className}`,
        })}
      >
        {label}
      </NavigationMenuLink>
    </Link>
  );
};

export default MobileNavigation;
