export const transformToCurrency = (value: number): string => {
  return "R$ " + value.toFixed(2).replace(".", ",");
};

export const sortNumbers = (numbers: number[]): number[] => {
  return numbers.slice().sort((a, b) => a - b);
};
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("pt-BR");
};
