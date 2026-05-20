(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [132],
  {
    1875: (e, t, r) => {
      "use strict";
      r.d(t, { b4: () => i, gU: () => o, uP: () => a });
      var n = r(76164),
        s = r(73649);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function a(e, t) {
        let r = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          ...(null != e.blockTimestamp && {
            blockTimestamp: BigInt(e.blockTimestamp),
          }),
          chainId: e.chainId ? (0, n.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, n.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? i[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (r.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (r.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof r.v) {
              if (0n === r.v || 27n === r.v) return 0;
              if (1n === r.v || 28n === r.v) return 1;
              if (r.v >= 35n) return +(r.v % 2n === 0n);
            }
          })()),
          "legacy" === r.type &&
            (delete r.accessList,
            delete r.maxFeePerBlobGas,
            delete r.maxFeePerGas,
            delete r.maxPriorityFeePerGas,
            delete r.yParity),
          "eip2930" === r.type &&
            (delete r.maxFeePerBlobGas,
            delete r.maxFeePerGas,
            delete r.maxPriorityFeePerGas),
          "eip1559" === r.type && delete r.maxFeePerBlobGas,
          r
        );
      }
      let o = (0, s.q)("transaction", a);
    },
    2096: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => o });
      var n = r(60067);
      let s = r(76364).sc;
      var i = r(97201),
        a = r(71309);
      function o(e) {
        let { commitments: t, version: r } = e,
          o = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
          c = [];
        for (let e of t)
          c.push(
            (function (e) {
              let { commitment: t, version: r = 1 } = e,
                o = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                c = (function (e, t) {
                  let r = s((0, i.q)(e, { strict: !1 }) ? (0, a.ZJ)(e) : e);
                  return "bytes" === (t || "hex") ? r : (0, n.nj)(r);
                })(t, "bytes");
              return c.set([r], 0), "bytes" === o ? c : (0, n.My)(c);
            })({ commitment: e, to: o, version: r })
          );
        return c;
      }
    },
    2116: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    3677: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => s });
      var n = r(14055);
      class s extends n.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    4962: (e, t, r) => {
      "use strict";
      function n(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      r.d(t, { J: () => n });
    },
    10140: (e) => {
      e.exports = {
        style: { fontFamily: "'GeistSans', 'GeistSans Fallback'" },
        className: "__className_245d8d",
        variable: "__variable_245d8d",
      };
    },
    11144: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => l });
      var n = r(99764),
        s = r(90213),
        i = r(78128),
        a = r(49917),
        o = r(21997),
        c = r(71309),
        u = r(60067);
      function l(e) {
        let { data: t, kzg: r, to: l } = e,
          h =
            e.blobs ??
            (function (e) {
              let t = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                r = "string" == typeof e.data ? (0, c.aT)(e.data) : e.data,
                n = (0, o.E)(r);
              if (!n) throw new i.zF();
              if (n > 761855) throw new i.iq({ maxSize: 761855, size: n });
              let s = [],
                l = !0,
                h = 0;
              for (; l; ) {
                let e = (0, a.l)(new Uint8Array(131072)),
                  t = 0;
                for (; t < 4096; ) {
                  let n = r.slice(h, h + 31);
                  if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                    e.pushByte(128), (l = !1);
                    break;
                  }
                  t++, (h += 31);
                }
                s.push(e);
              }
              return "bytes" === t
                ? s.map((e) => e.bytes)
                : s.map((e) => (0, u.My)(e.bytes));
            })({ data: t, to: l }),
          d = e.commitments ?? (0, n.S)({ blobs: h, kzg: r, to: l }),
          f = e.proofs ?? (0, s.t)({ blobs: h, commitments: d, kzg: r, to: l }),
          p = [];
        for (let e = 0; e < h.length; e++)
          p.push({ blob: h[e], commitment: d[e], proof: f[e] });
        return p;
      }
    },
    11396: (e, t, r) => {
      "use strict";
      function n(
        e,
        { errorInstance: t = Error("timed out"), timeout: r, signal: n }
      ) {
        return new Promise((s, i) => {
          (async () => {
            let a;
            try {
              let o = new AbortController();
              r > 0 &&
                (a = setTimeout(() => {
                  n ? o.abort() : i(t);
                }, r)),
                s(await e({ signal: o?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && i(t), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      r.d(t, { w: () => n });
    },
    11965: (e, t, r) => {
      "use strict";
      r.d(t, {
        $s: () => l,
        Kc: () => d,
        Kz: () => h,
        Sq: () => f,
        Vg: () => c,
        WA: () => p,
        aO: () => a,
        fZ: () => u,
        zW: () => o,
      });
      var n = r(96283),
        s = r(87829),
        i = r(14055);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
      }
      i.C;
      class o extends i.C {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class c extends i.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      i.C, i.C;
      class u extends i.C {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (e.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class l extends i.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: i,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: h,
            nonce: d,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: i && `${i?.name} (id: ${i?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, n.c)(p)} ${i?.nativeCurrency?.symbol || "ETH"}`,
                data: o,
                gas: c,
                gasPrice: void 0 !== u && `${(0, s.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, s.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== h && `${(0, s.Q)(h)} gwei`,
                nonce: d,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class h extends i.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: r,
          hash: n,
          index: s,
        }) {
          let i = "Transaction";
          r &&
            void 0 !== s &&
            (i = `Transaction at block time "${r}" at index "${s}"`),
            e &&
              void 0 !== s &&
              (i = `Transaction at block hash "${e}" at index "${s}"`),
            t &&
              void 0 !== s &&
              (i = `Transaction at block number "${t}" at index "${s}"`),
            n && (i = `Transaction with hash "${n}"`),
            super(`${i} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends i.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class f extends i.C {
        constructor({ receipt: e }) {
          super(`Transaction with hash "${e.transactionHash}" reverted.`, {
            metaMessages: [
              'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
              " ",
              "You can attempt to extract the revert reason by:",
              "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
              "- using the `call` Action with raw `data`",
            ],
            name: "TransactionReceiptRevertedError",
          }),
            Object.defineProperty(this, "receipt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.receipt = e);
        }
      }
      class p extends i.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    14055: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => i });
      let n = "2.48.11",
        s = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${n}`,
        };
      class i extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof i
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof i && t.cause.docsPath) || t.docsPath,
            o = s.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(o ? [`Docs: ${o}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(s.version ? [`Version: ${s.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = r),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = n);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    20869: (e, t, r) => {
      "use strict";
      function n(e, { args: t, eventName: r } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          blockTimestamp: e.blockTimestamp
            ? BigInt(e.blockTimestamp)
            : null === e.blockTimestamp
            ? null
            : void 0,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(r ? { args: t, eventName: r } : {}),
        };
      }
      r.d(t, { e: () => n });
    },
    21740: (e) => {
      e.exports = {
        style: {
          fontFamily:
            "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace",
        },
        className: "__className_97c177",
        variable: "__variable_97c177",
      };
    },
    21803: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function s(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function i(e, t, n, i, a) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var o = new s(n, i || e, a),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function o() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (o.prototype.eventNames = function () {
          var e,
            n,
            s = [];
          if (0 === this._eventsCount) return s;
          for (n in (e = this._events))
            t.call(e, n) && s.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? s.concat(Object.getOwnPropertySymbols(e))
            : s;
        }),
        (o.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var s = 0, i = n.length, a = Array(i); s < i; s++)
            a[s] = n[s].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (o.prototype.emit = function (e, t, n, s, i, a) {
          var o = r ? r + e : e;
          if (!this._events[o]) return !1;
          var c,
            u,
            l = this._events[o],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, n), !0;
              case 4:
                return l.fn.call(l.context, t, n, s), !0;
              case 5:
                return l.fn.call(l.context, t, n, s, i), !0;
              case 6:
                return l.fn.call(l.context, t, n, s, i, a), !0;
            }
            for (u = 1, c = Array(h - 1); u < h; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var d,
              f = l.length;
            for (u = 0; u < f; u++)
              switch (
                (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), h)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, n);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, n, s);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = Array(h - 1); d < h; d++)
                      c[d - 1] = arguments[d];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, r) {
          return i(this, e, t, r, !1);
        }),
        (o.prototype.once = function (e, t, r) {
          return i(this, e, t, r, !0);
        }),
        (o.prototype.removeListener = function (e, t, n, s) {
          var i = r ? r + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t ||
              (s && !o.once) ||
              (n && o.context !== n) ||
              a(this, i);
          else {
            for (var c = 0, u = [], l = o.length; c < l; c++)
              (o[c].fn !== t ||
                (s && !o[c].once) ||
                (n && o[c].context !== n)) &&
                u.push(o[c]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : a(this, i);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && a(this, t))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = r),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    21936: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => i });
      var n = r(52640);
      let s = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: r, wait: i = 0, sort: a }) {
        let o = async () => {
            let t = u();
            c();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let r = 0; r < t.length; r++) {
                    let { resolve: n } = t[r];
                    n?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    let { reject: n } = t[r];
                    n?.(e);
                  }
                });
          },
          c = () => s.delete(t),
          u = () => s.get(t) || [],
          l = (e) => s.set(t, [...u(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: s, reject: a } = (0, n.Y)();
            return (
              (r?.([...u().map(({ args: e }) => e), e]) && o(), u().length > 0)
                ? l({ args: e, resolve: s, reject: a })
                : (l({ args: e, resolve: s, reject: a }), setTimeout(o, i)),
              t
            );
          },
        };
      }
    },
    21997: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => s });
      var n = r(97201);
      function s(e) {
        return (0, n.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    22426: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => s });
      var n = r(16056);
      class s extends n.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      n.C;
    },
    22867: (e, t, r) => {
      "use strict";
      function n(e) {
        let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
        return Object.assign(t, {
          extend: (function e(t) {
            return (r) => {
              let n = "function" == typeof r ? r(t) : r,
                s = { ...t, ...n };
              return Object.assign(s, { extend: e(s) });
            };
          })(t),
        });
      }
      r.d(t, { x: () => n });
    },
    25415: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => o });
      var n = r(80117),
        s = r(97201),
        i = r(71309),
        a = r(60067);
      function o(e, t) {
        let r = (0, n.lY)((0, s.q)(e, { strict: !1 }) ? (0, i.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? r : (0, a.nj)(r);
      }
    },
    30849: (e, t, r) => {
      "use strict";
      r.d(t, { B4: () => s, SK: () => i, hX: () => a });
      var n = r(14055);
      class s extends n.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class i extends n.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends n.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    32544: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => h });
      var n = r(71616),
        s = r(14055);
      class i extends s.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = r(21936),
        o = r(11396),
        c = r(2116);
      let u = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var l = r(79303);
      function h(e, t = {}) {
        let {
          batch: r,
          fetchFn: s,
          fetchOptions: d,
          key: f = "http",
          methods: p,
          name: b = "HTTP JSON-RPC",
          onFetchRequest: m,
          onFetchResponse: g,
          retryDelay: y,
          raw: v,
        } = t;
        return ({ chain: h, retryCount: w, timeout: x }) => {
          let { batchSize: C = 1e3, wait: P = 0 } =
              "object" == typeof r ? r : {},
            I = t.retryCount ?? w,
            E = x ?? t.timeout ?? 1e4,
            O = e || h?.rpcUrls.default.http[0];
          if (!O) throw new i();
          let S = (function (e, t = {}) {
            let { url: r, headers: s } = (function (e) {
              try {
                let t = new URL(e),
                  r = (() => {
                    if (t.username) {
                      let e = `${decodeURIComponent(
                        t.username
                      )}:${decodeURIComponent(t.password)}`;
                      return (
                        (t.username = ""),
                        (t.password = ""),
                        {
                          url: t.toString(),
                          headers: { Authorization: `Basic ${btoa(e)}` },
                        }
                      );
                    }
                  })();
                return { url: t.toString(), ...r };
              } catch {
                return { url: e };
              }
            })(e);
            return {
              async request(e) {
                let {
                    body: i,
                    fetchFn: a = t.fetchFn ?? fetch,
                    onRequest: l = t.onRequest,
                    onResponse: h = t.onResponse,
                    timeout: d = t.timeout ?? 1e4,
                  } = e,
                  f = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
                  { headers: p, method: b, signal: m } = f;
                try {
                  let e,
                    t = await (0, o.w)(
                      async ({ signal: e }) => {
                        let t = {
                            ...f,
                            body: Array.isArray(i)
                              ? (0, c.A)(
                                  i.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? u.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: i.id ?? u.take(),
                                  ...i,
                                }),
                            headers: {
                              ...s,
                              "Content-Type": "application/json",
                              ...p,
                            },
                            method: b || "POST",
                            signal: m || (d > 0 ? e : null),
                          },
                          n = new Request(r, t),
                          o = (await l?.(n, t)) ?? { ...t, url: r };
                        return await a(o.url ?? r, o);
                      },
                      {
                        errorInstance: new n.MU({ body: i, url: r }),
                        timeout: d,
                        signal: !0,
                      }
                    );
                  if (
                    (h && (await h(t)),
                    t.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    e = await t.json();
                  else {
                    e = await t.text();
                    try {
                      e = JSON.parse(e || "{}");
                    } catch (r) {
                      if (t.ok) throw r;
                      e = { error: e };
                    }
                  }
                  if (!t.ok) {
                    if (
                      "number" == typeof e.error?.code &&
                      "string" == typeof e.error?.message
                    )
                      return e;
                    throw new n.Ci({
                      body: i,
                      details: (0, c.A)(e.error) || t.statusText,
                      headers: t.headers,
                      status: t.status,
                      url: r,
                    });
                  }
                  return e;
                } catch (e) {
                  if (e instanceof n.Ci || e instanceof n.MU) throw e;
                  throw new n.Ci({ body: i, cause: e, url: r });
                }
              },
            };
          })(O, {
            fetchFn: s,
            fetchOptions: d,
            onRequest: m,
            onResponse: g,
            timeout: E,
          });
          return (0, l.o)(
            {
              key: f,
              methods: p,
              name: b,
              async request({ method: e, params: t }) {
                let s = { method: e, params: t },
                  { schedule: i } = (0, a.u)({
                    id: O,
                    wait: P,
                    shouldSplitBatch: (e) => e.length > C,
                    fn: (e) => S.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  o = async (e) => (r ? i(e) : [await S.request({ body: e })]),
                  [{ error: c, result: u }] = await o(s);
                if (v) return { error: c, result: u };
                if (c) throw new n.J8({ body: s, error: c, url: O });
                return u;
              },
              retryCount: I,
              retryDelay: y,
              timeout: E,
              type: "http",
            },
            { fetchOptions: d, url: O }
          );
        };
      }
    },
    38930: (e, t, r) => {
      "use strict";
      r.d(t, { A1: () => u, di: () => a, iN: () => l });
      var n = r(81547),
        s = r(97201),
        i = r(21997);
      function a(e, t, r, { strict: n } = {}) {
        return (0, s.q)(e, { strict: !1 })
          ? l(e, t, r, { strict: n })
          : u(e, t, r, { strict: n });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, i.E)(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: (0, i.E)(e) });
      }
      function c(e, t, r) {
        if (
          "number" == typeof t &&
          "number" == typeof r &&
          (0, i.E)(e) !== r - t
        )
          throw new n.ii({ offset: r, position: "end", size: (0, i.E)(e) });
      }
      function u(e, t, r, { strict: n } = {}) {
        o(e, t);
        let s = e.slice(t, r);
        return n && c(s, t, r), s;
      }
      function l(e, t, r, { strict: n } = {}) {
        o(e, t);
        let s = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && c(s, t, r), s;
      }
    },
    39334: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => i, R: () => a });
      var n = r(73649),
        s = r(1875);
      function i(e, t) {
        let r = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, s.uP)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: r,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      let a = (0, n.q)("block", i);
    },
    41912: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => $ });
      var n = r(76164),
        s = r(39334),
        i = r(1875),
        a = r(61925);
      let o = {
        block: (0, s.R)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = (0, i.uP)(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? (0, n.uU)(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, i.gU)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, n.uU)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, a.WB)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, n.uU)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, n.uU)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, n.uU)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var c = r(3677),
        u = r(45746),
        l = r(82784),
        h = r(60067),
        d = r(73184),
        f = r(11965),
        p = r(99764),
        b = r(90213),
        m = r(2096),
        g = r(11144),
        y = r(74504),
        v = r(94487),
        w = r(82798),
        x = r(14055),
        C = r(78128),
        P = r(95316),
        I = r(97187),
        E = r(21997),
        O = r(38930);
      function S(e) {
        let { chainId: t, maxPriorityFeePerGas: r, maxFeePerGas: n, to: s } = e;
        if (t <= 0) throw new P.qD({ chainId: t });
        if (s && !(0, u.P)(s)) throw new c.M({ address: s });
        if (n && n > w.Ao) throw new I.BG({ maxFeePerGas: n });
        if (r && n && r > n)
          throw new I.lN({ maxFeePerGas: n, maxPriorityFeePerGas: r });
      }
      var U = r(76878);
      function A(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let r = 0; r < e.length; r++) {
          let { address: n, storageKeys: s } = e[r];
          for (let e = 0; e < s.length; e++)
            if (s[e].length - 2 != 64) throw new f.fZ({ storageKey: s[e] });
          if (!(0, u.P)(n, { strict: !1 })) throw new c.M({ address: n });
          t.push([n, s]);
        }
        return t;
      }
      function q(e, t) {
        let r = t ?? e,
          { v: n, yParity: s } = r;
        if (void 0 === r.r || void 0 === r.s || (void 0 === n && void 0 === s))
          return [];
        let i = (0, y.B)(r.r),
          a = (0, y.B)(r.s);
        return [
          "number" == typeof s
            ? s
              ? (0, h.cK)(1)
              : "0x"
            : 0n === n
            ? "0x"
            : 1n === n
            ? (0, h.cK)(1)
            : 27n === n
            ? "0x"
            : (0, h.cK)(1),
          "0x00" === i ? "0x" : i,
          "0x00" === a ? "0x" : a,
        ];
      }
      let M = {
          blockTime: 2e3,
          contracts: {
            gasPriceOracle: {
              address: "0x420000000000000000000000000000000000000F",
            },
            l1Block: { address: "0x4200000000000000000000000000000000000015" },
            l2CrossDomainMessenger: {
              address: "0x4200000000000000000000000000000000000007",
            },
            l2Erc721Bridge: {
              address: "0x4200000000000000000000000000000000000014",
            },
            l2StandardBridge: {
              address: "0x4200000000000000000000000000000000000010",
            },
            l2ToL1MessagePasser: {
              address: "0x4200000000000000000000000000000000000016",
            },
          },
          formatters: o,
          serializers: {
            transaction: function (e, t) {
              var r;
              if ("deposit" === (r = e).type || void 0 !== r.sourceHash) {
                var s = e,
                  i = s;
                let { from: t, to: r } = i;
                if (t && !(0, u.P)(t)) throw new c.M({ address: t });
                if (r && !(0, u.P)(r)) throw new c.M({ address: r });
                let {
                    sourceHash: n,
                    data: a,
                    from: o,
                    gas: f,
                    isSystemTx: p,
                    mint: b,
                    to: m,
                    value: g,
                  } = s,
                  y = [
                    n,
                    o,
                    m ?? "0x",
                    b ? (0, h.nj)(b) : "0x",
                    g ? (0, h.nj)(g) : "0x",
                    f ? (0, h.nj)(f) : "0x",
                    p ? "0x1" : "0x",
                    a ?? "0x",
                  ];
                return (0, l.aP)(["0x7e", (0, d.EQ)(y)]);
              }
              let a = (0, U.L)(e);
              return "eip1559" === a
                ? (function (e, t) {
                    let {
                      chainId: r,
                      gas: n,
                      nonce: s,
                      to: i,
                      value: a,
                      maxFeePerGas: o,
                      maxPriorityFeePerGas: c,
                      accessList: u,
                      data: f,
                    } = e;
                    S(e);
                    let p = A(u),
                      b = [
                        (0, h.cK)(r),
                        s ? (0, h.cK)(s) : "0x",
                        c ? (0, h.cK)(c) : "0x",
                        o ? (0, h.cK)(o) : "0x",
                        n ? (0, h.cK)(n) : "0x",
                        i ?? "0x",
                        a ? (0, h.cK)(a) : "0x",
                        f ?? "0x",
                        p,
                        ...q(e, t),
                      ];
                    return (0, l.aP)(["0x02", (0, d.EQ)(b)]);
                  })(e, t)
                : "eip2930" === a
                ? (function (e, t) {
                    let {
                        chainId: r,
                        gas: n,
                        data: s,
                        nonce: i,
                        to: a,
                        value: o,
                        accessList: f,
                        gasPrice: p,
                      } = e,
                      {
                        chainId: b,
                        maxPriorityFeePerGas: m,
                        gasPrice: g,
                        maxFeePerGas: y,
                        to: v,
                      } = e;
                    if (b <= 0) throw new P.qD({ chainId: b });
                    if (v && !(0, u.P)(v)) throw new c.M({ address: v });
                    if (m || y)
                      throw new x.C(
                        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                      );
                    if (g && g > w.Ao) throw new I.BG({ maxFeePerGas: g });
                    let C = A(f),
                      E = [
                        (0, h.cK)(r),
                        i ? (0, h.cK)(i) : "0x",
                        p ? (0, h.cK)(p) : "0x",
                        n ? (0, h.cK)(n) : "0x",
                        a ?? "0x",
                        o ? (0, h.cK)(o) : "0x",
                        s ?? "0x",
                        C,
                        ...q(e, t),
                      ];
                    return (0, l.aP)(["0x01", (0, d.EQ)(E)]);
                  })(e, t)
                : "eip4844" === a
                ? (function (e, t) {
                    let {
                        chainId: r,
                        gas: s,
                        nonce: i,
                        to: a,
                        value: o,
                        maxFeePerBlobGas: c,
                        maxFeePerGas: u,
                        maxPriorityFeePerGas: f,
                        accessList: y,
                        data: w,
                      } = e,
                      { blobVersionedHashes: x } = e;
                    if (x) {
                      if (0 === x.length) throw new C.zF();
                      for (let e of x) {
                        let t = (0, E.E)(e),
                          r = (0, n.ME)((0, O.di)(e, 0, 1));
                        if (32 !== t) throw new C.uP({ hash: e, size: t });
                        if (r !== v.E) throw new C.PK({ hash: e, version: r });
                      }
                    }
                    S(e);
                    let P = e.blobVersionedHashes,
                      I = e.sidecars;
                    if (e.blobs && (void 0 === P || void 0 === I)) {
                      let t =
                          "string" == typeof e.blobs[0]
                            ? e.blobs
                            : e.blobs.map((e) => (0, h.My)(e)),
                        r = e.kzg,
                        n = (0, p.S)({ blobs: t, kzg: r });
                      if (
                        (void 0 === P && (P = (0, m.d)({ commitments: n })),
                        void 0 === I)
                      ) {
                        let e = (0, b.t)({ blobs: t, commitments: n, kzg: r });
                        I = (0, g.T)({ blobs: t, commitments: n, proofs: e });
                      }
                    }
                    let U = A(y),
                      M = [
                        (0, h.cK)(r),
                        i ? (0, h.cK)(i) : "0x",
                        f ? (0, h.cK)(f) : "0x",
                        u ? (0, h.cK)(u) : "0x",
                        s ? (0, h.cK)(s) : "0x",
                        a ?? "0x",
                        o ? (0, h.cK)(o) : "0x",
                        w ?? "0x",
                        U,
                        c ? (0, h.cK)(c) : "0x",
                        P ?? [],
                        ...q(e, t),
                      ],
                      $ = [],
                      j = [],
                      T = [];
                    if (I)
                      for (let e = 0; e < I.length; e++) {
                        let { blob: t, commitment: r, proof: n } = I[e];
                        $.push(t), j.push(r), T.push(n);
                      }
                    return (0, l.aP)([
                      "0x03",
                      I ? (0, d.EQ)([M, $, j, T]) : (0, d.EQ)(M),
                    ]);
                  })(e, t)
                : "eip7702" === a
                ? (function (e, t) {
                    let {
                        authorizationList: r,
                        chainId: n,
                        gas: s,
                        nonce: i,
                        to: a,
                        value: o,
                        maxFeePerGas: f,
                        maxPriorityFeePerGas: p,
                        accessList: b,
                        data: m,
                      } = e,
                      { authorizationList: g } = e;
                    if (g)
                      for (let e of g) {
                        let { chainId: t } = e,
                          r = e.address;
                        if (!(0, u.P)(r)) throw new c.M({ address: r });
                        if (t < 0) throw new P.qD({ chainId: t });
                      }
                    S(e);
                    let y = A(b),
                      v = (function (e) {
                        if (!e || 0 === e.length) return [];
                        let t = [];
                        for (let r of e) {
                          let { chainId: e, nonce: n, ...s } = r,
                            i = r.address;
                          t.push([
                            e ? (0, h.nj)(e) : "0x",
                            i,
                            n ? (0, h.nj)(n) : "0x",
                            ...q({}, s),
                          ]);
                        }
                        return t;
                      })(r);
                    return (0, l.aP)([
                      "0x04",
                      (0, d.EQ)([
                        (0, h.cK)(n),
                        i ? (0, h.cK)(i) : "0x",
                        p ? (0, h.cK)(p) : "0x",
                        f ? (0, h.cK)(f) : "0x",
                        s ? (0, h.cK)(s) : "0x",
                        a ?? "0x",
                        o ? (0, h.cK)(o) : "0x",
                        m ?? "0x",
                        y,
                        v,
                        ...q(e, t),
                      ]),
                    ]);
                  })(e, t)
                : (function (e, t) {
                    let {
                        chainId: r = 0,
                        gas: n,
                        data: s,
                        nonce: i,
                        to: a,
                        value: o,
                        gasPrice: l,
                      } = e,
                      {
                        chainId: p,
                        maxPriorityFeePerGas: b,
                        gasPrice: m,
                        maxFeePerGas: g,
                        to: v,
                      } = e;
                    if (v && !(0, u.P)(v)) throw new c.M({ address: v });
                    if (void 0 !== p && p <= 0) throw new P.qD({ chainId: p });
                    if (b || g)
                      throw new x.C(
                        "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                      );
                    if (m && m > w.Ao) throw new I.BG({ maxFeePerGas: m });
                    let C = [
                      i ? (0, h.cK)(i) : "0x",
                      l ? (0, h.cK)(l) : "0x",
                      n ? (0, h.cK)(n) : "0x",
                      a ?? "0x",
                      o ? (0, h.cK)(o) : "0x",
                      s ?? "0x",
                    ];
                    if (t) {
                      let e = (() => {
                          if (t.v >= 35n)
                            return (t.v - 35n) / 2n > 0
                              ? t.v
                              : 27n + (35n === t.v ? 0n : 1n);
                          if (r > 0)
                            return BigInt(2 * r) + BigInt(35n + t.v - 27n);
                          let e = 27n + (27n === t.v ? 0n : 1n);
                          if (t.v !== e) throw new f.zW({ v: t.v });
                          return e;
                        })(),
                        n = (0, y.B)(t.r),
                        s = (0, y.B)(t.s);
                      C = [
                        ...C,
                        (0, h.cK)(e),
                        "0x00" === n ? "0x" : n,
                        "0x00" === s ? "0x" : s,
                      ];
                    } else r > 0 && (C = [...C, (0, h.cK)(r), "0x", "0x"]);
                    return (0, d.EQ)(C);
                  })(e, t);
            },
          },
        },
        $ = (0, r(22867).x)({
          ...M,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...M.contracts,
            disputeGameFactory: {
              1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
            },
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 0x10ac19f,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 0x10ac19f,
              },
            },
          },
          sourceId: 1,
        });
      ({
        ...$,
        experimental_preconfirmationTime: 200,
        rpcUrls: { default: { http: ["https://mainnet-preconf.base.org"] } },
      });
    },
    44167: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => c });
      var n = r(99681),
        s = r(44265),
        i = r(64622),
        a = r(45654),
        o = r(60067);
      function c(e = {}) {
        var t, u;
        let l, h, d, f, p, b, m, g, y;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, n.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, withCapabilities: t } = {}) {
                try {
                  let r = await this.getProvider(),
                    n = (
                      await r.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, i.b)(e));
                  d ||
                    ((d = this.onAccountsChanged.bind(this)),
                    r.on("accountsChanged", d)),
                    f ||
                      ((f = this.onChainChanged.bind(this)),
                      r.on("chainChanged", f)),
                    p ||
                      ((p = this.onDisconnect.bind(this)),
                      r.on("disconnect", p));
                  let s = await this.getChainId();
                  if (e && s !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: s };
                      }
                    );
                    s = t?.id ?? s;
                  }
                  return {
                    accounts: t
                      ? n.map((e) => ({ address: e, capabilities: {} }))
                      : n,
                    chainId: s,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                d && (e.removeListener("accountsChanged", d), (d = void 0)),
                  f && (e.removeListener("chainChanged", f), (f = void 0)),
                  p && (e.removeListener("disconnect", p), (p = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!h) {
                  l = new (await (async () => {
                    let { default: e } = await r
                      .e(5495)
                      .then(r.t.bind(r, 25495, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let n = l.walletExtension?.getChainId(),
                    s =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === n
                      ) || e.chains[0],
                    i = t.chainId || s?.id,
                    a = t.jsonRpcUrl || s?.rpcUrls.default.http[0];
                  h = l.makeWeb3Provider(a, i);
                }
                return h;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: r }) {
                let n = e.chains.find((e) => e.id === r);
                if (!n) throw new a.ch(new s.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, o.cK)(n.id) }],
                    }),
                    n
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, s;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : n.blockExplorers?.default.url
                        ? [n.blockExplorers?.default.url]
                        : []),
                        (s = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [n.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, o.cK)(r),
                        chainName: t?.chainName ?? n.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: s,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        n
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let r = Number(t);
                e.emitter.emit("change", { chainId: r });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let r = await this.getProvider();
                d && (r.removeListener("accountsChanged", d), (d = void 0)),
                  f && (r.removeListener("chainChanged", f), (f = void 0)),
                  p && (r.removeListener("disconnect", p), (p = void 0));
              },
            })))
          : ((u = e),
            (0, n.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, withCapabilities: t, ...r } = {}) {
                try {
                  let n = await this.getProvider(),
                    s = (
                      await n.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in r && r.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, i.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", m)),
                    g ||
                      ((g = this.onChainChanged.bind(this)),
                      n.on("chainChanged", g)),
                    y ||
                      ((y = this.onDisconnect.bind(this)),
                      n.on("disconnect", y));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return {
                    accounts: t
                      ? s.map((e) => ({ address: e, capabilities: {} }))
                      : s,
                    chainId: o,
                  };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  g && (e.removeListener("chainChanged", g), (g = void 0)),
                  y && (e.removeListener("disconnect", y), (y = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!b) {
                  let t =
                      "string" == typeof u.preference
                        ? { options: u.preference }
                        : {
                            ...u.preference,
                            options: u.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: n } = await Promise.all([
                      r.e(3615),
                      r.e(5603),
                      r.e(6170),
                    ]).then(r.bind(r, 5603));
                  b = n({
                    ...u,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return b;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: r }) {
                let n = e.chains.find((e) => e.id === r);
                if (!n) throw new a.ch(new s.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, o.cK)(n.id) }],
                    }),
                    n
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, s;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : n.blockExplorers?.default.url
                        ? [n.blockExplorers?.default.url]
                        : []),
                        (s = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [n.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, o.cK)(r),
                        chainName: t?.chainName ?? n.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: s,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        n
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let r = Number(t);
                e.emitter.emit("change", { chainId: r });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let r = await this.getProvider();
                m && (r.removeListener("accountsChanged", m), (m = void 0)),
                  g && (r.removeListener("chainChanged", g), (g = void 0)),
                  y && (r.removeListener("disconnect", y), (y = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    45654: (e, t, r) => {
      "use strict";
      r.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => d,
        G1: () => q,
        Gi: () => u,
        L5: () => E,
        MI: () => j,
        RV: () => C,
        Sf: () => x,
        WT: () => O,
        XU: () => o,
        YW: () => b,
        ab: () => m,
        bq: () => h,
        cg: () => U,
        ch: () => I,
        hA: () => f,
        hl: () => S,
        jz: () => M,
        nR: () => $,
        qZ: () => p,
        s0: () => g,
        sV: () => w,
        uL: () => A,
        vx: () => v,
        xQ: () => y,
        xq: () => P,
      });
      var n = r(14055),
        s = r(71616);
      class i extends n.C {
        constructor(
          e,
          { code: t, docsPath: r, metaMessages: n, name: i, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: i || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = i || e.name),
            (this.code = e instanceof s.J8 ? e.code : t ?? -1);
        }
      }
      class a extends i {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class o extends i {
        constructor(e) {
          super(e, {
            code: o.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends i {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends i {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class h extends i {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class d extends i {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends i {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends i {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends i {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class g extends i {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class y extends i {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class I extends a {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class O extends a {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class S extends a {
        constructor(e) {
          super(e, {
            code: S.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(S, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class U extends a {
        constructor(e) {
          super(e, {
            code: U.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(U, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class A extends a {
        constructor(e) {
          super(e, {
            code: A.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class q extends a {
        constructor(e) {
          super(e, {
            code: q.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(q, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class M extends a {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class $ extends a {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "WalletConnectSessionSettlementError",
            shortMessage: "WalletConnect session settlement failed.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 7e3,
      });
      class j extends i {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    45746: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => o });
      var n = r(60796),
        s = r(64622);
      let i = /^0x[a-fA-F0-9]{40}$/,
        a = new n.A(8192);
      function o(e, t) {
        let { strict: r = !0 } = t ?? {},
          n = `${e}.${r}`;
        if (a.has(n)) return a.get(n);
        let o =
          !!i.test(e) && (e.toLowerCase() === e || !r || (0, s.o)(e) === e);
        return a.set(n, o), o;
      }
    },
    46141: (e, t, r) => {
      "use strict";
      r.d(t, { db: () => i, eV: () => s });
      var n = r(81547);
      function s(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? i(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new n.Fl({
                  size: e.length,
                  targetSize: r,
                  type: "bytes",
                });
              let s = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let i = "right" === t;
                s[i ? n : r - n - 1] = e[i ? n : e.length - n - 1];
              }
              return s;
            })(e, { dir: t, size: r });
      }
      function i(e, { dir: t, size: r = 32 } = {}) {
        if (null === r) return e;
        let s = e.replace("0x", "");
        if (s.length > 2 * r)
          throw new n.Fl({
            size: Math.ceil(s.length / 2),
            targetSize: r,
            type: "hex",
          });
        return `0x${s["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
    },
    48159: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { L: () => i });
      let s = 256;
      function i(e = 11) {
        if (!n || s + e > 512) {
          (n = ""), (s = 0);
          for (let e = 0; e < 256; e++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(s, s++ + e);
      }
    },
    49917: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => i });
      var n = r(30849);
      let s = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new n.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function i(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(s);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(
            e.buffer ?? e,
            e.byteOffset,
            e.byteLength
          )),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
    },
    51843: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => u });
      var n = r(99681),
        s = r(22426),
        i = r(44265),
        a = r(64622),
        o = r(45654),
        c = r(60067);
      function u(e) {
        let t,
          l,
          h,
          d,
          f,
          p,
          b,
          m,
          g = e.isNewChainsStale ?? !0;
        return (0, n.U)((n) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: u.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (f || ((f = this.onConnect.bind(this)), e.on("connect", f)),
              b ||
                ((b = this.onSessionDelete.bind(this)),
                e.on("session_delete", b)));
          },
          async connect({ chainId: e, withCapabilities: t, ...r } = {}) {
            try {
              let i = await this.getProvider();
              if (!i) throw new s.N();
              p || ((p = this.onDisplayUri), i.on("display_uri", p));
              let c = e;
              if (!c) {
                let e = (await n.storage?.getItem("state")) ?? {};
                c = n.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : n.chains[0]?.id;
              }
              if (!c) throw Error("No chains found on connector.");
              let u = await this.isChainsStale();
              if ((i.session && u && (await i.disconnect()), !i.session || u)) {
                let e = n.chains.filter((e) => e.id !== c).map((e) => e.id);
                await i.connect({
                  optionalChains: [c, ...e],
                  ...("pairingTopic" in r
                    ? { pairingTopic: r.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(n.chains.map((e) => e.id));
              }
              let l = (await i.enable()).map((e) => (0, a.b)(e)),
                g = await this.getChainId();
              if (e && g !== e) {
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (
                    e.code === o.vx.code &&
                    e.cause?.message !==
                      "Missing or invalid. request() method: wallet_addEthereumChain"
                  )
                    throw e;
                  return { id: g };
                });
                g = t?.id ?? g;
              }
              return (
                p && (i.removeListener("display_uri", p), (p = void 0)),
                f && (i.removeListener("connect", f), (f = void 0)),
                h ||
                  ((h = this.onAccountsChanged.bind(this)),
                  i.on("accountsChanged", h)),
                d ||
                  ((d = this.onChainChanged.bind(this)),
                  i.on("chainChanged", d)),
                m ||
                  ((m = this.onDisconnect.bind(this)), i.on("disconnect", m)),
                b ||
                  ((b = this.onSessionDelete.bind(this)),
                  i.on("session_delete", b)),
                {
                  accounts: t
                    ? l.map((e) => ({ address: e, capabilities: {} }))
                    : l,
                  chainId: g,
                }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new o.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              d && (e?.removeListener("chainChanged", d), (d = void 0)),
                m && (e?.removeListener("disconnect", m), (m = void 0)),
                f || ((f = this.onConnect.bind(this)), e?.on("connect", f)),
                h && (e?.removeListener("accountsChanged", h), (h = void 0)),
                b && (e?.removeListener("session_delete", b), (b = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: s } = {}) {
            async function i() {
              let t = n.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: s } = await Promise.all([
                r.e(3615),
                r.e(3537),
                r.e(3787),
              ]).then(r.bind(r, 13537));
              return await s.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  n.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        r = t.rpcUrls.default.http[0];
                      if (!e.transports) return [r];
                      let n = e.transports?.[t.id]?.({ chain: t });
                      return (n?.value?.transports || [n]).map(
                        ({ value: e }) => e?.url || r
                      );
                    })({ chain: e, transports: n.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (l || (l = i()),
                (t = await l),
                t?.events.setMaxListeners(1 / 0)),
              s && (await this.switchChain?.({ chainId: s })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let r = await this.getProvider();
            if (!r) throw new s.N();
            let a = n.chains.find((e) => e.id === t);
            if (!a) throw new o.ch(new i.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let r = ({ chainId: s }) => {
                    s === t && (n.emitter.off("change", r), e());
                  };
                  n.emitter.on("change", r);
                }),
                r.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), a;
            } catch (n) {
              if (/(user rejected)/i.test(n.message)) throw new o.vx(n);
              try {
                let n, s;
                (n = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (s = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let i = {
                  blockExplorerUrls: n,
                  chainId: (0, c.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: s,
                };
                await r.request({
                  method: "wallet_addEthereumChain",
                  params: [i],
                });
                let o = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...o, t]), a;
              } catch (e) {
                throw new o.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : n.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            n.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              r = await this.getAccounts();
            n.emitter.emit("connect", { accounts: r, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), n.emitter.emit("disconnect");
            let t = await this.getProvider();
            h && (t.removeListener("accountsChanged", h), (h = void 0)),
              d && (t.removeListener("chainChanged", d), (d = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              b && (t.removeListener("session_delete", b), (b = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
          },
          onDisplayUri(e) {
            n.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "", 10)
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await n.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!g) return !1;
            let e = n.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let r = await this.getRequestedChainsIds();
            return !e.every((e) => r.includes(e));
          },
          async setRequestedChainsIds(e) {
            await n.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      u.type = "walletConnect";
    },
    52640: (e, t, r) => {
      "use strict";
      function n() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
      r.d(t, { Y: () => n });
    },
    56812: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s, R: () => n });
      let n = (e) => e,
        s = (e) => {
          try {
            let t = new URL(e);
            if (!t.username && !t.password) return e;
            return (t.username = ""), (t.password = ""), t.toString();
          } catch {
            return e;
          }
        };
    },
    60067: (e, t, r) => {
      "use strict";
      r.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => d,
        nj: () => o,
      });
      var n = r(68562),
        s = r(46141),
        i = r(76164);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function o(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? d(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, i.Sl)(r, { size: t.size }), (0, s.eV)(r, { size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += a[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size
          ? ((0, i.Sl)(n, { size: t.size }),
            (0, s.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let r,
          { signed: i, size: a } = t,
          o = BigInt(e);
        a
          ? (r = i
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof r && i ? -r - 1n : 0;
        if ((r && o > r) || o < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new n.Ty({
            max: r ? `${r}${t}` : void 0,
            min: `${c}${t}`,
            signed: i,
            size: a,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(i && o < 0
          ? (1n << BigInt(8 * a)) + BigInt(o)
          : o
        ).toString(16)}`;
        return a ? (0, s.eV)(u, { size: a }) : u;
      }
      let h = new TextEncoder();
      function d(e, t = {}) {
        return u(h.encode(e), t);
      }
    },
    60796: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      class n extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return super.has(e) && (super.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if (
            (super.has(e) && super.delete(e),
            super.set(e, t),
            this.maxSize && this.size > this.maxSize)
          ) {
            let e = super.keys().next().value;
            void 0 !== e && super.delete(e);
          }
          return this;
        }
      }
    },
    61925: (e, t, r) => {
      "use strict";
      r.d(t, { Lj: () => o, WB: () => u, uL: () => c });
      var n = r(76164),
        s = r(73649),
        i = r(20869),
        a = r(1875);
      let o = { "0x0": "reverted", "0x1": "success" };
      function c(e, t) {
        let r = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, i.e)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, n.ME)(e.transactionIndex)
            : null,
          status: e.status ? o[e.status] : null,
          type: e.type ? a.b4[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (r.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (r.blobGasUsed = BigInt(e.blobGasUsed)),
          r
        );
      }
      let u = (0, s.q)("transactionReceipt", c);
    },
    62172: (e, t, r) => {
      "use strict";
      r.d(t, {
        Vw: () => m,
        DO: () => i,
        CC: () => o,
        sd: () => a,
        Fe: () => s,
        Ht: () => c,
        uH: () => l,
        Id: () => b,
        qj: () => g,
        O8: () => h,
        po: () => y,
        Ow: () => d,
        fd: () => f,
        ZJ: () => p,
        DH: () => u,
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function s(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function a(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        s(e.outputLen), s(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        i(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      function u(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function l(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function h(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function d(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let f =
        68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
          ? (e) => e
          : function (e) {
              for (let r = 0; r < e.length; r++) {
                var t;
                e[r] =
                  (((t = e[r]) << 24) & 0xff000000) |
                  ((t << 8) & 0xff0000) |
                  ((t >>> 8) & 65280) |
                  ((t >>> 24) & 255);
              }
              return e;
            };
      function p(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          i(e),
          e
        );
      }
      function b(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          i(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, n), (n += s.length);
        }
        return r;
      }
      class m {}
      function g(e) {
        let t = (t) => e().update(p(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function y(e = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(e));
        if (n && "function" == typeof n.randomBytes)
          return Uint8Array.from(n.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    62978: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => h });
      var n = r(64622),
        s = r(45654),
        i = r(11396),
        a = r(99533),
        o = r(60067),
        c = r(44265),
        u = r(22426),
        l = r(99681);
      function h(e = {}) {
        let t,
          r,
          p,
          b,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: g } = e;
        function y() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(d[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, l.U)((l) => ({
          get icon() {
            return y().icon;
          },
          get id() {
            return y().id;
          },
          get name() {
            return y().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: h.type,
          async setup() {
            let r = await this.getProvider();
            r?.on &&
              e.target &&
              (p || ((p = this.onConnect.bind(this)), r.on("connect", p)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                r.on("accountsChanged", t)));
          },
          async connect({
            chainId: i,
            isReconnecting: a,
            withCapabilities: o,
          } = {}) {
            let c = await this.getProvider();
            if (!c) throw new u.N();
            let h = [];
            if (a) h = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await c.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (h = e[0]?.caveats?.[0]?.value?.map((e) => (0, n.b)(e)))
                  .length > 0 && (h = await this.getAccounts());
              } catch (e) {
                if (e.code === s.vx.code) throw new s.vx(e);
                if (e.code === s.qZ.code) throw e;
              }
            try {
              h?.length ||
                a ||
                (h = (await c.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, n.b)(e)
                )),
                p && (c.removeListener("connect", p), (p = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  c.on("accountsChanged", t)),
                r ||
                  ((r = this.onChainChanged.bind(this)),
                  c.on("chainChanged", r)),
                b ||
                  ((b = this.onDisconnect.bind(this)), c.on("disconnect", b));
              let u = await this.getChainId();
              if (i && u !== i) {
                let e = await this.switchChain({ chainId: i }).catch((e) => {
                  if (e.code === s.vx.code) throw e;
                  return { id: u };
                });
                u = e?.id ?? u;
              }
              return (
                m && (await l.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await l.storage?.setItem("injected.connected", !0)),
                {
                  accounts: o
                    ? h.map((e) => ({ address: e, capabilities: {} }))
                    : h,
                  chainId: u,
                }
              );
            } catch (e) {
              if (e.code === s.vx.code) throw new s.vx(e);
              if (e.code === s.qZ.code) throw new s.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new u.N();
            r && (t.removeListener("chainChanged", r), (r = void 0)),
              b && (t.removeListener("disconnect", b), (b = void 0)),
              p || ((p = this.onConnect.bind(this)), t.on("connect", p));
            try {
              await (0, i.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await l.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await l.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new u.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, n.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new u.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = y();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? f(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await l.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await l.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== g && !1 !== g) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof g ? g : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((r) => setTimeout(() => r(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new u.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let r = await this.getProvider();
            if (!r) throw new u.N();
            let n = l.chains.find((e) => e.id === t);
            if (!n) throw new s.ch(new c.nk());
            let i = new Promise((e) => {
              let r = (n) => {
                "chainId" in n &&
                  n.chainId === t &&
                  (l.emitter.off("change", r), e());
              };
              l.emitter.on("change", r);
            });
            try {
              return (
                await Promise.all([
                  r
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, o.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        l.emitter.emit("change", { chainId: t });
                    }),
                  i,
                ]),
                n
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: u, ...h } = n.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : u && (a = [u.url, ...Object.values(h).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [n.rpcUrls.default?.http[0] ?? ""]);
                  let d = {
                    blockExplorerUrls: a,
                    chainId: (0, o.cK)(t),
                    chainName: e?.chainName ?? n.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      r
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [d],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            l.emitter.emit("change", { chainId: t });
                          else
                            throw new s.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      i,
                    ]),
                    n
                  );
                } catch (e) {
                  throw new s.vx(e);
                }
              if (a.code === s.vx.code) throw new s.vx(a);
              throw new s.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (l.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await l.storage?.removeItem(`${this.id}.disconnected`));
            } else
              l.emitter.emit("change", { accounts: e.map((e) => (0, n.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            l.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let n = await this.getAccounts();
            if (0 === n.length) return;
            let s = Number(e.chainId);
            l.emitter.emit("connect", { accounts: n, chainId: s });
            let i = await this.getProvider();
            i &&
              (p && (i.removeListener("connect", p), (p = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", t)),
              r ||
                ((r = this.onChainChanged.bind(this)), i.on("chainChanged", r)),
              b || ((b = this.onDisconnect.bind(this)), i.on("disconnect", b)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (l.emitter.emit("disconnect"),
              t &&
                (r && (t.removeListener("chainChanged", r), (r = void 0)),
                b && (t.removeListener("disconnect", b), (b = void 0)),
                p || ((p = this.onConnect.bind(this)), t.on("connect", p))));
          },
        }));
      }
      h.type = "injected";
      let d = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : f(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            f(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : f(e, "isPhantom"),
        },
      };
      function f(e, t) {
        function r(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let n = e.ethereum;
        return n?.providers
          ? n.providers.find((e) => r(e))
          : n && r(n)
          ? n
          : void 0;
      }
    },
    64622: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => l, o: () => u });
      var n = r(3677),
        s = r(71309),
        i = r(25415),
        a = r(60796),
        o = r(45746);
      let c = new a.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (0, i.S)((0, s.Af)(r), "bytes"),
          a = (t ? r.substring(`${t}0x`.length) : r).split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let o = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, o), o;
      }
      function l(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new n.M({ address: e });
        return u(e, t);
      }
    },
    68388: (e, t, r) => {
      "use strict";
      r.d(t, {
        B4: () => f,
        CQ: () => w,
        CW: () => v,
        Ei: () => h,
        F8: () => x,
        P5: () => d,
        TH: () => C,
        Vl: () => g,
        Vr: () => y,
        WM: () => p,
        WQ: () => m,
        im: () => b,
        jm: () => o,
        lD: () => i,
        qh: () => l,
        rE: () => c,
        ry: () => u,
        xn: () => a,
      });
      let n = BigInt(0x100000000 - 1),
        s = BigInt(32);
      function i(e, t = !1) {
        let r = e.length,
          a = new Uint32Array(r),
          o = new Uint32Array(r);
        for (let i = 0; i < r; i++) {
          let { h: r, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & n), l: Number((e >> s) & n) }
              : { h: 0 | Number((e >> s) & n), l: 0 | Number(e & n) };
          })(e[i], t);
          [a[i], o[i]] = [r, c];
        }
        return [a, o];
      }
      let a = (e, t, r) => e >>> r,
        o = (e, t, r) => (e << (32 - r)) | (t >>> r),
        c = (e, t, r) => (e >>> r) | (t << (32 - r)),
        u = (e, t, r) => (e << (32 - r)) | (t >>> r),
        l = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        h = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        d = (e, t, r) => (e << r) | (t >>> (32 - r)),
        f = (e, t, r) => (t << r) | (e >>> (32 - r)),
        p = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        b = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function m(e, t, r, n) {
        let s = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
      }
      let g = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        y = (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
        v = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        w = (e, t, r, n, s) => (t + r + n + s + ((e / 0x100000000) | 0)) | 0,
        x = (e, t, r, n, s) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
        C = (e, t, r, n, s, i) =>
          (t + r + n + s + i + ((e / 0x100000000) | 0)) | 0;
    },
    68562: (e, t, r) => {
      "use strict";
      r.d(t, { H2: () => a, Ty: () => s, u: () => o, xO: () => i });
      var n = r(14055);
      class s extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class i extends n.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends n.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      n.C;
      class o extends n.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    71309: (e, t, r) => {
      "use strict";
      r.d(t, { Af: () => f, ZJ: () => u, aT: () => d });
      var n = r(14055),
        s = r(97201),
        i = r(46141),
        a = r(76164),
        o = r(60067);
      let c = new TextEncoder();
      function u(e, t = {}) {
        var r, n;
        return "number" == typeof e || "bigint" == typeof e
          ? ((r = e), (n = t), d((0, o.cK)(r, n)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(r, { size: t.size }),
                  (0, i.eV)(r, { size: t.size }))
                : r;
            })(e, t)
          : (0, s.q)(e)
          ? d(e, t)
          : f(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function d(e, t = {}) {
        let r = e;
        t.size &&
          ((0, a.Sl)(r, { size: t.size }),
          (r = (0, i.eV)(r, { dir: "right", size: t.size })));
        let s = r.slice(2);
        s.length % 2 && (s = `0${s}`);
        let o = s.length / 2,
          c = new Uint8Array(o);
        for (let e = 0, t = 0; e < o; e++) {
          let r = h(s.charCodeAt(t++)),
            i = h(s.charCodeAt(t++));
          if (void 0 === r || void 0 === i)
            throw new n.C(
              `Invalid byte sequence ("${s[t - 2]}${s[t - 1]}" in "${s}").`
            );
          c[e] = 16 * r + i;
        }
        return c;
      }
      function f(e, t = {}) {
        let r = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(r, { size: t.size }),
            (0, i.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    71390: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => y });
      var n = r(46835),
        s = r(14370),
        i = r(37726),
        a = r(69131);
      function o(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      var c = class extends a.k {
        #e;
        #t;
        #r;
        #n;
        #s;
        #i;
        #a;
        #o;
        constructor(e) {
          super(),
            (this.#o = !1),
            (this.#a = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.#s = e.client),
            (this.#n = this.#s.getQueryCache()),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.#t = l(this.options)),
            (this.state = e.state ?? this.#t),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get queryType() {
          return this.#e;
        }
        get promise() {
          return this.#i?.promise;
        }
        setOptions(e) {
          if (
            ((this.options = { ...this.#a, ...e }),
            e?._type && (this.#e = e._type),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let e = l(this.options);
            void 0 !== e.data &&
              (this.setState(u(e.data, e.dataUpdatedAt)), (this.#t = e));
          }
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.#n.remove(this);
        }
        setData(e, t) {
          let r = (0, n.pl)(this.state.data, e, this.options);
          return (
            this.#c({
              data: r,
              type: "success",
              dataUpdatedAt: t?.updatedAt,
              manual: t?.manual,
            }),
            r
          );
        }
        setState(e) {
          this.#c({ type: "setState", state: e });
        }
        cancel(e) {
          let t = this.#i?.promise;
          return (
            this.#i?.cancel(e), t ? t.then(n.lQ).catch(n.lQ) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        get resetState() {
          return this.#t;
        }
        reset() {
          this.destroy(), this.setState(this.resetState);
        }
        isActive() {
          return this.observers.some(
            (e) => !1 !== (0, n.nU)(e.options.enabled, this)
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === n.hT || !this.isFetched();
        }
        isFetched() {
          return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (e) => "static" === (0, n.d2)(e.options.staleTime, this)
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((e) => e.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(e = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== e &&
              (!!this.state.isInvalidated ||
                !(0, n.j3)(this.state.dataUpdatedAt, e)))
          );
        }
        onFocus() {
          let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          e?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
        }
        onOnline() {
          let e = this.observers.find((e) => e.shouldFetchOnReconnect());
          e?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.#n.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.#i &&
                (this.#o || this.#u()
                  ? this.#i.cancel({ revert: !0 })
                  : this.#i.cancelRetry()),
              this.scheduleGc()),
            this.#n.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        #u() {
          return (
            "paused" === this.state.fetchStatus &&
            "pending" === this.state.status
          );
        }
        invalidate() {
          this.state.isInvalidated || this.#c({ type: "invalidate" });
        }
        async fetch(e, t) {
          var r;
          if (
            "idle" !== this.state.fetchStatus &&
            this.#i?.status() !== "rejected"
          ) {
            if (void 0 !== this.state.data && t?.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.#i) return this.#i.continueRetry(), this.#i.promise;
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          let s = new AbortController(),
            a = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => ((this.#o = !0), s.signal),
              });
            },
            c = () => {
              let e = (0, n.ZM)(this.options, t),
                r = (() => {
                  let e = {
                    client: this.#s,
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return a(e), e;
                })();
              return ((this.#o = !1), this.options.persister)
                ? this.options.persister(e, r, this)
                : e(r);
            },
            u = (() => {
              let e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#s,
                state: this.state,
                fetchFn: c,
              };
              return a(e), e;
            })(),
            l =
              "infinite" === this.#e
                ? ((r = this.options.pages),
                  {
                    onFetch: (e, t) => {
                      let s = e.options,
                        i = e.fetchOptions?.meta?.fetchMore?.direction,
                        a = e.state.data?.pages || [],
                        c = e.state.data?.pageParams || [],
                        u = { pages: [], pageParams: [] },
                        l = 0,
                        h = async () => {
                          let t = !1,
                            h = (0, n.ZM)(e.options, e.fetchOptions),
                            d = async (r, s, i) => {
                              if (t) return Promise.reject(e.signal.reason);
                              if (null == s && r.pages.length)
                                return Promise.resolve(r);
                              let a = (() => {
                                  let r = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: s,
                                    direction: i ? "backward" : "forward",
                                    meta: e.options.meta,
                                  };
                                  return (
                                    (0, n.ox)(
                                      r,
                                      () => e.signal,
                                      () => (t = !0)
                                    ),
                                    r
                                  );
                                })(),
                                o = await h(a),
                                { maxPages: c } = e.options,
                                u = i ? n.ZZ : n.y9;
                              return {
                                pages: u(r.pages, o, c),
                                pageParams: u(r.pageParams, s, c),
                              };
                            };
                          if (i && a.length) {
                            let e = "backward" === i,
                              t = { pages: a, pageParams: c },
                              r = (
                                e
                                  ? function (e, { pages: t, pageParams: r }) {
                                      return t.length > 0
                                        ? e.getPreviousPageParam?.(
                                            t[0],
                                            t,
                                            r[0],
                                            r
                                          )
                                        : void 0;
                                    }
                                  : o
                              )(s, t);
                            u = await d(t, r, e);
                          } else {
                            let e = r ?? a.length;
                            do {
                              let e =
                                0 === l ? c[0] ?? s.initialPageParam : o(s, u);
                              if (l > 0 && null == e) break;
                              (u = await d(u, e)), l++;
                            } while (l < e);
                          }
                          return u;
                        };
                      e.options.persister
                        ? (e.fetchFn = () =>
                            e.options.persister?.(
                              h,
                              {
                                client: e.client,
                                queryKey: e.queryKey,
                                meta: e.options.meta,
                                signal: e.signal,
                              },
                              t
                            ))
                        : (e.fetchFn = h);
                    },
                  })
                : this.options.behavior;
          l?.onFetch(u, this),
            (this.#r = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !== u.fetchOptions?.meta) &&
              this.#c({ type: "fetch", meta: u.fetchOptions?.meta }),
            (this.#i = (0, i.II)({
              initialPromise: t?.initialPromise,
              fn: u.fetchFn,
              onCancel: (e) => {
                e instanceof i.cc &&
                  e.revert &&
                  this.setState({ ...this.#r, fetchStatus: "idle" }),
                  s.abort();
              },
              onFail: (e, t) => {
                this.#c({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#c({ type: "pause" });
              },
              onContinue: () => {
                this.#c({ type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
              canRun: () => !0,
            }));
          try {
            let e = await this.#i.start();
            if (void 0 === e)
              throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(e),
              this.#n.config.onSuccess?.(e, this),
              this.#n.config.onSettled?.(e, this.state.error, this),
              e
            );
          } catch (e) {
            if (e instanceof i.cc) {
              if (e.silent) return this.#i.promise;
              else if (e.revert) {
                if (void 0 === this.state.data) throw e;
                return this.state.data;
              }
            }
            throw (
              (this.#c({ type: "error", error: e }),
              this.#n.config.onError?.(e, this),
              this.#n.config.onSettled?.(this.state.data, e, this),
              e)
            );
          } finally {
            this.scheduleGc();
          }
        }
        #c(e) {
          let t = (t) => {
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                var r, n;
                return {
                  ...t,
                  ...((r = t.data),
                  (n = this.options),
                  {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, i.v_)(n.networkMode)
                      ? "fetching"
                      : "paused",
                    ...(void 0 === r && { error: null, status: "pending" }),
                  }),
                  fetchMeta: e.meta ?? null,
                };
              case "success":
                let s = {
                  ...t,
                  ...u(e.data, e.dataUpdatedAt),
                  dataUpdateCount: t.dataUpdateCount + 1,
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return (this.#r = e.manual ? s : void 0), s;
              case "error":
                let a = e.error;
                return {
                  ...t,
                  error: a,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error",
                  isInvalidated: !0,
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          };
          (this.state = t(this.state)),
            s.jG.batch(() => {
              this.observers.forEach((e) => {
                e.onQueryUpdate();
              }),
                this.#n.notify({ query: this, type: "updated", action: e });
            });
        }
      };
      function u(e, t) {
        return {
          data: e,
          dataUpdatedAt: t ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function l(e) {
        let t =
            "function" == typeof e.initialData
              ? e.initialData()
              : e.initialData,
          r = void 0 !== t,
          n = r
            ? "function" == typeof e.initialDataUpdatedAt
              ? e.initialDataUpdatedAt()
              : e.initialDataUpdatedAt
            : 0;
        return {
          data: t,
          dataUpdateCount: 0,
          dataUpdatedAt: r ? n ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: r ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
      var h = r(93563),
        d = class extends h.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#l = new Map());
          }
          #l;
          build(e, t, r) {
            let s = t.queryKey,
              i = t.queryHash ?? (0, n.F$)(s, t),
              a = this.get(i);
            return (
              a ||
                ((a = new c({
                  client: e,
                  queryKey: s,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(a)),
              a
            );
          }
          add(e) {
            this.#l.has(e.queryHash) ||
              (this.#l.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#l.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#l.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            s.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#l.get(e);
          }
          getAll() {
            return [...this.#l.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, n.MK)(e, t))
              : t;
          }
          notify(e) {
            s.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            s.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            s.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        f = r(97305),
        p = class extends h.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#h = new Set()),
              (this.#d = new Map()),
              (this.#f = 0);
          }
          #h;
          #d;
          #f;
          build(e, t, r) {
            let n = new f.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#f,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            this.#h.add(e);
            let t = b(e);
            if ("string" == typeof t) {
              let r = this.#d.get(t);
              r ? r.push(e) : this.#d.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#h.delete(e)) {
              let t = b(e);
              if ("string" == typeof t) {
                let r = this.#d.get(t);
                if (r)
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#d.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = b(e);
            if ("string" != typeof t) return !0;
            {
              let r = this.#d.get(t),
                n = r?.find((e) => "pending" === e.state.status);
              return !n || n === e;
            }
          }
          runNext(e) {
            let t = b(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let r = this.#d.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            s.jG.batch(() => {
              this.#h.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#h.clear(),
                this.#d.clear();
            });
          }
          getAll() {
            return Array.from(this.#h);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, n.nJ)(e, t));
          }
          notify(e) {
            s.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return s.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(n.lQ)))
            );
          }
        };
      function b(e) {
        return e.options.scope?.id;
      }
      var m = r(61057),
        g = r(52392),
        y = class {
          #p;
          #b;
          #a;
          #m;
          #g;
          #y;
          #v;
          #w;
          constructor(e = {}) {
            (this.#p = e.queryCache || new d()),
              (this.#b = e.mutationCache || new p()),
              (this.#a = e.defaultOptions || {}),
              (this.#m = new Map()),
              (this.#g = new Map()),
              (this.#y = 0);
          }
          mount() {
            this.#y++,
              1 === this.#y &&
                ((this.#v = m.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#p.onFocus());
                })),
                (this.#w = g.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#p.onOnline());
                })));
          }
          unmount() {
            this.#y--,
              0 === this.#y &&
                (this.#v?.(),
                (this.#v = void 0),
                this.#w?.(),
                (this.#w = void 0));
          }
          isFetching(e) {
            return this.#p.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#b.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#p.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              r = this.#p.build(this, t),
              s = r.state.data;
            return void 0 === s
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  r.isStaleByTime((0, n.d2)(t.staleTime, r)) &&
                  this.prefetchQuery(t),
                Promise.resolve(s));
          }
          getQueriesData(e) {
            return this.#p
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let s = this.defaultQueryOptions({ queryKey: e }),
              i = this.#p.get(s.queryHash),
              a = i?.state.data,
              o = (0, n.Zw)(t, a);
            if (void 0 !== o)
              return this.#p.build(this, s).setData(o, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return s.jG.batch(() =>
              this.#p
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#p.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#p;
            s.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#p;
            return s.jG.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              s.jG.batch(() => this.#p.findAll(e).map((e) => e.cancel(r)))
            )
              .then(n.lQ)
              .catch(n.lQ);
          }
          invalidateQueries(e, t = {}) {
            return s.jG.batch(() =>
              (this.#p.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              s.jG.batch(() =>
                this.#p
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(n.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(n.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#p.build(this, t);
            return r.isStaleByTime((0, n.d2)(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(n.lQ).catch(n.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e._type = "infinite"), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e._type = "infinite"), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return g.t.isOnline()
              ? this.#b.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#p;
          }
          getMutationCache() {
            return this.#b;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(e) {
            this.#a = e;
          }
          setQueryDefaults(e, t) {
            this.#m.set((0, n.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#m.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#g.set((0, n.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#g.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.mutationKey) &&
                  Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#a.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, n.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === n.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#a.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#p.clear(), this.#b.clear();
          }
        };
    },
    71616: (e, t, r) => {
      "use strict";
      r.d(t, { Ci: () => a, J8: () => o, MU: () => c });
      var n = r(2116),
        s = r(14055),
        i = r(56812);
      class a extends s.C {
        constructor({
          body: e,
          cause: t,
          details: r,
          headers: s,
          status: a,
          url: o,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: r,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, i.I)(o)}`,
              e && `Request body: ${(0, n.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = s),
            (this.status = a),
            (this.url = o);
        }
      }
      s.C;
      class o extends s.C {
        constructor({ body: e, error: t, url: r }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, i.I)(r)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data),
            (this.url = r);
        }
      }
      s.C;
      class c extends s.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, i.I)(t)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "TimeoutError",
          }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.url = t);
        }
      }
    },
    71808: (e, t, r) => {
      "use strict";
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith("-");
        n && (r = r.slice(1));
        let [s, i] = [
          (r = r.padStart(t, "0")).slice(0, r.length - t),
          r.slice(r.length - t),
        ];
        return (
          (i = i.replace(/(0+)$/, "")),
          `${n ? "-" : ""}${s || "0"}${i ? `.${i}` : ""}`
        );
      }
      r.d(t, { J: () => n });
    },
    73184: (e, t, r) => {
      "use strict";
      r.d(t, { EQ: () => o });
      var n = r(14055),
        s = r(49917),
        i = r(71309),
        a = r(60067);
      function o(e, t = "hex") {
        let r = (function e(t) {
            return Array.isArray(t)
              ? (function (e) {
                  let t = e.reduce((e, t) => e + t.length, 0),
                    r = c(t);
                  return {
                    length: t <= 55 ? 1 + t : 1 + r + t,
                    encode(n) {
                      for (let { encode: s } of (t <= 55
                        ? n.pushByte(192 + t)
                        : (n.pushByte(247 + r),
                          1 === r
                            ? n.pushUint8(t)
                            : 2 === r
                            ? n.pushUint16(t)
                            : 3 === r
                            ? n.pushUint24(t)
                            : n.pushUint32(t)),
                      e))
                        s(n);
                    },
                  };
                })(t.map((t) => e(t)))
              : (function (e) {
                  let t = "string" == typeof e ? (0, i.aT)(e) : e,
                    r = c(t.length);
                  return {
                    length:
                      1 === t.length && t[0] < 128
                        ? 1
                        : t.length <= 55
                        ? 1 + t.length
                        : 1 + r + t.length,
                    encode(e) {
                      (1 === t.length && t[0] < 128) ||
                        (t.length <= 55
                          ? e.pushByte(128 + t.length)
                          : (e.pushByte(183 + r),
                            1 === r
                              ? e.pushUint8(t.length)
                              : 2 === r
                              ? e.pushUint16(t.length)
                              : 3 === r
                              ? e.pushUint24(t.length)
                              : e.pushUint32(t.length))),
                        e.pushBytes(t);
                    },
                  };
                })(t);
          })(e),
          n = (0, s.l)(new Uint8Array(r.length));
        return (r.encode(n), "hex" === t) ? (0, a.My)(n.bytes) : n.bytes;
      }
      function c(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new n.C("Length is too large.");
      }
    },
    73649: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (e, s) => {
            let i = t(e, s);
            if (r) for (let e of r) delete i[e];
            return { ...i, ...n(e, s) };
          },
          type: e,
        });
      }
      r.d(t, { q: () => n });
    },
    74504: (e, t, r) => {
      "use strict";
      function n(e, { dir: t = "left" } = {}) {
        let r = "string" == typeof e ? e.replace("0x", "") : e,
          s = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === t ? e : r.length - e - 1].toString()) s++;
          else break;
        return ((r = "left" === t ? r.slice(s) : r.slice(0, r.length - s)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = `${r}0`),
            `0x${r.length % 2 == 1 ? `0${r}` : r}`)
          : r;
      }
      r.d(t, { B: () => n });
    },
    75009: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { Z: () => v });
      var s = r(94279);
      let i = (e) => (t) => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: (e) => i(e)(r),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => i(t)(e),
            };
          }
        },
        a = (e) => {
          let t,
            r = new Set(),
            n = (e, n) => {
              let s = "function" == typeof e ? e(t) : e;
              if (!Object.is(s, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof s || null === s)
                  ? s
                  : Object.assign({}, t, s)),
                  r.forEach((r) => r(t, e));
              }
            },
            s = () => t,
            i = {
              setState: n,
              getState: s,
              getInitialState: () => a,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            a = (t = e(n, s, i));
          return i;
        },
        o = (e) => (e ? a(e) : a);
      var c = r(62978),
        u = r(21803);
      class l {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new u(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let r = t[0];
          this._emitter.emit(e, { uid: this.uid, ...r });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function h(e, t) {
        return JSON.parse(e, (e, r) => {
          let n = r;
          return (
            n?.__type === "bigint" && (n = BigInt(n.value)),
            n?.__type === "Map" && (n = new Map(n.value)),
            t?.(e, n) ?? n
          );
        });
      }
      function d(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function f(e, t) {
        let { length: r } = e;
        for (let n = 0; n < r; ++n) if (e[n] === t) return n + 1;
        return 0;
      }
      function p(e, t, r, n) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let r = "function" == typeof e,
              n = "function" == typeof t,
              s = [],
              i = [];
            return function (a, o) {
              if ("object" == typeof o)
                if (s.length) {
                  let e = f(s, this);
                  0 === e ? (s[s.length] = this) : (s.splice(e), i.splice(e)),
                    (i[i.length] = a);
                  let r = f(s, o);
                  if (0 !== r)
                    return n ? t.call(this, a, o, d(i, r)) : `[ref=${d(i, r)}]`;
                } else (s[0] = o), (i[0] = a);
              return r ? e.call(this, a, o) : o;
            };
          })((e, r) => {
            let n = r;
            return (
              "bigint" == typeof n &&
                (n = { __type: "bigint", value: r.toString() }),
              n instanceof Map &&
                (n = { __type: "Map", value: Array.from(r.entries()) }),
              t?.(e, n) ?? n
            );
          }, n),
          r ?? void 0
        );
      }
      let b = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var m = r(44265);
      let g = 256;
      var y = r(98795);
      function v(e) {
        let t,
          r,
          a,
          {
            multiInjectedProviderDiscovery: u = !0,
            storage: d = (function (e) {
              let {
                deserialize: t = h,
                key: r = "wagmi",
                serialize: n = p,
                storage: s = b,
              } = e;
              function i(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...s,
                key: r,
                async getItem(e, n) {
                  let a = s.getItem(`${r}.${e}`),
                    o = await i(a);
                  return o ? t(o) ?? null : n ?? null;
                },
                async setItem(e, t) {
                  let a = `${r}.${e}`;
                  null === t
                    ? await i(s.removeItem(a))
                    : await i(s.setItem(a, n(t)));
                },
                async removeItem(e) {
                  await i(s.removeItem(`${r}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : b;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, r) {
                    try {
                      e.setItem(t, r);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: f = !0,
            ssr: v = !1,
            ...w
          } = e,
          x =
            "undefined" != typeof window && u
              ? (function () {
                  let e = new Set(),
                    t = [],
                    r = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((r) => {
                        t.some(({ info: e }) => e.uuid === r.info.uuid) ||
                          ((t = [...t, r]),
                          e.forEach((e) => e(t, { added: [r] })));
                      }),
                    n = r();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), n?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), n?.(), (n = r());
                    },
                    subscribe: (r, { emitImmediately: n } = {}) => (
                      e.add(r), n && r(t, { added: t }), () => e.delete(r)
                    ),
                  };
                })()
              : void 0,
          C = o(() => w.chains),
          P = o(() => {
            let e = [],
              t = new Set();
            for (let r of w.connectors ?? []) {
              let n = I(r);
              if ((e.push(n), !v && n.rdns))
                for (let e of "string" == typeof n.rdns ? [n.rdns] : n.rdns)
                  t.add(e);
            }
            if (!v && x)
              for (let r of x.getProviders())
                t.has(r.info.rdns) || e.push(I(E(r)));
            return e;
          });
        function I(e) {
          let t = new l(
              (function (e = 11) {
                if (!n || g + e > 512) {
                  (n = ""), (g = 0);
                  for (let e = 0; e < 256; e++)
                    n += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return n.substring(g, g++ + e);
              })()
            ),
            r = {
              ...e({
                emitter: t,
                chains: C.getState(),
                storage: d,
                transports: w.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", $), r.setup?.(), r;
        }
        function E(e) {
          let { info: t } = e,
            r = e.provider;
          return (0, c.b)({ target: { ...t, id: t.rdns, provider: r } });
        }
        let O = new Map();
        function S() {
          return {
            chainId: C.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let U = "0.0.0-canary-";
        t = y.r.startsWith(U)
          ? Number.parseInt(y.r.replace(U, ""), 10)
          : Number.parseInt(y.r.split(".")[0] ?? "0", 10);
        let A = o(
          ((a = d
            ? ((r = {
                migrate(e, r) {
                  if (r === t) return e;
                  let n = S(),
                    s = q(e, n.chainId);
                  return { ...n, chainId: s };
                },
                name: "store",
                partialize: (e) => ({
                  connections: {
                    __type: "Map",
                    value: Array.from(e.connections.entries()).map(([e, t]) => {
                      let { id: r, name: n, type: s, uid: i } = t.connector;
                      return [
                        e,
                        {
                          ...t,
                          connector: { id: r, name: n, type: s, uid: i },
                        },
                      ];
                    }),
                  },
                  chainId: e.chainId,
                  current: e.current,
                }),
                merge(e, t) {
                  "object" == typeof e && e && "status" in e && delete e.status;
                  let r = q(e, t.chainId);
                  return { ...t, ...e, chainId: r };
                },
                skipHydration: v,
                storage: d,
                version: t,
              }),
              (e, t, n) => {
                let s,
                  a = {
                    storage: (function (e, t) {
                      let r;
                      try {
                        r = e();
                      } catch (e) {
                        return;
                      }
                      return {
                        getItem: (e) => {
                          var t;
                          let n = (e) =>
                              null === e ? null : JSON.parse(e, void 0),
                            s = null != (t = r.getItem(e)) ? t : null;
                          return s instanceof Promise ? s.then(n) : n(s);
                        },
                        setItem: (e, t) =>
                          r.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: (e) => r.removeItem(e),
                      };
                    })(() => localStorage),
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => ({ ...t, ...e }),
                    ...r,
                  },
                  o = !1,
                  c = new Set(),
                  u = new Set(),
                  l = a.storage;
                if (!l)
                  return S(
                    (...t) => {
                      console.warn(
                        `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                      ),
                        e(...t);
                    },
                    t,
                    n
                  );
                let h = () => {
                    let e = a.partialize({ ...t() });
                    return l.setItem(a.name, { state: e, version: a.version });
                  },
                  d = n.setState;
                n.setState = (e, t) => {
                  d(e, t), h();
                };
                let f = S(
                  (...t) => {
                    e(...t), h();
                  },
                  t,
                  n
                );
                n.getInitialState = () => f;
                let p = () => {
                  var r, n;
                  if (!l) return;
                  (o = !1),
                    c.forEach((e) => {
                      var r;
                      return e(null != (r = t()) ? r : f);
                    });
                  let d =
                    (null == (n = a.onRehydrateStorage)
                      ? void 0
                      : n.call(a, null != (r = t()) ? r : f)) || void 0;
                  return i(l.getItem.bind(l))(a.name)
                    .then((e) => {
                      if (e)
                        if (
                          "number" != typeof e.version ||
                          e.version === a.version
                        )
                          return [!1, e.state];
                        else {
                          if (a.migrate)
                            return [!0, a.migrate(e.state, e.version)];
                          console.error(
                            "State loaded from storage couldn't be migrated since no migrate function was provided"
                          );
                        }
                      return [!1, void 0];
                    })
                    .then((r) => {
                      var n;
                      let [i, o] = r;
                      if (
                        (e((s = a.merge(o, null != (n = t()) ? n : f)), !0), i)
                      )
                        return h();
                    })
                    .then(() => {
                      null == d || d(s, void 0),
                        (s = t()),
                        (o = !0),
                        u.forEach((e) => e(s));
                    })
                    .catch((e) => {
                      null == d || d(void 0, e);
                    });
                };
                return (
                  (n.persist = {
                    setOptions: (e) => {
                      (a = { ...a, ...e }), e.storage && (l = e.storage);
                    },
                    clearStorage: () => {
                      null == l || l.removeItem(a.name);
                    },
                    getOptions: () => a,
                    rehydrate: () => p(),
                    hasHydrated: () => o,
                    onHydrate: (e) => (
                      c.add(e),
                      () => {
                        c.delete(e);
                      }
                    ),
                    onFinishHydration: (e) => (
                      u.add(e),
                      () => {
                        u.delete(e);
                      }
                    ),
                  }),
                  a.skipHydration || p(),
                  s || f
                );
              })
            : S),
          (e, t, r) => {
            let n = r.subscribe;
            return (
              (r.subscribe = (e, t, s) => {
                let i = e;
                if (t) {
                  let n = (null == s ? void 0 : s.equalityFn) || Object.is,
                    a = e(r.getState());
                  (i = (r) => {
                    let s = e(r);
                    if (!n(a, s)) {
                      let e = a;
                      t((a = s), e);
                    }
                  }),
                    (null == s ? void 0 : s.fireImmediately) && t(a, a);
                }
                return n(i);
              }),
              a(e, t, r)
            );
          })
        );
        function q(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            C.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function M(e) {
          A.setState((t) => {
            let r = t.connections.get(e.uid);
            return r
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? r.accounts,
                    chainId: e.chainId ?? r.chainId,
                    connector: r.connector,
                  }),
                }
              : t;
          });
        }
        function $(e) {
          "connecting" !== A.getState().status &&
            "reconnecting" !== A.getState().status &&
            A.setState((t) => {
              let r = P.getState().find((t) => t.uid === e.uid);
              return r
                ? (r.emitter.listenerCount("connect") &&
                    r.emitter.off("connect", M),
                  r.emitter.listenerCount("change") ||
                    r.emitter.on("change", M),
                  r.emitter.listenerCount("disconnect") ||
                    r.emitter.on("disconnect", j),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: r,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function j(e) {
          A.setState((t) => {
            let r = t.connections.get(e.uid);
            if (r) {
              let e = r.connector;
              e.emitter.listenerCount("change") &&
                r.connector.emitter.off("change", M),
                e.emitter.listenerCount("disconnect") &&
                  r.connector.emitter.off("disconnect", j),
                e.emitter.listenerCount("connect") ||
                  r.connector.emitter.on("connect", $);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let n = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: n.connector.uid,
            };
          });
        }
        return (
          A.setState(S()),
          f &&
            A.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (C.getState().some((t) => t.id === e))
                  return A.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          x?.subscribe((e) => {
            let t = new Set(),
              r = new Set();
            for (let e of P.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  r.add(t);
            let n = [];
            for (let s of e) {
              if (r.has(s.info.rdns)) continue;
              let e = I(E(s));
              t.has(e.id) || n.push(e);
            }
            (!d || A.persist.hasHydrated()) &&
              P.setState((e) => [...e, ...n], !0);
          }),
          {
            get chains() {
              return C.getState();
            },
            get connectors() {
              return P.getState();
            },
            storage: d,
            getClient: function (e = {}) {
              let t,
                r = e.chainId ?? A.getState().chainId,
                n = C.getState().find((e) => e.id === r);
              if (e.chainId && !n) throw new m.nk();
              {
                let e = O.get(A.getState().chainId);
                if (e && !n) return e;
                if (!n) throw new m.nk();
              }
              {
                let e = O.get(r);
                if (e) return e;
              }
              if (w.client) t = w.client({ chain: n });
              else {
                let e = n.id,
                  r = C.getState().map((e) => e.id),
                  i = {};
                for (let [t, n] of Object.entries(w))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof n)
                      if (e in n) i[t] = n[e];
                      else {
                        if (r.some((e) => e in n)) continue;
                        i[t] = n;
                      }
                    else i[t] = n;
                t = (0, s.U)({
                  ...i,
                  chain: n,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => w.transports[e]({ ...t, connectors: P }),
                });
              }
              return O.set(r, t), t;
            },
            get state() {
              return A.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(A.getState()) : e;
              let r = S();
              "object" != typeof t && (t = r),
                Object.keys(r).some((e) => !(e in t)) && (t = r),
                A.setState(t, !0);
            },
            subscribe: (e, t, r) =>
              A.subscribe(
                e,
                t,
                r ? { ...r, fireImmediately: r.emitImmediately } : void 0
              ),
            _internal: {
              mipd: x,
              async revalidate() {
                let e = A.getState(),
                  t = e.connections,
                  r = e.current;
                for (let [, e] of t) {
                  let n = e.connector;
                  (n.isAuthorized && (await n.isAuthorized())) ||
                    (t.delete(n.uid), r === n.uid && (r = null));
                }
                A.setState((e) => ({ ...e, connections: t, current: r }));
              },
              store: A,
              ssr: !!v,
              syncConnectedChain: f,
              transports: w.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(C.getState()) : e;
                  if (0 !== t.length) return C.setState(t, !0);
                },
                subscribe: (e) => C.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: E,
                setup: I,
                setState: (e) =>
                  P.setState("function" == typeof e ? e(P.getState()) : e, !0),
                subscribe: (e) => P.subscribe(e),
              },
              events: { change: M, connect: $, disconnect: j },
            },
          }
        );
      }
    },
    76164: (e, t, r) => {
      "use strict";
      r.d(t, {
        IQ: () => h,
        ME: () => l,
        Nx: () => u,
        Sl: () => o,
        uU: () => c,
      });
      var n = r(68562),
        s = r(21997),
        i = r(74504),
        a = r(71309);
      function o(e, { size: t }) {
        if ((0, s.E)(e) > t)
          throw new n.u({ givenSize: (0, s.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: r } = t;
        t.size && o(e, { size: t.size });
        let n = BigInt(e);
        if (!r) return n;
        let s = (e.length - 2) / 2;
        return n <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        let r = e;
        if (
          (t.size && (o(r, { size: t.size }), (r = (0, i.B)(r))),
          "0x00" === (0, i.B)(r))
        )
          return !1;
        if ("0x01" === (0, i.B)(r)) return !0;
        throw new n.H2(r);
      }
      function l(e, t = {}) {
        let r = c(e, t),
          s = Number(r);
        if (!Number.isSafeInteger(s))
          throw new n.Ty({
            max: `${Number.MAX_SAFE_INTEGER}`,
            min: `${Number.MIN_SAFE_INTEGER}`,
            signed: t.signed,
            size: t.size,
            value: `${r}n`,
          });
        return s;
      }
      function h(e, t = {}) {
        let r = (0, a.aT)(e);
        return (
          t.size &&
            (o(r, { size: t.size }), (r = (0, i.B)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    76364: (e, t, r) => {
      "use strict";
      r.d(t, { sc: () => v, qt: () => x, Zf: () => w });
      var n = r(62172);
      class s extends n.Vw {
        constructor(e, t, r, s) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = s),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, n.O8)(this.buffer));
        }
        update(e) {
          (0, n.CC)(this), (e = (0, n.ZJ)(e)), (0, n.DO)(e);
          let { view: t, buffer: r, blockLen: s } = this,
            i = e.length;
          for (let a = 0; a < i; ) {
            let o = Math.min(s - this.pos, i - a);
            if (o === s) {
              let t = (0, n.O8)(e);
              for (; s <= i - a; a += s) this.process(t, a);
              continue;
            }
            r.set(e.subarray(a, a + o), this.pos),
              (this.pos += o),
              (a += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.CC)(this), (0, n.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: s, isLE: i } = this,
            { pos: a } = this;
          (t[a++] = 128),
            (0, n.uH)(this.buffer.subarray(a)),
            this.padOffset > s - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < s; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let s = BigInt(32),
              i = BigInt(0xffffffff),
              a = Number((r >> s) & i),
              o = Number(r & i),
              c = 4 * !!n,
              u = 4 * !n;
            e.setUint32(t + c, a, n), e.setUint32(t + u, o, n);
          })(r, s - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = (0, n.O8)(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: s,
            destroyed: i,
            pos: a,
          } = this;
          return (
            (e.destroyed = i),
            (e.finished = s),
            (e.length = n),
            (e.pos = a),
            n % t && e.buffer.set(r),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let i = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        a = Uint32Array.from([
          0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
          0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
          0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
          0xbefa4fa4,
        ]),
        o = Uint32Array.from([
          0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
          0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
          0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
          0x137e2179,
        ]);
      var c = r(68388);
      let u = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        l = new Uint32Array(64);
      class h extends s {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | i[0]),
            (this.B = 0 | i[1]),
            (this.C = 0 | i[2]),
            (this.D = 0 | i[3]),
            (this.E = 0 | i[4]),
            (this.F = 0 | i[5]),
            (this.G = 0 | i[6]),
            (this.H = 0 | i[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: s, F: i, G: a, H: o } = this;
          return [e, t, r, n, s, i, a, o];
        }
        set(e, t, r, n, s, i, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | s),
            (this.F = 0 | i),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) l[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = l[e - 15],
              r = l[e - 2],
              s = (0, n.Ow)(t, 7) ^ (0, n.Ow)(t, 18) ^ (t >>> 3),
              i = (0, n.Ow)(r, 17) ^ (0, n.Ow)(r, 19) ^ (r >>> 10);
            l[e] = (i + l[e - 7] + s + l[e - 16]) | 0;
          }
          let { A: r, B: s, C: i, D: a, E: o, F: c, G: h, H: d } = this;
          for (let e = 0; e < 64; e++) {
            var f, p, b, m;
            let t =
                (d +
                  ((0, n.Ow)(o, 6) ^ (0, n.Ow)(o, 11) ^ (0, n.Ow)(o, 25)) +
                  (((f = o) & c) ^ (~f & h)) +
                  u[e] +
                  l[e]) |
                0,
              g =
                (((0, n.Ow)(r, 2) ^ (0, n.Ow)(r, 13) ^ (0, n.Ow)(r, 22)) +
                  (((p = r) & (b = s)) ^ (p & (m = i)) ^ (b & m))) |
                0;
            (d = h),
              (h = c),
              (c = o),
              (o = (a + t) | 0),
              (a = i),
              (i = s),
              (s = r),
              (r = (t + g) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (i = (i + this.C) | 0),
            (a = (a + this.D) | 0),
            (o = (o + this.E) | 0),
            (c = (c + this.F) | 0),
            (h = (h + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(r, s, i, a, o, c, h, d);
        }
        roundClean() {
          (0, n.uH)(l);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, n.uH)(this.buffer);
        }
      }
      let d = c.lD(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        f = d[0],
        p = d[1],
        b = new Uint32Array(80),
        m = new Uint32Array(80);
      class g extends s {
        constructor(e = 64) {
          super(128, e, 16, !1),
            (this.Ah = 0 | o[0]),
            (this.Al = 0 | o[1]),
            (this.Bh = 0 | o[2]),
            (this.Bl = 0 | o[3]),
            (this.Ch = 0 | o[4]),
            (this.Cl = 0 | o[5]),
            (this.Dh = 0 | o[6]),
            (this.Dl = 0 | o[7]),
            (this.Eh = 0 | o[8]),
            (this.El = 0 | o[9]),
            (this.Fh = 0 | o[10]),
            (this.Fl = 0 | o[11]),
            (this.Gh = 0 | o[12]),
            (this.Gl = 0 | o[13]),
            (this.Hh = 0 | o[14]),
            (this.Hl = 0 | o[15]);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: s,
            Cl: i,
            Dh: a,
            Dl: o,
            Eh: c,
            El: u,
            Fh: l,
            Fl: h,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, r, n, s, i, a, o, c, u, l, h, d, f, p, b];
        }
        set(e, t, r, n, s, i, a, o, c, u, l, h, d, f, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | s),
            (this.Cl = 0 | i),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | h),
            (this.Gh = 0 | d),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (b[r] = e.getUint32(t)), (m[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | b[e - 15],
              r = 0 | m[e - 15],
              n = c.rE(t, r, 1) ^ c.rE(t, r, 8) ^ c.xn(t, r, 7),
              s = c.ry(t, r, 1) ^ c.ry(t, r, 8) ^ c.jm(t, r, 7),
              i = 0 | b[e - 2],
              a = 0 | m[e - 2],
              o = c.rE(i, a, 19) ^ c.qh(i, a, 61) ^ c.xn(i, a, 6),
              u = c.ry(i, a, 19) ^ c.Ei(i, a, 61) ^ c.jm(i, a, 6),
              l = c.CW(s, u, m[e - 7], m[e - 16]),
              h = c.CQ(l, n, o, b[e - 7], b[e - 16]);
            (b[e] = 0 | h), (m[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: n,
            Bh: s,
            Bl: i,
            Ch: a,
            Cl: o,
            Dh: u,
            Dl: l,
            Eh: h,
            El: d,
            Fh: g,
            Fl: y,
            Gh: v,
            Gl: w,
            Hh: x,
            Hl: C,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = c.rE(h, d, 14) ^ c.rE(h, d, 18) ^ c.qh(h, d, 41),
              P = c.ry(h, d, 14) ^ c.ry(h, d, 18) ^ c.Ei(h, d, 41),
              I = (h & g) ^ (~h & v),
              E = (d & y) ^ (~d & w),
              O = c.F8(C, P, E, p[e], m[e]),
              S = c.TH(O, x, t, I, f[e], b[e]),
              U = 0 | O,
              A = c.rE(r, n, 28) ^ c.qh(r, n, 34) ^ c.qh(r, n, 39),
              q = c.ry(r, n, 28) ^ c.Ei(r, n, 34) ^ c.Ei(r, n, 39),
              M = (r & s) ^ (r & a) ^ (s & a),
              $ = (n & i) ^ (n & o) ^ (i & o);
            (x = 0 | v),
              (C = 0 | w),
              (v = 0 | g),
              (w = 0 | y),
              (g = 0 | h),
              (y = 0 | d),
              ({ h: h, l: d } = c.WQ(0 | u, 0 | l, 0 | S, 0 | U)),
              (u = 0 | a),
              (l = 0 | o),
              (a = 0 | s),
              (o = 0 | i),
              (s = 0 | r),
              (i = 0 | n);
            let j = c.Vl(U, q, $);
            (r = c.Vr(j, S, A, M)), (n = 0 | j);
          }
          ({ h: r, l: n } = c.WQ(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: s, l: i } = c.WQ(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | i)),
            ({ h: a, l: o } = c.WQ(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)),
            ({ h: u, l: l } = c.WQ(0 | this.Dh, 0 | this.Dl, 0 | u, 0 | l)),
            ({ h: h, l: d } = c.WQ(0 | this.Eh, 0 | this.El, 0 | h, 0 | d)),
            ({ h: g, l: y } = c.WQ(0 | this.Fh, 0 | this.Fl, 0 | g, 0 | y)),
            ({ h: v, l: w } = c.WQ(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | w)),
            ({ h: x, l: C } = c.WQ(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | C)),
            this.set(r, n, s, i, a, o, u, l, h, d, g, y, v, w, x, C);
        }
        roundClean() {
          (0, n.uH)(b, m);
        }
        destroy() {
          (0, n.uH)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class y extends g {
        constructor() {
          super(48),
            (this.Ah = 0 | a[0]),
            (this.Al = 0 | a[1]),
            (this.Bh = 0 | a[2]),
            (this.Bl = 0 | a[3]),
            (this.Ch = 0 | a[4]),
            (this.Cl = 0 | a[5]),
            (this.Dh = 0 | a[6]),
            (this.Dl = 0 | a[7]),
            (this.Eh = 0 | a[8]),
            (this.El = 0 | a[9]),
            (this.Fh = 0 | a[10]),
            (this.Fl = 0 | a[11]),
            (this.Gh = 0 | a[12]),
            (this.Gl = 0 | a[13]),
            (this.Hh = 0 | a[14]),
            (this.Hl = 0 | a[15]);
        }
      }
      let v = (0, n.qj)(() => new h()),
        w = (0, n.qj)(() => new g()),
        x = (0, n.qj)(() => new y());
    },
    76878: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => s });
      var n = r(11965);
      function s(e) {
        if (e.type) return e.type;
        if (void 0 !== e.authorizationList) return "eip7702";
        if (
          void 0 !== e.blobs ||
          void 0 !== e.blobVersionedHashes ||
          void 0 !== e.maxFeePerBlobGas ||
          void 0 !== e.sidecars
        )
          return "eip4844";
        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== e.gasPrice)
          return void 0 !== e.accessList ? "eip2930" : "legacy";
        throw new n.Vg({ transaction: e });
      }
    },
    78128: (e, t, r) => {
      "use strict";
      r.d(t, { PK: () => c, iq: () => i, uP: () => o, zF: () => a });
      var n = r(94487),
        s = r(14055);
      class i extends s.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class a extends s.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class o extends s.C {
        constructor({ hash: e, size: t }) {
          super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${t}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class c extends s.C {
        constructor({ hash: e, version: t }) {
          super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: [`Expected: ${n.E}`, `Received: ${t}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
    },
    79303: (e, t, r) => {
      "use strict";
      r.d(t, { o: () => l });
      var n = r(14055),
        s = r(71616),
        i = r(45654);
      let a = new (r(60796).A)(8192);
      var o = r(99533),
        c = r(2116),
        u = r(48159);
      function l(
        {
          key: e,
          methods: t,
          name: r,
          request: l,
          retryCount: h = 3,
          retryDelay: d = 150,
          timeout: f,
          type: p,
        },
        b
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: r,
            request: l,
            retryCount: h,
            retryDelay: d,
            timeout: f,
            type: p,
          },
          request: (function (e, t = {}) {
            return async (r, u = {}) => {
              let {
                  dedupe: l = !1,
                  methods: h,
                  retryDelay: d = 150,
                  retryCount: f = 3,
                  uid: p,
                } = { ...t, ...u },
                { method: b } = r;
              if (
                h?.exclude?.includes(b) ||
                (h?.include && !h.include.includes(b))
              )
                throw new i.ab(Error("method not supported"), { method: b });
              let m = l
                ? (function (e, t = 0) {
                    let r = 0xdeadbeef ^ t,
                      n = 0x41c6ce57 ^ t;
                    for (let t = 0; t < e.length; t++) {
                      let s = e.charCodeAt(t);
                      (r = Math.imul(r ^ s, 0x9e3779b1)),
                        (n = Math.imul(n ^ s, 0x5f356495));
                    }
                    return (
                      (r =
                        Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
                        Math.imul(n ^ (n >>> 16), 0xc2b2ae35)),
                      (
                        0x100000000 *
                          (2097151 &
                            (n =
                              Math.imul(n ^ (n >>> 16), 0x85ebca6b) ^
                              Math.imul(r ^ (r >>> 16), 0xc2b2ae35))) +
                        (r >>> 0)
                      ).toString(36)
                    );
                  })(`${p}.${(0, c.A)(r)}`)
                : void 0;
              return (function (e, { enabled: t = !0, id: r }) {
                if (!t || !r) return e();
                if (a.get(r)) return a.get(r);
                let n = e().finally(() => a.delete(r));
                return a.set(r, n), n;
              })(
                () =>
                  (0, o.b)(
                    async () => {
                      try {
                        return await e(r);
                      } catch (e) {
                        switch (e.code) {
                          case i.XU.code:
                            throw new i.XU(e);
                          case i.CL.code:
                            throw new i.CL(e);
                          case i.Gi.code:
                            throw new i.Gi(e, { method: r.method });
                          case i.D5.code:
                            throw new i.D5(e);
                          case i.bq.code:
                            throw new i.bq(e);
                          case i.Di.code:
                            throw new i.Di(e);
                          case i.hA.code:
                            throw new i.hA(e);
                          case i.qZ.code:
                            throw new i.qZ(e);
                          case i.YW.code:
                            throw new i.YW(e);
                          case i.ab.code:
                            throw new i.ab(e, { method: r.method });
                          case i.s0.code:
                            throw new i.s0(e);
                          case i.xQ.code:
                            throw new i.xQ(e);
                          case i.vx.code:
                            throw new i.vx(e);
                          case i.sV.code:
                            throw new i.sV(e);
                          case i.Sf.code:
                            throw new i.Sf(e);
                          case i.RV.code:
                            throw new i.RV(e);
                          case i.xq.code:
                            throw new i.xq(e);
                          case i.ch.code:
                            throw new i.ch(e);
                          case i.L5.code:
                            throw new i.L5(e);
                          case i.WT.code:
                            throw new i.WT(e);
                          case i.hl.code:
                            throw new i.hl(e);
                          case i.cg.code:
                            throw new i.cg(e);
                          case i.uL.code:
                            throw new i.uL(e);
                          case i.G1.code:
                            throw new i.G1(e);
                          case i.jz.code:
                            throw new i.jz(e);
                          case 5e3:
                            throw new i.vx(e);
                          case i.nR.code:
                            throw new i.nR(e);
                          default:
                            if (e instanceof n.C) throw e;
                            throw new i.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof s.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/))
                            return 1e3 * Number.parseInt(e, 10);
                        }
                        return ~~(1 << e) * d;
                      },
                      retryCount: f,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === i.s0.code ||
                              t.code === i.bq.code ||
                              429 === t.code
                          : !(t instanceof s.Ci) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1;
                      },
                    }
                  ),
                { enabled: l, id: m }
              );
            };
          })(l, { methods: t, retryCount: h, retryDelay: d, uid: (0, u.L)() }),
          value: b,
        };
      }
    },
    80117: (e, t, r) => {
      "use strict";
      r.d(t, { lY: () => w });
      var n = r(68388),
        s = r(62172);
      let i = BigInt(0),
        a = BigInt(1),
        o = BigInt(2),
        c = BigInt(7),
        u = BigInt(256),
        l = BigInt(113),
        h = [],
        d = [],
        f = [];
      for (let e = 0, t = a, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          h.push(2 * (5 * n + r)),
          d.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = i;
        for (let e = 0; e < 7; e++)
          (t = ((t << a) ^ ((t >> c) * l)) % u) & o &&
            (s ^= a << ((a << BigInt(e)) - a));
        f.push(s);
      }
      let p = (0, n.lD)(f, !0),
        b = p[0],
        m = p[1],
        g = (e, t, r) => (r > 32 ? (0, n.WM)(e, t, r) : (0, n.P5)(e, t, r)),
        y = (e, t, r) => (r > 32 ? (0, n.im)(e, t, r) : (0, n.B4)(e, t, r));
      class v extends s.Vw {
        constructor(e, t, r, n = !1, i = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = i),
            (0, s.Fe)(r),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, s.DH)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, s.fd)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    s = (t + 2) % 10,
                    i = r[s],
                    a = r[s + 1],
                    o = g(i, a, 1) ^ r[n],
                    c = y(i, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= o), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = d[r],
                    i = g(t, s, n),
                    a = y(t, s, n),
                    o = h[r];
                  (t = e[o]), (s = e[o + 1]), (e[o] = i), (e[o + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= b[n]), (e[1] ^= m[n]);
              }
              (0, s.uH)(r);
            })(this.state32, this.rounds),
            (0, s.fd)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, s.CC)(this), (e = (0, s.ZJ)(e)), (0, s.DO)(e);
          let { blockLen: t, state: r } = this,
            n = e.length;
          for (let s = 0; s < n; ) {
            let i = Math.min(t - this.pos, n - s);
            for (let t = 0; t < i; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, s.CC)(this, !1), (0, s.DO)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, s = e.length; n < s; ) {
            this.posOut >= r && this.keccak();
            let i = Math.min(r - this.posOut, s - n);
            e.set(t.subarray(this.posOut, this.posOut + i), n),
              (this.posOut += i),
              (n += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, s.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, s.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, s.uH)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: s,
            enableXOF: i,
          } = this;
          return (
            e || (e = new v(t, r, n, i, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let w = (() => (0, s.qj)(() => new v(136, 1, 32)))();
    },
    81547: (e, t, r) => {
      "use strict";
      r.d(t, { Fl: () => i, NV: () => a, ii: () => s });
      var n = r(14055);
      class s extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class i extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    82784: (e, t, r) => {
      "use strict";
      function n(e) {
        return "string" == typeof e[0]
          ? s(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function s(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      r.d(t, { aP: () => s, xW: () => n });
    },
    82798: (e, t, r) => {
      "use strict";
      r.d(t, { Ao: () => n });
      let n = 2n ** 256n - 1n;
    },
    87829: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => i });
      var n = r(99141),
        s = r(71808);
      function i(e, t = "wei") {
        return (0, s.J)(e, n.sz[t]);
      }
    },
    90213: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => i });
      var n = r(71309),
        s = r(60067);
      function i(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          i =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, n.aT)(e))
              : e.blobs,
          a =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, n.aT)(e))
              : e.commitments,
          o = [];
        for (let e = 0; e < i.length; e++) {
          let r = i[e],
            n = a[e];
          o.push(Uint8Array.from(t.computeBlobKzgProof(r, n)));
        }
        return "bytes" === r ? o : o.map((e) => (0, s.My)(e));
      }
    },
    90974: (e, t, r) => {
      "use strict";
      async function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      r.d(t, { u: () => n });
    },
    94279: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => i });
      var n = r(4962),
        s = r(48159);
      function i(e) {
        let {
            batch: t,
            chain: r,
            ccipRead: i,
            dataSuffix: a,
            key: o = "base",
            name: c = "Base Client",
            type: u = "base",
          } = e,
          l =
            e.experimental_blockTag ??
            ("number" == typeof r?.experimental_preconfirmationTime
              ? "pending"
              : void 0),
          h = Math.min(
            Math.max(Math.floor((r?.blockTime ?? 12e3) / 2), 500),
            4e3
          ),
          d = e.pollingInterval ?? h,
          f = e.cacheTime ?? d,
          p = e.account ? (0, n.J)(e.account) : void 0,
          {
            config: b,
            request: m,
            value: g,
          } = e.transport({ account: p, chain: r, pollingInterval: d }),
          y = {
            account: p,
            batch: t,
            cacheTime: f,
            ccipRead: i,
            chain: r,
            dataSuffix: a,
            key: o,
            name: c,
            pollingInterval: d,
            request: m,
            transport: { ...b, ...g },
            type: u,
            uid: (0, s.L)(),
            ...(l ? { experimental_blockTag: l } : {}),
          };
        return Object.assign(y, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in y) delete n[e];
              let s = { ...t, ...n };
              return Object.assign(s, { extend: e(s) });
            };
          })(y),
        });
      }
    },
    94487: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      let n = 1;
    },
    95316: (e, t, r) => {
      "use strict";
      r.d(t, { YE: () => i, qD: () => a, rj: () => s });
      var n = r(14055);
      class s extends n.C {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && r.blockCreated && r.blockCreated > e
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      n.C, n.C;
      class i extends n.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class a extends n.C {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? `Chain ID "${e}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    96283: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => i });
      var n = r(99141),
        s = r(71808);
      function i(e, t = "wei") {
        return (0, s.J)(e, n.eL[t]);
      }
    },
    97187: (e, t, r) => {
      "use strict";
      r.d(t, {
        A7: () => i,
        BG: () => a,
        Fo: () => f,
        K0: () => c,
        Oh: () => u,
        RM: () => m,
        jj: () => o,
        k5: () => h,
        lN: () => b,
        lY: () => d,
        uC: () => p,
        vW: () => l,
      });
      var n = r(87829),
        s = r(14055);
      class i extends s.C {
        constructor({ cause: e, message: t } = {}) {
          let r = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(i, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted|gas required exceeds allowance/,
        });
      class a extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class o extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class h extends s.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class d extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends s.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends s.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: r,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              r ? ` = ${(0, n.Q)(r)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends s.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    97201: (e, t, r) => {
      "use strict";
      function n(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      r.d(t, { q: () => n });
    },
    99141: (e, t, r) => {
      "use strict";
      r.d(t, { eL: () => n, sz: () => s });
      let n = { gwei: 9, wei: 18 },
        s = { ether: -9, wei: 9 };
    },
    99533: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => s });
      var n = r(90974);
      function s(
        e,
        { delay: t = 100, retryCount: r = 2, shouldRetry: i = () => !0 } = {}
      ) {
        return new Promise((s, a) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let r = "function" == typeof t ? t({ count: c, error: e }) : t;
              r && (await (0, n.u)(r)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              s(t);
            } catch (e) {
              if (c < r && (await i({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          o();
        });
      }
    },
    99681: (e, t, r) => {
      "use strict";
      function n(e) {
        return e;
      }
      r.d(t, { U: () => n });
    },
    99764: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => i });
      var n = r(71309),
        s = r(60067);
      function i(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          i =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, n.aT)(e))
              : e.blobs,
          a = [];
        for (let e of i) a.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === r ? a : a.map((e) => (0, s.My)(e));
      }
    },
  },
]);
