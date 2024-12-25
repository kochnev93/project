import styled from 'styled-components';
import { CSSProperties } from 'react';

type StackProps = {
    direction?: 'row' | 'column';
    gap?: number;
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    wrap?: CSSProperties['flexWrap'];
};

export const Stack = styled.div<StackProps>(
    ({ direction: flexDirection = 'row', wrap: flexWrap, align: alignItems, justify: justifyContent, gap = 0 }) => ({
        display: 'flex',
        flexDirection,
        flexWrap,
        alignItems,
        justifyContent,
        gap,
    }),
);
