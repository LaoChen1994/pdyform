import * as yn from "vue";
import { defineComponent as P, openBlock as k, createElementBlock as D, normalizeClass as ot, unref as f, createBlock as B, computed as R, ref as O, shallowRef as Fn, watch as Z, getCurrentScope as zn, onScopeDispose as Wn, shallowReadonly as je, toRefs as Ae, withCtx as E, createVNode as N, renderSlot as M, getCurrentInstance as Ne, toRef as Bo, camelize as jn, mergeProps as z, withKeys as qn, withModifiers as be, Fragment as ie, createCommentVNode as Y, renderList as rt, resolveDynamicComponent as Ht, onMounted as de, createTextVNode as Le, useSlots as _o, onBeforeMount as To, toDisplayString as fe, normalizeProps as Ut, guardReactiveProps as Gt, Teleport as Kt, h as we, onBeforeUnmount as Hn, toHandlerKey as Io, nextTick as oe, onUnmounted as Xt, withDirectives as Mo, createElementVNode as ft, isRef as Vo, vModelSelect as No, watchEffect as le, inject as Un, provide as Gn, Comment as Lo, cloneVNode as Do, markRaw as Fo, onBeforeUpdate as zo, onUpdated as Wo, customRef as jo, reactive as Kn, normalizeStyle as Yt, watchPostEffect as qo, mergeDefaults as Ho, effectScope as Xn, readonly as Uo } from "vue";
import { normalizeFieldValue as Go, createFormRuntimeState as Ko, applyFieldChange as Xo, setSubmitting as Yo, runSubmitValidation as Jo } from "pdyform/core";
function Yn(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Yn(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Qo() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Yn(e)) && (o && (o += " "), o += t);
  return o;
}
const Jt = "-", Zo = (e) => {
  const t = tr(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Jt);
      return i[0] === "" && i.length !== 1 && i.shift(), Jn(i, t) || er(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const d = n[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    }
  };
}, Jn = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Jn(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const l = e.join(Jt);
  return (a = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : a.classGroupId;
}, bn = /^\[(.+)\]$/, er = (e) => {
  if (bn.test(e)) {
    const t = bn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tr = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return or(Object.entries(e.classGroups), n).forEach(([l, a]) => {
    Lt(a, o, l, t);
  }), o;
}, Lt = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const l = r === "" ? t : wn(t, r);
      l.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (nr(r)) {
        Lt(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([l, a]) => {
      Lt(a, wn(t, l), n, o);
    });
  });
}, wn = (e, t) => {
  let n = e;
  return t.split(Jt).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, nr = (e) => e.isThemeGetter, or = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([a, i]) => [t + a, i])) : l);
  return [n, r];
}) : e, rr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (l, a) => {
    n.set(l, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let a = n.get(l);
      if (a !== void 0)
        return a;
      if ((a = o.get(l)) !== void 0)
        return r(l, a), a;
    },
    set(l, a) {
      n.has(l) ? n.set(l, a) : r(l, a);
    }
  };
}, Qn = "!", lr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], l = t.length, a = (i) => {
    const d = [];
    let c = 0, s = 0, u;
    for (let h = 0; h < i.length; h++) {
      let y = i[h];
      if (c === 0) {
        if (y === r && (o || i.slice(h, h + l) === t)) {
          d.push(i.slice(s, h)), s = h + l;
          continue;
        }
        if (y === "/") {
          u = h;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const m = d.length === 0 ? i : i.substring(s), p = m.startsWith(Qn), v = p ? m.substring(1) : m, g = u && u > s ? u - s : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, ar = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, ir = (e) => ({
  cache: rr(e.cacheSize),
  parseClassName: lr(e),
  ...Zo(e)
}), sr = /\s+/, ur = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, l = [], a = e.trim().split(sr);
  let i = "";
  for (let d = a.length - 1; d >= 0; d -= 1) {
    const c = a[d], {
      modifiers: s,
      hasImportantModifier: u,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = n(c);
    let v = !!p, g = o(v ? m.substring(0, p) : m);
    if (!g) {
      if (!v) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(m), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const h = ar(s).join(":"), y = u ? h + Qn : h, w = y + g;
    if (l.includes(w))
      continue;
    l.push(w);
    const b = r(g, v);
    for (let C = 0; C < b.length; ++C) {
      const x = b[C];
      l.push(y + x);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function dr() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zn(t)) && (o && (o += " "), o += n);
  return o;
}
const Zn = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Zn(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cr(e, ...t) {
  let n, o, r, l = a;
  function a(d) {
    const c = t.reduce((s, u) => u(s), e());
    return n = ir(c), o = n.cache.get, r = n.cache.set, l = i, i(d);
  }
  function i(d) {
    const c = o(d);
    if (c)
      return c;
    const s = ur(d, n);
    return r(d, s), s;
  }
  return function() {
    return l(dr.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, eo = /^\[(?:([a-z-]+):)?(.+)\]$/i, fr = /^\d+\/\d+$/, pr = /* @__PURE__ */ new Set(["px", "full", "screen"]), mr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ge = (e) => Ge(e) || pr.has(e) || fr.test(e), Ee = (e) => Je(e, "length", Er), Ge = (e) => !!e && !Number.isNaN(Number(e)), $t = (e) => Je(e, "number", Ge), et = (e) => !!e && Number.isInteger(Number(e)), br = (e) => e.endsWith("%") && Ge(e.slice(0, -1)), I = (e) => eo.test(e), Re = (e) => mr.test(e), wr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xr = (e) => Je(e, wr, to), Cr = (e) => Je(e, "position", to), Ar = /* @__PURE__ */ new Set(["image", "url"]), kr = (e) => Je(e, Ar, Or), Sr = (e) => Je(e, "", Rr), tt = () => !0, Je = (e, t, n) => {
  const o = eo.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Er = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vr.test(e) && !hr.test(e)
), to = () => !1, Rr = (e) => gr.test(e), Or = (e) => yr.test(e), Pr = () => {
  const e = F("colors"), t = F("spacing"), n = F("blur"), o = F("brightness"), r = F("borderColor"), l = F("borderRadius"), a = F("borderSpacing"), i = F("borderWidth"), d = F("contrast"), c = F("grayscale"), s = F("hueRotate"), u = F("invert"), m = F("gap"), p = F("gradientColorStops"), v = F("gradientColorStopPositions"), g = F("inset"), h = F("margin"), y = F("opacity"), w = F("padding"), b = F("saturate"), C = F("scale"), x = F("sepia"), S = F("skew"), A = F("space"), T = F("translate"), V = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", I, t], _ = () => [I, t], H = () => ["", ge, Ee], L = () => ["auto", Ge, I], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", I], We = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Ge, I];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tt],
      spacing: [ge, Ee],
      blur: ["none", "", Re, I],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Re, I],
      borderSpacing: _(),
      borderWidth: H(),
      contrast: Q(),
      grayscale: X(),
      hueRotate: Q(),
      invert: X(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [br, Ee],
      inset: W(),
      margin: W(),
      opacity: Q(),
      padding: _(),
      saturate: Q(),
      scale: Q(),
      sepia: X(),
      skew: Q(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", I]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Re]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": We()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": We()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...J(), I]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", et, I]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", et, I]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", et, I]
        }, I]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [et, I]
        }, I]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...U()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...U(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...U(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [A]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [I, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [I, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Re]
        }, Re]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [I, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Re, Ee]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $t]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ge, $t]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ge, I]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", I]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ge, Ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ge, I]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", I]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...J(), Cr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [r]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ge, I]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ge, Ee]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: H()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ge, Ee]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Re, Sr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Re, I]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [s]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [x]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [s]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [x]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", I]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [et, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", I]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, Ee, $t]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, $r = /* @__PURE__ */ cr(Pr);
