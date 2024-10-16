import React from "react";
import { cn } from "shared/utils";
import * as style from "./ToggleLang.module.scss";
import { useTranslation } from "react-i18next";

interface ToggleLangProps {
    className?: string;
}
export const ToggleLang = (props: ToggleLangProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <button className={cn(style.ToggleLang, {}, [className])} onClick={toggleLang}>
            {i18n.language === "ru" ? "RU" : "EN"}
        </button>
    );
};
