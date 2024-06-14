import { type FC } from "react";

import IconArrowDown from "./icon-arrow-down.svg";
import IconArrowCircle from "./icon-arrow-circle.svg";
import IconArrowRight from "./icon-arrow-right.svg";

export const icons = {
    arrowDown: IconArrowDown,
    arrowCircle: IconArrowCircle,
    arrowRight: IconArrowRight,
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
        />
    );
};
