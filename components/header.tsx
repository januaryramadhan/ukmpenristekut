"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const Header1 = () => {
  const navigationItems = [
    {
      title: "Beranda",
      href: "/",
      description: "",
    },
    {
      title: "Program Kerja",
      description: "Program kerja unggulan UKM PENRISTEK UT",
      items: [
        {
          title: "Pelatihan IT",
          href: "/pelatihan-it",
        },
        {
          title: "Webinar Teknologi",
          href: "/webinar",
        },
        {
          title: "Kompetisi IT",
          href: "/kompetisi",
        },
        {
          title: "Workshop",
          href: "/workshop",
        },
      ],
    },
    {
      title: "Tentang Kami",
      description: "Mengenal lebih dekat UKM PENRISTEK UT",
      items: [
        {
          title: "Profil",
          href: "/profil",
        },
        {
          title: "Visi & Misi",
          href: "/visi-misi",
        },
        {
          title: "Struktur Organisasi",
          href: "/struktur",
        },
        {
          title: "Kontak",
          href: "/kontak",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background px-4">
      <div className="container relative mx-auto min-h-16 md:min-h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <p className="font-semibold text-sm md:text-base">UKM PENRISTEK UT</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-primary">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-[280px] md:w-[450px] p-4">
                        <div className="flex flex-col gap-4">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            {item.items?.map((subItem) => (
                              <Link
                                href={subItem.href}
                                key={subItem.title}
                                className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                              >
                                <span className="text-sm">{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Informasi
            </Button>
            <div className="h-6 border-r border-border" />
            <ModeToggle />
            <Button size="sm">Daftar</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}

        <div className="lg:hidden">
          <ModeToggle />
          <Button variant="ghost" size="sm" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-border">
            <div className="container px-4 py-4 flex flex-col gap-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ) : (
                    <>
                      <p className="text-sm font-medium">{item.title}</p>
                      <div className="pl-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center justify-between py-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="text-sm text-muted-foreground">
                              {subItem.title}
                            </span>
                            <MoveRight className="w-4 h-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-2">
                <Button className="w-full" size="sm">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
