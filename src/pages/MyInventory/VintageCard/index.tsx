import { SampleInventoryData } from "@/data/data";
import { chartColors } from "@/theme/colors";
import { InventoryItemProps } from "@/types";
import { BarChart } from "@mantine/charts";
import { Card, Title } from "@mantine/core";

const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

const vintageDataGrouped = Object.groupBy(SampleInventoryData, ({ vintage }) => vintage || '')

function getQuanitySum(i: InventoryItemProps[]) {
  return i.reduce((n, c) => n + (c.quantity || 0), 0)
}

const chartData = Object.entries(vintageDataGrouped).map((e) => {
  const year = `'${e[0].toString().substring(2)}`
  return ({
    year,
    quantity: e[1] && getQuanitySum(e[1] || [0])
  })
})

export function VintageCard() {
  return (
    <Card flex={1}>
      <Title flex={1} order={2}>Vintage</Title>
      <BarChart
        h={300}
        data={chartData}
        dataKey="year"
        series={[
          { name: 'quantity' },
        ]}
        tickLine="y"
      />
    </Card>
  )
}