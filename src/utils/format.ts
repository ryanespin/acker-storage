const USFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  compactDisplay: 'short',
  maximumSignificantDigits: 3,
})

export function makeCurrencyFriendly(num: number, high: number) {
  if(num >= 1000000) {
    const range = USFormat.formatRangeToParts(num/1000000, high/1000)
    const parts = Object.groupBy(range, ({ source }) => source);
    return `${parts.startRange?.map(v => v.value).join('')}M${parts.shared?.map(v => v.value).join('')}${parts.endRange?.map(v => v.value).join('')}M`;
  }
  if(num >= 1000) {
    const range = USFormat.formatRangeToParts(num/1000, high/1000)
    const parts = Object.groupBy(range, ({ source }) => source);
    return `${parts.startRange?.map(v => v.value).join('')}K${parts.shared?.map(v => v.value).join('')}${parts.endRange?.map(v => v.value).join('')}K`;
  }
  return USFormat.formatRange(num, high);
}