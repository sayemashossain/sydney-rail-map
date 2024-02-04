import { Station, lines } from './Station';

export type StationProps = {
    id: string;
    line: lines;
    name: string;
    x: number;
    y: number;
    images: string[];
};
// prettier-ignore
const t5stations = [
    { id: 't5:RCD', x: 90, y: 200, images: [], line: lines.T5, name: 'Richmond' },
    { id: 't5:ERD', x: 90, y: 215, images: [], line: lines.T5, name: 'East Richmond' },    
    { id: 't5:CRD', x: 90, y: 230, images: [], line: lines.T5, name: 'Clarendon' },
    { id: 't5:WSR', x: 90, y: 245, images: [], line: lines.T5, name: 'Windsor' },
    { id: 't5:MUV', x: 90, y: 260, images: [], line: lines.T5, name: 'Mulgrave' },
    { id: 't5:VYR', x: 90, y: 275, images: [], line: lines.T5, name: 'Vineyard' },
    { id: 't5:RVS', x: 90, y: 290, images: [], line: lines.T5, name: 'Riverstone' },
    { id: 't5:SFS', x: 90, y: 305, images: [], line: lines.T5, name: 'Schofields' },
    { id: 't5:QKH', x: 90, y: 320, images: [], line: lines.T5, name: 'Quakers Hill' },
    { id: 't5:MYG', x: 90, y: 335, images: [], line: lines.T5, name: 'Marayong' },
    { id: 't5:BAK', x: 1, y: 2, images: [], line: lines.T5, name: 'Blacktown' },
    { id: 't5:SEV', x: 1, y: 2, images: [], line: lines.T5, name: 'Seven Hills' },
    { id: 't5:TGB', x: 1, y: 2, images: [], line: lines.T5, name: 'Toongabbie' },
    { id: 't5:PDH', x: 1, y: 2, images: [], line: lines.T5, name: 'Pendle Hill' },
    { id: 't5:WVL', x: 1, y: 2, images: [], line: lines.T5, name: 'Wentworthville' },
    { id: 't5:WMD', x: 1, y: 2, images: [], line: lines.T5, name: 'Westmead' },
    { id: 't5:PAR', x: 1, y: 2, images: [], line: lines.T5, name: 'Parramatta' },
    { id: 't5:HPK', x: 1, y: 2, images: [], line: lines.T5, name: 'Harris Park' },
    { id: 't5:MLN', x: 1, y: 2, images: [], line: lines.T5, name: 'Merrylands' },
    { id: 't5:GUD', x: 1, y: 2, images: [], line: lines.T5, name: 'Guildford' },
    { id: 't5:YNR', x: 1, y: 2, images: [], line: lines.T5, name: 'Yennora' },
    { id: 't5:FFL', x: 1, y: 2, images: [], line: lines.T5, name: 'Fairfield' },
    { id: 't5:CVE', x: 1, y: 2, images: [], line: lines.T5, name: 'Canley Vale' },
    { id: 't5:CAB', x: 1, y: 2, images: [], line: lines.T5, name: 'Cabramatta' },
    { id: 't5:WWF', x: 1, y: 2, images: [], line: lines.T5, name: 'Warwick Farm' },
    { id: 't5:LPO', x: 1, y: 2, images: [], line: lines.T5, name: 'Liverpool' },
    { id: 't5:CSL', x: 1, y: 2, images: [], line: lines.T5, name: 'Casula' },
    { id: 't5:GFD', x: 1, y: 2, images: [], line: lines.T5, name: 'Glenfield' },
    { id: 't5:EDP', x: 1, y: 2, images: [], line: lines.T5, name: 'Edmondson Park' },
    { id: 't5:LEP', x: 1, y: 2, images: [], line: lines.T5, name: 'Leppington' },
]

const t5connections = [
    {}
]

const stations = [...t5stations];

export const Map = () => {
    const styles = {
        width: `1000px`,
        height: `1000px`,
        position: 'relative',
        backgroundColor: '#efefef',
        zIndex: 1,
    } as React.CSSProperties;

    let x = 200;
    for (let y = 0; y < 10; y++) {
        console.log(x);
        x = x + 15;
    }

    return (
        <div style={styles}>
            {stations.map((station) => (
                <Station
                    key={station.id}
                    line={station.line}
                    name={station.name}
                    x={station.x}
                    y={station.y}
                    images={station.images}
                />
            ))}
        </div>
    );
};
