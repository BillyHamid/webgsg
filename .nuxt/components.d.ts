
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


export const HeroRoute: typeof import("../components/HeroRoute.vue")['default']
export const ParcelJourney: typeof import("../components/ParcelJourney.vue")['default']
export const PremiumRoute: typeof import("../components/PremiumRoute.vue")['default']
export const ShareButtons: typeof import("../components/ShareButtons.vue")['default']
export const StatusBadge: typeof import("../components/StatusBadge.vue")['default']
export const TrackIcon: typeof import("../components/TrackIcon.vue")['default']
export const TrackingForm: typeof import("../components/TrackingForm.vue")['default']
export const TrackingTimeline: typeof import("../components/TrackingTimeline.vue")['default']
export const NuxtWelcome: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_tsx_ijevm2mlmwfoduv2ph2ue5sckm/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const VitePwaManifest: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const PwaAppleSplashScreenImage: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const PwaFaviconImage: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const PwaMaskableImage: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const PwaTransparentImage: typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const NuxtPage: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyHeroRoute: LazyComponent<typeof import("../components/HeroRoute.vue")['default']>
export const LazyParcelJourney: LazyComponent<typeof import("../components/ParcelJourney.vue")['default']>
export const LazyPremiumRoute: LazyComponent<typeof import("../components/PremiumRoute.vue")['default']>
export const LazyShareButtons: LazyComponent<typeof import("../components/ShareButtons.vue")['default']>
export const LazyStatusBadge: LazyComponent<typeof import("../components/StatusBadge.vue")['default']>
export const LazyTrackIcon: LazyComponent<typeof import("../components/TrackIcon.vue")['default']>
export const LazyTrackingForm: LazyComponent<typeof import("../components/TrackingForm.vue")['default']>
export const LazyTrackingTimeline: LazyComponent<typeof import("../components/TrackingTimeline.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_tsx_ijevm2mlmwfoduv2ph2ue5sckm/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyVitePwaManifest: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaManifest: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaAssets: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
export const LazyPwaAppleImage: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
export const LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
export const LazyPwaFaviconImage: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
export const LazyPwaMaskableImage: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
export const LazyPwaTransparentImage: LazyComponent<typeof import("../../../node_modules/.pnpm/@vite-pwa+nuxt@0.10.8_magicast@0.5.3_vite@7.3.6_@types+node@20.19.41_jiti@2.7.0_terser@5.48.0_o5vkjnzze6sbw2h2xhc6n2w5im/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../../../node_modules/.pnpm/nuxt@3.21.9_@types+node@20.19.41_@vue+compiler-sfc@3.5.40_cac@6.7.14_db0@0.3.4_esbuild@0.28.0_xovonl4gqvoizaxejgdr34iesq/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
