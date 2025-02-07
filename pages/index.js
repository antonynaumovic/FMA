import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import LandingLayout from "../layouts/landing";
import Segment from "@/components/segment";
import {Button, ButtonGroup} from "@heroui/react";
import Background3D from "@/components/background3D";
import HomeCard from "@/components/homeCard";
import EmblaCarousel from '@/components/EmblaCarousel'

export default function IndexPage() {

  const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <LandingLayout>
      <div className="h-[calc(100vh-4rem)] relative">
        <Background3D />
        <div id="TitleOverlay" className="h-full absolute w-full inset-0 pointer-events-none flex justify-center text-white">
          <div id="TitleHolder" className="content-center max-w-7xl m-8 gap-4">
            <h1 id="Title" aria-label="Title" className="text-5xl uppercase font-bold text-pretty sm:text-8xl">Your gateway to Material Mastery</h1>
            <p id="Subtitle" role="doc-subtitle" aria-label="Subtitle" className="text-2xl mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button color="secondary" size="lg" radius="full" variant="shadow" className="pointer-events-auto mt-6 uppercase font-bold mr-6">
              Explore
            </Button>
            <Button color="secondary" size="lg" radius="full" variant="ghost" className="pointer-events-auto mt-6 uppercase font-bold text-white">
              Courses
            </Button>
          </div>
        </div>
      </div>
      <Segment title="Section 1 Title" uppercase>
        <div className="flex flex-row flex-wrap gap-8 mx-4 sm:mx-4">
          <HomeCard title="Content" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth. Take a course or download a template"/>
          <HomeCard title="Community" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth."/>
          <HomeCard title="Coaching" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth."/>
        </div>
      </Segment>
      <Segment>
      <div className=" flex flex-row flex-wrap gap-8 mx-4 sm:mx-4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      </Segment>
    </LandingLayout>
  );
}
