import React from "react";
import { cn } from "shared/utils";
import * as style from "./Header.module.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    return (
        <div className={cn(style.header, {}, [className])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
        </div>
    );
};
