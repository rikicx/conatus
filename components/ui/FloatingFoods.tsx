"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Nutrição card: small food illustrations pop out of the laptop the
 * nutritionist is using, then keep floating over the photo.
 *
 * Coordinates are in the photo's own pixels (960×1345). The layer is sized
 * and placed like the image under `object-cover` + `object-position:
 * center <focusY>%`, so each food stays on the same spot of the photo at
 * every card shape. Needs a size container (`container-type: size`) as the
 * positioned parent. Decorative only: hidden from assistive tech.
 */
const IMG_W = 960;
const IMG_H = 1345;
const ORIGIN = { x: 815, y: 865 }; // top edge of the laptop lid

type Food = {
  id: string;
  x: number; // centre, photo px
  y: number;
  size: number; // width as a fraction of the photo width
  rot: number; // resting tilt, deg
  bob: number; // float period, s
  art: ReactNode;
};

const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

// listed nearest-to-the-laptop first: that's the order they pop out
const foods: Food[] = [
  {
    id: "tomate",
    x: 735, y: 745, size: 0.095, rot: 0, bob: 3.6,
    art: (
      <Svg>
        <ellipse cx="32" cy="37" rx="21" ry="19" fill="#E9483B" />
        <path d="M13 41c2.5 9 10 15 19 15s16.5-6 19-15c-4.5 5-11 8-19 8s-14.5-3-19-8z" fill="#C6322A" opacity=".5" />
        <ellipse cx="22.5" cy="29" rx="5.5" ry="3.4" transform="rotate(-35 22.5 29)" fill="#fff" opacity=".55" />
        <path d="M32 20.5l-8.5-3.2 5 5.4-8 2.6 9.2.7-2.3 6.5 4.6-5.2 4.6 5.2-2.3-6.5 9.2-.7-8-2.6 5-5.4z" fill="#3E8B3A" />
        <path d="M32 21c-.2-4.5 1-8.2 3.6-10.5" stroke="#2E6B2C" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      </Svg>
    ),
  },
  {
    id: "abacate",
    x: 868, y: 690, size: 0.11, rot: 16, bob: 4.4,
    art: (
      <Svg>
        <path d="M32 6c-7 0-11 7-12.5 14C18 27 10 31 10 43c0 9.5 9.5 16 22 16s22-6.5 22-16c0-12-8-16-9.5-23C43 13 39 6 32 6z" fill="#3C6E2E" />
        <path d="M32 9.5c-5.4 0-8.7 5.8-10 11.7-1.3 6.4-8.5 10-8.5 21.4 0 7.8 8.2 13 18.5 13s18.5-5.2 18.5-13c0-11.4-7.2-15-8.5-21.4C40.7 15.3 37.4 9.5 32 9.5z" fill="#BFD86B" />
        <path d="M32 13c-4.2 0-6.8 4.8-7.8 9.7-1.1 5.4-7.4 9.4-7.4 19.4 0 6.6 7 10.9 15.2 10.9s15.2-4.3 15.2-10.9c0-10-6.3-14-7.4-19.4C38.8 17.8 36.2 13 32 13z" fill="#E3EEA2" />
        <circle cx="32" cy="41" r="8.5" fill="#8A5A32" />
        <circle cx="29.3" cy="38.3" r="2.6" fill="#B07A4A" />
      </Svg>
    ),
  },
  {
    id: "brocolis",
    x: 650, y: 610, size: 0.125, rot: -12, bob: 4,
    art: (
      <Svg>
        <path d="M31 44l-6.5-8.5M33 44l6.5-8.5" stroke="#86B862" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M27 60l2.6-18h4.8L37 60z" fill="#8FBF6A" />
        <path d="M32.6 42h1.8L37 60h-3.2z" fill="#76A653" />
        <circle cx="32" cy="21" r="12.5" fill="#43974A" />
        <circle cx="20.5" cy="30" r="10" fill="#3A8A3B" />
        <circle cx="43.5" cy="30" r="10" fill="#367F36" />
        <circle cx="32" cy="34" r="9.5" fill="#3F8F3F" />
        <g fill="#2C6E30">
          <circle cx="27" cy="25" r="2.2" /><circle cx="37" cy="18" r="2" /><circle cx="17" cy="33" r="2.1" />
          <circle cx="46" cy="34" r="2.2" /><circle cx="33" cy="38" r="2" /><circle cx="40" cy="26" r="1.8" />
        </g>
        <g fill="#6DBA59">
          <circle cx="27.5" cy="15.5" r="2.6" /><circle cx="16.5" cy="25.5" r="2.2" />
          <circle cx="40" cy="23.5" r="2.1" /><circle cx="28.5" cy="30.5" r="2" />
        </g>
      </Svg>
    ),
  },
  {
    id: "banana",
    x: 835, y: 540, size: 0.14, rot: -14, bob: 4.8,
    art: (
      <Svg>
        <path d="M17 9C8 26 14 48 40 55c6 1.5 11 1 15-1.5l1.5-1.5c-4.5-.5-9.5-1.5-14.5-3.5C28 42.5 22 28 23 10z" fill="#F6C94A" />
        <path d="M17 9C8 26 14 48 40 55c6 1.5 11 1 15-1.5-5 .5-10 .1-14.5-1.5C18 45 12 27 19.5 9.6z" fill="#E2A52A" opacity=".9" />
        <path d="M21 14c0 14 6 25 20 32.5" stroke="#FCE38A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M16.6 9.5l.9-5.6c.2-1.1 1.2-1.9 2.4-1.7l1.9.3c1.1.2 1.9 1.2 1.7 2.4l-.8 5.6z" fill="#7A5A24" />
        <circle cx="56" cy="52.4" r="2" fill="#5B4318" />
      </Svg>
    ),
  },
  {
    id: "bife",
    x: 712, y: 445, size: 0.13, rot: 10, bob: 4.2,
    art: (
      <Svg>
        <path d="M9 29.5C11 16.5 26.5 8 42 10.3c11.5 1.7 15.5 10.4 13 19.5-2.8 10.2-10.4 19-22.8 22C16.7 55.6 7.5 44 9 29.5z" fill="#EFD6B0" />
        <path d="M12.8 32.5C14.6 21 28 13.2 42.2 15c10 1.3 13.6 9 11.3 17-2.5 8.9-9.3 16.7-20.3 19.4-13.4 3.3-21.9-6.2-20.4-18.9z" fill="#8E4A2C" />
        <path d="M17 33.5c1.5-9.4 12.4-15.4 23.5-14 8 1 10.8 7.4 9 13.8-2 7.2-7.4 13.4-16.2 15.6-10.5 2.6-17.6-4.9-16.3-15.4z" fill="#AE613B" />
        <path d="M20.5 38.5l11-13.5M24 45.5l15.5-19M31 48.5l14-17M39.5 45.5l8-10" stroke="#6A3120" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <ellipse cx="25" cy="29" rx="4" ry="2.2" transform="rotate(-40 25 29)" fill="#fff" opacity=".22" />
      </Svg>
    ),
  },
  {
    id: "maca",
    x: 850, y: 360, size: 0.115, rot: -6, bob: 5.2,
    art: (
      <Svg>
        <path d="M32 20c-4.5-3.3-10.5-4.2-15.4-1.8C8.8 22 6.3 31.6 8.4 40.6 10.6 50 17.5 58.5 25.4 58.8c2.9.1 4.3-1.3 6.6-1.3s3.7 1.4 6.6 1.3c7.9-.3 14.8-8.8 17-18.2 2.1-9-.4-18.6-8.2-22.4C42.5 15.8 36.5 16.7 32 20z" fill="#DA3B31" />
        <path d="M47.4 18.2c7.8 3.8 10.3 13.4 8.2 22.4-2.2 9.4-9.1 17.9-17 18.2 6.5-3.7 11.5-11.3 12.6-19.5 1-7.6-.6-15.6-3.8-21.1z" fill="#B42A23" opacity=".7" />
        <ellipse cx="18.5" cy="31" rx="4" ry="7" transform="rotate(20 18.5 31)" fill="#fff" opacity=".42" />
        <path d="M32 21c-.3-5.2.8-9.6 3.8-13" stroke="#6B4423" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M35.5 13.5c2.5-6.3 9.6-9 16-7.3-2.2 6.4-9.7 9.6-16 7.3z" fill="#4C9A3F" />
        <path d="M37 13c4.2-1.4 8.2-3.4 12-6" stroke="#3A7D31" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </Svg>
    ),
  },
];

