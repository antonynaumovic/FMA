import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/badge";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import HoverBadge from "@/components/HoverBadge";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Chip,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
} from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  ChevronDown,
  InstagramIcon,
  PatreonIcon,
  YoutubeIcon,
} from "@/components/icons";
import MainDrawer from "@/components/drawer";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["ctrl"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="full" shouldHideOnScroll className="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-0 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">FMA</p>
          </NextLink>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger className="hidden sm:flex md:hidden lg:hidden xl:hidden">
                <Button
                  className="flex gap-1 w-fit"
                  isIconOnly
                  variant="light"
                  disableRipple
                >
                  <ChevronDown size={16} />
                </Button>
              </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {siteConfig.navItems.map((item) => (
                <DropdownItem key={item.href} description={item.description}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-semibold font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-semibold font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram} title="Instagram">
            <InstagramIcon className="text-default-500"/>
          </Link>
          <Link isExternal href={siteConfig.links.patreon} title="Patreon">
            <PatreonIcon className="text-default-500"/>
          </Link>
          <Link isExternal href={siteConfig.links.youtube} title="YouTube">
            <YoutubeIcon className="text-default-500"/>
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden xl:flex">{searchInput}</NavbarItem>

        <Dropdown placement="bottom-end">
          <Badge color="danger" content="5" placement="top-right">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                name="Ezequiel Delaney"
                size="md"
                src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
              />
            </DropdownTrigger>
          </Badge>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue="Profile"
            >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">Ezequiel@FMA.com</p>
            </DropdownItem>
            <DropdownItem key="mentorship" textValue="Mentorship">
              Mentorship{" "}
              <Chip className="left-2" color="danger" size="sm">
                5
              </Chip>
            </DropdownItem>
            <DropdownItem key="courses" textValue="Courses">
              Courses{" "}
              <Chip className="left-2" color="danger" size="sm">
                2
              </Chip>
            </DropdownItem>
            <DropdownItem key="settings" textValue="Settings">
              Settings
            </DropdownItem>
            <DropdownItem key="help_and_feedback" textValue="Help">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger" textValue="Logout">
              <b>Log Out</b>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <MainDrawer></MainDrawer>
      </NavbarContent>
    </NextUINavbar>
  );
};
