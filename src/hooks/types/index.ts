import { easingFunctions } from "../utils";

export interface Option {
    /** Use `window.scroll` instead */
    useNativeScroll?: boolean;
    /** Easing function */
    easing?: ((x: number) => number) | keyof typeof easingFunctions;
}

export interface Coordinate {
    x?: number;
    y?: number;
}

export type Target = HTMLElement | ScrollToOptions | number | null | undefined;
