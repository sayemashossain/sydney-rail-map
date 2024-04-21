import { t1stations, t1connections } from './byLineData/t1';
import { t2stations, t2connections } from './byLineData/t2';
// import { t3stations, t3connections } from './byLineData/t3';
// import { t4stations, t4connections } from './byLineData/t4';
import { t5stations, t5connections } from './byLineData/t5';
// import { t6stations, t6connections } from './byLineData/t6';
// import { t7stations, t7connections } from './byLineData/t7';
// import { t8stations, t8connections } from './byLineData/t8';
// import { t9stations, t9connections } from './byLineData/t9';

export const stations = [...t1stations, ...t5stations, ...t2stations];

export const connections = [
    ...t1connections,
    ...t2connections,
    ...t5connections,
];
