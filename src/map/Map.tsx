import { SCALE_FACTOR, Station, lines } from './Station'
import './style.css'

const stations = [
    {
        id: 't5s1',
        line: lines.T5,
        name: 'richmond',
        x: 2.5,
        y: 2.8,
    },
    {
        id: 't5s2',
        line: lines.T5,
        name: 'east-richmond',
        x: 3,
        y: 2.8,
    },
    {
        id: 't5s3',
        line: lines.T5,
        name: 'richmond-east-richmond',
        x: 3.5,
        y: 2.8,
    },
]

export const Map = () => {
    const styles = {
        width: `${SCALE_FACTOR * 20}px`,
        height: `${SCALE_FACTOR * 20}px`,
        position: 'relative',
        backgroundColor: '#efefef',
        zIndex: 1,
    } as React.CSSProperties

    return (
        <div style={styles}>
            {stations.map((station) => (
                <Station
                    key={station.id}
                    line={station.line}
                    name={station.name}
                    x={station.x}
                    y={station.y}
                />
            ))}
        </div>
    )
}
