import { t5stations, t5connections } from './byLineData/t5';
import { lines } from './constants';

/*  ***********************************************************************
 ************************** 	       T1    	 **************************
 *********************************************************************** */

// T1

// prettier-ignore
export const t1stations = [
    { id: 't1:RCD', x: 120, y: 190, line: lines.T1, name: 'Richmond' },
    { id: 't1:ERD', x: 120, y: 205, line: lines.T1, name: 'East Richmond' },    
    { id: 't1:CRD', x: 120, y: 220, line: lines.T1, name: 'Clarendon' },
    { id: 't1:WSR', x: 120, y: 235, line: lines.T1, name: 'Windsor' },
    { id: 't1:MUV', x: 120, y: 250, line: lines.T1, name: 'Mulgrave' },
    { id: 't1:VYR', x: 120, y: 265, line: lines.T1, name: 'Vineyard' },
    { id: 't1:RVS', x: 120, y: 280, line: lines.T1, name: 'Riverstone' },
    { id: 't1:SFS', x: 120, y: 295, line: lines.T1, name: 'Schofields' },
    { id: 't1:QKH', x: 120, y: 310, line: lines.T1, name: 'Quakers Hill' },
    { id: 't1:MYG', x: 120, y: 325, line: lines.T1, name: 'Marayong' },
    { id: 't1:BAK', x: 185, y: 390, line: lines.T1, name: 'Blacktown' },
    { id: 't1:SEV', x: 200, y: 390, line: lines.T1, name: 'Seven Hills' },
    { id: 't1:TGB', x: 215, y: 390, line: lines.T1, name: 'Toongabbie' },
    { id: 't1:PDH', x: 230, y: 390, line: lines.T1, name: 'Pendle Hill' },
    { id: 't1:WVL', x: 245, y: 390, line: lines.T1, name: 'Wentworthville' },
    { id: 't1:WMD', x: 260, y: 405, line: lines.T1, name: 'Westmead' },
    { id: 't1:PAR', x: 290, y: 435, line: lines.T1, name: 'Parramatta' },
    { id: 't1:HPK', x: 305, y: 450, line: lines.T1, name: 'Harris Park' },
    // ...
    { id: 't1:EPS', x: 35, y: 390, line: lines.T1, name: 'Emu Plains' },
    { id: 't1:PNR', x: 50, y: 390, line: lines.T1, name: 'Penrith' },
    { id: 't1:KWD', x: 65, y: 390, line: lines.T1, name: 'Kingswood' },
    { id: 't1:WRT', x: 80, y: 390, line: lines.T1, name: 'Werrington' },
    { id: 't1:STM', x: 95, y: 390, line: lines.T1, name: 'St Marys' },
    { id: 't1:MTT', x: 110, y: 390, line: lines.T1, name: 'Mount Druitt' },
    { id: 't1:RYH', x: 125, y: 390, line: lines.T1, name: 'Rooty Hill' },
    { id: 't1:DOD', x: 140, y: 390, line: lines.T1, name: 'Doonside' },
]

export const t1connections = [
    { start: 't1:RCD', end: 't1:ERD', line: lines.T1 },
    { start: 't1:ERD', end: 't1:CRD', line: lines.T1 },
    { start: 't1:CRD', end: 't1:WSR', line: lines.T1 },
    { start: 't1:WSR', end: 't1:MUV', line: lines.T1 },
    { start: 't1:MUV', end: 't1:VYR', line: lines.T1 },
    { start: 't1:VYR', end: 't1:RVS', line: lines.T1 },
    { start: 't1:RVS', end: 't1:SFS', line: lines.T1 },
    { start: 't1:SFS', end: 't1:QKH', line: lines.T1 },
    { start: 't1:QKH', end: 't1:MYG', line: lines.T1 },
    { start: 't1:MYG', end: 't1:BAK', line: lines.T1 },
    { start: 't1:BAK', end: 't1:SEV', line: lines.T1 },
    { start: 't1:SEV', end: 't1:TGB', line: lines.T1 },
    { start: 't1:TGB', end: 't1:PDH', line: lines.T1 },
    { start: 't1:PDH', end: 't1:WVL', line: lines.T1 },
    { start: 't1:WVL', end: 't1:WMD', line: lines.T1 },
    { start: 't1:WMD', end: 't1:PAR', line: lines.T1 },
    { start: 't1:PAR', end: 't1:HPK', line: lines.T1 },
    // ...
    { start: 't1:EPS', end: 't1:PNR', line: lines.T1 },
    { start: 't1:PNR', end: 't1:KWD', line: lines.T1 },
    { start: 't1:KWD', end: 't1:WRT', line: lines.T1 },
    { start: 't1:WRT', end: 't1:STM', line: lines.T1 },
    { start: 't1:STM', end: 't1:MTT', line: lines.T1 },
    { start: 't1:MTT', end: 't1:RYH', line: lines.T1 },
    { start: 't1:RYH', end: 't1:DOD', line: lines.T1 },
    { start: 't1:DOD', end: 't1:BAK', line: lines.T1 },
];

// T2

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

export const stations = [...t1stations, ...t5stations, ...t2stations];

export const connections = [
    ...t1connections,
    ...t5connections,
    ...t2connections,
];
