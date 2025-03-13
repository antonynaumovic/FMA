import { Link } from "@heroui/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/components/Providers";
import { ParallaxBanner } from "react-scroll-parallax";
import { title } from "@/components/primitives";

export default function ContentLayout({
  text = "Text",
  imageSize = "h-[35vh]",
  children,
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <Providers>
        <ParallaxBanner
          layers={[
            { image: "https://heroui.com/images/album-cover.png", speed: -20 },
          ]}
          className={`w-screen min-h-[25vh] ${imageSize}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="inline-block max-w-lg text-center justify-center">
              <h1 className={`text-4xl drop-shadow-2xl uppercase font-bold text-pretty sm:text-6xl`}>{text}</h1>
            </div>
          </div>
        </ParallaxBanner>
      </Providers>
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
