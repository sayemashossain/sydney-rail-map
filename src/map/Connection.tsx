import { Box } from '@mui/material';
import { lines, lineColours } from '../common/constants';
import { stations } from '../common/data';

export const Connection = ({
    line,
    start,
    end,
}: {
    line: lines;
    start: string;
    end: string;
}) => {
    const color: string = lineColours[line] || 'white';

    const startStation = stations.find((station) => station.id === start);
    const endStation = stations.find((station) => station.id === end);

    if (!startStation || !endStation) return null;

    const deltaX = endStation.x - startStation.x;
    const deltaY = endStation.y - startStation.y;

    const height = Math.pow(Math.pow(deltaX, 2) + Math.pow(deltaY, 2), 0.5);

    const tanAngle = Math.atan(deltaX / deltaY);
    let angle;

    if (deltaX >= 0 && deltaY >= 0) angle = -tanAngle;
    if (deltaX >= 0 && deltaY < 0) angle = tanAngle - Math.PI / 2;
    if (deltaX < 0 && deltaY >= 0) angle = -tanAngle;
    if (deltaX < 0 && deltaY < 0) angle = -tanAngle + Math.PI;

    console.log({ start });

    return (
        <Box
            sx={{
                position: 'absolute',
                width: '4px',
                height: height,
                top: `${startStation.y + 6}px`,
                left: `${startStation.x + 4}px`,
                backgroundColor: `${color}`,
                zIndex: 2,
                transformOrigin: 'top center',
                transform: `rotateZ(${angle}rad)`,
            }}
        />
    );
};
