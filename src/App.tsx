// Supports weights 200-900
import '@fontsource-variable/nunito-sans';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import './theme/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
