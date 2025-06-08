import { onMount } from "svelte";
import { writable } from "svelte/store";

export function useInView(threshold = 0.25) {
  const visible = writable(false);
  let observer;
  let el;

  const action = (node) => {
    el = node;

    onMount(() => {
      observer = new IntersectionObserver(([entry]) => {
        visible.set(entry.isIntersecting);
      }, { threshold });

      observer.observe(node);

      return () => observer.disconnect();
    });
  };

  return [visible, action];
}