import { RefObject } from 'react';
export declare const useDragToScroll: ({ ref, disabled }: {
    ref: RefObject<HTMLDivElement>;
    disabled?: boolean | undefined;
}) => {
    isDragging: boolean;
    disable: () => void;
    enable: () => void;
};
