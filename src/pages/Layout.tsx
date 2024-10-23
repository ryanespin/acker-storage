import { Outlet } from 'react-router-dom';
import { Box, BoxProps } from '@mantine/core';
import { Header } from '@/components/Header';

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
