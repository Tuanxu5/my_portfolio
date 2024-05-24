"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import style from "./index.module.scss";

export default function CursorComponent() {
  const cursorBig = useRef<HTMLDivElement>(null);
  const cursorSmall = useRef<HTMLDivElement>(null);
  const withHover = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    withHover.current = document.querySelectorAll("a, .cursor-hover");

    function onMouseMove(e: MouseEvent) {
      if (cursorSmall.current) cursorSmall.current.style.opacity = "1";
      gsap.to(cursorBig.current, 0.4, {
        x: e.clientX - 18,
        y: e.clientY - 18,
      });
      gsap.to(cursorSmall.current, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    }

    function onMouseHover() {
      if (cursorBig.current) gsap.to(cursorBig.current, 0.3, { scale: 3 });
    }

    function onMouseHoverOut() {
      if (cursorBig.current) gsap.to(cursorBig.current, 0.3, { scale: 1 });
    }

    // Event Listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);
    document.addEventListener("mouseenter", () => {
      if (cursorBig.current) cursorBig.current.style.opacity = "1";
      if (cursorSmall.current) cursorSmall.current.style.opacity = "1";
    });
    document.addEventListener("mouseleave", () => {
      if (cursorBig.current) cursorBig.current.style.opacity = "0";
      if (cursorSmall.current) cursorSmall.current.style.opacity = "0";
    });
    withHover.current?.forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseHover);
      document.removeEventListener("mouseup", onMouseHoverOut);
      document.removeEventListener("mouseenter", () => {
        if (cursorBig.current) cursorBig.current.style.opacity = "1";
        if (cursorSmall.current) cursorSmall.current.style.opacity = "1";
      });
      document.removeEventListener("mouseleave", () => {
        if (cursorBig.current) cursorBig.current.style.opacity = "0";
        if (cursorSmall.current) {
          cursorSmall.current.style.opacity = "0";
        }
      });
      withHover.current?.forEach((element) => {
        element.removeEventListener("mouseover", onMouseHover);
        element.removeEventListener("mouseout", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <section className="custom-cursor">
      <div ref={cursorBig} className={style.custom_cursor__ball} />
      <div ref={cursorSmall} className={`${style.custom_cursor__ball} ${style.custom_cursor__ball___small}`} />
    </section>
  );
}
