export const LanguageCode = {
  SQ: 'SQ', // Albanian
  AM: 'AM', // Amharic
  AR: 'AR', // Arabic
  HY: 'HY', // Armenian
  BN: 'BN', // Bengali
  BS: 'BS', // Bosnian
  BG: 'BG', // Bulgarian
  MY: 'MY', // Burmese
  CA: 'CA', // Catalan
  ZH: 'ZH', // Chinese (Legacy)
  ZH_CN: 'ZH_CN', // Chinese (Simplified)
  ZH_TW: 'ZH_TW', // Chinese (Traditional)
  HR: 'HR', // Croatian
  CS: 'CS', // Czech
  DA: 'DA', // Danish
  NL: 'NL', // Dutch
  EN: 'EN', // English (Legacy)
  EN_US: 'EN_US', // English (United States)
  EN_GB: 'EN_GB', // English (United Kingdom)
  ET: 'ET', // Estonian
  FI: 'FI', // Finnish
  FR: 'FR', // French
  KA: 'KA', // Georgian
  DE: 'DE', // German
  EL: 'EL', // Greek
  GU: 'GU', // Gujarati
  HI: 'HI', // Hindi
  HU: 'HU', // Hungarian
  IS: 'IS', // Icelandic
  ID: 'ID', // Indonesian
  IT: 'IT', // Italian
  JA: 'JA', // Japanese
  KN: 'KN', // Kannada
  KK: 'KK', // Kazakh
  KO: 'KO', // Korean
  LV: 'LV', // Latvian
  LT: 'LT', // Lithuanian
  MK: 'MK', // Macedonian
  MS: 'MS', // Malay
  ML: 'ML', // Malayalam
  MR: 'MR', // Marathi
  MN: 'MN', // Mongolian
  NO: 'NO', // Norwegian
  FA: 'FA', // Persian
  PL: 'PL', // Polish
  PT: 'PT', // Portuguese (Legacy)
  PT_BR: 'PT_BR', // Portuguese (Brazil)
  PT_PT: 'PT_PT', // Portuguese (Portugal)
  PA: 'PA', // Punjabi
  RO: 'RO', // Romanian
  RU: 'RU', // Russian
  SR: 'SR', // Serbian
  SK: 'SK', // Slovak
  SL: 'SL', // Slovenian
  SO: 'SO', // Somali
  ES: 'ES', // Spanish
  SW: 'SW', // Swahili
  SV: 'SV', // Swedish
  TL: 'TL', // Tagalog
  TA: 'TA', // Tamil
  TE: 'TE', // Telugu
  TH: 'TH', // Thai
  TR: 'TR', // Turkish
  UK: 'UK', // Ukrainian
  UR: 'UR', // Urdu
  VI: 'VI' // Vietnamese
} as const

export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode]

export const languageMappping: Record<LanguageCode, string> = {
  SQ: 'Albanian',
  AM: 'Amharic',
  AR: 'Arabic',
  HY: 'Armenian',
  BN: 'Bengali',
  BS: 'Bosnian',
  BG: 'Bulgarian',
  MY: 'Burmese',
  CA: 'Catalan',
  ZH: 'Chinese (Legacy)',
  ZH_CN: 'Chinese (Simplified)',
  ZH_TW: 'Chinese (Traditional)',
  HR: 'Croatian',
  CS: 'Czech',
  DA: 'Danish',
  NL: 'Dutch',
  EN: 'English (Legacy)',
  EN_US: 'English (United States)',
  EN_GB: 'English (United Kingdom)',
  ET: 'Estonian',
  FI: 'Finnish',
  FR: 'French',
  KA: 'Georgian',
  DE: 'German',
  EL: 'Greek',
  GU: 'Gujarati',
  HI: 'Hindi',
  HU: 'Hungarian',
  IS: 'Icelandic',
  ID: 'Indonesian',
  IT: 'Italian',
  JA: 'Japanese',
  KN: 'Kannada',
  KK: 'Kazakh',
  KO: 'Korean',
  LV: 'Latvian',
  LT: 'Lithuanian',
  MK: 'Macedonian',
  MS: 'Malay',
  ML: 'Malayalam',
  MR: 'Marathi',
  MN: 'Mongolian',
  NO: 'Norwegian',
  FA: 'Persian',
  PL: 'Polish',
  PT: 'Portuguese (Legacy)',
  PT_BR: 'Portuguese (Brazil)',
  PT_PT: 'Portuguese (Portugal)',
  PA: 'Punjabi',
  RO: 'Romanian',
  RU: 'Russian',
  SR: 'Serbian',
  SK: 'Slovak',
  SL: 'Slovenian',
  SO: 'Somali',
  ES: 'Spanish',
  SW: 'Swahili',
  SV: 'Swedish',
  TL: 'Tagalog',
  TA: 'Tamil',
  TE: 'Telugu',
  TH: 'Thai',
  TR: 'Turkish',
  UK: 'Ukrainian',
  UR: 'Urdu',
  VI: 'Vietnamese'
}
