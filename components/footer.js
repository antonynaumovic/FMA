import {
  Divider,
  Link,
  Listbox,
  ListboxSection,
  ListboxItem,
} from "@heroui/react";
import { siteConfig } from "@/config/site";
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
    YoutubeIcon
  } from "@/components/icons";
  

export function FooterLink({href="", external=false, children}){
    return(
        <Link href={href} className="text-default-500" isExternal={external} showAnchorIcon={external}>{children}</Link>
    );
}

export function FooterSection({title="title", children}){
    return(
        <div className="flex flex-col grow gap-1">
        <h4 className="text-xl uppercase font-bold text-pretty">{title}</h4>
        {children}</div>
    );
}

export default function Footer({ children }) {
  return (
    <footer className="w-full flex items-center justify-center py-3 flex-col">
    <div className="max-w-6xl flex flex-row gap-16 grow w-full">
      <h3 className="text-4xl uppercase font-bold text-pretty sm:text-4xl mb-6">
        FMA Extras
      </h3>
      </div>
      <div className="max-w-6xl flex flex-row gap-16 mb-12 grow w-full">
      
        <FooterSection title="Courses">
            <FooterLink href="">Courses</FooterLink>
            <FooterLink href="">Mentorships</FooterLink>
            <FooterLink href={siteConfig.links.PatreonIcon}>Patreon</FooterLink>
        </FooterSection>
        <FooterSection title="Support">
            <FooterLink href="/help">Help Center</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/tos">Terms Of Service</FooterLink>
        </FooterSection>
        <FooterSection title="Resources">
            <FooterLink external href="">Library</FooterLink>
            <FooterLink external href="">Free Learning</FooterLink>
        </FooterSection>
        <FooterSection title="Community">
            <FooterLink external href={siteConfig.links.discord}>Discord</FooterLink>
            <FooterLink external href={siteConfig.links.twitter}>Twitter</FooterLink>
            <FooterLink external href={siteConfig.links.instagram}>Instagram</FooterLink>
            <FooterLink external href={siteConfig.links.youtube}>YouTube</FooterLink>
        </FooterSection>
      </div>

      <div className="max-w-6xl flex flex-row gap-4 mb-12 grow w-full justify-center">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" size={32}/>
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" size={32}/>
          </Link>
          <Link isExternal href={siteConfig.links.instagram} title="Instagram">
            <InstagramIcon className="text-default-500" size={32}/>
          </Link>
          <Link isExternal href={siteConfig.links.patreon} title="Patreon">
            <PatreonIcon className="text-default-500" size={32}/>
          </Link>
          <Link isExternal href={siteConfig.links.youtube} title="YouTube">
            <YoutubeIcon className="text-default-500" size={32}/>
          </Link>
      </div>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href=""
        title=""
      >
        <span className="text-default-600">© {new Date().getFullYear()}&nbsp;</span>
        <p className="text-primary">Future Material Artists</p>
      </Link>
    </footer>
  );
}
