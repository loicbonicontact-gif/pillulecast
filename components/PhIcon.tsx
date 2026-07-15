import {
  MicrophoneStage,
  VideoCamera,
  SlidersHorizontal,
  Scissors,
  DeviceMobile,
  Broadcast,
  Microphone,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

/**
 * Registre des icônes référencées par nom (string) dans lib/content.ts —
 * garde les données découplées du framework. Ajoutez une entrée ici pour
 * chaque nouvelle valeur `icon` utilisée dans lib/content.ts.
 */
const registry: Record<string, Icon> = {
  "microphone-stage": MicrophoneStage,
  "video-camera": VideoCamera,
  "sliders-horizontal": SlidersHorizontal,
  microphone: Microphone,
  scissors: Scissors,
  "device-mobile": DeviceMobile,
  broadcast: Broadcast,
};

export default function PhIcon({
  name,
  className,
  size = 24,
  weight = "regular",
}: {
  name: string;
  className?: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp size={size} weight={weight} className={className} aria-hidden />;
}
