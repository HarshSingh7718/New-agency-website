"use client";

import { useRef, useState, type CSSProperties, type FormEvent, type PointerEvent, type ReactNode } from "react";

export type FooterLink = { label: string; href: string; icon?: ReactNode };
export type FooterColumn = { title: string; links: FooterLink[] };
export type FooterSocial = { label: string; href: string; icon: ReactNode };

export type DitheredFooterProps = {
    logo?: ReactNode;
    brand?: string;
    brandHref?: string;
    tagline?: string;
    columns?: FooterColumn[];
    socials?: FooterSocial[];
    legal?: FooterLink[];
    copyright?: string;
    status?: FooterLink | null;
    accent?: string;
    onSubscribe?: (email: string) => void | Promise<void>;
};

const DITHER =
    "url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27360%27%20height%3D%27240%27%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%270%27%20y2%3D%271%27%3E%3Cstop%20offset%3D%270.04%27%20stop-color%3D%27%23000%27%2F%3E%3Cstop%20offset%3D%270.96%27%20stop-color%3D%27%23fff%27%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%27f%27%20x%3D%270%27%20y%3D%270%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20color-interpolation-filters%3D%27sRGB%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.45%27%20numOctaves%3D%272%27%20seed%3D%277%27%20stitchTiles%3D%27stitch%27%20result%3D%27n%27%2F%3E%3CfeColorMatrix%20in%3D%27n%27%20type%3D%27matrix%27%20values%3D%271%200%200%200%200%201%200%200%200%200%201%200%200%200%200%200%200%200%200%201%27%20result%3D%27ng%27%2F%3E%3CfeComposite%20in%3D%27SourceGraphic%27%20in2%3D%27ng%27%20operator%3D%27arithmetic%27%20k2%3D%270.5%27%20k3%3D%270.5%27%20result%3D%27s%27%2F%3E%3CfeComponentTransfer%20in%3D%27s%27%20result%3D%27t%27%3E%3CfeFuncR%20type%3D%27discrete%27%20tableValues%3D%270%201%27%2F%3E%3C%2FfeComponentTransfer%3E%3CfeColorMatrix%20in%3D%27t%27%20type%3D%27matrix%27%20values%3D%270%200%200%200%201%200%200%200%200%200.5%200%200%200%200%200%201%200%200%200%200%27%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url%28%23g%29%27%20filter%3D%27url%28%23f%29%27%2F%3E%3C%2Fsvg%3E')";

const GRID = "radial-gradient(circle, #000 0.9px, transparent 1.3px)";

const STYLES = `
.df-field { position: absolute; inset: 0; }
.df-field.df-lit {
  -webkit-mask-image: radial-gradient(circle 190px at var(--df-x, 50%) var(--df-y, 50%), #000 35%, rgb(0 0 0 / .22) 100%);
  mask-image: radial-gradient(circle 190px at var(--df-x, 50%) var(--df-y, 50%), #000 35%, rgb(0 0 0 / .22) 100%);
}
.df-dots {
  position: absolute; top: 0; bottom: 0; left: 0;
  width: calc(100% + 360px);
  background: var(--df-accent);
  -webkit-mask-image: ${GRID}, ${DITHER};
  mask-image: ${GRID}, ${DITHER};
  -webkit-mask-size: 4px 4px, 360px 240px;
  mask-size: 4px 4px, 360px 240px;
  -webkit-mask-repeat: repeat, repeat-x;
  mask-repeat: repeat, repeat-x;
  -webkit-mask-position: 0 0, left bottom;
  mask-position: 0 0, left bottom;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}
@media (prefers-reduced-motion: no-preference) {
  .df-dots { animation: df-drift 40s linear infinite; }
  @supports (animation-timeline: view()) {
    .df-band { view-timeline: --df-band; }
    .df-mark { animation: df-rise linear both; animation-timeline: --df-band; animation-range: entry 20% entry 100%; }
  }
}
@keyframes df-drift { to { translate: -360px 0; } }
@keyframes df-rise { from { translate: 0 30%; } }
`;

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--df-accent)]";
const coarse = "[@media(pointer:coarse)]:inline-flex [@media(pointer:coarse)]:min-h-11 [@media(pointer:coarse)]:items-center";

