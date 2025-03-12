import Button from '@mui/material/Button';
import { ReactNode } from 'react';

const CustomButton = (
  props: { children: ReactNode, onClick: any, loading: boolean }
) => {
  const { children, onClick, loading } = props;

  return (
    <Button
      variant='contained'
      onClick={onClick}
      loading={loading}
    >
      {children}
    </Button>
  );
};

export default CustomButton;