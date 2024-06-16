import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import frFR from 'vant/es/locale/lang/fr-FR'

Locale.use('fr-FR', frFR)

import '@vant/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  // const vuetify = createVuetify({
  //     ssr: true,
  //     components,
  //     directives,
  // })
  //
  // nuxtApp.vueApp.use(vuetify)
})
