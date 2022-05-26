import Button from '@mui/material/Button';

export default function CustomButton(props) {
  const { children, ...rest } = props;

  return (
    <Button variant='contained' sx={{ m: 1 }} {...rest}>
      {children}
    </Button>
  );
}
