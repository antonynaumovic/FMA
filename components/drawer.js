import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Badge } from "@heroui/badge";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { useState } from "react";
import { Button, ButtonGroup } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { Input, Checkbox, Link, NavbarMenuToggle } from "@heroui/react";
import { Divide as Hamburger } from "hamburger-react";

export default function MainDrawer(props) {
  const [backdrop, setBackdrop] = useState("opaque");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={handleOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        size={24}
      />
      <Drawer backdrop={backdrop} isOpen={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Log in
              </DrawerHeader>
              <DrawerBody>
                <Input
                  endContent={<></>}
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={<></>}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
