import { Button, ButtonGroup, Link, Image } from "@heroui/react";
import { useState } from "react";

export default function HalfPicture({ title = "Learn with our Mentorships", label = "Materials are vital for creating immersive game worlds. Our courses will equip you with the skills to craft realistic textures and surfaces. we cover everything from basic techniques to advanced ones.", link = "/courses", linkLabel = "View all courses", imageSrc="https://heroui.com/images/album-cover.png", imageAlt="alt", reversed=false, children }) {
  return (
    <div className="grid grid-cols-2 grid-rows-1" >
      <div className={`row-span-1 p-8 ${reversed ? "order-last" : ""}`}>
        <Image
          isBlurred
          alt={imageAlt}
          src={imageSrc}
          width={"100%"}
          className=""
        />
      </div>

      <div className="gap-8 w-full row-span-1 p-8 self-center">
        <h3 className="text-4xl uppercase font-bold text-pretty sm:text-4xl mb-6">
          {title}
        </h3>
        <div className="gap-8 w-full min-h-32">
          <p className="text-l font-normal text-pretty mb-6">
            {label}
          </p>
          <Link
            color="secondary"
            href={link}
            className="text-l uppercase font-bold text-secondary"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
