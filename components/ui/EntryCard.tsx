import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';

interface Props {
    entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
    const { description, createdAt } = entry;

    return (
        <Card
            // sx={{ ma }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{ description }</Typography> 
                </CardContent>
                
                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}> 
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
