import { useEffect, useRef } from "react";

const defaultEvents = ["mousedown", "touchstart"];

/**
 * A hook that allows to handle click events outside of the specified element.
 * @param {React.MutableRefObject<HTMLElement | null>} ref - The reference to the element that should be clicked outside.
 * @param {(event: any) => void} onClickAway - The callback function to be called when the click event occurs outside of the specified element.
 * @param {string[]} events - An array of event names to listen for.
 *  
 **/
export function useClickAway(ref, onClickAway, events = defaultEvents) {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      window.addEventListener(eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, handler);
      }
    };
  }, [events, ref]);
}
