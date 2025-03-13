import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import LandingLayout from "../layouts/landing";
import Segment from "@/components/segment";
import { Button, ButtonGroup, Link, Image } from "@heroui/react";
import Background3D from "@/components/background3D";
import HomeCard from "@/components/homeCard";
import EmblaCarousel from "@/components/EmblaCarousel";
import { useState } from "react";
import NextImage from "next/image";
import HalfPicture from "@/components/halfpicture";

export default function IndexPage() {
  const [selected, setSelected] = useState("Courses");
  const OPTIONS = { dragFree: false, loop: true, align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <LandingLayout>
      <div className="h-[calc(100vh-4rem)] relative">
        <Background3D />
        <div
          id="TitleOverlay"
          className="h-full absolute w-full inset-0 pointer-events-none flex justify-center text-white"
        >
          <div id="TitleHolder" className="content-center max-w-7xl m-8 gap-4">
            <h1
              id="Title"
              aria-label="Title"
              className="text-5xl uppercase font-bold text-pretty sm:text-8xl"
            >
              Your gateway to Material Mastery
            </h1>
            <p
              id="Subtitle"
              role="doc-subtitle"
              aria-label="Subtitle"
              className="text-2xl mt-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              color="secondary"
              size="lg"
              radius="full"
              variant="shadow"
              className="pointer-events-auto mt-6 uppercase font-bold mr-6"
            >
              Explore
            </Button>
            <Button
              color="secondary"
              size="lg"
              radius="full"
              variant="ghost"
              className="pointer-events-auto mt-6 uppercase font-bold text-white"
            >
              Courses
            </Button>
          </div>
        </div>
      </div>
      <Segment useHeader={false} fullWidth>
        <div className="flex flex-row gap-8 mx-4 sm:mx-4">
          <div className="flex flex-col gap-8 justify-center content-center items-center basis-1/3 p-8">
            <div className="w-full">
              <Button
                color="secondary"
                size="lg"
                radius="full"
                variant={selected === "Courses" ? "shadow" : "ghost"}
                className={`pointer-events-auto mt-6 uppercase font-bold mr-6 w-xl border-2 ${selected === "Courses" ? "border-transparent" : "border-secondary"}`}
                onPress={() => setSelected("Courses")}
              >
                Courses
              </Button>
              <Button
                color="secondary"
                size="lg"
                radius="full"
                variant={selected === "Mentorship" ? "shadow" : "ghost"}
                className={`pointer-events-auto mt-6 uppercase font-bold text-white border-2 ${selected === "Mentorship" ? "border-transparent" : "border-secondary"}`}
                onPress={() => setSelected("Mentorship")}
              >
                Mentorship
              </Button>
            </div>
            {selected === "Courses" && (
              <div className="gap-8 w-full">
                <h3 className="text-4xl uppercase font-bold text-pretty sm:text-4xl mb-6">
                  Learn with our courses
                </h3>
                <div className="gap-8 w-full min-h-32">
                  <p className="text-l font-normal text-pretty mb-6">
                    Materials are vital for creating immersive game worlds. Our
                    courses will equip you with the skills to craft realistic
                    textures and surfaces. we cover everything from basic
                    techniques to advanced ones.
                  </p>
                  <Link
                    color="secondary"
                    href="/courses"
                    className="text-l uppercase font-bold text-secondary"
                  >
                    View All Courses
                  </Link>
                </div>
              </div>
            )}
            {selected === "Mentorship" && (
              <div className="gap-8 w-full">
                <h3 className="text-4xl uppercase font-bold text-pretty sm:text-4xl mb-6">
                  Learn with our Mentorships
                </h3>
                <div className="gap-8 w-full min-h-32">
                  <p className="text-l font-normal text-pretty mb-6">
                    Get clear guidance on what you need to enter your dream
                    studio and create breathtaking materials in 1 on 1 session
                    with a Specialized Professional.
                  </p>
                  <Link
                    color="secondary"
                    href="/mentorships"
                    className="text-l uppercase font-bold text-secondary"
                  >
                    View All Mentorships
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex-grow gap-8 mx-4 sm:mx-4 basis-1/2">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </Segment>
      {/* <Segment title="Section 1 Title" uppercase>
        <div className="flex flex-row flex-wrap gap-8 mx-4 sm:mx-4">
          <HomeCard title="Content" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth. Take a course or download a template"/>
          <HomeCard title="Community" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth."/>
          <HomeCard title="Coaching" desc="Take a course or download a template created by vetted experts and fast-track your business and creative growth."/>
        </div>
      </Segment> */}
      <Segment title="Section 1 Title" uppercase>
        <div className="flex flex-col flex-wrap gap-8 mx-4 sm:mx-4">
          <HalfPicture title = "Learn with our Mentorships" label = "Materials are vital for creating immersive game worlds. Our courses will equip you with the skills to craft realistic textures and surfaces. we cover everything from basic techniques to advanced ones." link = "/courses" linkLabel = "View all courses" imageSrc="https://heroui.com/images/album-cover.png" imageAlt="alt" />
          <HalfPicture title = "Learn with our Mentorships" label = "Materials are vital for creating immersive game worlds. Our courses will equip you with the skills to craft realistic textures and surfaces. we cover everything from basic techniques to advanced ones." link = "/courses" linkLabel = "View all courses" imageSrc="https://heroui.com/images/album-cover.png" imageAlt="alt" reversed/>
          <HalfPicture title = "Learn with our Mentorships" label = "Materials are vital for creating immersive game worlds. Our courses will equip you with the skills to craft realistic textures and surfaces. we cover everything from basic techniques to advanced ones." link = "/courses" linkLabel = "View all courses" imageSrc="https://heroui.com/images/album-cover.png" imageAlt="alt" />
        
        </div>
      </Segment>
    </LandingLayout>
  );
}
