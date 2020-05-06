import { RefObject } from 'react';
export declare const getVisibleChildren: ($viewport?: HTMLDivElement | null | undefined) => {
    children: number[];
    childrenInCenter: number | null;
};
export declare const useVisibleElements: <T>({ debounce, ref, }: {
    ref: RefObject<HTMLDivElement>;
    debounce?: number | undefined;
}, selector: (elements: number[], childrenInCenter: number | null) => T) => T;
