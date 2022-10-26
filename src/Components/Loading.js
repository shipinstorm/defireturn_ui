import { CircularProgress } from "@mui/material";
import { Box } from '@mui/material';

function Loading () {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="success" >
        <span>Loading...</span>
      </CircularProgress>
    </Box>
  )
}

export default Loading;