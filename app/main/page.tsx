'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/CustomButton';
import { fetchAllUsers, click } from '../../store/actions';

const Main = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const loading = useSelector((state: any) => state.user.loading);
  const users = useSelector((state: any) => state.user.users);

  useEffect(() => {
    router.refresh();
  }, []);

  const fetchUsers = () => {
    dispatch(fetchAllUsers());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} height='100vh'>
        <Grid display='flex' justifyContent='center' alignItems='center' size='grow'>
          <Stack spacing={2}>
            <Button onClick={fetchUsers} loading={loading}>Fetch Users</Button>
            <Stack>
              {users?.map((user: any) => {
                return (
                  <div key='user.username'>
                    <h3>{user.username}</h3>
                    <ul>
                      <li>{user.totalAverageWeightRatings}</li>
                      <li>{user.numberOfRents}</li>
                      <li>{new Date(user.recentlyActive).toDateString()}</li>
                    </ul>
                  </div>
                );
              })}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;