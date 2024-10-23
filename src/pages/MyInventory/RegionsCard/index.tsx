import { SampleInventoryData } from "@/data/data";
import { makeCurrencyFriendly } from "@/utils/format";
import { faSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DonutChart } from "@mantine/charts";
import { Box, Card, Flex, Text, Title } from "@mantine/core";
import classes from './RegionsCard.module.css';
import { chartColors } from "@/theme/colors";

const regionDataGrouped = Object.groupBy(SampleInventoryData, ({ region }) => region || '')
const regionDataSorted = Object.keys(regionDataGrouped).sort((a,b) => (
  (regionDataGrouped[b] ? regionDataGrouped[b].length : 0) - (regionDataGrouped[a] ? regionDataGrouped[a].length : 0)
)).reduce((acc, key) => (
  (acc[key]=regionDataGrouped[key]), acc), {} as keyof typeof regionDataGrouped
);

const chartData = Object.entries(regionDataSorted).map((e, i) => ({
  name: e[0],
  value: e[1].length,
  color: chartColors[i]
}))

export function RegionsCard() {
  const lowSum = SampleInventoryData.reduce((n, { estimate }) => n + (estimate?.low || 0), 0)
  const highSum = SampleInventoryData.reduce((n, { estimate }) => n + (estimate?.high || 0), 0)
  return (
    <Card flex={1}>
      <Title flex={1} order={2}>Regions</Title>
      <Flex gap="sm">
        <Box className={classes['chart-container']}>
          <DonutChart
            data={chartData}
            paddingAngle={3}
            withTooltip={false}
            startAngle={-270}
            className={classes.chart}
          />
          <Flex className={classes['chart-label-container']}>
            <Text className={classes['chart-label']}>{makeCurrencyFriendly(lowSum, highSum)}</Text>
            <Text className={classes['chart-sub-label']}>{SampleInventoryData.length} items</Text>
          </Flex>
        </Box>
        <Box flex={1}>
          {chartData.map((e, i) => {
            const filtered = Object.keys(regionDataSorted)
            .filter(key => e.name.includes(key))
            .reduce((obj, key) => {
              obj[key] = regionDataSorted[key];
              return obj;
            }, {});

            const filteredArr = Object.values(filtered)
            const lowSum = filteredArr[0].reduce((n, { estimate }) => n + (estimate?.low || 0), 0)
            const highSum = filteredArr[0].reduce((n, { estimate }) => n + (estimate?.high || 0), 0)
            return (
            <Box key={i} mb="xs">
              <Flex className={classes['legend-container']}>
                <Text c={e.color}>
                  <FontAwesomeIcon icon={faSquare} />
                </Text>
                <Box>
                  <Text className={classes['legend-name']}>{e.name}</Text>
                  <Text className={classes['legend-count']}>{e.value} item{e.value !== 1 ? 's' : ''}</Text>
                </Box>
                <Text className={classes['legend-value']}>{makeCurrencyFriendly(lowSum, highSum)}</Text>
              </Flex>
            </Box>
          )})}
        </Box>
      </Flex>
    </Card>
  )
}