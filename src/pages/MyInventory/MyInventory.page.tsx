import { Container, Flex } from '@mantine/core';
import { MyInventoryCard } from './MyInventoryCard';
import { RegionsCard } from './RegionsCard';
import { StatsCard } from './StatsCard';
import { VintageCard } from './VintageCard';
import classes from './MyInventory.module.css';

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
