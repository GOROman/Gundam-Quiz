import { useRef } from "react";

/**
 * 効果音（SE）再生用フック
 * type: 'pinpon' | 'buu' | 'start'
 */
export function useSE() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const loadedRef = useRef<{ [key: string]: boolean }>({});

  const playSE = async (type: "pinpon" | "buu" | "start") => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new window.AudioContext();
    }
    const ctx = audioCtxRef.current;
    const processorMap = {
      pinpon: { name: "pinpon-processor", url: "/audio/PinponProcessor.js" },
      buu: { name: "buu-processor", url: "/audio/BuuProcessor.js" },
      start: { name: "start-processor", url: "/audio/StartProcessor.js" },
    };
    const proc = processorMap[type];
    if (!loadedRef.current[type]) {
      await ctx.audioWorklet.addModule(proc.url);
      loadedRef.current[type] = true;
    }
    const node = new window.AudioWorkletNode(ctx, proc.name);
    node.connect(ctx.destination);
  };

  return playSE;
}
