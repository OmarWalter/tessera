(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4219],
  {
    16723: (e, r, o) => {
      "use strict";
      o.r(r), o.d(r, { default: () => n });
      var a = o(73365);
      function n(e) {
        let { error: r, reset: o } = e;
        return (0, a.jsx)("html", {
          children: (0, a.jsx)("body", {
            style: {
              backgroundColor: "#0b0d12",
              color: "#e8e8e8",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              padding: "2rem",
              margin: 0,
              minHeight: "100vh",
            },
            children: (0, a.jsxs)("div", {
              style: { maxWidth: "960px", margin: "0 auto" },
              children: [
                (0, a.jsx)("h1", {
                  style: {
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    color: "#ff6b6b",
                  },
                  children: "Runtime error",
                }),
                (0, a.jsx)("p", {
                  style: {
                    marginBottom: "1.5rem",
                    color: "#aaa",
                    fontSize: "0.85rem",
                  },
                  children:
                    "This is the actual error normally hidden by Next's \"Application error\" fallback. Paste this whole panel to whoever's debugging.",
                }),
                (0, a.jsx)("h2", {
                  style: {
                    fontSize: "0.85rem",
                    marginTop: "1.5rem",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  },
                  children: "Message",
                }),
                (0, a.jsx)("pre", {
                  style: {
                    backgroundColor: "#1a1d24",
                    padding: "1rem",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    color: "#ffd166",
                  },
                  children: r.message || "(no message)",
                }),
                r.digest &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("h2", {
                        style: {
                          fontSize: "0.85rem",
                          marginTop: "1.5rem",
                          color: "#aaa",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                        },
                        children: "Digest",
                      }),
                      (0, a.jsx)("pre", {
                        style: {
                          backgroundColor: "#1a1d24",
                          padding: "1rem",
                          border: "1px solid #333",
                          borderRadius: "4px",
                        },
                        children: r.digest,
                      }),
                    ],
                  }),
                (0, a.jsx)("h2", {
                  style: {
                    fontSize: "0.85rem",
                    marginTop: "1.5rem",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  },
                  children: "Stack trace",
                }),
                (0, a.jsx)("pre", {
                  style: {
                    backgroundColor: "#1a1d24",
                    padding: "1rem",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontSize: "0.8rem",
                    color: "#88d8b0",
                  },
                  children: r.stack || "(no stack)",
                }),
                (0, a.jsx)("h2", {
                  style: {
                    fontSize: "0.85rem",
                    marginTop: "1.5rem",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  },
                  children: "Name",
                }),
                (0, a.jsx)("pre", {
                  style: {
                    backgroundColor: "#1a1d24",
                    padding: "1rem",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  },
                  children: r.name,
                }),
                (0, a.jsx)("button", {
                  onClick: o,
                  style: {
                    marginTop: "1.5rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "transparent",
                    color: "#bef264",
                    border: "1px solid #bef264",
                    borderRadius: "4px",
                    fontFamily: "inherit",
                    cursor: "pointer",
                  },
                  children: "Try again",
                }),
              ],
            }),
          }),
        });
      }
    },
    27215: (e, r, o) => {
      Promise.resolve().then(o.bind(o, 16723));
    },
  },
  (e) => {
    e.O(0, [2347, 3131, 7358], () => e((e.s = 27215))), (_N_E = e.O());
  },
]);
