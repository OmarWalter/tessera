"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4022],
  {
    26146: (e, t, s) => {
      s.d(t, { A: () => r });
      var a = s(73365),
        i = s(57707);
      let n = {
        sm: {
          w: 300,
          h: 188,
          brand: "text-[13px]",
          limit: "text-[1.9rem]",
          chip: 28,
          glyph: 16,
        },
        md: {
          w: 420,
          h: 263,
          brand: "text-[16px]",
          limit: "text-[2.6rem]",
          chip: 38,
          glyph: 20,
        },
        lg: {
          w: 560,
          h: 350,
          brand: "text-[20px]",
          limit: "text-[3.4rem]",
          chip: 50,
          glyph: 26,
        },
      };
      function r(e) {
        let {
            limit: t,
            address: s = "0x0000000000000000000000000000000000000000",
            name: r,
            size: c = "md",
            interactive: d = !1,
            className: x = "",
          } = e,
          m = n[c];
        null != r || "".concat(s.slice(0, 6), "…").concat(s.slice(-4));
        let h = s.slice(-4).toUpperCase();
        return (0, a.jsxs)("div", {
          className:
            "relative " +
            (d
              ? "transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] "
              : "") +
            x,
          style: { width: m.w, height: m.h, maxWidth: "100%" },
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute -inset-6 rounded-[32px] bg-lumen/15 blur-3xl",
            }),
            (0, a.jsxs)("div", {
              className:
                "relative h-full w-full overflow-hidden rounded-[20px] border border-lumen/45",
              style: {
                backgroundImage:
                  "radial-gradient(120% 100% at 115% 50%, rgba(184,255,62,0.32), transparent 50%), radial-gradient(80% 70% at -10% 110%, rgba(184,255,62,0.08), transparent 60%), linear-gradient(160deg, #14181F 0%, #0A0D12 55%, #06080C 100%)",
                boxShadow:
                  "0 40px 90px -25px rgba(0,0,0,0.85), 0 0 0 1px rgba(184,255,62,0.18) inset, 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 60px -10px rgba(184,255,62,0.35)",
              },
              children: [
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 opacity-[0.06]",
                  style: {
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 9px)",
                  },
                }),
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 opacity-[0.08]",
                  style: {
                    backgroundImage:
                      "radial-gradient(rgba(184,255,62,0.6) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    backgroundPosition: "right -2px bottom -2px",
                    maskImage:
                      "radial-gradient(circle at 100% 100%, black 0%, transparent 55%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 100% 100%, black 0%, transparent 55%)",
                  },
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative flex items-start justify-between px-6 pt-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        (0, a.jsx)(i.A, {
                          size: m.glyph,
                          className: "text-lumen",
                          motion: "static",
                        }),
                        (0, a.jsxs)("div", {
                          className: "leading-none",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "font-display font-medium tracking-[-0.01em] text-bone " +
                                m.brand,
                              style: { letterSpacing: "-0.01em" },
                              children: "tessera",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-lumen",
                              children: "Credit",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(l, { size: m.chip }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "absolute bottom-[28%] left-6 right-6",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "font-mono text-[9px] uppercase tracking-[0.28em] text-mute",
                      children: "Limit underwritten on-chain",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "num mt-2 font-display font-medium leading-none tracking-[-0.035em] text-bone " +
                        m.limit,
                      children: [
                        "$",
                        t.toLocaleString("en-US", { maximumFractionDigits: 0 }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "absolute bottom-5 left-6 right-6 flex items-end justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "font-mono text-[8px] uppercase tracking-[0.26em] text-mute",
                          children: "Agent",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mt-1 font-mono text-[10px] tracking-[0.28em] text-bone/70",
                          children: ["\xb7\xb7\xb7\xb7 ", h],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-right",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "font-mono text-[8px] uppercase tracking-[0.26em] text-mute",
                          children: "Built on",
                        }),
                        (0, a.jsx)(o, { className: "ml-auto mt-1" }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]",
                  style: {
                    background:
                      "linear-gradient(90deg, rgba(184,255,62,0.95) 0%, rgba(184,255,62,0.15) 50%, rgba(184,255,62,0.6) 100%)",
                  },
                }),
              ],
            }),
          ],
        });
      }
      function l(e) {
        let { size: t } = e,
          s = Math.round(0.78 * t);
        return (0, a.jsxs)("svg", {
          width: t,
          height: s,
          viewBox: "0 0 40 32",
          "aria-hidden": !0,
          style: { display: "block" },
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("linearGradient", {
                  id: "chip-bg",
                  x1: "0",
                  y1: "0",
                  x2: "1",
                  y2: "1",
                  children: [
                    (0, a.jsx)("stop", { offset: "0%", stopColor: "#D9E7B5" }),
                    (0, a.jsx)("stop", { offset: "40%", stopColor: "#9CC447" }),
                    (0, a.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#5A7320",
                    }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "chip-shine",
                  x1: "0",
                  y1: "0",
                  x2: "1",
                  y2: "0",
                  children: [
                    (0, a.jsx)("stop", {
                      offset: "0%",
                      stopColor: "rgba(255,255,255,0.5)",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "50%",
                      stopColor: "rgba(255,255,255,0)",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "100%",
                      stopColor: "rgba(255,255,255,0.2)",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("rect", {
              x: "0.5",
              y: "0.5",
              width: "39",
              height: "31",
              rx: "4.5",
              fill: "url(#chip-bg)",
              stroke: "rgba(0,0,0,0.35)",
              strokeWidth: "0.6",
            }),
            (0, a.jsx)("rect", {
              x: "0.5",
              y: "0.5",
              width: "39",
              height: "31",
              rx: "4.5",
              fill: "url(#chip-shine)",
              opacity: "0.5",
            }),
            (0, a.jsxs)("g", {
              stroke: "rgba(20,30,5,0.55)",
              strokeWidth: "0.7",
              strokeLinecap: "round",
              fill: "none",
              children: [
                (0, a.jsx)("path", { d: "M 0 11 L 14 11 M 26 11 L 40 11" }),
                (0, a.jsx)("path", { d: "M 0 21 L 14 21 M 26 21 L 40 21" }),
                (0, a.jsx)("path", { d: "M 14 4 L 14 28" }),
                (0, a.jsx)("path", { d: "M 26 4 L 26 28" }),
                (0, a.jsx)("rect", {
                  x: "14",
                  y: "11",
                  width: "12",
                  height: "10",
                  rx: "1.2",
                }),
              ],
            }),
          ],
        });
      }
      function o(e) {
        let { className: t = "" } = e;
        return (0, a.jsxs)("div", {
          className: "inline-flex items-center gap-1.5 " + t,
          "aria-label": "Base",
          children: [
            (0, a.jsxs)("svg", {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              "aria-hidden": !0,
              children: [
                (0, a.jsx)("circle", {
                  cx: "6",
                  cy: "6",
                  r: "5.5",
                  fill: "#B8FF3E",
                  opacity: "0.95",
                }),
                (0, a.jsx)("rect", {
                  x: "3.5",
                  y: "5.4",
                  width: "5",
                  height: "1.2",
                  fill: "#06080C",
                }),
              ],
            }),
            (0, a.jsx)("span", {
              className:
                "font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-bone",
              children: "Base",
            }),
          ],
        });
      }
    },
    57707: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(73365),
        i = s(1521);
      let n = 33,
        r = (() => {
          let e = [];
          for (let t = 0; t < 7; t++)
            e.push({
              x: 11 * t,
              y: n,
              distance: Math.abs(t - 3),
              isCenter: 3 === t,
            }),
              3 !== t &&
                e.push({
                  x: n,
                  y: 11 * t,
                  distance: Math.abs(t - 3),
                  isCenter: !1,
                });
          return e;
        })();
      function l(e) {
        let { size: t = 28, motion: s = "idle", className: n = "" } = e,
          [l, o] = (0, i.useState)("fill" !== s);
        return (
          (0, i.useEffect)(() => {
            if ("fill" !== s) return;
            o(!1);
            let e = setTimeout(() => o(!0), 50);
            return () => clearTimeout(e);
          }, [s]),
          (0, a.jsx)("svg", {
            width: t,
            height: t,
            viewBox: "0 0 ".concat(76, " ").concat(76),
            "aria-hidden": !0,
            className: n,
            style: { display: "block" },
            children: r.map((e, t) => {
              let i = l || "fill" !== s,
                n = 80 * e.distance,
                r =
                  ("idle" === s && e.isCenter) || "loading" === s
                    ? "animate-tile-pulse"
                    : "";
              return (0, a.jsx)(
                "rect",
                {
                  x: e.x,
                  y: e.y,
                  width: 10,
                  height: 10,
                  fill: "currentColor",
                  opacity: +!!i,
                  className: r,
                  style: {
                    transition:
                      "opacity 240ms cubic-bezier(0.16,1,0.3,1) ".concat(
                        n,
                        "ms"
                      ),
                    transformOrigin: ""
                      .concat(e.x + 5, "px ")
                      .concat(e.y + 5, "px"),
                  },
                },
                t
              );
            }),
          })
        );
      }
    },
    60133: (e, t, s) => {
      s.d(t, { default: () => r });
      var a = s(73365),
        i = s(1521),
        n = s(57707);
      function r() {
        let [e, t] = (0, i.useState)(!1),
          [s, r] = (0, i.useState)(0x1a8d2d7);
        return (
          (0, i.useEffect)(() => {
            let e = () => t(window.scrollY > 80);
            return (
              e(),
              window.addEventListener("scroll", e, { passive: !0 }),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, i.useEffect)(() => {
            let e = setInterval(() => r((e) => e + 1), 2e3);
            return () => clearInterval(e);
          }, []),
          (0, a.jsx)("header", {
            className:
              "sticky top-0 z-50 transition-all duration-300 " +
              (e ? "glass" : "border-b border-transparent bg-transparent"),
            children: (0, a.jsxs)("div", {
              className:
                "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4",
              children: [
                (0, a.jsxs)("a", {
                  href: "/",
                  className:
                    "focus-ring inline-flex items-center gap-3 rounded-sm",
                  children: [
                    (0, a.jsx)(n.A, {
                      size: 26,
                      className: "text-lumen",
                      motion: "idle",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "font-display text-lg font-medium tracking-tight text-bone",
                      children: "Tessera",
                    }),
                  ],
                }),
                (0, a.jsxs)("nav", {
                  className: "hidden items-center gap-7 text-sm md:flex",
                  children: [
                    (0, a.jsx)(l, { href: "/", children: "Home" }),
                    // (0, a.jsx)(l, { href: "/products", children: "Products" }),
                    (0, a.jsx)(l, { href: "/docs", children: "Docs" }),
                    (0, a.jsx)(l, { href: "/#how", children: "How it works" }),
                    (0, a.jsx)(l, { href: "/#faq", children: "FAQ" }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "hidden items-center gap-2 lg:flex",
                      children: [
                        (0, a.jsx)("span", {
                          className: "relative inline-block h-1.5 w-1.5",
                          children: (0, a.jsx)("span", {
                            className:
                              "absolute inset-0 rounded-full bg-lumen animate-glow-pulse",
                          }),
                        }),
                        (0, a.jsxs)("span", {
                          className:
                            "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
                          children: [
                            "base \xb7 block",
                            " ",
                            (0, a.jsx)("span", {
                              className: "num text-bone",
                              children: s.toLocaleString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: "/demo",
                      className:
                        "btn-lumen focus-ring rounded-sm px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em]",
                      children: "Try the demo",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function l(e) {
        let { href: t, children: s } = e;
        return (0, a.jsx)("a", {
          href: t,
          className:
            "font-mono text-[11px] uppercase tracking-[0.18em] text-ash transition-colors duration-200 hover:text-lumen",
          children: s,
        });
      }
    },
  },
]);
