import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { useImage } from '../common/useImage';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const MediaCard = ({
    name,
    code,
}: {
    name: string;
    code: string;
}) => {
    const image = useImage(code);

    return (
        <Card sx={{ width: 200 }}>
            <CardMedia sx={{ height: 200 }} image={image} title={name} />

            <CardContent
                sx={{
                    p: 1,
                    pb: 0,
                }}
            >
                <Typography variant="h6">{name}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    color="primary"
                    component="label"
                >
                    Upload
                    <VisuallyHiddenInput type="file" />
                </Button>
            </CardActions>
        </Card>
    );
};
