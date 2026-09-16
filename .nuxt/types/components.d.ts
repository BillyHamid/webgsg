
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  HeroRoute: typeof import("../../components/HeroRoute.vue")['default']
  ParcelJourney: typeof import("../../components/ParcelJourney.vue")['default']
  PremiumRoute: typeof import("../../components/PremiumRoute.vue")['default']
  ShareButtons: typeof import("../../components/ShareButtons.vue")['default']
  StatusBadge: typeof import("../../components/StatusBadge.vue")['default']
  TrackIcon: typeof import("../../components/TrackIcon.vue")['default']
  TrackingForm: typeof import("../../components/TrackingForm.vue")['default']
  TrackingTimeline: typeof import("../../components/TrackingTimeline.vue")['default']
  NuxtWelcome: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  Icon: typeof import("../../../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_tsx_ijevm2mlmwfoduv2ph2ue5sckm/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
  VitePwaManifest: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
  NuxtPwaManifest: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
  NuxtPwaAssets: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
  PwaAppleImage: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
  PwaAppleSplashScreenImage: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
  PwaFaviconImage: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
  PwaMaskableImage: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
  PwaTransparentImage: typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
  NuxtPage: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyHeroRoute: LazyComponent<typeof import("../../components/HeroRoute.vue")['default']>
  LazyParcelJourney: LazyComponent<typeof import("../../components/ParcelJourney.vue")['default']>
  LazyPremiumRoute: LazyComponent<typeof import("../../components/PremiumRoute.vue")['default']>
  LazyShareButtons: LazyComponent<typeof import("../../components/ShareButtons.vue")['default']>
  LazyStatusBadge: LazyComponent<typeof import("../../components/StatusBadge.vue")['default']>
  LazyTrackIcon: LazyComponent<typeof import("../../components/TrackIcon.vue")['default']>
  LazyTrackingForm: LazyComponent<typeof import("../../components/TrackingForm.vue")['default']>
  LazyTrackingTimeline: LazyComponent<typeof import("../../components/TrackingTimeline.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyIcon: LazyComponent<typeof import("../../../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_tsx_ijevm2mlmwfoduv2ph2ue5sckm/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
  LazyVitePwaManifest: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
  LazyNuxtPwaManifest: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
  LazyNuxtPwaAssets: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
  LazyPwaAppleImage: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
  LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
  LazyPwaFaviconImage: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
  LazyPwaMaskableImage: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
  LazyPwaTransparentImage: LazyComponent<typeof import("../../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
