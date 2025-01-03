export const Models = {
  GPT4O: 'gpt-4o',
  GPT4O_2024_11_20: 'gpt-4o-2024-11-20',
  GPT4O_MINI: 'gpt-4o-mini',
  GPT4O_MINI_2024_07_18: 'gpt-4o-mini-2024-07-18'
} as const

export type Models = (typeof Models)[keyof typeof Models]
