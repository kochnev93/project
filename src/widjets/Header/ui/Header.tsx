import React from "react";
import { cn } from "shared/utils";
import * as style from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}
export const Header = (props: HeaderProps) => {
    const { className } = props;
    return <div className={cn(style.header, {}, [className])}></div>;
};
