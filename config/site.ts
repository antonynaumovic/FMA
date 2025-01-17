export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Future Materials Artists",
  description:
    "Future Materials Artists website, creating the next generation of artists",
  navItems: [
    {
      label: "Home",
      href: "/",
      description: "Home"
    },
    {
      label: "About",
      href: "/about",
      description: "About"
    },
    {
      label: "Mentorship",
      href: "/mentorship",
      description: "Home"
    },
    {
      label: "Courses",
      href: "/courses",
      description: "Home"
    },
    {
      label: "Community",
      href: "/community",
      description: "Home"
    },
    {
      label: "Tools",
      href: "/tools",
      description: "Home"
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/futurematerialartists",
    discord: "https://discord.gg/cGTNFBeupB",
  },
};
