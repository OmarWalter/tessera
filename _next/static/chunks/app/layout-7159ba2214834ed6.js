(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    952: () => {},
    23416: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 54594)),
        Promise.resolve().then(t.t.bind(t, 10140, 23)),
        Promise.resolve().then(t.t.bind(t, 21740, 23)),
        Promise.resolve().then(t.t.bind(t, 952, 23));
    },
    54594: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => v });
      var n = t(73365),
        r = t(71390),
        a = t(21474),
        i = t(1521),
        o = t(45131),
        c = t(75009),
        d = t(32544),
        l = t(41912),
        h = t(62978),
        u = t(44167),
        f = t(51843);
      let p = "61ff9cf4f18bd67d0369c97a72527733",
        m = [
          (0, h.b)({ shimDisconnect: !0 }),
          (0, u.m)({ appName: "Tessera" }),
          ...(p
            ? [
                (0, f.u)({
                  projectId: p,
                  showQrModal: !0,
                  metadata: {
                    name: "Tessera",
                    description:
                      "Settlement, escrow, and reputation rails for AI agents on Base.",
                    url: "https://tessera-frontend-mocha.vercel.app",
                    icons: [],
                  },
                }),
              ]
            : []),
        ],
        b = (0, c.Z)({
          chains: [l.E],
          connectors: m,
          transports: { [l.E.id]: (0, d.L)() },
          ssr: !0,
        });
      function v(e) {
        let { children: s } = e,
          [t] = (0, i.useState)(
            () =>
              new r.E({
                defaultOptions: {
                  queries: { staleTime: 15e3, refetchOnWindowFocus: !1 },
                },
              })
          );
        return (0, n.jsx)(o.x, {
          config: b,
          children: (0, n.jsx)(a.Ht, { client: t, children: s }),
        });
      }
    },
  },
  (e) => {
    e.O(0, [4913, 2618, 132, 2347, 3131, 7358], () => e((e.s = 23416))),
      (_N_E = e.O());
  },
]);
