export const easingFunctions = {
    linear(x: number) {
        return x;
    },
    easeInSine(x: number) {
        return 1 - Math.cos((x * Math.PI) / 2);
    },
    easeInCubic(x: number) {
        return x * x * x;
    },
    easeInQuint(x: number) {
        return 1 - x * x * x * x * x;
    },
    easeInCirc(x: number) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    },
    easeOutSine(x: number) {
        return Math.sin((x * Math.PI) / 2);
    },
    easeOutCubic(x: number) {
        return 1 - Math.pow(1 - x, 3);
    },
    easeOutQuint(x: number) {
        return 1 - Math.pow(1 - x, 5);
    },
    easeOutCirc(x: number) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    },
    easeInOutSine(x: number) {
        return (Math.cos(Math.PI * x) - 1) / 2;
    },
    easeInOutCubic(x: number) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    },
    easeInOutQuint(x: number) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    },
    easeInOutCirc(x: number) {
        return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    },
};
