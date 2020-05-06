import * as React from 'react';
interface CarouselProps {
    direction: 'horizontal' | 'vertical';
    disableScroll?: boolean;
    width?: string;
    height?: string;
    scrollPadding?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    hideScrollbar?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare const SnapList: React.ForwardRefExoticComponent<CarouselProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export declare const SnapItem: React.FC<{
    margin?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    width?: string;
    height?: string;
    snapAlign: 'start' | 'center' | 'end' | 'none';
    forceStop?: boolean;
    className?: string;
}>;
export {};
