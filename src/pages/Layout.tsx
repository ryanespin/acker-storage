import { Header } from '@/components/Header';
import { Box, BoxProps } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function Layout(props: BoxProps) {
  return (
    <>
      <Header />
      <Box p="xl" {...props}>
        <Outlet />
      </Box>
    </>
  );
}
