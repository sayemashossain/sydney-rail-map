import { lines } from '../constants';

// prettier-ignore
export const t2stations = [
    { id: 't2:PAR', x: 280 - 10, y: 445 + 10, line: lines.T2, name: 'Parramatta' },
    { id: 't2:HPK', x: 295, y: 480, line: lines.T2, name: 'Harris Park' },
    { id: 't2:MLN', x: 250 + 10, y: 505 + 10, line: lines.T2, name: 'Merrylands' },
    { id: 't2:GUD', x: 235 + 10, y: 520 + 10, line: lines.T2, name: 'Guildford' },
    { id: 't2:YNR', x: 235 + 10, y: 535 + 10, line: lines.T2, name: 'Yennora' },
    { id: 't2:FFL', x: 235 + 10, y: 550 + 10, line: lines.T2, name: 'Fairfield' },
    { id: 't2:CVE', x: 235 + 10, y: 565 + 10, line: lines.T2, name: 'Canley Vale' },
    { id: 't2:CAB', x: 235 + 10, y: 580 + 10, line: lines.T2, name: 'Cabramatta' },
    { id: 't2:WWF', x: 235 + 10, y: 595 + 10, line: lines.T2, name: 'Warwick Farm' },
    { id: 't2:LPO', x: 235 + 10, y: 610 + 10, line: lines.T2, name: 'Liverpool' },
    { id: 't2:CSL', x: 235 + 10, y: 625 + 10, line: lines.T2, name: 'Casula' },
    { id: 't2:GFD', x: 235 + 10, y: 640 + 10, line: lines.T2, name: 'Glenfield' },
    { id: 't2:EDP', x: 125 + 10, y: 640 + 10, line: lines.T2, name: 'Edmondson Park' },
    { id: 't2:LEP', x: 110 + 10, y: 640 + 10, line: lines.T2, name: 'Leppington' },
];

export const t2connections = [
    { start: 't2:PAR', end: 't2:HPK', line: lines.T2 },
    { start: 't2:HPK', end: 't2:MLN', line: lines.T2 },
    { start: 't2:MLN', end: 't2:GUD', line: lines.T2 },
    { start: 't2:GUD', end: 't2:YNR', line: lines.T2 },
    { start: 't2:YNR', end: 't2:FFL', line: lines.T2 },
    { start: 't2:FFL', end: 't2:CVE', line: lines.T2 },
    { start: 't2:CVE', end: 't2:CAB', line: lines.T2 },
    { start: 't2:CAB', end: 't2:WWF', line: lines.T2 },
    { start: 't2:WWF', end: 't2:LPO', line: lines.T2 },
    { start: 't2:LPO', end: 't2:CSL', line: lines.T2 },
    { start: 't2:CSL', end: 't2:GFD', line: lines.T2 },
    { start: 't2:GFD', end: 't2:EDP', line: lines.T2 },
    { start: 't2:EDP', end: 't2:LEP', line: lines.T2 },
];
