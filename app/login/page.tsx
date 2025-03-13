'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

import InputText from '@/components/InputText';
import Button from '@/components/CustomButton';
import { userLogin } from '../../store/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state: any) => state.auth.user);
  const loading = useSelector((state: any) => state.auth.loading);
  const dispatch = useDispatch<any>();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/main');
      router.refresh();
    }
  }, [user, dispatch]);

  const handleChangeEmail = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    dispatch(userLogin(data));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} height='100vh'>
        <Grid display='flex' justifyContent='center' alignItems='center' size='grow'>
          <Stack spacing={2}>
            <InputText label='Email' type='text' onChange={handleChangeEmail} value={email} />
            <InputText label='Password' type='password' onChange={handleChangePassword} value={password} />
            <Button onClick={handleLogin} loading={loading}>Login</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
