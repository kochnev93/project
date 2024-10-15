import React from "react";
import { cn } from "shared/utils";
import * as style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ToggleTheme } from "widjets/ToggleTheme";

interface HeaderProps {
    className?: string;
}
export const Header = (props: HeaderProps) => {
    const { className } = props;
    return (
        <div className={cn(style.header, {}, [className])}>
            <ToggleTheme />
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
        </div>
    );
};
