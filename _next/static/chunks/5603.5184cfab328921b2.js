(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5603],
  {
    4166: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(6207),
        a = n(53740),
        i = n(31722),
        s = n(9527),
        o = n(72800);
      class c extends o.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var u = n(49615),
        l = n(81080);
      function d(e) {
        let t = {},
          n = e.length;
        for (let r = 0; r < n; r++) {
          let n = e[r];
          if (!(0, u.WL)(n)) continue;
          let a = (0, u.FO)(n);
          if (!a) throw new s.s7({ signature: n, type: "struct" });
          let i = a.properties.split(";"),
            o = [],
            c = i.length;
          for (let e = 0; e < c; e++) {
            let t = i[e].trim();
            if (!t) continue;
            let n = (0, l.Pj)(t, { type: "struct" });
            o.push(n);
          }
          if (!o.length) throw new s.X9({ signature: n });
          t[a.name] = o;
        }
        let o = {},
          d = Object.entries(t),
          p = d.length;
        for (let e = 0; e < p; e++) {
          let [n, s] = d[e];
          o[n] = (function e(t = [], n = {}, s = new Set()) {
            let o = [],
              u = t.length;
            for (let d = 0; d < u; d++) {
              let u = t[d];
              if (r.wj.test(u.type)) o.push(u);
              else {
                let t = (0, r.Yv)(f, u.type);
                if (!t?.type) throw new i.nx({ abiParameter: u });
                let { array: d, type: p } = t;
                if (p in n) {
                  if (s.has(p)) throw new c({ type: p });
                  o.push({
                    ...u,
                    type: `tuple${d ?? ""}`,
                    components: e(n[p], n, new Set([...s, p])),
                  });
                } else if ((0, l._o)(p)) o.push(u);
                else throw new a.zz({ type: p });
              }
            }
            return o;
          })(s, t);
        }
        return o;
      }
      let f = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    4823: (e, t) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function r(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      function a(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function i(e, ...t) {
        if (!a(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output =
          t.exists =
          t.hash =
          t.bytes =
          t.bool =
          t.number =
          t.isBytes =
            void 0),
        (t.number = n),
        (t.bool = r),
        (t.isBytes = a),
        (t.bytes = i),
        (t.hash = s),
        (t.exists = o),
        (t.output = c),
        (t.default = {
          number: n,
          bool: r,
          bytes: i,
          hash: s,
          exists: o,
          output: c,
        });
    },
    5603: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => cB });
      var r,
        a,
        i,
        s,
        o = n(43647),
        c = n(16293),
        u = n(60067);
      function l(e, t) {
        let n;
        try {
          n = e();
        } catch (e) {
          return;
        }
        return {
          getItem: (e) => {
            var r;
            let a = (e) =>
                null === e
                  ? null
                  : JSON.parse(e, null == t ? void 0 : t.reviver),
              i = null != (r = n.getItem(e)) ? r : null;
            return i instanceof Promise ? i.then(a) : a(i);
          },
          setItem: (e, r) =>
            n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
          removeItem: (e) => n.removeItem(e),
        };
      }
      let d = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => d(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => d(t)(e),
            };
          }
        },
        f = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let a = "function" == typeof e ? e(t) : e;
              if (!Object.is(a, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof a || null === a)
                  ? a
                  : Object.assign({}, t, a)),
                  n.forEach((n) => n(t, e));
              }
            },
            a = () => t,
            i = {
              setState: r,
              getState: a,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            s = (t = e(r, a, i));
          return i;
        },
        p = (e) => (e ? f(e) : f),
        h = "4.3.6",
        m = "@coinbase/wallet-sdk",
        b = p(
          ((e, t) => (n, r, a) => {
            let i,
              s = {
                storage: l(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
              },
              o = !1,
              c = new Set(),
              u = new Set(),
              f = s.storage;
            if (!f)
              return e(
                (...e) => {
                  console.warn(
                    `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                  ),
                    n(...e);
                },
                r,
                a
              );
            let p = () => {
                let e = s.partialize({ ...r() });
                return f.setItem(s.name, { state: e, version: s.version });
              },
              h = a.setState;
            a.setState = (e, t) => {
              h(e, t), p();
            };
            let m = e(
              (...e) => {
                n(...e), p();
              },
              r,
              a
            );
            a.getInitialState = () => m;
            let b = () => {
              var e, t;
              if (!f) return;
              (o = !1),
                c.forEach((e) => {
                  var t;
                  return e(null != (t = r()) ? t : m);
                });
              let a =
                (null == (t = s.onRehydrateStorage)
                  ? void 0
                  : t.call(s, null != (e = r()) ? e : m)) || void 0;
              return d(f.getItem.bind(f))(s.name)
                .then((e) => {
                  if (e)
                    if ("number" != typeof e.version || e.version === s.version)
                      return [!1, e.state];
                    else {
                      if (s.migrate) {
                        let t = s.migrate(e.state, e.version);
                        return t instanceof Promise
                          ? t.then((e) => [!0, e])
                          : [!0, t];
                      }
                      console.error(
                        "State loaded from storage couldn't be migrated since no migrate function was provided"
                      );
                    }
                  return [!1, void 0];
                })
                .then((e) => {
                  var t;
                  let [a, o] = e;
                  if ((n((i = s.merge(o, null != (t = r()) ? t : m)), !0), a))
                    return p();
                })
                .then(() => {
                  null == a || a(i, void 0),
                    (i = r()),
                    (o = !0),
                    u.forEach((e) => e(i));
                })
                .catch((e) => {
                  null == a || a(void 0, e);
                });
            };
            return (
              (a.persist = {
                setOptions: (e) => {
                  (s = { ...s, ...e }), e.storage && (f = e.storage);
                },
                clearStorage: () => {
                  null == f || f.removeItem(s.name);
                },
                getOptions: () => s,
                rehydrate: () => b(),
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
              s.skipHydration || b(),
              i || m
            );
          })(
            (...e) =>
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (() => ({ chains: [] }))(...e)),
                          (() => ({ keys: {} }))(...e)
                        ),
                        (() => ({ account: {} }))(...e)
                      ),
                      (() => ({ subAccount: void 0 }))(...e)
                    ),
                    (() => ({ spendPermissions: [] }))(...e)
                  ),
                  (() => ({ config: { version: h } }))(...e)
                ),
                (() => ({ subAccountConfig: {} }))(...e)
              ),
            {
              name: "cbwsdk.store",
              storage: l(() => localStorage),
              partialize: (e) => ({
                chains: e.chains,
                keys: e.keys,
                account: e.account,
                subAccount: e.subAccount,
                spendPermissions: e.spendPermissions,
                config: e.config,
              }),
            }
          )
        ),
        y = {
          get: () => b.getState().config,
          set: (e) => {
            b.setState((t) => ({
              config: Object.assign(Object.assign({}, t.config), e),
            }));
          },
        },
        g = Object.assign(Object.assign({}, b), {
          subAccounts: {
            get: () => b.getState().subAccount,
            set: (e) => {
              b.setState((t) => ({
                subAccount: t.subAccount
                  ? Object.assign(Object.assign({}, t.subAccount), e)
                  : Object.assign({ address: e.address }, e),
              }));
            },
            clear: () => {
              b.setState({ subAccount: void 0 });
            },
          },
          subAccountsConfig: {
            get: () => b.getState().subAccountConfig,
            set: (e) => {
              b.setState((t) => ({
                subAccountConfig: Object.assign(
                  Object.assign({}, t.subAccountConfig),
                  e
                ),
              }));
            },
            clear: () => {
              b.setState({ subAccountConfig: {} });
            },
          },
          spendPermissions: {
            get: () => b.getState().spendPermissions,
            set: (e) => {
              b.setState({ spendPermissions: e });
            },
            clear: () => {
              b.setState({ spendPermissions: [] });
            },
          },
          account: {
            get: () => b.getState().account,
            set: (e) => {
              b.setState((t) => ({
                account: Object.assign(Object.assign({}, t.account), e),
              }));
            },
            clear: () => {
              b.setState({ account: {} });
            },
          },
          chains: {
            get: () => b.getState().chains,
            set: (e) => {
              b.setState({ chains: e });
            },
            clear: () => {
              b.setState({ chains: [] });
            },
          },
          keys: {
            get: (e) => b.getState().keys[e],
            set: (e, t) => {
              b.setState((n) => ({
                keys: Object.assign(Object.assign({}, n.keys), { [e]: t }),
              }));
            },
            clear: () => {
              b.setState({ keys: {} });
            },
          },
          config: y,
        }),
        w = "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a",
        v = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad",
        x = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "AlreadyOwner",
            type: "error",
          },
          { inputs: [], name: "Initialized", type: "error" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidEthereumAddressOwner",
            type: "error",
          },
          {
            inputs: [{ name: "key", type: "uint256" }],
            name: "InvalidNonceKey",
            type: "error",
          },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidOwnerBytesLength",
            type: "error",
          },
          { inputs: [], name: "LastOwner", type: "error" },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "NoOwnerAtIndex",
            type: "error",
          },
          {
            inputs: [{ name: "ownersRemaining", type: "uint256" }],
            name: "NotLastOwner",
            type: "error",
          },
          {
            inputs: [{ name: "selector", type: "bytes4" }],
            name: "SelectorNotAllowed",
            type: "error",
          },
          { inputs: [], name: "Unauthorized", type: "error" },
          { inputs: [], name: "UnauthorizedCallContext", type: "error" },
          { inputs: [], name: "UpgradeFailed", type: "error" },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "expectedOwner", type: "bytes" },
              { name: "actualOwner", type: "bytes" },
            ],
            name: "WrongOwnerAtIndex",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "AddOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "RemoveOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "implementation", type: "address" }],
            name: "Upgraded",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "REPLAYABLE_NONCE_KEY",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "addOwnerAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "addOwnerPublicKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "functionSelector", type: "bytes4" }],
            name: "canSkipChainIdValidation",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "domainSeparator",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { name: "fields", type: "bytes1" },
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
              { name: "salt", type: "bytes32" },
              { name: "extensions", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "entryPoint",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "target", type: "address" },
              { name: "value", type: "uint256" },
              { name: "data", type: "bytes" },
            ],
            name: "execute",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "value", type: "uint256" },
                  { name: "data", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "executeBatch",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "calls", type: "bytes[]" }],
            name: "executeWithoutChainIdValidation",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "getUserOpHashWithoutChainId",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "$", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owners", type: "bytes[]" }],
            name: "initialize",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "isOwnerAddress",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "bytes" }],
            name: "isOwnerBytes",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "isOwnerPublicKey",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            name: "isValidSignature",
            outputs: [{ name: "result", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nextOwnerIndex",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "ownerAtIndex",
            outputs: [{ name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ownerCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "proxiableUUID",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeLastOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeOwnerAtIndex",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "removedOwnersCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "hash", type: "bytes32" }],
            name: "replaySafeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "newImplementation", type: "address" },
              { name: "data", type: "bytes" },
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "missingAccountFunds", type: "uint256" },
            ],
            name: "validateUserOp",
            outputs: [{ name: "validationData", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        k = [
          {
            inputs: [{ name: "implementation_", type: "address" }],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "OwnerRequired", type: "error" },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "createAccount",
            outputs: [{ name: "account", type: "address" }],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "getAddress",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initCodeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        A = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        E = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        P = "Unspecified error message.";
      function I(e, t = P) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (O(E, t)) return E[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function S(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function O(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function C(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let T = {
        rpc: {
          parse: (e) => _(A.rpc.parse, e),
          invalidRequest: (e) => _(A.rpc.invalidRequest, e),
          invalidParams: (e) => _(A.rpc.invalidParams, e),
          methodNotFound: (e) => _(A.rpc.methodNotFound, e),
          internal: (e) => _(A.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return _(t, e);
          },
          invalidInput: (e) => _(A.rpc.invalidInput, e),
          resourceNotFound: (e) => _(A.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => _(A.rpc.resourceUnavailable, e),
          transactionRejected: (e) => _(A.rpc.transactionRejected, e),
          methodNotSupported: (e) => _(A.rpc.methodNotSupported, e),
          limitExceeded: (e) => _(A.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => j(A.provider.userRejectedRequest, e),
          unauthorized: (e) => j(A.provider.unauthorized, e),
          unsupportedMethod: (e) => j(A.provider.unsupportedMethod, e),
          disconnected: (e) => j(A.provider.disconnected, e),
          chainDisconnected: (e) => j(A.provider.chainDisconnected, e),
          unsupportedChain: (e) => j(A.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new N(t, n, r);
          },
        },
      };
      function _(e, t) {
        let [n, r] = B(t);
        return new M(e, n || I(e), r);
      }
      function j(e, t) {
        let [n, r] = B(t);
        return new N(e, n || I(e), r);
      }
      function B(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class M extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class N extends M {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      function L(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "code" in e &&
          "data" in e &&
          -32090 === e.code &&
          "object" == typeof e.data &&
          null !== e.data &&
          "type" in e.data &&
          "INSUFFICIENT_FUNDS" === e.data.type
        );
      }
      function D(e) {
        return "object" == typeof e && null !== e && "details" in e;
      }
      function R(e, t, n) {
        if (null == e)
          throw null != t
            ? t
            : T.rpc.invalidParams({
                message: null != n ? n : "value must be present",
                data: e,
              });
      }
      function $(e, t) {
        if (!Array.isArray(e))
          throw T.rpc.invalidParams({
            message: null != t ? t : "value must be an array",
            data: e,
          });
      }
      let U = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: z, getCrossOriginOpenerPolicy: F } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let r = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != r ? r : "null"),
                    "same-origin" === e && console.error(U);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })();
      function q(e) {
        if ("function" != typeof e) throw Error("toAccount is not a function");
      }
      async function G(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": h,
              "X-Cbw-Sdk-Platform": m,
            },
          }),
          { result: a, error: i } = await r.json();
        if (i) throw i;
        return a;
      }
      let H = "https://rpc.wallet.coinbase.com",
        W = "https://www.walletlink.org";
      function K(e, t, n) {
        var r, a, i, s;
        window.ClientAnalytics &&
          (null == (r = window.ClientAnalytics) ||
            r.logEvent(
              e,
              Object.assign(Object.assign({}, t), {
                sdkVersion: h,
                appName:
                  null !=
                  (i =
                    null == (a = g.config.get().metadata) ? void 0 : a.appName)
                    ? i
                    : "",
                appOrigin: window.location.origin,
                appPreferredSigner:
                  null == (s = g.config.get().preference) ? void 0 : s.options,
              }),
              n
            ));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(r || (r = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(a || (a = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(i || (i = {}));
      let V = ({ snackbarContext: e }) => {
          K(
            `snackbar.${e}.shown`,
            { action: a.render, componentType: r.modal, snackbarContext: e },
            i.high
          );
        },
        J = ({ snackbarContext: e, snackbarAction: t }) => {
          K(
            `snackbar.${e}.action_clicked`,
            {
              action: a.click,
              componentType: r.button,
              snackbarContext: e,
              snackbarAction: t,
            },
            i.high
          );
        };
      function Z() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function Y() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                else for (n in t) t[n] && (a && (a += " "), (a += n));
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      var Q = n(57262),
        X = n(67395);
      function ee() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      class et {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ee());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, Q.render)(
              (0, Q.h)(
                "div",
                null,
                (0, Q.h)(
                  en,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, Q.h)(er, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let en = (e) =>
          (0, Q.h)(
            "div",
            { class: Y("-cbwsdk-snackbar-container") },
            (0, Q.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, Q.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        er = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, a] = (0, X.useState)(!0),
            [i, s] = (0, X.useState)(null != e && e);
          return (
            (0, X.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  a(!1);
                }, 1),
                window.setTimeout(() => {
                  s(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, Q.h)(
              "div",
              {
                class: Y(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  i && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, Q.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    s(!i);
                  },
                },
                (0, Q.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, Q.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, Q.h)(
                  "div",
                  { class: "-gear-container" },
                  !i &&
                    (0, Q.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, Q.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, Q.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, Q.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, Q.h)(
                      "div",
                      {
                        class: Y(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, Q.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, Q.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, Q.h)(
                        "span",
                        {
                          class: Y(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        },
        ea =
          "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
      class ei {
        constructor() {
          (this.attached = !1), (this.snackbar = new et());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            Z();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: ea,
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      let es = {
          isRed: !1,
          info: "Retry",
          svgWidth: "10",
          svgHeight: "11",
          path: ea,
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
        },
        eo = null;
      function ec() {
        if (!eo) {
          let e = document.createElement("div");
          (e.className = "-cbwsdk-css-reset"),
            document.body.appendChild(e),
            (eo = new et()).attach(e);
        }
        return eo;
      }
      class eu {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let a = n.data;
                  e(a) &&
                    (t(a),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(T.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : (K(
                    "communicator.popup_setup.started",
                    { action: a.unknown, componentType: r.unknown },
                    i.high
                  ),
                  (this.popup = await (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 700) / 2 + window.screenY;
                    function r() {
                      let r = `wallet_${crypto.randomUUID()}`,
                        a = window.open(
                          e,
                          r,
                          `width=420, height=700, left=${t}, top=${n}`
                        );
                      return (null == a || a.focus(), a) ? a : null;
                    }
                    var a = e;
                    for (let [e, t] of Object.entries({
                      sdkName: m,
                      sdkVersion: h,
                      origin: window.location.origin,
                      coop: F(),
                    }))
                      a.searchParams.has(e) ||
                        a.searchParams.append(e, t.toString());
                    let i = r();
                    if (!i) {
                      let e = ec();
                      return new Promise((t, n) => {
                        V({ snackbarContext: "popup_blocked" }),
                          e.presentItem({
                            autoExpand: !0,
                            message: "Popup was blocked. Try again.",
                            menuItems: [
                              Object.assign(Object.assign({}, es), {
                                onClick: () => {
                                  J({
                                    snackbarContext: "popup_blocked",
                                    snackbarAction: "confirm",
                                  }),
                                    (i = r())
                                      ? t(i)
                                      : n(
                                          T.rpc.internal(
                                            "Popup window was blocked"
                                          )
                                        ),
                                    e.clear();
                                },
                              }),
                            ],
                          });
                      });
                    }
                    return Promise.resolve(i);
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(() => {
                      this.disconnect(),
                        K(
                          "communicator.popup_unload.received",
                          { action: a.unknown, componentType: r.unknown },
                          i.high
                        );
                    })
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: h,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw T.rpc.internal();
                      return (
                        K(
                          "communicator.popup_setup.completed",
                          { action: a.unknown, componentType: r.unknown },
                          i.high
                        ),
                        this.popup
                      );
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      function el(e) {
        return void 0 !== e.errorMessage;
      }
      var ed = n(43878);
      class ef extends ed {}
      class ep {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new ep("CBWSDK").clear(), new ep("walletlink").clear();
        }
      }
      function eh(e) {
        return Math.floor(e);
      }
      var em = n(93615).hp;
      let eb = /^[0-9]*$/,
        ey = /^[a-f0-9]*$/;
      function eg(e) {
        return ew(crypto.getRandomValues(new Uint8Array(e)));
      }
      function ew(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function ev(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function ex(e, t = !1) {
        let n = e.toString("hex");
        return t ? `0x${n}` : n;
      }
      function ek(e) {
        return ex(ej(e), !0);
      }
      function eA(e) {
        return e.toString(10);
      }
      function eE(e) {
        return `0x${BigInt(e).toString(16)}`;
      }
      function eP(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function eI(e) {
        return eP(e) ? e.slice(2) : e;
      }
      function eS(e) {
        return eP(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function eO(e) {
        if ("string" != typeof e) return !1;
        let t = eI(e).toLowerCase();
        return ey.test(t);
      }
      function eC(e, t = !1) {
        if ("string" == typeof e) {
          let n = eI(e).toLowerCase();
          if (ey.test(n)) return t ? `0x${n}` : n;
        }
        throw T.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
      }
      function eT(e, t = !1) {
        let n = eC(e, !1);
        return n.length % 2 == 1 && (n = `0${n}`), t ? `0x${n}` : n;
      }
      function e_(e) {
        if ("string" == typeof e) {
          let t = eI(e).toLowerCase();
          if (eO(t) && 40 === t.length) return eS(t);
        }
        throw T.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function ej(e) {
        if (em.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (eO(e)) {
            let t = eT(e, !1);
            return em.from(t, "hex");
          }
          return em.from(e, "utf8");
        }
        throw T.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function eB(e) {
        if ("number" == typeof e && Number.isInteger(e)) return eh(e);
        if ("string" == typeof e) {
          if (eb.test(e)) return eh(Number(e));
          if (eO(e)) return eh(Number(BigInt(eT(e, !0))));
        }
        throw T.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function eM(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(eB(e));
        if ("string" == typeof e) {
          if (eb.test(e)) return BigInt(e);
          if (eO(e)) return BigInt(eT(e, !0));
        }
        throw T.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      let eN = p(() => ({ correlationIds: new Map() })),
        eL = {
          get: (e) => eN.getState().correlationIds.get(e),
          set: (e, t) => {
            eN.setState((n) => {
              let r = new Map(n.correlationIds);
              return r.set(e, t), { correlationIds: r };
            });
          },
          delete: (e) => {
            eN.setState((t) => {
              let n = new Map(t.correlationIds);
              return n.delete(e), { correlationIds: n };
            });
          },
          clear: () => {
            eN.setState({ correlationIds: new Map() });
          },
        };
      var eD = n(76164),
        eR = n(22378);
      let e$ = (e) =>
        "message" in e && "string" == typeof e.message ? e.message : "";
      var eU = n(22867),
        ez = n(94279),
        eF = n(59400),
        eq = n(96903),
        eG = n(63434),
        eH = n(74504),
        eW = n(14055),
        eK = n(27104);
      function eV(e) {
        if (!(e instanceof eW.C)) return !1;
        let t = e.walk((e) => e instanceof eK.M);
        return (
          t instanceof eK.M &&
          (t.data?.errorName === "HttpError" ||
            t.data?.errorName === "ResolverError" ||
            t.data?.errorName === "ResolverNotContract" ||
            t.data?.errorName === "ResolverNotFound" ||
            t.data?.errorName === "ReverseAddressMismatch" ||
            t.data?.errorName === "UnsupportedResolverProfile")
        );
      }
      var eJ = n(41454),
        eZ = n(82784),
        eY = n(71309),
        eQ = n(25415),
        eX = n(97201);
      function e0(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, eX.q)(t) ? t : null;
      }
      function e1(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, u.My)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let r = e0(n[e]),
            a = r ? (0, eY.ZJ)(r) : (0, eQ.S)((0, eY.Af)(n[e]), "bytes");
          t = (0, eQ.S)((0, eZ.xW)([t, a]), "bytes");
        }
        return (0, u.My)(t);
      }
      function e6(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, eY.Af)(t).byteLength + 2),
          r = 0,
          a = t.split(".");
        for (let e = 0; e < a.length; e++) {
          var i;
          let t = (0, eY.Af)(a[e]);
          t.byteLength > 255 &&
            (t = (0, eY.Af)(
              ((i = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? e0(e) || (0, eQ.S)((0, eY.Af)(e)) : (0, u.My)(t);
              })(a[e])),
              `[${i.slice(2)}]`)
            )),
            (n[r] = t.length),
            n.set(t, r + 1),
            (r += t.length + 1);
        }
        return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
      }
      function e5(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let a = e[n];
        return "function" == typeof a ? a : (n) => t(e, n);
      }
      var e2 = n(72351),
        e8 = n(71616),
        e3 = n(45654);
      function e4(
        e,
        { abi: t, address: n, args: r, docsPath: a, functionName: i, sender: s }
      ) {
        let o =
            e instanceof eK.$S
              ? e
              : e instanceof eW.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: c, data: u, details: l, message: d, shortMessage: f } = o,
          p =
            e instanceof e2.O
              ? new eK.rR({ functionName: i, cause: e })
              : ([3, e3.bq.code].includes(c) && (u || l || d || f)) ||
                (c === e3.Di.code && "execution reverted" === l && u)
              ? new eK.M({
                  abi: t,
                  data: "object" == typeof u ? u.data : u,
                  functionName: i,
                  message: o instanceof e8.J8 ? l : f ?? d,
                  cause: e,
                })
              : e;
        return new eK.bG(p, {
          abi: t,
          args: r,
          contractAddress: n,
          docsPath: a,
          functionName: i,
          sender: s,
        });
      }
      var e9 = n(21542);
      async function e7(e, t) {
        let { abi: n, address: r, args: a, functionName: i, ...s } = t,
          o = (0, c.p)({ abi: n, args: a, functionName: i });
        try {
          let { data: t } = await e5(e, e9.T, "call")({ ...s, data: o, to: r });
          return (0, eq.e)({
            abi: n,
            args: a,
            functionName: i,
            data: t || "0x",
          });
        } catch (e) {
          throw e4(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/readContract",
            functionName: i,
          });
        }
      }
      async function te(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            coinType: a,
            name: i,
            gatewayUrls: s,
            strict: o,
          } = t,
          { chain: l } = e,
          d = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!l)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, eG.M)({
              blockNumber: n,
              chain: l,
              contract: "ensUniversalResolver",
            });
          })(),
          f = l?.ensTlds;
        if (f && !f.some((e) => i.endsWith(e))) return null;
        let p = null != a ? [e1(i), BigInt(a)] : [e1(i)];
        try {
          let t = (0, c.p)({ abi: eF.Rm, functionName: "addr", args: p }),
            a = {
              address: d,
              abi: eF.Ag,
              functionName: "resolveWithGateways",
              args: [(0, u.nj)(e6(i)), t, s ?? [eJ.J]],
              blockNumber: n,
              blockTag: r,
            },
            o = e5(e, e7, "readContract"),
            l = await o(a);
          if ("0x" === l[0]) return null;
          let f = (0, eq.e)({
            abi: eF.Rm,
            args: p,
            functionName: "addr",
            data: l[0],
          });
          if ("0x" === f || "0x00" === (0, eH.B)(f)) return null;
          return f;
        } catch (e) {
          if (o) throw e;
          if (eV(e)) return null;
          throw e;
        }
      }
      class tt extends eW.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class tn extends eW.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class tr extends eW.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class ta extends eW.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      eW.C;
      let ti =
          /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        ts =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        to = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        tc = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function tu(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !Object.hasOwn(globalThis, "Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function tl(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function td({ uri: e, gatewayUrls: t }) {
        let n = to.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = tl(t?.ipfs, "https://ipfs.io"),
          a = tl(t?.arweave, "https://arweave.net"),
          i = e.match(ti),
          {
            protocol: s,
            subpath: o,
            target: c,
            subtarget: u = "",
          } = i?.groups || {},
          l = "ipns:/" === s || "ipns/" === o,
          d = "ipfs:/" === s || "ipfs/" === o || ts.test(e);
        if (e.startsWith("http") && !l && !d) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((l || d) && c)
          return {
            uri: `${r}/${l ? "ipns" : "ipfs"}/${c}${u}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === s && c)
          return { uri: `${a}/${c}${u || ""}`, isOnChain: !1, isEncoded: !1 };
        let f = e.replace(tc, "");
        if (
          (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
          f.startsWith("data:") || f.startsWith("{"))
        )
          return { uri: f, isOnChain: !0, isEncoded: !1 };
        throw new tr({ uri: e });
      }
      function tf(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new tt({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function tp({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await th({ gatewayUrls: e, uri: tf(n) });
        } catch {
          throw new tr({ uri: t });
        }
      }
      async function th({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = td({ uri: t, gatewayUrls: e });
        if (r || (await tu(n))) return n;
        throw new tr({ uri: t });
      }
      async function tm(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return e7(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return e7(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new ta({ namespace: t.namespace });
      }
      async function tb(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? ty(e, { gatewayUrls: t, record: n })
          : th({ uri: n, gatewayUrls: t });
      }
      async function ty(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, a] = t.split("/"),
              [i, s] = n.split(":"),
              [o, c] = r.split(":");
            if (!i || "eip155" !== i.toLowerCase())
              throw new tn({ reason: "Only EIP-155 supported" });
            if (!s) throw new tn({ reason: "Chain ID not found" });
            if (!c) throw new tn({ reason: "Contract address not found" });
            if (!a) throw new tn({ reason: "Token ID not found" });
            if (!o) throw new tn({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s, 10),
              namespace: o.toLowerCase(),
              contractAddress: c,
              tokenID: a,
            };
          })(n),
          {
            uri: a,
            isOnChain: i,
            isEncoded: s,
          } = td({ uri: await tm(e, { nft: r }), gatewayUrls: t });
        if (
          i &&
          (a.includes("data:application/json;base64,") || a.startsWith("{"))
        )
          return th({
            uri: tf(
              JSON.parse(
                s ? atob(a.replace("data:application/json;base64,", "")) : a
              )
            ),
            gatewayUrls: t,
          });
        let o = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (o = o.replace("0x", "").padStart(64, "0")),
          tp({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, o) })
        );
      }
      async function tg(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            key: a,
            name: i,
            gatewayUrls: s,
            strict: o,
          } = t,
          { chain: l } = e,
          d = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!l)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, eG.M)({
              blockNumber: n,
              chain: l,
              contract: "ensUniversalResolver",
            });
          })(),
          f = l?.ensTlds;
        if (f && !f.some((e) => i.endsWith(e))) return null;
        try {
          let t = {
              address: d,
              abi: eF.Ag,
              args: [
                (0, u.nj)(e6(i)),
                (0, c.p)({
                  abi: eF.SJ,
                  functionName: "text",
                  args: [e1(i), a],
                }),
                s ?? [eJ.J],
              ],
              functionName: "resolveWithGateways",
              blockNumber: n,
              blockTag: r,
            },
            o = e5(e, e7, "readContract"),
            l = await o(t);
          if ("0x" === l[0]) return null;
          let f = (0, eq.e)({ abi: eF.SJ, functionName: "text", data: l[0] });
          return "" === f ? null : f;
        } catch (e) {
          if (o) throw e;
          if (eV(e)) return null;
          throw e;
        }
      }
      async function tw(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: a,
          gatewayUrls: i,
          strict: s,
          universalResolverAddress: o,
        }
      ) {
        let c = await e5(
          e,
          tg,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: a,
          universalResolverAddress: o,
          gatewayUrls: i,
          strict: s,
        });
        if (!c) return null;
        try {
          return await tb(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
      async function tv(e, t) {
        let {
            address: n,
            blockNumber: r,
            blockTag: a,
            coinType: i = 60n,
            gatewayUrls: s,
            strict: o,
          } = t,
          { chain: c } = e,
          u = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!c)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, eG.M)({
              blockNumber: r,
              chain: c,
              contract: "ensUniversalResolver",
            });
          })();
        try {
          let t = {
              address: u,
              abi: eF.oX,
              args: [n, i, s ?? [eJ.J]],
              functionName: "reverseWithGateways",
              blockNumber: r,
              blockTag: a,
            },
            o = e5(e, e7, "readContract"),
            [c] = await o(t);
          return c || null;
        } catch (e) {
          if (o) throw e;
          if (eV(e)) return null;
          throw e;
        }
      }
      async function tx(e, t) {
        let { blockNumber: n, blockTag: r, name: a } = t,
          { chain: i } = e,
          s = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!i)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, eG.M)({
              blockNumber: n,
              chain: i,
              contract: "ensUniversalResolver",
            });
          })(),
          o = i?.ensTlds;
        if (o && !o.some((e) => a.endsWith(e)))
          throw Error(
            `${a} is not a valid ENS TLD (${o?.join(", ")}) for chain "${
              i.name
            }" (id: ${i.id}).`
          );
        let [c] = await e5(
          e,
          e7,
          "readContract"
        )({
          address: s,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [
                { type: "address" },
                { type: "bytes32" },
                { type: "uint256" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, u.nj)(e6(a))],
          blockNumber: n,
          blockTag: r,
        });
        return c;
      }
      var tk = n(4962),
        tA = n(22271),
        tE = n(54810),
        tP = n(70824),
        tI = n(52193);
      async function tS(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: a = "latest",
            blobs: i,
            data: s,
            gas: o,
            gasPrice: c,
            maxFeePerBlobGas: l,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: p,
            value: h,
            ...m
          } = t,
          b = n ? (0, tk.J)(n) : void 0;
        try {
          (0, tI.c)(t);
          let n = "bigint" == typeof r ? (0, u.cK)(r) : void 0,
            y = e.chain?.formatters?.transactionRequest?.format,
            g = (y || tP.Bv)(
              {
                ...(0, tE.o)(m, { format: y }),
                account: b,
                blobs: i,
                data: s,
                gas: o,
                gasPrice: c,
                maxFeePerBlobGas: l,
                maxFeePerGas: d,
                maxPriorityFeePerGas: f,
                to: p,
                value: h,
              },
              "createAccessList"
            ),
            w = await e.request({
              method: "eth_createAccessList",
              params: [g, n || a],
            });
          return { accessList: w.accessList, gasUsed: BigInt(w.gasUsed) };
        } catch (n) {
          throw (0, tA.d)(n, { ...t, account: b, chain: e.chain });
        }
      }
      function tO(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: a, transport: i }) => {
                "success" === a && t === e && (n[r] = i.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function tC(e) {
        let t = tO(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      class tT extends eW.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var t_ = n(63962),
        tj = n(54368),
        tB = n(28984),
        tM = n(36937);
      let tN = "/docs/contract/encodeEventTopics";
      function tL(e) {
        let { abi: t, eventName: n, args: r } = e,
          a = t[0];
        if (n) {
          let e = (0, tM.iY)({ abi: t, name: n });
          if (!e) throw new e2.M_(n, { docsPath: tN });
          a = e;
        }
        if ("event" !== a.type) throw new e2.M_(void 0, { docsPath: tN });
        let i = (0, tB.B)(a),
          s = (0, t_.h)(i),
          o = [];
        if (r && "inputs" in a) {
          let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (o =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, a) => tD({ param: e, value: t[n][a] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? tD({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [s, ...o];
      }
      function tD({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, eQ.S)((0, eY.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new tT(e.type);
        return (0, tj.h)([e], [t]);
      }
      async function tR(e, t) {
        let {
            address: n,
            abi: r,
            args: a,
            eventName: i,
            fromBlock: s,
            strict: o,
            toBlock: c,
          } = t,
          l = tO(e, { method: "eth_newFilter" }),
          d = i ? tL({ abi: r, args: a, eventName: i }) : void 0,
          f = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof s ? (0, u.cK)(s) : s,
                toBlock: "bigint" == typeof c ? (0, u.cK)(c) : c,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: a,
          eventName: i,
          id: f,
          request: l(f),
          strict: !!o,
          type: "event",
        };
      }
      async function t$(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: a,
          fromBlock: i,
          strict: s,
          toBlock: o,
        } = {}
      ) {
        let c = a ?? (r ? [r] : void 0),
          l = tO(e, { method: "eth_newFilter" }),
          d = [];
        c &&
          ((d = [
            c.flatMap((e) => tL({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, u.cK)(i) : i,
              toBlock: "bigint" == typeof o ? (0, u.cK)(o) : o,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: c,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: f,
          request: l(f),
          strict: !!s,
          toBlock: o,
          type: "event",
        };
      }
      async function tU(e) {
        let t = tO(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var tz = n(64622),
        tF = n(21997);
      async function tq({ hash: e, signature: t }) {
        let r = (0, eX.q)(e) ? e : (0, u.nj)(e),
          { secp256k1: a } = await Promise.resolve().then(n.bind(n, 87670)),
          i = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: r, yParity: i } = t,
                s = tG(Number(i ?? r));
              return new a.Signature(
                (0, eD.uU)(e),
                (0, eD.uU)(n)
              ).addRecoveryBit(s);
            }
            let e = (0, eX.q)(t) ? t : (0, u.nj)(t);
            if (65 !== (0, tF.E)(e)) throw Error("invalid signature length");
            let n = tG((0, eD.ME)(`0x${e.slice(130)}`));
            return a.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${i}`;
      }
      function tG(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function tH({ hash: e, signature: t }) {
        var n = await tq({ hash: e, signature: t });
        let r = (0, eQ.S)(`0x${n.substring(4)}`).substring(26);
        return (0, tz.o)(`0x${r}`);
      }
      var tW = n(73184);
      async function tK(e) {
        let { authorization: t, signature: n } = e;
        return tH({
          hash: (function (e) {
            let { chainId: t, nonce: n, to: r } = e,
              a = e.contractAddress ?? e.address,
              i = (0, eQ.S)(
                (0, eZ.aP)([
                  "0x05",
                  (0, tW.EQ)([
                    t ? (0, u.cK)(t) : "0x",
                    a,
                    n ? (0, u.cK)(n) : "0x",
                  ]),
                ])
              );
            return "bytes" === r ? (0, eY.aT)(i) : i;
          })(t),
          signature: n ?? t,
        });
      }
      var tV = n(96283),
        tJ = n(87829),
        tZ = n(11965);
      class tY extends eW.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: a,
            gas: i,
            gasPrice: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            nonce: u,
            to: l,
            value: d,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, tZ.aO)({
                from: t?.address,
                to: l,
                value:
                  void 0 !== d &&
                  `${(0, tV.c)(d)} ${r?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: i,
                gasPrice: void 0 !== s && `${(0, tJ.Q)(s)} gwei`,
                maxFeePerGas: void 0 !== o && `${(0, tJ.Q)(o)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, tJ.Q)(c)} gwei`,
                nonce: u,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
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
      var tQ = n(97187),
        tX = n(14307),
        t0 = n(89456);
      class t1 extends eW.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class t6 extends eW.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class t5 extends eW.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            tJ.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
      class t2 extends eW.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
      var t8 = n(39334);
      async function t3(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: r = e.experimental_blockTag ?? "latest",
          includeTransactions: a,
        } = {}
      ) {
        let i = a ?? !1,
          s = void 0 !== n ? (0, u.cK)(n) : void 0,
          o = null;
        if (
          !(o = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, i] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [s || r, i] },
                { dedupe: !!s }
              ))
        )
          throw new t2({ blockHash: t, blockNumber: n });
        return (e.chain?.formatters?.block?.format || t8.$)(o, "getBlock");
      }
      async function t4(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      async function t9(e, t) {
        return t7(e, t);
      }
      async function t7(e, t) {
        let { block: n, chain: r = e.chain, request: a } = t || {};
        try {
          let t = r?.fees?.maxPriorityFeePerGas ?? r?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let r = n || (await e5(e, t3, "getBlock")({})),
              i = await t({ block: r, client: e, request: a });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, eD.uU)(i);
        } catch {
          let [t, r] = await Promise.all([
            n ? Promise.resolve(n) : e5(e, t3, "getBlock")({}),
            e5(e, t4, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new t6();
          let a = r - t.baseFeePerGas;
          if (a < 0n) return 0n;
          return a;
        }
      }
      async function ne(e, t) {
        return nt(e, t);
      }
      async function nt(e, t) {
        let {
            block: n,
            chain: r = e.chain,
            request: a,
            type: i = "eip1559",
          } = t || {},
          s = await (async () =>
            "function" == typeof r?.fees?.baseFeeMultiplier
              ? r.fees.baseFeeMultiplier({ block: n, client: e, request: a })
              : r?.fees?.baseFeeMultiplier ?? 1.2)();
        if (s < 1) throw new t1();
        let o = s.toString().split(".")[1]?.length ?? 0,
          c = 10 ** o,
          u = (e) => (e * BigInt(Math.ceil(s * c))) / BigInt(c),
          l = n || (await e5(e, t3, "getBlock")({}));
        if ("function" == typeof r?.fees?.estimateFeesPerGas) {
          let t = await r.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: u,
            request: a,
            type: i,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === i) {
          if ("bigint" != typeof l.baseFeePerGas) throw new t6();
          let t =
              "bigint" == typeof a?.maxPriorityFeePerGas
                ? a.maxPriorityFeePerGas
                : await t7(e, { block: l, chain: r, request: a }),
            n = u(l.baseFeePerGas);
          return {
            maxFeePerGas: a?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: a?.gasPrice ?? u(await e5(e, t4, "getGasPrice")({})),
        };
      }
      async function nn(
        e,
        { address: t, blockTag: n = "latest", blockNumber: r }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof r ? (0, u.cK)(r) : n],
          },
          { dedupe: !!r }
        );
        return (0, eD.ME)(a);
      }
      var nr = n(99764),
        na = n(90213),
        ni = n(2096),
        ns = n(11144),
        no = n(60796),
        nc = n(76878),
        nu = n(1875);
      async function nl(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, eD.ME)(t);
      }
      async function nd(e, t) {
        let {
            account: n = e.account,
            accessList: r,
            authorizationList: a,
            chain: i = e.chain,
            blobVersionedHashes: s,
            blobs: o,
            data: c,
            gas: u,
            gasPrice: l,
            maxFeePerBlobGas: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: p,
            nonce: h,
            nonceManager: m,
            to: b,
            type: y,
            value: g,
            ...w
          } = t,
          v = await (async () => {
            if (!n || !m || void 0 !== h) return h;
            let t = (0, tk.J)(n),
              r = i ? i.id : await e5(e, nl, "getChainId")({});
            return await m.consume({
              address: t.address,
              chainId: r,
              client: e,
            });
          })();
        (0, tI.c)(t);
        let x = i?.formatters?.transactionRequest?.format,
          k = (x || tP.Bv)(
            {
              ...(0, tE.o)(w, { format: x }),
              account: n ? (0, tk.J)(n) : void 0,
              accessList: r,
              authorizationList: a,
              blobs: o,
              blobVersionedHashes: s,
              data: c,
              gas: u,
              gasPrice: l,
              maxFeePerBlobGas: d,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              nonce: v,
              to: b,
              type: y,
              value: g,
            },
            "fillTransaction"
          );
        try {
          let n = await e.request({
              method: "eth_fillTransaction",
              params: [k],
            }),
            r = (i?.formatters?.transaction?.format || nu.uP)(n.tx);
          delete r.blockHash,
            delete r.blockNumber,
            delete r.r,
            delete r.s,
            delete r.transactionIndex,
            delete r.v,
            delete r.yParity,
            (r.data = r.input),
            r.gas && (r.gas = t.gas ?? r.gas),
            r.gasPrice && (r.gasPrice = t.gasPrice ?? r.gasPrice),
            r.maxFeePerBlobGas &&
              (r.maxFeePerBlobGas = t.maxFeePerBlobGas ?? r.maxFeePerBlobGas),
            r.maxFeePerGas &&
              (r.maxFeePerGas = t.maxFeePerGas ?? r.maxFeePerGas),
            r.maxPriorityFeePerGas &&
              (r.maxPriorityFeePerGas =
                t.maxPriorityFeePerGas ?? r.maxPriorityFeePerGas),
            void 0 !== r.nonce && (r.nonce = t.nonce ?? r.nonce);
          let a = await (async () => {
            if ("function" == typeof i?.fees?.baseFeeMultiplier) {
              let n = await e5(e, t3, "getBlock")({});
              return i.fees.baseFeeMultiplier({
                block: n,
                client: e,
                request: t,
              });
            }
            return i?.fees?.baseFeeMultiplier ?? 1.2;
          })();
          if (a < 1) throw new t1();
          let s = a.toString().split(".")[1]?.length ?? 0,
            o = 10 ** s,
            c = (e) => (e * BigInt(Math.ceil(a * o))) / BigInt(o);
          return (
            r.feePayerSignature ||
              (r.maxFeePerGas &&
                !t.maxFeePerGas &&
                (r.maxFeePerGas = c(r.maxFeePerGas)),
              r.gasPrice && !t.gasPrice && (r.gasPrice = c(r.gasPrice))),
            {
              raw: n.raw,
              transaction: { from: k.from, ...r },
              ...(n.capabilities ? { capabilities: n.capabilities } : {}),
            }
          );
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, tX.l)(e, n);
              return t instanceof tQ.RM ? e : t;
            })();
            return new tZ.$s(r, { docsPath: t, ...n });
          })(n, { ...t, chain: e.chain });
        }
      }
      let nf = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        np = new Map(),
        nh = new no.A(128);
      async function nm(e, t) {
        let n,
          r,
          a = t;
        (a.account ??= e.account), (a.parameters ??= nf);
        let {
            account: i,
            chain: s = e.chain,
            nonceManager: o,
            parameters: c,
          } = a,
          u =
            "function" == typeof s?.prepareTransactionRequest
              ? {
                  fn: s.prepareTransactionRequest,
                  runAt: ["beforeFillTransaction"],
                }
              : Array.isArray(s?.prepareTransactionRequest)
              ? {
                  fn: s.prepareTransactionRequest[0],
                  runAt: s.prepareTransactionRequest[1].runAt,
                }
              : void 0;
        async function l() {
          return n
            ? n
            : void 0 !== a.chainId
            ? a.chainId
            : s
            ? s.id
            : (n = await e5(e, nl, "getChainId")({}));
        }
        let d = i ? (0, tk.J)(i) : i,
          f = a.nonce;
        if (c.includes("nonce") && void 0 === f && d && o) {
          let t = await l();
          f = await o.consume({ address: d.address, chainId: t, client: e });
        }
        u?.fn &&
          u.runAt?.includes("beforeFillTransaction") &&
          ((a = await u.fn(
            { ...a, chain: s },
            { phase: "beforeFillTransaction" }
          )),
          (f ??= a.nonce));
        let p =
          (!(c.includes("blobVersionedHashes") || c.includes("sidecars")) ||
            !a.kzg ||
            !a.blobs) &&
          !1 !== nh.get(e.uid) &&
          ["fees", "gas"].some((e) => c.includes(e)) &&
          ((c.includes("chainId") && "number" != typeof a.chainId) ||
            (c.includes("nonce") && "number" != typeof f) ||
            (c.includes("fees") &&
              "bigint" != typeof a.gasPrice &&
              ("bigint" != typeof a.maxFeePerGas ||
                "bigint" != typeof a.maxPriorityFeePerGas)) ||
            (c.includes("gas") && "bigint" != typeof a.gas))
            ? await e5(
                e,
                nd,
                "fillTransaction"
              )({ ...a, nonce: f })
                .then((t) => {
                  let {
                    chainId: n,
                    from: r,
                    gas: i,
                    gasPrice: s,
                    nonce: o,
                    maxFeePerBlobGas: c,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    type: d,
                    ...f
                  } = t.transaction;
                  return (
                    nh.set(e.uid, !0),
                    {
                      ...a,
                      ...(r ? { from: r } : {}),
                      ...(d && !a.type ? { type: d } : {}),
                      ...(void 0 !== n ? { chainId: n } : {}),
                      ...(void 0 !== i ? { gas: i } : {}),
                      ...(void 0 !== s ? { gasPrice: s } : {}),
                      ...(void 0 !== o ? { nonce: o } : {}),
                      ...(void 0 !== c &&
                      "legacy" !== a.type &&
                      "eip2930" !== a.type
                        ? { maxFeePerBlobGas: c }
                        : {}),
                      ...(void 0 !== u &&
                      "legacy" !== a.type &&
                      "eip2930" !== a.type
                        ? { maxFeePerGas: u }
                        : {}),
                      ...(void 0 !== l &&
                      "legacy" !== a.type &&
                      "eip2930" !== a.type
                        ? { maxPriorityFeePerGas: l }
                        : {}),
                      ...("nonceKey" in f && void 0 !== f.nonceKey
                        ? { nonceKey: f.nonceKey }
                        : {}),
                      ...("keyAuthorization" in f &&
                      void 0 !== f.keyAuthorization &&
                      null !== f.keyAuthorization &&
                      !("keyAuthorization" in a)
                        ? { keyAuthorization: f.keyAuthorization }
                        : {}),
                      ...("feePayerSignature" in f &&
                      void 0 !== f.feePayerSignature &&
                      null !== f.feePayerSignature
                        ? { feePayerSignature: f.feePayerSignature }
                        : {}),
                      ...("feeToken" in f &&
                      void 0 !== f.feeToken &&
                      null !== f.feeToken &&
                      !("feeToken" in a)
                        ? { feeToken: f.feeToken }
                        : {}),
                      ...(t.capabilities
                        ? { _capabilities: t.capabilities }
                        : {}),
                    }
                  );
                })
                .catch((t) => {
                  if ("TransactionExecutionError" !== t.name) return a;
                  if (t.walk?.((e) => "ExecutionRevertedError" === e.name))
                    throw t;
                  return (
                    t.walk?.(
                      (e) =>
                        "MethodNotFoundRpcError" === e.name ||
                        "MethodNotSupportedRpcError" === e.name ||
                        e.message?.includes(
                          "eth_fillTransaction is not available"
                        )
                    ) && nh.set(e.uid, !1),
                    a
                  );
                })
            : a;
        f ??= p.nonce;
        let {
          blobs: h,
          gas: m,
          kzg: b,
          type: y,
        } = (a = {
          ...p,
          ...(d ? { from: d?.address } : {}),
          ...(void 0 !== f ? { nonce: f } : {}),
        });
        async function g() {
          return r || (r = await e5(e, t3, "getBlock")({ blockTag: "latest" }));
        }
        if (
          (u?.fn &&
            u.runAt?.includes("beforeFillParameters") &&
            (a = await u.fn(
              { ...a, chain: s },
              { phase: "beforeFillParameters" }
            )),
          c.includes("nonce") &&
            void 0 === f &&
            d &&
            !o &&
            (a.nonce = await e5(
              e,
              nn,
              "getTransactionCount"
            )({ address: d.address, blockTag: "pending" })),
          (c.includes("blobVersionedHashes") || c.includes("sidecars")) &&
            h &&
            b)
        ) {
          let e = (0, nr.S)({ blobs: h, kzg: b });
          if (c.includes("blobVersionedHashes")) {
            let t = (0, ni.d)({ commitments: e, to: "hex" });
            a.blobVersionedHashes = t;
          }
          if (c.includes("sidecars")) {
            let t = (0, na.t)({ blobs: h, commitments: e, kzg: b }),
              n = (0, ns.T)({ blobs: h, commitments: e, proofs: t, to: "hex" });
            a.sidecars = n;
          }
        }
        if (
          (c.includes("chainId") && (a.chainId = await l()),
          (c.includes("fees") || c.includes("type")) && void 0 === y)
        )
          try {
            a.type = (0, nc.L)(a);
          } catch {
            let t = np.get(e.uid);
            if (void 0 === t) {
              let n = await g();
              (t = "bigint" == typeof n?.baseFeePerGas), np.set(e.uid, t);
            }
            a.type = t ? "eip1559" : "legacy";
          }
        if (c.includes("fees"))
          if ("legacy" !== a.type && "eip2930" !== a.type) {
            if (
              void 0 === a.maxFeePerGas ||
              void 0 === a.maxPriorityFeePerGas
            ) {
              let t = await g(),
                { maxFeePerGas: n, maxPriorityFeePerGas: r } = await nt(e, {
                  block: t,
                  chain: s,
                  request: a,
                });
              if (
                void 0 === a.maxPriorityFeePerGas &&
                a.maxFeePerGas &&
                a.maxFeePerGas < r
              )
                throw new t5({ maxPriorityFeePerGas: r });
              (a.maxPriorityFeePerGas = r), (a.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== a.maxFeePerGas || void 0 !== a.maxPriorityFeePerGas)
              throw new t6();
            if (void 0 === a.gasPrice) {
              let t = await g(),
                { gasPrice: n } = await nt(e, {
                  block: t,
                  chain: s,
                  request: a,
                  type: "legacy",
                });
              a.gasPrice = n;
            }
          }
        return (
          c.includes("gas") &&
            void 0 === m &&
            (a.gas = await e5(
              e,
              nb,
              "estimateGas"
            )({
              ...a,
              account: d,
              prepare: d?.type === "local" ? [] : ["blobVersionedHashes"],
            })),
          u?.fn &&
            u.runAt?.includes("afterFillParameters") &&
            (a = await u.fn(
              { ...a, chain: s },
              { phase: "afterFillParameters" }
            )),
          (0, tI.c)(a),
          delete a.parameters,
          a
        );
      }
      async function nb(e, t) {
        let { account: n = e.account, prepare: r = !0 } = t,
          a = n ? (0, tk.J)(n) : void 0,
          i = Array.isArray(r)
            ? r
            : a?.type !== "local"
            ? ["blobVersionedHashes"]
            : void 0;
        try {
          let n = await (async () =>
              t.to
                ? t.to
                : t.authorizationList && t.authorizationList.length > 0
                ? await tK({ authorization: t.authorizationList[0] }).catch(
                    () => {
                      throw new eW.C(
                        "`to` is required. Could not infer from `authorizationList`"
                      );
                    }
                  )
                : void 0)(),
            {
              accessList: s,
              authorizationList: o,
              blobs: c,
              blobVersionedHashes: l,
              blockNumber: d,
              blockTag: f,
              data: p,
              gas: h,
              gasPrice: m,
              maxFeePerBlobGas: b,
              maxFeePerGas: y,
              maxPriorityFeePerGas: g,
              nonce: w,
              value: v,
              stateOverride: x,
              ...k
            } = r ? await nm(e, { ...t, parameters: i, to: n }) : t;
          if (h && t.gas !== h) return h;
          let A = ("bigint" == typeof d ? (0, u.cK)(d) : void 0) || f,
            E = (0, t0.yH)(x);
          (0, tI.c)(t);
          let P = e.chain?.formatters?.transactionRequest?.format,
            I = (P || tP.Bv)(
              {
                ...(0, tE.o)(k, { format: P }),
                account: a,
                accessList: s,
                authorizationList: o,
                blobs: c,
                blobVersionedHashes: l,
                data: p,
                gasPrice: m,
                maxFeePerBlobGas: b,
                maxFeePerGas: y,
                maxPriorityFeePerGas: g,
                nonce: w,
                to: n,
                value: v,
              },
              "estimateGas"
            );
          return BigInt(
            await e.request({
              method: "eth_estimateGas",
              params: E
                ? [I, A ?? e.experimental_blockTag ?? "latest", E]
                : A
                ? [I, A]
                : [I],
            })
          );
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new tY(
              (() => {
                let t = (0, tX.l)(e, n);
                return t instanceof tQ.RM ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: a, chain: e.chain });
        }
      }
      async function ny(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            functionName: i,
            dataSuffix: s = "string" == typeof e.dataSuffix
              ? e.dataSuffix
              : e.dataSuffix?.value,
            ...o
          } = t,
          u = (0, c.p)({ abi: n, args: a, functionName: i });
        try {
          return await e5(
            e,
            nb,
            "estimateGas"
          )({ data: `${u}${s ? s.replace("0x", "") : ""}`, to: r, ...o });
        } catch (t) {
          let e = o.account ? (0, tk.J)(o.account) : void 0;
          throw e4(t, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: i,
            sender: e?.address,
          });
        }
      }
      async function ng(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: r = e.experimental_blockTag ?? "latest",
        }
      ) {
        if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
          let a = e.chain.contracts.multicall3.address,
            i = (0, c.p)({
              abi: eF.v2,
              functionName: "getEthBalance",
              args: [t],
            }),
            { data: s } = await e5(
              e,
              e9.T,
              "call"
            )({ to: a, data: i, blockNumber: n, blockTag: r });
          return (0, eq.e)({
            abi: eF.v2,
            functionName: "getEthBalance",
            args: [t],
            data: s || "0x",
          });
        }
        let a = "bigint" == typeof n ? (0, u.cK)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, a || r] })
        );
      }
      async function nw(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      let nv = new Map(),
        nx = new Map();
      async function nk(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
        let r = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, nv),
              r = t(e, nx);
            return {
              clear: () => {
                n.clear(), r.clear();
              },
              promise: n,
              response: r,
            };
          })(t),
          a = r.response.get();
        if (a && n > 0 && Date.now() - a.created.getTime() < n) return a.data;
        let i = r.promise.get();
        i || ((i = e()), r.promise.set(i));
        try {
          let e = await i;
          return r.response.set({ created: new Date(), data: e }), e;
        } finally {
          r.promise.clear();
        }
      }
      async function nA(e, { cacheTime: t = e.cacheTime } = {}) {
        let n;
        return BigInt(
          await nk(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: ((n = e.uid), `blockNumber.${n}`),
            cacheTime: t,
          })
        );
      }
      async function nE(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let a,
          i = void 0 !== n ? (0, u.cK)(n) : void 0;
        return (
          (a = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, eD.ME)(a)
        );
      }
      async function nP(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let a = void 0 !== n ? (0, u.cK)(n) : void 0,
          i = await e.request(
            { method: "eth_getCode", params: [t, a || r] },
            { dedupe: !!a }
          );
        if ("0x" !== i) return i;
      }
      var nI = n(20869),
        nS = n(30849);
      let nO = "/docs/contract/decodeEventLog";
      function nC(e) {
        let { abi: t, data: n, strict: r, topics: a } = e,
          i = r ?? !0,
          [s, ...c] = a;
        if (!s) throw new e2._z({ docsPath: nO });
        let u = t.find(
          (e) => "event" === e.type && s === (0, t_.h)((0, tB.B)(e))
        );
        if (!(u && "name" in u) || "event" !== u.type)
          throw new e2.kE(s, { docsPath: nO });
        let { name: l, inputs: d } = u,
          f = d?.some((e) => !("name" in e && e.name)),
          p = f ? [] : {},
          h = d
            .map((e, t) => [e, t])
            .filter(([e]) => "indexed" in e && e.indexed),
          m = [];
        for (let e = 0; e < h.length; e++) {
          let [t, n] = h[e],
            r = c[e];
          if (!r) {
            if (i) throw new e2.l3({ abiItem: u, param: t });
            m.push([t, n]);
            continue;
          }
          p[f ? n : t.name || n] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, o.n)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let b = d.filter((e) => !("indexed" in e && e.indexed)),
          y = i ? b : [...m.map(([e]) => e), ...b];
        if (y.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, o.n)(y, n);
              if (e) {
                let t = 0;
                if (!i) for (let [n, r] of m) p[f ? r : n.name || r] = e[t++];
                if (f)
                  for (let n = 0; n < d.length; n++)
                    void 0 === p[n] && t < e.length && (p[n] = e[t++]);
                else for (let n = 0; n < b.length; n++) p[b[n].name] = e[t++];
              }
            } catch (e) {
              if (i) {
                if (e instanceof e2.Iy || e instanceof nS.SK)
                  throw new e2.fo({
                    abiItem: u,
                    data: n,
                    params: y,
                    size: (0, tF.E)(n),
                  });
                throw e;
              }
            }
          else if (i)
            throw new e2.fo({ abiItem: u, data: "0x", params: y, size: 0 });
        }
        return { eventName: l, args: Object.values(p).length > 0 ? p : void 0 };
      }
      function nT(e) {
        let { abi: t, args: n, logs: r, strict: a = !0 } = e,
          i = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })(),
          s = t
            .filter((e) => "event" === e.type)
            .map((e) => ({ abi: e, selector: (0, t_.h)(e) }));
        return r
          .map((e) => {
            let t,
              r,
              o = "string" == typeof e.blockNumber ? (0, nI.e)(e) : e,
              c = s.filter((e) => o.topics[0] === e.selector);
            if (0 === c.length) return null;
            for (let e of c)
              try {
                (t = nC({ ...o, abi: [e.abi], strict: !0 })), (r = e);
                break;
              } catch {}
            if (!t && !a) {
              r = c[0];
              try {
                t = nC({
                  data: o.data,
                  topics: o.topics,
                  abi: [r.abi],
                  strict: !1,
                });
              } catch {
                let e = r.abi.inputs?.some((e) => !("name" in e && e.name));
                return { ...o, args: e ? [] : {}, eventName: r.abi.name };
              }
            }
            return t &&
              r &&
              (!i || i.includes(t.eventName)) &&
              (function (e) {
                let { args: t, inputs: n, matchArgs: r } = e;
                if (!r) return !0;
                if (!t) return !1;
                function a(e, t, n) {
                  try {
                    if ("address" === e.type) return (0, eR.h)(t, n);
                    if ("string" === e.type || "bytes" === e.type)
                      return (0, eQ.S)((0, eY.ZJ)(t)) === n;
                    return t === n;
                  } catch {
                    return !1;
                  }
                }
                return Array.isArray(t) && Array.isArray(r)
                  ? r.every((e, r) => {
                      if (null == e) return !0;
                      let i = n[r];
                      return (
                        !!i &&
                        (Array.isArray(e) ? e : [e]).some((e) => a(i, e, t[r]))
                      );
                    })
                  : !(
                      "object" != typeof t ||
                      Array.isArray(t) ||
                      "object" != typeof r ||
                      Array.isArray(r)
                    ) &&
                      Object.entries(r).every(([e, r]) => {
                        if (null == r) return !0;
                        let i = n.find((t) => t.name === e);
                        return (
                          !!i &&
                          (Array.isArray(r) ? r : [r]).some((n) =>
                            a(i, n, t[e])
                          )
                        );
                      });
              })({ args: t.args, inputs: r.abi.inputs, matchArgs: n })
              ? { ...t, ...o }
              : null;
          })
          .filter(Boolean);
      }
      async function n_(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: a,
          event: i,
          events: s,
          args: o,
          strict: c,
        } = {}
      ) {
        let l = s ?? (i ? [i] : void 0),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) =>
              tL({ abi: [e], eventName: e.name, args: s ? void 0 : o })
            ),
          ]),
          i && (d = d[0]));
        let f = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: d, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: d,
                    fromBlock: "bigint" == typeof r ? (0, u.cK)(r) : r,
                    toBlock: "bigint" == typeof a ? (0, u.cK)(a) : a,
                  },
                ],
              })
        ).map((e) => (0, nI.e)(e));
        return l ? nT({ abi: l, args: o, logs: f, strict: c ?? !1 }) : f;
      }
      async function nj(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            blockHash: i,
            eventName: s,
            fromBlock: o,
            toBlock: c,
            strict: u,
          } = t,
          l = s ? (0, tM.iY)({ abi: n, name: s }) : void 0,
          d = l ? void 0 : n.filter((e) => "event" === e.type);
        return e5(
          e,
          n_,
          "getLogs"
        )({
          address: r,
          args: a,
          blockHash: i,
          event: l,
          events: d,
          fromBlock: o,
          toBlock: c,
          strict: u,
        });
      }
      var nB = n(38930);
      async function nM(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let a = await nP(e, {
          address: t,
          ...(void 0 !== n ? { blockNumber: n } : { blockTag: r }),
        });
        if (a && 23 === (0, tF.E)(a) && a.startsWith("0xef0100"))
          return (0, tz.b)((0, nB.di)(a, 3, 23));
      }
      class nN extends eW.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function nL(e, t) {
        let { address: n, factory: r, factoryData: a } = t;
        try {
          let [t, i, s, o, c, u, l] = await e5(
            e,
            e7,
            "readContract"
          )({
            abi: nD,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: a,
          });
          return {
            domain: {
              name: i,
              version: s,
              chainId: Number(o),
              verifyingContract: c,
              salt: u,
            },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new nN({ address: n });
          throw e;
        }
      }
      let nD = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function nR(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: a,
        }
      ) {
        var i;
        let s = "bigint" == typeof n ? (0, u.cK)(n) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: "eth_feeHistory", params: [(0, u.cK)(t), s || r, a] },
            { dedupe: !!s }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function n$(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let a = r.map((e) => (0, nI.e)(e));
        return "abi" in t && t.abi ? nT({ abi: t.abi, logs: a, strict: n }) : a;
      }
      async function nU(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, nI.e)(e));
        return t.abi ? nT({ abi: t.abi, logs: r, strict: n }) : r;
      }
      async function nz(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: a }
      ) {
        let i = void 0 !== n ? (0, u.cK)(n) : void 0;
        var s = await e.request({
          method: "eth_getProof",
          params: [t, a, i || (r ?? "latest")],
        });
        return {
          ...s,
          balance: s.balance ? BigInt(s.balance) : void 0,
          nonce: s.nonce ? (0, eD.ME)(s.nonce) : void 0,
          storageProof: s.storageProof
            ? s.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function nF(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: a }
      ) {
        let i = void 0 !== n ? (0, u.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, a, i || r],
        });
      }
      async function nq(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: r,
          hash: a,
          index: i,
          sender: s,
          nonce: o,
        }
      ) {
        let c = r || "latest",
          l = void 0 !== n ? (0, u.cK)(n) : void 0,
          d = null;
        if (
          (a
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [a] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, u.cK)(i)],
                },
                { dedupe: !0 }
              ))
            : (l || c) && "number" == typeof i
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [l || c, (0, u.cK)(i)],
                },
                { dedupe: !!l }
              ))
            : s &&
              "number" == typeof o &&
              (d = await e.request(
                {
                  method: "eth_getTransactionBySenderAndNonce",
                  params: [s, (0, u.cK)(o)],
                },
                { dedupe: !0 }
              )),
          !d)
        )
          throw new tZ.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: c,
            hash: a,
            index: i,
          });
        return (e.chain?.formatters?.transaction?.format || nu.uP)(
          d,
          "getTransaction"
        );
      }
      async function nG(e, { hash: t, transactionReceipt: n }) {
        let [r, a] = await Promise.all([
            e5(e, nA, "getBlockNumber")({}),
            t ? e5(e, nq, "getTransaction")({ hash: t }) : void 0,
          ]),
          i = n?.blockNumber || a?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var nH = n(61925);
      async function nW(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new tZ.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || nH.uL)(
          n,
          "getTransactionReceipt"
        );
      }
      var nK = n(75134);
      async function nV(e, t) {
        let {
            account: n,
            authorizationList: r,
            allowFailure: a = !0,
            blockNumber: i,
            blockOverrides: s,
            blockTag: o,
            stateOverride: u,
          } = t,
          l = t.contracts,
          {
            batchSize: d = t.batchSize ?? 1024,
            deployless: f = t.deployless ?? !1,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          p = (() => {
            if (t.multicallAddress) return t.multicallAddress;
            if (f) return null;
            if (e.chain)
              return (0, eG.M)({
                blockNumber: i,
                chain: e.chain,
                contract: "multicall3",
              });
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          })(),
          h = [[]],
          m = 0,
          b = 0;
        for (let e = 0; e < l.length; e++) {
          let { abi: t, address: r, args: i, functionName: s } = l[e];
          try {
            let e = (0, c.p)({ abi: t, args: i, functionName: s });
            (b += (e.length - 2) / 2),
              d > 0 &&
                b > d &&
                h[m].length > 0 &&
                (m++, (b = (e.length - 2) / 2), (h[m] = [])),
              (h[m] = [...h[m], { allowFailure: !0, callData: e, target: r }]);
          } catch (o) {
            let e = e4(o, {
              abi: t,
              address: r,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: s,
              sender: n,
            });
            if (!a) throw e;
            h[m] = [...h[m], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let y = await Promise.allSettled(
            h.map((t) =>
              e5(
                e,
                e7,
                "readContract"
              )({
                ...(null === p ? { code: nK.Ez } : { address: p }),
                abi: eF.v2,
                account: n,
                args: [t],
                authorizationList: r,
                blockNumber: i,
                blockOverrides: s,
                blockTag: o,
                functionName: "aggregate3",
                stateOverride: u,
              })
            )
          ),
          g = [];
        for (let e = 0; e < y.length; e++) {
          let t = y[e];
          if ("rejected" === t.status) {
            if (!a) throw t.reason;
            for (let n = 0; n < h[e].length; n++)
              g.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: r, success: i } = n[t],
              { callData: s } = h[e][t],
              { abi: o, address: c, functionName: u, args: d } = l[g.length];
            try {
              if ("0x" === s) throw new e2.O();
              if (!i) throw new eK.$S({ data: r });
              let e = (0, eq.e)({ abi: o, args: d, data: r, functionName: u });
              g.push(a ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = e4(t, {
                abi: o,
                address: c,
                args: d,
                docsPath: "/docs/contract/multicall",
                functionName: u,
              });
              if (!a) throw e;
              g.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (g.length !== l.length) throw new eW.C("multicall results mismatch");
        return g;
      }
      var nJ = n(21338);
      async function nZ(e, t) {
        let {
          blockNumber: n,
          blockTag: r = e.experimental_blockTag ?? "latest",
          blocks: a,
          returnFullTransactions: i,
          traceTransfers: s,
          validation: o,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            let n = e.blockOverrides ? nJ.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, tk.J)(e.account) : void 0,
                  n = e.abi ? (0, c.p)(e) : e.data,
                  r = {
                    ...e,
                    account: t,
                    data: e.dataSuffix
                      ? (0, eZ.xW)([n || "0x", e.dataSuffix])
                      : n,
                    from: e.from ?? t?.address,
                  };
                return (0, tI.c)(r), (0, tP.Bv)(r);
              }),
              a = e.stateOverrides ? (0, t0.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: a });
          }
          let l = "bigint" == typeof n ? (0, u.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: i,
                  traceTransfers: s,
                  validation: o,
                },
                l || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, t8.$)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: i, functionName: s, to: o } = a[t].calls[n],
                c = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                l = e.logs?.map((e) => (0, nI.e)(e)),
                d = "0x1" === e.status ? "success" : "failure",
                f =
                  r && "success" === d && "0x" !== c
                    ? (0, eq.e)({ abi: r, data: c, functionName: s })
                    : null,
                p = (() => {
                  let e;
                  if (
                    "success" !== d &&
                    ("0x" === c
                      ? (e = new e2.O())
                      : c && (e = new eK.$S({ data: c })),
                    e)
                  )
                    return e4(e, {
                      abi: r ?? [],
                      address: o ?? "0x",
                      args: i,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: u,
                logs: l,
                status: d,
                ...("success" === d ? { result: f } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, tX.l)(t, {});
          if (e instanceof tQ.RM) throw t;
          throw e;
        }
      }
      var nY = n(53740),
        nQ = n(49615),
        nX = n(4166),
        n0 = n(81080),
        n1 = n(16331),
        n6 = n(68641),
        n5 = n(80117),
        n2 = n(47220);
      function n8(e, t) {
        if (ra(e) > t) throw new rc({ givenSize: ra(e), maxSize: t });
      }
      let n3 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function n4(e) {
        return e >= n3.zero && e <= n3.nine
          ? e - n3.zero
          : e >= n3.A && e <= n3.F
          ? e - (n3.A - 10)
          : e >= n3.a && e <= n3.f
          ? e - (n3.a - 10)
          : void 0;
      }
      function n9(e, t = {}) {
        let { dir: n = "left" } = t,
          r = e,
          a = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === n ? e : r.length - e - 1].toString()) a++;
          else break;
        return "left" === n ? r.slice(a) : r.slice(0, r.length - a);
      }
      var n7 = n(35708),
        re = n(43393);
      let rt = new TextDecoder(),
        rn = new TextEncoder();
      function rr(e, t = {}) {
        let { size: n } = t,
          r = e;
        n && (n7.Sl(e, n), (r = n2.M7(e, n)));
        let a = r.slice(2);
        a.length % 2 && (a = `0${a}`);
        let i = a.length / 2,
          s = new Uint8Array(i);
        for (let e = 0, t = 0; e < i; e++) {
          let n = n4(a.charCodeAt(t++)),
            r = n4(a.charCodeAt(t++));
          if (void 0 === n || void 0 === r)
            throw new n6.C(
              `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
            );
          s[e] = (n << 4) | r;
        }
        return s;
      }
      function ra(e) {
        return e.length;
      }
      function ri(e, t = {}) {
        let { size: n } = t;
        void 0 !== n && n8(e, n);
        let r = n2.uK(e, t);
        return n2.Ro(r, t);
      }
      function rs(e) {
        return n9(e, { dir: "left" });
      }
      class ro extends n6.C {
        constructor(e) {
          super(`Bytes value \`${e}\` is not a valid boolean.`, {
            metaMessages: [
              "The bytes array must contain a single byte of either a `0` or `1` value.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesBooleanError",
            });
        }
      }
      n6.C;
      class rc extends n6.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class ru extends n6.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class rl extends n6.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function rd(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          a = (0, n5.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? rr(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? a : n2.uK(a);
      }
      class rf extends Map {
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
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let rp = { checksum: new rf(8192) }.checksum,
        rh = /^0x[a-fA-F0-9]{40}$/;
      function rm(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!rh.test(e)) throw new rg({ address: e, cause: new rw() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (rb(e) !== e) throw new rg({ address: e, cause: new rv() });
        }
      }
      function rb(e) {
        if (rp.has(e)) return rp.get(e);
        rm(e, { strict: !1 });
        let t = e.substring(2).toLowerCase(),
          n = rd(
            (function (e, t = {}) {
              let { size: n } = t,
                r = rn.encode(e);
              return "number" == typeof n
                ? (n8(r, n),
                  (function (e, t = {}) {
                    let { dir: n, size: r = 32 } = t;
                    if (0 === r) return e;
                    if (e.length > r)
                      throw new rl({
                        size: e.length,
                        targetSize: r,
                        type: "Bytes",
                      });
                    let a = new Uint8Array(r);
                    for (let t = 0; t < r; t++) {
                      let i = "right" === n;
                      a[i ? t : r - t - 1] = e[i ? t : e.length - t - 1];
                    }
                    return a;
                  })(r, { dir: "right", size: n }))
                : r;
            })(t),
            { as: "Bytes" }
          ),
          r = t.split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              r[e + 1] &&
              (r[e + 1] = r[e + 1].toUpperCase());
        let a = `0x${r.join("")}`;
        return rp.set(e, a), a;
      }
      function ry(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return rm(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class rg extends n6.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class rw extends n6.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class rv extends n6.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function rx(e) {
        let t = !0,
          n = "",
          r = 0,
          a = "",
          i = !1;
        for (let s = 0; s < e.length; s++) {
          let o = e[s];
          if (
            (["(", ")", ","].includes(o) && (t = !0),
            "(" === o && r++,
            ")" === o && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === o && ["event", "function", "error", ""].includes(a))
                a = "";
              else if (((a += o), ")" === o)) {
                i = !0;
                break;
              }
              continue;
            }
            if (" " === o) {
              "," !== e[s - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (a += o), (n += o);
          }
        }
        if (!i) throw new n6.C("Unable to normalize signature.");
        return a;
      }
      function rk(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, n0.uT)(e);
                  else {
                    let n = (0, nX.e)(e),
                      r = e.length;
                    for (let a = 0; a < r; a++) {
                      let r = e[a];
                      if (!(0, nQ.WL)(r)) {
                        t = (0, n0.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new nY.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: rP(r) } : {}) };
      }
      function rA(e, t, n) {
        let r,
          { args: a = [], prepare: i = !0 } = n ?? {},
          s = n2.tf(t, { strict: !1 }),
          o = e.filter((e) =>
            s
              ? "function" === e.type || "error" === e.type
                ? rE(e) === n2.di(t, 0, 4)
                : "event" === e.type && rP(e) === t
              : "name" in e && e.name === t
          );
        if (0 === o.length) throw new rS({ name: t });
        if (1 === o.length)
          return { ...o[0], ...(i ? { hash: rP(o[0]) } : {}) };
        for (let e of o) {
          if ("inputs" in e) {
            if (!a || 0 === a.length) {
              if (!e.inputs || 0 === e.inputs.length)
                return { ...e, ...(i ? { hash: rP(e) } : {}) };
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === a.length &&
              a.every((t, n) => {
                let r = "inputs" in e && e.inputs[n];
                return (
                  !!r &&
                  (function e(t, n) {
                    let r = typeof t,
                      a = n.type;
                    switch (a) {
                      case "address":
                        return ry(t, { strict: !1 });
                      case "bool":
                        return "boolean" === r;
                      case "function":
                      case "string":
                        return "string" === r;
                      default:
                        if ("tuple" === a && "components" in n)
                          return Object.values(n.components).every((n, r) =>
                            e(Object.values(t)[r], n)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            a
                          )
                        )
                          return "number" === r || "bigint" === r;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                          return "string" === r || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...n,
                                type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, r)
                );
              })
            ) {
              if (r && "inputs" in r && r.inputs) {
                let t = (function e(t, n, r) {
                  for (let a in t) {
                    let i = t[a],
                      s = n[a];
                    if (
                      "tuple" === i.type &&
                      "tuple" === s.type &&
                      "components" in i &&
                      "components" in s
                    )
                      return e(i.components, s.components, r[a]);
                    let o = [i.type, s.type];
                    if (
                      (o.includes("address") && o.includes("bytes20")) ||
                      (((o.includes("address") && o.includes("string")) ||
                        (o.includes("address") && o.includes("bytes"))) &&
                        ry(r[a], { strict: !1 }))
                    )
                      return o;
                  }
                })(e.inputs, r.inputs, a);
                if (t)
                  throw new rI(
                    { abiItem: e, type: t[0] },
                    { abiItem: r, type: t[1] }
                  );
              }
              r = e;
            }
          }
        }
        let c = (() => {
          if (r) return r;
          let [e, ...t] = o;
          return { ...e, overloads: t };
        })();
        if (!c) throw new rS({ name: t });
        return { ...c, ...(i ? { hash: rP(c) } : {}) };
      }
      function rE(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, n] = e;
            return rA(t, n);
          }
          return e[0];
        })();
        return n2.di(rP(t), 0, 4);
      }
      function rP(...e) {
        let t = (() => {
          if (Array.isArray(e[0])) {
            let [t, n] = e;
            return rA(t, n);
          }
          return e[0];
        })();
        return "string" != typeof t && "hash" in t && t.hash
          ? t.hash
          : rd(
              n2.sH(
                (function (...e) {
                  let t = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, n] = e;
                      return rA(t, n);
                    }
                    return e[0];
                  })();
                  return rx("string" == typeof t ? t : n1.B(t));
                })(t)
              )
            );
      }
      class rI extends n6.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${rx(n1.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${rx(n1.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class rS extends n6.C {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      n6.C;
      var rO = n(31722),
        rC = n(29076);
      let rT = /^(.*)\[([0-9]*)\]$/,
        r_ = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        rj =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        rB = 2n ** 256n - 1n;
      function rM(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: a } = e[n];
          r ? (t += 32) : (t += n2.Ej(a));
        }
        let n = [],
          r = [],
          a = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: s, encoded: o } = e[i];
          s
            ? (n.push(n2.oB(t + a, { size: 32 })), r.push(o), (a += n2.Ej(o)))
            : n.push(o);
        }
        return n2.xW(...n, ...r);
      }
      function rN(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function rL(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(rL);
        let n = rN(e.type);
        return !!(n && rL({ ...e, type: n[1] }));
      }
      let rD = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new rU({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r$({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new rR({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new rR({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
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
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
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
      class rR extends n6.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.NegativeOffsetError",
            });
        }
      }
      class r$ extends n6.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.PositionOutOfBoundsError",
            });
        }
      }
      class rU extends n6.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Cursor.RecursiveReadLimitExceededError",
            });
        }
      }
      function rz(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new rV({ expectedLength: e.length, givenLength: t.length });
        let a = rM(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let a = 0; a < t.length; a++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let a = rN(n.type);
                  if (a) {
                    let [i, s] = a;
                    return (function (t, n) {
                      let { checksumAddress: r, length: a, parameter: i } = n,
                        s = null === a;
                      if (!Array.isArray(t)) throw new rJ(t);
                      if (!s && t.length !== a)
                        throw new rW({
                          expectedLength: a,
                          givenLength: t.length,
                          type: `${i.type}[${a}]`,
                        });
                      let o = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let a = e({
                          checksumAddress: r,
                          parameter: i,
                          value: t[n],
                        });
                        a.dynamic && (o = !0), c.push(a);
                      }
                      if (s || o) {
                        let e = rM(c);
                        if (s) {
                          let t = n2.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? n2.xW(t, e) : t,
                          };
                        }
                        if (o) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: n2.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: i,
                      parameter: { ...n, type: s },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: a } = n,
                        i = !1,
                        s = [];
                      for (let n = 0; n < a.components.length; n++) {
                        let o = a.components[n],
                          c = Array.isArray(t) ? n : o.name,
                          u = e({
                            checksumAddress: r,
                            parameter: o,
                            value: t[c],
                          });
                        s.push(u), u.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i
                          ? rM(s)
                          : n2.xW(...s.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var i = r,
                      s = { checksum: t };
                    let { checksum: e = !1 } = s;
                    return (
                      rm(i, { strict: e }),
                      { dynamic: !1, encoded: n2.Ho(i.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var o = r;
                    if ("boolean" != typeof o)
                      throw new n6.C(
                        `Invalid boolean value: "${o}" (type: ${typeof o}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: n2.Ho(n2.xb(o)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = rj.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          a = t ? -r - 1n : 0n;
                        if (e > r || e < a)
                          throw new n2.Ty({
                            max: r.toString(),
                            min: a.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: n2.oB(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = n2.Ej(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = n2.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: n2.xW(n2.Ho(n2.oB(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n, 10))
                        throw new rK({
                          expectedSize: Number.parseInt(n, 10),
                          value: e,
                        });
                      return { dynamic: !1, encoded: n2.M7(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = n2.sH(c),
                      t = Math.ceil(n2.Ej(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(n2.M7(n2.di(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: n2.xW(
                        n2.M7(n2.oB(n2.Ej(e), { size: 32 })),
                        ...n
                      ),
                    };
                  }
                  throw new rZ(n.type);
                })({ checksumAddress: e, parameter: t[a], value: n[a] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === a.length ? "0x" : a;
      }
      function rF(e, t) {
        if (e.length !== t.length)
          throw new rV({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let a = e[r],
            i = t[r];
          n.push(rF.encode(a, i));
        }
        return n2.xW(...n);
      }
      function rq(e) {
        return (Array.isArray(e) && "string" == typeof e[0]) ||
          "string" == typeof e
          ? (function (e) {
              let t = [];
              if ("string" == typeof e) {
                let n = (0, n0.NV)(e),
                  r = n.length;
                for (let e = 0; e < r; e++)
                  t.push((0, n0.Pj)(n[e], { modifiers: nQ.Dv }));
              } else {
                let n = (0, nX.e)(e),
                  r = e.length;
                for (let a = 0; a < r; a++) {
                  let r = e[a];
                  if ((0, nQ.WL)(r)) continue;
                  let i = (0, n0.NV)(r),
                    s = i.length;
                  for (let e = 0; e < s; e++)
                    t.push((0, n0.Pj)(i[e], { modifiers: nQ.Dv, structs: n }));
                }
              }
              if (0 === t.length) throw new rO.A9({ params: e });
              return t;
            })(e)
          : e;
      }
      (rF || (rF = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return rm(n), n2.Ho(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return n2.sH(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return n2.Ho(n2.xb(n), r ? 32 : 1);
        let a = t.match(rj);
        if (a) {
          let [e, t, i = "256"] = a,
            s = Number.parseInt(i, 10) / 8;
          return n2.oB(n, { size: r ? 32 : s, signed: "int" === t });
        }
        let i = t.match(r_);
        if (i) {
          let [e, t] = i;
          if (Number.parseInt(t, 10) !== (n.length - 2) / 2)
            throw new rK({ expectedSize: Number.parseInt(t, 10), value: n });
          return n2.M7(n, 32 * !!r);
        }
        let s = t.match(rT);
        if (s && Array.isArray(n)) {
          let [t, r] = s,
            a = [];
          for (let t = 0; t < n.length; t++) a.push(e(r, n[t], !0));
          return 0 === a.length ? "0x" : n2.xW(...a);
        }
        throw new rZ(t);
      };
      class rG extends n6.C {
        constructor({ data: e, parameters: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [`Params: (${rC.Q(t)})`, `Data:   ${e} (${n} bytes)`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.DataSizeTooSmallError",
            });
        }
      }
      class rH extends n6.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ZeroDataError",
            });
        }
      }
      class rW extends n6.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class rK extends n6.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${n2.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class rV extends n6.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class rJ extends n6.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class rZ extends n6.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function rY(e, t = {}) {
        return rk(e, t);
      }
      function rQ(e, t, n) {
        let r = rA(e, t, n);
        if ("function" !== r.type) throw new rS({ name: t, type: "function" });
        return r;
      }
      let rX = "0x0000000000000000000000000000000000000000";
      async function r0(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: a,
            stateOverrides: i,
            traceAssetChanges: s,
            traceTransfers: o,
            validation: u,
          } = t,
          l = t.account ? (0, tk.J)(t.account) : void 0;
        if (s && !l)
          throw new eW.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = l
            ? (function (...e) {
                let [t, n] = (() => {
                    if (Array.isArray(e[0])) {
                      let [t, n] = e;
                      return [
                        (function (e) {
                          let t = e.find((e) => "constructor" === e.type);
                          if (!t) throw new rS({ name: "constructor" });
                          return t;
                        })(t),
                        n,
                      ];
                    }
                    return e;
                  })(),
                  { bytecode: r, args: a } = n;
                return n2.xW(
                  r,
                  t.inputs?.length && a?.length ? rz(t.inputs, a) : "0x"
                );
              })(rk("constructor(bytes, bytes)"), {
                bytecode: nK.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (...e) {
                    let [t, n = []] = (() => {
                        if (Array.isArray(e[0])) {
                          let [t, n, r] = e;
                          return [rQ(t, n, { args: r }), r];
                        }
                        let [t, n] = e;
                        return [t, n];
                      })(),
                      { overloads: r } = t,
                      a = r ? rQ([t, ...r], t.name, { args: n }) : t,
                      i = rE(a),
                      s = n.length > 0 ? rz(a.inputs, n) : void 0;
                    return s ? n2.xW(i, s) : i;
                  })(rY("function getBalance(address)"), [l.address]),
                ],
              })
            : void 0,
          f = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await tS(e, {
                    account: l.address,
                    ...t,
                    data: t.abi ? (0, c.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          p = await nZ(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: d }], stateOverrides: i },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          rY("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: rX,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: rX, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...a, { to: rX }].map((e) => ({
                  ...e,
                  from: l?.address,
                })),
                stateOverrides: i,
              },
              ...(s
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          rY("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: rX,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: rX, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [rY("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: rX,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: rX, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [
                          rY("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: rX,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: rX, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [rY("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: rX,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: rX, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: o,
            validation: u,
          }),
          h = s ? p[2] : p[0],
          [m, b, , y, g, w, v, x] = s ? p : [],
          { calls: k, ...A } = h,
          E = k.slice(0, -1) ?? [],
          P = [...(m?.calls ?? []), ...(b?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, eD.uU)(e.data) : null
          ),
          I = [...(y?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, eD.uU)(e.data) : null
          ),
          S = (w?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          O = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          C = (v?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = [];
        for (let [e, t] of I.entries()) {
          let n = P[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = S[e - 1],
            a = O[e - 1],
            i = C[e - 1],
            s =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: f[e - 1],
                    decimals: i || r ? Number(r ?? 1) : void 0,
                    symbol: a ?? void 0,
                  };
          T.some((e) => e.token.address === s.address) ||
            T.push({ token: s, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: T, block: A, results: E };
      }
      async function r1(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            functionName: i,
            dataSuffix: s = "string" == typeof e.dataSuffix
              ? e.dataSuffix
              : e.dataSuffix?.value,
            ...o
          } = t,
          u = o.account ? (0, tk.J)(o.account) : e.account,
          l = (0, c.p)({ abi: n, args: a, functionName: i });
        try {
          let { data: c } = await e5(
              e,
              e9.T,
              "call"
            )({
              batch: !1,
              data: `${l}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...o,
              account: u,
            }),
            d = (0, eq.e)({
              abi: n,
              args: a,
              functionName: i,
              data: c || "0x",
            }),
            f = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: d,
            request: {
              abi: f,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: i,
              ...o,
              account: u,
            },
          };
        } catch (e) {
          throw e4(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: i,
            sender: u?.address,
          });
        }
      }
      async function r6(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      let r5 =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      class r2 extends n6.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc6492.InvalidWrappedSignatureError",
            });
        }
      }
      function r8(e, t = {}) {
        let { recovered: n } = t;
        if (void 0 === e.r || void 0 === e.s || (n && void 0 === e.yParity))
          throw new r7({ signature: e });
        if (e.r < 0n || e.r > rB) throw new ae({ value: e.r });
        if (e.s < 0n || e.s > rB) throw new at({ value: e.s });
        if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
          throw new an({ value: e.yParity });
      }
      function r3(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new r9({ signature: e });
        let t = BigInt(n2.di(e, 0, 32)),
          n = BigInt(n2.di(e, 32, 64)),
          r = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                return r4(t);
              } catch {
                throw new an({ value: t });
              }
          })();
        return void 0 === r ? { r: t, s: n } : { r: t, s: n, yParity: r };
      }
      function r4(e) {
        if (0 === e || 27 === e) return 0;
        if (1 === e || 28 === e) return 1;
        if (e >= 35) return +(e % 2 == 0);
        throw new ar({ value: e });
      }
      class r9 extends n6.C {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${n2.Ej(n2.HT(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class r7 extends n6.C {
        constructor({ signature: e }) {
          super(
            `Signature \`${re.As(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class ae extends n6.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class at extends n6.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class an extends n6.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class ar extends n6.C {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      let aa = rq(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
      function ai(e) {
        if ("string" == typeof e) {
          if (
            "0x8010801080108010801080108010801080108010801080108010801080108010" !==
            n2.di(e, -32)
          )
            throw new as(e);
        } else r8(e.authorization);
      }
      class as extends n6.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SignatureErc8010.InvalidWrappedSignatureError",
            });
        }
      }
      var ao = n(37241);
      async function ac({ address: e, authorization: t, signature: n }) {
        return (0, eR.h)(
          (0, tz.b)(e),
          await tK({ authorization: t, signature: n })
        );
      }
      var au = n(87670);
      async function al(e, t) {
        let {
          address: n,
          chain: r = e.chain,
          hash: a,
          erc6492VerifierAddress: i = t.universalSignatureVerifierAddress ??
            r?.contracts?.erc6492Verifier?.address,
          multicallAddress: s = t.multicallAddress ??
            r?.contracts?.multicall3?.address,
          mode: o = "auto",
        } = t;
        if (r?.verifyHash) return await r.verifyHash(e, t);
        let c = (() => {
          let e = t.signature;
          return (0, eX.q)(e)
            ? e
            : "object" == typeof e && "r" in e && "s" in e
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: a }) {
                let i = (() => {
                    if (0 === a || 1 === a) return a;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return +(r % 2n === 0n);
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  s = `0x${new au.secp256k1.Signature(
                    (0, eD.uU)(e),
                    (0, eD.uU)(t)
                  ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
                return "hex" === n ? s : (0, eY.aT)(s);
              })(e)
            : (0, u.My)(e);
        })();
        try {
          if ("eoa" === o)
            try {
              if ((0, eR.h)((0, tz.b)(n), await tH({ hash: a, signature: c })))
                return !0;
            } catch {}
          if (
            (function (e) {
              try {
                return ai(e), !0;
              } catch {
                return !1;
              }
            })(c)
          )
            return await ad(e, { ...t, multicallAddress: s, signature: c });
          return await af(e, { ...t, verifierAddress: i, signature: c });
        } catch (e) {
          if ("eoa" !== o)
            try {
              if ((0, eR.h)((0, tz.b)(n), await tH({ hash: a, signature: c })))
                return !0;
            } catch {}
          if (e instanceof ah) return !1;
          throw e;
        }
      }
      async function ad(e, t) {
        let {
            address: n,
            blockNumber: r,
            blockTag: a,
            hash: i,
            multicallAddress: s,
          } = t,
          {
            authorization: o,
            data: l,
            signature: d,
            to: f,
          } = (function (e) {
            ai(e);
            let t = n2.Ro(n2.di(e, -64, -32)),
              n = n2.di(e, -t - 64, -64),
              r = n2.di(e, 0, -t - 64),
              [a, i, s] = (function (e, t, n = {}) {
                let { as: r = "Array", checksumAddress: a = !1 } = n,
                  i = "string" == typeof t ? rr(t) : t,
                  s = (function (e, { recursiveReadLimit: t = 8192 } = {}) {
                    let n = Object.create(rD);
                    return (
                      (n.bytes = e),
                      (n.dataView = new DataView(
                        e.buffer,
                        e.byteOffset,
                        e.byteLength
                      )),
                      (n.positionReadCount = new Map()),
                      (n.recursiveReadLimit = t),
                      n
                    );
                  })(i);
                if (0 === ra(i) && e.length > 0) throw new rH();
                if (ra(i) && 32 > ra(i))
                  throw new rG({
                    data: "string" == typeof t ? t : n2.uK(t),
                    parameters: e,
                    size: ra(i),
                  });
                let o = 0,
                  c = "Array" === r ? [] : {};
                for (let t = 0; t < e.length; ++t) {
                  let n = e[t];
                  s.setPosition(o);
                  let [i, u] = (function e(t, n, r) {
                    let { checksumAddress: a, staticPosition: i } = r,
                      s = rN(n.type);
                    if (s) {
                      let [r, o] = s;
                      return (function (t, n, r) {
                        let {
                          checksumAddress: a,
                          length: i,
                          staticPosition: s,
                        } = r;
                        if (!i) {
                          let r = s + ri(t.readBytes(32)),
                            i = r + 32;
                          t.setPosition(r);
                          let o = ri(t.readBytes(32)),
                            c = rL(n),
                            u = 0,
                            l = [];
                          for (let r = 0; r < o; ++r) {
                            t.setPosition(i + (c ? 32 * r : u));
                            let [s, o] = e(t, n, {
                              checksumAddress: a,
                              staticPosition: i,
                            });
                            (u += o), l.push(s);
                          }
                          return t.setPosition(s + 32), [l, 32];
                        }
                        if (rL(n)) {
                          let r = s + ri(t.readBytes(32)),
                            o = [];
                          for (let s = 0; s < i; ++s) {
                            t.setPosition(r + 32 * s);
                            let [i] = e(t, n, {
                              checksumAddress: a,
                              staticPosition: r,
                            });
                            o.push(i);
                          }
                          return t.setPosition(s + 32), [o, 32];
                        }
                        let o = 0,
                          c = [];
                        for (let r = 0; r < i; ++r) {
                          let [r, i] = e(t, n, {
                            checksumAddress: a,
                            staticPosition: s + o,
                          });
                          (o += i), c.push(r);
                        }
                        return [c, o];
                      })(
                        t,
                        { ...n, type: o },
                        { checksumAddress: a, length: r, staticPosition: i }
                      );
                    }
                    if ("tuple" === n.type)
                      return (function (t, n, r) {
                        let { checksumAddress: a, staticPosition: i } = r,
                          s =
                            0 === n.components.length ||
                            n.components.some(({ name: e }) => !e),
                          o = s ? [] : {},
                          c = 0;
                        if (rL(n)) {
                          let r = i + ri(t.readBytes(32));
                          for (let i = 0; i < n.components.length; ++i) {
                            let u = n.components[i];
                            t.setPosition(r + c);
                            let [l, d] = e(t, u, {
                              checksumAddress: a,
                              staticPosition: r,
                            });
                            (c += d), (o[s ? i : u?.name] = l);
                          }
                          return t.setPosition(i + 32), [o, 32];
                        }
                        for (let r = 0; r < n.components.length; ++r) {
                          let u = n.components[r],
                            [l, d] = e(t, u, {
                              checksumAddress: a,
                              staticPosition: i,
                            });
                          (o[s ? r : u?.name] = l), (c += d);
                        }
                        return [o, c];
                      })(t, n, { checksumAddress: a, staticPosition: i });
                    if ("address" === n.type)
                      return (function (e, t = {}) {
                        let n,
                          { checksum: r = !1 } = t,
                          a = e.readBytes(32);
                        return [
                          ((n = n2.uK(
                            (function (e, t, n, r = {}) {
                              let { strict: a } = r;
                              !1;
                              let i = e.slice(-20, void 0);
                              return (
                                a &&
                                  (function (e, t, n) {
                                    if (
                                      "number" == typeof t &&
                                      "number" == typeof n &&
                                      ra(e) !== n - t
                                    )
                                      throw new ru({
                                        offset: n,
                                        position: "end",
                                        size: ra(e),
                                      });
                                  })(i, -20, void 0),
                                i
                              );
                            })(a, -20)
                          )),
                          r ? rb(n) : n),
                          32,
                        ];
                      })(t, { checksum: a });
                    if ("bool" === n.type)
                      return [
                        (function (e, t = {}) {
                          let { size: n } = t,
                            r = e;
                          if (
                            (void 0 !== n && (n8(r, n), (r = rs(r))),
                            r.length > 1 || r[0] > 1)
                          )
                            throw new ro(r);
                          return !!r[0];
                        })(t.readBytes(32), { size: 32 }),
                        32,
                      ];
                    if (n.type.startsWith("bytes"))
                      return (function (e, t, { staticPosition: n }) {
                        let [r, a] = t.type.split("bytes");
                        if (!a) {
                          let t = ri(e.readBytes(32));
                          e.setPosition(n + t);
                          let r = ri(e.readBytes(32));
                          if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                          let a = e.readBytes(r);
                          return e.setPosition(n + 32), [n2.uK(a), 32];
                        }
                        return [
                          n2.uK(e.readBytes(Number.parseInt(a, 10), 32)),
                          32,
                        ];
                      })(t, n, { staticPosition: i });
                    if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                      var o = t,
                        c = n;
                      let e = c.type.startsWith("int"),
                        r = Number.parseInt(
                          c.type.split("int")[1] || "256",
                          10
                        ),
                        a = o.readBytes(32);
                      return [
                        r > 48
                          ? (function (e, t = {}) {
                              let { size: n } = t;
                              void 0 !== n && n8(e, n);
                              let r = n2.uK(e, t);
                              return n2.Dg(r, t);
                            })(a, { signed: e })
                          : ri(a, { signed: e }),
                        32,
                      ];
                    }
                    if ("string" === n.type)
                      return (function (e, { staticPosition: t }) {
                        let n = ri(e.readBytes(32));
                        e.setPosition(t + n);
                        let r = ri(e.readBytes(32));
                        if (0 === r) return e.setPosition(t + 32), ["", 32];
                        let a = (function (e, t = {}) {
                          let { size: n } = t,
                            r = e;
                          return (
                            void 0 !== n &&
                              (n8(r, n), (r = n9(r, { dir: "right" }))),
                            rt.decode(r)
                          );
                        })(rs(e.readBytes(r, 32)));
                        return e.setPosition(t + 32), [a, 32];
                      })(t, { staticPosition: i });
                    throw new rZ(n.type);
                  })(s, n, { checksumAddress: a, staticPosition: 0 });
                  (o += u), "Array" === r ? c.push(i) : (c[n.name ?? t] = i);
                }
                return c;
              })(aa, n);
            return {
              authorization: (function (e, t = {}) {
                return "string" == typeof e.chainId
                  ? (function (e) {
                      let { address: t, chainId: n, nonce: r } = e,
                        a = (function (e) {
                          if (void 0 !== e.r && void 0 !== e.s) {
                            var t = e;
                            let n = (() => {
                              var e;
                              if ("string" == typeof t) return r3(t);
                              if (t instanceof Uint8Array) return r3(n2.uK(t));
                              return "string" == typeof t.r
                                ? (function (e) {
                                    let t = (() => {
                                      let t = e.v ? Number(e.v) : void 0,
                                        n = e.yParity
                                          ? Number(e.yParity)
                                          : void 0;
                                      if (
                                        ("number" == typeof t &&
                                          "number" != typeof n &&
                                          (n = r4(t)),
                                        "number" != typeof n)
                                      )
                                        throw new an({ value: e.yParity });
                                      return n;
                                    })();
                                    return {
                                      r: BigInt(e.r),
                                      s: BigInt(e.s),
                                      yParity: t,
                                    };
                                  })(t)
                                : t.v
                                ? { r: (e = t).r, s: e.s, yParity: r4(e.v) }
                                : {
                                    r: t.r,
                                    s: t.s,
                                    ...(void 0 !== t.yParity
                                      ? { yParity: t.yParity }
                                      : {}),
                                  };
                            })();
                            return r8(n), n;
                          }
                        })(e);
                      return {
                        address: t,
                        chainId: Number(n),
                        nonce: BigInt(r),
                        ...a,
                      };
                    })(e)
                  : { ...e, ...t.signature };
              })({
                address: a.delegation,
                chainId: Number(a.chainId),
                nonce: a.nonce,
                yParity: a.yParity,
                r: a.r,
                s: a.s,
              }),
              signature: r,
              ...(s && "0x" !== s ? { data: s, to: i } : {}),
            };
          })(t.signature);
        if (
          (await nP(e, { address: n, blockNumber: r, blockTag: a })) ===
          (0, eZ.aP)(["0xef0100", o.address])
        )
          return await ap(e, {
            address: n,
            blockNumber: r,
            blockTag: a,
            hash: i,
            signature: d,
          });
        let p = {
          address: o.address,
          chainId: Number(o.chainId),
          nonce: Number(o.nonce),
          r: (0, u.cK)(o.r, { size: 32 }),
          s: (0, u.cK)(o.s, { size: 32 }),
          yParity: o.yParity,
        };
        if (!(await ac({ address: n, authorization: p }))) throw new ah();
        let h = await e5(
            e,
            e7,
            "readContract"
          )({
            ...(s ? { address: s } : { code: nK.Ez }),
            authorizationList: [p],
            abi: eF.v2,
            blockNumber: r,
            blockTag: "pending",
            functionName: "aggregate3",
            args: [
              [
                ...(l
                  ? [{ allowFailure: !0, target: f ?? n, callData: l }]
                  : []),
                {
                  allowFailure: !0,
                  target: n,
                  callData: (0, c.p)({
                    abi: eF.UW,
                    functionName: "isValidSignature",
                    args: [i, d],
                  }),
                },
              ],
            ],
          }),
          m = h[h.length - 1]?.returnData;
        if (m?.startsWith("0x1626ba7e")) return !0;
        throw new ah();
      }
      async function af(e, t) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            hash: i,
            signature: s,
            verifierAddress: o,
            ...u
          } = t,
          l = await (async () => {
            if (
              (!r && !a) ||
              (function (e) {
                try {
                  if (n2.di(e, -32) !== r5) throw new r2(e);
                  return !0;
                } catch {
                  return !1;
                }
              })(s)
            )
              return s;
            let {
              data: e,
              signature: t,
              to: n,
            } = { data: a, signature: s, to: r };
            return n2.xW(rz(rq("address, bytes, bytes"), [n, e, t]), r5);
          })(),
          d = o
            ? {
                to: o,
                data: (0, c.p)({
                  abi: eF.E5,
                  functionName: "isValidSig",
                  args: [n, i, l],
                }),
                ...u,
              }
            : {
                data: (0, ao.m)({
                  abi: eF.E5,
                  args: [n, i, l],
                  bytecode: nK.fT,
                }),
                ...u,
              },
          { data: f } = await e5(
            e,
            e9.T,
            "call"
          )(d).catch((e) => {
            if (e instanceof eK.zX) throw new ah();
            throw e;
          });
        if ((0, eD.Nx)(f ?? "0x0")) return !0;
        throw new ah();
      }
      async function ap(e, t) {
        let {
          address: n,
          blockNumber: r,
          blockTag: a,
          hash: i,
          signature: s,
        } = t;
        if (
          (
            await e5(
              e,
              e7,
              "readContract"
            )({
              address: n,
              abi: eF.UW,
              args: [i, s],
              blockNumber: r,
              blockTag: a,
              functionName: "isValidSignature",
            }).catch((e) => {
              if (e instanceof eK.bG) throw new ah();
              throw e;
            })
          ).startsWith("0x1626ba7e")
        )
          return !0;
        throw new ah();
      }
      class ah extends Error {}
      function am(e, t) {
        return (0, eQ.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, u.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, u.My)(e.raw),
              n = (0, u.i3)(`\x19Ethereum Signed Message:
${(0, tF.E)(t)}`);
            return (0, eZ.xW)([n, t]);
          })(e),
          t
        );
      }
      async function ab(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: a,
          signature: i,
          ...s
        }
      ) {
        let o = am(n);
        return e5(
          e,
          al,
          "verifyHash"
        )({
          address: t,
          factory: r,
          factoryData: a,
          hash: o,
          signature: i,
          ...s,
        });
      }
      var ay = n(3677),
        ag = n(2116);
      class aw extends eW.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, ag.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class av extends eW.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class ax extends eW.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var ak = n(45746),
        aA = n(24182);
      function aE(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          a = {
            EIP712Domain: (function ({ domain: e }) {
              return [
                "string" == typeof e?.name && { name: "name", type: "string" },
                e?.version && { name: "version", type: "string" },
                ("number" == typeof e?.chainId ||
                  "bigint" == typeof e?.chainId) && {
                  name: "chainId",
                  type: "uint256",
                },
                e?.verifyingContract && {
                  name: "verifyingContract",
                  type: "address",
                },
                e?.salt && { name: "salt", type: "bytes32" },
              ].filter(Boolean);
            })({ domain: t }),
            ...e.types,
          },
          {
            domain: i,
            message: s,
            primaryType: o,
            types: c,
          } = { domain: t, message: n, primaryType: r, types: a },
          l = (e, t) => {
            for (let n of e) {
              let { name: e, type: r } = n,
                a = t[e],
                i = r.match(aA.Ge);
              if (i && ("number" == typeof a || "bigint" == typeof a)) {
                let [e, t, n] = i;
                (0, u.cK)(a, {
                  signed: "int" === t,
                  size: Number.parseInt(n, 10) / 8,
                });
              }
              if ("address" === r && "string" == typeof a && !(0, ak.P)(a))
                throw new ay.M({ address: a });
              let s = r.match(aA.BD);
              if (s) {
                let [e, t] = s;
                if (t && (0, tF.E)(a) !== Number.parseInt(t, 10))
                  throw new e2.BI({
                    expectedSize: Number.parseInt(t, 10),
                    givenSize: (0, tF.E)(a),
                  });
              }
              let o = c[r];
              o &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new ax({ type: e });
                })(r),
                l(o, a));
            }
          };
        if (c.EIP712Domain && i) {
          if ("object" != typeof i) throw new aw({ domain: i });
          l(c.EIP712Domain, i);
        }
        if ("EIP712Domain" !== o)
          if (c[o]) l(c[o], s);
          else throw new av({ primaryType: o, types: c });
        let d = ["0x1901"];
        return (
          t &&
            d.push(
              (function ({ domain: e, types: t }) {
                return aP({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: a })
            ),
          "EIP712Domain" !== r &&
            d.push(aP({ data: n, primaryType: r, types: a })),
          (0, eQ.S)((0, eZ.xW)(d))
        );
      }
      function aP({ data: e, primaryType: t, types: n }) {
        let r = (function e({ data: t, primaryType: n, types: r }) {
          let a = [{ type: "bytes32" }],
            i = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, u.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let a = t.match(/^\w*/u),
                          i = a?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let a of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${a}(${t[a]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, eQ.S)(n);
              })({ primaryType: n, types: r }),
            ];
          for (let s of r[n]) {
            let [n, o] = (function t({ types: n, name: r, type: a, value: i }) {
              if (void 0 !== n[a])
                return [
                  { type: "bytes32" },
                  (0, eQ.S)(e({ data: i, primaryType: a, types: n })),
                ];
              if ("bytes" === a) return [{ type: "bytes32" }, (0, eQ.S)(i)];
              if ("string" === a)
                return [{ type: "bytes32" }, (0, eQ.S)((0, u.nj)(i))];
              if (a.lastIndexOf("]") === a.length - 1) {
                let e = a.slice(0, a.lastIndexOf("[")),
                  s = i.map((a) => t({ name: r, type: e, types: n, value: a }));
                return [
                  { type: "bytes32" },
                  (0, eQ.S)(
                    (0, tj.h)(
                      s.map(([e]) => e),
                      s.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: a }, i];
            })({ types: r, name: s.name, type: s.type, value: t[s.name] });
            a.push(n), i.push(o);
          }
          return (0, tj.h)(a, i);
        })({ data: e, primaryType: t, types: n });
        return (0, eQ.S)(r);
      }
      async function aI(e, t) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            signature: i,
            message: s,
            primaryType: o,
            types: c,
            domain: u,
            ...l
          } = t,
          d = aE({ message: s, primaryType: o, types: c, domain: u });
        return e5(
          e,
          al,
          "verifyHash"
        )({
          address: n,
          factory: r,
          factoryData: a,
          hash: d,
          signature: i,
          ...l,
        });
      }
      let aS = new Map(),
        aO = new Map(),
        aC = 0;
      function aT(e, t, n) {
        let r = ++aC,
          a = () => aS.get(e) || [],
          i = () => {
            let t = a();
            if (!t.some((e) => e.id === r)) return;
            let n = aO.get(e);
            if (1 === t.length && n) {
              let e = n();
              e instanceof Promise && e.catch(() => {});
            }
            let i = a();
            aS.set(
              e,
              i.filter((e) => e.id !== r)
            );
          },
          s = a();
        if ((aS.set(e, [...s, { id: r, fns: t }]), s && s.length > 0)) return i;
        let o = {};
        for (let e in t)
          o[e] = (...t) => {
            let n = a();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let c = n(o);
        return "function" == typeof c && aO.set(e, c), i;
      }
      var a_ = n(52640),
        aj = n(99533),
        aB = n(90974);
      function aM(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
        let a = !0,
          i = () => (a = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: i }));
            let o = (await n?.(s)) ?? r;
            await (0, aB.u)(o);
            let c = async () => {
              a && (await e({ unpoll: i }), await (0, aB.u)(r), c());
            };
            c();
          })(),
          i
        );
      }
      function aN(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: r,
          onError: a,
          poll: i,
          pollingInterval: s = e.pollingInterval,
        }
      ) {
        let o;
        return (
          void 0 !== i
            ? i
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type))
        )
          ? aT(
              (0, ag.A)(["watchBlockNumber", e.uid, t, n, s]),
              { onBlockNumber: r, onError: a },
              (r) =>
                aM(
                  async () => {
                    try {
                      let t = await e5(
                        e,
                        nA,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (void 0 !== o) {
                        if (t === o) return;
                        if (t - o > 1 && n)
                          for (let e = o + 1n; e < t; e++)
                            r.onBlockNumber(e, o), (o = e);
                      }
                      (void 0 === o || t > o) &&
                        (r.onBlockNumber(t, o), (o = t));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: s }
                )
            )
          : aT(
              (0, ag.A)(["watchBlockNumber", e.uid, t, n]),
              { onBlockNumber: r, onError: a },
              (t) => {
                let n = !0,
                  r = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let a = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: i } = await a.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let r = (0, eD.uU)(e.result?.number);
                            t.onBlockNumber(r, o), (o = r);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (r = i), n || r();
                    } catch (e) {
                      a?.(e);
                    }
                  })(),
                  () => r()
                );
              }
            );
      }
      async function aL(e, t) {
        let n,
          r,
          a,
          i,
          s,
          {
            checkReplacement: o = !0,
            confirmations: c = 1,
            hash: u,
            onReplaced: l,
            retryCount: d = 6,
            retryDelay: f = ({ count: e }) => 200 * ~~(1 << e),
            timeout: p = 18e4,
          } = t,
          h = (0, ag.A)(["waitForTransactionReceipt", e.uid, u]),
          m = t.pollingInterval
            ? t.pollingInterval
            : e.chain?.experimental_preconfirmationTime
            ? e.chain.experimental_preconfirmationTime
            : e.pollingInterval,
          b = !1,
          { promise: y, resolve: g, reject: w } = (0, a_.Y)(),
          v = p
            ? setTimeout(() => {
                s?.(), i?.(), w(new tZ.WA({ hash: u }));
              }, p)
            : void 0;
        return (
          (i = aT(h, { onReplaced: l, resolve: g, reject: w }, async (t) => {
            if (
              (a = await e5(
                e,
                nW,
                "getTransactionReceipt"
              )({ hash: u }).catch(() => void 0)) &&
              c <= 1
            ) {
              clearTimeout(v), t.resolve(a), i?.();
              return;
            }
            s = e5(
              e,
              aN,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: m,
              async onBlockNumber(l) {
                let p = (e) => {
                    clearTimeout(v), s?.(), e(), i?.();
                  },
                  h = l;
                if (!b)
                  try {
                    if (a) {
                      if (
                        c > 1 &&
                        (!a.blockNumber || h - a.blockNumber + 1n < c)
                      )
                        return;
                      p(() => t.resolve(a));
                      return;
                    }
                    if (
                      (o &&
                        !n &&
                        ((b = !0),
                        await (0, aj.b)(
                          async () => {
                            (n = await e5(e, nq, "getTransaction")({ hash: u }))
                              .blockNumber && (h = n.blockNumber);
                          },
                          { delay: f, retryCount: d }
                        ),
                        (b = !1)),
                      (a = await e5(
                        e,
                        nW,
                        "getTransactionReceipt"
                      )({ hash: u })),
                      c > 1 && (!a.blockNumber || h - a.blockNumber + 1n < c))
                    )
                      return;
                    p(() => t.resolve(a));
                  } catch (i) {
                    if (i instanceof tZ.Kz || i instanceof tZ.Kc) {
                      if (!n) {
                        b = !1;
                        return;
                      }
                      try {
                        (r = n), (b = !0);
                        let i = await (0, aj.b)(
                          () =>
                            e5(
                              e,
                              t3,
                              "getBlock"
                            )({ blockNumber: h, includeTransactions: !0 }),
                          {
                            delay: f,
                            retryCount: d,
                            shouldRetry: ({ error: e }) => e instanceof t2,
                          }
                        );
                        b = !1;
                        let s = i.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === r.from && t === r.nonce
                        );
                        if (
                          !s ||
                          ((a = await e5(
                            e,
                            nW,
                            "getTransactionReceipt"
                          )({ hash: s.hash })),
                          c > 1 &&
                            (!a.blockNumber || h - a.blockNumber + 1n < c))
                        )
                          return;
                        let o = "replaced";
                        s.to === r.to &&
                        s.value === r.value &&
                        s.input === r.input
                          ? (o = "repriced")
                          : s.from === s.to &&
                            0n === s.value &&
                            (o = "cancelled"),
                          p(() => {
                            t.onReplaced?.({
                              reason: o,
                              replacedTransaction: r,
                              transaction: s,
                              transactionReceipt: a,
                            }),
                              t.resolve(a);
                          });
                      } catch (e) {
                        p(() => t.reject(e));
                      }
                    } else p(() => t.reject(i));
                  }
              },
            });
          })),
          y
        );
      }
      let aD =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        aR =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function a$(e, t) {
        let {
            address: n,
            domain: r,
            message: a,
            nonce: i,
            scheme: s,
            signature: o,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(aD)?.groups ?? {},
              {
                chainId: a,
                expirationTime: i,
                issuedAt: s,
                notBefore: o,
                requestId: c,
                ...u
              } = e.match(aR)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...u,
              ...(a ? { chainId: Number(a) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(s ? { issuedAt: new Date(s) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(a);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: a,
              scheme: i,
              time: s = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (a && r.nonce !== a) ||
              (i && r.scheme !== i) ||
              (r.expirationTime && s >= r.expirationTime) ||
              (r.notBefore && s < r.notBefore)
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, ak.P)(r.address, { strict: !1 }) ||
                (t && !(0, eR.h)(r.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: l,
            nonce: i,
            scheme: s,
            time: c,
          })
        )
          return !1;
        let d = am(a);
        return al(e, { address: l.address, hash: d, signature: o, ...u });
      }
      async function aU(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      async function az(
        e,
        { serializedTransaction: t, throwOnReceiptRevert: n, timeout: r }
      ) {
        let a = await e.request(
            { method: "eth_sendRawTransactionSync", params: r ? [t, r] : [t] },
            { retryCount: 0 }
          ),
          i = (e.chain?.formatters?.transactionReceipt?.format || nH.uL)(a);
        if ("reverted" === i.status && n) throw new tZ.Sq({ receipt: i });
        return i;
      }
      function aF(e) {
        return {
          call: (t) => (0, e9.T)(e, t),
          createAccessList: (t) => tS(e, t),
          createBlockFilter: () => tC(e),
          createContractEventFilter: (t) => tR(e, t),
          createEventFilter: (t) => t$(e, t),
          createPendingTransactionFilter: () => tU(e),
          estimateContractGas: (t) => ny(e, t),
          estimateGas: (t) => nb(e, t),
          getBalance: (t) => ng(e, t),
          getBlobBaseFee: () => nw(e),
          getBlock: (t) => t3(e, t),
          getBlockNumber: (t) => nA(e, t),
          getBlockTransactionCount: (t) => nE(e, t),
          getBytecode: (t) => nP(e, t),
          getChainId: () => nl(e),
          getCode: (t) => nP(e, t),
          getContractEvents: (t) => nj(e, t),
          getDelegation: (t) => nM(e, t),
          getEip712Domain: (t) => nL(e, t),
          getEnsAddress: (t) => te(e, t),
          getEnsAvatar: (t) => tw(e, t),
          getEnsName: (t) => tv(e, t),
          getEnsResolver: (t) => tx(e, t),
          getEnsText: (t) => tg(e, t),
          getFeeHistory: (t) => nR(e, t),
          estimateFeesPerGas: (t) => ne(e, t),
          getFilterChanges: (t) => n$(e, t),
          getFilterLogs: (t) => nU(e, t),
          getGasPrice: () => t4(e),
          getLogs: (t) => n_(e, t),
          getProof: (t) => nz(e, t),
          estimateMaxPriorityFeePerGas: (t) => t9(e, t),
          fillTransaction: (t) => nd(e, t),
          getStorageAt: (t) => nF(e, t),
          getTransaction: (t) => nq(e, t),
          getTransactionConfirmations: (t) => nG(e, t),
          getTransactionCount: (t) => nn(e, t),
          getTransactionReceipt: (t) => nW(e, t),
          multicall: (t) => nV(e, t),
          prepareTransactionRequest: (t) => nm(e, t),
          readContract: (t) => e7(e, t),
          sendRawTransaction: (t) => aU(e, t),
          sendRawTransactionSync: (t) => az(e, t),
          simulate: (t) => nZ(e, t),
          simulateBlocks: (t) => nZ(e, t),
          simulateCalls: (t) => r0(e, t),
          simulateContract: (t) => r1(e, t),
          verifyHash: (t) => al(e, t),
          verifyMessage: (t) => ab(e, t),
          verifySiweMessage: (t) => a$(e, t),
          verifyTypedData: (t) => aI(e, t),
          uninstallFilter: (t) => r6(e, t),
          waitForTransactionReceipt: (t) => aL(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = e.experimental_blockTag ?? "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: a,
                onError: i,
                includeTransactions: s,
                poll: o,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let u,
                l,
                d,
                f,
                p =
                  void 0 !== o
                    ? o
                    : "webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type)),
                h = s ?? !1;
              return p
                ? aT(
                    (0, ag.A)(["watchBlocks", e.uid, t, n, r, h, c]),
                    { onBlock: a, onError: i },
                    (a) =>
                      aM(
                        async () => {
                          try {
                            let r = await e5(
                              e,
                              t3,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: h });
                            if (null !== r.number && u?.number != null) {
                              if (r.number === u.number) return;
                              if (r.number - u.number > 1 && n)
                                for (
                                  let t = u?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await e5(
                                    e,
                                    t3,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: h });
                                  a.onBlock(n, u), (u = n);
                                }
                            }
                            (u?.number == null ||
                              ("pending" === t && r?.number == null) ||
                              (null !== r.number && r.number > u.number)) &&
                              (a.onBlock(r, u), (u = r));
                          } catch (e) {
                            a.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                  )
                : ((l = !0),
                  (d = !0),
                  (f = () => (l = !1)),
                  (async () => {
                    try {
                      r &&
                        e5(
                          e,
                          t3,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: h })
                          .then((e) => {
                            l && d && (a(e, void 0), (d = !1));
                          })
                          .catch(i);
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: s } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!l) return;
                            let n = await e5(
                              e,
                              t3,
                              "getBlock"
                            )({
                              blockNumber: t.result?.number,
                              includeTransactions: h,
                            }).catch(() => {});
                            l && (a(n, u), (d = !1), (u = n));
                          },
                          onError(e) {
                            i?.(e);
                          },
                        });
                      (f = s), l || f();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchBlockNumber: (t) => aN(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: a,
                batch: i = !0,
                eventName: s,
                fromBlock: o,
                onError: c,
                onLogs: u,
                poll: l,
                pollingInterval: d = e.pollingInterval,
                strict: f,
              } = t;
              return (
                void 0 !== l
                  ? l
                  : "bigint" == typeof o ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type)))
              )
                ? (() => {
                    let t = f ?? !1;
                    return aT(
                      (0, ag.A)([
                        "watchContractEvent",
                        r,
                        a,
                        i,
                        e.uid,
                        s,
                        d,
                        t,
                        o,
                      ]),
                      { onLogs: u, onError: c },
                      (c) => {
                        let u, l;
                        void 0 !== o && (u = o - 1n);
                        let f = !1,
                          p = aM(
                            async () => {
                              if (!f) {
                                try {
                                  l = await e5(
                                    e,
                                    tR,
                                    "createContractEventFilter"
                                  )({
                                    abi: n,
                                    address: r,
                                    args: a,
                                    eventName: s,
                                    strict: t,
                                    fromBlock: o,
                                  });
                                } catch {}
                                f = !0;
                                return;
                              }
                              try {
                                let o;
                                if (l)
                                  o = await e5(
                                    e,
                                    n$,
                                    "getFilterChanges"
                                  )({ filter: l });
                                else {
                                  let i = await e5(e, nA, "getBlockNumber")({});
                                  (o =
                                    u && u < i
                                      ? await e5(
                                          e,
                                          nj,
                                          "getContractEvents"
                                        )({
                                          abi: n,
                                          address: r,
                                          args: a,
                                          eventName: s,
                                          fromBlock: u + 1n,
                                          toBlock: i,
                                          strict: t,
                                        })
                                      : []),
                                    (u = i);
                                }
                                if (0 === o.length) return;
                                if (i) c.onLogs(o);
                                else for (let e of o) c.onLogs([e]);
                              } catch (e) {
                                l && e instanceof e3.Di && (f = !1),
                                  c.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: d }
                          );
                        return async () => {
                          l &&
                            (await e5(e, r6, "uninstallFilter")({ filter: l })),
                            p();
                        };
                      }
                    );
                  })()
                : (() => {
                    let t = (0, ag.A)([
                        "watchContractEvent",
                        r,
                        a,
                        i,
                        e.uid,
                        s,
                        d,
                        f ?? !1,
                      ]),
                      o = !0,
                      l = () => (o = !1);
                    return aT(
                      t,
                      { onLogs: u, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let i = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) =>
                                      "webSocket" === e.config.type ||
                                      "ipc" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = s
                                ? tL({ abi: n, eventName: s, args: a })
                                : [],
                              { unsubscribe: u } = await i.subscribe({
                                params: ["logs", { address: r, topics: c }],
                                onData(e) {
                                  if (!o) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: a } = nC({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: f,
                                      }),
                                      i = (0, nI.e)(r, {
                                        args: a,
                                        eventName: e,
                                      });
                                    t.onLogs([i]);
                                  } catch (i) {
                                    let e, n;
                                    if (
                                      i instanceof e2.fo ||
                                      i instanceof e2.l3
                                    ) {
                                      if (f) return;
                                      (e = i.abiItem.name),
                                        (n = i.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let a = (0, nI.e)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([a]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (l = u), o || l();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => l()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: a,
                events: i,
                fromBlock: s,
                onError: o,
                onLogs: c,
                poll: u,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              }
            ) {
              let f,
                p,
                h =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof s ||
                      ("webSocket" !== e.transport.type &&
                        "ipc" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          ("webSocket" !==
                            e.transport.transports[0].config.type &&
                            "ipc" !== e.transport.transports[0].config.type))),
                m = d ?? !1;
              return h
                ? aT(
                    (0, ag.A)(["watchEvent", t, n, r, e.uid, a, l, s]),
                    { onLogs: c, onError: o },
                    (o) => {
                      let c, u;
                      void 0 !== s && (c = s - 1n);
                      let d = !1,
                        f = aM(
                          async () => {
                            if (!d) {
                              try {
                                u = await e5(
                                  e,
                                  t$,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: a,
                                  events: i,
                                  strict: m,
                                  fromBlock: s,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let s;
                              if (u)
                                s = await e5(
                                  e,
                                  n$,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let r = await e5(e, nA, "getBlockNumber")({});
                                (s =
                                  c && c !== r
                                    ? await e5(
                                        e,
                                        n_,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: a,
                                        events: i,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === s.length) return;
                              if (r) o.onLogs(s);
                              else for (let e of s) o.onLogs([e]);
                            } catch (e) {
                              u && e instanceof e3.Di && (d = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        u &&
                          (await e5(e, r6, "uninstallFilter")({ filter: u })),
                          f();
                      };
                    }
                  )
                : ((f = !0),
                  (p = () => (f = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) =>
                                "webSocket" === e.config.type ||
                                "ipc" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        s = i ?? (a ? [a] : void 0),
                        u = [];
                      s &&
                        ((u = [
                          s.flatMap((e) =>
                            tL({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        a && (u = u[0]));
                      let { unsubscribe: l } = await r.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!f) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = nC({
                                abi: s ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, nI.e)(t, { args: n, eventName: e });
                            c([r]);
                          } catch (a) {
                            let e, n;
                            if (a instanceof e2.fo || a instanceof e2.l3) {
                              if (d) return;
                              (e = a.abiItem.name),
                                (n = a.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, nI.e)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            c([r]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (p = l), f || p();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: a,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let s, o;
              return (
                void 0 !== a
                  ? a
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type
              )
                ? aT(
                    (0, ag.A)(["watchPendingTransactions", e.uid, t, i]),
                    { onTransactions: r, onError: n },
                    (n) => {
                      let r,
                        a = aM(
                          async () => {
                            try {
                              if (!r)
                                try {
                                  r = await e5(
                                    e,
                                    tU,
                                    "createPendingTransactionFilter"
                                  )({});
                                  return;
                                } catch (e) {
                                  throw (a(), e);
                                }
                              let i = await e5(
                                e,
                                n$,
                                "getFilterChanges"
                              )({ filter: r });
                              if (0 === i.length) return;
                              if (t) n.onTransactions(i);
                              else for (let e of i) n.onTransactions([e]);
                            } catch (e) {
                              n.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: i }
                        );
                      return async () => {
                        r &&
                          (await e5(e, r6, "uninstallFilter")({ filter: r })),
                          a();
                      };
                    }
                  )
                : ((s = !0),
                  (o = () => (s = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!s) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (o = t), s || o();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => o());
            })(e, t),
        };
      }
      var aq = n(32544);
      class aG extends eW.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      eW.C;
      var aH = n(17105);
      class aW extends eW.C {
        constructor({ cause: e }) {
          super("Smart Account is not deployed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
              "- An incorrect `sender` address is provided.",
            ],
            name: "AccountNotDeployedError",
          });
        }
      }
      Object.defineProperty(aW, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa20/,
      });
      class aK extends eW.C {
        constructor({ cause: e, data: t, message: n } = {}) {
          let r = n
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t);
        }
      }
      Object.defineProperty(aK, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32521,
      }),
        Object.defineProperty(aK, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class aV extends eW.C {
        constructor({ cause: e }) {
          super("Failed to send funds to beneficiary.", {
            cause: e,
            name: "FailedToSendToBeneficiaryError",
          });
        }
      }
      Object.defineProperty(aV, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa91/,
      });
      class aJ extends eW.C {
        constructor({ cause: e }) {
          super("Gas value overflowed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- one of the gas values exceeded 2**120 (uint120)",
            ].filter(Boolean),
            name: "GasValuesOverflowError",
          });
        }
      }
      Object.defineProperty(aJ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa94/,
      });
      class aZ extends eW.C {
        constructor({ cause: e }) {
          super(
            "The `handleOps` function was called by the Bundler with a gas limit too low.",
            { cause: e, name: "HandleOpsOutOfGasError" }
          );
        }
      }
      Object.defineProperty(aZ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa95/,
      });
      class aY extends eW.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Failed to simulate deployment for Smart Account.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- Invalid `factory`/`factoryData` or `initCode` properties are present",
              "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
              "- Smart Account deployment execution reverted with an error\n",
              t && `factory: ${t}`,
              n && `factoryData: ${n}`,
              r && `initCode: ${r}`,
            ].filter(Boolean),
            name: "InitCodeFailedError",
          });
        }
      }
      Object.defineProperty(aY, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa13/,
      });
      class aQ extends eW.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super(
            "Smart Account initialization implementation did not create an account.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- `factory`/`factoryData` or `initCode` properties are invalid",
                "- Smart Account initialization implementation is incorrect\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
              ].filter(Boolean),
              name: "InitCodeMustCreateSenderError",
            }
          );
        }
      }
      Object.defineProperty(aQ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa15/,
      });
      class aX extends eW.C {
        constructor({
          cause: e,
          factory: t,
          factoryData: n,
          initCode: r,
          sender: a,
        }) {
          super(
            "Smart Account initialization implementation does not return the expected sender.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "Smart Account initialization implementation does not return a sender address\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
                a && `sender: ${a}`,
              ].filter(Boolean),
              name: "InitCodeMustReturnSenderError",
            }
          );
        }
      }
      Object.defineProperty(aX, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa14/,
      });
      class a0 extends eW.C {
        constructor({ cause: e }) {
          super(
            "Smart Account does not have sufficient funds to execute the User Operation.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the Smart Account does not have sufficient funds to cover the required prefund, or",
                "- a Paymaster was not provided",
              ].filter(Boolean),
              name: "InsufficientPrefundError",
            }
          );
        }
      }
      Object.defineProperty(a0, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa21/,
      });
      class a1 extends eW.C {
        constructor({ cause: e }) {
          super(
            "Bundler attempted to call an invalid function on the EntryPoint.",
            { cause: e, name: "InternalCallOnlyError" }
          );
        }
      }
      Object.defineProperty(a1, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa92/,
      });
      class a6 extends eW.C {
        constructor({ cause: e }) {
          super(
            "Bundler used an invalid aggregator for handling aggregated User Operations.",
            { cause: e, name: "InvalidAggregatorError" }
          );
        }
      }
      Object.defineProperty(a6, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa96/,
      });
      class a5 extends eW.C {
        constructor({ cause: e, nonce: t }) {
          super("Invalid Smart Account nonce used for User Operation.", {
            cause: e,
            metaMessages: [t && `nonce: ${t}`].filter(Boolean),
            name: "InvalidAccountNonceError",
          });
        }
      }
      Object.defineProperty(a5, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa25/,
      });
      class a2 extends eW.C {
        constructor({ cause: e }) {
          super("Bundler has not set a beneficiary address.", {
            cause: e,
            name: "InvalidBeneficiaryError",
          });
        }
      }
      Object.defineProperty(a2, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa90/,
      });
      class a8 extends eW.C {
        constructor({ cause: e }) {
          super("Invalid fields set on User Operation.", {
            cause: e,
            name: "InvalidFieldsError",
          });
        }
      }
      Object.defineProperty(a8, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class a3 extends eW.C {
        constructor({ cause: e, paymasterAndData: t }) {
          super("Paymaster properties provided are invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `paymasterAndData` property is of an incorrect length\n",
              t && `paymasterAndData: ${t}`,
            ].filter(Boolean),
            name: "InvalidPaymasterAndDataError",
          });
        }
      }
      Object.defineProperty(a3, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa93/,
      });
      class a4 extends eW.C {
        constructor({ cause: e }) {
          super("Paymaster deposit for the User Operation is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the Paymaster has deposited less than the expected amount via the `deposit` function",
            ].filter(Boolean),
            name: "PaymasterDepositTooLowError",
          });
        }
      }
      Object.defineProperty(a4, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32508,
      }),
        Object.defineProperty(a4, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa31/,
        });
      class a9 extends eW.C {
        constructor({ cause: e }) {
          super(
            "The `validatePaymasterUserOp` function on the Paymaster reverted.",
            { cause: e, name: "PaymasterFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(a9, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa33/,
      });
      class a7 extends eW.C {
        constructor({ cause: e }) {
          super("The Paymaster contract has not been deployed.", {
            cause: e,
            name: "PaymasterNotDeployedError",
          });
        }
      }
      Object.defineProperty(a7, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa30/,
      });
      class ie extends eW.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
            { cause: e, name: "PaymasterRateLimitError" }
          );
        }
      }
      Object.defineProperty(ie, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32504,
      });
      class it extends eW.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) stake or unstake-delay is too low.",
            { cause: e, name: "PaymasterStakeTooLowError" }
          );
        }
      }
      Object.defineProperty(it, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32505,
      });
      class ir extends eW.C {
        constructor({ cause: e }) {
          super("Paymaster `postOp` function reverted.", {
            cause: e,
            name: "PaymasterPostOpFunctionRevertedError",
          });
        }
      }
      Object.defineProperty(ir, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa50/,
      });
      class ia extends eW.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Smart Account has already been deployed.", {
            cause: e,
            metaMessages: [
              "Remove the following properties and try again:",
              t && "`factory`",
              n && "`factoryData`",
              r && "`initCode`",
            ].filter(Boolean),
            name: "SenderAlreadyConstructedError",
          });
        }
      }
      Object.defineProperty(ia, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa10/,
      });
      class ii extends eW.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
            { cause: e, name: "SignatureCheckFailedError" }
          );
        }
      }
      Object.defineProperty(ii, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32507,
      });
      class is extends eW.C {
        constructor({ cause: e }) {
          super(
            "The `validateUserOp` function on the Smart Account reverted.",
            { cause: e, name: "SmartAccountFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(is, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa23/,
      });
      class io extends eW.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account specified unsupported signature aggregator.",
            { cause: e, name: "UnsupportedSignatureAggregatorError" }
          );
        }
      }
      Object.defineProperty(io, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32506,
      });
      class ic extends eW.C {
        constructor({ cause: e }) {
          super("User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
            ].filter(Boolean),
            name: "UserOperationExpiredError",
          });
        }
      }
      Object.defineProperty(ic, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa22/,
      });
      class iu extends eW.C {
        constructor({ cause: e }) {
          super("Paymaster for User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
            ].filter(Boolean),
            name: "UserOperationPaymasterExpiredError",
          });
        }
      }
      Object.defineProperty(iu, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa32/,
      });
      class il extends eW.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
            ].filter(Boolean),
            name: "UserOperationSignatureError",
          });
        }
      }
      Object.defineProperty(il, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa24/,
      });
      class id extends eW.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
            ].filter(Boolean),
            name: "UserOperationPaymasterSignatureError",
          });
        }
      }
      Object.defineProperty(id, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa34/,
      });
      class ip extends eW.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
            { cause: e, name: "UserOperationRejectedByEntryPointError" }
          );
        }
      }
      Object.defineProperty(ip, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32500,
      });
      class ih extends eW.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
            { cause: e, name: "UserOperationRejectedByPaymasterError" }
          );
        }
      }
      Object.defineProperty(ih, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32501,
      });
      class im extends eW.C {
        constructor({ cause: e }) {
          super("User Operation rejected with op code validation error.", {
            cause: e,
            name: "UserOperationRejectedByOpCodeError",
          });
        }
      }
      Object.defineProperty(im, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32502,
      });
      class ib extends eW.C {
        constructor({ cause: e }) {
          super(
            "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
            { cause: e, name: "UserOperationOutOfTimeRangeError" }
          );
        }
      }
      Object.defineProperty(ib, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32503,
      });
      class iy extends eW.C {
        constructor({ cause: e }) {
          super(
            `An error occurred while executing user operation: ${e?.shortMessage}`,
            { cause: e, name: "UnknownBundlerError" }
          );
        }
      }
      class ig extends eW.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit exceeded.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the gas used for verification exceeded the `verificationGasLimit`",
            ].filter(Boolean),
            name: "VerificationGasLimitExceededError",
          });
        }
      }
      Object.defineProperty(ig, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa40/,
      });
      class iw extends eW.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `verificationGasLimit` is too low to verify the User Operation",
            ].filter(Boolean),
            name: "VerificationGasLimitTooLowError",
          });
        }
      }
      Object.defineProperty(iw, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa41/,
      });
      class iv extends eW.C {
        constructor(
          e,
          {
            callData: t,
            callGasLimit: n,
            docsPath: r,
            factory: a,
            factoryData: i,
            initCode: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            nonce: u,
            paymaster: l,
            paymasterAndData: d,
            paymasterData: f,
            paymasterPostOpGasLimit: p,
            paymasterVerificationGasLimit: h,
            preVerificationGas: m,
            sender: b,
            signature: y,
            verificationGasLimit: g,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              (0, tZ.aO)({
                callData: t,
                callGasLimit: n,
                factory: a,
                factoryData: i,
                initCode: s,
                maxFeePerGas: void 0 !== o && `${(0, tJ.Q)(o)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, tJ.Q)(c)} gwei`,
                nonce: u,
                paymaster: l,
                paymasterAndData: d,
                paymasterData: f,
                paymasterPostOpGasLimit: p,
                paymasterVerificationGasLimit: h,
                preVerificationGas: m,
                sender: b,
                signature: y,
                verificationGasLimit: g,
              }),
            ].filter(Boolean),
            name: "UserOperationExecutionError",
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
      class ix extends eW.C {
        constructor({ hash: e }) {
          super(
            `User Operation receipt with hash "${e}" could not be found. The User Operation may not have been processed yet.`,
            { name: "UserOperationReceiptNotFoundError" }
          );
        }
      }
      class ik extends eW.C {
        constructor({ hash: e }) {
          super(`User Operation with hash "${e}" could not be found.`, {
            name: "UserOperationNotFoundError",
          });
        }
      }
      class iA extends eW.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for User Operation with hash "${e}" to be confirmed.`,
            { name: "WaitForUserOperationReceiptTimeoutError" }
          );
        }
      }
      let iE = [aK, a8, a4, ie, it, ii, io, ib, ip, ih, im];
      function iP(e, { calls: t, docsPath: n, ...r }) {
        return new iv(
          (() => {
            let n = (function (e, t) {
              let n = (e.details || "").toLowerCase();
              if (aW.message.test(n)) return new aW({ cause: e });
              if (aV.message.test(n)) return new aV({ cause: e });
              if (aJ.message.test(n)) return new aJ({ cause: e });
              if (aZ.message.test(n)) return new aZ({ cause: e });
              if (aY.message.test(n))
                return new aY({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (aQ.message.test(n))
                return new aQ({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (aX.message.test(n))
                return new aX({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                  sender: t.sender,
                });
              if (a0.message.test(n)) return new a0({ cause: e });
              if (a1.message.test(n)) return new a1({ cause: e });
              if (a5.message.test(n))
                return new a5({ cause: e, nonce: t.nonce });
              if (a6.message.test(n)) return new a6({ cause: e });
              if (a2.message.test(n)) return new a2({ cause: e });
              if (a3.message.test(n)) return new a3({ cause: e });
              if (a4.message.test(n)) return new a4({ cause: e });
              if (a9.message.test(n)) return new a9({ cause: e });
              if (a7.message.test(n)) return new a7({ cause: e });
              if (ir.message.test(n)) return new ir({ cause: e });
              if (is.message.test(n)) return new is({ cause: e });
              if (ia.message.test(n))
                return new ia({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (ic.message.test(n)) return new ic({ cause: e });
              if (iu.message.test(n)) return new iu({ cause: e });
              if (id.message.test(n)) return new id({ cause: e });
              if (il.message.test(n)) return new il({ cause: e });
              if (ig.message.test(n)) return new ig({ cause: e });
              if (iw.message.test(n)) return new iw({ cause: e });
              let r = e.walk((e) => iE.some((t) => t.code === e.code));
              if (r) {
                if (r.code === aK.code)
                  return new aK({ cause: e, data: r.data, message: r.details });
                if (r.code === a8.code) return new a8({ cause: e });
                if (r.code === a4.code) return new a4({ cause: e });
                if (r.code === ie.code) return new ie({ cause: e });
                if (r.code === it.code) return new it({ cause: e });
                if (r.code === ii.code) return new ii({ cause: e });
                if (r.code === io.code) return new io({ cause: e });
                if (r.code === ib.code) return new ib({ cause: e });
                if (r.code === ip.code) return new ip({ cause: e });
                if (r.code === ih.code) return new ih({ cause: e });
                if (r.code === im.code) return new im({ cause: e });
              }
              return new iy({ cause: e });
            })(e, r);
            if (t && n instanceof aK) {
              let e,
                r =
                  (n.walk((t) => {
                    if (
                      "string" == typeof t.data ||
                      "string" == typeof t.data?.revertData ||
                      (!(t instanceof eW.C) && "string" == typeof t.message)
                    ) {
                      let n = (
                        t.data?.revertData ||
                        t.data ||
                        t.message
                      ).match?.(/(0x[A-Za-z0-9]*)/);
                      if (n) return (e = n[1]), !0;
                    }
                    return !1;
                  }),
                  e),
                a = t?.filter((e) => e.abi);
              if (r && a.length > 0)
                return (function (e) {
                  let { calls: t, revertData: n } = e,
                    {
                      abi: r,
                      functionName: a,
                      args: i,
                      to: s,
                    } = (() => {
                      let e = t?.filter((e) => !!e.abi);
                      if (1 === e.length) return e[0];
                      let r = e.filter((e) => {
                        try {
                          return !!(0, aH.W)({ abi: e.abi, data: n });
                        } catch {
                          return !1;
                        }
                      });
                      return 1 === r.length
                        ? r[0]
                        : {
                            abi: [],
                            functionName: e.reduce(
                              (e, t) =>
                                `${e ? `${e} | ` : ""}${t.functionName}`,
                              ""
                            ),
                            args: void 0,
                            to: void 0,
                          };
                    })(),
                    o =
                      "0x" === n
                        ? new eK.rR({ functionName: a })
                        : new eK.M({ abi: r, data: n, functionName: a });
                  return new eK.bG(o, {
                    abi: r,
                    args: i,
                    contractAddress: s,
                    functionName: a,
                  });
                })({ calls: a, revertData: r });
            }
            return n;
          })(),
          { docsPath: n, ...r }
        );
      }
      var iI = n(46141);
      function iS(e) {
        var t;
        let n = {};
        return (
          void 0 !== e.callData && (n.callData = e.callData),
          void 0 !== e.callGasLimit &&
            (n.callGasLimit = (0, u.cK)(e.callGasLimit)),
          void 0 !== e.factory && (n.factory = e.factory),
          void 0 !== e.factoryData && (n.factoryData = e.factoryData),
          void 0 !== e.initCode && (n.initCode = e.initCode),
          void 0 !== e.maxFeePerGas &&
            (n.maxFeePerGas = (0, u.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas = (0, u.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (n.nonce = (0, u.cK)(e.nonce)),
          void 0 !== e.paymaster && (n.paymaster = e.paymaster),
          void 0 !== e.paymasterAndData &&
            (n.paymasterAndData = e.paymasterAndData || "0x"),
          void 0 !== e.paymasterData && (n.paymasterData = e.paymasterData),
          void 0 !== e.paymasterPostOpGasLimit &&
            (n.paymasterPostOpGasLimit = (0, u.cK)(e.paymasterPostOpGasLimit)),
          void 0 !== e.paymasterSignature &&
            (n.paymasterSignature = e.paymasterSignature),
          void 0 !== e.paymasterVerificationGasLimit &&
            (n.paymasterVerificationGasLimit = (0, u.cK)(
              e.paymasterVerificationGasLimit
            )),
          void 0 !== e.preVerificationGas &&
            (n.preVerificationGas = (0, u.cK)(e.preVerificationGas)),
          void 0 !== e.sender && (n.sender = e.sender),
          void 0 !== e.signature && (n.signature = e.signature),
          void 0 !== e.verificationGasLimit &&
            (n.verificationGasLimit = (0, u.cK)(e.verificationGasLimit)),
          void 0 !== e.authorization &&
            (n.eip7702Auth = {
              address: (t = e.authorization).address,
              chainId: (0, u.cK)(t.chainId),
              nonce: (0, u.cK)(t.nonce),
              r: t.r
                ? (0, u.cK)(BigInt(t.r), { size: 32 })
                : (0, iI.eV)("0x", { size: 32 }),
              s: t.s
                ? (0, u.cK)(BigInt(t.s), { size: 32 })
                : (0, iI.eV)("0x", { size: 32 }),
              yParity: t.yParity
                ? (0, u.cK)(t.yParity, { size: 1 })
                : (0, iI.eV)("0x", { size: 32 }),
            }),
          n
        );
      }
      async function iO(e, t) {
        let { account: n = e.account, chainId: r, nonce: a } = t;
        if (!n)
          throw new aG({ docsPath: "/docs/eip7702/prepareAuthorization" });
        let i = (0, tk.J)(n),
          s = (() => {
            if (t.executor)
              return "self" === t.executor ? t.executor : (0, tk.J)(t.executor);
          })(),
          o = { address: t.contractAddress ?? t.address, chainId: r, nonce: a };
        return (
          void 0 === o.chainId &&
            (o.chainId = e.chain?.id ?? (await e5(e, nl, "getChainId")({}))),
          void 0 === o.nonce &&
            ((o.nonce = await e5(
              e,
              nn,
              "getTransactionCount"
            )({ address: i.address, blockTag: "pending" })),
            ("self" === s || (s?.address && (0, eR.h)(s.address, i.address))) &&
              (o.nonce += 1)),
          o
        );
      }
      async function iC(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          s = iS(i),
          {
            paymasterPostOpGasLimit: o,
            paymasterVerificationGasLimit: c,
            ...l
          } = await e.request({
            method: "pm_getPaymasterData",
            params: [
              {
                ...s,
                callGasLimit: s.callGasLimit ?? "0x0",
                verificationGasLimit: s.verificationGasLimit ?? "0x0",
                preVerificationGas: s.preVerificationGas ?? "0x0",
              },
              r,
              (0, u.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(o && { paymasterPostOpGasLimit: (0, eD.uU)(o) }),
          ...(c && { paymasterVerificationGasLimit: (0, eD.uU)(c) }),
        };
      }
      async function iT(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          s = iS(i),
          {
            paymasterPostOpGasLimit: o,
            paymasterVerificationGasLimit: c,
            ...l
          } = await e.request({
            method: "pm_getPaymasterStubData",
            params: [
              {
                ...s,
                callGasLimit: s.callGasLimit ?? "0x0",
                verificationGasLimit: s.verificationGasLimit ?? "0x0",
                preVerificationGas: s.preVerificationGas ?? "0x0",
              },
              r,
              (0, u.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(o && { paymasterPostOpGasLimit: (0, eD.uU)(o) }),
          ...(c && { paymasterVerificationGasLimit: (0, eD.uU)(c) }),
        };
      }
      let i_ = [
        "factory",
        "fees",
        "gas",
        "paymaster",
        "nonce",
        "signature",
        "authorization",
      ];
      async function ij(e, t) {
        let n,
          {
            account: r = e.account,
            dataSuffix: a = "string" == typeof e.dataSuffix
              ? e.dataSuffix
              : e.dataSuffix?.value,
            parameters: i = i_,
            stateOverride: s,
          } = t;
        if (!r) throw new aG();
        let o = (0, tk.J)(r),
          u = t.paymaster ?? e?.paymaster,
          l = "string" == typeof u ? u : void 0,
          { getPaymasterStubData: d, getPaymasterData: f } = (() => {
            if (!0 === u)
              return {
                getPaymasterStubData: (t) =>
                  e5(e, iT, "getPaymasterStubData")(t),
                getPaymasterData: (t) => e5(e, iC, "getPaymasterData")(t),
              };
            if ("object" == typeof u) {
              let { getPaymasterStubData: e, getPaymasterData: t } = u;
              return {
                getPaymasterStubData: t && e ? e : t,
                getPaymasterData: t && e ? t : void 0,
              };
            }
            return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
          })(),
          p = t.paymasterContext ? t.paymasterContext : e?.paymasterContext,
          h = { ...t, paymaster: l, sender: o.address },
          [m, b, y, g, w] = await Promise.all([
            (async () =>
              t.calls
                ? o.encodeCalls(
                    t.calls.map((e) =>
                      e.abi
                        ? { data: (0, c.p)(e), to: e.to, value: e.value }
                        : e
                    )
                  )
                : t.callData)(),
            (async () => {
              if (!i.includes("factory")) return;
              if (t.initCode) return { initCode: t.initCode };
              if (t.factory && t.factoryData)
                return { factory: t.factory, factoryData: t.factoryData };
              let { factory: e, factoryData: n } = await o.getFactoryArgs();
              return "0.6" === o.entryPoint.version
                ? { initCode: e && n ? (0, eZ.xW)([e, n]) : void 0 }
                : { factory: e, factoryData: n };
            })(),
            (async () => {
              if (i.includes("fees")) {
                if (
                  "bigint" == typeof t.maxFeePerGas &&
                  "bigint" == typeof t.maxPriorityFeePerGas
                )
                  return h;
                if (e?.userOperation?.estimateFeesPerGas) {
                  let t = await e.userOperation.estimateFeesPerGas({
                    account: o,
                    bundlerClient: e,
                    userOperation: h,
                  });
                  return { ...h, ...t };
                }
                try {
                  let n = e.client ?? e,
                    r = await e5(
                      n,
                      ne,
                      "estimateFeesPerGas"
                    )({ chain: n.chain, type: "eip1559" });
                  return {
                    maxFeePerGas:
                      "bigint" == typeof t.maxFeePerGas
                        ? t.maxFeePerGas
                        : BigInt(2n * r.maxFeePerGas),
                    maxPriorityFeePerGas:
                      "bigint" == typeof t.maxPriorityFeePerGas
                        ? t.maxPriorityFeePerGas
                        : BigInt(2n * r.maxPriorityFeePerGas),
                  };
                } catch {
                  return;
                }
              }
            })(),
            (async () => {
              if (i.includes("nonce"))
                return "bigint" == typeof t.nonce ? t.nonce : o.getNonce();
            })(),
            (async () => {
              if (i.includes("authorization")) {
                if ("object" == typeof t.authorization) return t.authorization;
                if (o.authorization && !(await o.isDeployed()))
                  return {
                    ...(await iO(o.client, o.authorization)),
                    r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                    s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    yParity: 1,
                  };
              }
            })(),
          ]);
        async function v() {
          return (
            n ||
            (e.chain ? e.chain.id : (n = await e5(e, nl, "getChainId")({})))
          );
        }
        void 0 !== m && (h.callData = a ? (0, eZ.xW)([m, a]) : m),
          void 0 !== b && (h = { ...h, ...b }),
          void 0 !== y && (h = { ...h, ...y }),
          void 0 !== g && (h.nonce = g),
          void 0 !== w && (h.authorization = w),
          i.includes("signature") &&
            (void 0 !== t.signature
              ? (h.signature = t.signature)
              : (h.signature = await o.getStubSignature(h))),
          "0.6" !== o.entryPoint.version || h.initCode || (h.initCode = "0x");
        let x = !1;
        if (i.includes("paymaster") && d && !l && !t.paymasterAndData) {
          let {
            isFinal: e = !1,
            sponsor: t,
            ...n
          } = await d({
            chainId: await v(),
            entryPointAddress: o.entryPoint.address,
            context: p,
            ...h,
          });
          (x = e), (h = { ...h, ...n });
        }
        if (
          ("0.6" !== o.entryPoint.version ||
            h.paymasterAndData ||
            (h.paymasterAndData = "0x"),
          i.includes("gas"))
        ) {
          if (o.userOperation?.estimateGas) {
            let e = await o.userOperation.estimateGas(h);
            h = { ...h, ...e };
          }
          if (
            void 0 === h.callGasLimit ||
            void 0 === h.preVerificationGas ||
            void 0 === h.verificationGasLimit ||
            (h.paymaster && void 0 === h.paymasterPostOpGasLimit) ||
            (h.paymaster && void 0 === h.paymasterVerificationGasLimit)
          ) {
            let t = await e5(
              e,
              iB,
              "estimateUserOperationGas"
            )({
              account: o,
              callGasLimit: 0n,
              preVerificationGas: 0n,
              verificationGasLimit: 0n,
              stateOverride: s,
              ...(h.paymaster
                ? {
                    paymasterPostOpGasLimit: 0n,
                    paymasterVerificationGasLimit: 0n,
                  }
                : {}),
              ...h,
            });
            h = {
              ...h,
              callGasLimit: h.callGasLimit ?? t.callGasLimit,
              preVerificationGas: h.preVerificationGas ?? t.preVerificationGas,
              verificationGasLimit:
                h.verificationGasLimit ?? t.verificationGasLimit,
              paymasterPostOpGasLimit:
                h.paymasterPostOpGasLimit ?? t.paymasterPostOpGasLimit,
              paymasterVerificationGasLimit:
                h.paymasterVerificationGasLimit ??
                t.paymasterVerificationGasLimit,
            };
          }
        }
        if (i.includes("paymaster") && f && !l && !t.paymasterAndData && !x) {
          let e = await f({
            chainId: await v(),
            entryPointAddress: o.entryPoint.address,
            context: p,
            ...h,
          });
          h = { ...h, ...e };
        }
        return (
          delete h.calls,
          delete h.parameters,
          delete h.paymasterContext,
          "string" != typeof h.paymaster && delete h.paymaster,
          h
        );
      }
      async function iB(e, t) {
        let {
          account: n = e.account,
          entryPointAddress: r,
          stateOverride: a,
        } = t;
        if (!n && !t.sender) throw new aG();
        let i = n ? (0, tk.J)(n) : void 0,
          s = (0, t0.yH)(a),
          o = i
            ? await e5(
                e,
                ij,
                "prepareUserOperation"
              )({
                ...t,
                parameters: [
                  "authorization",
                  "factory",
                  "nonce",
                  "paymaster",
                  "signature",
                ],
              })
            : t;
        try {
          let t = [iS(o), r ?? i?.entryPoint?.address];
          var c = await e.request({
            method: "eth_estimateUserOperationGas",
            params: s ? [...t, s] : [...t],
          });
          let n = {};
          return (
            c.callGasLimit && (n.callGasLimit = BigInt(c.callGasLimit)),
            c.preVerificationGas &&
              (n.preVerificationGas = BigInt(c.preVerificationGas)),
            c.verificationGasLimit &&
              (n.verificationGasLimit = BigInt(c.verificationGasLimit)),
            c.paymasterPostOpGasLimit &&
              (n.paymasterPostOpGasLimit = BigInt(c.paymasterPostOpGasLimit)),
            c.paymasterVerificationGasLimit &&
              (n.paymasterVerificationGasLimit = BigInt(
                c.paymasterVerificationGasLimit
              )),
            n
          );
        } catch (n) {
          let e = t.calls;
          throw iP(n, { ...o, ...(e ? { calls: e } : {}) });
        }
      }
      async function iM(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationByHash", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new ik({ hash: t });
        let {
          blockHash: r,
          blockNumber: a,
          entryPoint: i,
          transactionHash: s,
          userOperation: o,
        } = n;
        return {
          blockHash: r,
          blockNumber: BigInt(a),
          entryPoint: i,
          transactionHash: s,
          userOperation: (function (e) {
            let t = { ...e };
            return (
              e.callGasLimit && (t.callGasLimit = BigInt(e.callGasLimit)),
              e.maxFeePerGas && (t.maxFeePerGas = BigInt(e.maxFeePerGas)),
              e.maxPriorityFeePerGas &&
                (t.maxPriorityFeePerGas = BigInt(e.maxPriorityFeePerGas)),
              e.nonce && (t.nonce = BigInt(e.nonce)),
              e.paymasterPostOpGasLimit &&
                (t.paymasterPostOpGasLimit = BigInt(e.paymasterPostOpGasLimit)),
              e.paymasterVerificationGasLimit &&
                (t.paymasterVerificationGasLimit = BigInt(
                  e.paymasterVerificationGasLimit
                )),
              e.preVerificationGas &&
                (t.preVerificationGas = BigInt(e.preVerificationGas)),
              e.verificationGasLimit &&
                (t.verificationGasLimit = BigInt(e.verificationGasLimit)),
              t
            );
          })(o),
        };
      }
      async function iN(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new ix({ hash: t });
        let r = { ...n };
        return (
          n.actualGasCost && (r.actualGasCost = BigInt(n.actualGasCost)),
          n.actualGasUsed && (r.actualGasUsed = BigInt(n.actualGasUsed)),
          n.logs && (r.logs = n.logs.map((e) => (0, nI.e)(e))),
          n.receipt && (r.receipt = (0, nH.uL)(r.receipt)),
          r
        );
      }
      async function iL(e, t) {
        let { account: n = e.account, entryPointAddress: r } = t;
        if (!n && !t.sender) throw new aG();
        let a = n ? (0, tk.J)(n) : void 0,
          i = a ? await e5(e, ij, "prepareUserOperation")(t) : t,
          s = t.signature || (await a?.signUserOperation?.(i)),
          o = iS({ ...i, signature: s });
        try {
          return await e.request(
            {
              method: "eth_sendUserOperation",
              params: [o, r ?? a?.entryPoint?.address],
            },
            { retryCount: 0 }
          );
        } catch (n) {
          let e = t.calls;
          throw iP(n, { ...i, ...(e ? { calls: e } : {}), signature: s });
        }
      }
      function iD(e) {
        return {
          estimateUserOperationGas: (t) => iB(e, t),
          getChainId: () => nl(e),
          getSupportedEntryPoints: () =>
            e.request({ method: "eth_supportedEntryPoints" }),
          getUserOperation: (t) => iM(e, t),
          getUserOperationReceipt: (t) => iN(e, t),
          prepareUserOperation: (t) => ij(e, t),
          sendUserOperation: (t) => iL(e, t),
          waitForUserOperationReceipt: (t) =>
            (function (e, t) {
              let {
                  hash: n,
                  pollingInterval: r = e.pollingInterval,
                  retryCount: a,
                  timeout: i = 12e4,
                } = t,
                s = 0,
                o = (0, ag.A)(["waitForUserOperationReceipt", e.uid, n]);
              return new Promise((t, c) => {
                let u = aT(o, { resolve: t, reject: c }, (t) => {
                  let o = (e) => {
                      l(), e(), u();
                    },
                    c = i
                      ? setTimeout(
                          () => o(() => t.reject(new iA({ hash: n }))),
                          i
                        )
                      : void 0,
                    l = aM(
                      async () => {
                        a &&
                          s >= a &&
                          (clearTimeout(c),
                          o(() => t.reject(new iA({ hash: n }))));
                        try {
                          let r = await e5(
                            e,
                            iN,
                            "getUserOperationReceipt"
                          )({ hash: n });
                          clearTimeout(c), o(() => t.resolve(r));
                        } catch (e) {
                          "UserOperationReceiptNotFoundError" !== e.name &&
                            (clearTimeout(c), o(() => t.reject(e)));
                        }
                        s++;
                      },
                      { emitOnBegin: !0, interval: r }
                    );
                  return l;
                });
              });
            })(e, t),
        };
      }
      let iR = p(() => ({}));
      function i$(e) {
        e.forEach((e) => {
          var t, n, r, a, i, s, o, c;
          if (!e.rpcUrl) return;
          let u = (function (e) {
              let { key: t = "public", name: n = "Public Client" } = e;
              return (0, ez.U)({
                ...e,
                key: t,
                name: n,
                type: "publicClient",
              }).extend(aF);
            })({
              chain: (0, eU.x)({
                id: e.id,
                rpcUrls: { default: { http: [e.rpcUrl] } },
                name:
                  null != (n = null == (t = e.nativeCurrency) ? void 0 : t.name)
                    ? n
                    : "",
                nativeCurrency: {
                  name:
                    null !=
                    (a = null == (r = e.nativeCurrency) ? void 0 : r.name)
                      ? a
                      : "",
                  symbol:
                    null !=
                    (s = null == (i = e.nativeCurrency) ? void 0 : i.symbol)
                      ? s
                      : "",
                  decimals:
                    null !=
                    (c = null == (o = e.nativeCurrency) ? void 0 : o.decimal)
                      ? c
                      : 18,
                },
              }),
              transport: (0, aq.L)(e.rpcUrl),
            }),
            l = (function (e) {
              let {
                client: t,
                dataSuffix: n,
                key: r = "bundler",
                name: a = "Bundler Client",
                paymaster: i,
                paymasterContext: s,
                transport: o,
                userOperation: c,
              } = e;
              return Object.assign(
                (0, ez.U)({
                  ...e,
                  chain: e.chain ?? t?.chain,
                  key: r,
                  name: a,
                  transport: o,
                  type: "bundlerClient",
                }),
                {
                  client: t,
                  dataSuffix: n ?? t?.dataSuffix,
                  paymaster: i,
                  paymasterContext: s,
                  userOperation: c,
                }
              ).extend(iD);
            })({ client: u, transport: (0, aq.L)(e.rpcUrl) });
          iR.setState({ [e.id]: { client: u, bundlerClient: l } });
        });
      }
      function iU(e) {
        var t;
        return null == (t = iR.getState()[e]) ? void 0 : t.client;
      }
      function iz(e) {
        if ("object" != typeof e || null === e)
          throw T.rpc.internal("sub account info is not an object");
        if (!("address" in e)) throw T.rpc.internal("sub account is invalid");
        if (
          "address" in e &&
          "string" == typeof e.address &&
          !(0, ak.P)(e.address)
        )
          throw T.rpc.internal("sub account address is invalid");
        if (
          "factory" in e &&
          "string" == typeof e.factory &&
          !(0, ak.P)(e.factory)
        )
          throw T.rpc.internal("sub account factory address is invalid");
        if (
          "factoryData" in e &&
          "string" == typeof e.factoryData &&
          !(0, eX.q)(e.factoryData)
        )
          throw T.rpc.internal("sub account factory data is invalid");
      }
      async function iF() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function iq(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function iG(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function iH(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function iW(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function iK(e, t) {
        let n = iW(e);
        return ew(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function iV(e, t) {
        let n = iW(e),
          r = ev(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function iJ(e, t) {
        return iG(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function iZ(e, t) {
        return JSON.parse(await iH(t, e));
      }
      var iY = n(76364),
        iQ = n(31325),
        iX = n(87897);
      let i0 = (0, iX.D0)(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        i1 = i0.create(BigInt("-3")),
        i6 = BigInt(
          "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
        ),
        i5 = (0, iQ.s)(
          {
            a: i1,
            b: i6,
            Fp: i0,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          iY.sc
        ),
        i2 = (0, iX.D0)(
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
          )
        ),
        i8 = i2.create(BigInt("-3")),
        i3 = BigInt(
          "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
        );
      (0, iQ.s)(
        {
          a: i8,
          b: i3,
          Fp: i2,
          n: BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
          ),
          Gx: BigInt(
            "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
          ),
          Gy: BigInt(
            "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
          ),
          h: BigInt(1),
          lowS: !1,
        },
        iY.qt
      );
      let i4 = (0, iX.D0)(
          BigInt(
            "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          )
        ),
        i9 = i4.create(BigInt("-3")),
        i7 = BigInt(
          "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
        );
      (0, iQ.s)(
        {
          a: i9,
          b: i7,
          Fp: i4,
          n: BigInt(
            "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
          ),
          Gx: BigInt(
            "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
          ),
          Gy: BigInt(
            "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
          ),
          h: BigInt(1),
          lowS: !1,
          allowedPrivateKeyLengths: [130, 131, 132],
        },
        iY.Zf
      );
      class se extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof se) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            r = (t.cause instanceof se && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${r ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || r
                ? ["", n ? `Details: ${n}` : void 0, r ? `See: ${a}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
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
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
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
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = a),
            (this.docsPath = r),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      function st(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
      function sn(e, t) {
        if (sp(e) > t) throw new sy({ givenSize: sp(e), maxSize: t });
      }
      function sr(e, t = {}) {
        let { dir: n, size: r = 32 } = t;
        if (0 === r) return e;
        let a = e.replace("0x", "");
        if (a.length > 2 * r)
          throw new sw({
            size: Math.ceil(a.length / 2),
            targetSize: r,
            type: "Hex",
          });
        return `0x${a["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
      let sa = new TextEncoder(),
        si = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function ss(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function so(e) {
        return e instanceof Uint8Array
          ? sc(e)
          : Array.isArray(e)
          ? sc(new Uint8Array(e))
          : e;
      }
      function sc(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += si[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (sn(r, t.size), sd(r, t.size)) : r;
      }
      function su(e, t = {}) {
        var n;
        let r,
          { signed: a, size: i } = t,
          s = BigInt(e);
        i
          ? (r = a
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof r && a ? -r - 1n : 0;
        if ((r && s > r) || s < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new sh({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: a,
            size: i,
            value: `${e}${t}`,
          });
        }
        let c = (a && s < 0 ? (1n << BigInt(8 * i)) + BigInt(s) : s).toString(
            16
          ),
          u = `0x${c}`;
        return i ? ((n = u), sr(n, { dir: "left", size: i })) : u;
      }
      function sl(e, t = {}) {
        return sc(sa.encode(e), t);
      }
      function sd(e, t) {
        return sr(e, { dir: "right", size: t });
      }
      function sf(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > sp(e) - 1)
          throw new sg({ offset: t, position: "start", size: sp(e) });
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                sp(e) !== n - t
              )
                throw new sg({ offset: n, position: "end", size: sp(e) });
            })(i, t, n),
          i
        );
      }
      function sp(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class sh extends se {
        constructor({ max: e, min: t, signed: n, size: r, value: a }) {
          super(
            `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class sm extends se {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? st(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class sb extends se {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class sy extends se {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class sg extends se {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class sw extends se {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      let sv = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function sx(e) {
        return e >= sv.zero && e <= sv.nine
          ? e - sv.zero
          : e >= sv.A && e <= sv.F
          ? e - (sv.A - 10)
          : e >= sv.a && e <= sv.f
          ? e - (sv.a - 10)
          : void 0;
      }
      function sk(e) {
        return e instanceof Uint8Array
          ? e
          : "string" == typeof e
          ? sE(e)
          : sA(e);
      }
      function sA(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e);
      }
      function sE(e, t = {}) {
        let { size: n } = t,
          r = e;
        n && (sn(e, n), (r = sd(e, n)));
        let a = r.slice(2);
        a.length % 2 && (a = `0${a}`);
        let i = a.length / 2,
          s = new Uint8Array(i);
        for (let e = 0, t = 0; e < i; e++) {
          let n = sx(a.charCodeAt(t++)),
            r = sx(a.charCodeAt(t++));
          if (void 0 === n || void 0 === r)
            throw new se(
              `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
            );
          s[e] = 16 * n + r;
        }
        return s;
      }
      function sP(e) {
        return e.length;
      }
      function sI(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > sP(e) - 1)
          throw new sT({ offset: t, position: "start", size: sP(e) });
        let i = e.slice(t, n);
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                sP(e) !== n - t
              )
                throw new sT({ offset: n, position: "end", size: sP(e) });
            })(i, t, n),
          i
        );
      }
      function sS(e, t = {}) {
        let { size: n } = t;
        return (
          void 0 !== n &&
            (function (e, t) {
              if (sP(e) > t) throw new sC({ givenSize: sP(e), maxSize: t });
            })(e, n),
          (function (e, t = {}) {
            let { signed: n } = t;
            t.size && sn(e, t.size);
            let r = BigInt(e);
            if (!n) return r;
            let a = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
            return r <= a >> 1n ? r : r - a - 1n;
          })(sc(e, t), t)
        );
      }
      class sO extends se {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? st(e) : e
            }\` of type \`${typeof e}\` is an invalid Bytes value.`,
            { metaMessages: ["Bytes values must be of type `Bytes`."] }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesTypeError",
            });
        }
      }
      class sC extends se {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class sT extends se {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      function s_(e, t = {}) {
        let { compressed: n } = t,
          { prefix: r, x: a, y: i } = e;
        if (!1 === n || ("bigint" == typeof a && "bigint" == typeof i)) {
          if (4 !== r) throw new sN({ prefix: r, cause: new sD() });
          return;
        }
        if (!0 === n || ("bigint" == typeof a && void 0 === i)) {
          if (3 !== r && 2 !== r) throw new sN({ prefix: r, cause: new sL() });
          return;
        }
        throw new sM({ publicKey: e });
      }
      function sj(e) {
        if (132 !== e.length && 130 !== e.length && 68 !== e.length)
          throw new sR({ publicKey: e });
        if (130 === e.length)
          return {
            prefix: 4,
            x: BigInt(sf(e, 0, 32)),
            y: BigInt(sf(e, 32, 64)),
          };
        if (132 === e.length) {
          let t = Number(sf(e, 0, 1));
          return {
            prefix: t,
            x: BigInt(sf(e, 1, 33)),
            y: BigInt(sf(e, 33, 65)),
          };
        }
        return { prefix: Number(sf(e, 0, 1)), x: BigInt(sf(e, 1, 33)) };
      }
      function sB(e, t = {}) {
        s_(e);
        let { prefix: n, x: r, y: a } = e,
          { includePrefix: i = !0 } = t;
        return ss(
          i ? su(n, { size: 1 }) : "0x",
          su(r, { size: 32 }),
          "bigint" == typeof a ? su(a, { size: 32 }) : "0x"
        );
      }
      class sM extends se {
        constructor({ publicKey: e }) {
          super(`Value \`${st(e)}\` is not a valid public key.`, {
            metaMessages: [
              "Public key must contain:",
              "- an `x` and `prefix` value (compressed)",
              "- an `x`, `y`, and `prefix` value (uncompressed)",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidError",
            });
        }
      }
      class sN extends se {
        constructor({ prefix: e, cause: t }) {
          super(`Prefix "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidPrefixError",
            });
        }
      }
      class sL extends se {
        constructor() {
          super("Prefix must be 2 or 3 for compressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidCompressedPrefixError",
            });
        }
      }
      class sD extends se {
        constructor() {
          super("Prefix must be 4 for uncompressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidUncompressedPrefixError",
            });
        }
      }
      class sR extends se {
        constructor({ publicKey: e }) {
          super(`Value \`${e}\` is an invalid public key size.`, {
            metaMessages: [
              "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
              `Received ${sp(so(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidSerializedSizeError",
            });
        }
      }
      async function s$(e = {}) {
        let { extractable: t = !1 } = e,
          n = await globalThis.crypto.subtle.generateKey(
            { name: "ECDSA", namedCurve: "P-256" },
            t,
            ["sign", "verify"]
          ),
          r = (function (e) {
            let t = (() => {
              if (
                (function (e, t = {}) {
                  let { strict: n = !1 } = t;
                  try {
                    return (
                      !(function (e, t = {}) {
                        let { strict: n = !1 } = t;
                        if (!e || "string" != typeof e) throw new sm(e);
                        if (
                          (n && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                          !e.startsWith("0x")
                        )
                          throw new sb(e);
                      })(e, { strict: n }),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return sj(e);
              if (
                (function (e) {
                  try {
                    if (
                      !(e instanceof Uint8Array) &&
                      (!e ||
                        "object" != typeof e ||
                        !("BYTES_PER_ELEMENT" in e) ||
                        1 !== e.BYTES_PER_ELEMENT ||
                        "Uint8Array" !== e.constructor.name)
                    )
                      throw new sO(e);
                    return !0;
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return sj(sc(e));
              let { prefix: t, x: n, y: r } = e;
              return "bigint" == typeof n && "bigint" == typeof r
                ? { prefix: t ?? 4, x: n, y: r }
                : { prefix: t, x: n };
            })();
            return s_(t), t;
          })(
            new Uint8Array(
              await globalThis.crypto.subtle.exportKey("raw", n.publicKey)
            )
          );
        return { privateKey: n.privateKey, publicKey: r };
      }
      async function sU(e) {
        let { payload: t, privateKey: n } = e,
          r = sA(
            new Uint8Array(
              await globalThis.crypto.subtle.sign(
                { name: "ECDSA", hash: "SHA-256" },
                n,
                sk(t)
              )
            )
          ),
          a = sS(sI(r, 0, 32)),
          i = sS(sI(r, 32, 64));
        return i > i5.CURVE.n / 2n && (i = i5.CURVE.n - i), { r: a, s: i };
      }
      let sz = new TextDecoder(),
        sF = Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [t, e.charCodeAt(0)])
        );
      function sq(e, ...t) {
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
      function sG(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function sH(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function sW(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function sK(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      function sV(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          sq(e),
          e
        );
      }
      ({
        ...Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [e.charCodeAt(0), t])
        ),
        61: 0,
        45: 62,
        95: 63,
      });
      class sJ {}
      class sZ extends sJ {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = sW(this.buffer));
        }
        update(e) {
          sG(this), sq((e = sV(e)));
          let { view: t, buffer: n, blockLen: r } = this,
            a = e.length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = sW(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          sG(this);
          sq(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              "digestInto() expects output buffer of length at least " + t
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            sH(this.buffer.subarray(s)),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = sW(e),
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
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.destroyed = i),
            (e.finished = a),
            (e.length = r),
            (e.pos = s),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let sY = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        sQ = BigInt(0x100000000 - 1),
        sX = BigInt(32),
        s0 = Uint32Array.from([
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
        s1 = new Uint32Array(64);
      class s6 extends sZ {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | sY[0]),
            (this.B = 0 | sY[1]),
            (this.C = 0 | sY[2]),
            (this.D = 0 | sY[3]),
            (this.E = 0 | sY[4]),
            (this.F = 0 | sY[5]),
            (this.G = 0 | sY[6]),
            (this.H = 0 | sY[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) s1[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = s1[e - 15],
              n = s1[e - 2],
              r = sK(t, 7) ^ sK(t, 18) ^ (t >>> 3),
              a = sK(n, 17) ^ sK(n, 19) ^ (n >>> 10);
            s1[e] = (a + s1[e - 7] + r + s1[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            var l, d, f, p;
            let t =
                (u +
                  (sK(s, 6) ^ sK(s, 11) ^ sK(s, 25)) +
                  (((l = s) & o) ^ (~l & c)) +
                  s0[e] +
                  s1[e]) |
                0,
              h =
                ((sK(n, 2) ^ sK(n, 13) ^ sK(n, 22)) +
                  (((d = n) & (f = r)) ^ (d & (p = a)) ^ (f & p))) |
                0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + h) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          sH(s1);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), sH(this.buffer);
        }
      }
      !(function (e, t = !1) {
        let n = e.length,
          r = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let i = 0; i < n; i++) {
          let { h: n, l: s } = (function (e, t = !1) {
            return t
              ? { h: Number(e & sQ), l: Number((e >> sX) & sQ) }
              : { h: 0 | Number((e >> sX) & sQ), l: 0 | Number(e & sQ) };
          })(e[i], t);
          [r[i], a[i]] = [n, s];
        }
      })(
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
      );
      let s5 = (function (e) {
        let t = (t) => e().update(sV(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      })(() => new s6());
      function s2(e, t = {}) {
        let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
          r = s5(sk(e));
        return "Bytes" === n ? r : sc(r);
      }
      Uint8Array.from([
        105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186,
        233,
      ]);
      let s8 = 2n ** 256n - 1n;
      function s3(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new s4({ signature: e });
        let t = BigInt(sf(e, 0, 32)),
          n = BigInt(sf(e, 32, 64)),
          r = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                var n = t;
                if (0 === n || 27 === n) return 0;
                if (1 === n || 28 === n) return 1;
                if (n >= 35) return +(n % 2 == 0);
                throw new on({ value: n });
              } catch {
                throw new ot({ value: t });
              }
          })();
        return void 0 === r ? { r: t, s: n } : { r: t, s: n, yParity: r };
      }
      class s4 extends se {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${sp(so(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class s9 extends se {
        constructor({ signature: e }) {
          super(
            `Signature \`${st(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class s7 extends se {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class oe extends se {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class ot extends se {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class on extends se {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      var or = n(77737);
      let oa = "activeId",
        oi = (function (e, t) {
          let n =
            "undefined" != typeof indexedDB
              ? (0, or.createStore)(e, t)
              : void 0;
          return {
            getItem: async (e) => {
              let t = await (0, or.get)(e, n);
              return t || null;
            },
            removeItem: async (e) => (0, or.del)(e, n),
            setItem: async (e, t) => (0, or.set)(e, t, n),
          };
        })("cbwsdk", "keys");
      async function os() {
        let e = await s$({ extractable: !1 }),
          t = sf(sB(e.publicKey), 1);
        return await oi.setItem(t, e), await oi.setItem(oa, t), e;
      }
      async function oo() {
        let e = await oi.getItem(oa);
        if (!e) return null;
        let t = await oi.getItem(e);
        return t || null;
      }
      async function oc() {
        let e = await oo();
        if (!e) {
          let e = await os(),
            t = sf(sB(e.publicKey), 1);
          return await oi.setItem(t, e), await oi.setItem(oa, t), e;
        }
        return e;
      }
      async function ou() {
        let e = await oc(),
          t = sf(sB(e.publicKey), 1),
          n = async (t) => {
            let { payload: n, metadata: r } = (function (e) {
              let {
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  flag: a,
                  origin: i,
                  rpId: s,
                  signCount: o,
                  userVerification: c = "required",
                } = e,
                u = (function (e = {}) {
                  let {
                      flag: t = 5,
                      rpId: n = window.location.hostname,
                      signCount: r = 0,
                    } = e,
                    a = s2(sl(n));
                  return ss(a, su(t, { size: 1 }), su(r, { size: 4 }));
                })({ flag: a, rpId: s, signCount: o }),
                l = (function (e) {
                  let {
                    challenge: t,
                    crossOrigin: n = !1,
                    extraClientData: r,
                    origin: a = window.location.origin,
                  } = e;
                  return JSON.stringify({
                    type: "webauthn.get",
                    challenge: (function (e, t = {}) {
                      return (function (e, t = {}) {
                        let { pad: n = !0, url: r = !1 } = t,
                          a = new Uint8Array(4 * Math.ceil(e.length / 3));
                        for (let t = 0, n = 0; n < e.length; t += 4, n += 3) {
                          let r =
                            (e[n] << 16) + (e[n + 1] << 8) + (0 | e[n + 2]);
                          (a[t] = sF[r >> 18]),
                            (a[t + 1] = sF[(r >> 12) & 63]),
                            (a[t + 2] = sF[(r >> 6) & 63]),
                            (a[t + 3] = sF[63 & r]);
                        }
                        let i = e.length % 3,
                          s = 4 * Math.floor(e.length / 3) + (i && i + 1),
                          o = sz.decode(new Uint8Array(a.buffer, 0, s));
                        return (
                          n && 1 === i && (o += "=="),
                          n && 2 === i && (o += "="),
                          r &&
                            (o = o.replaceAll("+", "-").replaceAll("/", "_")),
                          o
                        );
                      })(sE(e), t);
                    })(t, { url: !0, pad: !1 }),
                    origin: a,
                    crossOrigin: n,
                    ...r,
                  });
                })({
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  origin: i,
                }),
                d = s2(sl(l)),
                f = l.indexOf('"challenge"'),
                p = l.indexOf('"type"');
              return {
                metadata: {
                  authenticatorData: u,
                  clientDataJSON: l,
                  challengeIndex: f,
                  typeIndex: p,
                  userVerificationRequired: "required" === c,
                },
                payload: ss(u, d),
              };
            })({
              challenge: t,
              origin: "https://keys.coinbase.com",
              userVerification: "preferred",
            });
            return {
              signature: (function (e) {
                !(function (e, t = {}) {
                  let { recovered: n } = t;
                  if (
                    void 0 === e.r ||
                    void 0 === e.s ||
                    (n && void 0 === e.yParity)
                  )
                    throw new s9({ signature: e });
                  if (e.r < 0n || e.r > s8) throw new s7({ value: e.r });
                  if (e.s < 0n || e.s > s8) throw new oe({ value: e.s });
                  if (
                    "number" == typeof e.yParity &&
                    0 !== e.yParity &&
                    1 !== e.yParity
                  )
                    throw new ot({ value: e.yParity });
                })(e);
                let t = e.r,
                  n = e.s;
                return ss(
                  su(t, { size: 32 }),
                  su(n, { size: 32 }),
                  "number" == typeof e.yParity
                    ? su(
                        (function (e) {
                          if (0 === e) return 27;
                          if (1 === e) return 28;
                          throw new ot({ value: e });
                        })(e.yParity),
                        { size: 1 }
                      )
                    : "0x"
                );
              })(await sU({ payload: n, privateKey: e.privateKey })),
              raw: {},
              webauthn: r,
            };
          };
        return {
          id: t,
          publicKey: t,
          sign: async ({ hash: e }) => n(e),
          signMessage: async ({ message: e }) => n(am(e)),
          signTypedData: async (e) => n(aE(e)),
          type: "webAuthn",
        };
      }
      async function ol() {
        return { account: await ou() };
      }
      let od = { storageKey: "ownPrivateKey", keyType: "private" },
        of = { storageKey: "ownPublicKey", keyType: "public" },
        op = { storageKey: "peerPublicKey", keyType: "public" };
      class oh {
        constructor() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(op, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            g.keys.clear();
        }
        async generateKeyPair() {
          let e = await iF();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(od, e.privateKey),
            await this.storeKey(of, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(od)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(of)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(op)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await iq(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = g.keys.get(e.storageKey);
          return t ? iV(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await iK(e.keyType, t);
          g.keys.set(e.storageKey, n);
        }
      }
      function om(e, t) {
        if ("object" == typeof e && null !== e)
          return t
            .split(/[.[\]]+/)
            .filter(Boolean)
            .reduce((e, t) => {
              if ("object" == typeof e && null !== e) return e[t];
            }, e);
      }
      class ob extends eW.C {
        constructor(e) {
          super(`Call bundle failed with status: ${e.statusCode}`, {
            name: "BundleFailedError",
          }),
            Object.defineProperty(this, "result", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.result = e);
        }
      }
      let oy = (0, u.cK)(0, { size: 32 });
      async function og(e, t) {
        async function n(t) {
          if (
            t.endsWith(
              "0x5792579257925792579257925792579257925792579257925792579257925792".slice(
                2
              )
            )
          ) {
            let n = (0, eH.B)((0, nB.iN)(t, -64, -32)),
              r = (0, nB.iN)(t, 0, -64)
                .slice(2)
                .match(/.{1,64}/g),
              a = await Promise.all(
                r.map((t) =>
                  oy.slice(2) !== t
                    ? e.request(
                        {
                          method: "eth_getTransactionReceipt",
                          params: [`0x${t}`],
                        },
                        { dedupe: !0 }
                      )
                    : void 0
                )
              ),
              i = a.some((e) => null === e)
                ? 100
                : a.every((e) => e?.status === "0x1")
                ? 200
                : a.every((e) => e?.status === "0x0")
                ? 500
                : 600;
            return {
              atomic: !1,
              chainId: (0, eD.ME)(n),
              receipts: a.filter(Boolean),
              status: i,
              version: "2.0.0",
            };
          }
          return e.request({ method: "wallet_getCallsStatus", params: [t] });
        }
        let {
            atomic: r = !1,
            chainId: a,
            receipts: i,
            version: s = "2.0.0",
            ...o
          } = await n(t.id),
          [c, u] = (() => {
            let e = o.status;
            return e >= 100 && e < 200
              ? ["pending", e]
              : e >= 200 && e < 300
              ? ["success", e]
              : e >= 300 && e < 700
              ? ["failure", e]
              : "CONFIRMED" === e
              ? ["success", 200]
              : "PENDING" === e
              ? ["pending", 100]
              : [void 0, e];
          })();
        return {
          ...o,
          atomic: r,
          chainId: a ? (0, eD.ME)(a) : void 0,
          receipts:
            i?.map((e) => ({
              ...e,
              blockNumber: (0, eD.uU)(e.blockNumber),
              gasUsed: (0, eD.uU)(e.gasUsed),
              status: nH.Lj[e.status],
            })) ?? [],
          statusCode: u,
          status: c,
          version: s,
        };
      }
      async function ow(e, t) {
        let n,
          {
            id: r,
            pollingInterval: a = e.pollingInterval,
            status: i = ({ statusCode: e }) => 200 === e || e >= 300,
            retryCount: s = 4,
            retryDelay: o = ({ count: e }) => 200 * ~~(1 << e),
            timeout: c = 6e4,
            throwOnFailure: u = !1,
          } = t,
          l = (0, ag.A)(["waitForCallsStatus", e.uid, r]),
          { promise: d, resolve: f, reject: p } = (0, a_.Y)(),
          h = aT(l, { resolve: f, reject: p }, (t) => {
            let c = aM(
              async () => {
                let a = (e) => {
                  clearTimeout(n), c(), e(), h();
                };
                try {
                  let n = await (0, aj.b)(
                    async () => {
                      let t = await e5(e, og, "getCallsStatus")({ id: r });
                      if (u && "failure" === t.status) throw new ob(t);
                      return t;
                    },
                    { retryCount: s, delay: o }
                  );
                  if (!i(n)) return;
                  a(() => t.resolve(n));
                } catch (e) {
                  a(() => t.reject(e));
                }
              },
              { interval: a, emitOnBegin: !0 }
            );
            return c;
          });
        return (
          (n = c
            ? setTimeout(() => {
                h(), clearTimeout(n), p(new ov({ id: r }));
              }, c)
            : void 0),
          await d
        );
      }
      class ov extends eW.C {
        constructor({ id: e }) {
          super(
            `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
            { name: "WaitForCallsStatusTimeoutError" }
          );
        }
      }
      function ox(e) {
        var t;
        if (!Array.isArray(e.params)) return null;
        switch (e.method) {
          case "personal_sign":
            return e.params[1];
          case "eth_signTypedData_v4":
            return e.params[0];
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "wallet_sendCalls":
            return null == (t = e.params[0]) ? void 0 : t.from;
          default:
            return null;
        }
      }
      function ok(e) {
        var t;
        if (
          !e ||
          !Array.isArray(e) ||
          !(null == (t = e[0]) ? void 0 : t.chainId) ||
          ("string" != typeof e[0].chainId && "number" != typeof e[0].chainId)
        )
          throw T.rpc.invalidParams();
      }
      function oA(e, t) {
        let n = Object.assign({}, e);
        if (t && e.method.startsWith("wallet_")) {
          let e = om(n, "params.0.capabilities");
          if ((void 0 === e && (e = {}), "object" != typeof e))
            throw T.rpc.invalidParams();
          (e = Object.assign(Object.assign({}, t), e)),
            n.params &&
              Array.isArray(n.params) &&
              (n.params[0] = Object.assign(Object.assign({}, n.params[0]), {
                capabilities: e,
              }));
        }
        return n;
      }
      async function oE() {
        var e;
        let t = null != (e = g.subAccountsConfig.get()) ? e : {},
          n = {};
        if (t.enableAutoSubAccounts) {
          let { account: e } = t.toOwnerAccount
            ? await t.toOwnerAccount()
            : await ol();
          if (!e) throw T.provider.unauthorized("No owner account found");
          n.addSubAccount = {
            account: {
              type: "create",
              keys: [
                {
                  type: e.address ? "address" : "webauthn-p256",
                  publicKey: e.address || e.publicKey,
                },
              ],
            },
          };
        }
        g.subAccountsConfig.set({ capabilities: n });
      }
      async function oP({ client: e, id: t }) {
        var n;
        let r = await ow(e, { id: t });
        if ("success" === r.status)
          return null == (n = r.receipts) ? void 0 : n[0].transactionHash;
        throw T.rpc.internal("failed to send transaction");
      }
      function oI({ calls: e, from: t, chainId: n, capabilities: r }) {
        let a = y.get().paymasterUrls,
          i = {
            method: "wallet_sendCalls",
            params: [
              {
                version: "1.0",
                calls: e,
                chainId: (0, u.cK)(n),
                from: t,
                atomicRequired: !0,
                capabilities: r,
              },
            ],
          };
        return (
          (null == a ? void 0 : a[n]) &&
            (i = oA(i, {
              paymasterService: { url: null == a ? void 0 : a[n] },
            })),
          i
        );
      }
      async function oS() {
        let e = ec();
        return await new Promise((t) => {
          V({ snackbarContext: "sub_account_insufficient_balance" }),
            e.presentItem({
              autoExpand: !0,
              message: "Insufficient spend permission. Choose how to proceed:",
              menuItems: [
                {
                  isRed: !1,
                  info: "Create new Spend Permission",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    J({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "create_permission",
                    }),
                      e.clear(),
                      t("update_permission");
                  },
                },
                {
                  isRed: !1,
                  info: "Continue in Popup",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    J({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "continue_in_popup",
                    }),
                      e.clear(),
                      t("continue_popup");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    J({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      function oO(e, t) {
        let n = e.filter((e) => e !== t);
        return [t, ...n];
      }
      function oC(e, t) {
        return [...e.filter((e) => e !== t), t];
      }
      async function oT() {
        let e = g.spendPermissions.get(),
          t = g.subAccounts.get(),
          n = g.account.get().accounts;
        return n
          ? {
              accounts:
                null == n
                  ? void 0
                  : n.map((n) => ({
                      address: n,
                      capabilities: {
                        subAccounts: t ? [t] : void 0,
                        spendPermissions:
                          e.length > 0 ? { permissions: e } : void 0,
                      },
                    })),
            }
          : null;
      }
      function o_(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replaceAll("+", "-")
          .replaceAll("/", "_")
          .replace(/=+$/, "");
      }
      var oj = n(59578);
      let oB = [
        {
          inputs: [
            { name: "preOpGas", type: "uint256" },
            { name: "paid", type: "uint256" },
            { name: "validAfter", type: "uint48" },
            { name: "validUntil", type: "uint48" },
            { name: "targetSuccess", type: "bool" },
            { name: "targetResult", type: "bytes" },
          ],
          name: "ExecutionResult",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
          ],
          name: "FailedOp",
          type: "error",
        },
        {
          inputs: [{ name: "sender", type: "address" }],
          name: "SenderAddressResult",
          type: "error",
        },
        {
          inputs: [{ name: "aggregator", type: "address" }],
          name: "SignatureValidationFailed",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResult",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "aggregator", type: "address" },
                {
                  components: [
                    { name: "stake", type: "uint256" },
                    { name: "unstakeDelaySec", type: "uint256" },
                  ],
                  name: "stakeInfo",
                  type: "tuple",
                },
              ],
              name: "aggregatorInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResultWithAggregation",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "factory", type: "address" },
            { indexed: !1, name: "paymaster", type: "address" },
          ],
          name: "AccountDeployed",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalDeposit", type: "uint256" },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
          name: "SignatureAggregatorChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalStaked", type: "uint256" },
            { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
          ],
          name: "StakeLocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawTime", type: "uint256" },
          ],
          name: "StakeUnlocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "paymaster", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "success", type: "bool" },
            { indexed: !1, name: "actualGasCost", type: "uint256" },
            { indexed: !1, name: "actualGasUsed", type: "uint256" },
          ],
          name: "UserOperationEvent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "UserOperationRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "SIG_VALIDATION_FAILED",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "initCode", type: "bytes" },
            { name: "sender", type: "address" },
            { name: "paymasterAndData", type: "bytes" },
          ],
          name: "_validateSenderAndPaymaster",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
          name: "addStake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "depositTo",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "", type: "address" }],
          name: "deposits",
          outputs: [
            { name: "deposit", type: "uint112" },
            { name: "staked", type: "bool" },
            { name: "stake", type: "uint112" },
            { name: "unstakeDelaySec", type: "uint32" },
            { name: "withdrawTime", type: "uint48" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "getDepositInfo",
          outputs: [
            {
              components: [
                { name: "deposit", type: "uint112" },
                { name: "staked", type: "bool" },
                { name: "stake", type: "uint112" },
                { name: "unstakeDelaySec", type: "uint32" },
                { name: "withdrawTime", type: "uint48" },
              ],
              name: "info",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "sender", type: "address" },
            { name: "key", type: "uint192" },
          ],
          name: "getNonce",
          outputs: [{ name: "nonce", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "initCode", type: "bytes" }],
          name: "getSenderAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "initCode", type: "bytes" },
                    { name: "callData", type: "bytes" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                    { name: "paymasterAndData", type: "bytes" },
                    { name: "signature", type: "bytes" },
                  ],
                  name: "userOps",
                  type: "tuple[]",
                },
                { name: "aggregator", type: "address" },
                { name: "signature", type: "bytes" },
              ],
              name: "opsPerAggregator",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleAggregatedOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "ops",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "key", type: "uint192" }],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "callData", type: "bytes" },
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "paymaster", type: "address" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                  ],
                  name: "mUserOp",
                  type: "tuple",
                },
                { name: "userOpHash", type: "bytes32" },
                { name: "prefund", type: "uint256" },
                { name: "contextOffset", type: "uint256" },
                { name: "preOpGas", type: "uint256" },
              ],
              name: "opInfo",
              type: "tuple",
            },
            { name: "context", type: "bytes" },
          ],
          name: "innerHandleOp",
          outputs: [{ name: "actualGasCost", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "uint192" },
          ],
          name: "nonceSequenceNumber",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "op",
              type: "tuple",
            },
            { name: "target", type: "address" },
            { name: "targetCallData", type: "bytes" },
          ],
          name: "simulateHandleOp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "simulateValidation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "withdrawAddress", type: "address" }],
          name: "withdrawStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "withdrawAddress", type: "address" },
            { name: "withdrawAmount", type: "uint256" },
          ],
          name: "withdrawTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
      var oM = n(20258);
      function oN(e) {
        let { address: t, data: n, signature: r, to: a = "hex" } = e,
          i = (0, eZ.aP)([
            (0, tj.h)(
              [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
              [t, n, r]
            ),
            "0x6492649264926492649264926492649264926492649264926492649264926492",
          ]);
        return "hex" === a ? i : (0, eY.aT)(i);
      }
      async function oL(e) {
        let {
            extend: t,
            nonceKeyManager: n = (function (e) {
              let { source: t } = e,
                n = new Map(),
                r = new no.A(8192),
                a = new Map(),
                i = ({ address: e, chainId: t }) => `${e}.${t}`;
              return {
                async consume({ address: e, chainId: n, client: a }) {
                  let s = i({ address: e, chainId: n }),
                    o = this.get({ address: e, chainId: n, client: a });
                  this.increment({ address: e, chainId: n });
                  let c = await o;
                  return (
                    await t.set({ address: e, chainId: n }, c), r.set(s, c), c
                  );
                },
                async increment({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t }),
                    a = n.get(r) ?? 0;
                  n.set(r, a + 1);
                },
                async get({ address: e, chainId: s, client: o }) {
                  let c = i({ address: e, chainId: s }),
                    u = a.get(c);
                  return (
                    u ||
                      ((u = (async () => {
                        try {
                          let n = await t.get({
                              address: e,
                              chainId: s,
                              client: o,
                            }),
                            a = r.get(c) ?? 0;
                          if (a > 0 && n <= a) return a + 1;
                          return r.delete(c), n;
                        } finally {
                          this.reset({ address: e, chainId: s });
                        }
                      })()),
                      a.set(c, u)),
                    (n.get(c) ?? 0) + (await u)
                  );
                },
                reset({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t });
                  n.delete(r), a.delete(r);
                },
              };
            })({ source: { get: () => Date.now(), set() {} } }),
            ...r
          } = e,
          a = !1,
          i = await e.getAddress();
        return {
          ...t,
          ...r,
          address: i,
          async getFactoryArgs() {
            return "isDeployed" in this && (await this.isDeployed())
              ? { factory: void 0, factoryData: void 0 }
              : e.getFactoryArgs();
          },
          async getNonce(t) {
            let r =
              t?.key ??
              BigInt(
                await n.consume({
                  address: i,
                  chainId: e.client.chain.id,
                  client: e.client,
                })
              );
            return e.getNonce
              ? await e.getNonce({ ...t, key: r })
              : await e7(e.client, {
                  abi: (0, oM.U)([
                    "function getNonce(address, uint192) pure returns (uint256)",
                  ]),
                  address: e.entryPoint.address,
                  functionName: "getNonce",
                  args: [i, r],
                });
          },
          isDeployed: async () =>
            !!a || (a = !!(await e5(e.client, nP, "getCode")({ address: i }))),
          ...(e.sign
            ? {
                async sign(t) {
                  let [{ factory: n, factoryData: r }, a] = await Promise.all([
                    this.getFactoryArgs(),
                    e.sign(t),
                  ]);
                  return n && r ? oN({ address: n, data: r, signature: a }) : a;
                },
              }
            : {}),
          async signMessage(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signMessage(t),
            ]);
            return n && r && "0x7702" !== n
              ? oN({ address: n, data: r, signature: a })
              : a;
          },
          async signTypedData(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signTypedData(t),
            ]);
            return n && r && "0x7702" !== n
              ? oN({ address: n, data: r, signature: a })
              : a;
          },
          type: "smart",
        };
      }
      function oD(e, t = {}) {
        let { forHash: n } = t,
          { authorization: r, factory: a, factoryData: i } = e;
        return n &&
          ("0x7702" === a || "0x7702000000000000000000000000000000000000" === a)
          ? r
            ? (0, eZ.xW)([r.address, i ?? "0x"])
            : "0x7702000000000000000000000000000000000000"
          : a
          ? (0, eZ.xW)([a, i ?? "0x"])
          : "0x";
      }
      let oR = "0x22e325a297439656";
      function o$(e, t = {}) {
        let {
            callGasLimit: n,
            callData: r,
            maxPriorityFeePerGas: a,
            maxFeePerGas: i,
            paymaster: s,
            paymasterData: o,
            paymasterPostOpGasLimit: c,
            paymasterSignature: l,
            paymasterVerificationGasLimit: d,
            sender: f,
            signature: p = "0x",
            verificationGasLimit: h,
          } = e,
          m = (0, eZ.xW)([
            (0, iI.eV)((0, u.cK)(h || 0n), { size: 16 }),
            (0, iI.eV)((0, u.cK)(n || 0n), { size: 16 }),
          ]),
          b = oD(e, t),
          y = (0, eZ.xW)([
            (0, iI.eV)((0, u.cK)(a || 0n), { size: 16 }),
            (0, iI.eV)((0, u.cK)(i || 0n), { size: 16 }),
          ]),
          g = e.nonce ?? 0n;
        return {
          accountGasLimits: m,
          callData: r,
          initCode: b,
          gasFees: y,
          nonce: g,
          paymasterAndData: s
            ? (0, eZ.xW)([
                s,
                (0, iI.eV)((0, u.cK)(d || 0n), { size: 16 }),
                (0, iI.eV)((0, u.cK)(c || 0n), { size: 16 }),
                o || "0x",
                ...(l
                  ? t.forHash
                    ? [oR]
                    : [l, (0, iI.eV)((0, u.cK)((0, tF.E)(l)), { size: 2 }), oR]
                  : []),
              ])
            : "0x",
          preVerificationGas: e.preVerificationGas ?? 0n,
          sender: f,
          signature: p,
        };
      }
      let oU = {
        PackedUserOperation: [
          { type: "address", name: "sender" },
          { type: "uint256", name: "nonce" },
          { type: "bytes", name: "initCode" },
          { type: "bytes", name: "callData" },
          { type: "bytes32", name: "accountGasLimits" },
          { type: "uint256", name: "preVerificationGas" },
          { type: "bytes32", name: "gasFees" },
          { type: "bytes", name: "paymasterAndData" },
        ],
      };
      var oz = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      async function oF(e) {
        let {
            owner: t,
            ownerIndex: n,
            address: r,
            client: a,
            factoryData: i,
          } = e,
          s = {
            abi: oB,
            address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
            version: "0.6",
          },
          o = { abi: k, address: w };
        return oL({
          client: a,
          entryPoint: s,
          extend: { abi: x, factory: o },
          async decodeCalls(e) {
            let t = (0, oj.J)({ abi: x, data: e });
            if ("execute" === t.functionName)
              return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
            if ("executeBatch" === t.functionName)
              return t.args[0].map((e) => ({
                to: e.target,
                value: e.value,
                data: e.data,
              }));
            throw new eW.C(`unable to decode calls for "${t.functionName}"`);
          },
          async encodeCalls(e) {
            var t, n;
            return 1 === e.length
              ? (0, c.p)({
                  abi: x,
                  functionName: "execute",
                  args: [
                    e[0].to,
                    null != (t = e[0].value) ? t : BigInt(0),
                    null != (n = e[0].data) ? n : "0x",
                  ],
                })
              : (0, c.p)({
                  abi: x,
                  functionName: "executeBatch",
                  args: [
                    e.map((e) => {
                      var t, n;
                      return {
                        data: null != (t = e.data) ? t : "0x",
                        target: e.to,
                        value: null != (n = e.value) ? n : BigInt(0),
                      };
                    }),
                  ],
                });
          },
          getAddress: async () => r,
          getFactoryArgs: async () => ({ factory: o.address, factoryData: i }),
          getStubSignature: async () =>
            "webAuthn" === t.type
              ? "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000"
              : oH({
                  ownerIndex: n,
                  signature:
                    "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
                }),
          async sign(e) {
            let r = oG({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: e.hash,
            });
            return oH({
              ownerIndex: n,
              signature: await oq({ hash: r, owner: t }),
            });
          },
          async signMessage(e) {
            let { message: r } = e,
              i = oG({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: am(r),
              });
            return oH({
              ownerIndex: n,
              signature: await oq({ hash: i, owner: t }),
            });
          },
          async signTypedData(e) {
            let { domain: r, types: i, primaryType: s, message: o } = e,
              c = oG({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: aE({ domain: r, message: o, primaryType: s, types: i }),
              });
            return oH({
              ownerIndex: n,
              signature: await oq({ hash: c, owner: t }),
            });
          },
          async signUserOperation(e) {
            let { chainId: r = a.chain.id } = e,
              i = oz(e, ["chainId"]),
              o = await this.getAddress(),
              c = (function (e) {
                let {
                    chainId: t,
                    entryPointAddress: n,
                    entryPointVersion: r,
                  } = e,
                  a = e.userOperation,
                  {
                    authorization: i,
                    callData: s = "0x",
                    callGasLimit: o,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: l,
                    paymasterAndData: d = "0x",
                    preVerificationGas: f,
                    sender: p,
                    verificationGasLimit: h,
                  } = a;
                if ("0.8" === r || "0.9" === r)
                  return aE(
                    (function (e) {
                      let {
                        chainId: t,
                        entryPointAddress: n,
                        userOperation: r,
                      } = e;
                      return {
                        types: oU,
                        primaryType: "PackedUserOperation",
                        domain: {
                          name: "ERC4337",
                          version: "1",
                          chainId: t,
                          verifyingContract: n,
                        },
                        message: o$(r, { forHash: !0 }),
                      };
                    })({ chainId: t, entryPointAddress: n, userOperation: a })
                  );
                let m = (() => {
                  if ("0.6" === r) {
                    let e = oD(
                      {
                        authorization: i,
                        factory: a.initCode?.slice(0, 42),
                        factoryData: a.initCode?.slice(42),
                      },
                      { forHash: !0 }
                    );
                    return (0, tj.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "bytes32" },
                      ],
                      [
                        p,
                        l,
                        (0, eQ.S)(e),
                        (0, eQ.S)(s),
                        o,
                        h,
                        f,
                        c,
                        u,
                        (0, eQ.S)(d),
                      ]
                    );
                  }
                  if ("0.7" === r) {
                    let e = o$(a, { forHash: !0 });
                    return (0, tj.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                      ],
                      [
                        e.sender,
                        e.nonce,
                        (0, eQ.S)(e.initCode),
                        (0, eQ.S)(e.callData),
                        e.accountGasLimits,
                        e.preVerificationGas,
                        e.gasFees,
                        (0, eQ.S)(e.paymasterAndData),
                      ]
                    );
                  }
                  throw Error(`entryPointVersion "${r}" not supported.`);
                })();
                return (0, eQ.S)(
                  (0, tj.h)(
                    [
                      { type: "bytes32" },
                      { type: "address" },
                      { type: "uint256" },
                    ],
                    [(0, eQ.S)(m), n, BigInt(t)]
                  )
                );
              })({
                chainId: r,
                entryPointAddress: s.address,
                entryPointVersion: s.version,
                userOperation: Object.assign(Object.assign({}, i), {
                  sender: o,
                }),
              });
            return oH({
              ownerIndex: n,
              signature: await oq({ hash: c, owner: t }),
            });
          },
          userOperation: {
            async estimateGas(e) {
              var n;
              if ("webAuthn" === t.type)
                return {
                  verificationGasLimit: BigInt(
                    Math.max(
                      Number(
                        null != (n = e.verificationGasLimit) ? n : BigInt(0)
                      ),
                      8e5
                    )
                  ),
                };
            },
          },
        });
      }
      async function oq({ hash: e, owner: t }) {
        if ("webAuthn" === t.type) {
          let { signature: n, webauthn: r } = await t.sign({ hash: e });
          return (function ({ webauthn: e, signature: t }) {
            let { r: n, s: r } = s3(t);
            return (0, tj.h)(
              [
                {
                  components: [
                    { name: "authenticatorData", type: "bytes" },
                    { name: "clientDataJSON", type: "bytes" },
                    { name: "challengeIndex", type: "uint256" },
                    { name: "typeIndex", type: "uint256" },
                    { name: "r", type: "uint256" },
                    { name: "s", type: "uint256" },
                  ],
                  type: "tuple",
                },
              ],
              [
                {
                  authenticatorData: e.authenticatorData,
                  clientDataJSON: (0, u.i3)(e.clientDataJSON),
                  challengeIndex: BigInt(e.challengeIndex),
                  typeIndex: BigInt(e.typeIndex),
                  r: n,
                  s: r,
                },
              ]
            );
          })({ signature: n, webauthn: r });
        }
        if (t.sign) return t.sign({ hash: e });
        throw new eW.C("`owner` does not support raw sign.");
      }
      function oG({ address: e, chainId: t, hash: n }) {
        return aE({
          domain: {
            chainId: t,
            name: "Coinbase Smart Wallet",
            verifyingContract: e,
            version: "1",
          },
          types: {
            CoinbaseSmartWalletMessage: [{ name: "hash", type: "bytes32" }],
          },
          primaryType: "CoinbaseSmartWalletMessage",
          message: { hash: n },
        });
      }
      function oH(e) {
        let { ownerIndex: t = 0 } = e,
          n = (() => {
            if (65 !== (0, tF.E)(e.signature)) return e.signature;
            let t = (function (e) {
              let { r: t, s: n } = au.secp256k1.Signature.fromCompact(
                  e.slice(2, 130)
                ),
                r = Number(`0x${e.slice(130)}`),
                [a, i] = (() => {
                  if (0 === r || 1 === r) return [void 0, r];
                  if (27 === r) return [BigInt(r), 0];
                  if (28 === r) return [BigInt(r), 1];
                  throw Error("Invalid yParityOrV value");
                })();
              return void 0 !== a
                ? {
                    r: (0, u.cK)(t, { size: 32 }),
                    s: (0, u.cK)(n, { size: 32 }),
                    v: a,
                    yParity: i,
                  }
                : {
                    r: (0, u.cK)(t, { size: 32 }),
                    s: (0, u.cK)(n, { size: 32 }),
                    yParity: i,
                  };
            })(e.signature);
            return (function (e, t) {
              if (e.length !== t.length)
                throw new e2.YE({
                  expectedLength: e.length,
                  givenLength: t.length,
                });
              let n = [];
              for (let r = 0; r < e.length; r++) {
                let a = e[r],
                  i = t[r];
                n.push(
                  (function e(t, n, r = !1) {
                    if ("address" === t) {
                      if (!(0, ak.P)(n)) throw new ay.M({ address: n });
                      return (0, iI.eV)(n.toLowerCase(), {
                        size: r ? 32 : null,
                      });
                    }
                    if ("string" === t) return (0, u.i3)(n);
                    if ("bytes" === t) return n;
                    if ("bool" === t)
                      return (0, iI.eV)((0, u.$P)(n), { size: r ? 32 : 1 });
                    let a = t.match(aA.Ge);
                    if (a) {
                      let [e, t, i = "256"] = a,
                        s = Number.parseInt(i, 10) / 8;
                      return (0, u.cK)(n, {
                        size: r ? 32 : s,
                        signed: "int" === t,
                      });
                    }
                    let i = t.match(aA.BD);
                    if (i) {
                      let [e, t] = i;
                      if (Number.parseInt(t, 10) !== (n.length - 2) / 2)
                        throw new e2.BI({
                          expectedSize: Number.parseInt(t, 10),
                          givenSize: (n.length - 2) / 2,
                        });
                      return (0, iI.eV)(n, {
                        dir: "right",
                        size: r ? 32 : null,
                      });
                    }
                    let s = t.match(aA.D5);
                    if (s && Array.isArray(n)) {
                      let [t, r] = s,
                        a = [];
                      for (let t = 0; t < n.length; t++) a.push(e(r, n[t], !0));
                      return 0 === a.length ? "0x" : (0, eZ.aP)(a);
                    }
                    throw new e2.Wl(t);
                  })(a, i)
                );
              }
              return (0, eZ.aP)(n);
            })(
              ["bytes32", "bytes32", "uint8"],
              [t.r, t.s, 0 === t.yParity ? 27 : 28]
            );
          })();
        return (0, tj.h)(
          [
            {
              components: [
                { name: "ownerIndex", type: "uint8" },
                { name: "signatureData", type: "bytes" },
              ],
              type: "tuple",
            },
          ],
          [{ ownerIndex: t, signatureData: n }]
        );
      }
      async function oW({
        address: e,
        client: t,
        factory: n,
        factoryData: r,
        owner: a,
        ownerIndex: i,
        parentAddress: s,
        attribution: o,
      }) {
        var c;
        let l = { address: e, factory: n, factoryData: r },
          d = null == (c = t.chain) ? void 0 : c.id;
        if (!d) throw T.rpc.internal("chainId not found");
        let f = await oF({
            owner: a,
            ownerIndex: null != i ? i : 1,
            address: e,
            client: t,
            factoryData: r,
          }),
          p = async (e) => {
            var n, r, i, c, h;
            try {
              switch (e.method) {
                case "wallet_addSubAccount":
                  return l;
                case "eth_accounts":
                  return [l.address];
                case "eth_coinbase":
                  return l.address;
                case "net_version":
                  return d.toString();
                case "eth_chainId":
                  return (0, u.cK)(d);
                case "eth_sendTransaction": {
                  $(e.params);
                  let a = e.params[0];
                  R(a.to, T.rpc.invalidParams("to is required"));
                  let s = {
                      to: a.to,
                      data: eC(null != (n = a.data) ? n : "0x", !0),
                      value: eC(null != (r = a.value) ? r : "0x", !0),
                      from: null != (i = a.from) ? i : l.address,
                    },
                    o = oI({ calls: [s], chainId: d, from: s.from }),
                    c = await p(o);
                  return oP({ client: t, id: c });
                }
                case "wallet_sendCalls": {
                  let t;
                  $(e.params);
                  let n = om(e.params[0], "chainId");
                  if (!n) throw T.rpc.invalidParams("chainId is required");
                  if (!(0, eX.q)(n))
                    throw T.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw T.rpc.invalidParams("params are required");
                  if (!("calls" in e.params[0]))
                    throw T.rpc.invalidParams("calls are required");
                  let r = {
                    method: "wallet_prepareCalls",
                    params: [
                      {
                        version: "1.0",
                        calls: e.params[0].calls,
                        chainId: n,
                        from: l.address,
                        capabilities:
                          "capabilities" in e.params[0]
                            ? e.params[0].capabilities
                            : {},
                      },
                    ],
                  };
                  s &&
                    (r = oA(r, {
                      funding: [
                        {
                          type: "spendPermission",
                          data: {
                            autoApply: !0,
                            sources: [s],
                            preference: "PREFER_DIRECT_BALANCE",
                          },
                        },
                      ],
                    }));
                  let i = await p(r),
                    o = await (null == (c = a.sign)
                      ? void 0
                      : c.call(a, {
                          hash: (0, eD.IQ)(i.signatureRequest.hash),
                        }));
                  if (!o) throw T.rpc.internal("signature not found");
                  return (
                    (t = (0, eX.q)(o)
                      ? {
                          type: "secp256k1",
                          data: { address: a.address, signature: o },
                        }
                      : {
                          type: "webauthn",
                          data: {
                            signature: JSON.stringify(
                              (function ({ webauthn: e, signature: t, id: n }) {
                                let r = s3(t);
                                return {
                                  id: n,
                                  rawId: o_((0, eY.Af)(n)),
                                  response: {
                                    authenticatorData: o_(
                                      (0, eY.aT)(e.authenticatorData)
                                    ),
                                    clientDataJSON: o_(
                                      (0, eY.Af)(e.clientDataJSON)
                                    ),
                                    signature: o_(
                                      (function (e, t) {
                                        let n = (0, eY.aT)(
                                            (0, eH.B)((0, u.cK)(e))
                                          ),
                                          r = (0, eY.aT)(
                                            (0, eH.B)((0, u.cK)(t))
                                          ),
                                          a = n.length,
                                          i = r.length,
                                          s = a + i + 4,
                                          o = new Uint8Array(s + 2);
                                        return (
                                          (o[0] = 48),
                                          (o[1] = s),
                                          (o[2] = 2),
                                          (o[3] = a),
                                          o.set(n, 4),
                                          (o[a + 4] = 2),
                                          (o[a + 5] = i),
                                          o.set(r, a + 6),
                                          o
                                        );
                                      })(r.r, r.s)
                                    ),
                                  },
                                  type: JSON.parse(e.clientDataJSON).type,
                                };
                              })(
                                Object.assign(
                                  { id: null != (h = a.id) ? h : "1" },
                                  o
                                )
                              )
                            ),
                            publicKey: a.publicKey,
                          },
                        }),
                    (
                      await p({
                        method: "wallet_sendPreparedCalls",
                        params: [
                          {
                            version: "1.0",
                            type: i.type,
                            data: i.userOp,
                            chainId: i.chainId,
                            signature: t,
                          },
                        ],
                      })
                    )[0]
                  );
                }
                case "wallet_sendPreparedCalls": {
                  $(e.params);
                  let n = om(e.params[0], "chainId");
                  if (!n) throw T.rpc.invalidParams("chainId is required");
                  if (!(0, eX.q)(n))
                    throw T.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  return await t.request({
                    method: "wallet_sendPreparedCalls",
                    params: e.params,
                  });
                }
                case "wallet_prepareCalls": {
                  $(e.params);
                  let n = om(e.params[0], "chainId");
                  if (!n) throw T.rpc.invalidParams("chainId is required");
                  if (!(0, eX.q)(n))
                    throw T.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw T.rpc.invalidParams("params are required");
                  if (!om(e.params[0], "calls"))
                    throw T.rpc.invalidParams("calls are required");
                  let r = e.params[0];
                  return (
                    !o ||
                      !r.capabilities ||
                      "attribution" in r.capabilities ||
                      (r.capabilities.attribution = o),
                    await t.request({
                      method: "wallet_prepareCalls",
                      params: [
                        Object.assign(Object.assign({}, e.params[0]), {
                          chainId: n,
                        }),
                      ],
                    })
                  );
                }
                case "personal_sign": {
                  if (($(e.params), !(0, eX.q)(e.params[0])))
                    throw T.rpc.invalidParams(
                      "message must be a hex encoded string"
                    );
                  let t = (0, eD.IQ)(e.params[0]);
                  return f.signMessage({ message: t });
                }
                case "eth_signTypedData_v4": {
                  $(e.params);
                  let t =
                    "string" == typeof e.params[1]
                      ? JSON.parse(e.params[1])
                      : e.params[1];
                  return f.signTypedData(t);
                }
                default:
                  throw T.rpc.methodNotSupported();
              }
            } catch (e) {
              if (D(e)) {
                let t = (function (e) {
                  try {
                    let t = JSON.parse(e.details);
                    return new M(t.code, t.message, t.data);
                  } catch (e) {
                    return null;
                  }
                })(e);
                if (t) throw t;
              }
              throw e;
            }
          };
        return { request: p };
      }
      async function oK({
        address: e,
        client: t,
        publicKey: n,
        factory: r,
        factoryData: a,
      }) {
        if (!(await nP(t, { address: e })) && r && a) {
          if ((0, tz.b)(r) !== (0, tz.b)(w))
            throw T.rpc.internal("unknown factory address");
          let e = (0, oj.J)({ abi: k, data: a });
          if ("createAccount" !== e.functionName)
            throw T.rpc.internal("unknown factory function");
          let [t] = e.args;
          return t.findIndex((e) => e.toLowerCase() === oV(n).toLowerCase());
        }
        let i = await e7(t, { address: e, abi: x, functionName: "ownerCount" });
        for (let r = Number(i) - 1; r >= 0; r--) {
          let a = await e7(t, {
              address: e,
              abi: x,
              functionName: "ownerAtIndex",
              args: [BigInt(r)],
            }),
            i = oV(n);
          if (a.toLowerCase() === i.toLowerCase()) return r;
        }
        return -1;
      }
      function oV(e) {
        return (0, ak.P)(e) ? (0, iI.eV)(e) : e;
      }
      async function oJ() {
        let e = ec();
        return new Promise((t) => {
          V({ snackbarContext: "sub_account_add_owner" }),
            e.presentItem({
              autoExpand: !0,
              message: "App requires a signer update",
              menuItems: [
                {
                  isRed: !1,
                  info: "Confirm",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    J({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "confirm",
                    }),
                      e.clear(),
                      t("authenticate");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    J({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      async function oZ({ ownerAccount: e, globalAccountRequest: t }) {
        var n, r;
        let a = g.account.get(),
          i = g.subAccounts.get(),
          s =
            null == (n = a.accounts)
              ? void 0
              : n.find(
                  (e) =>
                    e.toLowerCase() !==
                    (null == i ? void 0 : i.address.toLowerCase())
                );
        R(s, T.provider.unauthorized("no global account")),
          R(
            null == (r = a.chain) ? void 0 : r.id,
            T.provider.unauthorized("no chain id")
          ),
          R(
            null == i ? void 0 : i.address,
            T.provider.unauthorized("no sub account")
          );
        let l = [];
        if (
          ("local" === e.type &&
            e.address &&
            l.push({
              to: i.address,
              data: (0, c.p)({
                abi: x,
                functionName: "addOwnerAddress",
                args: [e.address],
              }),
              value: (0, u.nj)(0),
            }),
          e.publicKey)
        ) {
          let [t, n] = (0, o.n)(
            [{ type: "bytes32" }, { type: "bytes32" }],
            e.publicKey
          );
          l.push({
            to: i.address,
            data: (0, c.p)({
              abi: x,
              functionName: "addOwnerPublicKey",
              args: [t, n],
            }),
            value: (0, u.nj)(0),
          });
        }
        let d = {
          method: "wallet_sendCalls",
          params: [
            { version: "1", calls: l, chainId: (0, u.cK)(84532), from: s },
          ],
        };
        if ("cancel" === (await oJ()))
          throw T.provider.unauthorized("user cancelled");
        let f = await t(d),
          p = iU(a.chain.id);
        if (
          (R(p, T.rpc.internal(`client not found for chainId ${a.chain.id}`)),
          "success" !== (await ow(p, { id: f })).status)
        )
          throw T.rpc.internal("add owner call failed");
        let h = await oK({
          address: i.address,
          publicKey: "local" === e.type && e.address ? e.address : e.publicKey,
          client: p,
        });
        if (-1 === h) throw T.rpc.internal("failed to find owner index");
        return h;
      }
      async function oY({
        errorData: e,
        globalAccountAddress: t,
        subAccountAddress: n,
        client: r,
        request: a,
        subAccountRequest: i,
        globalAccountRequest: s,
      }) {
        var o, l, d;
        let f,
          p,
          h = null == (o = r.chain) ? void 0 : o.id;
        R(h, T.rpc.internal("invalid chainId"));
        let m = (function ({ errorData: e, sourceAddress: t }) {
            var n;
            let r = [];
            for (let [a, { amount: i, sources: s }] of Object.entries(
              null != (n = null == e ? void 0 : e.required) ? n : {}
            )) {
              if (
                0 ===
                s.filter(
                  (e) =>
                    (0, eD.uU)(e.balance) >= (0, eD.uU)(i) &&
                    e.address.toLowerCase() ===
                      (null == t ? void 0 : t.toLowerCase())
                ).length
              )
                throw Error(
                  "Source address has insufficient balance for a token"
                );
              r.push({ token: a, requiredAmount: (0, eD.uU)(i) });
            }
            return r;
          })({ errorData: e, sourceAddress: t }),
          b = await oS();
        if ("cancel" === b) throw Error("User cancelled funding");
        if ("update_permission" === b) {
          if (1 === m.length) {
            let e = m[0],
              r = (function ({ spendPermission: e, chainId: t }) {
                return {
                  domain: {
                    name: "Spend Permission Manager",
                    version: "1",
                    chainId: t,
                    verifyingContract: v,
                  },
                  types: {
                    SpendPermission: [
                      { name: "account", type: "address" },
                      { name: "spender", type: "address" },
                      { name: "token", type: "address" },
                      { name: "allowance", type: "uint160" },
                      { name: "period", type: "uint48" },
                      { name: "start", type: "uint48" },
                      { name: "end", type: "uint48" },
                      { name: "salt", type: "uint256" },
                      { name: "extraData", type: "bytes" },
                    ],
                  },
                  primaryType: "SpendPermission",
                  message: {
                    account: e.account,
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    period: e.period,
                    start: e.start,
                    end: e.end,
                    salt: e.salt,
                    extraData: e.extraData,
                  },
                };
              })({
                spendPermission: {
                  token: e.token,
                  allowance: (0, u.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  start: 0,
                  end: 0xffffffffffff,
                  salt: (0, u.cK)(
                    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                  ),
                  extraData: "0x",
                },
                chainId: h,
              });
            f = { method: "eth_signTypedData_v4", params: [t, r] };
          } else {
            let e = (function ({ spendPermissionBatch: e, chainId: t }) {
              return {
                domain: {
                  name: "Spend Permission Manager",
                  version: "1",
                  chainId: t,
                  verifyingContract: v,
                },
                types: {
                  SpendPermissionBatch: [
                    { name: "account", type: "address" },
                    { name: "period", type: "uint48" },
                    { name: "start", type: "uint48" },
                    { name: "end", type: "uint48" },
                    { name: "permissions", type: "PermissionDetails[]" },
                  ],
                  PermissionDetails: [
                    { name: "spender", type: "address" },
                    { name: "token", type: "address" },
                    { name: "allowance", type: "uint160" },
                    { name: "salt", type: "uint256" },
                    { name: "extraData", type: "bytes" },
                  ],
                },
                primaryType: "SpendPermissionBatch",
                message: {
                  account: e.account,
                  period: e.period,
                  start: e.start,
                  end: e.end,
                  permissions: e.permissions.map((e) => ({
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    salt: e.salt,
                    extraData: e.extraData,
                  })),
                },
              };
            })({
              spendPermissionBatch: {
                account: t,
                period: 86400,
                start: 0,
                end: 0xffffffffffff,
                permissions: m.map((e) => ({
                  token: e.token,
                  allowance: (0, u.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  salt: "0x0",
                  extraData: "0x",
                })),
              },
              chainId: h,
            });
            f = { method: "eth_signTypedData_v4", params: [t, e] };
          }
          try {
            await s(f);
          } catch (e) {
            throw (
              (console.error(e), Error("User denied spend permission request"))
            );
          }
          return i(a);
        }
        let y = m.map((e) =>
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" === e.token.toLowerCase()
            ? { to: n, value: (0, u.cK)(e.requiredAmount), data: "0x" }
            : {
                to: e.token,
                value: "0x0",
                data: (0, c.p)({
                  abi: eF.xw,
                  functionName: "transfer",
                  args: [n, e.requiredAmount],
                }),
              }
        );
        if (
          "wallet_sendCalls" === a.method &&
          "object" == typeof (l = a.params) &&
          null !== l &&
          "calls" in l
        )
          p = a.params[0];
        else if (
          "eth_sendTransaction" === a.method &&
          Array.isArray((d = a.params)) &&
          1 === d.length &&
          "object" == typeof d[0] &&
          null !== d[0] &&
          "to" in d[0]
        )
          p = oI({ calls: [a.params[0]], chainId: h, from: a.params[0].from })
            .params[0];
        else throw Error("Could not get original call");
        let g = [
            ...y,
            {
              data: (0, c.p)({
                abi: x,
                functionName: "executeBatch",
                args: [
                  p.calls.map((e) => {
                    var t, n;
                    return {
                      target: e.to,
                      value: (0, eD.uU)(null != (t = e.value) ? t : "0x0"),
                      data: null != (n = e.data) ? n : "0x",
                    };
                  }),
                ],
              }),
              to: n,
              value: "0x0",
            },
          ],
          w = await s({
            method: "wallet_sendCalls",
            params: [
              Object.assign(Object.assign({}, p), { calls: g, from: t }),
            ],
          });
        return "eth_sendTransaction" === a.method
          ? oP({ client: r, id: w })
          : w;
      }
      class oQ {
        constructor(e) {
          var t, n, r, a;
          (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new oh());
          let { account: i, chains: s } = g.getState();
          (this.accounts = null != (t = i.accounts) ? t : []),
            (this.chain =
              null != (n = i.chain)
                ? n
                : {
                    id:
                      null !=
                      (a = null == (r = e.metadata.appChainIds) ? void 0 : r[0])
                        ? a
                        : 1,
                  }),
            s && i$(s);
        }
        async handshake(e) {
          var t, n, s;
          let o = eL.get(e);
          (({ method: e, correlationId: t }) => {
            var n;
            K(
              "scw_signer.handshake.started",
              {
                action: a.unknown,
                componentType: r.unknown,
                method: e,
                correlationId: t,
                enableAutoSubAccounts:
                  null == (n = g.subAccountsConfig.get())
                    ? void 0
                    : n.enableAutoSubAccounts,
              },
              i.high
            );
          })({ method: e.method, correlationId: o });
          try {
            await (null == (n = (t = this.communicator).waitForPopupLoaded)
              ? void 0
              : n.call(t));
            let c = await this.createRequestMessage(
                {
                  handshake: {
                    method: e.method,
                    params: null != (s = e.params) ? s : [],
                  },
                },
                o
              ),
              u = await this.communicator.postRequestAndWaitForResponse(c);
            if ("failure" in u.content) throw u.content.failure;
            let l = await iV("public", u.sender);
            await this.keyManager.setPeerPublicKey(l);
            let d = await this.decryptResponseMessage(u);
            this.handleResponse(e, d),
              (({ method: e, correlationId: t }) => {
                var n;
                K(
                  "scw_signer.handshake.completed",
                  {
                    action: a.unknown,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    enableAutoSubAccounts:
                      null == (n = g.subAccountsConfig.get())
                        ? void 0
                        : n.enableAutoSubAccounts,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: o });
          } catch (t) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                var s;
                K(
                  "scw_signer.handshake.error",
                  {
                    action: a.error,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                    enableAutoSubAccounts:
                      null == (s = g.subAccountsConfig.get())
                        ? void 0
                        : s.enableAutoSubAccounts,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: o, errorMessage: e$(t) }),
              t)
            );
          }
        }
        async request(e) {
          let t = eL.get(e);
          (({ method: e, correlationId: t }) => {
            var n;
            K(
              "scw_signer.request.started",
              {
                action: a.unknown,
                componentType: r.unknown,
                method: e,
                correlationId: t,
                enableAutoSubAccounts:
                  null == (n = g.subAccountsConfig.get())
                    ? void 0
                    : n.enableAutoSubAccounts,
              },
              i.high
            );
          })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, correlationId: t }) => {
                var n;
                K(
                  "scw_signer.request.completed",
                  {
                    action: a.unknown,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    enableAutoSubAccounts:
                      null == (n = g.subAccountsConfig.get())
                        ? void 0
                        : n.enableAutoSubAccounts,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: t }),
              n
            );
          } catch (n) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                var s;
                K(
                  "scw_signer.request.error",
                  {
                    action: a.error,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                    enableAutoSubAccounts:
                      null == (s = g.subAccountsConfig.get())
                        ? void 0
                        : s.enableAutoSubAccounts,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: t, errorMessage: e$(n) }),
              n)
            );
          }
        }
        async _request(e) {
          var t, n, s, o, c, l, d, f, p, h, m, b, y, w;
          if (0 === this.accounts.length)
            switch (e.method) {
              case "eth_requestAccounts":
                return (
                  await (null ==
                  (n = (t = this.communicator).waitForPopupLoaded)
                    ? void 0
                    : n.call(t)),
                  await oE(),
                  await this.request({
                    method: "wallet_connect",
                    params: [
                      {
                        version: "1",
                        capabilities: Object.assign(
                          {},
                          null !=
                            (o =
                              null == (s = g.subAccountsConfig.get())
                                ? void 0
                                : s.capabilities)
                            ? o
                            : {}
                        ),
                      },
                    ],
                  }),
                  this.accounts
                );
              case "wallet_switchEthereumChain":
                ok(e.params), (this.chain.id = Number(e.params[0].chainId));
                return;
              case "wallet_connect": {
                await (null == (l = (c = this.communicator).waitForPopupLoaded)
                  ? void 0
                  : l.call(c)),
                  await oE();
                let t = {};
                (function (e, t) {
                  var n;
                  if (!Array.isArray(null == e ? void 0 : e.params)) return !1;
                  let r = null == (n = e.params[0]) ? void 0 : n.capabilities;
                  return !!r && "object" == typeof r && t in r;
                })(e, "addSubAccount") &&
                  (t =
                    null !=
                    (f =
                      null == (d = g.subAccountsConfig.get())
                        ? void 0
                        : d.capabilities)
                      ? f
                      : {});
                let n = oA(e, t);
                return this.sendRequestToPopup(n);
              }
              case "wallet_sendCalls":
              case "wallet_sign":
                return this.sendRequestToPopup(e);
              default:
                throw T.provider.unauthorized();
            }
          if (this.shouldRequestUseSubAccountSigner(e)) {
            let t = eL.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              K(
                "scw_sub_account.request.started",
                {
                  action: a.unknown,
                  componentType: r.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = g.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                i.high
              );
            })({ method: e.method, correlationId: t });
            try {
              let n = await this.sendRequestToSubAccountSigner(e);
              return (
                (({ method: e, correlationId: t }) => {
                  var n;
                  K(
                    "scw_sub_account.request.completed",
                    {
                      action: a.unknown,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = g.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: t }),
                n
              );
            } catch (n) {
              throw (
                ((({ method: e, correlationId: t, errorMessage: n }) => {
                  var s;
                  K(
                    "scw_sub_account.request.error",
                    {
                      action: a.error,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (s = g.subAccountsConfig.get())
                          ? void 0
                          : s.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: t, errorMessage: e$(n) }),
                n)
              );
            }
          }
          switch (e.method) {
            case "eth_requestAccounts":
            case "eth_accounts": {
              let e = g.subAccounts.get(),
                t = g.subAccountsConfig.get();
              return (
                (null == e ? void 0 : e.address) &&
                  (this.accounts = (
                    null == t ? void 0 : t.enableAutoSubAccounts
                  )
                    ? oO(this.accounts, e.address)
                    : oC(this.accounts, e.address)),
                null == (p = this.callback) ||
                  p.call(this, "connect", {
                    chainId: (0, u.cK)(this.chain.id),
                  }),
                this.accounts
              );
            }
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return (0, u.cK)(this.chain.id);
            case "wallet_getCapabilities":
              return this.handleGetCapabilitiesRequest(e);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            case "wallet_connect": {
              let t = await oT();
              if (t) return t;
              await (null == (m = (h = this.communicator).waitForPopupLoaded)
                ? void 0
                : m.call(h)),
                await oE();
              let n = g.subAccountsConfig.get(),
                r = oA(
                  e,
                  null != (b = null == n ? void 0 : n.capabilities) ? b : {}
                );
              return (
                null == (y = this.callback) ||
                  y.call(this, "connect", {
                    chainId: (0, u.cK)(this.chain.id),
                  }),
                this.sendRequestToPopup(r)
              );
            }
            case "wallet_getSubAccounts": {
              let t = g.subAccounts.get();
              if (null == t ? void 0 : t.address) return { subAccounts: [t] };
              if (!this.chain.rpcUrl)
                throw T.rpc.internal("No RPC URL set for chain");
              let n = await G(e, this.chain.rpcUrl);
              if (($(n.subAccounts, "subAccounts"), n.subAccounts.length > 0)) {
                iz(n.subAccounts[0]);
                let e = n.subAccounts[0];
                g.subAccounts.set({
                  address: e.address,
                  factory: e.factory,
                  factoryData: e.factoryData,
                });
              }
              return n;
            }
            case "wallet_addSubAccount":
              return this.addSubAccount(e);
            case "coinbase_fetchPermissions": {
              !(function (e) {
                if (
                  "coinbase_fetchPermissions" !== e.method ||
                  void 0 !== e.params
                ) {
                  if (
                    "coinbase_fetchPermissions" === e.method &&
                    Array.isArray(e.params) &&
                    1 === e.params.length &&
                    "object" == typeof e.params[0]
                  ) {
                    if (
                      "string" != typeof e.params[0].account ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw T.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].account must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].chainId ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw T.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].chainId must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].spender ||
                      !e.params[0].spender.startsWith("0x")
                    )
                      throw T.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].spender must be a hex string"
                      );
                    return;
                  }
                  throw T.rpc.invalidParams();
                }
              })(e);
              let t = (function (e) {
                  var t, n, r;
                  if (void 0 !== e.params) return e;
                  let a =
                      null == (t = g.getState().account.accounts)
                        ? void 0
                        : t[0],
                    i =
                      null == (n = g.getState().account.chain) ? void 0 : n.id,
                    s =
                      null == (r = g.getState().subAccount)
                        ? void 0
                        : r.address;
                  if (!a || !s || !i)
                    throw T.rpc.invalidParams(
                      "FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first"
                    );
                  return {
                    method: "coinbase_fetchPermissions",
                    params: [{ account: a, chainId: (0, u.cK)(i), spender: s }],
                  };
                })(e),
                n = await G(t, H),
                r = (0, eD.ME)(null == (w = t.params) ? void 0 : w[0].chainId);
              return (
                g.spendPermissions.set(
                  n.permissions.map((e) =>
                    Object.assign(Object.assign({}, e), { chainId: r })
                  )
                ),
                n
              );
            }
            default:
              if (!this.chain.rpcUrl)
                throw T.rpc.internal("No RPC URL set for chain");
              return G(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            a = await this.decryptResponseMessage(r);
          return this.handleResponse(e, a);
        }
        async handleResponse(e, t) {
          var n, r, a, i, s;
          let o = t.result;
          if ("error" in o) throw o.error;
          switch (e.method) {
            case "eth_requestAccounts": {
              let e = o.value;
              (this.accounts = e),
                g.account.set({ accounts: e, chain: this.chain }),
                null == (n = this.callback) ||
                  n.call(this, "accountsChanged", e);
              break;
            }
            case "wallet_connect": {
              let e = o.value,
                t = e.accounts.map((e) => e.address);
              (this.accounts = t), g.account.set({ accounts: t });
              let n = e.accounts.at(0),
                s = null == n ? void 0 : n.capabilities;
              if (null == s ? void 0 : s.subAccounts) {
                let e = null == s ? void 0 : s.subAccounts;
                $(e, "subAccounts"),
                  iz(e[0]),
                  g.subAccounts.set({
                    address: e[0].address,
                    factory: e[0].factory,
                    factoryData: e[0].factoryData,
                  });
              }
              let c = [this.accounts[0]],
                u = g.subAccounts.get(),
                l = g.subAccountsConfig.get();
              (null == u ? void 0 : u.address) &&
                (this.accounts = (null == l ? void 0 : l.enableAutoSubAccounts)
                  ? oO(this.accounts, u.address)
                  : oC(this.accounts, u.address));
              let d =
                null ==
                (a =
                  null == (r = null == e ? void 0 : e.accounts)
                    ? void 0
                    : r[0].capabilities)
                  ? void 0
                  : a.spendPermissions;
              d &&
                "permissions" in d &&
                g.spendPermissions.set(null == d ? void 0 : d.permissions),
                null == (i = this.callback) ||
                  i.call(this, "accountsChanged", c);
              break;
            }
            case "wallet_addSubAccount": {
              iz(o.value);
              let e = o.value;
              g.subAccounts.set(e);
              let t = g.subAccountsConfig.get();
              (this.accounts = (null == t ? void 0 : t.enableAutoSubAccounts)
                ? oO(this.accounts, e.address)
                : oC(this.accounts, e.address)),
                null == (s = this.callback) ||
                  s.call(this, "accountsChanged", this.accounts);
            }
          }
          return o.value;
        }
        async cleanup() {
          var e, t;
          let n = g.config.get().metadata;
          await this.keyManager.clear(),
            g.account.clear(),
            g.subAccounts.clear(),
            g.spendPermissions.clear(),
            g.chains.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t =
                  null == (e = null == n ? void 0 : n.appChainIds)
                    ? void 0
                    : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          ok(e.params);
          let t = eB(e.params[0].chainId);
          if (this.updateChain(t)) return null;
          let n = await this.sendRequestToPopup(e);
          return null === n && this.updateChain(t), n;
        }
        async handleGetCapabilitiesRequest(e) {
          var t = e.params;
          if (
            !t ||
            !Array.isArray(t) ||
            (1 !== t.length && 2 !== t.length) ||
            "string" != typeof t[0] ||
            !(0, ak.P)(t[0])
          )
            throw T.rpc.invalidParams();
          if (2 === t.length) {
            if (!Array.isArray(t[1])) throw T.rpc.invalidParams();
            for (let e of t[1])
              if ("string" != typeof e || !e.startsWith("0x"))
                throw T.rpc.invalidParams();
          }
          let n = e.params[0],
            r = e.params[1];
          if (!this.accounts.some((e) => (0, eR.h)(e, n)))
            throw T.provider.unauthorized(
              "no active account found when getting capabilities"
            );
          let a = g.getState().account.capabilities;
          if (!a) return {};
          if (!r || 0 === r.length) return a;
          let i = new Set(r.map((e) => (0, eD.ME)(e)));
          return Object.fromEntries(
            Object.entries(a).filter(([e]) => {
              try {
                let t = (0, eD.ME)(e);
                return i.has(t);
              } catch (e) {
                return !1;
              }
            })
          );
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw T.provider.unauthorized(
              "No shared secret found when encrypting request"
            );
          let n = await iJ({ action: e, chainId: this.chain.id }, t),
            r = eL.get(e),
            a = await this.createRequestMessage({ encrypted: n }, r);
          return this.communicator.postRequestAndWaitForResponse(a);
        }
        async createRequestMessage(e, t) {
          let n = await iK("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            correlationId: t,
            sender: n,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n, r;
          let a = e.content;
          if ("failure" in a) throw a.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i)
            throw T.provider.unauthorized(
              "Invalid session: no shared secret found when decrypting response"
            );
          let s = await iZ(a.encrypted, i),
            o = null == (t = s.data) ? void 0 : t.chains;
          if (o) {
            let e = null == (n = s.data) ? void 0 : n.nativeCurrencies,
              t = Object.entries(o).map(([t, n]) => {
                let r = null == e ? void 0 : e[Number(t)];
                return Object.assign(
                  { id: Number(t), rpcUrl: n },
                  r ? { nativeCurrency: r } : {}
                );
              });
            g.chains.set(t), this.updateChain(this.chain.id, t), i$(t);
          }
          let c = null == (r = s.data) ? void 0 : r.capabilities;
          return c && g.account.set({ capabilities: c }), s;
        }
        updateChain(e, t) {
          var n;
          let r = g.getState(),
            a = null != t ? t : r.chains,
            i = null == a ? void 0 : a.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              g.account.set({ chain: i }),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", eE(i.id))),
            !0)
          );
        }
        async addSubAccount(e) {
          var t, n, r, a;
          let i = g.getState().subAccount,
            s = g.subAccountsConfig.get();
          if (null == i ? void 0 : i.address)
            return (
              (this.accounts = (null == s ? void 0 : s.enableAutoSubAccounts)
                ? oO(this.accounts, i.address)
                : oC(this.accounts, i.address)),
              null == (t = this.callback) ||
                t.call(this, "accountsChanged", this.accounts),
              i
            );
          if (
            (await (null == (r = (n = this.communicator).waitForPopupLoaded)
              ? void 0
              : r.call(n)),
            Array.isArray(e.params) &&
              e.params.length > 0 &&
              e.params[0].account &&
              "create" === e.params[0].account.type)
          ) {
            let t;
            if (e.params[0].account.keys && e.params[0].account.keys.length > 0)
              t = e.params[0].account.keys;
            else {
              let e = null != (a = g.subAccountsConfig.get()) ? a : {},
                { account: n } = e.toOwnerAccount
                  ? await e.toOwnerAccount()
                  : await ol();
              if (!n)
                throw T.provider.unauthorized(
                  "could not get subaccount owner account when adding sub account"
                );
              t = [
                {
                  type: n.address ? "address" : "webauthn-p256",
                  publicKey: n.address || n.publicKey,
                },
              ];
            }
            e.params[0].account.keys = t;
          }
          let o = await this.sendRequestToPopup(e);
          return iz(o), o;
        }
        shouldRequestUseSubAccountSigner(e) {
          let t = ox(e),
            n = g.subAccounts.get();
          return (
            !!t &&
            t.toLowerCase() === (null == n ? void 0 : n.address.toLowerCase())
          );
        }
        async sendRequestToSubAccountSigner(e) {
          var t;
          let n = g.subAccounts.get(),
            s = g.subAccountsConfig.get(),
            o = g.config.get();
          R(
            null == n ? void 0 : n.address,
            T.provider.unauthorized(
              "no active sub account when sending request to sub account signer"
            )
          );
          let c = (null == s ? void 0 : s.toOwnerAccount)
            ? await s.toOwnerAccount()
            : await ol();
          R(
            null == c ? void 0 : c.account,
            T.provider.unauthorized(
              "no active sub account owner when sending request to sub account signer"
            )
          ),
            void 0 === ox(e) &&
              (e = (function (e, t) {
                if (!Array.isArray(e.params)) throw T.rpc.invalidParams();
                let n = [...e.params];
                switch (e.method) {
                  case "eth_signTransaction":
                  case "eth_sendTransaction":
                  case "wallet_sendCalls":
                    n[0].from = t;
                    break;
                  case "eth_signTypedData_v4":
                    n[0] = t;
                    break;
                  case "personal_sign":
                    n[1] = t;
                }
                return Object.assign(Object.assign({}, e), { params: n });
              })(e, n.address));
          let l = iU(this.chain.id);
          R(
            l,
            T.rpc.internal(
              `client not found for chainId ${this.chain.id} when sending request to sub account signer`
            )
          );
          let d = this.accounts.find(
            (e) => e.toLowerCase() !== n.address.toLowerCase()
          );
          R(
            d,
            T.provider.unauthorized(
              "no global account found when sending request to sub account signer"
            )
          );
          let f = (function ({ attribution: e, dappOrigin: t }) {
              if (e) {
                if ("auto" in e && e.auto && t)
                  return (0, nB.di)((0, eQ.S)((0, u.nj)(t)), 0, 16);
                if ("dataSuffix" in e) return e.dataSuffix;
              }
            })({
              attribution: null == (t = o.preference) ? void 0 : t.attribution,
              dappOrigin: window.location.origin,
            }),
            p =
              "local" === c.account.type
                ? c.account.address
                : c.account.publicKey,
            h = await oK({
              address: n.address,
              factory: n.factory,
              factoryData: n.factoryData,
              publicKey: p,
              client: l,
            });
          if (-1 === h) {
            let t = eL.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              K(
                "scw_sub_account.add_owner.started",
                {
                  action: a.unknown,
                  componentType: r.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = g.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                i.high
              );
            })({ method: e.method, correlationId: t });
            try {
              (h = await oZ({
                ownerAccount: c.account,
                globalAccountRequest: this.sendRequestToPopup.bind(this),
              })),
                (({ method: e, correlationId: t }) => {
                  var n;
                  K(
                    "scw_sub_account.add_owner.completed",
                    {
                      action: a.unknown,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = g.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: t });
            } catch (n) {
              return (
                (({ method: e, correlationId: t, errorMessage: n }) => {
                  var s;
                  K(
                    "scw_sub_account.add_owner.error",
                    {
                      action: a.error,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (s = g.subAccountsConfig.get())
                          ? void 0
                          : s.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: t, errorMessage: e$(n) }),
                T.provider.unauthorized(
                  "failed to add sub account owner when sending request to sub account signer"
                )
              );
            }
          }
          let { request: m } = await oW({
            address: n.address,
            owner: c.account,
            client: l,
            factory: n.factory,
            factoryData: n.factoryData,
            parentAddress: d,
            attribution: f ? { suffix: f } : void 0,
            ownerIndex: h,
          });
          try {
            return await m(e);
          } catch (o) {
            let t;
            if (D(o)) t = JSON.parse(o.details);
            else if (L(o)) t = o;
            else throw o;
            if (!(L(t) && t.data) || !t.data) throw o;
            let s = eL.get(e);
            (({ method: e, correlationId: t }) => {
              var n;
              K(
                "scw_sub_account.insufficient_balance.error_handling.started",
                {
                  action: a.unknown,
                  componentType: r.unknown,
                  method: e,
                  correlationId: t,
                  enableAutoSubAccounts:
                    null == (n = g.subAccountsConfig.get())
                      ? void 0
                      : n.enableAutoSubAccounts,
                },
                i.high
              );
            })({ method: e.method, correlationId: s });
            try {
              let o = await oY({
                errorData: t.data,
                globalAccountAddress: d,
                subAccountAddress: n.address,
                client: l,
                request: e,
                subAccountRequest: m,
                globalAccountRequest: this.request.bind(this),
              });
              return (
                (({ method: e, correlationId: t }) => {
                  var n;
                  K(
                    "scw_sub_account.insufficient_balance.error_handling.completed",
                    {
                      action: a.unknown,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      enableAutoSubAccounts:
                        null == (n = g.subAccountsConfig.get())
                          ? void 0
                          : n.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: s }),
                o
              );
            } catch (t) {
              throw (
                (console.error(t),
                (({ method: e, correlationId: t, errorMessage: n }) => {
                  var s;
                  K(
                    "scw_sub_account.insufficient_balance.error_handling.error",
                    {
                      action: a.error,
                      componentType: r.unknown,
                      method: e,
                      correlationId: t,
                      errorMessage: n,
                      enableAutoSubAccounts:
                        null == (s = g.subAccountsConfig.get())
                          ? void 0
                          : s.enableAutoSubAccounts,
                    },
                    i.high
                  );
                })({ method: e.method, correlationId: s, errorMessage: e$(t) }),
                o)
              );
            }
          }
        }
      }
      let oX = () => {
        K(
          "walletlink_signer.walletlink_connection.connection_failed",
          { action: a.measurement, componentType: r.unknown },
          i.high
        );
      };
      var o0 = n(90599);
      let o1 = "Addresses";
      class o6 {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              ev(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            a = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              a.encode(e)
            ),
            s = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(s),
            u = new Uint8Array(o);
          return ew(new Uint8Array([...n, ...c, ...u]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            (async () => {
              let a = await crypto.subtle.importKey(
                  "raw",
                  ev(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = ev(e),
                s = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                u = { name: "AES-GCM", iv: new Uint8Array(s) };
              try {
                let e = await window.crypto.subtle.decrypt(u, a, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class o5 {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unable to mark events as seen:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let a =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(a), a;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(s || (s = {}));
      class o2 {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.isDisconnecting = !1),
            (this.url = e.replace(/^http/, "ws")),
            (this.instanceId = o2.instanceCounter++),
            o2.activeInstances.add(this.instanceId);
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          if (this.isDisconnecting)
            throw Error(
              "WebSocket is disconnecting, cannot reconnect on same instance"
            );
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, s.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  r.readyState !== WebSocket.OPEN &&
                    t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, s.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, s.CONNECTED),
                  o2.pendingData.length > 0 &&
                    ([...o2.pendingData].forEach((e) => this.sendData(e)),
                    (o2.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            (this.isDisconnecting = !0),
              this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, s.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            o2.pendingData.push(e), this.isDisconnecting || this.connect();
            return;
          }
          if (t.readyState !== WebSocket.OPEN)
            return void o2.pendingData.push(e);
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
        cleanup() {
          o2.activeInstances.delete(this.instanceId);
        }
      }
      (o2.instanceCounter = 0),
        (o2.activeInstances = new Set()),
        (o2.pendingData = []);
      class o8 {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = eh(1)),
            (this.reconnectAttempts = 0),
            (this.isReconnecting = !1),
            (this._connected = !1),
            (this._linked = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              try {
                let n = await this.cipher.decrypt(e);
                null == (t = this.listener) || t.accountUpdated(n);
              } catch (e) {}
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.metadataUpdated(e, r);
              } catch (e) {}
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(e),
                  a = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.chainUpdated(r, a);
              } catch (e) {}
            }),
            (this.session = e),
            (this.cipher = new o6(e.secret)),
            (this.listener = n),
            (this.linkAPIUrl = t),
            (this.WebSocketClass = WebSocket);
          let r = this.createWebSocket();
          (this.ws = r),
            (this.http = new o5(t, e.id, e.key)),
            this.setupVisibilityChangeHandler();
        }
        createWebSocket() {
          let e = new o2(`${this.linkAPIUrl}/rpc`, this.WebSocketClass);
          return (
            (this.activeWsInstance = e),
            e.setConnectionStateListener(async (t) => {
              if (e !== this.activeWsInstance) return;
              let n = !1;
              switch (t) {
                case s.DISCONNECTED:
                  this.heartbeatIntervalId &&
                    (clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = void 0)),
                    (this.lastHeartbeatResponse = 0),
                    (n = !1),
                    this.destroyed ||
                      (async () => {
                        if (this.isReconnecting) return;
                        this.isReconnecting = !0;
                        let t = 3e3 * (0 !== this.reconnectAttempts);
                        await new Promise((e) => setTimeout(e, t)),
                          this.destroyed || e !== this.activeWsInstance
                            ? (this.isReconnecting = !1)
                            : (this.reconnectAttempts++,
                              "cleanup" in this.ws &&
                                "function" == typeof this.ws.cleanup &&
                                this.ws.cleanup(),
                              (this.ws = this.createWebSocket()),
                              this.ws
                                .connect()
                                .catch(() => {
                                  oX();
                                })
                                .finally(() => {
                                  this.isReconnecting = !1;
                                }));
                      })();
                  break;
                case s.CONNECTED:
                  this.reconnectAttempts = 0;
                  try {
                    (n = await this.handleConnected()),
                      this.fetchUnseenEventsAPI().catch(() => {});
                  } catch (e) {
                    break;
                  }
                  (this.connected = n),
                    this.updateLastHeartbeat(),
                    this.heartbeatIntervalId &&
                      clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = window.setInterval(() => {
                      this.heartbeat();
                    }, 1e4)),
                    setTimeout(() => {
                      this.heartbeat();
                    }, 100);
                case s.CONNECTING:
              }
              t !== s.CONNECTED && (this.connected = n);
            }),
            e.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            e
          );
        }
        setupVisibilityChangeHandler() {
          (this.visibilityChangeHandler = () => {
            document.hidden ||
              this.destroyed ||
              (this.connected
                ? this.heartbeat()
                : this.reconnectWithFreshWebSocket());
          }),
            (this.focusHandler = () => {
              this.destroyed ||
                this.connected ||
                this.reconnectWithFreshWebSocket();
            }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeHandler
            ),
            window.addEventListener("focus", this.focusHandler),
            window.addEventListener("pageshow", (e) => {
              e.persisted && this.focusHandler && this.focusHandler();
            });
        }
        reconnectWithFreshWebSocket() {
          if (this.destroyed) return;
          let e = this.ws;
          (this.activeWsInstance = void 0),
            e.disconnect(),
            "cleanup" in e && "function" == typeof e.cleanup && e.cleanup(),
            (this.ws = this.createWebSocket()),
            this.ws.connect().catch(() => {
              oX();
            });
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: eh(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            (this.activeWsInstance = void 0),
            this.heartbeatIntervalId &&
              (clearInterval(this.heartbeatIntervalId),
              (this.heartbeatIntervalId = void 0)),
            this.visibilityChangeHandler &&
              document.removeEventListener(
                "visibilitychange",
                this.visibilityChangeHandler
              ),
            this.focusHandler &&
              window.removeEventListener("focus", this.focusHandler),
            this.ws.disconnect(),
            "cleanup" in this.ws &&
              "function" == typeof this.ws.cleanup &&
              this.ws.cleanup(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event)
            try {
              let n = await this.cipher.decrypt(e.data),
                r = JSON.parse(n);
              if ("WEB3_RESPONSE" !== r.type) return;
              null == (t = this.listener) ||
                t.handleWeb3ResponseMessage(r.id, r.response);
            } catch (e) {}
        }
        async checkUnseenEvents() {
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          try {
            (await this.http.fetchUnseenEvents()).forEach((e) => {
              this.handleIncomingEvent(e);
            });
          } catch (e) {
            K(
              "walletlink_signer.walletlink_connection.fetch_unseen_events_failed",
              { action: a.measurement, componentType: r.unknown },
              i.high
            );
          }
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            a = {
              type: "PublishEvent",
              id: eh(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(a);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          if (this.connected)
            try {
              this.ws.sendData("h");
            } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n,
            r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, a) => {
                n = window.setTimeout(() => {
                  a(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: eh(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: eh(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: eh(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class o3 {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = eS(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      function o4(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function o9(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let o7 = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        ce = (e, t) => (e << (32 - t)) | (e >>> t);
      new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      let ct = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function cn(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          o4(e),
          e
        );
      }
      class cr {
        clone() {
          return this._cloneInto();
        }
      }
      let ca = (e, t, n) => (e & t) ^ (~e & n),
        ci = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      class cs extends cr {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = o7(this.buffer));
        }
        update(e) {
          o9(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = cn(e)).length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = o7(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o9(this);
          o4(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              `digestInto() expects output buffer of length at least ${t}`
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = o7(e),
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
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = a),
            (e.destroyed = i),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let co = new Uint32Array([
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
        cc = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        cu = new Uint32Array(64);
      class cl extends cs {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | cc[0]),
            (this.B = 0 | cc[1]),
            (this.C = 0 | cc[2]),
            (this.D = 0 | cc[3]),
            (this.E = 0 | cc[4]),
            (this.F = 0 | cc[5]),
            (this.G = 0 | cc[6]),
            (this.H = 0 | cc[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) cu[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = cu[e - 15],
              n = cu[e - 2],
              r = ce(t, 7) ^ ce(t, 18) ^ (t >>> 3),
              a = ce(n, 17) ^ ce(n, 19) ^ (n >>> 10);
            cu[e] = (a + cu[e - 7] + r + cu[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (u +
                  (ce(s, 6) ^ ce(s, 11) ^ ce(s, 25)) +
                  ca(s, o, c) +
                  co[e] +
                  cu[e]) |
                0,
              l = ((ce(n, 2) ^ ce(n, 13) ^ ce(n, 22)) + ci(n, r, a)) | 0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + l) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          cu.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let cd = (function (e) {
          let t = (t) => e().update(cn(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new cl()),
        cf = "session:id",
        cp = "session:secret",
        ch = "session:linked";
      class cm {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              o4(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += ct[e[n]];
              return t;
            })(cd(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new cm(e, eg(16), eg(32)).save();
        }
        static load(e) {
          let t = e.getItem(cf),
            n = e.getItem(ch),
            r = e.getItem(cp);
          return t && r ? new cm(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(cf, this.id),
            this.storage.setItem(cp, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ch, this._linked ? "1" : "0");
        }
      }
      var cb = n(51297);
      class cy {
        constructor() {
          (this.root = null), (this.darkMode = ee());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            Z();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, cb.render)(null, this.root),
            e &&
              (0, cb.render)(
                (0, cb.h)(
                  cg,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let cg = ({
        title: e,
        buttonText: t,
        darkMode: n,
        onButtonClick: r,
        onDismiss: a,
      }) =>
        (0, cb.h)(
          en,
          { darkMode: n },
          (0, cb.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, cb.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
            ),
            (0, cb.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            (0, cb.h)(
              "div",
              { class: Y("-cbwsdk-redirect-dialog-box", n ? "dark" : "light") },
              (0, cb.h)("p", null, e),
              (0, cb.h)("button", { onClick: r }, t)
            )
          )
        );
      class cw {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new cy());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectToCoinbaseWallet(e),
            setTimeout(() => {
              this.redirectDialog.present({
                title: "Redirecting to Coinbase Wallet...",
                buttonText: "Open",
                onButtonClick: () => {
                  this.redirectToCoinbaseWallet(e);
                },
              });
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class cv {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(o1);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                cv.accountRequestCallbackIds.size > 0 &&
                  (Array.from(cv.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  cv.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new o3()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = cm.load(this.storage) || cm.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new o8({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new cw() : new ei();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = cm.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && ep.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: eA(e.weiValue),
              data: ex(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? eA(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? eA(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? eA(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit ? eA(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: eA(e.weiValue),
              data: ex(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? eA(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? eA(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? eA(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? eA(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: ex(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = eg(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((a, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), el(e))) return i(Error(e.errorMessage));
                a(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof cw)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            cv.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              cv.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let a =
            null != (r = null == n ? void 0 : n.message)
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: a });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = eg(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (el(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              cv.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, a, i) {
          let s = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: a },
                chainId: i,
              },
            },
            o = null,
            c = eg(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        addEthereumChain(e, t, n, r, a, i) {
          let s = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: a,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = eg(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            a = eg(8),
            i = (e) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, n.method, e),
                null == r || r();
            };
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(a, (n) =>
                (null == r || r(), el(n) && n.errorCode)
                  ? t(
                      T.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : el(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(a, n);
            })
          );
        }
      }
      cv.accountRequestCallbackIds = new Set();
      var cx = n(93615).hp;
      let ck = "DefaultChainId",
        cA = "DefaultJsonRpcUrl";
      class cE {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new ep("walletlink", W)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(o1);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => e_(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake(e) {
          let t = "eth_requestAccounts",
            n = eL.get(e);
          (({ method: e, correlationId: t }) => {
            K(
              "walletlink_signer.handshake.started",
              {
                action: a.unknown,
                componentType: r.unknown,
                method: e,
                correlationId: t,
              },
              i.high
            );
          })({ method: t, correlationId: n });
          try {
            await this._eth_requestAccounts(),
              (({ method: e, correlationId: t }) => {
                K(
                  "walletlink_signer.handshake.completed",
                  {
                    action: a.unknown,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                  },
                  i.high
                );
              })({ method: t, correlationId: n });
          } catch (e) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                K(
                  "walletlink_signer.handshake.error",
                  {
                    action: a.error,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                  },
                  i.high
                );
              })({ method: t, correlationId: n, errorMessage: e$(e) }),
              e)
            );
          }
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(cA)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(cA, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(ck, t.toString(10)),
            eB(t) !== r &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", eE(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw T.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw T.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw T.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw T.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: a, image: i, decimals: s } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              a,
              s,
              i,
              null == n ? void 0 : n.toString()
            );
          return !el(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
            throw T.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw T.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw T.rpc.invalidParams("nativeCurrency is a required field");
          let a = Number.parseInt(r.chainId, 16);
          if (a === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: s = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: u = [],
              nativeCurrency: l,
            } = r,
            d = await i.addEthereumChain(a.toString(), s, u, o, c, l);
          if (el(d)) return !1;
          if ((null == (n = d.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(s[0], a), null;
          throw T.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (el(r)) throw r;
          let a = r.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => e_(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null == (n = this.callback) || n.call(this, "accountsChanged", r),
            this._storage.setItem(o1, r.join(" ")));
        }
        async request(e) {
          let t = eL.get(e);
          (({ method: e, correlationId: t }) => {
            K(
              "walletlink_signer.request.started",
              {
                action: a.unknown,
                componentType: r.unknown,
                method: e,
                correlationId: t,
              },
              i.high
            );
          })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, correlationId: t }) => {
                K(
                  "walletlink_signer.request.completed",
                  {
                    action: a.unknown,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: t }),
              n
            );
          } catch (n) {
            throw (
              ((({ method: e, correlationId: t, errorMessage: n }) => {
                K(
                  "walletlink_signer.request.error",
                  {
                    action: a.error,
                    componentType: r.unknown,
                    method: e,
                    correlationId: t,
                    errorMessage: n,
                  },
                  i.high
                );
              })({ method: e.method, correlationId: t, errorMessage: e$(n) }),
              n)
            );
          }
        }
        async _request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return eE(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw T.rpc.internal("No RPC URL set for chain");
              return G(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = e_(e);
          if (!this._addresses.map((e) => e_(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? e_(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? e_(e.to) : null,
            r = null != e.value ? eM(e.value) : BigInt(0),
            a = e.data ? ej(e.data) : cx.alloc(0),
            i = null != e.nonce ? eB(e.nonce) : null,
            s = null != e.gasPrice ? eM(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? eM(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas
                ? eM(e.maxPriorityFeePerGas)
                : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: a,
            nonce: i,
            gasPriceInWei: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? eM(e.gas) : null,
            chainId: e.chainId ? eB(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw T.rpc.invalidParams();
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: ek(n[0]),
                signature: ek(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (el(a)) throw a;
          return a.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(ck)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: eE(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (el(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: eE(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw T.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: e_(t),
                message: ek(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (el(a)) throw a;
          return a.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (el(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = ej(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (el(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (el(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw T.rpc.invalidParams();
          let r = n[+("eth_signTypedData_v1" === t)],
            a = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(r);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: e_(r),
                message: ex(
                  {
                    eth_signTypedData_v1: o0.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: o0.hashForSignTypedData_v3,
                    eth_signTypedData_v4: o0.hashForSignTypedData_v4,
                    eth_signTypedData: o0.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw T.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(a),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(a, null, 2),
                addPrefix: !1,
              },
            });
          if (el(s)) throw s;
          return s.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new cv({
                linkAPIUrl: W,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let cP = "SignerType",
        cI = new ep("CBWSDK", "SignerConfigurator");
      function cS(e) {
        if (e) return e instanceof oQ ? "scw" : "walletlink";
      }
      async function cO(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: a,
        } = e;
        cC(t, n, a, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: s } = await t.postRequestAndWaitForResponse(i);
        return s;
      }
      async function cC(e, t, n, r) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let a = new cE({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: a.getSession() },
        }),
          await a.handshake(r),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      var cT = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      class c_ extends ef {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: s } = n,
            o = cT(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = o),
            (this.communicator = new eu({
              url: s,
              metadata: t,
              preference: o,
            }));
          let c = cI.getItem(cP);
          c &&
            ((this.signer = this.initSigner(c)),
            (({ signerType: e }) => {
              K(
                "provider.signer.loaded_from_storage",
                {
                  action: a.measurement,
                  componentType: r.unknown,
                  signerType: e,
                },
                i.low
              );
            })({ signerType: c }));
        }
        async request(e) {
          let t = crypto.randomUUID();
          eL.set(e, t),
            (({ method: e, correlationId: t }) => {
              K(
                "provider.request.started",
                {
                  action: a.unknown,
                  componentType: r.unknown,
                  method: e,
                  correlationId: t,
                },
                i.high
              );
            })({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              (({ method: e, signerType: t, correlationId: n }) => {
                K(
                  "provider.request.responded",
                  {
                    action: a.unknown,
                    componentType: r.unknown,
                    method: e,
                    signerType: t,
                    correlationId: n,
                  },
                  i.high
                );
              })({
                method: e.method,
                signerType: cS(this.signer),
                correlationId: t,
              }),
              n
            );
          } catch (n) {
            throw (
              ((({
                method: e,
                correlationId: t,
                signerType: n,
                errorMessage: s,
              }) => {
                K(
                  "provider.request.error",
                  {
                    action: a.error,
                    componentType: r.unknown,
                    method: e,
                    signerType: n,
                    correlationId: t,
                    errorMessage: s,
                  },
                  i.high
                );
              })({
                method: e.method,
                correlationId: t,
                signerType: cS(this.signer),
                errorMessage: n instanceof Error ? n.message : "",
              }),
              n)
            );
          } finally {
            eL.delete(e);
          }
        }
        async _request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw T.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw T.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw T.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw T.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t,
                    n = g.subAccountsConfig.get();
                  t = (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? "scw"
                    : await this.requestSignerSelection(e);
                  let r = this.initSigner(t);
                  "scw" === t && (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? (await r.handshake({ method: "handshake" }),
                      await r.request(e))
                    : await r.handshake(e),
                    (this.signer = r),
                    cI.setItem(cP, t);
                  break;
                }
                case "wallet_connect": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return (this.signer = t), n;
                }
                case "wallet_sendCalls":
                case "wallet_sign": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return await G(e, H);
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return eE(1);
                default:
                  throw T.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === A.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let a = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        O(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (E[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                      )
                        (a.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((a.message = e.message),
                              O(e, "data") && (a.data = e.data))
                            : ((a.message = I(a.code)),
                              (a.data = { originalError: S(e) }));
                      else
                        (a.code = A.rpc.internal),
                          (a.message = C(e, "message") ? e.message : P),
                          (a.data = { originalError: S(e) });
                      return (
                        t && (a.stack = C(e, "stack") ? e.stack : void 0), a
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: A.rpc.internal };
                        if (el(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? A.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", h),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            K(
              "provider.enable_function.called",
              { action: a.measurement, componentType: r.unknown },
              i.high
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            ep.clearAll(),
            eL.clear(),
            this.emit(
              "disconnect",
              T.provider.disconnected("User initiated disconnection")
            );
        }
        async requestSignerSelection(e) {
          K(
            "signer.selection.requested",
            { action: a.unknown, componentType: r.unknown },
            i.high
          );
          let t = await cO({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
          return (
            K(
              "signer.selection.responded",
              { action: a.unknown, componentType: r.unknown, signerType: t },
              i.high
            ),
            t
          );
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: r,
            callback: a,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new oQ({ metadata: n, callback: a, communicator: r });
            case "walletlink":
              return new cE({ metadata: n, callback: a });
          }
        }
      }
      let cj = { options: "all" };
      function cB(e) {
        let t = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(cj, null != (n = e.preference) ? n : {}),
          paymasterUrls: e.paymasterUrls,
        };
        (null == (r = e.subAccounts) ? void 0 : r.toOwnerAccount) &&
          q(e.subAccounts.toOwnerAccount),
          g.subAccountsConfig.set({
            toOwnerAccount:
              null == (a = e.subAccounts) ? void 0 : a.toOwnerAccount,
            enableAutoSubAccounts:
              null == (i = e.subAccounts) ? void 0 : i.enableAutoSubAccounts,
          }),
          g.config.set(t),
          g.persist.rehydrate(),
          z(),
          !1 !== t.preference.telemetry &&
            new Promise((e, t) => {
              if (window.ClientAnalytics) return e();
              try {
                let t = document.createElement("script");
                (t.textContent =
                  '!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:`https://${e.apiEndpoint}`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>`${_e}${e}`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`%c ${x}`,a=`color:${ct};font-size:11px;`,o=`Importance: ${r}`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`color:${ct};font-size:11px;`,a=`%c ${x}`,o=`Importance: ${r}`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",`Bearer ${H.jwt}`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=`Bearer ${H.jwt}`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:`Event: exposeExperiment ${e.testName} not sent`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:`Event: exposeExperiment ${e.testName} sent`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:`perf_web_vitals_ttfb_${a}`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_cls_${a}`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_fidVitals_${a}`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}_vitals_${a}`,metricType:d.count,tags:b,value:1}),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:`perf_web_vitals_${Xt(r)}_${a}`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:`perf_web_vitals_${Xt(r)}`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return`perf_${e}${null!=t&&t.label?`_${t.label}`:""}`}function $n(e,t,n){return`${Kn(e,n)}__${t}`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));'),
                  (t.type = "text/javascript"),
                  document.head.appendChild(t),
                  (() => {
                    var e, t, n;
                    if ("undefined" != typeof window) {
                      let r =
                        null !=
                        (n =
                          null != (e = g.config.get().deviceId)
                            ? e
                            : null == (t = window.crypto)
                            ? void 0
                            : t.randomUUID())
                          ? n
                          : "";
                      if (window.ClientAnalytics) {
                        let {
                          init: e,
                          identify: t,
                          PlatformName: n,
                        } = window.ClientAnalytics;
                        e({
                          isProd: !0,
                          amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
                          platform: n.web,
                          projectName: "base_account_sdk",
                          showDebugLogging: !1,
                          version: "1.0.0",
                          apiEndpoint: "https://cca-lite.coinbase.com",
                        }),
                          t({ deviceId: r }),
                          g.config.set({ deviceId: r });
                      }
                    }
                  })(),
                  document.head.removeChild(t),
                  e();
              } catch (e) {
                console.error("Failed to execute inlined telemetry script"),
                  t();
              }
            });
        var n,
          r,
          a,
          i,
          s = t.preference;
        if (s) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(s.options))
            throw Error(`Invalid options: ${s.options}`);
          if (
            s.attribution &&
            void 0 !== s.attribution.auto &&
            void 0 !== s.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
          if (s.telemetry && "boolean" != typeof s.telemetry)
            throw Error("Telemetry must be a boolean");
        }
        let l = null,
          d = {
            getProvider: () => (
              l ||
                (l = (function (e) {
                  var t;
                  let n = { metadata: e.metadata, preference: e.preference };
                  return null !=
                    (t = (function ({ metadata: e, preference: t }) {
                      var n, r;
                      let { appName: a, appLogoUrl: i, appChainIds: s } = e;
                      if ("smartWalletOnly" !== t.options) {
                        let e = globalThis.coinbaseWalletExtension;
                        if (e)
                          return (
                            null == (n = e.setAppInfo) || n.call(e, a, i, s, t),
                            e
                          );
                      }
                      let o = (function () {
                        var e, t;
                        try {
                          let n = globalThis;
                          return null != (e = n.ethereum)
                            ? e
                            : null == (t = n.top)
                            ? void 0
                            : t.ethereum;
                        } catch (e) {
                          return;
                        }
                      })();
                      if (null == o ? void 0 : o.isCoinbaseBrowser)
                        return (
                          null == (r = o.setAppInfo) || r.call(o, a, i, s, t), o
                        );
                    })(n))
                    ? t
                    : new c_(n);
                })(t)),
              (l.sdk = d),
              l
            ),
            subAccount: {
              async create(e) {
                var t, n;
                return (
                  R(
                    null == (t = g.getState().subAccount) ? void 0 : t.address,
                    Error("subaccount already exists")
                  ),
                  await (null == (n = d.getProvider())
                    ? void 0
                    : n.request({
                        method: "wallet_addSubAccount",
                        params: [{ version: "1", account: e }],
                      }))
                );
              },
              async get() {
                var e, t;
                let n = g.subAccounts.get();
                if (null == n ? void 0 : n.address) return n;
                let r =
                  null ==
                  (t = (
                    await (null == (e = d.getProvider())
                      ? void 0
                      : e.request({
                          method: "wallet_connect",
                          params: [{ version: "1", capabilities: {} }],
                        }))
                  ).accounts[0].capabilities)
                    ? void 0
                    : t.subAccounts;
                return Array.isArray(r) ? r[0] : null;
              },
              async addOwner({ address: e, publicKey: t, chainId: n }) {
                var r, a;
                let i = g.subAccounts.get(),
                  s = g.account.get();
                R(s, Error("account does not exist")),
                  R(
                    null == i ? void 0 : i.address,
                    Error("subaccount does not exist")
                  );
                let l = [];
                if (t) {
                  let [e, n] = (0, o.n)(
                    [{ type: "bytes32" }, { type: "bytes32" }],
                    t
                  );
                  l.push({
                    to: i.address,
                    data: (0, c.p)({
                      abi: x,
                      functionName: "addOwnerPublicKey",
                      args: [e, n],
                    }),
                    value: (0, u.nj)(0),
                  });
                }
                return (
                  e &&
                    l.push({
                      to: i.address,
                      data: (0, c.p)({
                        abi: x,
                        functionName: "addOwnerAddress",
                        args: [e],
                      }),
                      value: (0, u.nj)(0),
                    }),
                  await (null == (r = d.getProvider())
                    ? void 0
                    : r.request({
                        method: "wallet_sendCalls",
                        params: [
                          {
                            calls: l,
                            chainId: (0, u.nj)(n),
                            from: null == (a = s.accounts) ? void 0 : a[0],
                            version: "1",
                          },
                        ],
                      }))
                );
              },
              setToOwnerAccount(e) {
                q(e), g.subAccountsConfig.set({ toOwnerAccount: e });
              },
            },
          };
        return d;
      }
    },
    6207: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, { BD: () => a, Ge: () => i, Yv: () => r, wj: () => s });
      let a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        s = /^\(.+?\).*?$/;
    },
    9527: (e, t, n) => {
      "use strict";
      n.d(t, { X9: () => s, s7: () => a, x8: () => i });
      var r = n(72800);
      class a extends r.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class i extends r.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class s extends r.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    9776: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => i });
      var r = n(38930),
        a = n(82355);
      let i = (e) => (0, r.di)((0, a.k)(e), 0, 4);
    },
    14307: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => i });
      var r = n(14055),
        a = n(97187);
      function i(e, t) {
        let n = (e.details || "").toLowerCase(),
          i = e instanceof r.C ? e.walk((e) => e?.code === a.A7.code) : e;
        return i instanceof r.C
          ? new a.A7({ cause: e, message: i.details })
          : a.A7.nodeMessage.test(n)
          ? new a.A7({ cause: e, message: e.details })
          : a.BG.nodeMessage.test(n)
          ? new a.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.jj.nodeMessage.test(n)
          ? new a.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.K0.nodeMessage.test(n)
          ? new a.K0({ cause: e, nonce: t?.nonce })
          : a.Oh.nodeMessage.test(n)
          ? new a.Oh({ cause: e, nonce: t?.nonce })
          : a.vW.nodeMessage.test(n)
          ? new a.vW({ cause: e, nonce: t?.nonce })
          : a.k5.nodeMessage.test(n)
          ? new a.k5({ cause: e })
          : a.lY.nodeMessage.test(n)
          ? new a.lY({ cause: e, gas: t?.gas })
          : a.Fo.nodeMessage.test(n)
          ? new a.Fo({ cause: e, gas: t?.gas })
          : a.uC.nodeMessage.test(n)
          ? new a.uC({ cause: e })
          : a.lN.nodeMessage.test(n)
          ? new a.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.RM({ cause: e });
      }
    },
    16293: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var r = n(82784),
        a = n(54368),
        i = n(72351),
        s = n(9776),
        o = n(28984),
        c = n(36937);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: n, functionName: l } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: n, functionName: r } = e,
              a = t[0];
            if (r) {
              let e = (0, c.iY)({ abi: t, args: n, name: r });
              if (!e) throw new i.Iz(r, { docsPath: u });
              a = e;
            }
            if ("function" !== a.type) throw new i.Iz(void 0, { docsPath: u });
            return { abi: [a], functionName: (0, s.V)((0, o.B)(a)) };
          })(),
          d = n[0],
          f = "inputs" in d && d.inputs ? (0, a.h)(d.inputs, t ?? []) : void 0;
        return (0, r.aP)([l, f ?? "0x"]);
      }
    },
    16331: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => a });
      var r = n(29076);
      function a(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, r.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, r.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, r.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, r.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, r.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    17105: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var r = n(21214),
        a = n(72351),
        i = n(38930),
        s = n(9776),
        o = n(43647),
        c = n(28984);
      function u(e) {
        let { abi: t, data: n, cause: u } = e,
          l = (0, i.di)(n, 0, 4);
        if ("0x" === l) throw new a.O({ cause: u });
        let d = [...(t || []), r.Mc, r.J9].find(
          (e) => "error" === e.type && l === (0, s.V)((0, c.B)(e))
        );
        if (!d)
          throw new a.Wq(l, {
            docsPath: "/docs/contract/decodeErrorResult",
            cause: u,
          });
        return {
          abiItem: d,
          args:
            "inputs" in d && d.inputs && d.inputs.length > 0
              ? (0, o.n)(d.inputs, (0, i.di)(n, 4))
              : void 0,
          errorName: d.name,
        };
      }
    },
    20258: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => s });
      var r = n(49615),
        a = n(4166),
        i = n(81080);
      function s(e) {
        let t = (0, a.e)(e),
          n = [],
          s = e.length;
        for (let a = 0; a < s; a++) {
          let s = e[a];
          (0, r.WL)(s) || n.push((0, i.uT)(s, t));
        }
        return n;
      }
    },
    21214: (e, t, n) => {
      "use strict";
      n.d(t, { J9: () => i, Mc: () => a, fD: () => r });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        a = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        i = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    21338: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => i });
      var r = n(47220);
      function a(e) {
        return {
          address: e.address,
          amount: r.oB(e.amount),
          index: r.oB(e.index),
          validatorIndex: r.oB(e.validatorIndex),
        };
      }
      function i(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: r.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: r.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: r.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: r.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: r.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: r.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(a) }),
        };
      }
    },
    21542: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => k });
      var r = n(20258),
        a = n(21338),
        i = n(4962),
        s = n(59400),
        o = n(75134),
        c = n(14055),
        u = n(95316),
        l = n(27104),
        d = n(96903),
        f = n(37241),
        p = n(16293),
        h = n(63434),
        m = n(60067),
        b = n(22271),
        y = n(54810),
        g = n(70824),
        w = n(21936),
        v = n(89456),
        x = n(52193);
      async function k(e, t) {
        let {
            account: s = e.account,
            authorizationList: d,
            batch: p = !!e.batch?.multicall,
            blockNumber: h,
            blockTag: w = e.experimental_blockTag ?? "latest",
            accessList: k,
            blobs: P,
            blockOverrides: I,
            code: S,
            data: O,
            factory: C,
            factoryData: T,
            gas: _,
            gasPrice: j,
            maxFeePerBlobGas: B,
            maxFeePerGas: M,
            maxPriorityFeePerGas: N,
            nonce: L,
            to: D,
            value: R,
            stateOverride: $,
            ...U
          } = t,
          z = s ? (0, i.J)(s) : void 0;
        if (S && (C || T))
          throw new c.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (S && D)
          throw new c.C("Cannot provide both `code` & `to` as parameters.");
        let F = S && O,
          q = C && T && D && O,
          G = F || q,
          H = F
            ? E({ code: S, data: O })
            : q
            ? (function (e) {
                let { data: t, factory: n, factoryData: a, to: i } = e;
                return (0, f.m)({
                  abi: (0, r.U)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: o.WN,
                  args: [i, t, n, a],
                });
              })({ data: O, factory: C, factoryData: T, to: D })
            : O;
        try {
          (0, x.c)(t);
          let n = ("bigint" == typeof h ? (0, m.cK)(h) : void 0) || w,
            r = I ? a.J(I) : void 0,
            i = (0, v.yH)($),
            s = e.chain?.formatters?.transactionRequest?.format,
            o = (s || g.Bv)(
              {
                ...(0, y.o)(U, { format: s }),
                accessList: k,
                account: z,
                authorizationList: d,
                blobs: P,
                data: H,
                gas: _,
                gasPrice: j,
                maxFeePerBlobGas: B,
                maxFeePerGas: M,
                maxPriorityFeePerGas: N,
                nonce: L,
                to: G ? void 0 : D,
                value: R,
              },
              "call"
            );
          if (
            p &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: o }) &&
            !i &&
            !r
          )
            try {
              return await A(e, { ...o, blockNumber: h, blockTag: w });
            } catch (e) {
              if (!(e instanceof u.YE) && !(e instanceof u.rj)) throw e;
            }
          let c = (() => {
              let e = [o, n];
              return i && r
                ? [...e, i, r]
                : i
                ? [...e, i]
                : r
                ? [...e, {}, r]
                : e;
            })(),
            l = await e.request({ method: "eth_call", params: c });
          if ("0x" === l) return { data: void 0 };
          return { data: l };
        } catch (s) {
          let r = (function (e) {
              if (!(e instanceof c.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(s),
            { offchainLookup: a, offchainLookupSignature: i } = await n
              .e(6076)
              .then(n.bind(n, 96076));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === i && D)
            return { data: await a(e, { data: r, to: D }) };
          if (G && r?.slice(0, 10) === "0x101bb98d")
            throw new l.Po({ factory: C });
          throw (0, b.d)(s, { ...t, account: z, chain: e.chain });
        }
      }
      async function A(e, t) {
        let {
            batchSize: n = 1024,
            deployless: r = !1,
            wait: a = 0,
          } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: i,
            blockTag: c = e.experimental_blockTag ?? "latest",
            data: f,
            to: b,
          } = t,
          y = (() => {
            if (r) return null;
            if (t.multicallAddress) return t.multicallAddress;
            if (e.chain)
              return (0, h.M)({
                blockNumber: i,
                chain: e.chain,
                contract: "multicall3",
              });
            throw new u.YE();
          })(),
          g = ("bigint" == typeof i ? (0, m.cK)(i) : void 0) || c,
          { schedule: v } = (0, w.u)({
            id: `${e.uid}.${g}`,
            wait: a,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, p.p)({
                  abi: s.v2,
                  args: [n],
                  functionName: "aggregate3",
                }),
                a = await e.request({
                  method: "eth_call",
                  params: [
                    {
                      ...(null === y
                        ? { data: E({ code: o.Ez, data: r }) }
                        : { to: y, data: r }),
                    },
                    g,
                  ],
                });
              return (0, d.e)({
                abi: s.v2,
                args: [n],
                functionName: "aggregate3",
                data: a || "0x",
              });
            },
          }),
          [{ returnData: x, success: k }] = await v({ data: f, to: b });
        if (!k) throw new l.$S({ data: x });
        return "0x" === x ? { data: void 0 } : { data: x };
      }
      function E(e) {
        let { code: t, data: n } = e;
        return (0, f.m)({
          abi: (0, r.U)(["constructor(bytes, bytes)"]),
          bytecode: o.LX,
          args: [t, n],
        });
      }
    },
    22271: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => s });
      var r = n(27104),
        a = n(97187),
        i = n(14307);
      function s(e, { docsPath: t, ...n }) {
        let s = (() => {
          let t = (0, i.l)(e, n);
          return t instanceof a.RM ? e : t;
        })();
        return new r.zX(s, { docsPath: t, ...n });
      }
    },
    22378: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var r = n(3677),
        a = n(45746);
      function i(e, t) {
        if (!(0, a.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, a.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    24182: (e, t, n) => {
      "use strict";
      n.d(t, { BD: () => a, D5: () => r, Ge: () => i });
      let r = /^(.*)\[([0-9]*)\]$/,
        a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    26534: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.add =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
          t.split =
          t.fromBig =
            void 0);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function a(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> r) & n) }
          : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
      }
      function i(e, t = !1) {
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: s, l: o } = a(e[i], t);
          [n[i], r[i]] = [s, o];
        }
        return [n, r];
      }
      (t.fromBig = a), (t.split = i);
      let s = (e, t) => (BigInt(e >>> 0) << r) | BigInt(t >>> 0);
      t.toBig = s;
      let o = (e, t, n) => e >>> n;
      t.shrSH = o;
      let c = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = c;
      let u = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = u;
      let l = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = l;
      let d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = d;
      let f = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = f;
      let p = (e, t) => t;
      t.rotr32H = p;
      let h = (e, t) => e;
      t.rotr32L = h;
      let m = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = m;
      let b = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = b;
      let y = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = y;
      let g = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function w(e, t, n, r) {
        let a = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((a / 0x100000000) | 0)) | 0, l: 0 | a };
      }
      (t.rotlBL = g), (t.add = w);
      let v = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = v;
      let x = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
      t.add3H = x;
      let k = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = k;
      let A = (e, t, n, r, a) => (t + n + r + a + ((e / 0x100000000) | 0)) | 0;
      t.add4H = A;
      let E = (e, t, n, r, a) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (a >>> 0);
      t.add5L = E;
      let P = (e, t, n, r, a, i) =>
        (t + n + r + a + i + ((e / 0x100000000) | 0)) | 0;
      (t.add5H = P),
        (t.default = {
          fromBig: a,
          split: i,
          toBig: s,
          shrSH: o,
          shrSL: c,
          rotrSH: u,
          rotrSL: l,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: h,
          rotlSH: m,
          rotlSL: b,
          rotlBH: y,
          rotlBL: g,
          add: w,
          add3L: v,
          add3H: x,
          add4L: k,
          add4H: A,
          add5H: P,
          add5L: E,
        });
    },
    27104: (e, t, n) => {
      "use strict";
      n.d(t, {
        zX: () => y,
        bG: () => g,
        M: () => w,
        rR: () => v,
        Po: () => x,
        $S: () => k,
      });
      var r = n(4962),
        a = n(21214),
        i = n(17105),
        s = n(28984),
        o = n(2116);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, o.A)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var u = n(36937),
        l = n(96283),
        d = n(87829),
        f = n(72351),
        p = n(14055),
        h = n(61804),
        m = n(11965),
        b = n(56812);
      class y extends p.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: i,
            gas: s,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: f,
            to: p,
            value: b,
            stateOverride: y,
          }
        ) {
          let g = t ? (0, r.J)(t) : void 0,
            w = (0, m.aO)({
              from: g?.address,
              to: p,
              value:
                void 0 !== b &&
                `${(0, l.c)(b)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: i,
              gas: s,
              gasPrice: void 0 !== o && `${(0, d.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: f,
            });
          y &&
            (w += `
${(0, h.uj)(y)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
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
      class g extends p.C {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: a,
            functionName: i,
            sender: o,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: n, name: i }),
            d = l
              ? c({
                  abiItem: l,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            f = l ? (0, s.B)(l, { includeName: !0 }) : void 0,
            p = (0, m.aO)({
              address: r && (0, b.R)(r),
              function: f,
              args:
                d &&
                "()" !== d &&
                `${[...Array(i?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                p && "Contract Call:",
                p,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = i),
            (this.sender = o);
        }
      }
      class w extends p.C {
        constructor({
          abi: e,
          data: t,
          functionName: n,
          message: r,
          cause: o,
        }) {
          let u, l, d, p, h;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: u,
              } = (l = (0, i.W)({ abi: e, data: t, cause: o }));
              if ("Error" === r) p = u[0];
              else if ("Panic" === r) {
                let [e] = u;
                p = a.fD[e];
              } else {
                let e = n ? (0, s.B)(n, { includeName: !0 }) : void 0,
                  t =
                    n && u
                      ? c({
                          abiItem: n,
                          args: u,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                d = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              u = e;
            }
          else r && (p = r);
          u instanceof f.Wq &&
            ((h = u.signature),
            (d = [
              `Unable to decode signature "${h}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${h}.`,
            ])),
            super(
              (p && "execution reverted" !== p) || h
                ? [
                    `The contract function "${n}" reverted with the following ${
                      h ? "signature" : "reason"
                    }:`,
                    p || h,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: u ?? o,
                metaMessages: d,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = l),
            (this.raw = t),
            (this.reason = p),
            (this.signature = h);
        }
      }
      class v extends p.C {
        constructor({ functionName: e, cause: t }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
            cause: t,
          });
        }
      }
      class x extends p.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class k extends p.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    28984: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i, B: () => a });
      var r = n(72351);
      function a(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.d_(e.type);
        return `${e.name}(${i(e.inputs, { includeName: t })})`;
      }
      function i(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${i(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    29076: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => i });
      var r = n(6207);
      let a = /^tuple(?<array>(\[(\d*)\])*)$/;
      function i(e) {
        let t = "",
          n = e.length;
        for (let i = 0; i < n; i++)
          (t += (function e(t) {
            let n = t.type;
            if (a.test(t.type) && "components" in t) {
              n = "(";
              let i = t.components.length;
              for (let r = 0; r < i; r++)
                (n += e(t.components[r])), r < i - 1 && (n += ", ");
              let s = (0, r.Yv)(a, t.type);
              return (n += `)${s?.array || ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[i])),
            i !== n - 1 && (t += ", ");
        return t;
      }
    },
    31325: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => I });
      var r = n(62172);
      class a extends r.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, r.sd)(e);
          let n = (0, r.ZJ)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let a = this.blockLen,
            i = new Uint8Array(a);
          i.set(n.length > a ? e.create().update(n).digest() : n);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), (0, r.uH)(i);
        }
        update(e) {
          return (0, r.CC)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, r.CC)(this),
            (0, r.DO)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: n,
            finished: r,
            destroyed: a,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = a),
            (e.blockLen = i),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let i = (e, t, n) => new a(e, t).update(n).digest();
      i.create = (e, t) => new a(e, t);
      var s = n(87897),
        o = n(47282);
      let c = BigInt(0),
        u = BigInt(1);
      function l(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function d(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function f(e, t) {
        d(e, t);
        let n = Math.ceil(t / e) + 1,
          r = 2 ** (e - 1),
          a = 2 ** e;
        return {
          windows: n,
          windowSize: r,
          mask: (0, o.OG)(e),
          maxNumber: a,
          shiftBy: BigInt(e),
        };
      }
      function p(e, t, n) {
        let { windowSize: r, mask: a, maxNumber: i, shiftBy: s } = n,
          o = Number(e & a),
          c = e >> s;
        o > r && ((o -= i), (c += u));
        let l = t * r,
          d = l + Math.abs(o) - 1,
          f = 0 === o;
        return {
          nextN: c,
          offset: d,
          isZero: f,
          isNeg: o < 0,
          isNegF: t % 2 != 0,
          offsetF: l,
        };
      }
      let h = new WeakMap(),
        m = new WeakMap();
      function b(e) {
        return m.get(e) || 1;
      }
      function y(e) {
        return (
          (0, s.jr)(e.Fp),
          (0, o.Q5)(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, s.LH)(e.n, e.nBitLength),
            ...e,
            ...{ p: e.Fp.ORDER },
          })
        );
      }
      function g(e) {
        void 0 !== e.lowS && (0, o.e8)("lowS", e.lowS),
          void 0 !== e.prehash && (0, o.e8)("prehash", e.prehash);
      }
      class w extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let v = {
        Err: w,
        _tlv: {
          encode: (e, t) => {
            let { Err: n } = v;
            if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
            if (1 & t.length) throw new n("tlv.encode: unpadded data");
            let r = t.length / 2,
              a = (0, o.zW)(r);
            if ((a.length / 2) & 128)
              throw new n("tlv.encode: long form length too big");
            let i = r > 127 ? (0, o.zW)((a.length / 2) | 128) : "";
            return (0, o.zW)(e) + i + a + t;
          },
          decode(e, t) {
            let { Err: n } = v,
              r = 0;
            if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
            if (t.length < 2 || t[r++] !== e)
              throw new n("tlv.decode: wrong tlv");
            let a = t[r++],
              i = 0;
            if (128 & a) {
              let e = 127 & a;
              if (!e)
                throw new n(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (e > 4)
                throw new n("tlv.decode(long): byte length is too big");
              let s = t.subarray(r, r + e);
              if (s.length !== e)
                throw new n("tlv.decode: length bytes not complete");
              if (0 === s[0])
                throw new n("tlv.decode(long): zero leftmost byte");
              for (let e of s) i = (i << 8) | e;
              if (((r += e), i < 128))
                throw new n("tlv.decode(long): not minimal encoding");
            } else i = a;
            let s = t.subarray(r, r + i);
            if (s.length !== i) throw new n("tlv.decode: wrong value length");
            return { v: s, l: t.subarray(r + i) };
          },
        },
        _int: {
          encode(e) {
            let { Err: t } = v;
            if (e < k)
              throw new t("integer: negative integers are not allowed");
            let n = (0, o.zW)(e);
            if ((8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length))
              throw new t("unexpected DER parsing assertion: unpadded hex");
            return n;
          },
          decode(e) {
            let { Err: t } = v;
            if (128 & e[0]) throw new t("invalid signature integer: negative");
            if (0 === e[0] && !(128 & e[1]))
              throw new t(
                "invalid signature integer: unnecessary leading zero"
              );
            return (0, o.Ph)(e);
          },
        },
        toSig(e) {
          let { Err: t, _int: n, _tlv: r } = v,
            a = (0, o.qj)("signature", e),
            { v: i, l: s } = r.decode(48, a);
          if (s.length)
            throw new t("invalid signature: left bytes after parsing");
          let { v: c, l: u } = r.decode(2, i),
            { v: l, l: d } = r.decode(2, u);
          if (d.length)
            throw new t("invalid signature: left bytes after parsing");
          return { r: n.decode(c), s: n.decode(l) };
        },
        hexFromSig(e) {
          let { _tlv: t, _int: n } = v,
            r = t.encode(2, n.encode(e.r)),
            a = t.encode(2, n.encode(e.s));
          return t.encode(48, r + a);
        },
      };
      function x(e, t) {
        return (0, o.My)((0, o.lq)(e, t));
      }
      let k = BigInt(0),
        A = BigInt(1),
        E = (BigInt(2), BigInt(3)),
        P = BigInt(4);
      function I(e, t) {
        let n = (t) =>
          (function (e) {
            let t = (function (e) {
                let t = y(e);
                return (
                  (0, o.Q5)(
                    t,
                    { hash: "hash", hmac: "function", randomBytes: "function" },
                    {
                      bits2int: "function",
                      bits2int_modN: "function",
                      lowS: "boolean",
                    }
                  ),
                  Object.freeze({ lowS: !0, ...t })
                );
              })(e),
              { Fp: n, n: r, nByteLength: a, nBitLength: i } = t,
              w = n.BYTES + 1,
              I = 2 * n.BYTES + 1;
            function S(e) {
              return (0, s.zi)(e, r);
            }
            function O(e) {
              return (0, s.B8)(e, r);
            }
            let {
                ProjectivePoint: C,
                normPrivateKeyToScalar: T,
                weierstrassEquation: _,
                isWithinCurveOrder: j,
              } = (function (e) {
                var t;
                let n = (function (e) {
                    let t = y(e);
                    (0, o.Q5)(
                      t,
                      { a: "field", b: "field" },
                      {
                        allowInfinityPoint: "boolean",
                        allowedPrivateKeyLengths: "array",
                        clearCofactor: "function",
                        fromBytes: "function",
                        isTorsionFree: "function",
                        toBytes: "function",
                        wrapPrivateKey: "boolean",
                      }
                    );
                    let { endo: n, Fp: r, a } = t;
                    if (n) {
                      if (!r.eql(a, r.ZERO))
                        throw Error("invalid endo: CURVE.a must be 0");
                      if (
                        "object" != typeof n ||
                        "bigint" != typeof n.beta ||
                        "function" != typeof n.splitScalar
                      )
                        throw Error(
                          'invalid endo: expected "beta": bigint and "splitScalar": function'
                        );
                    }
                    return Object.freeze({ ...t });
                  })(e),
                  { Fp: r } = n,
                  a = (0, s.D0)(n.n, n.nBitLength),
                  i =
                    n.toBytes ||
                    ((e, t, n) => {
                      let a = t.toAffine();
                      return (0, o.Id)(
                        Uint8Array.from([4]),
                        r.toBytes(a.x),
                        r.toBytes(a.y)
                      );
                    }),
                  g =
                    n.fromBytes ||
                    ((e) => {
                      let t = e.subarray(1);
                      return {
                        x: r.fromBytes(t.subarray(0, r.BYTES)),
                        y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    });
                function w(e) {
                  let { a: t, b: a } = n,
                    i = r.sqr(e),
                    s = r.mul(i, e);
                  return r.add(r.add(s, r.mul(e, t)), a);
                }
                function v(e, t) {
                  let n = r.sqr(t),
                    a = w(e);
                  return r.eql(n, a);
                }
                if (!v(n.Gx, n.Gy))
                  throw Error("bad curve params: generator point");
                let x = r.mul(r.pow(n.a, E), P),
                  I = r.mul(r.sqr(n.b), BigInt(27));
                if (r.is0(r.add(x, I))) throw Error("bad curve params: a or b");
                function S(e) {
                  let t,
                    {
                      allowedPrivateKeyLengths: r,
                      nByteLength: a,
                      wrapPrivateKey: i,
                      n: c,
                    } = n;
                  if (r && "bigint" != typeof e) {
                    if (
                      ((0, o.aY)(e) && (e = (0, o.My)(e)),
                      "string" != typeof e || !r.includes(e.length))
                    )
                      throw Error("invalid private key");
                    e = e.padStart(2 * a, "0");
                  }
                  try {
                    t =
                      "bigint" == typeof e
                        ? e
                        : (0, o.Ph)((0, o.qj)("private key", e, a));
                  } catch (t) {
                    throw Error(
                      "invalid private key, expected hex or " +
                        a +
                        " bytes, got " +
                        typeof e
                    );
                  }
                  return (
                    i && (t = (0, s.zi)(t, c)),
                    (0, o.aK)("private key", t, A, c),
                    t
                  );
                }
                function O(e) {
                  if (!(e instanceof _))
                    throw Error("ProjectivePoint expected");
                }
                let C = (0, o.x)((e, t) => {
                    let { px: n, py: a, pz: i } = e;
                    if (r.eql(i, r.ONE)) return { x: n, y: a };
                    let s = e.is0();
                    null == t && (t = s ? r.ONE : r.inv(i));
                    let o = r.mul(n, t),
                      c = r.mul(a, t),
                      u = r.mul(i, t);
                    if (s) return { x: r.ZERO, y: r.ZERO };
                    if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                    return { x: o, y: c };
                  }),
                  T = (0, o.x)((e) => {
                    if (e.is0()) {
                      if (n.allowInfinityPoint && !r.is0(e.py)) return;
                      throw Error("bad point: ZERO");
                    }
                    let { x: t, y: a } = e.toAffine();
                    if (!r.isValid(t) || !r.isValid(a))
                      throw Error("bad point: x or y not FE");
                    if (!v(t, a))
                      throw Error("bad point: equation left != right");
                    if (!e.isTorsionFree())
                      throw Error("bad point: not in prime-order subgroup");
                    return !0;
                  });
                class _ {
                  constructor(e, t, n) {
                    if (null == e || !r.isValid(e)) throw Error("x required");
                    if (null == t || !r.isValid(t) || r.is0(t))
                      throw Error("y required");
                    if (null == n || !r.isValid(n)) throw Error("z required");
                    (this.px = e),
                      (this.py = t),
                      (this.pz = n),
                      Object.freeze(this);
                  }
                  static fromAffine(e) {
                    let { x: t, y: n } = e || {};
                    if (!e || !r.isValid(t) || !r.isValid(n))
                      throw Error("invalid affine point");
                    if (e instanceof _)
                      throw Error("projective point not allowed");
                    let a = (e) => r.eql(e, r.ZERO);
                    return a(t) && a(n) ? _.ZERO : new _(t, n, r.ONE);
                  }
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  static normalizeZ(e) {
                    let t = (0, s.pS)(
                      r,
                      e.map((e) => e.pz)
                    );
                    return e.map((e, n) => e.toAffine(t[n])).map(_.fromAffine);
                  }
                  static fromHex(e) {
                    let t = _.fromAffine(g((0, o.qj)("pointHex", e)));
                    return t.assertValidity(), t;
                  }
                  static fromPrivateKey(e) {
                    return _.BASE.multiply(S(e));
                  }
                  static msm(e, t) {
                    return (function (e, t, n, r) {
                      if (!Array.isArray(n)) throw Error("array expected");
                      n.forEach((t, n) => {
                        if (!(t instanceof e))
                          throw Error("invalid point at index " + n);
                      });
                      if (!Array.isArray(r))
                        throw Error("array of scalars expected");
                      r.forEach((e, n) => {
                        if (!t.isValid(e))
                          throw Error("invalid scalar at index " + n);
                      });
                      let a = n.length,
                        i = r.length;
                      if (a !== i)
                        throw Error(
                          "arrays of points and scalars must have equal length"
                        );
                      let s = e.ZERO,
                        c = (0, o.dJ)(BigInt(a)),
                        u = 1;
                      c > 12
                        ? (u = c - 3)
                        : c > 4
                        ? (u = c - 2)
                        : c > 0 && (u = 2);
                      let l = (0, o.OG)(u),
                        d = Array(Number(l) + 1).fill(s),
                        f = Math.floor((t.BITS - 1) / u) * u,
                        p = s;
                      for (let e = f; e >= 0; e -= u) {
                        d.fill(s);
                        for (let t = 0; t < i; t++) {
                          let a = Number((r[t] >> BigInt(e)) & l);
                          d[a] = d[a].add(n[t]);
                        }
                        let t = s;
                        for (let e = d.length - 1, n = s; e > 0; e--)
                          (n = n.add(d[e])), (t = t.add(n));
                        if (((p = p.add(t)), 0 !== e))
                          for (let e = 0; e < u; e++) p = p.double();
                      }
                      return p;
                    })(_, a, e, t);
                  }
                  _setWindowSize(e) {
                    M.setWindowSize(this, e);
                  }
                  assertValidity() {
                    T(this);
                  }
                  hasEvenY() {
                    let { y: e } = this.toAffine();
                    if (r.isOdd) return !r.isOdd(e);
                    throw Error("Field doesn't support isOdd");
                  }
                  equals(e) {
                    O(e);
                    let { px: t, py: n, pz: a } = this,
                      { px: i, py: s, pz: o } = e,
                      c = r.eql(r.mul(t, o), r.mul(i, a)),
                      u = r.eql(r.mul(n, o), r.mul(s, a));
                    return c && u;
                  }
                  negate() {
                    return new _(this.px, r.neg(this.py), this.pz);
                  }
                  double() {
                    let { a: e, b: t } = n,
                      a = r.mul(t, E),
                      { px: i, py: s, pz: o } = this,
                      c = r.ZERO,
                      u = r.ZERO,
                      l = r.ZERO,
                      d = r.mul(i, i),
                      f = r.mul(s, s),
                      p = r.mul(o, o),
                      h = r.mul(i, s);
                    return (
                      (h = r.add(h, h)),
                      (l = r.mul(i, o)),
                      (l = r.add(l, l)),
                      (c = r.mul(e, l)),
                      (u = r.mul(a, p)),
                      (u = r.add(c, u)),
                      (c = r.sub(f, u)),
                      (u = r.add(f, u)),
                      (u = r.mul(c, u)),
                      (c = r.mul(h, c)),
                      (l = r.mul(a, l)),
                      (p = r.mul(e, p)),
                      (h = r.sub(d, p)),
                      (h = r.mul(e, h)),
                      (h = r.add(h, l)),
                      (l = r.add(d, d)),
                      (d = r.add(l, d)),
                      (d = r.add(d, p)),
                      (d = r.mul(d, h)),
                      (u = r.add(u, d)),
                      (p = r.mul(s, o)),
                      (p = r.add(p, p)),
                      (d = r.mul(p, h)),
                      (c = r.sub(c, d)),
                      (l = r.mul(p, f)),
                      (l = r.add(l, l)),
                      new _(c, u, (l = r.add(l, l)))
                    );
                  }
                  add(e) {
                    O(e);
                    let { px: t, py: a, pz: i } = this,
                      { px: s, py: o, pz: c } = e,
                      u = r.ZERO,
                      l = r.ZERO,
                      d = r.ZERO,
                      f = n.a,
                      p = r.mul(n.b, E),
                      h = r.mul(t, s),
                      m = r.mul(a, o),
                      b = r.mul(i, c),
                      y = r.add(t, a),
                      g = r.add(s, o);
                    (y = r.mul(y, g)),
                      (g = r.add(h, m)),
                      (y = r.sub(y, g)),
                      (g = r.add(t, i));
                    let w = r.add(s, c);
                    return (
                      (g = r.mul(g, w)),
                      (w = r.add(h, b)),
                      (g = r.sub(g, w)),
                      (w = r.add(a, i)),
                      (u = r.add(o, c)),
                      (w = r.mul(w, u)),
                      (u = r.add(m, b)),
                      (w = r.sub(w, u)),
                      (d = r.mul(f, g)),
                      (u = r.mul(p, b)),
                      (d = r.add(u, d)),
                      (u = r.sub(m, d)),
                      (d = r.add(m, d)),
                      (l = r.mul(u, d)),
                      (m = r.add(h, h)),
                      (m = r.add(m, h)),
                      (b = r.mul(f, b)),
                      (g = r.mul(p, g)),
                      (m = r.add(m, b)),
                      (b = r.sub(h, b)),
                      (b = r.mul(f, b)),
                      (g = r.add(g, b)),
                      (h = r.mul(m, g)),
                      (l = r.add(l, h)),
                      (h = r.mul(w, g)),
                      (u = r.mul(y, u)),
                      (u = r.sub(u, h)),
                      (h = r.mul(y, m)),
                      (d = r.mul(w, d)),
                      new _(u, l, (d = r.add(d, h)))
                    );
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  is0() {
                    return this.equals(_.ZERO);
                  }
                  wNAF(e) {
                    return M.wNAFCached(this, e, _.normalizeZ);
                  }
                  multiplyUnsafe(e) {
                    let { endo: t, n: a } = n;
                    (0, o.aK)("scalar", e, k, a);
                    let i = _.ZERO;
                    if (e === k) return i;
                    if (this.is0() || e === A) return this;
                    if (!t || M.hasPrecomputes(this))
                      return M.wNAFCachedUnsafe(this, e, _.normalizeZ);
                    let { k1neg: s, k1: c, k2neg: u, k2: l } = t.splitScalar(e),
                      d = i,
                      f = i,
                      p = this;
                    for (; c > k || l > k; )
                      c & A && (d = d.add(p)),
                        l & A && (f = f.add(p)),
                        (p = p.double()),
                        (c >>= A),
                        (l >>= A);
                    return (
                      s && (d = d.negate()),
                      u && (f = f.negate()),
                      (f = new _(r.mul(f.px, t.beta), f.py, f.pz)),
                      d.add(f)
                    );
                  }
                  multiply(e) {
                    let t,
                      a,
                      { endo: i, n: s } = n;
                    if (((0, o.aK)("scalar", e, A, s), i)) {
                      let {
                          k1neg: n,
                          k1: s,
                          k2neg: o,
                          k2: c,
                        } = i.splitScalar(e),
                        { p: u, f: l } = this.wNAF(s),
                        { p: d, f: f } = this.wNAF(c);
                      (u = M.constTimeNegate(n, u)),
                        (d = M.constTimeNegate(o, d)),
                        (d = new _(r.mul(d.px, i.beta), d.py, d.pz)),
                        (t = u.add(d)),
                        (a = l.add(f));
                    } else {
                      let { p: n, f: r } = this.wNAF(e);
                      (t = n), (a = r);
                    }
                    return _.normalizeZ([t, a])[0];
                  }
                  multiplyAndAddUnsafe(e, t, n) {
                    let r = _.BASE,
                      a = (e, t) =>
                        t !== k && t !== A && e.equals(r)
                          ? e.multiply(t)
                          : e.multiplyUnsafe(t),
                      i = a(this, t).add(a(e, n));
                    return i.is0() ? void 0 : i;
                  }
                  toAffine(e) {
                    return C(this, e);
                  }
                  isTorsionFree() {
                    let { h: e, isTorsionFree: t } = n;
                    if (e === A) return !0;
                    if (t) return t(_, this);
                    throw Error(
                      "isTorsionFree() has not been declared for the elliptic curve"
                    );
                  }
                  clearCofactor() {
                    let { h: e, clearCofactor: t } = n;
                    return e === A
                      ? this
                      : t
                      ? t(_, this)
                      : this.multiplyUnsafe(n.h);
                  }
                  toRawBytes(e = !0) {
                    return (
                      (0, o.e8)("isCompressed", e),
                      this.assertValidity(),
                      i(_, this, e)
                    );
                  }
                  toHex(e = !0) {
                    return (
                      (0, o.e8)("isCompressed", e),
                      (0, o.My)(this.toRawBytes(e))
                    );
                  }
                }
                (_.BASE = new _(n.Gx, n.Gy, r.ONE)),
                  (_.ZERO = new _(r.ZERO, r.ONE, r.ZERO));
                let { endo: j, nBitLength: B } = n,
                  M =
                    ((t = j ? Math.ceil(B / 2) : B),
                    {
                      constTimeNegate: l,
                      hasPrecomputes: (e) => 1 !== b(e),
                      unsafeLadder(e, t, n = _.ZERO) {
                        let r = e;
                        for (; t > c; )
                          t & u && (n = n.add(r)), (r = r.double()), (t >>= u);
                        return n;
                      },
                      precomputeWindow(e, n) {
                        let { windows: r, windowSize: a } = f(n, t),
                          i = [],
                          s = e,
                          o = s;
                        for (let e = 0; e < r; e++) {
                          (o = s), i.push(o);
                          for (let e = 1; e < a; e++) (o = o.add(s)), i.push(o);
                          s = o.double();
                        }
                        return i;
                      },
                      wNAF(e, n, r) {
                        let a = _.ZERO,
                          i = _.BASE,
                          s = f(e, t);
                        for (let e = 0; e < s.windows; e++) {
                          let {
                            nextN: t,
                            offset: o,
                            isZero: c,
                            isNeg: u,
                            isNegF: d,
                            offsetF: f,
                          } = p(r, e, s);
                          (r = t),
                            c
                              ? (i = i.add(l(d, n[f])))
                              : (a = a.add(l(u, n[o])));
                        }
                        return { p: a, f: i };
                      },
                      wNAFUnsafe(e, n, r, a = _.ZERO) {
                        let i = f(e, t);
                        for (let e = 0; e < i.windows && r !== c; e++) {
                          let {
                            nextN: t,
                            offset: s,
                            isZero: o,
                            isNeg: c,
                          } = p(r, e, i);
                          if (((r = t), !o)) {
                            let e = n[s];
                            a = a.add(c ? e.negate() : e);
                          }
                        }
                        return a;
                      },
                      getPrecomputes(e, t, n) {
                        let r = h.get(t);
                        return (
                          r ||
                            ((r = this.precomputeWindow(t, e)),
                            1 !== e && h.set(t, n(r))),
                          r
                        );
                      },
                      wNAFCached(e, t, n) {
                        let r = b(e);
                        return this.wNAF(r, this.getPrecomputes(r, e, n), t);
                      },
                      wNAFCachedUnsafe(e, t, n, r) {
                        let a = b(e);
                        return 1 === a
                          ? this.unsafeLadder(e, t, r)
                          : this.wNAFUnsafe(
                              a,
                              this.getPrecomputes(a, e, n),
                              t,
                              r
                            );
                      },
                      setWindowSize(e, n) {
                        d(n, t), m.set(e, n), h.delete(e);
                      },
                    });
                return {
                  CURVE: n,
                  ProjectivePoint: _,
                  normPrivateKeyToScalar: S,
                  weierstrassEquation: w,
                  isWithinCurveOrder: function (e) {
                    return (0, o.r4)(e, A, n.n);
                  },
                };
              })({
                ...t,
                toBytes(e, t, r) {
                  let a = t.toAffine(),
                    i = n.toBytes(a.x),
                    s = o.Id;
                  return ((0, o.e8)("isCompressed", r), r)
                    ? s(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                    : s(Uint8Array.from([4]), i, n.toBytes(a.y));
                },
                fromBytes(e) {
                  let t = e.length,
                    r = e[0],
                    a = e.subarray(1);
                  if (t === w && (2 === r || 3 === r)) {
                    let e,
                      t = (0, o.Ph)(a);
                    if (!(0, o.r4)(t, A, n.ORDER))
                      throw Error("Point is not on curve");
                    let i = _(t);
                    try {
                      e = n.sqrt(i);
                    } catch (e) {
                      throw Error(
                        "Point is not on curve" +
                          (e instanceof Error ? ": " + e.message : "")
                      );
                    }
                    return (
                      ((1 & r) == 1) != ((e & A) === A) && (e = n.neg(e)),
                      { x: t, y: e }
                    );
                  }
                  if (t === I && 4 === r)
                    return {
                      x: n.fromBytes(a.subarray(0, n.BYTES)),
                      y: n.fromBytes(a.subarray(n.BYTES, 2 * n.BYTES)),
                    };
                  throw Error(
                    "invalid Point, expected length of " +
                      w +
                      ", or uncompressed " +
                      I +
                      ", got " +
                      t
                  );
                },
              }),
              B = (e, t, n) => (0, o.Ph)(e.slice(t, n));
            class M {
              constructor(e, t, n) {
                (0, o.aK)("r", e, A, r),
                  (0, o.aK)("s", t, A, r),
                  (this.r = e),
                  (this.s = t),
                  null != n && (this.recovery = n),
                  Object.freeze(this);
              }
              static fromCompact(e) {
                return new M(
                  B((e = (0, o.qj)("compactSignature", e, 2 * a)), 0, a),
                  B(e, a, 2 * a)
                );
              }
              static fromDER(e) {
                let { r: t, s: n } = v.toSig((0, o.qj)("DER", e));
                return new M(t, n);
              }
              assertValidity() {}
              addRecoveryBit(e) {
                return new M(this.r, this.s, e);
              }
              recoverPublicKey(e) {
                let { r, s: a, recovery: i } = this,
                  s = D((0, o.qj)("msgHash", e));
                if (null == i || ![0, 1, 2, 3].includes(i))
                  throw Error("recovery id invalid");
                let c = 2 === i || 3 === i ? r + t.n : r;
                if (c >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                let u = (1 & i) == 0 ? "02" : "03",
                  l = C.fromHex(u + x(c, n.BYTES)),
                  d = O(c),
                  f = S(-s * d),
                  p = S(a * d),
                  h = C.BASE.multiplyAndAddUnsafe(l, f, p);
                if (!h) throw Error("point at infinify");
                return h.assertValidity(), h;
              }
              hasHighS() {
                return this.s > r >> A;
              }
              normalizeS() {
                return this.hasHighS()
                  ? new M(this.r, S(-this.s), this.recovery)
                  : this;
              }
              toDERRawBytes() {
                return (0, o.aT)(this.toDERHex());
              }
              toDERHex() {
                return v.hexFromSig(this);
              }
              toCompactRawBytes() {
                return (0, o.aT)(this.toCompactHex());
              }
              toCompactHex() {
                return x(this.r, a) + x(this.s, a);
              }
            }
            function N(e) {
              if ("bigint" == typeof e) return !1;
              if (e instanceof C) return !0;
              let r = (0, o.qj)("key", e).length,
                i = n.BYTES,
                s = i + 1;
              if (!t.allowedPrivateKeyLengths && a !== s)
                return r === s || r === 2 * i + 1;
            }
            let L =
                t.bits2int ||
                function (e) {
                  if (e.length > 8192) throw Error("input is too large");
                  let t = (0, o.Ph)(e),
                    n = 8 * e.length - i;
                  return n > 0 ? t >> BigInt(n) : t;
                },
              D =
                t.bits2int_modN ||
                function (e) {
                  return S(L(e));
                },
              R = (0, o.OG)(i);
            function $(e) {
              return (0, o.aK)("num < 2^" + i, e, k, R), (0, o.lq)(e, a);
            }
            let U = { lowS: t.lowS, prehash: !1 },
              z = { lowS: t.lowS, prehash: !1 };
            return (
              C.BASE._setWindowSize(8),
              {
                CURVE: t,
                getPublicKey: function (e, t = !0) {
                  return C.fromPrivateKey(e).toRawBytes(t);
                },
                getSharedSecret: function (e, t, n = !0) {
                  if (!0 === N(e)) throw Error("first arg must be private key");
                  if (!1 === N(t)) throw Error("second arg must be public key");
                  return C.fromHex(t).multiply(T(e)).toRawBytes(n);
                },
                sign: function (e, a, i = U) {
                  let { seed: s, k2sig: c } = (function (e, a, i = U) {
                    if (["recovered", "canonical"].some((e) => e in i))
                      throw Error("sign() legacy options not supported");
                    let { hash: s, randomBytes: c } = t,
                      { lowS: u, prehash: l, extraEntropy: d } = i;
                    null == u && (u = !0),
                      (e = (0, o.qj)("msgHash", e)),
                      g(i),
                      l && (e = (0, o.qj)("prehashed msgHash", s(e)));
                    let f = D(e),
                      p = T(a),
                      h = [$(p), $(f)];
                    if (null != d && !1 !== d) {
                      let e = !0 === d ? c(n.BYTES) : d;
                      h.push((0, o.qj)("extraEntropy", e));
                    }
                    return {
                      seed: (0, o.Id)(...h),
                      k2sig: function (e) {
                        var t;
                        let n = L(e);
                        if (!j(n)) return;
                        let a = O(n),
                          i = C.BASE.multiply(n).toAffine(),
                          s = S(i.x);
                        if (s === k) return;
                        let o = S(a * S(f + s * p));
                        if (o === k) return;
                        let c = (2 * (i.x !== s)) | Number(i.y & A),
                          l = o;
                        return (
                          u &&
                            o > r >> A &&
                            ((l = (t = o) > r >> A ? S(-t) : t), (c ^= 1)),
                          new M(s, l, c)
                        );
                      },
                    };
                  })(e, a, i);
                  return (0, o.fg)(
                    t.hash.outputLen,
                    t.nByteLength,
                    t.hmac
                  )(s, c);
                },
                verify: function (e, n, r, a = z) {
                  let i, s;
                  (n = (0, o.qj)("msgHash", n)),
                    (r = (0, o.qj)("publicKey", r));
                  let { lowS: c, prehash: u, format: l } = a;
                  if ((g(a), "strict" in a))
                    throw Error("options.strict was renamed to lowS");
                  if (void 0 !== l && "compact" !== l && "der" !== l)
                    throw Error("format must be compact or der");
                  let d = "string" == typeof e || (0, o.aY)(e),
                    f =
                      !d &&
                      !l &&
                      "object" == typeof e &&
                      null !== e &&
                      "bigint" == typeof e.r &&
                      "bigint" == typeof e.s;
                  if (!d && !f)
                    throw Error(
                      "invalid signature, expected Uint8Array, hex string or Signature instance"
                    );
                  try {
                    if ((f && (s = new M(e.r, e.s)), d)) {
                      try {
                        "compact" !== l && (s = M.fromDER(e));
                      } catch (e) {
                        if (!(e instanceof v.Err)) throw e;
                      }
                      s || "der" === l || (s = M.fromCompact(e));
                    }
                    i = C.fromHex(r);
                  } catch (e) {
                    return !1;
                  }
                  if (!s || (c && s.hasHighS())) return !1;
                  u && (n = t.hash(n));
                  let { r: p, s: h } = s,
                    m = D(n),
                    b = O(h),
                    y = S(m * b),
                    w = S(p * b),
                    x = C.BASE.multiplyAndAddUnsafe(i, y, w)?.toAffine();
                  return !!x && S(x.x) === p;
                },
                ProjectivePoint: C,
                Signature: M,
                utils: {
                  isValidPrivateKey(e) {
                    try {
                      return T(e), !0;
                    } catch (e) {
                      return !1;
                    }
                  },
                  normPrivateKeyToScalar: T,
                  randomPrivateKey: () => {
                    let e = (0, s.Tp)(t.n);
                    return (0, s.qy)(t.randomBytes(e), t.n);
                  },
                  precompute: (e = 8, t = C.BASE) => (
                    t._setWindowSize(e), t.multiply(BigInt(3)), t
                  ),
                },
              }
            );
          })({
            ...e,
            ...{
              hash: t,
              hmac: (e, ...n) => i(t, e, (0, r.Id)(...n)),
              randomBytes: r.po,
            },
          });
        return { ...n(t), create: n };
      }
    },
    31722: (e, t, n) => {
      "use strict";
      n.d(t, {
        A9: () => a,
        NO: () => o,
        Pj: () => c,
        dV: () => i,
        nx: () => u,
        zd: () => s,
      });
      var r = n(72800);
      r.C;
      class a extends r.C {
        constructor({ params: e }) {
          super("Failed to parse ABI parameters.", {
            details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiparameters-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParametersError",
            });
        }
      }
      class i extends r.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class s extends r.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class o extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class c extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class u extends r.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    35708: (e, t, n) => {
      "use strict";
      n.d(t, { Sl: () => a, X: () => s, eV: () => o, kK: () => i });
      var r = n(47220);
      function a(e, t) {
        if (r.Ej(e) > t) throw new r.u({ givenSize: r.Ej(e), maxSize: t });
      }
      function i(e, t) {
        if ("number" == typeof t && t > 0 && t > r.Ej(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: r.Ej(e) });
      }
      function s(e, t, n) {
        if ("number" == typeof t && "number" == typeof n && r.Ej(e) !== n - t)
          throw new r.ii({ offset: n, position: "end", size: r.Ej(e) });
      }
      function o(e, t = {}) {
        let { dir: n, size: a = 32 } = t;
        if (0 === a) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * a)
          throw new r.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: a,
            type: "Hex",
          });
        return `0x${i["right" === n ? "padEnd" : "padStart"](2 * a, "0")}`;
      }
    },
    36937: (e, t, n) => {
      "use strict";
      n.d(t, { iY: () => c });
      var r = n(72351),
        a = n(97201),
        i = n(45746),
        s = n(63962),
        o = n(9776);
      function c(e) {
        let t,
          { abi: n, args: c = [], name: u } = e,
          l = (0, a.q)(u, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, o.V)(e) === u
                : "event" === e.type && (0, s.h)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        a = n.type;
                      switch (a) {
                        case "address":
                          return (0, i.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === a && "components" in n)
                            return Object.values(n.components).every(
                              (n, a) =>
                                "object" === r && e(Object.values(t)[a], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              a
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let a in t) {
                      let s = t[a],
                        o = n[a];
                      if (
                        "tuple" === s.type &&
                        "tuple" === o.type &&
                        "components" in s &&
                        "components" in o
                      )
                        return e(s.components, o.components, r[a]);
                      let c = [s.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, i.P)(r[a], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new r.nM(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    37241: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => o });
      var r = n(72351),
        a = n(82784),
        i = n(54368);
      let s = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: n, bytecode: o } = e;
        if (!n || 0 === n.length) return o;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new r.YW({ docsPath: s });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new r.YF({ docsPath: s });
        let u = (0, i.h)(c.inputs, n);
        return (0, a.aP)([o, u]);
      }
    },
    41454: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => b, J: () => m });
      var r = n(59400),
        a = n(21214),
        i = n(59578),
        s = n(72351),
        o = n(82784),
        c = n(9776),
        u = n(54368),
        l = n(28984),
        d = n(36937);
      let f = "/docs/contract/encodeErrorResult";
      function p(e) {
        let { abi: t, errorName: n, args: r } = e,
          a = t[0];
        if (n) {
          let e = (0, d.iY)({ abi: t, args: r, name: n });
          if (!e) throw new s.yy(n, { docsPath: f });
          a = e;
        }
        if ("error" !== a.type) throw new s.yy(void 0, { docsPath: f });
        let i = (0, l.B)(a),
          p = (0, c.V)(i),
          h = "0x";
        if (r && r.length > 0) {
          if (!a.inputs) throw new s.ZP(a.name, { docsPath: f });
          h = (0, u.h)(a.inputs, r);
        }
        return (0, o.aP)([p, h]);
      }
      let h = "/docs/contract/encodeFunctionResult",
        m = "x-batch-gateway:true";
      async function b(e) {
        let { data: t, ccipRequest: n } = e,
          {
            args: [o],
          } = (0, i.J)({ abi: r.b2, data: t }),
          c = [],
          l = [];
        return (
          await Promise.all(
            o.map(async (e, t) => {
              try {
                (l[t] = e.urls.includes(m)
                  ? await b({ data: e.data, ccipRequest: n })
                  : await n(e)),
                  (c[t] = !1);
              } catch (e) {
                var i;
                (c[t] = !0),
                  (l[t] =
                    "HttpRequestError" === (i = e).name && i.status
                      ? p({
                          abi: r.b2,
                          errorName: "HttpError",
                          args: [i.status, i.shortMessage],
                        })
                      : p({
                          abi: [a.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in i ? i.shortMessage : i.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: n, result: r } = e,
              a = t[0];
            if (n) {
              let e = (0, d.iY)({ abi: t, name: n });
              if (!e) throw new s.Iz(n, { docsPath: h });
              a = e;
            }
            if ("function" !== a.type) throw new s.Iz(void 0, { docsPath: h });
            if (!a.outputs) throw new s.MR(a.name, { docsPath: h });
            let i = (() => {
              if (0 === a.outputs.length) return [];
              if (1 === a.outputs.length) return [r];
              if (Array.isArray(r)) return r;
              throw new s.dm(r);
            })();
            return (0, u.h)(a.outputs, i);
          })({ abi: r.b2, functionName: "query", result: [c, l] })
        );
      }
    },
    42471: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
          t.keccakP =
            void 0);
      let r = n(4823),
        a = n(26534),
        i = n(76641),
        s = [],
        o = [],
        c = [],
        u = BigInt(0),
        l = BigInt(1),
        d = BigInt(2),
        f = BigInt(7),
        p = BigInt(256),
        h = BigInt(113);
      for (let e = 0, t = l, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          s.push(2 * (5 * r + n)),
          o.push((((e + 1) * (e + 2)) / 2) % 64);
        let a = u;
        for (let e = 0; e < 7; e++)
          (t = ((t << l) ^ ((t >> f) * h)) % p) & d &&
            (a ^= l << ((l << BigInt(e)) - l));
        c.push(a);
      }
      let [m, b] = (0, a.split)(c, !0),
        y = (e, t, n) =>
          n > 32 ? (0, a.rotlBH)(e, t, n) : (0, a.rotlSH)(e, t, n),
        g = (e, t, n) =>
          n > 32 ? (0, a.rotlBL)(e, t, n) : (0, a.rotlSL)(e, t, n);
      function w(e, t = 24) {
        let n = new Uint32Array(10);
        for (let r = 24 - t; r < 24; r++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let r = (t + 8) % 10,
              a = (t + 2) % 10,
              i = n[a],
              s = n[a + 1],
              o = y(i, s, 1) ^ n[r],
              c = g(i, s, 1) ^ n[r + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= o), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            a = e[3];
          for (let n = 0; n < 24; n++) {
            let r = o[n],
              i = y(t, a, r),
              c = g(t, a, r),
              u = s[n];
            (t = e[u]), (a = e[u + 1]), (e[u] = i), (e[u + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let r = 0; r < 10; r++) n[r] = e[t + r];
            for (let r = 0; r < 10; r++)
              e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
          }
          (e[0] ^= m[r]), (e[1] ^= b[r]);
        }
        n.fill(0);
      }
      t.keccakP = w;
      class v extends i.Hash {
        constructor(e, t, n, a = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = a),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.number)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.u32)(this.state));
        }
        keccak() {
          i.isLE || (0, i.byteSwap32)(this.state32),
            w(this.state32, this.rounds),
            i.isLE || (0, i.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.exists)(this);
          let { blockLen: t, state: n } = this,
            a = (e = (0, i.toBytes)(e)).length;
          for (let r = 0; r < a; ) {
            let i = Math.min(t - this.pos, a - r);
            for (let t = 0; t < i; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.exists)(this, !1), (0, r.bytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, a = e.length; r < a; ) {
            this.posOut >= n && this.keccak();
            let i = Math.min(n - this.posOut, a - r);
            e.set(t.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.number)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.output)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: a,
            enableXOF: i,
          } = this;
          return (
            e || (e = new v(t, n, r, i, a)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = a),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = v;
      let x = (e, t, n) => (0, i.wrapConstructor)(() => new v(t, e, n));
      (t.sha3_224 = x(6, 144, 28)),
        (t.sha3_256 = x(6, 136, 32)),
        (t.sha3_384 = x(6, 104, 48)),
        (t.sha3_512 = x(6, 72, 64)),
        (t.keccak_224 = x(1, 144, 28)),
        (t.keccak_256 = x(1, 136, 32)),
        (t.keccak_384 = x(1, 104, 48)),
        (t.keccak_512 = x(1, 72, 64));
      let k = (e, t, n) =>
        (0, i.wrapXOFConstructorWithOpts)(
          (r = {}) => new v(t, e, void 0 === r.dkLen ? n : r.dkLen, !0)
        );
      (t.shake128 = k(31, 168, 16)), (t.shake256 = k(31, 136, 32));
    },
    42609: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    43393: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
      n.d(t, { As: () => r });
    },
    43647: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => m });
      var r = n(72351),
        a = n(64622),
        i = n(49917),
        s = n(21997),
        o = n(38930),
        c = n(74504),
        u = n(68562),
        l = n(76164),
        d = n(60067);
      function f(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let n = (0, d.My)(e, t);
        return (0, l.ME)(n, t);
      }
      var p = n(71309),
        h = n(54368);
      function m(e, t) {
        let n = "string" == typeof t ? (0, p.aT)(t) : t,
          m = (0, i.l)(n);
        if (0 === (0, s.E)(n) && e.length > 0) throw new r.O();
        if ((0, s.E)(t) && 32 > (0, s.E)(t))
          throw new r.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, s.E)(t),
          });
        let y = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          m.setPosition(y);
          let [i, s] = (function e(t, n, { staticPosition: i }) {
            let s = (0, h.k)(n.type);
            if (s) {
              let [r, a] = s;
              return (function (t, n, { length: r, staticPosition: a }) {
                if (!r) {
                  let r = a + f(t.readBytes(32)),
                    i = r + 32;
                  t.setPosition(r);
                  let s = f(t.readBytes(32)),
                    o = b(n),
                    c = 0,
                    u = [];
                  for (let r = 0; r < s; ++r) {
                    t.setPosition(i + (o ? 32 * r : c));
                    let [a, s] = e(t, n, { staticPosition: i });
                    (c += s), u.push(a);
                  }
                  return t.setPosition(a + 32), [u, 32];
                }
                if (b(n)) {
                  let i = a + f(t.readBytes(32)),
                    s = [];
                  for (let a = 0; a < r; ++a) {
                    t.setPosition(i + 32 * a);
                    let [r] = e(t, n, { staticPosition: i });
                    s.push(r);
                  }
                  return t.setPosition(a + 32), [s, 32];
                }
                let i = 0,
                  s = [];
                for (let o = 0; o < r; ++o) {
                  let [r, o] = e(t, n, { staticPosition: a + i });
                  (i += o), s.push(r);
                }
                return [s, i];
              })(t, { ...n, type: a }, { length: r, staticPosition: i });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let a =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  i = a ? [] : {},
                  s = 0;
                if (b(n)) {
                  let o = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(o + s);
                    let [u, l] = e(t, c, { staticPosition: o });
                    (s += l), (i[a ? r : c?.name] = u);
                  }
                  return t.setPosition(r + 32), [i, 32];
                }
                for (let o = 0; o < n.components.length; ++o) {
                  let c = n.components[o],
                    [u, l] = e(t, c, { staticPosition: r });
                  (i[a ? o : c?.name] = u), (s += l);
                }
                return [i, s];
              })(t, n, { staticPosition: i });
            if ("address" === n.type) {
              var p = t;
              let e = p.readBytes(32);
              return [(0, a.o)((0, d.My)((0, o.A1)(e, -20))), 32];
            }
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new u.xO(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, a] = t.type.split("bytes");
                if (!a) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let a = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.My)(a), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(a, 10), 32)), 32];
              })(t, n, { staticPosition: i });
            if (n.type.startsWith("uint") || n.type.startsWith("int")) {
              var m = t,
                y = n;
              let e = y.type.startsWith("int"),
                r = Number.parseInt(y.type.split("int")[1] || "256", 10),
                a = m.readBytes(32);
              return [
                r > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                      let n = (0, d.My)(e, t);
                      return (0, l.uU)(n, t);
                    })(a, { signed: e })
                  : f(a, { signed: e }),
                32,
              ];
            }
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let a = e.readBytes(r, 32),
                  i = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(n, { size: t.size }),
                        (n = (0, c.B)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.B)(a));
                return e.setPosition(t + 32), [i, 32];
              })(t, { staticPosition: i });
            throw new r.j(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, n, { staticPosition: 0 });
          (y += s), g.push(i);
        }
        return g;
      }
      function b(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(b);
        let n = (0, h.k)(e.type);
        return !!(n && b({ ...e, type: n[1] }));
      }
    },
    43878: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, s) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var o = new a(r, i || e, s),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function o() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            r,
            a = [];
          if (0 === this._eventsCount) return a;
          for (r in (e = this._events))
            t.call(e, r) && a.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? a.concat(Object.getOwnPropertySymbols(e))
            : a;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var a = 0, i = r.length, s = Array(i); a < i; a++)
            s[a] = r[a].fn;
          return s;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (o.prototype.emit = function (e, t, r, a, i, s) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            u,
            l = this._events[o],
            d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, r), !0;
              case 4:
                return l.fn.call(l.context, t, r, a), !0;
              case 5:
                return l.fn.call(l.context, t, r, a, i), !0;
              case 6:
                return l.fn.call(l.context, t, r, a, i, s), !0;
            }
            for (u = 1, c = Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var f,
              p = l.length;
            for (u = 0; u < p; u++)
              switch (
                (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, r);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, r, a);
                  break;
                default:
                  if (!c)
                    for (f = 1, c = Array(d - 1); f < d; f++)
                      c[f - 1] = arguments[f];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, r, a) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return s(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t ||
              (a && !o.once) ||
              (r && o.context !== r) ||
              s(this, i);
          else {
            for (var c = 0, u = [], l = o.length; c < l; c++)
              (o[c].fn !== t ||
                (a && !o[c].once) ||
                (r && o[c].context !== r)) &&
                u.push(o[c]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : s(this, i);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && s(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    47220: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dg: () => g,
        Ej: () => y,
        Fl: () => I,
        HT: () => u,
        Ho: () => h,
        M7: () => m,
        Ro: () => w,
        Ty: () => x,
        di: () => b,
        ii: () => P,
        oB: () => f,
        sH: () => p,
        tf: () => v,
        u: () => E,
        uK: () => d,
        xW: () => c,
        xb: () => l,
      });
      var r = n(68641),
        a = n(35708),
        i = n(43393);
      let s = new TextEncoder(),
        o = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function u(e) {
        return e instanceof Uint8Array
          ? d(e)
          : Array.isArray(e)
          ? d(new Uint8Array(e))
          : e;
      }
      function l(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size ? (a.Sl(n, t.size), h(n, t.size)) : n;
      }
      function d(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += o[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (a.Sl(r, t.size), m(r, t.size)) : r;
      }
      function f(e, t = {}) {
        let n,
          { signed: r, size: a } = t,
          i = BigInt(e);
        a
          ? (n = r
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let s = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && i > n) || i < s) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new x({
            max: n ? `${n}${t}` : void 0,
            min: `${s}${t}`,
            signed: r,
            size: a,
            value: `${e}${t}`,
          });
        }
        let o = (r && i < 0 ? BigInt.asUintN(8 * a, BigInt(i)) : i).toString(
            16
          ),
          c = `0x${o}`;
        return a ? h(c, a) : c;
      }
      function p(e, t = {}) {
        return d(s.encode(e), t);
      }
      function h(e, t) {
        return a.eV(e, { dir: "left", size: t });
      }
      function m(e, t) {
        return a.eV(e, { dir: "right", size: t });
      }
      function b(e, t, n, r = {}) {
        let { strict: i } = r;
        a.kK(e, t);
        let s = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return i && a.X(s, t, n), s;
      }
      function y(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function g(e, t = {}) {
        let { signed: n } = t;
        t.size && a.Sl(e, t.size);
        let r = BigInt(e);
        if (!n) return r;
        let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
        return r <= i >> 1n ? r : r - i - 1n;
      }
      function w(e, t = {}) {
        let { signed: n, size: r } = t;
        return n || r ? Number(g(e, t)) : Number(e);
      }
      function v(e, t = {}) {
        let { strict: n = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: n = !1 } = t;
              if (!e || "string" != typeof e) throw new k(e);
              if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new A(e);
            })(e, { strict: n }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class x extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: a }) {
          super(
            `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      r.C;
      class k extends r.C {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? i.As(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class A extends r.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      r.C;
      class E extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class P extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class I extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    47282: (e, t, n) => {
      "use strict";
      n.d(t, {
        Id: () => x,
        My: () => f,
        OG: () => I,
        Ph: () => b,
        Q5: () => _,
        aK: () => E,
        aT: () => m,
        aY: () => i,
        dJ: () => P,
        e8: () => o,
        fg: () => C,
        lX: () => y,
        lq: () => g,
        qj: () => v,
        r4: () => A,
        x: () => j,
        z: () => w,
        zW: () => c,
      });
      let r = BigInt(0),
        a = BigInt(1);
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function s(e) {
        if (!i(e)) throw Error("Uint8Array expected");
      }
      function o(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function c(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function u(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? r : BigInt("0x" + e);
      }
      let l =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        d = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function f(e) {
        if ((s(e), l)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += d[e[n]];
        return t;
      }
      let p = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= p._0 && e <= p._9
          ? e - p._0
          : e >= p.A && e <= p.F
          ? e - (p.A - 10)
          : e >= p.a && e <= p.f
          ? e - (p.a - 10)
          : void 0;
      }
      function m(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (l) return Uint8Array.fromHex(e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = h(e.charCodeAt(a)),
            i = h(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }
      function b(e) {
        return u(f(e));
      }
      function y(e) {
        return s(e), u(f(Uint8Array.from(e).reverse()));
      }
      function g(e, t) {
        return m(e.toString(16).padStart(2 * t, "0"));
      }
      function w(e, t) {
        return g(e, t).reverse();
      }
      function v(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = m(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (i(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let a = r.length;
        if ("number" == typeof n && a !== n)
          throw Error(e + " of length " + n + " expected, got " + a);
        return r;
      }
      function x(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          s(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let a = e[t];
          n.set(a, r), (r += a.length);
        }
        return n;
      }
      let k = (e) => "bigint" == typeof e && r <= e;
      function A(e, t, n) {
        return k(e) && k(t) && k(n) && t <= e && e < n;
      }
      function E(e, t, n, r) {
        if (!A(t, n, r))
          throw Error(
            "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
          );
      }
      function P(e) {
        let t;
        for (t = 0; e > r; e >>= a, t += 1);
        return t;
      }
      let I = (e) => (a << BigInt(e)) - a,
        S = (e) => new Uint8Array(e),
        O = (e) => Uint8Array.from(e);
      function C(e, t, n) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof n) throw Error("hmacFn must be a function");
        let r = S(e),
          a = S(e),
          i = 0,
          s = () => {
            r.fill(1), a.fill(0), (i = 0);
          },
          o = (...e) => n(a, r, ...e),
          c = (e = S(0)) => {
            (a = o(O([0]), e)),
              (r = o()),
              0 !== e.length && ((a = o(O([1]), e)), (r = o()));
          },
          u = () => {
            if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              n = [];
            for (; e < t; ) {
              let t = (r = o()).slice();
              n.push(t), (e += r.length);
            }
            return x(...n);
          };
        return (e, t) => {
          let n;
          for (s(), c(e); !(n = t(u())); ) c();
          return s(), n;
        };
      }
      let T = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || i(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function _(e, t, n = {}) {
        let r = (t, n, r) => {
          let a = T[n];
          if ("function" != typeof a) throw Error("invalid validator function");
          let i = e[t];
          if ((!r || void 0 !== i) && !a(i, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + n + ", got " + i
            );
        };
        for (let [e, n] of Object.entries(t)) r(e, n, !1);
        for (let [e, t] of Object.entries(n)) r(e, t, !0);
        return e;
      }
      function j(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let a = t.get(n);
          if (void 0 !== a) return a;
          let i = e(n, ...r);
          return t.set(n, i), i;
        };
      }
    },
    49615: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dv: () => E,
        FO: () => m,
        If: () => x,
        Ji: () => d,
        Rv: () => c,
        WL: () => h,
        Yo: () => g,
        ej: () => f,
        fC: () => P,
        iB: () => u,
        kz: () => s,
        l9: () => y,
        pc: () => i,
        sP: () => A,
        v7: () => I,
        v8: () => v,
      });
      var r = n(6207);
      let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function i(e) {
        return a.test(e);
      }
      function s(e) {
        return (0, r.Yv)(a, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return o.test(e);
      }
      function u(e) {
        return (0, r.Yv)(o, e);
      }
      let l =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return l.test(e);
      }
      function f(e) {
        return (0, r.Yv)(l, e);
      }
      let p =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function h(e) {
        return p.test(e);
      }
      function m(e) {
        return (0, r.Yv)(p, e);
      }
      let b =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function y(e) {
        return b.test(e);
      }
      function g(e) {
        return (0, r.Yv)(b, e);
      }
      let w = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function v(e) {
        return w.test(e);
      }
      function x(e) {
        return (0, r.Yv)(w, e);
      }
      let k = /^receive\(\) external payable$/;
      function A(e) {
        return k.test(e);
      }
      let E = new Set(["memory", "indexed", "storage", "calldata"]),
        P = new Set(["indexed"]),
        I = new Set(["calldata", "memory", "storage"]);
    },
    52193: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => c });
      var r = n(4962),
        a = n(82798),
        i = n(3677),
        s = n(97187),
        o = n(45746);
      function c(e) {
        let { account: t, maxFeePerGas: n, maxPriorityFeePerGas: c, to: u } = e,
          l = t ? (0, r.J)(t) : void 0;
        if (l && !(0, o.P)(l.address)) throw new i.M({ address: l.address });
        if (u && !(0, o.P)(u)) throw new i.M({ address: u });
        if (n && n > a.Ao) throw new s.BG({ maxFeePerGas: n });
        if (c && n && c > n)
          throw new s.lN({ maxFeePerGas: n, maxPriorityFeePerGas: c });
      }
    },
    53740: (e, t, n) => {
      "use strict";
      n.d(t, { UG: () => s, xo: () => a, zz: () => i });
      var r = n(72800);
      class a extends r.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class i extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class s extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    54368: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => h, k: () => b });
      var r = n(72351),
        a = n(3677),
        i = n(14055),
        s = n(68562),
        o = n(45746),
        c = n(82784),
        u = n(46141),
        l = n(21997),
        d = n(38930),
        f = n(60067),
        p = n(24182);
      function h(e, t) {
        if (e.length !== t.length)
          throw new r.YE({ expectedLength: e.length, givenLength: t.length });
        let n = m(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let h = 0; h < e.length; h++)
              n.push(
                (function e({ param: t, value: n }) {
                  let h = b(t.type);
                  if (h) {
                    let [a, i] = h;
                    return (function (t, { length: n, param: a }) {
                      let i = null === n;
                      if (!Array.isArray(t)) throw new r.dm(t);
                      if (!i && t.length !== n)
                        throw new r.Nc({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${a.type}[${n}]`,
                        });
                      let s = !1,
                        o = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: a, value: t[n] });
                        r.dynamic && (s = !0), o.push(r);
                      }
                      if (i || s) {
                        let e = m(o);
                        if (i) {
                          let t = (0, f.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: a, param: { ...t, type: i } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        a = [];
                      for (let i = 0; i < n.components.length; i++) {
                        let s = n.components[i],
                          o = Array.isArray(t) ? i : s.name,
                          c = e({ param: s, value: t[o] });
                        a.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? m(a)
                          : (0, c.xW)(a.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type) {
                    var y = n;
                    if (!(0, o.P)(y)) throw new a.M({ address: y });
                    return { dynamic: !1, encoded: (0, u.db)(y.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = n;
                    if ("boolean" != typeof g)
                      throw new i.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, u.db)((0, f.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , r = "256"] = p.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          a = t ? -r - 1n : 0n;
                        if (e > r || e < a)
                          throw new s.Ty({
                            max: r.toString(),
                            min: a.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, f.cK)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        a = (0, l.E)(e);
                      if (!n) {
                        let t = e;
                        return (
                          a % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, f.cK)(a, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (a !== Number.parseInt(n, 10))
                        throw new r.gH({
                          expectedSize: Number.parseInt(n, 10),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type) {
                    var w = n;
                    let e = (0, f.i3)(w),
                      t = Math.ceil((0, l.E)(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(
                        (0, u.db)((0, d.di)(e, 32 * n, (n + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, u.db)((0, f.cK)((0, l.E)(e), { size: 32 })),
                        ...r,
                      ]),
                    };
                  }
                  throw new r.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[h], value: t[h] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function m(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: a } = e[n];
          r ? (t += 32) : (t += (0, l.E)(a));
        }
        let n = [],
          r = [],
          a = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: s, encoded: o } = e[i];
          s
            ? (n.push((0, f.cK)(t + a, { size: 32 })),
              r.push(o),
              (a += (0, l.E)(o)))
            : n.push(o);
        }
        return (0, c.xW)([...n, ...r]);
      }
      function b(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    54810: (e, t, n) => {
      "use strict";
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let a of Object.keys(r))
              a in e && (n[a] = e[a]),
                r[a] &&
                  "object" == typeof r[a] &&
                  !Array.isArray(r[a]) &&
                  t(r[a]);
          })(t(e || {})),
          n
        );
      }
      n.d(t, { o: () => r });
    },
    59400: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ag: () => s,
        E5: () => d,
        Rm: () => u,
        SJ: () => c,
        UW: () => l,
        b2: () => a,
        oX: () => o,
        v2: () => r,
        xw: () => f,
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "addr", type: "address" }],
            name: "getEthBalance",
            outputs: [{ name: "balance", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        a = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        i = [
          {
            inputs: [{ name: "dns", type: "bytes" }],
            name: "DNSDecodingFailed",
            type: "error",
          },
          {
            inputs: [{ name: "ens", type: "string" }],
            name: "DNSEncodingFailed",
            type: "error",
          },
          { inputs: [], name: "EmptyAddress", type: "error" },
          {
            inputs: [
              { name: "status", type: "uint16" },
              { name: "message", type: "string" },
            ],
            name: "HttpError",
            type: "error",
          },
          { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
          {
            inputs: [{ name: "errorData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              { name: "name", type: "bytes" },
              { name: "resolver", type: "address" },
            ],
            name: "ResolverNotContract",
            type: "error",
          },
          {
            inputs: [{ name: "name", type: "bytes" }],
            name: "ResolverNotFound",
            type: "error",
          },
          {
            inputs: [
              { name: "primary", type: "string" },
              { name: "primaryAddress", type: "bytes" },
            ],
            name: "ReverseAddressMismatch",
            type: "error",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "selector", type: "bytes4" },
            ],
            name: "UnsupportedResolverProfile",
            type: "error",
          },
        ],
        s = [
          ...i,
          {
            name: "resolveWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        o = [
          ...i,
          {
            name: "reverseWithGateways",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "uint256", name: "coinType" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolver" },
              { type: "address", name: "reverseResolver" },
            ],
          },
        ],
        c = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        u = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        l = [
          {
            name: "isValidSignature",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            outputs: [{ name: "", type: "bytes4" }],
          },
        ],
        d = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        f = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    59578: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(72351),
        a = n(38930),
        i = n(9776),
        s = n(43647),
        o = n(28984);
      function c(e) {
        let { abi: t, data: n } = e,
          c = (0, a.di)(n, 0, 4),
          u = t.find(
            (e) => "function" === e.type && c === (0, i.V)((0, o.B)(e))
          );
        if (!u)
          throw new r.EB(c, { docsPath: "/docs/contract/decodeFunctionData" });
        return {
          functionName: u.name,
          args:
            "inputs" in u && u.inputs && u.inputs.length > 0
              ? (0, s.n)(u.inputs, (0, a.di)(n, 4))
              : void 0,
        };
      }
    },
    61804: (e, t, n) => {
      "use strict";
      n.d(t, { Hi: () => a, ft: () => i, uj: () => o });
      var r = n(14055);
      class a extends r.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class i extends r.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function s(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && ((r += "      state:\n"), (r += s(n.state))),
              n.stateDiff &&
                ((r += "      stateDiff:\n"), (r += s(n.stateDiff))),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    63434: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => a });
      var r = n(95316);
      function a({ blockNumber: e, chain: t, contract: n }) {
        let a = t?.contracts?.[n];
        if (!a) throw new r.rj({ chain: t, contract: { name: n } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new r.rj({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    63962: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => r });
      let r = n(82355).k;
    },
    68641: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        static setStaticOptions(e) {
          (r.prototype.docsOrigin = e.docsOrigin),
            (r.prototype.showVersion = e.showVersion),
            (r.prototype.version = e.version);
        }
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof r) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            a = (t.cause instanceof r && t.cause.docsPath) || t.docsPath,
            i = t.docsOrigin ?? r.prototype.docsOrigin,
            s = `${i}${a ?? ""}`,
            o = !!(t.version ?? r.prototype.showVersion),
            c = t.version ?? r.prototype.version;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || a || o
                ? [
                    "",
                    n ? `Details: ${n}` : void 0,
                    a ? `See: ${s}` : void 0,
                    o ? `Version: ${c}` : void 0,
                  ]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsOrigin", {
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
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "showVersion", {
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
            Object.defineProperty(this, "cause", {
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
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = s),
            (this.docsOrigin = i),
            (this.docsPath = a),
            (this.shortMessage = e),
            (this.showVersion = o),
            (this.version = c);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      Object.defineProperty(r, "defaultStaticOptions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          docsOrigin: "https://oxlib.sh",
          showVersion: !1,
          version: "ox@0.1.1",
        },
      }),
        r.setStaticOptions(r.defaultStaticOptions);
    },
    69389: (e, t, n) => {
      var r = n(93615).hp;
      let a = n(87927);
      function i(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        else if ("fixed" === e) return "fixed128x128";
        else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function s(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function u(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function l(e, t) {
        if ("address" === e) return l("uint160", u(t));
        if ("bool" === e) return l("uint8", +!!t);
        if ("string" === e) return l("bytes", new r(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (f in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(l(e, t[f]));
          if ("dynamic" === n) {
            var n,
              i,
              d,
              f,
              p,
              h = l("uint256", t.length);
            d.unshift(h);
          }
          return r.concat(d);
        } else if ("bytes" === e)
          return (
            (t = new r(t)),
            (d = r.concat([l("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = r.concat([d, a.zeros(32 - (t.length % 32))])),
            d
          );
        else if (e.startsWith("bytes")) {
          if ((n = s(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return a.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + r);
          if (i < 0) throw Error("Supplied uint is negative");
          return a.bufferBEFromBigInt(i, 32);
        } else if (e.startsWith("int")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + r);
          let o = a.twosFromBigInt(i, 256);
          return a.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (i = u(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return l("uint256", i * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), l("int256", u(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], l = 0; l < e.length; l++) {
          var d = i(e[l]),
            f = t[l];
          if ("bytes" === d) c.push(f);
          else if ("string" === d) c.push(new r(f, "utf8"));
          else if ("bool" === d) c.push(new r(f ? "01" : "00", "hex"));
          else if ("address" === d) c.push(a.setLength(f, 20));
          else if (d.startsWith("bytes")) {
            if ((n = s(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(a.setLengthRight(f, n));
          } else if (d.startsWith("uint")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(a.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = a.twosFromBigInt(o, n);
            c.push(a.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            a = [],
            s = 32 * e.length;
          for (var o in e) {
            var u = i(e[o]),
              d = l(u, t[o]);
            "string" === u || "bytes" === u || "dynamic" === c(u)
              ? (n.push(l("uint256", s)), a.push(d), (s += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(a));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return a.keccak(d(e, t));
        },
      };
    },
    70824: (e, t, n) => {
      "use strict";
      n.d(t, { Bv: () => i });
      var r = n(60067);
      let a = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function i(e, t) {
        let n = {};
        return (
          void 0 !== e.authorizationList &&
            (n.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.cK)(BigInt(e.s)) : e.s,
              chainId: (0, r.cK)(e.chainId),
              nonce: (0, r.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (n.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (n.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (n.blobs = e.blobs.map((e) => (0, r.My)(e)))
              : (n.blobs = e.blobs)),
          void 0 !== e.data && (n.data = e.data),
          e.account && (n.from = e.account.address),
          void 0 !== e.from && (n.from = e.from),
          void 0 !== e.gas && (n.gas = (0, r.cK)(e.gas)),
          void 0 !== e.gasPrice && (n.gasPrice = (0, r.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (n.maxFeePerBlobGas = (0, r.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (n.maxFeePerGas = (0, r.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas = (0, r.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (n.nonce = (0, r.cK)(e.nonce)),
          void 0 !== e.to && (n.to = e.to),
          void 0 !== e.type && (n.type = a[e.type]),
          void 0 !== e.value && (n.value = (0, r.cK)(e.value)),
          n
        );
      }
    },
    72351: (e, t, n) => {
      "use strict";
      n.d(t, {
        BI: () => A,
        EB: () => x,
        Iy: () => c,
        Iz: () => w,
        MR: () => v,
        M_: () => g,
        Nc: () => l,
        O: () => u,
        Wl: () => T,
        Wq: () => m,
        YE: () => f,
        YF: () => o,
        YW: () => s,
        ZP: () => p,
        _z: () => b,
        d_: () => C,
        dm: () => O,
        fo: () => E,
        gH: () => d,
        j: () => S,
        kE: () => y,
        l3: () => P,
        nK: () => I,
        nM: () => k,
        yy: () => h,
      });
      var r = n(28984),
        a = n(21997),
        i = n(14055);
      class s extends i.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends i.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      i.C;
      class c extends i.C {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends i.C {
        constructor({ cause: e } = {}) {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
            cause: e,
          });
        }
      }
      class l extends i.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends i.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, a.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends i.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class p extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class h extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends i.C {
        constructor(e, { docsPath: t, cause: n }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError", cause: n }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class b extends i.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class y extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class w extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class v extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class k extends i.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class A extends i.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class E extends i.C {
        constructor({ abiItem: e, data: t, params: n, size: a }) {
          super(
            `Data size of ${a} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${a} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
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
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = a);
        }
      }
      class P extends i.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class I extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class S extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class O extends i.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class C extends i.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      class T extends i.C {
        constructor(e) {
          super(`Type "${e}" is not supported for packed encoding.`, {
            name: "UnsupportedPackedAbiType",
          });
        }
      }
    },
    72800: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof r
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof r && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(a ? [`Docs: https://abitype.dev${a}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.2.3",
            ].join("\n")
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    75134: (e, t, n) => {
      "use strict";
      n.d(t, { Ez: () => s, LX: () => r, WN: () => a, fT: () => i });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        a =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        i =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        s =
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
    },
    76641: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes =
          t.wrapXOFConstructorWithOpts =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.checkOpts =
          t.Hash =
          t.concatBytes =
          t.toBytes =
          t.utf8ToBytes =
          t.asyncLoop =
          t.nextTick =
          t.hexToBytes =
          t.bytesToHex =
          t.byteSwap32 =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
          t.isBytes =
            void 0);
      let r = n(42609),
        a = n(4823);
      (t.isBytes = function (e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }),
        (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e)),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        });
      let i = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      t.bytesToHex = function (e) {
        (0, a.bytes)(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += i[e[n]];
        return t;
      };
      let s = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function o(e) {
        return e >= s._0 && e <= s._9
          ? e - s._0
          : e >= s._A && e <= s._F
          ? e - (s._A - 10)
          : e >= s._a && e <= s._f
          ? e - (s._a - 10)
          : void 0;
      }
      async function c(e, n, r) {
        let a = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let e = Date.now() - a;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (a += e));
        }
      }
      function u(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function l(e) {
        return "string" == typeof e && (e = u(e)), (0, a.bytes)(e), e;
      }
      (t.hexToBytes = function (e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t
          );
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = o(e.charCodeAt(a)),
            i = o(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }),
        (t.nextTick = async () => {}),
        (t.asyncLoop = c),
        (t.utf8ToBytes = u),
        (t.toBytes = l),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            (0, a.bytes)(r), (t += r.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, r = 0; t < e.length; t++) {
            let a = e[t];
            n.set(a, r), (r += a.length);
          }
          return n;
        });
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = d;
      let f = {}.toString;
      (t.checkOpts = function (e, t) {
        if (void 0 !== t && "[object Object]" !== f.call(t))
          throw Error("Options should be object or undefined");
        return Object.assign(e, t);
      }),
        (t.wrapConstructor = function (e) {
          let t = (t) => e().update(l(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (r.crypto && "function" == typeof r.crypto.getRandomValues)
            return r.crypto.getRandomValues(new Uint8Array(e));
          throw Error("crypto.getRandomValues must be defined");
        });
    },
    81080: (e, t, n) => {
      "use strict";
      n.d(t, { _o: () => y, Pj: () => m, uT: () => d, NV: () => b });
      var r = n(6207),
        a = n(53740),
        i = n(31722),
        s = n(9527),
        o = n(72800);
      class c extends o.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let u = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var l = n(49615);
      function d(e, t = {}) {
        if ((0, l.Ji)(e))
          return (function (e, t = {}) {
            let n = (0, l.ej)(e);
            if (!n) throw new s.s7({ signature: e, type: "function" });
            let r = b(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(
                m(r[e], { modifiers: l.v7, structs: t, type: "function" })
              );
            let o = [];
            if (n.returns) {
              let e = b(n.returns),
                r = e.length;
              for (let n = 0; n < r; n++)
                o.push(
                  m(e[n], { modifiers: l.v7, structs: t, type: "function" })
                );
            }
            return {
              name: n.name,
              type: "function",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: a,
              outputs: o,
            };
          })(e, t);
        if ((0, l.Rv)(e))
          return (function (e, t = {}) {
            let n = (0, l.iB)(e);
            if (!n) throw new s.s7({ signature: e, type: "event" });
            let r = b(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(m(r[e], { modifiers: l.fC, structs: t, type: "event" }));
            return { name: n.name, type: "event", inputs: a };
          })(e, t);
        if ((0, l.pc)(e))
          return (function (e, t = {}) {
            let n = (0, l.kz)(e);
            if (!n) throw new s.s7({ signature: e, type: "error" });
            let r = b(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(m(r[e], { structs: t, type: "error" }));
            return { name: n.name, type: "error", inputs: a };
          })(e, t);
        if ((0, l.l9)(e))
          return (function (e, t = {}) {
            let n = (0, l.Yo)(e);
            if (!n) throw new s.s7({ signature: e, type: "constructor" });
            let r = b(n.parameters),
              a = [],
              i = r.length;
            for (let e = 0; e < i; e++)
              a.push(m(r[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: a,
            };
          })(e, t);
        if ((0, l.v8)(e)) {
          var n = e;
          let t = (0, l.If)(n);
          if (!t) throw new s.s7({ signature: n, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, l.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new s.x8({ signature: e });
      }
      let f =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        h = /^u?int$/;
      function m(e, t) {
        var n, s;
        let o,
          c = (function (e, t, n) {
            let r = "";
            if (n)
              for (let e of Object.entries(n)) {
                if (!e) continue;
                let t = "";
                for (let n of e[1])
                  t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
                r += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${r}` : `${e}${r}`;
          })(e, t?.type, t?.structs);
        if (u.has(c)) return u.get(c);
        let d = r.wj.test(e),
          w = (0, r.Yv)(d ? p : f, e);
        if (!w) throw new i.dV({ param: e });
        if (
          w.name &&
          ("address" === (n = w.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            r.BD.test(n) ||
            r.Ge.test(n) ||
            g.test(n))
        )
          throw new i.zd({ param: e, name: w.name });
        let v = w.name ? { name: w.name } : {},
          x = "indexed" === w.modifier ? { indexed: !0 } : {},
          k = t?.structs ?? {},
          A = {};
        if (d) {
          o = "tuple";
          let e = b(w.type),
            t = [],
            n = e.length;
          for (let r = 0; r < n; r++) t.push(m(e[r], { structs: k }));
          A = { components: t };
        } else if (w.type in k) (o = "tuple"), (A = { components: k[w.type] });
        else if (h.test(w.type)) o = `${w.type}256`;
        else if ("address payable" === w.type) o = "address";
        else if (((o = w.type), t?.type !== "struct" && !y(o)))
          throw new a.UG({ type: o });
        if (w.modifier) {
          if (!t?.modifiers?.has?.(w.modifier))
            throw new i.NO({ param: e, type: t?.type, modifier: w.modifier });
          if (
            l.v7.has(w.modifier) &&
            ((s = o),
            !w.array && "bytes" !== s && "string" !== s && "tuple" !== s)
          )
            throw new i.Pj({ param: e, type: t?.type, modifier: w.modifier });
        }
        let E = { type: `${o}${w.array ?? ""}`, ...v, ...x, ...A };
        return u.set(c, E), E;
      }
      function b(e, t = [], n = "", r = 0) {
        let a = e.trim().length;
        for (let i = 0; i < a; i++) {
          let a = e[i],
            s = e.slice(i + 1);
          switch (a) {
            case ",":
              return 0 === r ? b(s, [...t, n.trim()]) : b(s, t, `${n}${a}`, r);
            case "(":
              return b(s, t, `${n}${a}`, r + 1);
            case ")":
              return b(s, t, `${n}${a}`, r - 1);
            default:
              return b(s, t, `${n}${a}`, r);
          }
        }
        if ("" === n) return t;
        if (0 !== r) throw new c({ current: n, depth: r });
        return t.push(n.trim()), t;
      }
      function y(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          r.BD.test(e) ||
          r.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    82355: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => o });
      var r = n(71309),
        a = n(25415),
        i = n(16331),
        s = n(14055);
      function o(e) {
        var t;
        return (
          (t = (function (e) {
            let t = !0,
              n = "",
              r = 0,
              a = "",
              i = !1;
            for (let s = 0; s < e.length; s++) {
              let o = e[s];
              if (
                (["(", ")", ","].includes(o) && (t = !0),
                "(" === o && r++,
                ")" === o && r--,
                t)
              ) {
                if (0 === r) {
                  if (" " === o && ["event", "function", ""].includes(a))
                    a = "";
                  else if (((a += o), ")" === o)) {
                    i = !0;
                    break;
                  }
                  continue;
                }
                if (" " === o) {
                  "," !== e[s - 1] &&
                    "," !== n &&
                    ",(" !== n &&
                    ((n = ""), (t = !1));
                  continue;
                }
                (a += o), (n += o);
              }
            }
            if (!i) throw new s.C("Unable to normalize signature.");
            return a;
          })("string" == typeof e ? e : (0, i.B)(e))),
          (0, a.S)((0, r.ZJ)(t))
        );
      }
    },
    87670: (e, t, n) => {
      "use strict";
      n.d(t, { secp256k1: () => p });
      var r = n(76364),
        a = n(31325),
        i = n(87897);
      let s = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        o = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        c = BigInt(0),
        u = BigInt(1),
        l = BigInt(2),
        d = (e, t) => (e + t / l) / t,
        f = (0, i.D0)(s, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              n = BigInt(6),
              r = BigInt(11),
              a = BigInt(22),
              o = BigInt(23),
              c = BigInt(44),
              u = BigInt(88),
              d = (e * e * e) % s,
              p = (d * d * e) % s,
              h = ((0, i.zH)(p, t, s) * p) % s,
              m = ((0, i.zH)(h, t, s) * p) % s,
              b = ((0, i.zH)(m, l, s) * d) % s,
              y = ((0, i.zH)(b, r, s) * b) % s,
              g = ((0, i.zH)(y, a, s) * y) % s,
              w = ((0, i.zH)(g, c, s) * g) % s,
              v = ((0, i.zH)(w, u, s) * w) % s,
              x = ((0, i.zH)(v, c, s) * g) % s,
              k = ((0, i.zH)(x, t, s) * p) % s,
              A = ((0, i.zH)(k, o, s) * y) % s,
              E = ((0, i.zH)(A, n, s) * d) % s,
              P = (0, i.zH)(E, l, s);
            if (!f.eql(f.sqr(P), e)) throw Error("Cannot find square root");
            return P;
          },
        }),
        p = (0, a.s)(
          {
            a: c,
            b: BigInt(7),
            Fp: f,
            n: o,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  n = -u * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  a = BigInt("0x100000000000000000000000000000000"),
                  s = d(t * e, o),
                  c = d(-n * e, o),
                  l = (0, i.zi)(e - s * t - c * r, o),
                  f = (0, i.zi)(-s * n - c * t, o),
                  p = l > a,
                  h = f > a;
                if ((p && (l = o - l), h && (f = o - f), l > a || f > a))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: p, k1: l, k2neg: h, k2: f };
              },
            },
          },
          r.sc
        );
    },
    87897: (e, t, n) => {
      "use strict";
      n.d(t, {
        B8: () => h,
        D0: () =>
          function e(t, n, r = !1, p = {}) {
            let y;
            if (t <= i)
              throw Error("invalid field: expected ORDER > 0, got " + t);
            let { nBitLength: g, nByteLength: k } = x(t, n);
            if (k > 2048)
              throw Error("invalid field: expected ORDER of <= 2048 bytes");
            let A = Object.freeze({
              ORDER: t,
              isLE: r,
              BITS: g,
              BYTES: k,
              MASK: (0, a.OG)(g),
              ZERO: i,
              ONE: s,
              create: (e) => f(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    "invalid field element: expected bigint, got " + typeof e
                  );
                return i <= e && e < t;
              },
              is0: (e) => e === i,
              isOdd: (e) => (e & s) === s,
              neg: (e) => f(-e, t),
              eql: (e, t) => e === t,
              sqr: (e) => f(e * e, t),
              add: (e, n) => f(e + n, t),
              sub: (e, n) => f(e - n, t),
              mul: (e, n) => f(e * n, t),
              pow: (e, t) =>
                (function (e, t, n) {
                  if (n < i)
                    throw Error("invalid exponent, negatives unsupported");
                  if (n === i) return e.ONE;
                  if (n === s) return t;
                  let r = e.ONE,
                    a = t;
                  for (; n > i; )
                    n & s && (r = e.mul(r, a)), (a = e.sqr(a)), (n >>= s);
                  return r;
                })(A, e, t),
              div: (e, n) => f(e * h(n, t), t),
              sqrN: (e) => e * e,
              addN: (e, t) => e + t,
              subN: (e, t) => e - t,
              mulN: (e, t) => e * t,
              inv: (e) => h(e, t),
              sqrt:
                p.sqrt ||
                ((n) => (
                  y ||
                    (y =
                      t % u === c
                        ? m
                        : t % d === l
                        ? b
                        : (function (t) {
                            if (t < BigInt(3))
                              throw Error(
                                "sqrt is not defined for small field"
                              );
                            let n = t - s,
                              r = 0;
                            for (; n % o === i; ) (n /= o), r++;
                            let a = o,
                              c = e(t);
                            for (; 1 === v(c, a); )
                              if (a++ > 1e3)
                                throw Error(
                                  "Cannot find square root: probably non-prime P"
                                );
                            if (1 === r) return m;
                            let u = c.pow(a, n),
                              l = (n + s) / o;
                            return function (e, t) {
                              if (e.is0(t)) return t;
                              if (1 !== v(e, t))
                                throw Error("Cannot find square root");
                              let a = r,
                                i = e.mul(e.ONE, u),
                                o = e.pow(t, n),
                                c = e.pow(t, l);
                              for (; !e.eql(o, e.ONE); ) {
                                if (e.is0(o)) return e.ZERO;
                                let t = 1,
                                  n = e.sqr(o);
                                for (; !e.eql(n, e.ONE); )
                                  if ((t++, (n = e.sqr(n)), t === a))
                                    throw Error("Cannot find square root");
                                let r = s << BigInt(a - t - 1),
                                  u = e.pow(i, r);
                                (a = t),
                                  (i = e.sqr(u)),
                                  (o = e.mul(o, i)),
                                  (c = e.mul(c, u));
                              }
                              return c;
                            };
                          })(t)),
                  y(A, n)
                )),
              toBytes: (e) => (r ? (0, a.z)(e, k) : (0, a.lq)(e, k)),
              fromBytes: (e) => {
                if (e.length !== k)
                  throw Error(
                    "Field.fromBytes: expected " + k + " bytes, got " + e.length
                  );
                return r ? (0, a.lX)(e) : (0, a.Ph)(e);
              },
              invertBatch: (e) => w(A, e),
              cmov: (e, t, n) => (n ? t : e),
            });
            return Object.freeze(A);
          },
        LH: () => x,
        Tp: () => A,
        jr: () => g,
        pS: () => w,
        qy: () => E,
        zH: () => p,
        zi: () => f,
      });
      var r = n(62172),
        a = n(47282);
      let i = BigInt(0),
        s = BigInt(1),
        o = BigInt(2),
        c = BigInt(3),
        u = BigInt(4),
        l = BigInt(5),
        d = BigInt(8);
      function f(e, t) {
        let n = e % t;
        return n >= i ? n : t + n;
      }
      function p(e, t, n) {
        let r = e;
        for (; t-- > i; ) (r *= r), (r %= n);
        return r;
      }
      function h(e, t) {
        if (e === i) throw Error("invert: expected non-zero number");
        if (t <= i) throw Error("invert: expected positive modulus, got " + t);
        let n = f(e, t),
          r = t,
          a = i,
          o = s,
          c = s,
          u = i;
        for (; n !== i; ) {
          let e = r / n,
            t = r % n,
            i = a - c * e,
            s = o - u * e;
          (r = n), (n = t), (a = c), (o = u), (c = i), (u = s);
        }
        if (r !== s) throw Error("invert: does not exist");
        return f(a, t);
      }
      function m(e, t) {
        let n = (e.ORDER + s) / u,
          r = e.pow(t, n);
        if (!e.eql(e.sqr(r), t)) throw Error("Cannot find square root");
        return r;
      }
      function b(e, t) {
        let n = (e.ORDER - l) / d,
          r = e.mul(t, o),
          a = e.pow(r, n),
          i = e.mul(t, a),
          s = e.mul(e.mul(i, o), a),
          c = e.mul(i, e.sub(s, e.ONE));
        if (!e.eql(e.sqr(c), t)) throw Error("Cannot find square root");
        return c;
      }
      let y = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function g(e) {
        let t = y.reduce((e, t) => ((e[t] = "function"), e), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, a.Q5)(e, t);
      }
      function w(e, t, n = !1) {
        let r = Array(t.length).fill(n ? e.ZERO : void 0),
          a = t.reduce(
            (t, n, a) => (e.is0(n) ? t : ((r[a] = t), e.mul(t, n))),
            e.ONE
          ),
          i = e.inv(a);
        return (
          t.reduceRight(
            (t, n, a) =>
              e.is0(n) ? t : ((r[a] = e.mul(t, r[a])), e.mul(t, n)),
            i
          ),
          r
        );
      }
      function v(e, t) {
        let n = (e.ORDER - s) / o,
          r = e.pow(t, n),
          a = e.eql(r, e.ONE),
          i = e.eql(r, e.ZERO),
          c = e.eql(r, e.neg(e.ONE));
        if (!a && !i && !c) throw Error("invalid Legendre symbol result");
        return a ? 1 : i ? 0 : -1;
      }
      function x(e, t) {
        void 0 !== t && (0, r.Fe)(t);
        let n = void 0 !== t ? t : e.toString(2).length,
          a = Math.ceil(n / 8);
        return { nBitLength: n, nByteLength: a };
      }
      function k(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function A(e) {
        let t = k(e);
        return t + Math.ceil(t / 2);
      }
      function E(e, t, n = !1) {
        let r = e.length,
          i = k(t),
          o = A(t);
        if (r < 16 || r < o || r > 1024)
          throw Error("expected " + o + "-1024 bytes of input, got " + r);
        let c = f(n ? (0, a.lX)(e) : (0, a.Ph)(e), t - s) + s;
        return n ? (0, a.z)(c, i) : (0, a.lq)(c, i);
      }
    },
    87927: (e, t, n) => {
      var r = n(93615).hp;
      let { keccak_256: a } = n(42471);
      function i(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function s(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let a = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; a.length < t; ) a.unshift(0);
        return r.from(a);
      }
      function o(e, t, n) {
        let r = i(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(r, t - e.length), r)
          : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e))
          if (Array.isArray(e)) e = r.from(e);
          else if ("string" == typeof e)
            e = l(e) ? r.from(u(d(e)), "hex") : r.from(e);
          else if ("number" == typeof e)
            e = new r(
              u(
                (function (e) {
                  let t = e.toString(16);
                  return `0x${t}`;
                })(e).slice(2)
              ),
              "hex"
            );
          else if (null == e) e = r.allocUnsafe(0);
          else if ("bigint" == typeof e) e = s(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error("invalid type");
        return e;
      }
      function u(e) {
        return e.length % 2 ? "0" + e : e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: i,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return r.from(a(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: s,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
    89456: (e, t, n) => {
      "use strict";
      n.d(t, { yH: () => u });
      var r = n(3677),
        a = n(81547),
        i = n(61804),
        s = n(45746),
        o = n(60067);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new a.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new a.NV({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...a } of e) {
          if (!(0, s.P)(n, { strict: !1 })) throw new r.M({ address: n });
          if (t[n]) throw new i.Hi({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: a, code: s } = e,
              u = {};
            if (
              (void 0 !== s && (u.code = s),
              void 0 !== t && (u.balance = (0, o.cK)(t)),
              void 0 !== n && (u.nonce = (0, o.cK)(n)),
              void 0 !== r && (u.state = c(r)),
              void 0 !== a)
            ) {
              if (u.state) throw new i.ft();
              u.stateDiff = c(a);
            }
            return u;
          })(a);
        }
        return t;
      }
    },
    90599: (e, t, n) => {
      var r = n(93615).hp;
      let a = n(87927),
        i = n(69389),
        s = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, s = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (s) {
              let u = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : a.keccak(this.encodeData(t, o, n, s)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", a.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = r.from(o, "utf8")),
                    ["bytes32", a.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    r = o.map((t) => u(e, n, t));
                  return [
                    "bytes32",
                    a.keccak(
                      i.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = u(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let i of n[e]) {
                let e = t[i.name];
                if (void 0 !== e)
                  if ("bytes" === i.type)
                    o.push("bytes32"), (e = a.keccak(e)), c.push(e);
                  else if ("string" === i.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = r.from(e, "utf8")),
                      (e = a.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[i.type])
                    o.push("bytes32"),
                      (e = a.keccak(this.encodeData(i.type, e, n, s))),
                      c.push(e);
                  else if (i.type.lastIndexOf("]") === i.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(i.type), c.push(e);
              }
            return i.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let a of (r = [e].concat(r.sort()))) {
              if (!t[a]) throw Error("No type definition specified: " + a);
              n +=
                a +
                "(" +
                t[a].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return a.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return a.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in s.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              i = [r.from("1901", "hex")];
            return (
              i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              a.keccak(r.concat(i))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: s,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? a.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              s = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return i.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                i.soliditySHA3(Array(e.length).fill("string"), s),
                i.soliditySHA3(r, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    96903: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => o });
      var r = n(72351),
        a = n(43647),
        i = n(36937);
      let s = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: n, functionName: o, data: c } = e,
          u = t[0];
        if (o) {
          let e = (0, i.iY)({ abi: t, args: n, name: o });
          if (!e) throw new r.Iz(o, { docsPath: s });
          u = e;
        }
        if ("function" !== u.type) throw new r.Iz(void 0, { docsPath: s });
        if (!u.outputs) throw new r.MR(u.name, { docsPath: s });
        let l = (0, a.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
  },
]);
