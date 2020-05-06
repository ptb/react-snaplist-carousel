export declare const mergeStyles: (...classnames: (string | null | undefined)[]) => string;
export declare const mapStyles: ($item: HTMLElement) => {
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    snapAlign: string;
    scrollPaddingLeft: number;
    scrollPaddingRight: number;
    scrollPaddingTop: number;
    scrollPaddingBottom: number;
};
export declare const mapItem: ({ $item, viewport, }: {
    $item: HTMLElement;
    viewport: {
        offsetLeft: number;
        offsetTop: number;
    };
}) => {
    left: number;
    width: number;
    right: number;
    top: number;
    height: number;
    bottom: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    snapAlign: string;
};
export declare const isTouchDevice: () => boolean;
