import Image from "next/image";
import { placeholder } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Art-directed image slot with the shared media treatment.
 * `seed`/`w`/`h` feed the temporary placeholder source.
 * Replace the `src` resolution with Conatus's real assets at launch.
 */
export default function PlacedImage({
  seed,
  w,
  h,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  seed: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("media", className)} data-cursor="media">
      <Image
        src={placeholder(seed, w, h)}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        priority={priority}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </figure>
  );
}
