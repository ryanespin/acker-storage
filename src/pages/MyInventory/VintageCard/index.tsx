import { SampleInventoryData } from "@/data/data";
import { InventoryItemProps } from "@/types";
import { BarChart } from "@mantine/charts";
import { Card, Title } from "@mantine/core";

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