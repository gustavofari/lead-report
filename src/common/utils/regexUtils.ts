/**
 * @param text - O termo de busca vindo do usuário.
 */

export const escapeRegExp = (text: string): string => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
