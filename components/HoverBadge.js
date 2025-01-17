import {Badge} from "@heroui/badge";
import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";
import { useState } from "react";
import {Button, ButtonGroup} from "@heroui/button";

export default function HoverBadge(props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return(
        
        <Badge color="danger" content="5" placement="top-right">
            <Button isIconOnly aria-label="Account" radius="full" variant="light" size="lg">
                <Avatar isBordered radius="full" size="md" src={props.src} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </Button>
        </Badge>
    )
}