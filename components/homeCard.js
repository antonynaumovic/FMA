import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function HomeCard({title="title", desc="description", imgSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4", imgWidth=80, children}) {
  return (
    <Card className="shrink grow w-1/2 sm:w-1/4" radius="lg">
      <CardHeader className="flex flex-col">
        <Image
        alt={`${title}-logo`}
          height={imgWidth}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={imgWidth}
        />
      </CardHeader>
      <CardBody className="flex gap-4 flex-col text-center">
        <div className="flex flex-col">
            <h3 className="text-md text-4xl font-semibold uppercase text-secondary">{title}</h3>
          </div>
        <p className="text-center mb-2">{desc}</p>
        {children}
      </CardBody>
    </Card>
  );
}