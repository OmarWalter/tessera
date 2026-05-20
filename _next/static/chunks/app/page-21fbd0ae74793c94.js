(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    14432: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 26674)),
        Promise.resolve().then(a.bind(a, 21455)),
        Promise.resolve().then(a.bind(a, 60133)),
        Promise.resolve().then(a.bind(a, 45706)),
        Promise.resolve().then(a.bind(a, 78081)),
        Promise.resolve().then(a.bind(a, 63005)),
        Promise.resolve().then(a.bind(a, 77948)),
        Promise.resolve().then(a.bind(a, 21042));
    },
    21042: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var s = a(73365),
        n = a(1521);
      let r = (e) =>
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(e),
        i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return "".concat((e / 100).toFixed(t), "%");
        },
        l = { AAA: 95, AA: 88, A: 78, BBB: 65 },
        o = {
          AAA: "Treasury, DAO, or verified protocol - on-chain entity with multi-million holdings and zero defaults. Lowest yield, lowest risk.",
          AA: "Established agent - 6+ months of protocol history, 5,000+ on-chain transactions, smoothed revenue, no defaults.",
          A: "Verified agent - 90+ days of protocol history, active counterparty graph, healthy repayment record.",
          BBB: "New agent - recently onboarded, building track record. Smaller line, higher yield to compensate.",
        };
      function c() {
        let [e, t] = (0, n.useState)(5e3),
          [a, c] = (0, n.useState)(14),
          [h, p] = (0, n.useState)("A"),
          f = (0, n.useMemo)(
            () =>
              (function (e) {
                let t = [],
                  a = Math.max(0, Math.round((100 - e.buyerCreditGrade) * 10)),
                  s = Math.round((e.originatorReputationTier / 1e3) * 100),
                  n = 2700 + a + Math.round((e.invoiceTenorDays / 30) * 30) - s,
                  r = e.insured ? 100 : 25,
                  i = n - 75 - r,
                  l = Math.round((n * e.invoiceTenorDays) / 365),
                  o = Math.min(
                    1500,
                    500 + 100 * Math.max(0, Math.floor((a - 200) / 100))
                  ),
                  c = Math.round(e.faceValueUsdc * (1 - l / 1e4) * 100) / 100;
                return (
                  i < 2400 &&
                    t.push(
                      "APY below the 25% target floor - verify counterparty grade."
                    ),
                  i > 3200 && t.push("APY above 32%, review risk parameters."),
                  e.invoiceTenorDays > 60 &&
                    t.push("Tenor >60d, concentration limit review required."),
                  {
                    discountBps: l,
                    originatorCollateralBps: o,
                    protocolFeeBps: 75,
                    insurancePremiumBps: r,
                    estimatedLenderApyBps: i,
                    fundedAmountUsdc: c,
                    notes: t,
                  }
                );
              })({
                buyerCreditGrade: l[h],
                originatorReputationTier: 500,
                invoiceTenorDays: a,
                faceValueUsdc: e,
                insured: !1,
              }),
            [e, a, h]
          ),
          g = (0, n.useMemo)(
            () => (f.fundedAmountUsdc * f.estimatedLenderApyBps) / 1e4,
            [f]
          ),
          b = (0, n.useMemo)(() => (g * a) / 365, [g, a]),
          y = (0, n.useMemo)(() => Math.round(365 / a), [a]),
          v = (0, n.useMemo)(() => {
            let e = f.fundedAmountUsdc,
              t = f.estimatedLenderApyBps / 1e4;
            return {
              tessera: e * t,
              tBill: 0.045 * e,
              aave: 0.04 * e,
              idle: 0 * e,
              multipleVsTBill: t / 0.045,
              multipleVsAave: t / 0.04,
            };
          }, [f]);
        return (0, s.jsxs)("section", {
          id: "calculator",
          className: "relative overflow-hidden border-y border-smoke/40 bg-ink",
          children: [
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-x-0 top-0 -z-0 h-full bg-ink-radial opacity-60",
            }),
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full bg-ember/10 blur-2xl animate-drift-a",
            }),
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-azure/15 blur-2xl animate-drift-c",
            }),
            (0, s.jsx)("div", {
              className: "relative mx-auto max-w-6xl px-6 py-24",
              children: (0, s.jsxs)("div", {
                className: "grid gap-12 md:grid-cols-[5fr_7fr]",
                children: [
                  (0, s.jsxs)("div", {
                    className: "md:pr-6",
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                        children: "Underwriting model \xb7 live preview",
                      }),
                      (0, s.jsx)("h2", {
                        className:
                          "mt-3 font-display text-4xl tracking-tight text-bone md:text-5xl",
                        children: "Price a note in real time.",
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-5 text-ash",
                        children:
                          "The same pricing engine that runs at agent origination. Drag face value, tenor, and buyer tier - lender APY, the originator’s funded amount, and per-note economics update live.",
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-4 text-sm text-mute",
                        children:
                          "Indicative. Real underwriting includes operator review, current pool depth, and counterparty concentration. Defaults are not insured in v0 - lenders bear the credit risk directly.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "rounded-none border border-smoke/60 bg-ink shadow-[0_1px_0_rgba(8,17,31,0.04),0_30px_60px_-40px_rgba(8,17,31,0.35)]",
                    children: (0, s.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "space-y-6 border-b border-smoke/60 p-7 md:border-b-0 md:border-r",
                          children: [
                            (0, s.jsxs)(d, {
                              label: "Invoice face value",
                              help: "What the buyer agent owes at maturity.",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "num font-display text-3xl tracking-tight text-bone",
                                  children: r(e),
                                }),
                                (0, s.jsx)("input", {
                                  type: "range",
                                  min: 100,
                                  max: 25e3,
                                  step: 50,
                                  value: e,
                                  onChange: (e) => t(Number(e.target.value)),
                                  className: "mt-3 w-full accent-lumen",
                                  "aria-label": "Invoice face value",
                                }),
                                (0, s.jsx)(m, {
                                  left: "$100",
                                  right: "$25k cap",
                                }),
                              ],
                            }),
                            (0, s.jsxs)(d, {
                              label: "Tenor",
                              help: "Days until the buyer agent pays. Shorter = safer + smaller per-note return but higher capital turnover.",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "num font-display text-3xl tracking-tight text-bone",
                                  children: [
                                    a,
                                    (0, s.jsx)("span", {
                                      className: "ml-1 text-base text-mute",
                                      children: "days",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("input", {
                                  type: "range",
                                  min: 7,
                                  max: 60,
                                  step: 1,
                                  value: a,
                                  onChange: (e) => c(Number(e.target.value)),
                                  className: "mt-3 w-full accent-lumen",
                                  "aria-label": "Tenor in days",
                                }),
                                (0, s.jsx)(m, { left: "7d", right: "60d" }),
                              ],
                            }),
                            (0, s.jsxs)(d, {
                              label: "Buyer tier",
                              help: "Reputation score of the buyer agent. Higher tier = lower yield, lower default risk.",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "mt-1 grid grid-cols-4 gap-2",
                                  children: Object.keys(l).map((e) =>
                                    (0, s.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => p(e),
                                        style:
                                          h === e
                                            ? {
                                                boxShadow:
                                                  "inset 3px 0 0 0 #B8FF3E",
                                              }
                                            : void 0,
                                        className:
                                          "focus-ring rounded-md border px-2 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors " +
                                          (h === e
                                            ? "border-lumen/50 bg-lumen/[0.06] text-lumen"
                                            : "border-smoke text-ash hover:border-lumen/30 hover:text-bone"),
                                        children: e,
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "mt-3 rounded-none border-l-2 border-lumen/60 bg-lumen/5 px-3 py-2 text-xs text-ash",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "font-mono font-medium text-bone",
                                      children: h,
                                    }),
                                    " ",
                                    "\xb7 ",
                                    o[h],
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative overflow-hidden bg-obsidian p-7 text-bone",
                          children: [
                            (0, s.jsx)("div", {
                              "aria-hidden": !0,
                              className:
                                "pointer-events-none absolute inset-0 bg-aurora animate-aurora opacity-80",
                            }),
                            (0, s.jsx)("div", {
                              "aria-hidden": !0,
                              className:
                                "pointer-events-none absolute inset-0 bg-engrave-dark opacity-50",
                            }),
                            (0, s.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                                  children: "Lender quote",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "mt-5",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "font-mono text-[10px] uppercase tracking-[0.18em] text-ash",
                                      children: "Annualized yield",
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "num mt-1 font-display text-5xl tracking-tighter text-bone md:text-6xl",
                                      children: i(f.estimatedLenderApyBps, 2),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "mt-2 text-sm text-ash",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "num text-bone",
                                          children: r(g),
                                        }),
                                        " ",
                                        "per year on this ",
                                        r(f.fundedAmountUsdc),
                                        " of working capital, if redeployed at this rate.",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "mt-6 rounded-none border border-lumen/30 bg-lumen/5 p-4",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "font-mono text-[10px] uppercase tracking-[0.18em] text-lumen",
                                      children: "Capital efficiency",
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-xs",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "font-mono text-[9px] uppercase tracking-[0.15em] text-mute",
                                              children: "This note",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "num mt-1 font-display text-lg text-bone",
                                              children: ["+", r(b)],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "font-mono text-[9px] text-mute",
                                              children: ["over ", a, "d"],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "font-mono text-[9px] uppercase tracking-[0.15em] text-mute",
                                              children: "Redeploys",
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "num mt-1 font-display text-lg text-bone",
                                              children: [y, "\xd7"],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "font-mono text-[9px] text-mute",
                                              children: [
                                                "per year at ",
                                                a,
                                                "d tenor",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "mt-4 border border-smoke/30 bg-ink/40 p-4",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between gap-2",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
                                          children:
                                            "Vs. holding USDC elsewhere",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "font-mono text-[9px] uppercase tracking-[0.15em] text-lumen",
                                          children: [
                                            v.multipleVsAave.toFixed(1),
                                            "\xd7 Aave \xb7 ",
                                            v.multipleVsTBill.toFixed(1),
                                            "\xd7 T-bills",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "mt-3 space-y-2 text-xs",
                                      children: [
                                        (0, s.jsx)(u, {
                                          label: "Tessera (this note)",
                                          annual: v.tessera,
                                          tone: "lumen",
                                        }),
                                        (0, s.jsx)(u, {
                                          label: "Aave / Morpho USDC ≈ 4%",
                                          annual: v.aave,
                                        }),
                                        (0, s.jsx)(u, {
                                          label: "US T-bills ≈ 4.5%",
                                          annual: v.tBill,
                                        }),
                                        (0, s.jsx)(u, {
                                          label: "Idle in wallet",
                                          annual: v.idle,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "mt-3 border-t border-smoke/30 pt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-mute",
                                      children: [
                                        "Annualized $ on the ",
                                        r(f.fundedAmountUsdc),
                                        " of capital this note deploys",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "mt-6 grid grid-cols-2 gap-y-4 text-sm",
                                  children: [
                                    (0, s.jsx)(x, {
                                      label: "Originator funded",
                                      value: r(f.fundedAmountUsdc),
                                      help: "paid to originator at funding",
                                    }),
                                    (0, s.jsx)(x, {
                                      label: "Discount applied",
                                      value: i(f.discountBps, 2),
                                      help: "of face value, your spread",
                                    }),
                                    (0, s.jsx)(x, {
                                      label: "Protocol fee",
                                      value: i(f.protocolFeeBps, 2),
                                      help: "paid to treasury",
                                    }),
                                    (0, s.jsx)(x, {
                                      label: "Buyer tier",
                                      value: ""
                                        .concat(h, " \xb7 ")
                                        .concat(l[h], "/100"),
                                      help: "rep score of buyer",
                                    }),
                                  ],
                                }),
                                f.notes.length > 0 &&
                                  (0, s.jsx)("ul", {
                                    className:
                                      "mt-6 space-y-1.5 border-t border-smoke/10 pt-4 text-xs text-lumen",
                                    children: f.notes.map((e) =>
                                      (0, s.jsxs)(
                                        "li",
                                        {
                                          className: "flex gap-2",
                                          children: [
                                            (0, s.jsx)("span", {
                                              "aria-hidden": !0,
                                              children: "!",
                                            }),
                                            (0, s.jsx)("span", { children: e }),
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function d(e) {
        let { label: t, help: a, children: n } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className:
                "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
              children: t,
            }),
            a &&
              (0, s.jsx)("div", {
                className: "mt-1 text-[11px] text-mute",
                children: a,
              }),
            (0, s.jsx)("div", { className: "mt-2", children: n }),
          ],
        });
      }
      function m(e) {
        let { left: t, right: a } = e;
        return (0, s.jsxs)("div", {
          className:
            "mt-1 flex justify-between font-mono text-[10px] text-mute",
          children: [
            (0, s.jsx)("span", { children: t }),
            (0, s.jsx)("span", { children: a }),
          ],
        });
      }
      function x(e) {
        let { label: t, value: a, help: n } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className:
                "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
              children: t,
            }),
            (0, s.jsx)("div", {
              className: "num mt-1 font-mono text-base text-bone",
              children: a,
            }),
            n &&
              (0, s.jsx)("div", {
                className: "mt-0.5 font-mono text-[9px] text-mute",
                children: n,
              }),
          ],
        });
      }
      function u(e) {
        let { label: t, annual: a, tone: n } = e,
          i = "lumen" === n;
        return (0, s.jsxs)("div", {
          className: "flex items-baseline justify-between gap-3",
          children: [
            (0, s.jsx)("span", {
              className:
                "font-mono text-[11px] " + (i ? "text-bone" : "text-ash"),
              children: t,
            }),
            (0, s.jsxs)("span", {
              className:
                "num font-display " +
                (i ? "text-lg text-lumen" : "text-sm text-bone"),
              children: [
                r(a),
                (0, s.jsx)("span", {
                  className: "ml-1 font-mono text-[10px] text-mute",
                  children: "/ yr",
                }),
              ],
            }),
          ],
        });
      }
    },
    21455: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => i });
      var s = a(73365),
        n = a(1521),
        r = a(57707);
      function i() {
        let [e, t] = (0, n.useState)(0x1a8d2d7);
        return (
          (0, n.useEffect)(() => {
            let e = setInterval(() => t((e) => e + 1), 2e3);
            return () => clearInterval(e);
          }, []),
          (0, s.jsx)("footer", {
            className: "relative border-t border-smoke bg-ink",
            children: (0, s.jsxs)("div", {
              className: "mx-auto max-w-6xl px-6 py-16",
              children: [
                (0, s.jsxs)("div", {
                  className: "grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, s.jsx)(r.A, {
                              size: 26,
                              className: "text-lumen",
                              motion: "idle",
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "font-display text-lg font-medium tracking-tight text-bone",
                              children: "Tessera",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "mt-4 max-w-sm text-sm leading-relaxed text-ash",
                          children:
                            "The first credit card built for AI agents. USDC credit line on Base, underwritten on-chain from settled work.",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
                          children:
                            "Base mainnet \xb7 V1 vault live \xb7 Not an offer to sell securities",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l, {
                      title: "Product",
                      children: [
                        (0, s.jsx)("a", {
                          href: "/demo",
                          children: "Credit demo",
                        }),
                        // (0, s.jsx)("a", {
                        //   href: "/products",
                        //   children: "All products",
                        // }),
                        (0, s.jsx)("a", { href: "/sdk", children: "SDK" }),
                        (0, s.jsx)("a", { href: "/docs", children: "Docs" }),
                        (0, s.jsx)("a", {
                          href: "/#how",
                          children: "How it works",
                        }),
                        (0, s.jsx)("a", { href: "/#faq", children: "FAQ" }),
                      ],
                    }),
                    (0, s.jsxs)(l, {
                      title: "Resources",
                      children: [
                        (0, s.jsx)("a", { href: "#", children: "Whitepaper" }),
                        (0, s.jsx)("a", {
                          href: "#",
                          children: "Architecture",
                        }),
                        (0, s.jsx)("a", {
                          href: "https://github.com/cmxdev1/Tessera",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "GitHub ↗",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(l, {
                      title: "Community",
                      children: [
                        (0, s.jsx)("a", {
                          href: "https://x.com/tesseracoin",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "X ↗",
                        }),
                        // (0, s.jsx)("a", {
                        //   href: "https://t.me/TesseraBase",
                        //   target: "_blank",
                        //   rel: "noreferrer",
                        //   children: "Telegram ↗",
                        // }),
                      ],
                    }),
                    (0, s.jsxs)(l, {
                      title: "Legal",
                      children: [
                        (0, s.jsx)("a", { href: "#", children: "Privacy" }),
                        (0, s.jsx)("a", { href: "#", children: "Terms" }),
                        (0, s.jsx)("a", { href: "#", children: "Disclosures" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "mt-14 flex flex-col items-start justify-between gap-3 border-t border-smoke pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mute md:flex-row md:items-center",
                  children: [
                    (0, s.jsxs)("span", {
                      children: [
                        "built on base \xb7 chain id 8453 \xb7 block",
                        " ",
                        (0, s.jsx)("span", {
                          className: "num text-ash",
                          children: e.toLocaleString(),
                        }),
                      ],
                    }),
                    (0, s.jsx)("span", {
                      children: "est. 2026 \xb7 tessera.fi",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function l(e) {
        let { title: t, children: a } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className:
                "font-mono text-[10px] uppercase tracking-[0.2em] text-mute",
              children: t,
            }),
            (0, s.jsx)("ul", {
              className: "mt-4 space-y-2 text-sm",
              children: (Array.isArray(a) ? a : [a]).map((e, t) =>
                (0, s.jsx)(
                  "li",
                  {
                    children: (0, s.jsx)("span", {
                      className:
                        "text-ash transition-colors duration-200 hover:text-lumen",
                      children: e,
                    }),
                  },
                  t
                )
              ),
            }),
          ],
        });
      }
    },
    26674: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var s = a(73365),
        n = a(1521),
        r = a(63005);
      let i = [
        {
          q: "Is this a real credit card?",
          a: "It's a USDC credit line on Base mainnet. We use 'card' because the mental model - draw, spend, repay, on a limit that grows with use - is identical to a consumer credit card. There's no plastic, no Visa, no merchant network. Your agent draws USDC from its line and uses it to pay anything that accepts USDC on Base (which is most agent commerce). The 'card' is a programmable account, not a physical artifact.",
        },
        {
          q: "What is Tessera Credit, in one sentence?",
          a: "A USDC line of credit on Base for AI agents, with limits underwritten on-chain from the agent's settlement history. Your agent settles invoices via the Tessera protocol, that history becomes its credit file, and the limit it can draw against scales with the volume and reliability of its settled work.",
        },
        {
          q: "How is the credit limit computed?",
          a: "From four on-chain inputs: lifetime settled volume, average invoice size, repayment rate, and account age. No human in the loop, no application, no quarterly review - the formula is public and runs against the Tessera settlement subgraph. Limits update as new invoices settle. Default and the limit tightens; pay back on time and it grows.",
        },
        {
          q: "Don't most agent payments settle instantly?",
          a: "Yes - and that's exactly why credit matters. Inference and per-request services settle atomically via x402 and pre-paid balances. Everything else - retainers, performance fees, multi-step deliverables, monthly invoicing - has a gap between work and payment. Tessera fills that gap two ways: a settlement protocol that records the work, and a credit line your agent can draw against in the meantime.",
        },
        {
          q: "How is this different from x402?",
          a: "x402 settles a payment inside a single HTTP request - atomic, instant, no float. Tessera Credit gives your agent a balance to draw from when it can't or won't settle atomically. They're complementary: an agent business might use x402 to pay for compute by the second AND use a Tessera credit line for the working capital that keeps it operating between client payments.",
        },
        {
          q: "Does my agent need to be KYC'd or registered as a legal entity?",
          a: "No. Tessera is permissionless on the borrower side - the underwriter is the chain. There's no KYB, no off-chain attestation, no legal-entity requirement. The only input is your agent's on-chain settlement history. The whole product is on-chain end to end.",
        },
        {
          q: "What if my agent is brand new?",
          a: "Brand-new accounts will get small starter limits or none at all when the credit product launches - same as any credit product. The underwriter formula reads four on-chain inputs: lifetime settled volume, average invoice size, repayment rate, and account age. Today you can preview exactly how that scoring works in the demo at /demo; the on-chain settlement surfaces that build real history open up in a future phase.",
        },
        {
          q: "What if my agent doesn't repay a draw?",
          a: "The default is recorded on-chain and permanently dents your repayment rate - the same number the underwriter reads when computing limits for every future draw, by any agent including yours. Lenders take the principal loss (no insurance pool in v0). For lenders, treat funded draws as agent credit risk and size accordingly. For agents, this is the trade: real credit, real consequences, all visible.",
        },
        {
          q: "What's the catch, why is the yield higher than Treasuries?",
          a: "You're taking specific agent credit risk for a specific number of days, with no insurance backstop in v0. Treasuries are sovereign-backed and open-ended. Tessera notes are agent-backed and tenor-bound. The yield comes specifically from the retainer / project / performance-based slice of agent commerce - not from token emissions or subsidized rates. Higher yield is time value of money plus a counterparty risk premium. Expect a default or two; the math holds if defaults stay well under the implied premium.",
        },
        {
          q: "Will these rates last?",
          a: "No. The current 25–30% target reflects the rate the market needs to clear at while the protocol is new, lenders are taking real risk on novel agent counterparties, and there's no insurance backstop. Expect rates to normalize toward 15–20% as repayment data accumulates and underwriting can shift from manual operator approval to programmatic reputation scoring. Like every credit market, early lenders get paid more because they show up before the data does.",
        },
        {
          q: "Why Base specifically?",
          a: "USDC-native, sub-cent gas, and the entire Coinbase agent stack (CDP SDK, AgentKit, x402) lives here. The unit economics of short-dated paper require gas to be effectively free; Base is one of the few chains where that's true today. Tessera launched single-chain on Base mainnet. Multi-chain isn't on the near-term roadmap.",
        },
        {
          q: "Is there an SDK?",
          a: "Yes - @tessera/sdk, a TypeScript client for any Node.js or Edge runtime. Three lines of config (vault address, subgraph URL, app URL all preset via TESSERA_BASE_MAINNET) to start. Includes on-chain reads/writes (createInvoice, fundInvoice, repayInvoice, deposit, redeem), subgraph reads (getAgentProfile, getReputationScore, recentInvoices), link generators (getPayLink, getProfileLink), and async watch helpers (waitForFunded, waitForRepaid) for agent automation. MCP server is a planned follow-up.",
        },
      ];
      function l() {
        let [e, t] = (0, n.useState)(0);
        return (0, s.jsx)("section", {
          id: "faq",
          className: "bg-ink",
          children: (0, s.jsxs)("div", {
            className: "mx-auto max-w-3xl px-6 py-24",
            children: [
              (0, s.jsx)(r.default, {
                children: (0, s.jsx)("p", {
                  className:
                    "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                  children: "FAQ",
                }),
              }),
              (0, s.jsxs)(r.default, {
                delay: 1,
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "mt-3 font-display text-4xl tracking-tighter text-bone md:text-5xl",
                    children: "The questions you actually have.",
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 max-w-2xl text-sm text-ash",
                    children:
                      "Credit cards for AI agents is a new product category. Here’s what people ask first.",
                  }),
                ],
              }),
              (0, s.jsx)("ul", {
                className:
                  "mt-12 divide-y divide-smoke/10 border-y border-smoke/60",
                children: i.map((a, n) => {
                  let r = e === n;
                  return (0, s.jsxs)(
                    "li",
                    {
                      children: [
                        (0, s.jsxs)("button", {
                          type: "button",
                          onClick: () => t(r ? null : n),
                          className:
                            "focus-ring group flex w-full items-start justify-between gap-6 py-6 text-left",
                          "aria-expanded": r,
                          children: [
                            (0, s.jsxs)("span", {
                              className: "flex flex-1 items-start gap-4",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "num mt-1 font-mono text-xs text-lumen",
                                  children: String(n + 1).padStart(2, "0"),
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "font-display text-lg text-bone md:text-xl",
                                  children: a.q,
                                }),
                              ],
                            }),
                            (0, s.jsx)("span", {
                              "aria-hidden": !0,
                              className:
                                "mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-smoke/60 font-mono text-base text-ash transition " +
                                (r ? "rotate-45 bg-obsidian text-bone" : ""),
                              children: "+",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                          style: { gridTemplateRows: r ? "1fr" : "0fr" },
                          children: (0, s.jsx)("div", {
                            className: "min-h-0",
                            children: (0, s.jsx)("p", {
                              className:
                                "ml-10 pb-6 pr-10 text-ash md:text-[15px] md:leading-relaxed",
                              children: a.a,
                            }),
                          }),
                        }),
                      ],
                    },
                    a.q
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    45706: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => u });
      var s = a(73365),
        n = a(9803),
        r = a.n(n),
        i = a(42869),
        l = a(1521);
      function o(e) {
        let { index: t, label: a, className: n = "" } = e;
        return (0, s.jsxs)("div", {
          className:
            "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] ".concat(
              n
            ),
          children: [
            (0, s.jsxs)("span", {
              className: "text-mute",
              children: ["[", t, "]"],
            }),
            (0, s.jsx)("span", { className: "h-px flex-1 max-w-12 bg-smoke" }),
            (0, s.jsx)("span", { className: "text-bone", children: a }),
          ],
        });
      }
      let c = {
        live: "border-lumen/35 bg-lumen/10 text-lumen",
        settled: "border-earn/35 bg-earn/10 text-earn",
        routing: "border-agent/40 bg-agent/10 text-agent",
        "pre-mainnet": "border-smoke bg-graphite text-ash",
        neutral: "border-smoke bg-graphite text-mute",
        alert: "border-alert/40 bg-alert/10 text-alert",
      };
      function d(e) {
        let {
          tone: t = "neutral",
          children: a,
          className: n = "",
          pulse: r = !1,
        } = e;
        return (0, s.jsxs)("span", {
          className:
            "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] " +
            c[t] +
            " " +
            n,
          children: [
            r &&
              (0, s.jsx)("span", {
                className: "relative inline-block h-1.5 w-1.5",
                children: (0, s.jsx)("span", {
                  className:
                    "absolute inset-0 rounded-full animate-glow-pulse " +
                    ("live" === t
                      ? "bg-lumen"
                      : "settled" === t
                      ? "bg-earn"
                      : "routing" === t
                      ? "bg-agent"
                      : "alert" === t
                      ? "bg-alert"
                      : "bg-mute"),
                }),
              }),
            a,
          ],
        });
      }
      function m(e) {
        let {
            density: t = 0.12,
            tileSize: a = 8,
            gap: n = 4,
            accent: r = "#B8FF3E",
            fps: i = 30,
            connectionRate: o = 0.04,
            className: c = "",
          } = e,
          d = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let e = d.current;
            if (!e) return;
            let s = e.getContext("2d", { alpha: !0 });
            if (!s) return;
            let l = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches,
              c =
                1e3 /
                (window.matchMedia("(max-width: 768px)").matches
                  ? Math.min(i, 24)
                  : i),
              m = (function (e) {
                let t = e.replace("#", ""),
                  a = parseInt(
                    3 === t.length
                      ? t
                          .split("")
                          .map((e) => e + e)
                          .join("")
                      : t,
                    16
                  );
                return { r: (a >> 16) & 255, g: (a >> 8) & 255, b: 255 & a };
              })(r),
              x = 0,
              u = new Float32Array(0),
              h = [],
              p = 1;
            function f() {
              var t;
              let r = null == e ? void 0 : e.parentElement;
              if (!e || !r || !s) return;
              p = Math.min(null != (t = window.devicePixelRatio) ? t : 1, 2);
              let i = r.clientWidth,
                l = r.clientHeight;
              (e.width = Math.floor(i * p)),
                (e.height = Math.floor(l * p)),
                (e.style.width = "".concat(i, "px")),
                (e.style.height = "".concat(l, "px")),
                s.setTransform(p, 0, 0, p, 0, 0);
              let o = a + n;
              (u = new Float32Array(
                (x = Math.max(1, Math.floor(i / o))) *
                  Math.max(1, Math.floor(l / o))
              )),
                (h = []);
            }
            f();
            let g = 0,
              b = () => {
                cancelAnimationFrame(g), (g = requestAnimationFrame(f));
              };
            function y() {
              if (!s || !e) return;
              let t = a + n,
                r = e.width / p,
                i = e.height / p;
              s.clearRect(0, 0, r, i);
              for (let e = 0; e < u.length; e++) {
                let n = u[e];
                if (n < 0.04) continue;
                let r = e % x,
                  i = Math.floor(e / x);
                (s.fillStyle = "rgba("
                  .concat(m.r, ", ")
                  .concat(m.g, ", ")
                  .concat(m.b, ", ")
                  .concat(0.85 * n, ")")),
                  s.fillRect(r * t, i * t, a, a);
              }
              for (let e of ((s.lineWidth = 1), h)) {
                let n = e.from % x,
                  r = Math.floor(e.from / x),
                  i = e.to % x,
                  l = Math.floor(e.to / x);
                (s.strokeStyle = "rgba("
                  .concat(m.r, ", ")
                  .concat(m.g, ", ")
                  .concat(m.b, ", ")
                  .concat(e.opacity, ")")),
                  s.beginPath(),
                  s.moveTo(n * t + a / 2, r * t + a / 2),
                  s.lineTo(i * t + a / 2, l * t + a / 2),
                  s.stroke();
              }
            }
            if ((window.addEventListener("resize", b), l)) {
              let e = Math.floor(u.length * t);
              for (let t = 0; t < e; t++)
                u[Math.floor(Math.random() * u.length)] =
                  0.4 + 0.5 * Math.random();
              return (
                y(),
                () => {
                  window.removeEventListener("resize", b);
                }
              );
            }
            let v = !0,
              j = new IntersectionObserver(
                (e) => {
                  for (let t of e) v = t.isIntersecting;
                },
                { threshold: 0 }
              );
            e.parentElement && j.observe(e.parentElement);
            let N = 0,
              w = 0,
              k = !1;
            return (
              (N = requestAnimationFrame(function e(a) {
                if (k || ((N = requestAnimationFrame(e)), !v || a - w < c))
                  return;
                w = a;
                for (let e = 0; e < u.length; e++) u[e] *= 0.95;
                let s = 0;
                for (let e = 0; e < u.length; e++) u[e] > 0.4 && s++;
                let n = Math.min(
                  4,
                  Math.ceil(0.06 * Math.max(0, u.length * t - s))
                );
                for (let e = 0; e < n; e++)
                  u[Math.floor(Math.random() * u.length)] = 1;
                if (Math.random() < o) {
                  let e = [];
                  for (let t = 0; t < u.length; t++) u[t] > 0.6 && e.push(t);
                  if (e.length >= 2) {
                    let t = e[Math.floor(Math.random() * e.length)],
                      a = e[Math.floor(Math.random() * e.length)];
                    t !== a && h.push({ from: t, to: a, opacity: 0.35 });
                  }
                }
                for (let e = h.length - 1; e >= 0; e--)
                  (h[e].opacity *= 0.93), h[e].opacity < 0.02 && h.splice(e, 1);
                h.length > 40 && (h = h.slice(-40)), y();
              })),
              () => {
                (k = !0),
                  cancelAnimationFrame(N),
                  cancelAnimationFrame(g),
                  j.disconnect(),
                  window.removeEventListener("resize", b);
              }
            );
          }, [t, a, n, r, i, o]),
          (0, s.jsx)("canvas", {
            ref: d,
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 ".concat(c),
          })
        );
      }
      var x = a(57707);
      function u() {
        return (0, s.jsxs)("section", {
          id: "hero",
          className: "relative overflow-hidden bg-ink",
          children: [
            (0, s.jsx)(m, { className: "opacity-90", density: 0.11 }),
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 bg-settlement-glow",
            }),
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0",
              style: {
                background:
                  "linear-gradient(180deg, rgb(7 9 12 / 0.65) 0%, rgb(7 9 12 / 0.2) 35%, rgb(7 9 12 / 0.2) 65%, rgb(7 9 12 / 0.85) 100%)",
              },
            }),
            (0, s.jsxs)("div", {
              className:
                "relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-28 md:pt-36 lg:grid-cols-[1fr_1.05fr] lg:gap-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "relative z-10",
                  children: [
                    (0, s.jsx)(o, {
                      index: "H0",
                      label: "Tessera Credit \xb7 Live on Base",
                    }),
                    (0, s.jsxs)("h1", {
                      className:
                        "mt-7 max-w-2xl font-display text-[clamp(2.4rem,5.8vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.035em] text-bone",
                      children: [
                        "The First Credit",
                        (0, s.jsx)("br", {}),
                        "Card",
                        " ",
                        (0, s.jsxs)("span", {
                          className: "gradient-text-warm",
                          children: [
                            "Built For",
                            (0, s.jsx)("br", {}),
                            "AI Agents.",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ash md:text-lg",
                      children: [
                        "Tessera Credit is a USDC line of credit on Base, underwritten on-chain from your agent’s settlement history.",
                        " ",
                        (0, s.jsx)("span", {
                          className: "text-bone",
                          children: "Draw, spend, repay, all programmable.",
                        }),
                        " ",
                        "Limits earn themselves.",
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "mt-9 flex flex-col gap-3 sm:flex-row",
                      children: [
                        (0, s.jsxs)("a", {
                          href: "/demo",
                          className:
                            "btn-lumen focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.18em]",
                          children: [
                            "Try the demo",
                            (0, s.jsx)("span", {
                              "aria-hidden": !0,
                              children: "→",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/#how",
                          className:
                            "btn-ghost focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.18em]",
                          children: [
                            "See how it works",
                            (0, s.jsx)("span", {
                              "aria-hidden": !0,
                              children: "↓",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mt-14 grid grid-cols-1 gap-x-10 gap-y-5 border-t border-smoke pt-7 sm:grid-cols-3",
                      children: [
                        (0, s.jsx)(g, {
                          label: "Asset",
                          value: "USDC",
                          sub: "native on Base",
                        }),
                        (0, s.jsx)(g, {
                          label: "Settlement",
                          value: "<60s",
                          sub: "on-chain finality",
                        }),
                        (0, s.jsx)(g, {
                          label: "Underwriting",
                          value: "On-chain",
                          sub: "from settled work",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(h, {}),
                (0, s.jsxs)("div", {
                  className:
                    "absolute bottom-6 right-6 z-20 hidden items-center gap-3 md:flex",
                  children: [
                    (0, s.jsx)(d, {
                      tone: "live",
                      pulse: !0,
                      children: "Streaming",
                    }),
                    (0, s.jsx)(b, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h() {
        return (0, s.jsxs)("div", {
          className:
            "jsx-a7367f42f039641a relative flex h-[520px] w-full items-center justify-center lg:h-[600px]",
          children: [
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "jsx-a7367f42f039641a hero-glyph-pulse pointer-events-none absolute inset-0 flex items-center justify-center",
              children: (0, s.jsx)(x.A, {
                size: 520,
                motion: "static",
                className: "text-lumen opacity-[0.07]",
              }),
            }),
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              style: {
                backgroundImage:
                  "radial-gradient(ellipse 50% 55% at 50% 50%, rgba(184,255,62,0.30), rgba(184,255,62,0.06) 45%, transparent 75%)",
              },
              className:
                "jsx-a7367f42f039641a pointer-events-none absolute inset-0",
            }),
            (0, s.jsx)("div", {
              className:
                "jsx-a7367f42f039641a pointer-events-none absolute inset-0 overflow-hidden",
              children: f.map((e, t) =>
                (0, s.jsx)(
                  "span",
                  {
                    style: {
                      top: "".concat(e.top, "%"),
                      left: "".concat(e.left, "%"),
                      width: e.size,
                      height: e.size,
                      background: "rgb(184 255 62)",
                      opacity: e.opacity,
                      boxShadow: "0 0 8px rgba(184,255,62,0.6)",
                      animationDelay: "".concat(e.delay, "s"),
                      animationDuration: "".concat(e.duration, "s"),
                    },
                    className: "jsx-a7367f42f039641a hero-tile absolute",
                  },
                  t
                )
              ),
            }),
            (0, s.jsx)(p, {}),
            (0, s.jsx)("div", {
              style: { width: "min(560px, 92%)", aspectRatio: "1 / 1" },
              className: "jsx-a7367f42f039641a hero-card-bob relative",
              children: (0, s.jsx)(i.default, {
                src: "/card-4d.png",
                alt: "Tessera Credit — the on-chain credit card for AI agents",
                width: 1254,
                height: 1254,
                priority: !0,
                quality: 95,
                sizes:
                  "(min-width: 1024px) 1200px, (min-width: 640px) 90vw, 95vw",
                className: "h-full w-full select-none",
                style: {
                  filter:
                    "drop-shadow(0 40px 70px rgba(0,0,0,0.7)) drop-shadow(0 0 90px rgba(184,255,62,0.28))",
                },
              }),
            }),
            (0, s.jsx)(r(), {
              id: "a7367f42f039641a",
              children:
                ".hero-card-bob{animation:card-bob 7s ease-in-out infinite;transform:rotate(-3deg);will-change:transform}@keyframes card-bob{0%,100%{transform:rotate(-3deg)translatey(0)}50%{transform:rotate(-3deg)translatey(-12px)}}.hero-glyph-pulse{animation:glyph-pulse 9s ease-in-out infinite}@keyframes glyph-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.85;transform:scale(1.03)}}.hero-tile{animation-name:tile-drift;animation-timing-function:ease-in-out;animation-iteration-count:infinite;will-change:transform,opacity}@keyframes tile-drift{0%,100%{transform:translate(0,0)rotate(0deg)}50%{transform:translate(8px,-14px)rotate(45deg)}}@media(prefers-reduced-motion:reduce){.hero-card-bob,.hero-glyph-pulse,.hero-tile{animation:none!important}}",
            }),
          ],
        });
      }
      function p() {
        let e =
          "absolute h-10 w-10 border-lumen/40 transition-opacity duration-700 pointer-events-none";
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: "".concat(e, " left-0 top-0 border-l-2 border-t-2"),
            }),
            (0, s.jsx)("div", {
              className: "".concat(e, " right-0 top-0 border-r-2 border-t-2"),
            }),
            (0, s.jsx)("div", {
              className: "".concat(e, " bottom-0 left-0 border-b-2 border-l-2"),
            }),
            (0, s.jsx)("div", {
              className: "".concat(
                e,
                " bottom-0 right-0 border-b-2 border-r-2"
              ),
            }),
          ],
        });
      }
      let f = [
        { top: 10, left: 8, size: 6, opacity: 0.7, delay: 0, duration: 8 },
        { top: 22, left: 92, size: 5, opacity: 0.5, delay: 1.5, duration: 10 },
        { top: 78, left: 6, size: 4, opacity: 0.5, delay: 2.5, duration: 9 },
        { top: 86, left: 88, size: 7, opacity: 0.8, delay: 0.8, duration: 11 },
        { top: 50, left: 2, size: 4, opacity: 0.4, delay: 4, duration: 12 },
        { top: 5, left: 70, size: 5, opacity: 0.6, delay: 3, duration: 9 },
      ];
      function g(e) {
        let { label: t, value: a, sub: n } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className:
                "font-mono text-[10px] uppercase tracking-[0.2em] text-mute",
              children: t,
            }),
            (0, s.jsx)("div", {
              className:
                "num mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-bone md:text-3xl",
              children: a,
            }),
            (0, s.jsx)("div", {
              className:
                "mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
              children: n,
            }),
          ],
        });
      }
      function b() {
        let [e, t] = (0, l.useState)(0x1a8d2d7);
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => t((e) => e + 1), 2e3);
            return () => clearInterval(e);
          }, []),
          (0, s.jsxs)("span", {
            className:
              "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
            children: [
              "base \xb7 mainnet \xb7 block",
              " ",
              (0, s.jsx)("span", {
                className: "num text-bone",
                children: e.toLocaleString(),
              }),
            ],
          })
        );
      }
    },
    63005: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => r });
      var s = a(73365),
        n = a(1521);
      function r(e) {
        let { children: t, className: a = "", delay: r = 0, as: i = "div" } = e,
          l = (0, n.useRef)(null),
          [o, c] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = l.current;
            if (!e) return;
            let t = new IntersectionObserver(
              (e) => {
                for (let a of e)
                  a.isIntersecting && (c(!0), t.unobserve(a.target));
              },
              { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, s.jsx)(i, {
            ref: l,
            className: "reveal"
              .concat(o ? " is-visible" : "")
              .concat(r > 0 ? " reveal-delay-".concat(r) : "", " ")
              .concat(a),
            children: t,
          })
        );
      }
    },
    77948: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var s = a(73365),
        n = a(1521),
        r = a(63005);
      let i = [
        {
          title: "Invoices",
          status: "building",
          shipDate: "Building",
          blurb:
            "Settlement for retainer, project, and performance-based agent commerce. Originator gets paid in seconds; buyer pays at maturity; lenders earn the spread.",
          bullets: [
            "Routes parked while Credit ships first",
            "Discount-priced notes, 7–60 day tenor",
            "Lender vault (ERC-4626), 25–30% target APY",
            "Public ledger of every settlement",
          ],
          steps: [
            {
              label: "Created",
              caption: "Originator creates the invoice on-chain.",
            },
            {
              label: "Funded",
              caption: "Lender pays $970 to the originator (3% discount).",
            },
            {
              label: "Maturity",
              caption: "Buyer repays $1,000 to the vault at maturity.",
            },
            {
              label: "Settled",
              caption: "Lender earns +$30 spread. NAV per share ticks up.",
            },
          ],
          Diagram: function (e) {
            let { step: t } = e,
              a = 0 === t,
              n = !a && t >= 1,
              r = t >= 4,
              i = { x: 55, y: 45 },
              l = { x: 225, y: 45 },
              o = { x: 140, y: 160 };
            return (0, s.jsxs)("svg", {
              viewBox: "0 0 280 200",
              width: "100%",
              height: "100%",
              "aria-hidden": !0,
              role: "img",
              children: [
                (0, s.jsx)(d, {
                  ...i,
                  label: "ORIG",
                  sub: "agent",
                  active: n || r,
                  pulse: 1 === t,
                }),
                (0, s.jsx)(d, {
                  ...l,
                  label: "BUY",
                  sub: "agent",
                  active: t >= 3 || r,
                  pulse: 3 === t,
                }),
                (0, s.jsx)(d, {
                  ...o,
                  label: "VAULT",
                  sub: "lenders",
                  active: t >= 2 || r,
                  pulse: 2 === t || 4 === t,
                }),
                (0, s.jsx)(x, {
                  from: { x: o.x - 20, y: o.y - 18 },
                  to: { x: i.x + 18, y: i.y + 18 },
                  ambient: a,
                  active: t >= 2,
                  label: "funded",
                  labelPos: { x: 75, y: 110 },
                }),
                (0, s.jsx)(x, {
                  from: { x: l.x - 18, y: l.y + 18 },
                  to: { x: o.x + 20, y: o.y - 18 },
                  ambient: a,
                  active: t >= 3,
                  label: "repay",
                  labelPos: { x: 205, y: 110 },
                }),
              ],
            });
          },
        },
        {
          title: "Escrow",
          status: "building",
          shipDate: "Building \xb7 Q2 26",
          blurb:
            "Deliverable-locked payment for one-off agent hires. Buyer locks USDC; seller delivers; auto-release on timeout if buyer ghosts. No human arbiter.",
          bullets: [
            "Single contract, single shareable link",
            "Permit2 single-tx funding",
            "Configurable timeout, 1h to 30d",
            "Reputation accrues alongside invoices",
          ],
          steps: [
            {
              label: "Locked",
              caption: "Buyer locks $50 USDC in the escrow contract.",
            },
            {
              label: "Delivered",
              caption: "Seller delivers the deliverable off-chain.",
            },
            {
              label: "Released",
              caption: "Buyer releases - $50 flows to seller.",
            },
          ],
          Diagram: function (e) {
            let { step: t } = e,
              a = 0 === t,
              n = { x: 50, y: 100 },
              r = { x: 140, y: 100 },
              i = { x: 230, y: 100 };
            return (0, s.jsxs)("svg", {
              viewBox: "0 0 280 200",
              width: "100%",
              height: "100%",
              "aria-hidden": !0,
              role: "img",
              children: [
                (0, s.jsx)(d, {
                  ...n,
                  label: "BUY",
                  sub: "agent",
                  active: t >= 1,
                  pulse: 1 === t,
                }),
                (0, s.jsx)(m, {
                  ...r,
                  active: t >= 1,
                  pulse: 1 === t || 3 === t,
                }),
                (0, s.jsx)(d, {
                  ...i,
                  label: "SELL",
                  sub: "agent",
                  active: t >= 2,
                  pulse: 2 === t || 3 === t,
                }),
                (0, s.jsx)(x, {
                  from: { x: n.x + 32, y: n.y },
                  to: { x: r.x - 32, y: r.y },
                  ambient: a,
                  active: t >= 1,
                  label: "lock",
                  labelPos: { x: 95, y: 75 },
                }),
                (0, s.jsx)(x, {
                  from: { x: r.x + 32, y: r.y },
                  to: { x: i.x - 32, y: i.y },
                  ambient: a,
                  active: t >= 3,
                  label: "release",
                  labelPos: { x: 185, y: 75 },
                }),
              ],
            });
          },
        },
        {
          title: "Reputation",
          status: "cross-cutting",
          shipDate: "Built in",
          blurb:
            "Every settlement and every release is a permanent, queryable on-chain credential. Built from real activity, not vanity metrics - citable across protocols.",
          bullets: [
            "Repayment rate, dispute rate, volume",
            "Counterparty distinctness tracked",
            "Public profile at /a/<address>",
            "Free, queryable via the subgraph",
          ],
          steps: [
            {
              label: "Invoice repaid",
              caption:
                "Originator's first invoice settles. +1 to repayment record.",
            },
            {
              label: "Escrow released",
              caption: "Counterparty confirms delivery. +1 to delivery record.",
            },
            {
              label: "Zero defaults",
              caption: "Six months in, defaults stay at zero.",
            },
            {
              label: "Score visible",
              caption: "Public profile cites the score across protocols.",
            },
          ],
          Diagram: function (e) {
            let { step: t } = e,
              a = 0 === t;
            return (0, s.jsxs)("svg", {
              viewBox: "0 0 280 200",
              width: "100%",
              height: "100%",
              "aria-hidden": !0,
              role: "img",
              children: [
                (0, s.jsx)("defs", {
                  children: (0, s.jsxs)("radialGradient", {
                    id: "rep-glow",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    children: [
                      (0, s.jsx)("stop", {
                        offset: "0%",
                        stopColor: "currentColor",
                        stopOpacity: "0.45",
                      }),
                      (0, s.jsx)("stop", {
                        offset: "100%",
                        stopColor: "currentColor",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)("g", {
                  className: "text-lumen",
                  children: [
                    (0, s.jsx)("circle", {
                      cx: 140,
                      cy: 100,
                      r: a ? 36 : 36 + 5 * t,
                      fill: "url(#rep-glow)",
                      opacity: a ? 0.4 : 0.5 + 0.12 * t,
                      style: { transition: "all 0.6s ease" },
                    }),
                    (0, s.jsx)("circle", {
                      cx: 140,
                      cy: 100,
                      r: "22",
                      fill: "rgb(7 9 12 / 0.7)",
                      stroke: "currentColor",
                      strokeWidth: a ? 1 : 1.5 + 0.3 * t,
                      opacity: 1,
                      style: { transition: "all 0.6s ease" },
                    }),
                    (0, s.jsx)("text", {
                      x: 140,
                      y: 104,
                      textAnchor: "middle",
                      fontSize: "11",
                      fontWeight: "600",
                      fill: "currentColor",
                      className: "font-mono",
                      children: "AGENT",
                    }),
                  ],
                }),
                [
                  { x: 40, y: 40, label: "repaid", anchor: "start" },
                  { x: 240, y: 40, label: "released", anchor: "end" },
                  { x: 40, y: 160, label: "0 defaults", anchor: "start" },
                  { x: 240, y: 160, label: "score+", anchor: "end" },
                ].map((e, n) => {
                  let r = !a && n + 1 <= t;
                  return (0, s.jsxs)(
                    "g",
                    {
                      className: r ? "text-lumen" : "text-mute",
                      children: [
                        (0, s.jsx)("line", {
                          x1: e.x,
                          y1: e.y,
                          x2: 140,
                          y2: 100,
                          stroke: "currentColor",
                          strokeOpacity: r ? 0.7 : 0.25,
                          strokeWidth: r ? 1.1 : 0.6,
                          strokeDasharray: r ? "4 3" : "1 2",
                          className: r ? "animate-dash-flow" : void 0,
                          style: { transition: "stroke-opacity 0.4s ease" },
                        }),
                        (0, s.jsx)("circle", {
                          cx: e.x,
                          cy: e.y,
                          r: r ? 3.5 : 2.4,
                          fill: "currentColor",
                          style: { transition: "r 0.3s ease" },
                        }),
                        (0, s.jsx)("text", {
                          x: "start" === e.anchor ? e.x + 8 : e.x - 8,
                          y: e.y + 3,
                          textAnchor: e.anchor,
                          fontSize: "11",
                          fill: "currentColor",
                          opacity: r ? 1 : 0.6,
                          className: "font-mono",
                          style: { transition: "opacity 0.3s ease" },
                          children: e.label,
                        }),
                      ],
                    },
                    n
                  );
                }),
              ],
            });
          },
        },
      ];
      function l() {
        return (0, s.jsxs)("section", {
          id: "primitives",
          className: "relative overflow-hidden bg-ink",
          children: [
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 bg-engrave opacity-30",
            }),
            (0, s.jsxs)("div", {
              className: "relative mx-auto max-w-6xl px-6 py-24",
              children: [
                (0, s.jsx)(r.default, {
                  children: (0, s.jsx)("p", {
                    className:
                      "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                    children: "The three primitives",
                  }),
                }),
                (0, s.jsx)(r.default, {
                  delay: 1,
                  children: (0, s.jsxs)("h2", {
                    className:
                      "mt-3 max-w-3xl font-display text-4xl font-medium tracking-[-0.03em] text-bone md:text-5xl",
                    children: [
                      "Settlement. Escrow. Reputation.",
                      " ",
                      (0, s.jsx)("span", {
                        className: "gradient-text-warm",
                        children: "Three rails, one protocol.",
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(r.default, {
                  delay: 2,
                  children: (0, s.jsx)("p", {
                    className: "mt-5 max-w-2xl text-ash",
                    children:
                      "Each diagram plays the actual product lifecycle on click. Watch the invoice settle, the escrow release, or reputation accrue from real on-chain events.",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "mt-14 grid gap-5 md:grid-cols-3",
                  children: i.map((e, t) =>
                    (0, s.jsx)(
                      r.default,
                      {
                        delay: (t % 3) + 1,
                        className:
                          "card-hover relative rounded-sm border border-smoke bg-obsidian/40 p-9 transition-colors hover:border-lumen/30 hover:bg-obsidian/60 md:p-10",
                        children: (0, s.jsx)(o, { primitive: e }),
                      },
                      e.title
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function o(e) {
        let { primitive: t } = e,
          { Diagram: a, steps: r } = t,
          [i, l] = (0, n.useState)(0),
          [o, d] = (0, n.useState)(!1),
          m = (0, n.useRef)(null);
        (0, n.useEffect)(
          () => () => {
            m.current && clearTimeout(m.current);
          },
          []
        );
        let x = 0 === i,
          u = !o && i >= r.length,
          h = x ? null : r[Math.min(i, r.length) - 1];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, s.jsx)(c, { status: t.status }),
                (0, s.jsx)("span", {
                  className:
                    "font-mono text-[9px] uppercase tracking-[0.18em] text-mute",
                  children: t.shipDate,
                }),
              ],
            }),
            (0, s.jsx)("h3", {
              className:
                "mt-7 font-display text-[2.25rem] font-medium leading-[1.05] tracking-[-0.02em] text-bone",
              children: t.title,
            }),
            (0, s.jsx)("p", {
              className: "mt-4 text-[15px] leading-relaxed text-ash",
              children: t.blurb,
            }),
            (0, s.jsxs)("button", {
              type: "button",
              onClick: o
                ? void 0
                : u
                ? function () {
                    m.current && clearTimeout(m.current), d(!1), l(0);
                  }
                : function () {
                    m.current && clearTimeout(m.current),
                      d(!0),
                      l(1),
                      (function e(t) {
                        if (t >= r.length) return void d(!1);
                        m.current = setTimeout(() => {
                          l(t + 1), e(t + 1);
                        }, 1400);
                      })(1);
                  },
              disabled: o,
              "aria-label": x ? "Play lifecycle" : u ? "Replay" : "Playing",
              className:
                "focus-ring group mt-7 flex w-full flex-col items-center gap-4 rounded-sm border border-smoke/60 bg-ink/40 py-5 hover:border-lumen/30 disabled:cursor-default",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative flex h-[180px] w-full items-center justify-center px-3",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "h-full w-full max-w-[300px] [&>svg]:h-full [&>svg]:w-full",
                      children: (0, s.jsx)(a, { step: i }),
                    }),
                    x &&
                      (0, s.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-0 flex items-end justify-center pb-3",
                        children: (0, s.jsx)("span", {
                          className:
                            "rounded-full border border-lumen/50 bg-ink/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-lumen opacity-95 transition-opacity group-hover:opacity-100",
                          children: "▶ Click to play",
                        }),
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: r.map((e, t) => {
                    let a = !x && t + 1 <= i;
                    return (0, s.jsx)(
                      "span",
                      {
                        className:
                          "h-1.5 w-7 rounded-full transition-colors " +
                          (a ? "bg-lumen" : "bg-smoke"),
                        "aria-hidden": !0,
                      },
                      t
                    );
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "min-h-[58px] w-full px-4 text-center",
                  children: h
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                            children: [
                              Math.min(i, r.length),
                              " / ",
                              r.length,
                              " \xb7 ",
                              h.label,
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "mt-1.5 text-[13.5px] leading-snug text-bone",
                            children: h.caption,
                          }),
                        ],
                      })
                    : (0, s.jsx)("div", {
                        className:
                          "font-mono text-[11px] uppercase tracking-[0.2em] text-mute",
                        children: "Lifecycle preview \xb7 click to play",
                      }),
                }),
                u &&
                  (0, s.jsx)("span", {
                    className:
                      "font-mono text-[11px] uppercase tracking-[0.2em] text-lumen",
                    children: "↻ Replay",
                  }),
              ],
            }),
            (0, s.jsx)("ul", {
              className: "mt-5 space-y-2 border-t border-smoke pt-5",
              children: t.bullets.map((e) =>
                (0, s.jsxs)(
                  "li",
                  {
                    className:
                      "flex items-start gap-2.5 font-mono text-[12px] leading-snug text-ash",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-lumen",
                        "aria-hidden": !0,
                      }),
                      e,
                    ],
                  },
                  e
                )
              ),
            }),
          ],
        });
      }
      function c(e) {
        let { status: t } = e;
        return (0, s.jsxs)("span", {
          className:
            "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ".concat(
              "live" === t
                ? "border-lumen/40 bg-lumen/5 text-lumen"
                : "building" === t
                ? "border-amber-500/40 bg-amber-500/5 text-amber-200"
                : "border-smoke bg-ink/40 text-ash"
            ),
          children: [
            (0, s.jsx)("span", {
              className:
                "h-1 w-1 rounded-full " +
                ("live" === t
                  ? "bg-lumen animate-glow-pulse"
                  : "building" === t
                  ? "bg-amber-300"
                  : "bg-ash"),
              "aria-hidden": !0,
            }),
            "live" === t
              ? "Live"
              : "building" === t
              ? "Building"
              : "Cross-cutting",
          ],
        });
      }
      function d(e) {
        let { x: t, y: a, label: n, sub: r, active: i, pulse: l } = e;
        return (0, s.jsxs)("g", {
          className: i ? "text-lumen" : "text-bone",
          style: {
            transition: "color 0.3s ease",
            transformOrigin: "".concat(t, "px ").concat(a, "px"),
          },
          children: [
            (0, s.jsx)("rect", {
              x: t - 32,
              y: a - 18,
              width: 64,
              height: 36,
              rx: "3",
              fill: i ? "currentColor" : "none",
              fillOpacity: 0.1 * !!i,
              stroke: "currentColor",
              strokeWidth: i ? 1.6 : 1.2,
              className: l ? "origin-center animate-node-pulse" : void 0,
            }),
            (0, s.jsx)("text", {
              x: t,
              y: a + 4,
              textAnchor: "middle",
              fontSize: "13",
              fontWeight: "600",
              fill: "currentColor",
              className: "font-mono",
              children: n,
            }),
            (0, s.jsx)("text", {
              x: t,
              y: a + 18 + 12,
              textAnchor: "middle",
              fontSize: "9",
              fill: "currentColor",
              opacity: "0.55",
              className: "font-mono",
              children: r,
            }),
          ],
        });
      }
      function m(e) {
        let { x: t, y: a, active: n, pulse: r } = e;
        return (0, s.jsxs)("g", {
          className: "text-lumen",
          style: { transformOrigin: "".concat(t, "px ").concat(a, "px") },
          children: [
            (0, s.jsx)("rect", {
              x: t - 32,
              y: a - 18,
              width: 64,
              height: 36,
              rx: "3",
              fill: n ? "currentColor" : "none",
              fillOpacity: 0.1 * !!n,
              stroke: "currentColor",
              strokeWidth: n ? 1.6 : 1.2,
              strokeDasharray: "3 2",
              className: r ? "origin-center animate-node-pulse" : void 0,
            }),
            (0, s.jsx)("text", {
              x: t,
              y: a + 4,
              textAnchor: "middle",
              fontSize: "11",
              fontWeight: "600",
              fill: "currentColor",
              className: "font-mono",
              children: "ESCROW",
            }),
          ],
        });
      }
      function x(e) {
        let {
            from: t,
            to: a,
            ambient: n,
            active: r,
            label: i,
            labelPos: l,
          } = e,
          o = Math.atan2(a.y - t.y, a.x - t.x),
          c = a.x - 7 * Math.cos(o - 0.5),
          d = a.y - 7 * Math.sin(o - 0.5),
          m = a.x - 7 * Math.cos(o + 0.5),
          x = a.y - 7 * Math.sin(o + 0.5),
          u = r || n;
        return (0, s.jsxs)("g", {
          className: r || n ? "text-lumen" : "text-ash",
          style: { transition: "opacity 0.4s ease" },
          opacity: r ? 1 : n ? 0.45 : 0.7,
          children: [
            (0, s.jsx)("line", {
              x1: t.x,
              y1: t.y,
              x2: a.x,
              y2: a.y,
              stroke: "currentColor",
              strokeWidth: r ? 1.8 : 1.3,
              strokeDasharray: u ? "5 4" : void 0,
              className: u ? "animate-dash-flow" : void 0,
              style: { transition: "stroke-width 0.3s ease" },
            }),
            (0, s.jsx)("polygon", {
              points: ""
                .concat(a.x, ",")
                .concat(a.y, " ")
                .concat(c, ",")
                .concat(d, " ")
                .concat(m, ",")
                .concat(x),
              fill: "currentColor",
            }),
            i &&
              l &&
              (0, s.jsx)("text", {
                x: l.x,
                y: l.y,
                fontSize: "11",
                fontWeight: "500",
                fill: "currentColor",
                textAnchor: "middle",
                className: "font-mono",
                children: i,
              }),
          ],
        });
      }
    },
    78081: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var s = a(73365),
        n = a(1521),
        r = a(26146);
      function i(e) {
        return e.toLocaleString("en-US", { maximumFractionDigits: 0 });
      }
      function l() {
        let [e, t] = (0, n.useState)(12400),
          [a, l] = (0, n.useState)(94),
          x = (0, n.useMemo)(
            () =>
              (function (e, t) {
                let a = Math.max(50, e / 30);
                return (
                  50 * Math.round(Math.min(5e4, 0.4 * e + 8 * a + 5e3 * t) / 50)
                );
              })(e, a / 100),
            [e, a]
          ),
          u = Math.max(50, Math.round(e / 30)),
          h = 5e4 - x;
        return (0, s.jsx)("section", {
          id: "try",
          className: "relative bg-ink",
          children: (0, s.jsxs)("div", {
            className: "mx-auto max-w-6xl px-6 py-28",
            children: [
              (0, s.jsx)("h2", {
                className:
                  "max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone md:text-5xl",
                children: "See your line in 30 seconds.",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-12 overflow-hidden rounded-sm border border-lumen/40 bg-gradient-to-br from-obsidian to-ink",
                children: [
                  (0, s.jsxs)("div", {
                    className: "grid grid-cols-1 gap-0 lg:grid-cols-[1fr_auto]",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "border-b border-smoke p-8 md:p-10 lg:border-b-0 lg:border-r",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "font-mono text-[10px] uppercase tracking-[0.22em] text-lumen",
                            children:
                              "Live underwriter \xb7 the formula that runs on-chain",
                          }),
                          (0, s.jsxs)("h3", {
                            className:
                              "mt-3 font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-bone md:text-3xl",
                            children: [
                              "Settle more.",
                              " ",
                              (0, s.jsx)("span", {
                                className: "gradient-text-warm",
                                children: "Borrow more.",
                              }),
                            ],
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "mt-3 max-w-lg text-sm leading-relaxed text-ash",
                            children:
                              "Limits are computed live from settlement history. Pull the sliders to see how your agent’s on-chain track record shapes the line it can draw against.",
                          }),
                          (0, s.jsxs)("div", {
                            className: "mt-8 space-y-6",
                            children: [
                              (0, s.jsx)(o, {
                                label: "Lifetime settled volume",
                                value: e,
                                min: 0,
                                max: 5e4,
                                step: 500,
                                onChange: t,
                                display: "$".concat(i(e)),
                                sub: "USD across all settled invoices",
                              }),
                              (0, s.jsx)(o, {
                                label: "On-time repayment rate",
                                value: a,
                                min: 50,
                                max: 100,
                                step: 1,
                                onChange: l,
                                display: "".concat(a, "%"),
                                sub: "share of invoices paid on or before maturity",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "mt-8 grid grid-cols-3 gap-4 border-t border-smoke pt-6",
                            children: [
                              (0, s.jsx)(c, {
                                label: "Avg invoice",
                                value: "$".concat(i(u)),
                              }),
                              (0, s.jsx)(c, {
                                label: "Limit utilization cap",
                                value: "$".concat(i(x)),
                              }),
                              (0, s.jsx)(c, {
                                label: "Headroom to $50k",
                                value: "$".concat(i(h)),
                                emphasize: 0 === h,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center gap-4 bg-obsidian/40 p-8 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "font-mono text-[10px] uppercase tracking-[0.22em] text-mute",
                            children: "Live limit",
                          }),
                          (0, s.jsx)(r.A, {
                            limit: x,
                            address:
                              "0xA1C3E73d2F4B5e9A2c84B19FbeC6a0fE73d2F4B5",
                            name: "your-agent",
                            size: "sm",
                            interactive: !0,
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "num font-display text-3xl font-medium tracking-[-0.03em] text-lumen",
                            children: ["$", i(x)],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
                            children: "Underwritten in real time",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "border-t border-smoke bg-ink/60 px-8 py-3 md:px-10",
                    children: (0, s.jsx)("code", {
                      className:
                        "font-mono text-[10px] uppercase tracking-[0.18em] text-ash",
                      children:
                        "limit = min($50k, volume \xd7 0.40 + avgInvoice \xd7 8 + repayRate \xd7 $5k)",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "mt-14",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "font-mono text-[10px] uppercase tracking-[0.22em] text-mute",
                    children: "Tessera is more than the card",
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-5 grid grid-cols-1 gap-3 md:grid-cols-3",
                    children: [
                      (0, s.jsx)(m, {
                        tag: "Credit",
                        title: "The credit card built for AI agents.",
                        body: "USDC line on Base, underwritten on-chain from settlement history.",
                        href: "/demo",
                        cta: "You're here",
                        active: !0,
                      }),
                      (0, s.jsx)(m, {
                        tag: "Vault",
                        title: "Lend the float. Earn the spread.",
                        body: "Deposit USDC; capital funds agent draws; spread accrues to share NAV. Tessera, building the aave for AI agents.",
                        href: "/vault",
                        cta: "In development",
                        building: !0,
                      }),
                      (0, s.jsx)(m, {
                        tag: "Pay",
                        title: "Shareable USDC pay-me links.",
                        body: "Direct USDC transfer on Base. The on-ramp to credit history.",
                        href: "/pay-me",
                        cta: "In development",
                        building: !0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "relative mt-14 overflow-hidden rounded-sm border border-lumen/45 bg-gradient-to-br from-lumen/[0.08] via-lumen/[0.04] to-transparent p-8 md:p-12",
                children: [
                  (0, s.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lumen/20 blur-3xl",
                  }),
                  (0, s.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-lumen/80 via-lumen/40 to-transparent",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-2 rounded-sm border border-lumen/40 bg-lumen/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-lumen",
                            children: [
                              (0, s.jsx)("span", {
                                className: "relative inline-block h-1 w-1",
                                children: (0, s.jsx)("span", {
                                  className:
                                    "absolute inset-0 rounded-full bg-lumen animate-glow-pulse",
                                }),
                              }),
                              "The full demo",
                            ],
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "mt-4 max-w-xl font-display text-2xl font-medium leading-[1.1] tracking-[-0.02em] text-bone md:text-3xl",
                            children: "Ready for the full experience?",
                          }),
                          (0, s.jsxs)("p", {
                            className:
                              "mt-3 max-w-xl text-[15px] leading-relaxed text-ash",
                            children: [
                              "The complete playground at",
                              " ",
                              (0, s.jsx)("code", {
                                className:
                                  "rounded-sm border border-lumen/30 bg-lumen/10 px-1.5 py-0.5 font-mono text-[12px] text-lumen",
                                children: "/demo",
                              }),
                              " ",
                              "adds draw + repay simulation, activity log, and optional wallet personalization. Still simulated, still no real funds at risk.",
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mute",
                            children: [
                              (0, s.jsxs)("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "text-lumen",
                                    children: "✓",
                                  }),
                                  "No wallet required",
                                ],
                              }),
                              (0, s.jsxs)("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "text-lumen",
                                    children: "✓",
                                  }),
                                  "30 seconds end-to-end",
                                ],
                              }),
                              (0, s.jsxs)("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    className: "text-lumen",
                                    children: "✓",
                                  }),
                                  "No funds at risk",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
                        children: (0, s.jsxs)("a", {
                          href: "/demo",
                          className:
                            "btn-lumen focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em]",
                          children: [
                            "Try the demo",
                            (0, s.jsx)("span", {
                              "aria-hidden": !0,
                              children: "→",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative mt-10 border-t border-lumen/25 pt-8",
                    children: [
                      (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: "absolute left-1/2 -top-3 -translate-x-1/2",
                        children: (0, s.jsx)("div", {
                          className:
                            "flex h-6 w-6 items-center justify-center rounded-full border border-lumen/50 bg-ink text-[10px] text-lumen",
                          children: "↓",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "text-center",
                        children: (0, s.jsx)("div", {
                          className:
                            "font-mono text-[10px] uppercase tracking-[0.22em] text-lumen",
                          children: "Inside the demo, you can",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "mt-5 grid grid-cols-2 gap-3 md:grid-cols-4",
                        children: [
                          (0, s.jsx)(d, {
                            icon: "↓",
                            title: "Draw",
                            body: "Pull USDC from your line in a simulated transaction.",
                          }),
                          (0, s.jsx)(d, {
                            icon: "↑",
                            title: "Repay",
                            body: "Pay back partial or in full and watch your line free up.",
                          }),
                          (0, s.jsx)(d, {
                            icon: "∿",
                            title: "Stream history",
                            body: "Connect your wallet to prefill from your real on-chain activity.",
                          }),
                          (0, s.jsx)(d, {
                            icon: "⟳",
                            title: "Reset & replay",
                            body: "Run the flow as many times as you want. No state persists.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function o(e) {
        let {
          label: t,
          value: a,
          min: n,
          max: r,
          step: i,
          onChange: l,
          display: o,
          sub: c,
        } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-baseline justify-between gap-3",
              children: [
                (0, s.jsx)("label", {
                  className:
                    "font-mono text-[10px] uppercase tracking-[0.22em] text-mute",
                  children: t,
                }),
                (0, s.jsx)("span", {
                  className:
                    "num font-display text-xl font-medium tracking-[-0.02em] text-bone md:text-2xl",
                  children: o,
                }),
              ],
            }),
            (0, s.jsx)("input", {
              type: "range",
              min: n,
              max: r,
              step: i,
              value: a,
              onChange: (e) => l(Number.parseInt(e.target.value, 10)),
              className: "mt-2 w-full accent-lumen",
            }),
            (0, s.jsx)("div", {
              className:
                "mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-mute",
              children: c,
            }),
          ],
        });
      }
      function c(e) {
        let { label: t, value: a, emphasize: n } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", {
              className:
                "font-mono text-[9px] uppercase tracking-[0.2em] text-mute",
              children: t,
            }),
            (0, s.jsx)("div", {
              className:
                "num mt-1 font-mono text-base " +
                (n ? "text-alert" : "text-bone"),
              children: a,
            }),
          ],
        });
      }
      function d(e) {
        let { icon: t, title: a, body: n } = e;
        return (0, s.jsxs)("div", {
          className:
            "group rounded-sm border border-lumen/25 bg-lumen/[0.025] p-5 transition-colors duration-200 hover:border-lumen/50 hover:bg-lumen/[0.05]",
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-lumen",
              children: [
                (0, s.jsx)("span", {
                  "aria-hidden": !0,
                  className: "text-base leading-none",
                  children: t,
                }),
                a,
              ],
            }),
            (0, s.jsx)("p", {
              className: "mt-3 text-sm leading-relaxed text-ash",
              children: n,
            }),
          ],
        });
      }
      function m(e) {
        let t,
          {
            tag: a,
            title: n,
            body: r,
            href: i,
            cta: l,
            active: o,
            building: c,
          } = e;
        return (
          (t = o
            ? "border-lumen/50 bg-lumen/[0.05]"
            : c
            ? "border-amber-500/30 bg-amber-500/[0.03] hover:border-amber-500/50 hover:bg-amber-500/[0.06] focus-ring cursor-pointer"
            : "border-smoke bg-obsidian/40 hover:border-lumen/40 hover:bg-obsidian/60 focus-ring cursor-pointer"),
          (0, s.jsxs)(o ? "div" : "a", {
            ...(o ? {} : { href: c ? "/products" : i }),
            className: "group block border p-6 transition-all " + t,
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "font-mono text-[10px] uppercase tracking-[0.22em] " +
                      (o
                        ? "text-lumen"
                        : c
                        ? "text-amber-200/80"
                        : "text-mute"),
                    children: a,
                  }),
                  o &&
                    (0, s.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-1 rounded-sm border border-lumen/40 bg-lumen/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-lumen",
                      children: [
                        (0, s.jsx)("span", {
                          className: "relative inline-block h-1 w-1",
                          children: (0, s.jsx)("span", {
                            className:
                              "absolute inset-0 rounded-full bg-lumen animate-glow-pulse",
                          }),
                        }),
                        "Active",
                      ],
                    }),
                  c &&
                    (0, s.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-1 rounded-sm border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-amber-200",
                      children: [
                        (0, s.jsx)("span", {
                          className: "relative inline-block h-1 w-1",
                          children: (0, s.jsx)("span", {
                            className:
                              "absolute inset-0 rounded-full bg-amber-300 animate-glow-pulse",
                          }),
                        }),
                        "Building",
                      ],
                    }),
                ],
              }),
              (0, s.jsx)("h4", {
                className:
                  "mt-3 font-display text-lg font-medium leading-[1.2] tracking-[-0.015em] " +
                  (c ? "text-bone/70" : "text-bone"),
                children: n,
              }),
              (0, s.jsx)("p", {
                className:
                  "mt-2 text-sm leading-relaxed " +
                  (c ? "text-ash/60" : "text-ash"),
                children: r,
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] " +
                  (o
                    ? "text-mute"
                    : c
                    ? "text-amber-200/80 group-hover:text-amber-200 group-hover:underline"
                    : "text-lumen group-hover:underline"),
                children: [
                  l,
                  !o &&
                    (0, s.jsx)("span", { "aria-hidden": !0, children: "→" }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    e.O(0, [1191, 4022, 2347, 3131, 7358], () => e((e.s = 14432))),
      (_N_E = e.O());
  },
]);
