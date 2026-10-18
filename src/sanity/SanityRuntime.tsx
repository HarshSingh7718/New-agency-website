import {VisualEditing} from "next-sanity/visual-editing";
import {SanityLive} from "./lib/live";

export default function SanityRuntime({enabled, previewEnabled}: {enabled: boolean; previewEnabled: boolean}) {
  if (!enabled) return null;
  return (
    <>
      <SanityLive />
      {previewEnabled && <VisualEditing />}
    </>
  );
}
