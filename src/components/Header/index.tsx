import { ActionIcon, Button, Container, Group, Image } from '@mantine/core';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/pro-solid-svg-icons';

export function Header() {
  return (
    <header className={classes.header}>
      <Container className={classes.inner} size="xl">
        <Image className={classes.logo} src="/images/Logo-Dark.png" />
        <Group>
          <Button color="white" variant="subtle">My Inventory</Button>
          <ActionIcon color="white" variant="subtle">
            <FontAwesomeIcon icon={faUser} />
          </ActionIcon>
        </Group>
      </Container>
    </header>
  )
}