const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

export default function FloatingFoods({ focusY }: { focusY: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // hold every food inside the laptop until the card is well on screen
    el.dataset.state = "waiting";
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.paused = entry.isIntersecting ? "false" : "true";
        if (entry.intersectionRatio >= 0.5) el.dataset.state = "playing";
      },
      { threshold: [0, 0.5] }
    );
    io.observe(el.closest("article") ?? el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="foods absolute z-[2]"
      style={{
        left: "50%",
        top: `${focusY}%`,
        // same box as the photo under object-cover: full width, or full
        // height when the card is narrower than the photo
        width: `max(100%, calc(100cqh * ${IMG_W} / ${IMG_H}))`,
        aspectRatio: `${IMG_W} / ${IMG_H}`,
        transform: `translate(-50%, -${focusY}%)`,
      }}
    >
      {foods.map((f, i) => (
        <span
          key={f.id}
          className="food"
          style={
            {
              left: pct(f.x / IMG_W),
              top: pct(f.y / IMG_H),
              width: pct(f.size),
              // offset back to the laptop, in % of the food's own size
              "--fx": pct((ORIGIN.x - f.x) / IMG_W / f.size),
              "--fy": pct((ORIGIN.y - f.y) / IMG_W / f.size),
              "--rot": `${f.rot}deg`,
              "--d": `${i * 110}ms`,
              "--t": `${f.bob}s`,
              "--bd": `${(-i * 0.9).toFixed(1)}s`,
            } as CSSProperties
          }
        >
          <span className="food-x">
            <span className="food-y">
              <span className="food-bob">{f.art}</span>
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
