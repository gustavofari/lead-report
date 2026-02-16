/**
 * Calcula a porcentagem entre dois valores para uso em barras de progresso.
 * @param current - O valor atual observado.
 * @param total - O valor máximo ou cota permitida.
 * @returns Um número entre 0 e 100, limitado para não quebrar o layout.
 */

export const calculatePercentage = (current: number, total: number): number => {
  if (total === 0) return 0
  const percentage = (current / total) * 100
  return percentage
}

/**
 * Formata um número para uma representação compacta em milhares.
 * @param value - O número inteiro a ser formatado
 * @returns Uma string formatada. Retorna "0k" se o valor for inválido.
 */

export const formatCompactNumber = (value: number): string => {
  const formatted = (value / 1000).toFixed(1)
  return formatted
}