function me(...e) {
  return $r(Qo(e));
}
const Br = ["type", "value"], _r = /* @__PURE__ */ P({
  __name: "Input",
  props: {
    class: {},
    type: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, l) => (k(), D("input", {
      type: e.type,
      class: ot(f(me)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", n.class)),
      value: e.modelValue,
      onInput: l[0] || (l[0] = (a) => o("update:modelValue", a.target.value)),
      onBlur: l[1] || (l[1] = (a) => o("blur", a))
    }, null, 42, Br));
  }
}), He = /* @__PURE__ */ P({
  __name: "InputRenderer",
  props: {
    field: {},
    modelValue: {},
    fieldId: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = (l) => {
      o("update:modelValue", Go(n.field, l));
    };
    return (l, a) => (k(), B(_r, {
      id: e.fieldId,
      type: e.field.type,
      placeholder: e.field.placeholder,
      disabled: e.field.disabled,
      name: e.field.name,
      modelValue: e.modelValue ?? "",
      "onUpdate:modelValue": r
    }, null, 8, ["id", "type", "placeholder", "disabled", "name", "modelValue"]));
  }
}), Tr = ["value"], Ir = /* @__PURE__ */ P({
  __name: "Textarea",
  props: {
    class: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, l) => (k(), D("textarea", {
      class: ot(f(me)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", n.class)),
      value: e.modelValue,
      onInput: l[0] || (l[0] = (a) => o("update:modelValue", a.target.value)),
      onBlur: l[1] || (l[1] = (a) => o("blur", a))
    }, null, 42, Tr));
  }
}), Mr = /* @__PURE__ */ P({
  __name: "TextareaRenderer",
  props: {
    field: {},
    modelValue: {},
    fieldId: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (k(), B(Ir, {
      id: e.fieldId,
      placeholder: e.field.placeholder,
      disabled: e.field.disabled,
      name: e.field.name,
      modelValue: e.modelValue ?? "",
      "onUpdate:modelValue": r[0] || (r[0] = (l) => n("update:modelValue", l))
    }, null, 8, ["id", "placeholder", "disabled", "name", "modelValue"]));
  }
}), Vr = ["top", "right", "bottom", "left"], Pe = Math.min, ee = Math.max, pt = Math.round, it = Math.floor, pe = (e) => ({
  x: e,
  y: e
}), Nr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dt(e, t, n) {
  return ee(e, Pe(t, n));
}
function xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function Qt(e) {
  return e === "x" ? "y" : "x";
}
function Zt(e) {
  return e === "y" ? "height" : "width";
}
function ce(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function en(e) {
  return Qt(ce(e));
}
function Lr(e, t, n) {
  n === void 0 && (n = !1);
  const o = Qe(e), r = en(e), l = Zt(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (a = mt(a)), [a, mt(a)];
}
function Dr(e) {
  const t = mt(e);
  return [Ft(e), t, Ft(t)];
}
function Ft(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const xn = ["left", "right"], Cn = ["right", "left"], Fr = ["top", "bottom"], zr = ["bottom", "top"];
function Wr(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cn : xn : t ? xn : Cn;
    case "left":
    case "right":
      return t ? Fr : zr;
    default:
      return [];
  }
}
function jr(e, t, n, o) {
  const r = Qe(e);
  let l = Wr(Ce(e), n === "start", o);
  return r && (l = l.map((a) => a + "-" + r), t && (l = l.concat(l.map(Ft)))), l;
}
function mt(e) {
  const t = Ce(e);
  return Nr[t] + e.slice(t.length);
}
function qr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function no(e) {
  return typeof e != "number" ? qr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function An(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const l = ce(t), a = en(t), i = Zt(a), d = Ce(t), c = l === "y", s = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, m = o[i] / 2 - r[i] / 2;
  let p;
  switch (d) {
    case "top":
      p = {
        x: s,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: s,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qe(t)) {
    case "start":
      p[a] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      p[a] += m * (n && c ? -1 : 1);
      break;
  }
  return p;
}
async function Hr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: l,
    rects: a,
    elements: i,
    strategy: d
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = xe(t, e), v = no(p), h = i[m ? u === "floating" ? "reference" : "floating" : u], y = vt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(h))) == null || n ? h : h.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: s,
    strategy: d
  })), w = u === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), C = await (l.isElement == null ? void 0 : l.isElement(b)) ? await (l.getScale == null ? void 0 : l.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = vt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: b,
    strategy: d
  }) : w);
  return {
    top: (y.top - x.top + v.top) / C.y,
    bottom: (x.bottom - y.bottom + v.bottom) / C.y,
    left: (y.left - x.left + v.left) / C.x,
    right: (x.right - y.right + v.right) / C.x
  };
}
const Ur = 50, Gr = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: a
  } = n, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: Hr
  }, d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: s,
    y: u
  } = An(c, o, d), m = o, p = 0;
  const v = {};
  for (let g = 0; g < l.length; g++) {
    const h = l[g];
    if (!h)
      continue;
    const {
      name: y,
      fn: w
    } = h, {
      x: b,
      y: C,
      data: x,
      reset: S
    } = await w({
      x: s,
      y: u,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: v,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    s = b ?? s, u = C ?? u, v[y] = {
      ...v[y],
      ...x
    }, S && p < Ur && (p++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (c = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : S.rects), {
      x: s,
      y: u
    } = An(c, m, d)), g = -1);
  }
  return {
    x: s,
    y: u,
    placement: m,
    strategy: r,
    middlewareData: v
  };
}, Kr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: l,
      platform: a,
      elements: i,
      middlewareData: d
    } = t, {
      element: c,
      padding: s = 0
    } = xe(e, t) || {};
    if (c == null)
      return {};
    const u = no(s), m = {
      x: n,
      y: o
    }, p = en(r), v = Zt(p), g = await a.getDimensions(c), h = p === "y", y = h ? "top" : "left", w = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", C = l.reference[v] + l.reference[p] - m[p] - l.floating[v], x = m[p] - l.reference[p], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let A = S ? S[b] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(S))) && (A = i.floating[b] || l.floating[v]);
    const T = C / 2 - x / 2, V = A / 2 - g[v] / 2 - 1, $ = Pe(u[y], V), W = Pe(u[w], V), _ = $, H = A - g[v] - W, L = A / 2 - g[v] / 2 + T, J = Dt(_, L, H), j = !d.arrow && Qe(r) != null && L !== J && l.reference[v] / 2 - (L < _ ? $ : W) - g[v] / 2 < 0, K = j ? L < _ ? L - _ : L - H : 0;
    return {
      [p]: m[p] + K,
      data: {
        [p]: J,
        centerOffset: L - J - K,
        ...j && {
          alignmentOffset: K
        }
      },
      reset: j
    };
  }
}), Xr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: l,
        rects: a,
        initialPlacement: i,
        platform: d,
        elements: c
      } = t, {
        mainAxis: s = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...h
      } = xe(e, t);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const y = Ce(r), w = ce(i), b = Ce(i) === i, C = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), x = m || (b || !g ? [mt(i)] : Dr(i)), S = v !== "none";
      !m && S && x.push(...jr(i, g, v, C));
      const A = [i, ...x], T = await d.detectOverflow(t, h), V = [];
      let $ = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (s && V.push(T[y]), u) {
        const L = Lr(r, a, C);
        V.push(T[L[0]], T[L[1]]);
      }
      if ($ = [...$, {
        placement: r,
        overflows: V
      }], !V.every((L) => L <= 0)) {
        var W, _;
        const L = (((W = l.flip) == null ? void 0 : W.index) || 0) + 1, J = A[L];
        if (J && (!(u === "alignment" ? w !== ce(J) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((U) => ce(U.placement) === w ? U.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: $
            },
            reset: {
              placement: J
            }
          };
        let j = (_ = $.filter((K) => K.overflows[0] <= 0).sort((K, U) => K.overflows[1] - U.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!j)
          switch (p) {
            case "bestFit": {
              var H;
              const K = (H = $.filter((U) => {
                if (S) {
                  const X = ce(U.placement);
                  return X === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((X) => X > 0).reduce((X, We) => X + We, 0)]).sort((U, X) => U[1] - X[1])[0]) == null ? void 0 : H[0];
              K && (j = K);
              break;
            }
            case "initialPlacement":
              j = i;
              break;
          }
        if (r !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function kn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sn(e) {
  return Vr.some((t) => e[t] >= 0);
}
const Yr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...l
      } = xe(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await o.detectOverflow(t, {
            ...l,
            elementContext: "reference"
          }), i = kn(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Sn(i)
            }
          };
        }
        case "escaped": {
          const a = await o.detectOverflow(t, {
            ...l,
            altBoundary: !0
          }), i = kn(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Sn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, oo = /* @__PURE__ */ new Set(["left", "top"]);
async function Jr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, l = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Ce(n), i = Qe(n), d = ce(n) === "y", c = oo.has(a) ? -1 : 1, s = l && d ? -1 : 1, u = xe(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: v
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof v == "number" && (p = i === "end" ? v * -1 : v), d ? {
    x: p * s,
    y: m * c
  } : {
    x: m * c,
    y: p * s
  };
}
const Qr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: l,
        placement: a,
        middlewareData: i
      } = t, d = await Jr(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + d.x,
        y: l + d.y,
        data: {
          ...d,
          placement: a
        }
      };
    }
  };
}, Zr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: l
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: d = {
          fn: (y) => {
            let {
              x: w,
              y: b
            } = y;
            return {
              x: w,
              y: b
            };
          }
        },
        ...c
      } = xe(e, t), s = {
        x: n,
        y: o
      }, u = await l.detectOverflow(t, c), m = ce(Ce(r)), p = Qt(m);
      let v = s[p], g = s[m];
      if (a) {
        const y = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = v + u[y], C = v - u[w];
        v = Dt(b, v, C);
      }
      if (i) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = g + u[y], C = g - u[w];
        g = Dt(b, g, C);
      }
      const h = d.fn({
        ...t,
        [p]: v,
        [m]: g
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [p]: a,
            [m]: i
          }
        }
      };
    }
  };
}, el = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: l,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = xe(e, t), s = {
        x: n,
        y: o
      }, u = ce(r), m = Qt(u);
      let p = s[m], v = s[u];
      const g = xe(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (d) {
        const b = m === "y" ? "height" : "width", C = l.reference[m] - l.floating[b] + h.mainAxis, x = l.reference[m] + l.reference[b] - h.mainAxis;
        p < C ? p = C : p > x && (p = x);
      }
      if (c) {
        var y, w;
        const b = m === "y" ? "width" : "height", C = oo.has(Ce(r)), x = l.reference[u] - l.floating[b] + (C && ((y = a.offset) == null ? void 0 : y[u]) || 0) + (C ? 0 : h.crossAxis), S = l.reference[u] + l.reference[b] + (C ? 0 : ((w = a.offset) == null ? void 0 : w[u]) || 0) - (C ? h.crossAxis : 0);
        v < x ? v = x : v > S && (v = S);
      }
      return {
        [m]: p,
        [u]: v
      };
    }
  };
}, tl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: l,
        platform: a,
        elements: i
      } = t, {
        apply: d = () => {
        },
        ...c
      } = xe(e, t), s = await a.detectOverflow(t, c), u = Ce(r), m = Qe(r), p = ce(r) === "y", {
        width: v,
        height: g
      } = l.floating;
      let h, y;
      u === "top" || u === "bottom" ? (h = u, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = u, h = m === "end" ? "top" : "bottom");
      const w = g - s.top - s.bottom, b = v - s.left - s.right, C = Pe(g - s[h], w), x = Pe(v - s[y], b), S = !t.middlewareData.shift;
      let A = C, T = x;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = b), (o = t.middlewareData.shift) != null && o.enabled.y && (A = w), S && !m) {
        const $ = ee(s.left, 0), W = ee(s.right, 0), _ = ee(s.top, 0), H = ee(s.bottom, 0);
        p ? T = v - 2 * ($ !== 0 || W !== 0 ? $ + W : ee(s.left, s.right)) : A = g - 2 * (_ !== 0 || H !== 0 ? _ + H : ee(s.top, s.bottom));
      }
      await d({
        ...t,
        availableWidth: T,
        availableHeight: A
      });
      const V = await a.getDimensions(i.floating);
      return v !== V.width || g !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yt() {
  return typeof window < "u";
}
function De(e) {
  return tn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (tn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function tn(e) {
  return yt() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function se(e) {
  return yt() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ke(e) {
  return yt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function En(e) {
  return !yt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function lt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function nl(e) {
  return /^(table|td|th)$/.test(De(e));
}
function bt(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const ol = /transform|translate|scale|rotate|perspective|filter/, rl = /paint|layout|strict|content/, Ie = (e) => !!e && e !== "none";
let Bt;
function nn(e) {
  const t = se(e) ? ue(e) : e;
  return Ie(t.transform) || Ie(t.translate) || Ie(t.scale) || Ie(t.rotate) || Ie(t.perspective) || !on() && (Ie(t.backdropFilter) || Ie(t.filter)) || ol.test(t.willChange || "") || rl.test(t.contain || "");
}
function ll(e) {
  let t = $e(e);
  for (; ke(t) && !Xe(t); ) {
    if (nn(t))
      return t;
    if (bt(t))
      return null;
    t = $e(t);
  }
  return null;
}
function on() {
  return Bt == null && (Bt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Bt;
}
function Xe(e) {
  return /^(html|body|#document)$/.test(De(e));
}
function ue(e) {
  return te(e).getComputedStyle(e);
}
function wt(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $e(e) {
  if (De(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    En(e) && e.host || // Fallback.
    ve(e)
  );
  return En(t) ? t.host : t;
}
function ro(e) {
  const t = $e(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ke(t) && lt(t) ? t : ro(t);
}
function nt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ro(e), l = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = te(r);
  if (l) {
    const i = zt(a);
    return t.concat(a, a.visualViewport || [], lt(r) ? r : [], i && n ? nt(i) : []);
  } else
    return t.concat(r, nt(r, [], n));
}
function zt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lo(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ke(e), l = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = pt(n) !== l || pt(o) !== a;
  return i && (n = l, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function rn(e) {
  return se(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = rn(e);
  if (!ke(t))
    return pe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: l
  } = lo(t);
  let a = (l ? pt(n.width) : n.width) / o, i = (l ? pt(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const al = /* @__PURE__ */ pe(0);
function ao(e) {
  const t = te(e);
  return !on() || !t.visualViewport ? al : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function il(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Ve(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), l = rn(e);
  let a = pe(1);
  t && (o ? se(o) && (a = Ke(o)) : a = Ke(e));
  const i = il(l, n, o) ? ao(l) : pe(0);
  let d = (r.left + i.x) / a.x, c = (r.top + i.y) / a.y, s = r.width / a.x, u = r.height / a.y;
  if (l) {
    const m = te(l), p = o && se(o) ? te(o) : o;
    let v = m, g = zt(v);
    for (; g && o && p !== v; ) {
      const h = Ke(g), y = g.getBoundingClientRect(), w = ue(g), b = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * h.x, C = y.top + (g.clientTop + parseFloat(w.paddingTop)) * h.y;
      d *= h.x, c *= h.y, s *= h.x, u *= h.y, d += b, c += C, v = te(g), g = zt(v);
    }
  }
  return vt({
    width: s,
    height: u,
    x: d,
    y: c
  });
}
function xt(e, t) {
  const n = wt(e).scrollLeft;
  return t ? t.left + n : Ve(ve(e)).left + n;
}
function io(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - xt(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function sl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const l = r === "fixed", a = ve(o), i = t ? bt(t.floating) : !1;
  if (o === a || i && l)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = pe(1);
  const s = pe(0), u = ke(o);
  if ((u || !u && !l) && ((De(o) !== "body" || lt(a)) && (d = wt(o)), u)) {
    const p = Ve(o);
    c = Ke(o), s.x = p.x + o.clientLeft, s.y = p.y + o.clientTop;
  }
  const m = a && !u && !l ? io(a, d) : pe(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - d.scrollLeft * c.x + s.x + m.x,
    y: n.y * c.y - d.scrollTop * c.y + s.y + m.y
  };
}
function ul(e) {
  return Array.from(e.getClientRects());
}
function dl(e) {
  const t = ve(e), n = wt(e), o = e.ownerDocument.body, r = ee(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), l = ee(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + xt(e);
  const i = -n.scrollTop;
  return ue(o).direction === "rtl" && (a += ee(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: l,
    x: a,
    y: i
  };
}
const Rn = 25;
function cl(e, t) {
  const n = te(e), o = ve(e), r = n.visualViewport;
  let l = o.clientWidth, a = o.clientHeight, i = 0, d = 0;
  if (r) {
    l = r.width, a = r.height;
    const s = on();
    (!s || s && t === "fixed") && (i = r.offsetLeft, d = r.offsetTop);
  }
  const c = xt(o);
  if (c <= 0) {
    const s = o.ownerDocument, u = s.body, m = getComputedStyle(u), p = s.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, v = Math.abs(o.clientWidth - u.clientWidth - p);
    v <= Rn && (l -= v);
  } else c <= Rn && (l += c);
  return {
    width: l,
    height: a,
    x: i,
    y: d
  };
}
function fl(e, t) {
  const n = Ve(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, l = ke(e) ? Ke(e) : pe(1), a = e.clientWidth * l.x, i = e.clientHeight * l.y, d = r * l.x, c = o * l.y;
  return {
    width: a,
    height: i,
    x: d,
    y: c
  };
}
function On(e, t, n) {
  let o;
  if (t === "viewport")
    o = cl(e, n);
  else if (t === "document")
    o = dl(ve(e));
  else if (se(t))
    o = fl(t, n);
  else {
    const r = ao(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return vt(o);
}
function so(e, t) {
  const n = $e(e);
  return n === t || !se(n) || Xe(n) ? !1 : ue(n).position === "fixed" || so(n, t);
}
function pl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = nt(e, [], !1).filter((i) => se(i) && De(i) !== "body"), r = null;
  const l = ue(e).position === "fixed";
  let a = l ? $e(e) : e;
  for (; se(a) && !Xe(a); ) {
    const i = ue(a), d = nn(a);
    !d && i.position === "fixed" && (r = null), (l ? !d && !r : !d && i.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || lt(a) && !d && so(e, a)) ? o = o.filter((s) => s !== a) : r = i, a = $e(a);
  }
  return t.set(e, o), o;
}
function ml(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? bt(t) ? [] : pl(t, this._c) : [].concat(n), o], i = On(t, a[0], r);
  let d = i.top, c = i.right, s = i.bottom, u = i.left;
  for (let m = 1; m < a.length; m++) {
    const p = On(t, a[m], r);
    d = ee(p.top, d), c = Pe(p.right, c), s = Pe(p.bottom, s), u = ee(p.left, u);
  }
  return {
    width: c - u,
    height: s - d,
    x: u,
    y: d
  };
}
function vl(e) {
  const {
    width: t,
    height: n
  } = lo(e);
  return {
    width: t,
    height: n
  };
}
function hl(e, t, n) {
  const o = ke(t), r = ve(t), l = n === "fixed", a = Ve(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = pe(0);
  function c() {
    d.x = xt(r);
  }
  if (o || !o && !l)
    if ((De(t) !== "body" || lt(r)) && (i = wt(t)), o) {
      const p = Ve(t, !0, l, t);
      d.x = p.x + t.clientLeft, d.y = p.y + t.clientTop;
    } else r && c();
  l && !o && r && c();
  const s = r && !o && !l ? io(r, i) : pe(0), u = a.left + i.scrollLeft - d.x - s.x, m = a.top + i.scrollTop - d.y - s.y;
  return {
    x: u,
    y: m,
    width: a.width,
    height: a.height
  };
}
function _t(e) {
  return ue(e).position === "static";
}
function Pn(e, t) {
  if (!ke(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ve(e) === n && (n = n.ownerDocument.body), n;
}
function uo(e, t) {
  const n = te(e);
  if (bt(e))
    return n;
  if (!ke(e)) {
    let r = $e(e);
    for (; r && !Xe(r); ) {
      if (se(r) && !_t(r))
        return r;
      r = $e(r);
    }
    return n;
  }
  let o = Pn(e, t);
  for (; o && nl(o) && _t(o); )
    o = Pn(o, t);
  return o && Xe(o) && _t(o) && !nn(o) ? n : o || ll(e) || n;
}
const gl = async function(e) {
  const t = this.getOffsetParent || uo, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: hl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function yl(e) {
  return ue(e).direction === "rtl";
}
const bl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sl,
  getDocumentElement: ve,
  getClippingRect: ml,
  getOffsetParent: uo,
  getElementRects: gl,
  getClientRects: ul,
  getDimensions: vl,
  getScale: Ke,
  isElement: se,
  isRTL: yl
};
function co(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wl(e, t) {
  let n = null, o;
  const r = ve(e);
  function l() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), l();
    const c = e.getBoundingClientRect(), {
      left: s,
      top: u,
      width: m,
      height: p
    } = c;
    if (i || t(), !m || !p)
      return;
    const v = it(u), g = it(r.clientWidth - (s + m)), h = it(r.clientHeight - (u + p)), y = it(s), b = {
      rootMargin: -v + "px " + -g + "px " + -h + "px " + -y + "px",
      threshold: ee(0, Pe(1, d)) || 1
    };
    let C = !0;
    function x(S) {
      const A = S[0].intersectionRatio;
      if (A !== d) {
        if (!C)
          return a();
        A ? a(!1, A) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !co(c, e.getBoundingClientRect()) && a(), C = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, b);
    }
    n.observe(e);
  }
  return a(!0), l;
}
function xl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: l = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = o, c = rn(e), s = r || l ? [...c ? nt(c) : [], ...t ? nt(t) : []] : [];
  s.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), l && y.addEventListener("resize", n);
  });
  const u = c && i ? wl(c, n) : null;
  let m = -1, p = null;
  a && (p = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && p && t && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(t);
    })), n();
  }), c && !d && p.observe(c), t && p.observe(t));
  let v, g = d ? Ve(e) : null;
  d && h();
  function h() {
    const y = Ve(e);
    g && !co(g, y) && n(), g = y, v = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    s.forEach((w) => {
      r && w.removeEventListener("scroll", n), l && w.removeEventListener("resize", n);
    }), u == null || u(), (y = p) == null || y.disconnect(), p = null, d && cancelAnimationFrame(v);
  };
}
const Cl = Qr, Al = Zr, $n = Xr, kl = tl, Sl = Yr, El = Kr, Rl = el, Ol = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: bl,
    ...n
  }, l = {
    ...r.platform,
    _c: o
  };
  return Gr(e, t, {
    ...r,
    platform: l
  });
};
function Pl(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Wt(e) {
  if (Pl(e)) {
    const t = e.$el;
    return tn(t) && De(t) === "#comment" ? null : t;
  }
  return e;
}
function Ue(e) {
  return typeof e == "function" ? e() : f(e);
}
function $l(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Wt(Ue(e.element));
      return n == null ? {} : El({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function fo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(e, t) {
  const n = fo(e);
  return Math.round(t * n) / n;
}
function Bl(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = R(() => {
    var A;
    return (A = Ue(n.open)) != null ? A : !0;
  }), l = R(() => Ue(n.middleware)), a = R(() => {
    var A;
    return (A = Ue(n.placement)) != null ? A : "bottom";
  }), i = R(() => {
    var A;
    return (A = Ue(n.strategy)) != null ? A : "absolute";
  }), d = R(() => {
    var A;
    return (A = Ue(n.transform)) != null ? A : !0;
  }), c = R(() => Wt(e.value)), s = R(() => Wt(t.value)), u = O(0), m = O(0), p = O(i.value), v = O(a.value), g = Fn({}), h = O(!1), y = R(() => {
    const A = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!s.value)
      return A;
    const T = Bn(s.value, u.value), V = Bn(s.value, m.value);
    return d.value ? {
      ...A,
      transform: "translate(" + T + "px, " + V + "px)",
      ...fo(s.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: T + "px",
      top: V + "px"
    };
  });
  let w;
  function b() {
    if (c.value == null || s.value == null)
      return;
    const A = r.value;
    Ol(c.value, s.value, {
      middleware: l.value,
      placement: a.value,
      strategy: i.value
    }).then((T) => {
      u.value = T.x, m.value = T.y, p.value = T.strategy, v.value = T.placement, g.value = T.middlewareData, h.value = A !== !1;
    });
  }
  function C() {
    typeof w == "function" && (w(), w = void 0);
  }
  function x() {
    if (C(), o === void 0) {
      b();
      return;
    }
    if (c.value != null && s.value != null) {
      w = o(c.value, s.value, b);
      return;
    }
  }
  function S() {
    r.value || (h.value = !1);
  }
  return Z([l, a, i, r], b, {
    flush: "sync"
  }), Z([c, s], x, {
    flush: "sync"
  }), Z(r, S, {
    flush: "sync"
  }), zn() && Wn(C), {
    x: je(u),
    y: je(m),
    strategy: je(p),
    placement: je(v),
    middlewareData: je(g),
    isPositioned: je(h),
    floatingStyles: y,
    update: b
  };
}
function ne(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const l = Un(o, r);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (Gn(o, r), r)];
}
function po(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function _n(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function _l(e) {
  return e == null;
}
function Tl(e, t) {
  var n;
  const o = Fn();
  return le(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Uo(o);
}
function ln(e) {
  return zn() ? (Wn(e), !0) : !1;
}
function Il(e) {
  let t = !1, n;
  const o = Xn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Ml(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...l) => (t += 1, n || (o = Xn(!0), n = o.run(() => e(...l))), ln(r), n);
}
function Me(e) {
  return typeof e == "function" ? e() : f(e);
}
const Be = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Vl = (e) => typeof e < "u", Nl = Object.prototype.toString, Ll = (e) => Nl.call(e) === "[object Object]", Dl = () => {
}, Tn = /* @__PURE__ */ Fl();
function Fl() {
  var e, t;
  return Be && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function zl(e) {
  return Ne();
}
function Wl(e, t = 1e4) {
  return jo((n, o) => {
    let r = Me(e), l;
    const a = () => setTimeout(() => {
      r = Me(e), o();
    }, Me(t));
    return ln(() => {
      clearTimeout(l);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, o(), clearTimeout(l), l = a();
      }
    };
  });
}
function jl(e, t) {
  zl() && Hn(e, t);
}
function Se(e) {
  var t;
  const n = Me(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const an = Be ? window : void 0;
function ht(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = an) : [t, n, o, r] = e, !t)
    return Dl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((s) => s()), l.length = 0;
  }, i = (s, u, m, p) => (s.addEventListener(u, m, p), () => s.removeEventListener(u, m, p)), d = Z(
    () => [Se(t), Me(r)],
    ([s, u]) => {
      if (a(), !s)
        return;
      const m = Ll(u) ? { ...u } : u;
      l.push(
        ...n.flatMap((p) => o.map((v) => i(s, p, v, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), a();
  };
  return ln(c), c;
}
function ql(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Hl(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = an,
    eventName: l = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, d = ql(t);
  return ht(r, l, (c) => {
    c.repeat && Me(i) || d(c) && n(c);
  }, a);
}
function Ul() {
  const e = O(!1), t = Ne();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Gl(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ye(e, t, n, o = {}) {
  var r, l, a;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: s = !1,
    defaultValue: u,
    shouldEmit: m
  } = o, p = Ne(), v = n || (p == null ? void 0 : p.emit) || ((r = p == null ? void 0 : p.$emit) == null ? void 0 : r.bind(p)) || ((a = (l = p == null ? void 0 : p.proxy) == null ? void 0 : l.$emit) == null ? void 0 : a.bind(p == null ? void 0 : p.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (b) => i ? typeof i == "function" ? i(b) : Gl(b) : b, y = () => Vl(e[t]) ? h(e[t]) : u, w = (b) => {
    m ? m(b) && v(g, b) : v(g, b);
  };
  if (d) {
    const b = y(), C = O(b);
    let x = !1;
    return Z(
      () => e[t],
      (S) => {
        x || (x = !0, C.value = h(S), oe(() => x = !1));
      }
    ), Z(
      C,
      (S) => {
        !x && (S !== e[t] || s) && w(S);
      },
      { deep: s }
    ), C;
  } else
    return R({
      get() {
        return y();
      },
      set(b) {
        w(b);
      }
    });
}
function Ct(e) {
  return e ? e.flatMap((t) => t.type === ie ? Ct(t.children) : [t]) : [];
}
function re() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Tt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function jt(e, t, n = ".", o) {
  if (!Tt(t))
    return jt(e, {}, n);
  const r = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const a = e[l];
    a != null && (Array.isArray(a) && Array.isArray(r[l]) ? r[l] = [...a, ...r[l]] : Tt(a) && Tt(r[l]) ? r[l] = jt(
      a,
      r[l],
      (n ? `${n}.` : "") + l.toString()
    ) : r[l] = a);
  }
  return r;
}
function Kl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => jt(n, o, ""), {})
  );
}
const Xl = Kl(), [At] = ne("ConfigProvider");
let Yl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Jl = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Yl[Math.random() * 64 | 0];
  return t;
};
const Ql = Ml(() => {
  const e = O(/* @__PURE__ */ new Map()), t = O(), n = R(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = At({
    scrollBody: O(!0)
  });
  let r = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Tn && (r == null || r()), t.value = void 0;
  };
  return Z(n, (a, i) => {
    var d;
    if (!Be)
      return;
    if (!a) {
      i && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, s = { padding: c, margin: 0 }, u = (d = o.scrollBody) != null && d.value ? typeof o.scrollBody.value == "object" ? Xl({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, s) : s : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Tn && (r = ht(
      document,
      "touchmove",
      (m) => ea(m),
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Zl(e) {
  const t = Jl(6), n = Ql();
  n.value.set(t, e ?? !1);
  const o = R({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return jl(() => {
    n.value.delete(t);
  }), o;
}
function mo(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : mo(n);
  }
}
function ea(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && mo(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const ta = "data-radix-vue-collection-item";
function sn(e, t = ta) {
  const n = Symbol();
  return { createCollection: (o) => {
    const r = O([]);
    function l() {
      const a = Se(o);
      return a ? r.value = Array.from(
        a.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return zo(() => {
      r.value = [];
    }), de(l), Wo(l), Z(() => o == null ? void 0 : o.value, l, { immediate: !0 }), Gn(n, r), r;
  }, injectCollection: () => Un(n, O([])) };
}
function un(e) {
  const t = At({
    dir: O("ltr")
  });
  return R(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function na(e) {
  const t = Ne(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[Io(jn(r))] = (...l) => e(r, ...l);
  }), o;
}
let It = 0;
function oa() {
  le((e) => {
    if (!Be)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? In()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? In()
    ), It++, e(() => {
      It === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), It--;
    });
  });
}
function In() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function dn(e) {
  return R(() => {
    var t;
    return Me(e) ? !!((t = Se(e)) != null && t.closest("form")) : !0;
  });
}
function Fe(e) {
  const t = Ne(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, l) => {
    const a = (t == null ? void 0 : t.type.props[l]).default;
    return a !== void 0 && (r[l] = a), r;
  }, {}), o = Bo(e);
  return R(() => {
    const r = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((a) => {
      r[jn(a)] = l[a];
    }), Object.keys({ ...n, ...r }).reduce((a, i) => (o.value[i] !== void 0 && (a[i] = o.value[i]), a), {});
  });
}
function kt(e, t) {
  const n = Fe(e), o = t ? na(t) : {};
  return R(() => ({
    ...n.value,
    ...o
  }));
}
function G() {
  const e = Ne(), t = O(), n = R(() => {
    var a, i;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Se(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const a in e.props)
    Object.defineProperty(r, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a]
    });
  if (Object.keys(o).length > 0)
    for (const a in o)
      Object.defineProperty(r, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function l(a) {
    t.value = a, a && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a instanceof Element ? a : a.$el
    }), e.exposed = r);
  }
  return { forwardRef: l, currentRef: t, currentElement: n };
}
var ra = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), ut = {}, Mt = 0, vo = function(e) {
  return e && (e.host || vo(e.parentNode));
}, la = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = vo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, aa = function(e, t, n, o) {
  var r = la(t, Array.isArray(e) ? e : [e]);
  ut[n] || (ut[n] = /* @__PURE__ */ new WeakMap());
  var l = ut[n], a = [], i = /* @__PURE__ */ new Set(), d = new Set(r), c = function(u) {
    !u || i.has(u) || (i.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var s = function(u) {
    !u || d.has(u) || Array.prototype.forEach.call(u.children, function(m) {
      if (i.has(m))
        s(m);
      else
        try {
          var p = m.getAttribute(o), v = p !== null && p !== "false", g = (qe.get(m) || 0) + 1, h = (l.get(m) || 0) + 1;
          qe.set(m, g), l.set(m, h), a.push(m), g === 1 && v && st.set(m, !0), h === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return s(t), i.clear(), Mt++, function() {
    a.forEach(function(u) {
      var m = qe.get(u) - 1, p = l.get(u) - 1;
      qe.set(u, m), l.set(u, p), m || (st.has(u) || u.removeAttribute(o), st.delete(u)), p || u.removeAttribute(n);
    }), Mt--, Mt || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), ut = {});
  };
}, ia = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = ra(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), aa(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function sa(e) {
  let t;
  Z(() => Se(e), (n) => {
    n ? t = ia(n) : t && t();
  }), Xt(() => {
    t && t();
  });
}
let ua = 0;
function cn(e, t = "radix") {
  const n = At({ useId: void 0 });
  return yn.useId ? `${t}-${yn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ua}`;
}
function da(e) {
  const t = O(), n = R(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = R(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return de(() => {
    const r = Se(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const l = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const i = a[0];
        let d, c;
        if ("borderBoxSize" in i) {
          const s = i.borderBoxSize, u = Array.isArray(s) ? s[0] : s;
          d = u.inlineSize, c = u.blockSize;
        } else
          d = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: d, height: c };
      });
      return l.observe(r, { box: "border-box" }), () => l.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function ca(e, t) {
  const n = O(e);
  function o(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
const fa = "data-item-text";
function ho(e) {
  const t = Wl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const r = (e == null ? void 0 : e.value) ?? o, l = re(), a = r.map((u) => {
        var m;
        return {
          ref: u,
          textValue: ((m = (u.querySelector(`[${fa}]`) ?? u).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = a.find((u) => u.ref === l), d = a.map((u) => u.textValue), c = ma(d, t.value, i == null ? void 0 : i.textValue), s = a.find((u) => u.textValue === c);
      return s && s.ref.focus(), s == null ? void 0 : s.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function pa(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ma(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = pa(e, Math.max(r, 0));
  o.length === 1 && (l = l.filter((i) => i !== n));
  const a = l.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
const fn = P({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const l = Ct(n.default()), a = l.findIndex((s) => s.type !== Lo);
      if (a === -1)
        return l;
      const i = l[a];
      (o = i.props) == null || delete o.ref;
      const d = i.props ? z(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = Do(i, d);
      for (const s in d)
        s.startsWith("on") && (c.props || (c.props = {}), c.props[s] = d[s]);
      return l.length === 1 ? c : (l[a] = c, l);
    };
  }
}), q = P({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => we(o, t) : o !== "template" ? () => we(e.as, t, { default: n.default }) : () => we(fn, t, { default: n.default });
  }
});
function go() {
  const e = O(), t = R(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Se(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function va(e, t) {
  var n;
  const o = O({}), r = O("none"), l = O(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const d = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? an, { state: c, dispatch: s } = ca(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), u = (h) => {
    var y;
    if (Be) {
      const w = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (y = t.value) == null || y.dispatchEvent(w);
    }
  };
  Z(
    e,
    async (h, y) => {
      var w;
      const b = y !== h;
      if (await oe(), b) {
        const C = r.value, x = dt(t.value);
        h ? (s("MOUNT"), u("enter"), x === "none" && u("after-enter")) : x === "none" || ((w = o.value) == null ? void 0 : w.display) === "none" ? (s("UNMOUNT"), u("leave"), u("after-leave")) : y && C !== x ? (s("ANIMATION_OUT"), u("leave")) : (s("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (h) => {
    const y = dt(t.value), w = y.includes(
      h.animationName
    ), b = c.value === "mounted" ? "enter" : "leave";
    if (h.target === t.value && w && (u(`after-${b}`), s("ANIMATION_END"), !l.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = d == null ? void 0 : d.setTimeout(() => {
        var x;
        ((x = t.value) == null ? void 0 : x.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    h.target === t.value && y === "none" && s("ANIMATION_END");
  }, p = (h) => {
    h.target === t.value && (r.value = dt(t.value));
  }, v = Z(
    t,
    (h, y) => {
      h ? (o.value = getComputedStyle(h), h.addEventListener("animationstart", p), h.addEventListener("animationcancel", m), h.addEventListener("animationend", m)) : (s("ANIMATION_END"), i !== void 0 && (d == null || d.clearTimeout(i)), y == null || y.removeEventListener("animationstart", p), y == null || y.removeEventListener("animationcancel", m), y == null || y.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = Z(c, () => {
    const h = dt(t.value);
    r.value = c.value === "mounted" ? h : "none";
  });
  return Xt(() => {
    v(), g();
  }), {
    isPresent: R(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function dt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const pn = P({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var o;
    const { present: r, forceMount: l } = Ae(e), a = O(), { isPresent: i } = va(r, a);
    n({ present: i });
    let d = t.default({ present: i });
    d = Ct(d || []);
    const c = Ne();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const s = (o = c == null ? void 0 : c.parent) != null && o.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${s}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((u) => `  - ${u}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || r.value || i.value ? we(t.default({ present: i })[0], {
      ref: (s) => {
        const u = Se(s);
        return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-radix-popper-content-wrapper") ? a.value = u.firstElementChild : a.value = u), u;
      }
    }) : null;
  }
}), ha = /* @__PURE__ */ P({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Ul();
    return (n, o) => f(t) || n.forceMount ? (k(), B(Kt, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      M(n.$slots, "default")
    ], 8, ["to", "disabled"])) : Y("", !0);
  }
}), ga = "dismissableLayer.pointerDownOutside", ya = "dismissableLayer.focusOutside";
function yo(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function ba(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1), l = O(() => {
  });
  return le((a) => {
    if (!Be)
      return;
    const i = async (c) => {
      const s = c.target;
      if (t != null && t.value) {
        if (yo(t.value, s)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let u = function() {
            po(
              ga,
              e,
              m
            );
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", l.value), l.value = u, o.addEventListener("click", l.value, {
            once: !0
          })) : u();
        } else
          o.removeEventListener("click", l.value);
        r.value = !1;
      }
    }, d = window.setTimeout(() => {
      o.addEventListener("pointerdown", i);
    }, 0);
    a(() => {
      window.clearTimeout(d), o.removeEventListener("pointerdown", i), o.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function wa(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = O(!1);
  return le((l) => {
    if (!Be)
      return;
    const a = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || yo(t.value, i.target)) && i.target && !r.value && po(
        ya,
        e,
        { originalEvent: i }
      ));
    };
    o.addEventListener("focusin", a), l(() => o.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ye = Kn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xa = /* @__PURE__ */ P({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: l } = G(), a = R(
      () => {
        var v;
        return ((v = l.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = R(() => ye.layersRoot), d = R(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = R(() => ye.layersWithOutsidePointerEventsDisabled.size > 0), s = R(() => {
      const v = Array.from(i.value), [g] = [...ye.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(g);
      return d.value >= h;
    }), u = ba(async (v) => {
      const g = [...ye.branches].some(
        (h) => h == null ? void 0 : h.contains(v.target)
      );
      !s.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await oe(), v.defaultPrevented || o("dismiss"));
    }, l), m = wa((v) => {
      [...ye.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, l);
    Hl("Escape", (v) => {
      d.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let p;
    return le((v) => {
      l.value && (n.disableOutsidePointerEvents && (ye.layersWithOutsidePointerEventsDisabled.size === 0 && (p = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), ye.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), v(() => {
        n.disableOutsidePointerEvents && ye.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = p);
      }));
    }), le((v) => {
      v(() => {
        l.value && (i.value.delete(l.value), ye.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (v, g) => (k(), B(f(q), {
      ref: f(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Yt({
        pointerEvents: c.value ? s.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: f(m).onFocusCapture,
      onBlurCapture: f(m).onBlurCapture,
      onPointerdownCapture: f(u).onPointerDownCapture
    }, {
      default: E(() => [
        M(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Vt = "focusScope.autoFocusOnMount", Nt = "focusScope.autoFocusOnUnmount", Mn = { bubbles: !1, cancelable: !0 };
function Ca(e, { select: t = !1 } = {}) {
  const n = re();
  for (const o of e)
    if (Oe(o, { select: t }), re() !== n)
      return !0;
}
function Aa(e) {
  const t = bo(e), n = Vn(t, e), o = Vn(t.reverse(), e);
  return [n, o];
}
function bo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vn(e, t) {
  for (const n of e)
    if (!ka(n, { upTo: t }))
      return n;
}
function ka(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Sa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = re();
    e.focus({ preventScroll: !0 }), e !== n && Sa(e) && t && e.select();
  }
}
const Ea = Il(() => O([]));
function Ra() {
  const e = Ea();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Nn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Nn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Nn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Oa(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Pa = /* @__PURE__ */ P({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: l } = G(), a = O(null), i = Ra(), d = Kn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    le((s) => {
      if (!Be)
        return;
      const u = l.value;
      if (!n.trapped)
        return;
      function m(h) {
        if (d.paused || !u)
          return;
        const y = h.target;
        u.contains(y) ? a.value = y : Oe(a.value, { select: !0 });
      }
      function p(h) {
        if (d.paused || !u)
          return;
        const y = h.relatedTarget;
        y !== null && (u.contains(y) || Oe(a.value, { select: !0 }));
      }
      function v(h) {
        u.contains(a.value) || Oe(u);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", p);
      const g = new MutationObserver(v);
      u && g.observe(u, { childList: !0, subtree: !0 }), s(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", p), g.disconnect();
      });
    }), le(async (s) => {
      const u = l.value;
      if (await oe(), !u)
        return;
      i.add(d);
      const m = re();
      if (!u.contains(m)) {
        const p = new CustomEvent(Vt, Mn);
        u.addEventListener(Vt, (v) => o("mountAutoFocus", v)), u.dispatchEvent(p), p.defaultPrevented || (Ca(Oa(bo(u)), {
          select: !0
        }), re() === m && Oe(u));
      }
      s(() => {
        u.removeEventListener(Vt, (g) => o("mountAutoFocus", g));
        const p = new CustomEvent(Nt, Mn), v = (g) => {
          o("unmountAutoFocus", g);
        };
        u.addEventListener(Nt, v), u.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || Oe(m ?? document.body, { select: !0 }), u.removeEventListener(Nt, v), i.remove(d);
        }, 0);
      });
    });
    function c(s) {
      if (!n.loop && !n.trapped || d.paused)
        return;
      const u = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, m = re();
      if (u && m) {
        const p = s.currentTarget, [v, g] = Aa(p);
        v && g ? !s.shiftKey && m === g ? (s.preventDefault(), n.loop && Oe(v, { select: !0 })) : s.shiftKey && m === v && (s.preventDefault(), n.loop && Oe(g, { select: !0 })) : m === p && s.preventDefault();
      }
    }
    return (s, u) => (k(), B(f(q), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": s.asChild,
      as: s.as,
      onKeydown: c
    }, {
      default: E(() => [
        M(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Ln(e) {
  const t = re();
  for (const n of e)
    if (n === t || (n.focus(), re() !== t))
      return;
}
function gt(e) {
  return e === "indeterminate";
}
function wo(e) {
  return gt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const $a = ["value", "checked", "name", "disabled", "required"], [Ba, _a] = ne("CheckboxRoot"), Ta = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: r } = Ae(n), l = Ye(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: a, currentElement: i } = G(), d = dn(i), c = R(() => {
      var s;
      return n.id && i.value ? (s = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : s.innerText : void 0;
    });
    return _a({
      disabled: r,
      state: l
    }), (s, u) => (k(), D(ie, null, [
      N(f(q), z(s.$attrs, {
        id: s.id,
        ref: f(a),
        role: "checkbox",
        "as-child": n.asChild,
        as: s.as,
        type: s.as === "button" ? "button" : void 0,
        "aria-checked": f(gt)(f(l)) ? "mixed" : f(l),
        "aria-required": n.required,
        "aria-label": s.$attrs["aria-label"] || c.value,
        "data-state": f(wo)(f(l)),
        "data-disabled": f(r) ? "" : void 0,
        disabled: f(r),
        onKeydown: qn(be(() => {
        }, ["prevent"]), ["enter"]),
        onClick: u[0] || (u[0] = (m) => l.value = f(gt)(f(l)) ? !0 : !f(l))
      }), {
        default: E(() => [
          M(s.$slots, "default", { checked: f(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      f(d) ? (k(), D("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: s.value,
        checked: !!f(l),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, $a)) : Y("", !0)
    ], 64));
  }
}), Ia = /* @__PURE__ */ P({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = G(), n = Ba();
    return (o, r) => (k(), B(f(pn), {
      present: o.forceMount || f(gt)(f(n).state.value) || f(n).state.value === !0
    }, {
      default: E(() => [
        N(f(q), z({
          ref: f(t),
          "data-state": f(wo)(f(n).state.value),
          "data-disabled": f(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: E(() => [
            M(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [xo, Ma] = ne("PopperRoot"), Va = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = O();
    return Ma({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => M(n.$slots, "default");
  }
}), Na = /* @__PURE__ */ P({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = G(), r = xo();
    return le(() => {
      r.onAnchorChange(t.element ?? o.value);
    }), (l, a) => (k(), B(f(q), {
      ref: f(n),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: E(() => [
        M(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function La(e) {
  return e !== null;
}
function Da(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, r;
      const { placement: l, rects: a, middlewareData: i } = t, d = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, s = d ? 0 : e.arrowHeight, [u, m] = qt(l), p = { start: "0%", center: "50%", end: "100%" }[m], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + c / 2, g = (((r = i.arrow) == null ? void 0 : r.y) ?? 0) + s / 2;
      let h = "", y = "";
      return u === "bottom" ? (h = d ? p : `${v}px`, y = `${-s}px`) : u === "top" ? (h = d ? p : `${v}px`, y = `${a.floating.height + s}px`) : u === "right" ? (h = `${-s}px`, y = d ? p : `${g}px`) : u === "left" && (h = `${a.floating.width + s}px`, y = d ? p : `${g}px`), { data: { x: h, y } };
    }
  };
}
function qt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Fa = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [ms, za] = ne("PopperContent"), Wa = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ho({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Fa
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = xo(), { forwardRef: l, currentElement: a } = G(), i = O(), d = O(), { width: c, height: s } = da(d), u = R(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = R(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = R(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = R(() => ({
      padding: m.value,
      boundary: p.value.filter(La),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), g = Tl(() => [
      Cl({
        mainAxis: n.sideOffset + s.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && $n({
        ...v.value
      }),
      n.avoidCollisions && Al({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Rl() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && $n({
        ...v.value
      }),
      kl({
        ...v.value,
        apply: ({ elements: $, rects: W, availableWidth: _, availableHeight: H }) => {
          const { width: L, height: J } = W.reference, j = $.floating.style;
          j.setProperty(
            "--radix-popper-available-width",
            `${_}px`
          ), j.setProperty(
            "--radix-popper-available-height",
            `${H}px`
          ), j.setProperty(
            "--radix-popper-anchor-width",
            `${L}px`
          ), j.setProperty(
            "--radix-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      d.value && $l({ element: d.value, padding: n.arrowPadding }),
      Da({
        arrowWidth: c.value,
        arrowHeight: s.value
      }),
      n.hideWhenDetached && Sl({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h, placement: y, isPositioned: w, middlewareData: b } = Bl(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: u,
        whileElementsMounted: (...$) => xl(...$, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), C = R(
      () => qt(y.value)[0]
    ), x = R(
      () => qt(y.value)[1]
    );
    qo(() => {
      w.value && o("placed");
    });
    const S = R(
      () => {
        var $;
        return (($ = b.value.arrow) == null ? void 0 : $.centerOffset) !== 0;
      }
    ), A = O("");
    le(() => {
      a.value && (A.value = window.getComputedStyle(a.value).zIndex);
    });
    const T = R(() => {
      var $;
      return (($ = b.value.arrow) == null ? void 0 : $.x) ?? 0;
    }), V = R(() => {
      var $;
      return (($ = b.value.arrow) == null ? void 0 : $.y) ?? 0;
    });
    return za({
      placedSide: C,
      onArrowChange: ($) => d.value = $,
      arrowX: T,
      arrowY: V,
      shouldHideArrow: S
    }), ($, W) => {
      var _, H, L;
      return k(), D("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Yt({
          ...f(h),
          transform: f(w) ? f(h).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (_ = f(b).transformOrigin) == null ? void 0 : _.x,
            (H = f(b).transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((L = f(b).hide) == null ? void 0 : L.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        N(f(q), z({ ref: f(l) }, $.$attrs, {
          "as-child": n.asChild,
          as: $.as,
          "data-side": C.value,
          "data-align": x.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: f(w) ? void 0 : "none"
          }
        }), {
          default: E(() => [
            M($.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), ja = /* @__PURE__ */ P({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return G(), (t, n) => (k(), B(f(q), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: E(() => [
        M(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), qa = "data-radix-vue-collection-item", [mn, Ha] = ne("CollectionProvider");
function Ua(e = qa) {
  const t = O(/* @__PURE__ */ new Map()), n = O(), o = Ha({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = Co(o), l = R(() => Array.from(o.itemMap.value.values())), a = R(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: l, itemMapSize: a };
}
const Ga = P({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = mn(), { primitiveElement: o, currentElement: r } = go();
    return Z(r, () => {
      n.collectionRef.value = r.value;
    }), () => we(fn, { ref: o }, t);
  }
}), Ka = P({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = mn(), { primitiveElement: r, currentElement: l } = go();
    return le((a) => {
      if (l.value) {
        const i = Fo(l.value);
        o.itemMap.value.set(i, { ref: l.value, value: e.value }), a(() => o.itemMap.value.delete(i));
      }
    }), () => we(fn, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function Co(e) {
  const t = e ?? mn();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, l) => o.indexOf(r.ref) - o.indexOf(l.ref)
    );
  } };
}
function Xa(e) {
  const t = At({
    nonce: O()
  });
  return R(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Ya = "rovingFocusGroup.onEntryFocus", Ja = { bubbles: !1, cancelable: !0 }, Qa = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Za(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ei(e, t, n) {
  const o = Za(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Qa[o];
}
function Ao(e, t = !1) {
  const n = re();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), re() !== n))
      return;
}
function ti(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [ni, oi] = ne("RovingFocusGroup"), ri = /* @__PURE__ */ P({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, { loop: l, orientation: a, dir: i } = Ae(o), d = un(i), c = Ye(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), s = O(!1), u = O(!1), m = O(0), { getItems: p } = Ua();
    function v(h) {
      const y = !u.value;
      if (h.currentTarget && h.target === h.currentTarget && y && !s.value) {
        const w = new CustomEvent(Ya, Ja);
        if (h.currentTarget.dispatchEvent(w), r("entryFocus", w), !w.defaultPrevented) {
          const b = p().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), C = b.find((A) => A.getAttribute("data-active") === "true"), x = b.find(
            (A) => A.id === c.value
          ), S = [C, x, ...b].filter(
            Boolean
          );
          Ao(S, o.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    function g() {
      setTimeout(() => {
        u.value = !1;
      }, 1);
    }
    return t({
      getItems: p
    }), oi({
      loop: l,
      dir: d,
      orientation: a,
      currentTabStopId: c,
      onItemFocus: (h) => {
        c.value = h;
      },
      onItemShiftTab: () => {
        s.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (h, y) => (k(), B(f(Ga), null, {
      default: E(() => [
        N(f(q), {
          tabindex: s.value || m.value === 0 ? -1 : 0,
          "data-orientation": f(a),
          as: h.as,
          "as-child": h.asChild,
          dir: f(d),
          style: { outline: "none" },
          onMousedown: y[0] || (y[0] = (w) => u.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: y[1] || (y[1] = (w) => s.value = !1)
        }, {
          default: E(() => [
            M(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), li = /* @__PURE__ */ P({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ni(), o = R(() => t.tabStopId || cn()), r = R(
      () => n.currentTabStopId.value === o.value
    ), { getItems: l } = Co();
    de(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Xt(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function a(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = ei(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let c = [...l().map((s) => s.ref).filter((s) => s.dataset.disabled !== "")];
        if (d === "last")
          c.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && c.reverse();
          const s = c.indexOf(
            i.currentTarget
          );
          c = n.loop.value ? ti(c, s + 1) : c.slice(s + 1);
        }
        oe(() => Ao(c));
      }
    }
    return (i, d) => (k(), B(f(Ka), null, {
      default: E(() => [
        N(f(q), {
          tabindex: r.value ? 0 : -1,
          "data-orientation": f(n).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: d[0] || (d[0] = (c) => {
            i.focusable ? f(n).onItemFocus(o.value) : c.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (c) => f(n).onItemFocus(o.value)),
          onKeydown: a
        }, {
          default: E(() => [
            M(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), ai = /* @__PURE__ */ P({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return G(), (n, o) => (k(), B(f(q), z(t, {
      onMousedown: o[0] || (o[0] = (r) => {
        !r.defaultPrevented && r.detail > 1 && r.preventDefault();
      })
    }), {
      default: E(() => [
        M(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ii, si] = ne("RadioGroupRoot"), ui = /* @__PURE__ */ P({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: !1 },
    name: {},
    required: { type: Boolean, default: !1 },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r } = G(), l = Ye(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), { disabled: a, loop: i, orientation: d, name: c, required: s, dir: u } = Ae(n), m = un(u);
    return si({
      modelValue: l,
      changeModelValue: (p) => {
        l.value = p;
      },
      disabled: a,
      loop: i,
      orientation: d,
      name: c == null ? void 0 : c.value,
      required: s
    }), (p, v) => (k(), B(f(ri), {
      "as-child": "",
      orientation: f(d),
      dir: f(m),
      loop: f(i)
    }, {
      default: E(() => [
        N(f(q), {
          ref: f(r),
          role: "radiogroup",
          "data-disabled": f(a) ? "" : void 0,
          "as-child": p.asChild,
          as: p.as,
          required: f(s),
          "aria-orientation": f(d),
          "aria-required": f(s),
          dir: f(m),
          name: f(c)
        }, {
          default: E(() => [
            M(p.$slots, "default", { modelValue: f(l) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), di = ["value", "checked", "name", "disabled", "required"], ci = /* @__PURE__ */ P({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, o = Ye(n, "checked", t, {
      passive: n.checked === void 0
    }), { value: r } = Ae(n), { forwardRef: l, currentElement: a } = G(), i = dn(a), d = R(() => {
      var s;
      return n.id && a.value ? ((s = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : s.innerText) ?? n.value : void 0;
    });
    function c(s) {
      o.value = !0, i.value && s.stopPropagation();
    }
    return (s, u) => (k(), B(f(q), z(s.$attrs, {
      id: s.id,
      ref: f(l),
      role: "radio",
      type: s.as === "button" ? "button" : void 0,
      as: s.as,
      "aria-checked": f(o),
      "aria-label": d.value,
      "as-child": s.asChild,
      disabled: s.disabled ? "" : void 0,
      "data-state": f(o) ? "checked" : "unchecked",
      "data-disabled": s.disabled ? "" : void 0,
      value: f(r),
      required: s.required,
      name: s.name,
      onClick: be(c, ["stop"])
    }), {
      default: E(() => [
        M(s.$slots, "default", { checked: f(o) }),
        f(i) ? (k(), D("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "true",
          value: f(r),
          checked: !!f(o),
          name: s.name,
          disabled: s.disabled,
          required: s.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, di)) : Y("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [fi, pi] = ne("RadioGroupItem"), mi = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = G(), r = ii(), l = R(() => r.disabled.value || t.disabled), a = R(() => r.required.value || t.required), i = R(() => {
      var u;
      return ((u = r.modelValue) == null ? void 0 : u.value) === t.value;
    });
    pi({ disabled: l, checked: i });
    const d = O(!1), c = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    ht("keydown", (u) => {
      c.includes(u.key) && (d.value = !0);
    }), ht("keyup", () => {
      d.value = !1;
    });
    function s() {
      setTimeout(() => {
        var u;
        d.value && ((u = o.value) == null || u.click());
      }, 0);
    }
    return (u, m) => (k(), B(f(li), {
      checked: i.value,
      disabled: l.value,
      "as-child": "",
      focusable: !l.value,
      active: i.value
    }, {
      default: E(() => [
        N(ci, z({ ...u.$attrs, ...t }, {
          ref: f(n),
          checked: i.value,
          required: a.value,
          disabled: l.value,
          "onUpdate:checked": m[0] || (m[0] = (p) => f(r).changeModelValue(u.value)),
          onKeydown: m[1] || (m[1] = qn(be(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: s
        }), {
          default: E(() => [
            M(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), vi = /* @__PURE__ */ P({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = G(), n = fi();
    return (o, r) => (k(), B(f(pn), {
      present: o.forceMount || f(n).checked.value
    }, {
      default: E(() => [
        N(f(q), z({
          ref: f(t),
          "data-state": f(n).checked.value ? "checked" : "unchecked",
          "data-disabled": f(n).disabled.value ? "" : void 0,
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: E(() => [
            M(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hi = ["default-value"], gi = /* @__PURE__ */ P({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, { value: n } = Ae(t), o = O();
    return (r, l) => (k(), B(f(ja), { "as-child": "" }, {
      default: E(() => [
        Mo(ft("select", z({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (a) => Vo(n) ? n.value = a : null),
          "default-value": f(n)
        }), [
          M(r.$slots, "default")
        ], 16, hi), [
          [No, f(n)]
        ])
      ]),
      _: 3
    }));
  }
}), yi = {
  key: 0,
  value: ""
}, [ze, ko] = ne("SelectRoot"), [bi, wi] = ne("SelectRoot"), xi = /* @__PURE__ */ P({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ye(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), l = Ye(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = O(), i = O(), d = O({
      x: 0,
      y: 0
    }), c = O(!1), { required: s, disabled: u, dir: m } = Ae(n), p = un(m);
    ko({
      triggerElement: a,
      onTriggerChange: (y) => {
        a.value = y;
      },
      valueElement: i,
      onValueElementChange: (y) => {
        i.value = y;
      },
      valueElementHasChildren: c,
      onValueElementHasChildrenChange: (y) => {
        c.value = y;
      },
      contentId: "",
      modelValue: r,
      onValueChange: (y) => {
        r.value = y;
      },
      open: l,
      required: s,
      onOpenChange: (y) => {
        l.value = y;
      },
      dir: p,
      triggerPointerDownPosRef: d,
      disabled: u
    });
    const v = dn(a), g = O(/* @__PURE__ */ new Set()), h = R(() => Array.from(g.value).map((y) => {
      var w;
      return (w = y.props) == null ? void 0 : w.value;
    }).join(";"));
    return wi({
      onNativeOptionAdd: (y) => {
        g.value.add(y);
      },
      onNativeOptionRemove: (y) => {
        g.value.delete(y);
      }
    }), (y, w) => (k(), B(f(Va), null, {
      default: E(() => [
        M(y.$slots, "default", {
          modelValue: f(r),
          open: f(l)
        }),
        f(v) ? (k(), B(gi, z({ key: h.value }, y.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: f(s),
          name: y.name,
          autocomplete: y.autocomplete,
          disabled: f(u),
          value: f(r),
          onChange: w[0] || (w[0] = (b) => r.value = b.target.value)
        }), {
          default: E(() => [
            f(r) === void 0 ? (k(), D("option", yi)) : Y("", !0),
            (k(!0), D(ie, null, rt(Array.from(g.value), (b) => (k(), B(Ht(b), z({ ref_for: !0 }, b.props, {
              key: b.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Y("", !0)
      ]),
      _: 3
    }));
  }
}), Ci = [" ", "Enter", "ArrowUp", "ArrowDown"], Ai = [" ", "Enter"], ae = 10;
function So(e) {
  return e === "" || _l(e);
}
const ki = /* @__PURE__ */ P({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ze(), o = R(() => {
      var p;
      return ((p = n.disabled) == null ? void 0 : p.value) || t.disabled;
    }), { forwardRef: r, currentElement: l } = G();
    n.contentId || (n.contentId = cn(void 0, "radix-vue-select-content")), de(() => {
      n.triggerElement = l;
    });
    const { injectCollection: a } = sn(), i = a(), { search: d, handleTypeaheadSearch: c, resetTypeahead: s } = ho(i);
    function u() {
      o.value || (n.onOpenChange(!0), s());
    }
    function m(p) {
      u(), n.triggerPointerDownPosRef.value = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      };
    }
    return (p, v) => (k(), B(f(Na), { "as-child": "" }, {
      default: E(() => {
        var g, h, y, w;
        return [
          N(f(q), {
            ref: f(r),
            role: "combobox",
            type: p.as === "button" ? "button" : void 0,
            "aria-controls": f(n).contentId,
            "aria-expanded": f(n).open.value || !1,
            "aria-required": (g = f(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (h = f(n)) == null ? void 0 : h.dir.value,
            "data-state": (y = f(n)) != null && y.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": f(So)((w = f(n).modelValue) == null ? void 0 : w.value) ? "" : void 0,
            "as-child": p.asChild,
            as: p.as,
            onClick: v[0] || (v[0] = (b) => {
              var C;
              (C = b == null ? void 0 : b.currentTarget) == null || C.focus();
            }),
            onPointerdown: v[1] || (v[1] = (b) => {
              if (b.pointerType === "touch")
                return b.preventDefault();
              const C = b.target;
              C.hasPointerCapture(b.pointerId) && C.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && (m(b), b.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = be(
              (b) => {
                b.pointerType === "touch" && m(b);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (b) => {
              const C = f(d) !== "";
              !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && C && b.key === " " || (f(c)(b.key), f(Ci).includes(b.key) && (u(), b.preventDefault()));
            })
          }, {
            default: E(() => [
              M(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Si = /* @__PURE__ */ P({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (k(), B(f(ha), Ut(Gt(t)), {
      default: E(() => [
        M(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ei, Ri] = ne("SelectItemAlignedPosition"), Oi = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: r } = sn(), l = ze(), a = St(), i = r(), d = O(!1), c = O(!0), s = O(), { forwardRef: u, currentElement: m } = G(), { viewport: p, selectedItem: v, selectedItemText: g, focusSelectedItem: h } = a;
    function y() {
      if (l.triggerElement.value && l.valueElement.value && s.value && m.value && p != null && p.value && v != null && v.value && g != null && g.value) {
        const C = l.triggerElement.value.getBoundingClientRect(), x = m.value.getBoundingClientRect(), S = l.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const _e = A.left - x.left, he = S.left - _e, Ze = C.left - he, Te = C.width + Ze, Rt = Math.max(Te, x.width), Ot = window.innerWidth - ae, Pt = _n(he, ae, Math.max(ae, Ot - Rt));
          s.value.style.minWidth = `${Te}px`, s.value.style.left = `${Pt}px`;
        } else {
          const _e = x.right - A.right, he = window.innerWidth - S.right - _e, Ze = window.innerWidth - C.right - he, Te = C.width + Ze, Rt = Math.max(Te, x.width), Ot = window.innerWidth - ae, Pt = _n(
            he,
            ae,
            Math.max(ae, Ot - Rt)
          );
          s.value.style.minWidth = `${Te}px`, s.value.style.right = `${Pt}px`;
        }
        const T = i.value, V = window.innerHeight - ae * 2, $ = p.value.scrollHeight, W = window.getComputedStyle(m.value), _ = Number.parseInt(
          W.borderTopWidth,
          10
        ), H = Number.parseInt(W.paddingTop, 10), L = Number.parseInt(
          W.borderBottomWidth,
          10
        ), J = Number.parseInt(
          W.paddingBottom,
          10
        ), j = _ + H + $ + J + L, K = Math.min(
          v.value.offsetHeight * 5,
          j
        ), U = window.getComputedStyle(p.value), X = Number.parseInt(U.paddingTop, 10), We = Number.parseInt(
          U.paddingBottom,
          10
        ), Q = C.top + C.height / 2 - ae, Oo = V - Q, Et = v.value.offsetHeight / 2, Po = v.value.offsetTop + Et, at = _ + H + Po, $o = j - at;
        if (at <= Q) {
          const _e = v.value === T[T.length - 1];
          s.value.style.bottom = "0px";
          const he = m.value.clientHeight - p.value.offsetTop - p.value.offsetHeight, Ze = Math.max(
            Oo,
            Et + (_e ? We : 0) + he + L
          ), Te = at + Ze;
          s.value.style.height = `${Te}px`;
        } else {
          const _e = v.value === T[0];
          s.value.style.top = "0px";
          const he = Math.max(
            Q,
            _ + p.value.offsetTop + (_e ? X : 0) + Et
          ) + $o;
          s.value.style.height = `${he}px`, p.value.scrollTop = at - Q + p.value.offsetTop;
        }
        s.value.style.margin = `${ae}px 0`, s.value.style.minHeight = `${K}px`, s.value.style.maxHeight = `${V}px`, o("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const w = O("");
    de(async () => {
      await oe(), y(), m.value && (w.value = window.getComputedStyle(m.value).zIndex);
    });
    function b(C) {
      C && c.value === !0 && (y(), h == null || h(), c.value = !1);
    }
    return Ri({
      contentWrapper: s,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: b
    }), (C, x) => (k(), D("div", {
      ref_key: "contentWrapperElement",
      ref: s,
      style: Yt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [
      N(f(q), z({
        ref: f(u),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...C.$attrs, ...n }), {
        default: E(() => [
          M(C.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Pi = /* @__PURE__ */ P({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ae },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Fe(e);
    return (n, o) => (k(), B(f(Wa), z(f(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: E(() => [
        M(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [St, $i] = ne("SelectContent"), Bi = /* @__PURE__ */ P({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ze();
    oa(), Zl(n.bodyLock);
    const { createCollection: l } = sn(), a = O();
    sa(a);
    const i = l(a), { search: d, handleTypeaheadSearch: c } = ho(i), s = O(), u = O(), m = O(), p = O(!1), v = O(!1);
    function g() {
      u.value && a.value && Ln([u.value, a.value]);
    }
    Z(p, () => {
      g();
    });
    const { onOpenChange: h, triggerPointerDownPosRef: y } = r;
    le((x) => {
      if (!a.value)
        return;
      let S = { x: 0, y: 0 };
      const A = (V) => {
        var $, W;
        S = {
          x: Math.abs(
            Math.round(V.pageX) - ((($ = y.value) == null ? void 0 : $.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((W = y.value) == null ? void 0 : W.y) ?? 0)
          )
        };
      }, T = (V) => {
        var $;
        V.pointerType !== "touch" && (S.x <= 10 && S.y <= 10 ? V.preventDefault() : ($ = a.value) != null && $.contains(V.target) || h(!1), document.removeEventListener("pointermove", A), y.value = null);
      };
      y.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", T, {
        capture: !0,
        once: !0
      })), x(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", T, {
          capture: !0
        });
      });
    });
    function w(x) {
      const S = x.ctrlKey || x.altKey || x.metaKey;
      if (x.key === "Tab" && x.preventDefault(), !S && x.key.length === 1 && c(x.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(x.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(x.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(x.key)) {
          const T = x.target, V = A.indexOf(T);
          A = A.slice(V + 1);
        }
        setTimeout(() => Ln(A)), x.preventDefault();
      }
    }
    const b = R(() => n.position === "popper" ? n : {}), C = Fe(b.value);
    return $i({
      content: a,
      viewport: s,
      onViewportChange: (x) => {
        s.value = x;
      },
      itemRefCallback: (x, S, A) => {
        var T, V;
        const $ = !v.value && !A;
        (((T = r.modelValue) == null ? void 0 : T.value) !== void 0 && ((V = r.modelValue) == null ? void 0 : V.value) === S || $) && (u.value = x, $ && (v.value = !0));
      },
      selectedItem: u,
      selectedItemText: m,
      onItemLeave: () => {
        var x;
        (x = a.value) == null || x.focus();
      },
      itemTextRefCallback: (x, S, A) => {
        var T, V;
        const $ = !v.value && !A;
        (((T = r.modelValue) == null ? void 0 : T.value) !== void 0 && ((V = r.modelValue) == null ? void 0 : V.value) === S || $) && (m.value = x);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: p,
      searchRef: d
    }), (x, S) => (k(), B(f(Pa), {
      "as-child": "",
      onMountAutoFocus: S[6] || (S[6] = be(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: S[7] || (S[7] = (A) => {
        var T;
        o("closeAutoFocus", A), !A.defaultPrevented && ((T = f(r).triggerElement.value) == null || T.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: E(() => [
        N(f(xa), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: S[2] || (S[2] = be(() => {
          }, ["prevent"])),
          onDismiss: S[3] || (S[3] = (A) => f(r).onOpenChange(!1)),
          onEscapeKeyDown: S[4] || (S[4] = (A) => o("escapeKeyDown", A)),
          onPointerDownOutside: S[5] || (S[5] = (A) => o("pointerDownOutside", A))
        }, {
          default: E(() => [
            (k(), B(Ht(
              x.position === "popper" ? Pi : Oi
            ), z({ ...x.$attrs, ...f(C) }, {
              id: f(r).contentId,
              ref: (A) => {
                a.value = f(Se)(A);
              },
              role: "listbox",
              "data-state": f(r).open.value ? "open" : "closed",
              dir: f(r).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: S[0] || (S[0] = be(() => {
              }, ["prevent"])),
              onPlaced: S[1] || (S[1] = (A) => p.value = !0),
              onKeydown: w
            }), {
              default: E(() => [
                M(x.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), _i = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ko(e.context), (t, n) => M(t.$slots, "default");
  }
}), Ti = { key: 1 }, Ii = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = kt(n, t), r = ze(), l = O();
    de(() => {
      l.value = new DocumentFragment();
    });
    const a = O(), i = R(() => n.forceMount || r.open.value);
    return (d, c) => {
      var s;
      return i.value ? (k(), B(f(pn), {
        key: 0,
        ref_key: "presenceRef",
        ref: a,
        present: !0
      }, {
        default: E(() => [
          N(Bi, Ut(Gt({ ...f(o), ...d.$attrs })), {
            default: E(() => [
              M(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((s = a.value) != null && s.present) && l.value ? (k(), D("div", Ti, [
        (k(), B(Kt, { to: l.value }, [
          N(_i, { context: f(r) }, {
            default: E(() => [
              M(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Y("", !0);
    };
  }
}), [Eo, Mi] = ne("SelectItem"), Vi = /* @__PURE__ */ P({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = Ae(t), o = ze(), r = St(vn), { forwardRef: l, currentElement: a } = G(), i = R(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), d = O(!1), c = O(t.textValue ?? ""), s = cn(void 0, "radix-vue-select-item-text");
    async function u(g) {
      await oe(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var h;
      await oe(), !g.defaultPrevented && (n.value ? (h = r.onItemLeave) == null || h.call(r) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function p(g) {
      var h;
      await oe(), !g.defaultPrevented && g.currentTarget === re() && ((h = r.onItemLeave) == null || h.call(r));
    }
    async function v(g) {
      var h;
      await oe(), !(g.defaultPrevented || ((h = r.searchRef) == null ? void 0 : h.value) !== "" && g.key === " ") && (Ai.includes(g.key) && u(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      a.value && r.itemRefCallback(
        a.value,
        t.value,
        t.disabled
      );
    }), Mi({
      value: t.value,
      disabled: n,
      textId: s,
      isSelected: i,
      onItemTextChange: (g) => {
        c.value = ((c.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, h) => (k(), B(f(q), {
      ref: f(l),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": f(s),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": f(n) || void 0,
      "data-disabled": f(n) ? "" : void 0,
      tabindex: f(n) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: h[0] || (h[0] = (y) => d.value = !0),
      onBlur: h[1] || (h[1] = (y) => d.value = !1),
      onPointerup: u,
      onPointerdown: h[2] || (h[2] = (y) => {
        y.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: h[3] || (h[3] = be(() => {
      }, ["prevent", "stop"])),
      onPointermove: m,
      onPointerleave: p,
      onKeydown: v
    }, {
      default: E(() => [
        M(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Ni = /* @__PURE__ */ P({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Eo();
    return (o, r) => f(n).isSelected.value ? (k(), B(f(q), z({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: E(() => [
        M(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : Y("", !0);
  }
}), Li = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ze(), o = St(vn), r = bi(), l = Eo(), { forwardRef: a, currentElement: i } = G(), d = R(() => {
      var c;
      return we("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return de(() => {
      i.value && (l.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), r.onNativeOptionAdd(d.value));
    }), Hn(() => {
      r.onNativeOptionRemove(d.value);
    }), (c, s) => (k(), D(ie, null, [
      N(f(q), z({
        id: f(l).textId,
        ref: f(a)
      }, { ...t, ...c.$attrs }, { "data-item-text": "" }), {
        default: E(() => [
          M(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      f(l).isSelected.value && f(n).valueElement.value && !f(n).valueElementHasChildren.value ? (k(), B(Kt, {
        key: 0,
        to: f(n).valueElement.value
      }, [
        M(c.$slots, "default")
      ], 8, ["to"])) : Y("", !0)
    ], 64));
  }
}), Di = /* @__PURE__ */ P({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = Ae(t), o = Xa(n), r = St(vn), l = r.position === "item-aligned" ? Ei() : void 0, { forwardRef: a, currentElement: i } = G();
    de(() => {
      r == null || r.onViewportChange(i.value);
    });
    const d = O(0);
    function c(s) {
      const u = s.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: p } = l ?? {};
      if (m != null && m.value && p != null && p.value) {
        const v = Math.abs(d.value - u.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - ae * 2, h = Number.parseFloat(
            p.value.style.minHeight
          ), y = Number.parseFloat(p.value.style.height), w = Math.max(h, y);
          if (w < g) {
            const b = w + v, C = Math.min(g, b), x = b - C;
            p.value.style.height = `${C}px`, p.value.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = u.scrollTop;
    }
    return (s, u) => (k(), D(ie, null, [
      N(f(q), z({
        ref: f(a),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...s.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: c
      }), {
        default: E(() => [
          M(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      N(f(q), {
        as: "style",
        nonce: f(o)
      }, {
        default: E(() => [
          Le(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Fi = /* @__PURE__ */ P({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = G(), o = ze(), r = _o();
    return To(() => {
      var l;
      const a = !!Ct((l = r == null ? void 0 : r.default) == null ? void 0 : l.call(r)).length;
      o.onValueElementHasChildrenChange(a);
    }), de(() => {
      o.valueElement = n;
    }), (l, a) => (k(), B(f(q), {
      ref: f(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: E(() => {
        var i;
        return [
          f(So)((i = f(o).modelValue) == null ? void 0 : i.value) ? (k(), D(ie, { key: 0 }, [
            Le(fe(l.placeholder), 1)
          ], 64)) : M(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), zi = /* @__PURE__ */ P({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (k(), B(f(q), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: E(() => [
        M(t.$slots, "default", {}, () => [
          Le("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Wi() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Wi();
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ct = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hn = (e, t) => ({ size: n, strokeWidth: o = 2, absoluteStrokeWidth: r, color: l, class: a, ...i }, { attrs: d, slots: c }) => we(
  "svg",
  {
    ...ct,
    width: n || ct.width,
    height: n || ct.height,
    stroke: l || ct.stroke,
    "stroke-width": r ? Number(o) * 24 / Number(n) : o,
    ...d,
    class: ["lucide", `lucide-${ji(e)}`],
    ...i
  },
  [
    ...t.map((s) => we(...s)),
    ...c.default ? [c.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = hn("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = hn("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = hn("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Ui = /* @__PURE__ */ P({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      const { class: r, ...l } = t;
      return l;
    }), o = Fe(n);
    return (r, l) => (k(), B(f(ki), z(f(o), {
      class: f(me)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t.class)
    }), {
      default: E(() => [
        M(r.$slots, "default"),
        N(f(zi), { "as-child": "" }, {
          default: E(() => [
            N(f(qi), { class: "h-4 w-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gi = /* @__PURE__ */ P({
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      const { class: r, ...l } = t;
      return l;
    }), o = Fe(n);
    return (r, l) => (k(), B(f(Si), null, {
      default: E(() => [
        N(f(Ii), z(f(o), {
          class: f(me)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t.class)
        }), {
          default: E(() => [
            N(f(Di), {
              class: ot(f(me)("p-1", e.position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"))
            }, {
              default: E(() => [
                M(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ki = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Xi = /* @__PURE__ */ P({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      const { class: r, ...l } = t;
      return l;
    }), o = Fe(n);
    return (r, l) => (k(), B(f(Vi), z(f(o), {
      class: f(me)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: E(() => [
        ft("span", Ki, [
          N(f(Ni), null, {
            default: E(() => [
              N(f(Ro), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        N(f(Li), null, {
          default: E(() => [
            M(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yi = /* @__PURE__ */ P({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = kt(e, t);
    return (l, a) => (k(), B(f(xi), Ut(Gt(f(r))), {
      default: E(() => [
        M(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ji = /* @__PURE__ */ P({
  __name: "SelectRenderer",
  props: {
    field: {},
    modelValue: {},
    fieldId: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (k(), B(Yi, {
      disabled: e.field.disabled,
      name: e.field.name,
      modelValue: e.modelValue != null ? String(e.modelValue) : "",
      "onUpdate:modelValue": r[0] || (r[0] = (l) => n("update:modelValue", l))
    }, {
      default: E(() => [
        N(Ui, { id: e.fieldId }, {
          default: E(() => [
            N(f(Fi), {
              placeholder: e.field.placeholder || "Select an option"
            }, null, 8, ["placeholder"])
          ]),
          _: 1
        }, 8, ["id"]),
        N(Gi, null, {
          default: E(() => [
            (k(!0), D(ie, null, rt(e.field.options, (l) => (k(), B(Xi, {
              key: l.value,
              value: String(l.value)
            }, {
              default: E(() => [
                Le(fe(l.label), 1)
              ]),
              _: 2
            }, 1032, ["value"]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["disabled", "name", "modelValue"]));
  }
}), Qi = /* @__PURE__ */ P({
  __name: "Checkbox",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked", "blur"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = R(() => {
      const { class: a, ...i } = n;
      return i;
    }), l = kt(r, o);
    return (a, i) => (k(), B(f(Ta), z(f(l), {
      class: f(me)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", n.class),
      onBlur: i[0] || (i[0] = (d) => o("blur"))
    }), {
      default: E(() => [
        N(f(Ia), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: E(() => [
            N(f(Ro), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), gn = /* @__PURE__ */ P({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (k(), B(f(ai), z(n.value, {
      class: f(me)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", t.class)
    }), {
      default: E(() => [
        M(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zi = { class: "flex flex-wrap gap-4" }, es = /* @__PURE__ */ P({
  __name: "CheckboxRenderer",
  props: {
    field: {},
    modelValue: {},
    fieldId: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = (l, a) => {
      const i = Array.isArray(n.modelValue) ? [...n.modelValue] : [];
      if (a)
        i.push(l);
      else {
        const d = i.indexOf(l);
        d > -1 && i.splice(d, 1);
      }
      o("update:modelValue", i);
    };
    return (l, a) => (k(), D("div", Zi, [
      (k(!0), D(ie, null, rt(e.field.options, (i) => (k(), D("div", {
        key: i.value,
        class: "flex items-center space-x-2"
      }, [
        N(Qi, {
          id: `checkbox-${e.field.name}-${i.value}`,
          disabled: e.field.disabled,
          checked: Array.isArray(e.modelValue) && e.modelValue.includes(i.value),
          "onUpdate:checked": (d) => r(i.value, !!d)
        }, null, 8, ["id", "disabled", "checked", "onUpdate:checked"]),
        N(gn, {
          for: `checkbox-${e.field.name}-${i.value}`,
          class: "font-normal"
        }, {
          default: E(() => [
            Le(fe(i.label), 1)
          ]),
          _: 2
        }, 1032, ["for"])
      ]))), 128))
    ]));
  }
}), ts = /* @__PURE__ */ P({
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      const { class: r, ...l } = t;
      return l;
    }), o = Fe(n);
    return (r, l) => (k(), B(f(mi), z(f(o), {
      class: f(me)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t.class)
    }), {
      default: E(() => [
        N(f(vi), { class: "flex items-center justify-center" }, {
          default: E(() => [
            N(f(Hi), { class: "h-2.5 w-2.5 fill-current text-current" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ns = /* @__PURE__ */ P({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = R(() => {
      const { class: a, ...i } = n;
      return i;
    }), l = kt(r, o);
    return (a, i) => (k(), B(f(ui), z(f(l), {
      class: f(me)("grid gap-2", n.class)
    }), {
      default: E(() => [
        M(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), os = /* @__PURE__ */ P({
  __name: "RadioRenderer",
  props: {
    field: {},
    modelValue: {},
    fieldId: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (k(), B(ns, {
      class: "flex flex-wrap gap-4",
      disabled: e.field.disabled,
      name: e.field.name,
      modelValue: e.modelValue != null ? String(e.modelValue) : "",
      "onUpdate:modelValue": r[0] || (r[0] = (l) => n("update:modelValue", l))
    }, {
      default: E(() => [
        (k(!0), D(ie, null, rt(e.field.options, (l) => (k(), D("div", {
          key: l.value,
          class: "flex items-center space-x-2"
        }, [
          N(ts, {
            id: `radio-${e.field.name}-${l.value}`,
            value: String(l.value)
          }, null, 8, ["id", "value"]),
          N(gn, {
            for: `radio-${e.field.name}-${l.value}`,
            class: "font-normal"
          }, {
            default: E(() => [
              Le(fe(l.label), 1)
            ]),
            _: 2
          }, 1032, ["for"])
        ]))), 128))
      ]),
      _: 1
    }, 8, ["disabled", "name", "modelValue"]));
  }
}), Dn = {
  text: He,
  number: He,
  password: He,
  email: He,
  date: He,
  textarea: Mr,
  select: Ji,
  checkbox: es,
  radio: os
}, rs = {
  key: 1,
  class: "text-[0.8rem] text-muted-foreground"
}, ls = {
  key: 2,
  class: "text-[0.8rem] font-medium text-destructive"
}, as = /* @__PURE__ */ P({
  __name: "FormFieldRenderer",
  props: {
    field: {},
    modelValue: {},
    error: {},
    componentMap: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = R(() => `field-${n.field.name}`), l = R(
      () => n.componentMap ? { ...Dn, ...n.componentMap } : Dn
    ), a = R(
      () => l.value[n.field.type] ?? He
    );
    return (i, d) => (k(), D("div", {
      class: ot(["space-y-2", e.field.className])
    }, [
      e.field.label ? (k(), B(gn, {
        key: 0,
        for: r.value
      }, {
        default: E(() => [
          Le(fe(e.field.label), 1)
        ]),
        _: 1
      }, 8, ["for"])) : Y("", !0),
      (k(), B(Ht(a.value), {
        field: e.field,
        fieldId: r.value,
        modelValue: e.modelValue,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => o("update:modelValue", c))
      }, null, 8, ["field", "fieldId", "modelValue"])),
      e.field.description ? (k(), D("p", rs, fe(e.field.description), 1)) : Y("", !0),
      e.error ? (k(), D("p", ls, fe(e.error), 1)) : Y("", !0)
    ], 2));
  }
}), is = {
  key: 0,
  class: "space-y-1"
}, ss = {
  key: 0,
  class: "text-2xl font-bold tracking-tight"
}, us = {
  key: 1,
  class: "text-muted-foreground"
}, ds = { class: "space-y-4" }, cs = ["disabled"], vs = /* @__PURE__ */ P({
  __name: "DynamicForm",
  props: {
    schema: {},
    className: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = O(Ko(n.schema.fields)), l = (i, d) => {
      r.value = Xo(n.schema.fields, r.value, i, d);
    }, a = () => {
      const i = Yo(r.value, !0), { state: d, hasError: c } = Jo(n.schema.fields, i);
      r.value = d, c || o("submit", { ...d.values });
    };
    return (i, d) => (k(), D("form", {
      class: ot(["space-y-6", e.className]),
      onSubmit: be(a, ["prevent"])
    }, [
      e.schema.title || e.schema.description ? (k(), D("div", is, [
        e.schema.title ? (k(), D("h2", ss, fe(e.schema.title), 1)) : Y("", !0),
        e.schema.description ? (k(), D("p", us, fe(e.schema.description), 1)) : Y("", !0)
      ])) : Y("", !0),
      ft("div", ds, [
        (k(!0), D(ie, null, rt(e.schema.fields, (c) => (k(), D(ie, {
          key: c.id
        }, [
          c.hidden ? Y("", !0) : (k(), B(as, {
            key: 0,
            field: c,
            "model-value": r.value.values[c.name],
            error: r.value.errors[c.name],
            "onUpdate:modelValue": (s) => l(c.name, s)
          }, null, 8, ["field", "model-value", "error", "onUpdate:modelValue"]))
        ], 64))), 128))
      ]),
      ft("button", {
        type: "submit",
        disabled: r.value.isSubmitting,
        class: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
      }, fe(r.value.isSubmitting ? "Submitting..." : e.schema.submitButtonText || "Submit"), 9, cs)
    ], 34));
  }
});
export {
  vs as DynamicForm,
  as as FormFieldRenderer,
  Dn as defaultComponentMap
};
