import React, {
    JSXElementConstructor,
    PropsWithChildren,
    useEffect,
    useState,
  } from "react";
  
  interface Props {
    delay?: number;
    transitionDuration?: number;
    wrapperTag?: JSXElementConstructor<any>;
    childTag?: JSXElementConstructor<any>;
    className?: string;
    childClassName?: string;
    visible?: boolean;
    onComplete?: () => any;
  }
  
  export default function FadeIn(props: PropsWithChildren<Props>) {
    const [maxIsVisible, setMaxIsVisible] = useState(0);
    const transitionDuration = props.transitionDuration || 400;
    const delay = props.delay || 50;
    const WrapperTag = props.wrapperTag || "div";
    const ChildTag = props.childTag || "div";
    const visible = typeof props.visible === "undefined" ? true : props.visible;
  
    useEffect(() => {
      let count = React.Children.count(props.children);
      if (!visible) {
        // Animate all children out
        count = 0;
      }
  
      if (count === maxIsVisible) {
        // We're done updating maxVisible, notify when animation is done
        const timeout = setTimeout(() => {
          if (props.onComplete) props.onComplete();
        }, transitionDuration);
        return () => clearTimeout(timeout);
      }
  
      // Move maxIsVisible toward count
      const increment = count > maxIsVisible ? 1 : -1;
      const timeout = setTimeout(() => {
        setMaxIsVisible(maxIsVisible + increment);
      }, delay);
      return () => clearTimeout(timeout);
      // eslint-disable-next-line
    }, [
      // eslint-disable-next-line
      React.Children.count(props.children),
      delay,
      maxIsVisible,
      visible,
      transitionDuration,
    ]);
  
    return (
      <WrapperTag className={props.className}>
        {React.Children.map(props.children, (child, i) => {
          return (
            <ChildTag
              className={props.childClassName}
              style={{
                // Animate `top` instead of `transform`: a transformed ancestor breaks
                // `background-attachment: fixed`, causing the background to jump when the animation ends.
                position: "relative",
                transition: `opacity ${transitionDuration}ms, top ${transitionDuration}ms`,
                top: maxIsVisible > i ? 0 : 20,
                opacity: maxIsVisible > i ? 1 : 0,
              }}
            >
              {child}
            </ChildTag>
          );
        })}
      </WrapperTag>
    );
  }
  