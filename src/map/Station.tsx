import { TripOrigin } from '@mui/icons-material'
import { Box, IconButton, Popover } from '@mui/material'
import { useState } from 'react'
import MediaCard from './NameAndImage'

export const SCALE_FACTOR = 30

export enum lines {
    T5 = 't5',
    T4 = 't4',
}

export const lineColours: Record<lines, string | null> = {
    [lines.T5]: 'magenta',
    [lines.T4]: 'red',
}

export const Station = ({
    line,
    name,
    x,
    y,
    images,
}: {
    line: lines
    name: string
    x: number
    y: number
    images: string[]
}) => {
    const color: string = lineColours[line] || 'white'

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
            }}
        >
            <IconButton
                aria-label={name}
                id={name}
                sx={{ padding: '2px' }}
                onClick={handleClick}
            >
                <TripOrigin sx={{ color, fontSize: '8px' }} />
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <MediaCard name={name} images={images} />
            </Popover>
        </Box>
    )
}
