import { Box, Typography } from "@mui/material";

export default function MenuTitle({ title }) {
  return (
    <Box
      sx={{
        borderBottom: '1px solid white',
        color: 'white',
        mb: 1,
      }}
    >
      <Typography variant='h6'>
        {title}
      </Typography>
    </Box>
  );
}