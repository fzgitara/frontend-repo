import TextField from '@mui/material/TextField';

const InputText = 
  (props: { label: string; value: any, onChange: any, type: string }) => {
    const { label, value, onChange, type } = props;

    return (
      <TextField
        label={label}
        variant='filled'
        value={value}
        onChange={onChange}
        type={type}
      />
    );
};

export default InputText;