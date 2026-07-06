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
      className={`relative overflow-hidden rounded-3xl border border-border bg-surface-2 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {/* Voile sombre pour l'homogénéité cinématique */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent"
      />
    </div>
  );
}
