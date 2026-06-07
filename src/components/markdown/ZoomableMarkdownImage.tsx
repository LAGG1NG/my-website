"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Markdown 图片组件：默认在正文中展示，点击后以全屏遮罩放大预览。
 */
export function ZoomableMarkdownImage({ src, alt }: { src?: string; alt?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!src) {
    return null;
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="my-6 block overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
        <Image src={src} alt={alt ?? "文章图片"} width={1200} height={800} className="h-auto w-full object-cover" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" onClick={() => setIsOpen(false)}>
          <button type="button" className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-white" onClick={() => setIsOpen(false)}>
            关闭
          </button>
          <Image src={src} alt={alt ?? "文章图片"} width={1600} height={1000} className="max-h-[85vh] w-auto rounded-2xl object-contain" />
        </div>
      ) : null}
    </>
  );
}
