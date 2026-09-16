import { _ as __nuxt_component_0 } from './nuxt-link-B4UUcJgT.mjs';
import { _ as _imports_0, a as _sfc_main$3 } from './_virtual_public-C0CzJPiQ.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { i as useRouter, _ as _export_sfc } from './server.mjs';
import { a as useSeoMeta } from './v3-Dp-QybCP.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackingForm",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const value = ref("");
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TrackIcon = _sfc_main$3;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><label for="tracking-number" class="sr-only">Num\xE9ro de suivi</label><input id="tracking-number"${ssrRenderAttr("aria-invalid", !!unref(error))}${ssrRenderAttr("aria-describedby", unref(error) ? "tracking-error" : void 0)}${ssrRenderAttr("value", unref(value))} type="text" placeholder="ex: GSG-US-A4F2K9P1" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false" class="input-tracking">`);
      if (unref(error)) {
        _push(`<p id="tracking-error" role="alert" class="text-sm text-red-500 px-1">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn-primary">`);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:magnifying-glass-bold",
        size: "20"
      }, null, _parent));
      _push(` Suivre mon colis </button></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrackingForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "route-orbit",
    "aria-label": "Liaison entre les \xC9tats-Unis et l\u2019Afrique de l\u2019Ouest"
  }, _attrs))}><svg viewBox="0 0 500 450" fill="none" aria-hidden="true"><circle cx="255" cy="222" r="166" fill="#12323b" stroke="#ffffff10"></circle><ellipse cx="255" cy="222" rx="93" ry="166" stroke="#ffffff10"></ellipse><ellipse cx="255" cy="222" rx="34" ry="166" stroke="#ffffff08"></ellipse><ellipse cx="255" cy="222" rx="166" ry="66" stroke="#ffffff10"></ellipse><path d="M89 222h332M110 139h290M110 305h290" stroke="#ffffff10"></path><path d="M110 185C200 34 350 89 388 280" stroke="#70d3c2" stroke-width="2" class="orbit-trail"></path><circle cx="110" cy="185" r="7" fill="#70d3c2"></circle><circle cx="110" cy="185" r="17" stroke="#70d3c2" stroke-opacity=".25"></circle><circle cx="388" cy="280" r="7" fill="#70d3c2"></circle><circle cx="388" cy="280" r="17" stroke="#70d3c2" stroke-opacity=".25"></circle><g transform="translate(258 108) rotate(12)"><circle r="23" fill="#70d3c2"></circle><path d="m-12 1 9 2 1 8 3 1 2-9 9-7-1-3-10 4-7-5-2 1 4 7-7-1z" fill="#102e38"></path></g></svg><div class="route-label left-0 top-[43%]"><span class="tracking-kicker !text-[8px] text-accent-400">Origine</span><div><strong>USA</strong></div><p>\xC9tats-Unis</p></div><div class="route-label right-0 bottom-[14%]"><span class="tracking-kicker !text-[8px] text-accent-400">Notre r\xE9seau</span><div><strong>Afrique de l\u2019Ouest</strong></div><p>Au-del\xE0 des fronti\xE8res</p></div><p class="absolute bottom-0 inset-x-0 text-center tracking-kicker !text-[8px] text-ink-300">Une liaison qui nous rapproche \xB7 Illustration du r\xE9seau</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PremiumRoute.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "GSGLOGISTIQUE \u2014 Suivi de colis USA \u21C4 Afrique de l'Ouest",
      description: "Transport de colis fiable entre les \xC9tats-Unis et l'Afrique de l'Ouest. Suivez votre envoi en temps r\xE9el, o\xF9 que vous soyez.",
      ogTitle: "GSGLOGISTIQUE \u2014 Suivi de colis",
      ogDescription: "Saisissez votre num\xE9ro de suivi pour voir o\xF9 en est votre envoi"
    });
    const steps = [
      {
        icon: "ph:package-bold",
        title: "Enregistrement",
        text: "Le colis est enregistr\xE9 et re\xE7oit un num\xE9ro de suivi unique, associ\xE9 \xE0 un QR code."
      },
      {
        icon: "ph:airplane-tilt-bold",
        title: "Transit international",
        text: "Group\xE9 dans un envoi, il traverse l'Atlantique jusqu'\xE0 son pays de destination."
      },
      {
        icon: "ph:handshake-bold",
        title: "Livraison",
        text: "Apr\xE8s le d\xE9douanement, votre colis est mis \xE0 disposition pour la livraison ou le retrait."
      }
    ];
    const features = [
      { icon: "ph:broadcast-bold", title: "Suivi en temps r\xE9el", text: "L'\xE9tat de votre colis se met \xE0 jour en direct, sans avoir \xE0 rappeler l'agence." },
      { icon: "ph:chat-circle-dots-bold", title: "Notifications SMS & WhatsApp", text: "Votre agence peut vous transmettre les informations de suivi par SMS ou WhatsApp." },
      { icon: "ph:globe-hemisphere-west-bold", title: "R\xE9seau USA \u21C4 Afrique", text: "Un corridor logistique d\xE9di\xE9 entre les \xC9tats-Unis et l'Afrique de l'Ouest." },
      { icon: "ph:shield-check-bold", title: "Fiable et trac\xE9", text: "Chaque \xE9tape est horodat\xE9e et v\xE9rifiable \u2014 aucune zone d'ombre sur le trajet." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TrackIcon = _sfc_main$3;
      const _component_TrackingForm = _sfc_main$2;
      const _component_PremiumRoute = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "top",
        class: "bg-[#fafbf9]"
      }, _attrs))}><section class="tracking-hero text-white"><header class="relative tracking-shell h-24 flex items-center justify-between border-b border-white/10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="GSG Logistique" class="h-11 w-14 object-contain bg-white rounded-xl p-1"${_scopeId}><span class="font-bold text-sm tracking-wide"${_scopeId}>GSG<span class="text-accent-400"${_scopeId}>.</span><span class="block text-[8px] tracking-[.2em] text-ink-300 mt-1"${_scopeId}>GLOBAL SHIPPING GROUP</span></span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "GSG Logistique",
                class: "h-11 w-14 object-contain bg-white rounded-xl p-1"
              }),
              createVNode("span", { class: "font-bold text-sm tracking-wide" }, [
                createTextVNode("GSG"),
                createVNode("span", { class: "text-accent-400" }, "."),
                createVNode("span", { class: "block text-[8px] tracking-[.2em] text-ink-300 mt-1" }, "GLOBAL SHIPPING GROUP")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="flex items-center gap-7 text-xs"><a href="#parcours" class="hidden md:block text-ink-300 hover:text-white">Le parcours de votre colis</a><a href="tel:+13473210379" class="border border-white/20 rounded-full px-4 py-2.5 hover:bg-white/10 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:phone",
        size: "16"
      }, null, _parent));
      _push(`Nous contacter</a></nav></header><div class="relative tracking-shell grid lg:grid-cols-[1.1fr_1fr] items-center gap-5 pt-14 pb-12 lg:pt-20 lg:pb-20"><div><p class="reveal tracking-kicker text-accent-400 mb-6">Vos proches sont loin. Votre colis, jamais.</p><h1 class="reveal reveal-1 tracking-title font-display">La distance change.<br><span class="text-accent-400">Le lien reste.</span></h1><p class="reveal reveal-2 text-ink-300 text-base leading-relaxed mt-6 max-w-md">Des \xC9tats-Unis \xE0 l\u2019Afrique de l\u2019Ouest, retrouvez chaque \xE9tape du voyage de votre colis, en toute simplicit\xE9.</p><div id="suivre" class="reveal reveal-3 mt-9 bg-white rounded-2xl p-5 sm:p-6 max-w-lg shadow-xl shadow-black/10"><div class="flex items-center justify-between mb-4"><h2 class="text-sm font-bold text-ink-900">O\xF9 en est votre colis ?</h2>`);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:package",
        size: "20",
        class: "text-accent-600"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TrackingForm, null, null, _parent));
      _push(`<p class="text-[10px] text-ink-500 mt-3">Votre num\xE9ro de suivi figure sur le re\xE7u de votre envoi.</p></div><p class="reveal reveal-4 mt-5 text-[11px] text-ink-300 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:lock-key",
        size: "14"
      }, null, _parent));
      _push(`Sans compte \xB7 Informations actualis\xE9es \xB7 Acc\xE8s gratuit</p></div><div class="reveal reveal-4 hidden lg:block pl-5">`);
      _push(ssrRenderComponent(_component_PremiumRoute, null, null, _parent));
      _push(`</div></div><div class="relative border-t border-white/10"><div class="tracking-shell py-5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-ink-300"><span class="tracking-kicker !text-[9px]">Un r\xE9seau, des liens</span><span>\xC9tats-Unis <span class="text-accent-400 mx-3">\u2194</span> Afrique de l\u2019Ouest</span><span class="hidden sm:block">Express &amp; Cargo</span></div></div></section><section id="parcours" class="tracking-shell py-16 sm:py-24"><div class="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"><div><p class="tracking-kicker text-accent-600 mb-3">Le voyage, en toute clart\xE9</p><h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">Chaque \xE9tape compte.</h2></div><p class="text-sm text-ink-500 max-w-sm leading-relaxed">Du premier enregistrement \xE0 la remise du colis, un historique pour savoir o\xF9 vous en \xEAtes.</p></div><div class="grid sm:grid-cols-3 gap-5"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<article class="service-card rounded-2xl p-6 sm:p-8 border border-ink-100 bg-white"><div class="flex justify-between items-center mb-8">`);
        _push(ssrRenderComponent(_component_TrackIcon, {
          name: step.icon,
          size: "26",
          class: "text-accent-600"
        }, null, _parent));
        _push(`<span class="text-xs font-mono text-ink-300">0${ssrInterpolate(i + 1)} / 03</span></div><h3 class="font-display text-lg font-bold text-ink-900">${ssrInterpolate(step.title)}</h3><p class="text-sm leading-relaxed text-ink-500 mt-3">${ssrInterpolate(step.text)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="bg-ink-50 border-y border-ink-100"><div class="tracking-shell py-16 grid md:grid-cols-[1fr_1.1fr] gap-12 items-center"><div><p class="tracking-kicker text-accent-600 mb-4">L\u2019essentiel, au bon moment</p><h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">Moins d\u2019incertitude.<br>Plus de tranquillit\xE9.</h2><p class="mt-5 text-sm text-ink-500 leading-relaxed max-w-sm">Consultez le statut, retrouvez l\u2019historique et partagez le suivi avec la personne qui attend votre colis.</p><a href="#suivre" class="inline-flex mt-7 items-center gap-3 text-sm font-bold text-accent-700">Retrouver mon envoi `);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:arrow-up-right",
        size: "18"
      }, null, _parent));
      _push(`</a></div><div class="grid sm:grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="border-t border-ink-100 pt-5">`);
        _push(ssrRenderComponent(_component_TrackIcon, {
          name: feature.icon,
          size: "22",
          class: "text-accent-600 mb-3"
        }, null, _parent));
        _push(`<h3 class="font-bold text-sm text-ink-900">${ssrInterpolate(feature.title)}</h3><p class="mt-2 text-xs leading-relaxed text-ink-500">${ssrInterpolate(feature.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="tracking-shell py-16"><div class="rounded-3xl bg-ink-900 p-7 sm:p-12 flex flex-col sm:flex-row justify-between gap-7 sm:items-center"><div><p class="tracking-kicker text-accent-400 mb-3">Nous sommes \xE0 vos c\xF4t\xE9s</p><h2 class="text-white text-2xl font-display font-bold tracking-tight">Une question sur votre envoi ?</h2><p class="text-ink-300 text-sm mt-3">Notre \xE9quipe vous accompagne pour la suite du voyage.</p></div><a href="tel:+13473210379" class="shrink-0 flex items-center justify-center gap-3 bg-accent-500 text-ink-900 rounded-xl px-5 h-14 font-bold text-sm hover:bg-accent-400">`);
      _push(ssrRenderComponent(_component_TrackIcon, {
        name: "ph:phone",
        size: "18"
      }, null, _parent));
      _push(`+1 (347) 321-0379</a></div></section><footer class="tracking-shell pb-8 flex flex-wrap gap-3 items-center justify-between text-[11px] text-ink-500"><span>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Global Shipping Group</span><a href="#top" class="hover:text-accent-700">Retour en haut \u2191</a></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cnhg9tjP.mjs.map
