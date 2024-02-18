import { Box, IconButton, Popover } from '@mui/material';
import { useState } from 'react';
import { lineColours, lines } from '../common/constants';
import { MediaCard } from './NameAndImage';

export const Station = ({
    id,
    line,
    name,
    x,
    y,
}: {
    id: string;
    line: lines;
    name: string;
    x: number;
    y: number;
}) => {
    const color: string = lineColours[line] || 'white';

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const stationCode = id.split(':')[1]

    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                padding: 0,
                margin: 0,
                width: '12px',
                height: '12px',
                display: 'flex',
                zIndex: 3,
            }}
        >
            <IconButton
                aria-label={name}
                id={name}
                sx={{ padding: '2px' }}
                onClick={handleClick}
            >
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                        height: '8px',
                        width: '8px',
                        border: `2px solid ${color}`,
                        borderRadius: '100%',
                    }}
                />
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <MediaCard name={name} code={stationCode} />
            </Popover>
        </Box>
    );
};
