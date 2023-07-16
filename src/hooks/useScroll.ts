import { useCallback } from "react";
import { Option, Target } from "./types";
import { easingFunctions, isClientSide, parseTarget } from "./utils";

const DEFAULT_DURATION = 500;

export default function useScroll({ useNativeScroll = false, easing = (x) => x }: Option = {}) {
    const scroll = useCallback(
        (target: Target, duration = DEFAULT_DURATION) => {
            if (target == null || !isClientSide()) {
                return;
            }

            const to = parseTarget(target);

            if (useNativeScroll) {
                window.scrollTo(to);
                return;
            }

            const { scrollY: fromTop, scrollX: fromLeft } = window;
            const easingFunction = typeof easing === "string" ? easingFunctions[easing] : easing;

            const animation = () => {
                const { top: toTop = 0, left: toLeft = 0 } = to;

                const now = (performance.now() - startTime) / duration;
                const progress = easingFunction(now);

                if (1 > now) {
                    window.requestAnimationFrame(animation);
                    window.scrollTo(fromLeft + (toLeft - fromLeft) * progress, fromTop + (toTop - fromTop) * progress);
                } else {
                    window.scrollTo(toLeft, toTop);
                }
            };

            const startTime = performance.now();
            animation();
        },
        [useNativeScroll],
    );

    return {
        scroll,
    };
}
