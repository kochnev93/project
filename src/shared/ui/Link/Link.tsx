import React from "react";
import { cn } from "shared/utils";
import * as style from "./Link.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
}
export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { to, className, children, ...otherProps } = props;
    return (
        <Link to={to} className={cn(style.link, {}, [className])} {...otherProps}>
            {children}
        </Link>
    );
};
