import Image from "next/image";

/**
 * Photo du studio via next/image (fill).
 * Le parent doit définir la taille et le ratio (ex. `aspect-[4/3]`).
 * ⚠️ Les URLs proviennent de lib/site.ts — placeholders Unsplash à remplacer.
 */
export default function StudioPhoto({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-2 ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
