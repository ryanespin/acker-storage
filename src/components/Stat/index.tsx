import { Box, BoxProps, Flex } from '@mantine/core';
import classes from './Stat.module.css';

interface StatProps extends BoxProps {
  children?: React.ReactNode;
}

export function Stat(props: StatProps) {
  return <Box<'dl'> className={classes.stat} component="dl" {...props} />;
}

function StatGroup(props: StatProps) {
  return <Flex className={classes.group} role="group" {...props} />;
}

function StatHelpText(props: StatProps) {
  return <Box<'dd'> className={classes['help-text']} component="dd" {...props} />;
}

function StatLabel(props: StatProps) {
  return <Box<'dt'> className={classes.label} component="dt" {...props} />;
}

function StatNumber(props: StatProps) {
  return <Box<'dd'> className={classes.number} component="dd" {...props} />;
}

Stat.Group = StatGroup;
Stat.HelpText = StatHelpText;
Stat.Label = StatLabel;
Stat.Number = StatNumber;
