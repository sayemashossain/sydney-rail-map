import { lines } from '../common/constants';
import { connections, stations } from '../common/data';
import { Connection } from './Connection';
import { Station } from './Station';

export type StationProps = {
    id: string;
    line: lines;
    name: string;
    x: number;
    y: number;
};

export const Map = () => {
    const styles = {
        width: `1000px`,
        height: `1000px`,
        position: 'relative',
        backgroundColor: '#efefef',
        zIndex: 1,
    } as React.CSSProperties;

    return (
        <div style={styles}>
            {connections.map((connection) => (
                <Connection
                    key={`${connection.start}-${connection.end}-${connection.line}`}
                    {...connection}
                />
            ))}
            {stations.map((station) => (
                <Station
                    key={station.id}
                    id={station.id}
                    line={station.line}
                    name={station.name}
                    x={station.x}
                    y={station.y}
                />
            ))}
        </div>
    );
};
