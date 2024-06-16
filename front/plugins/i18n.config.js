import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

import { enUS as enDateFns, fr as frDateFns } from 'date-fns/locale'

const  availableDateFnsLocales = {
  en:enDateFns,
  fr:frDateFns
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en,
    fr
  }
}))

export {
  availableDateFnsLocales
}
