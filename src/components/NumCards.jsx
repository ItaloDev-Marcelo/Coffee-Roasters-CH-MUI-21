
import {Stack,  Typography} from '@mui/material';

export default function NumCard({Num, Title, Text, index}) {
   return  (
      <Stack key={index} component='article'>
                           <Typography variant='h4'> {Num} </Typography>
                           <Typography variant='h5'> {Title} </Typography>
                           <Typography variant='p'> {Text} </Typography>
     </Stack>
    )

}
