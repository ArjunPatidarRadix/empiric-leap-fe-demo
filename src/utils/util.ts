export function getOverPercentage(
  estimatedCost: number,
  actualCost: number
): string {
  return (((actualCost - estimatedCost) / estimatedCost) * 100).toFixed(1);
}
