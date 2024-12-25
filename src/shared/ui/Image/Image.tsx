import React, { useState } from 'react';
import { cn } from 'shared/utils';
import * as style from './Image.module.scss';

interface ImageProps {
    wrapperClassName?: string;
    imageClassName?: string;
    alt?: string;
    onClick?: () => void;
    src: string;
}

export const Image = (props: ImageProps): React.ReactElement => {
    const { wrapperClassName, imageClassName, alt = '', onClick, src } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleOnLoading = (): void => {
        setIsLoading(false);
    };

    const handleOnError = (): void => {
        setIsLoading(false);
        setIsError(true);
    };

    const getLoadingStatus = () => {
        if (isLoading) {
            return <span>Load</span>;
        }

        if (isError) {
            return <span>Error</span>;
        }

        return null;
    };

    return (
        <div className={cn(style.ImageContainer, {}, [wrapperClassName])}>
            {getLoadingStatus()}
            <img
                className={cn(style.Image, { [style.hidden]: isLoading || isError }, [imageClassName])}
                src={src}
                alt={alt}
                onError={handleOnError}
                onLoad={handleOnLoading}
                role="presentation"
                draggable="false"
            />
        </div>
    );
};
