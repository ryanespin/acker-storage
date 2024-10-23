import { BackgroundImage, Badge, Box, Card, CardProps, Flex, rem, Text, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from './MyInventoryListItem.module.css';
import { InventoryItemProps } from "@/types";

interface MyInventoryListItemProps extends CardProps, InventoryItemProps {}

export function MyInventoryListItem(props: MyInventoryListItemProps) {
  const {
    appellation,
    bottleSize,
    box,
    condition,
    designation,
    imageSrc = '/images/placeholder-bottle.png',
    producer,
    quantity,
    region,
    source,
    vintage,
    wineName,
    ...otherProps
  } = props;
  return (
    <Card
      className={classes.card}
      component={Link}
      padding="md"
      to="/inventoryDetail"
      withBorder={false}
      {...otherProps}
    >
      <BackgroundImage
        bgsz="contain"
        bgr="no-repeat"
        src={imageSrc}
        w={rem(80)}
      />
      <Flex className={classes.wrapper}>
        <Flex className={classes.header}>
          <Text fw={700} size="sm">
            Box #{box}
          </Text>
          <Badge>
            {quantity} {bottleSize}{quantity !== 1 && 's'}
          </Badge>
        </Flex>
        <Text size="lg">{vintage} {producer} {wineName}</Text>
        <Flex className={classes['trait-list']}>
          {region && <Box className={classes['trait-list-item']}>{region}</Box>}
          {designation && <Box className={classes['trait-list-item']}>{designation}</Box>}
          {source && <Box className={classes['trait-list-item']}>{source}</Box>}
          {(condition?.long || condition?.short) && (
            <Tooltip label={condition.long || condition.short}>
              <Box className={classes['trait-list-item']}>{condition.short || condition.long}</Box>
            </Tooltip>
          )}
          {appellation && <Box className={classes['trait-list-item']}>{appellation}</Box>}
        </Flex>
      </Flex>
    </Card>
  )
}