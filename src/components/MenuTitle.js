import { Box, Typography } from "@mui/material";

export default function MenuTitle({ title }) {
  return (
    <Box
      sx={{
        borderBottom: '1px solid white',
        color: 'text.main',
        mb: 2,
      }}
    >
      <Typography variant='h6'>
        {title}
      </Typography>
    </Box>
  );
}