export default function DitheredFooter({
    logo,
    brand = "RapidGro",
    brandHref = "/",
    tagline = "Websites, ecommerce, SaaS and digital marketing built for growth.",
    columns = [],
    socials = [],
    legal = [],
    copyright = `© ${new Date().getFullYear()} RapidGroDigital. All rights reserved.| Made with ❤️ by Harsh`,
    status = null,
    accent = "#E91E8C",
    onSubscribe,
}: DitheredFooterProps) {
    const [email, setEmail] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
    const field = useRef<HTMLDivElement>(null);
    const frame = useRef(0);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setState("sending");
        try {
            await onSubscribe?.(email);
            setState("done");
            setEmail("");
        } catch {
            setState("error");
        }
    };

    const onMove = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || !field.current) return;
        const el = field.current;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            el.style.setProperty("--df-x", `${x}px`);
            el.style.setProperty("--df-y", `${y}px`);
            el.classList.add("df-lit");
        });
    };
    const onLeave = () => {
        cancelAnimationFrame(frame.current);
        field.current?.classList.remove("df-lit");
    };

    const toTop = () =>
        window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

    return (
        <footer
            className="bg-[#140820] text-white"
            style={{ "--df-accent": accent } as CSSProperties}
        >
            <style>{STYLES}</style>
            <div className="w-full border-t border-[#ffffff1a]" />

            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-[44px] px-5! py-[40px] pl-[80px] sm:px-8 lg:pl-[120px] md:grid-cols-[1fr_1.2fr_1.2fr_1.5fr] !ml-0 md:!ml-24">
                {columns.map((col) => (
                    <nav key={col.title} aria-label={col.title} className={`flex flex-col items-start text-left ${col.title === 'Grow' ? 'hidden md:flex' : ''}`}>
                        <p className="mb-[18px]! text-[16px] font-bold tracking-[0.14em] uppercase !text-white/70">
                            {col.title}
                        </p>
                        <ul className="flex flex-col items-start gap-[18px]">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className={`flex items-start gap-3 text-[18px] leading-[1.5] !text-white transition-colors hover:!text-[var(--c-green-on-dark)] ${focus}`}>
                                        {l.icon && <span className="mt-[3px] lg:mt-1.5! shrink-0 !text-white hover:!text-[var(--c-green-on-dark)]">{l.icon}</span>}
                                        <span className="whitespace-pre-line">{l.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div aria-hidden="true" className="df-band relative h-60 overflow-hidden" onPointerMove={onMove} onPointerLeave={onLeave}>
                <div ref={field} className="df-field">
                    <div className="df-dots" />
                </div>
                <p className="df-mark pointer-events-none absolute -bottom-[0.05em] left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0 w-full text-center md:text-left select-none text-[clamp(2rem,16vw,4rem)] md:text-[clamp(4rem,18vw,13rem)] font-bold leading-[0.8] tracking-[-0.06em] text-[#140820]" style={{ textShadow: "0 0 1px rgba(255,255,255,0.1)" }}>
                    rapidgrodigital
                </p>
            </div>

            <div className="border-t border-[#ffffff1a] py-2! md:py-[4px]">
                <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-5 md:pl-[80px] sm:flex-row sm:px-8 lg:pl-[120px] !ml-0 md:!ml-24">
                    {/* Logo */}
                    {logo && <div className="flex items-center">{logo}</div>}

                    {/* Copyright */}
                    <div className="text-[14px] md:text-[16px] !text-white text-center">
                        <p>{copyright}</p>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[30px] text-[14px] md:text-[16px] !text-white">
                        {legal.map((l) => (
                            <a key={l.label} href={l.href} className={`transition-colors hover:!text-[var(--c-green-on-dark)] ${focus}`}>
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
