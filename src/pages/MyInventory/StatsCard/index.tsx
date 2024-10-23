import { Stat } from "@/components/Stat";
import { SampleInventoryData } from "@/data/data";
import { makeCurrencyFriendly } from "@/utils/format";
import { Card, Title } from "@mantine/core";

export function StatsCard() {
  const lowSum = SampleInventoryData.reduce((n, { estimate }) => n + (estimate?.low || 0), 0)
  const highSum = SampleInventoryData.reduce((n, { estimate }) => n + (estimate?.high || 0), 0)
  const latestEntry = new Date(Math.max(...SampleInventoryData.map(e => new Date(e.latestAddition as number).getTime())));;
  return (
    <Card flex={1}>
      <Title order={2}>
        Stats
      </Title>
      <Stat.Group>
        <Stat>
          <Stat.Label>Total Items</Stat.Label>
          <Stat.Number>{SampleInventoryData.length.toLocaleString()}</Stat.Number>
        </Stat>
        <Stat>
          <Stat.Label>Estimated Value</Stat.Label>
          <Stat.Number>{makeCurrencyFriendly(lowSum, highSum)}</Stat.Number>
        </Stat>
        <Stat>
          <Stat.Label>Most Recent Addition</Stat.Label>
          <Stat.Number>{latestEntry.toLocaleDateString()}</Stat.Number>
        </Stat>
      </Stat.Group>
    </Card>
  )
}