'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/CustomButton';
import { fetchAllUsers, click } from '../../store/actions';

const Main = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const users = useSelector((state: any) => state.user.users);
  const loading = useSelector((state: any) => state.user.loading);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) router.push('/');
  }, []);

  const fetchUsers = () => {
    dispatch(fetchAllUsers());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} height='100vh'>
        <Grid display='flex' justifyContent='center' alignItems='center' size='grow'>
          <Button onClick={fetchUsers} loading={loading}>Fetch Users</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;