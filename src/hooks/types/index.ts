export interface Option {
    /** Use `window.scroll` instead */
    useNativeScroll?: boolean;
}

export interface Coordinate {
    x?: number;
    y?: number;
}

export type Target = HTMLElement | ScrollToOptions | number | null | undefined;
