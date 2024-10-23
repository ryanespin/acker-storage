import { ActionIcon, Autocomplete, Badge, Box, Card, Collapse, Flex, rem, Select, Text, Title, Tooltip } from '@mantine/core';
import classes from './MyInventoryCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDownload, faSliders } from '@fortawesome/sharp-light-svg-icons';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';
import { useDisclosure } from '@mantine/hooks';
import { MyInventoryListItem } from '../MyInventoryListItem';
import { SampleInventoryData } from '@/data/data';

export function MyInventoryCard() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Card className={classes.card}>
      <Flex className={classes.header}>
        <Title order={2}>My Inventory</Title>
        <Tooltip label="Download Excel File" position="left" withArrow>
          <ActionIcon>
            <FontAwesomeIcon icon={faDownload} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <Flex className={classes.header}>
        <Text>
          <Text fw={700} span>{SampleInventoryData.length.toLocaleString()}</Text> items out of <Text fw={700} span>{SampleInventoryData.length.toLocaleString()}</Text> total
        </Text>
        <Flex gap={rem(4)}>
          <Select
            allowDeselect={false}
            className={classes.dropdown}
            data={[
              'Appellation',
              'Box Number',
              'Condition',
              'Designation',
              'Estimate',
              'Location',
              'Quantity',
              'Region',
              'Source',
              'Wine Name',
            ]}
            defaultValue="Wine Name"
            label="Sort By"
            variant="unstyled"
            styles={{
              root: {
                alignItems: 'baseline',
                display: 'flex',
                flexDirection: 'row',
                gap: rem(4)
              },
              input: {
                color: 'var(--mantine-color-acker-red-9)',
                textAlign: 'center'
              },
              section: {
                color: 'var(--mantine-color-acker-red-9)'
              },
              wrapper: {
                width: rem(130)
              }
            }}
            rightSection={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
          />
        </Flex>
      </Flex>
      <Flex className={classes.header}>
        <Autocomplete
          flex={1}
          leftSection={<FontAwesomeIcon icon={faSearch} />}
          placeholder="Search..."
          radius="xl"
        />
        <Box pos="relative">
          <Badge
            size="xs"
            circle
            pos="absolute"
            top={rem(-8)}
            right={rem(-8)}
            style={{ zIndex: 1 }}
            radius="xl"
          >
            1
          </Badge>
          <ActionIcon onClick={toggle}>
            <FontAwesomeIcon icon={faSliders} />
          </ActionIcon>
        </Box>
      </Flex>
      <Collapse in={opened}>
        <Flex className={classes.header}>
          <Select
            flex={1}
            radius="xl"
            placeholder="Bottle Size..."
            data={[
              'Bottle',
              'Half-Bottle',
              'Magnum'
            ]}
            searchable
            clearable
          />
          <Select
            flex={1}
            radius="xl"
            placeholder="Region..."
            searchable
            clearable
          />
          <Select
            flex={1}
            radius="xl"
            placeholder="Tag..."
            searchable
            clearable
          />
        </Flex>
      </Collapse>
      {SampleInventoryData.map((i, k) => (
        <MyInventoryListItem key={k} {...i} />
      ))}
    </Card>
  );
}
