import { TripOrigin } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import './style.css'

export const SCALE_FACTOR = 30

export enum lines {
    T5 = 't5',
    T4 = 't4',
}

const lineColours: Record<lines, string | null> = {
    [lines.T5]: 'magenta',
    [lines.T4]: 'red',
}

export const Station = ({
    line,
    name,
    x,
    y,
}: {
    line: lines
    name: string
    x: number
    y: number
}) => {
    const color: string = lineColours[line] || 'white'

    // <div style={styles} id={name}></div>
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
            }}
        >
            <IconButton aria-label={name} id={name} sx={{ padding: '2px' }}>
                <TripOrigin sx={{ color, fontSize: '8px' }} />
            </IconButton>
        </Box>
    )
}
