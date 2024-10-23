import { Container, Flex } from '@mantine/core';
import { MyInventoryCard } from './MyInventoryCard';
import { StatsCard } from './StatsCard';
import classes from './MyInventory.module.css'
import { RegionsCard } from './RegionsCard';
import { VintageCard } from './VintageCard';

export function MyInventory() {
  return (
    <Container className={classes.container} size="xl">
      <MyInventoryCard />
      <Flex className={classes['container-right']}>
        <StatsCard />
        <RegionsCard />
        <VintageCard />
      </Flex>
    </Container>
  );
}
