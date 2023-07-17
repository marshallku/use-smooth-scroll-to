# use-smooth-scroll-to

React hook for smooth scrolling

[![License](https://img.shields.io/npm/l/use-smooth-scroll-to.svg)](https://www.npmjs.com/package/use-smooth-scroll-to)
[![NPM Version](https://img.shields.io/npm/v/use-smooth-scroll-to.svg)](https://www.npmjs.com/package/use-smooth-scroll-to)
[![Known Vulnerabilities](https://snyk.io/test/github/marshallku/react-postscribe/badge.svg)](https://snyk.io/test/github/marshallku/use-smooth-scroll-to)
[![NPM Downloads](https://img.shields.io/npm/dm/use-smooth-scroll-to.svg)](https://www.npmjs.com/package/use-smooth-scroll-to)

## Install

```bash
# npm
npm i use-smooth-scroll-to
# yarn
yarn add use-smooth-scroll-to
# pnpm
pnpm i use-smooth-scroll-to
```

## Usage

```tsx
import { useRef } from "react";
import { useScroll } from "use-smooth-scroll-to";

function App() {
    const { scroll } = useScroll({ easing: "easeInCirc" });
    const divRef = useRef(null);

    return (
        <div>
            <button
                onClick={() => {
                    scroll(divRef.current);
                }}
            >
                Go to hello world
            </button>
            <div style={{ height: "100vh" }} />
            <div ref={divRef}>HELLO WORLD</div>
            <button
                onClick={() => {
                    scroll(0);
                }}
            >
                Go to top
            </button>
        </div>
    );
}

export default App;
```

## Props

| Property        | Type                              | required | Description                                                      |
| --------------- | --------------------------------- | -------- | ---------------------------------------------------------------- |
| useNativeScroll | boolean                           | false    | Use `window.scrollTo` for scrolling                              |
| easing          | ((x: number) => number) \| string | false    | Your own easing function or name of implemented easing functions |

### List of easing functions

-   linear
-   easeInSine
-   easeInCubic
-   easeInQuint
-   easeInCirc
-   easeOutSine
-   easeOutCubic
-   easeOutQuint
-   easeOutCirc
-   easeInOutSine
-   easeInOutCubic
-   easeInOutQuint
-   easeInOutCirc
