import { Target } from "../types";

export const parseTarget = (target: NonNullable<Target>) => {
    if (typeof target === "number") {
        return { top: target, left: 0 };
    }

    if (target instanceof HTMLElement) {
        const { top, left } = target.getBoundingClientRect();

        return { top, left };
    }

    return target;
};
