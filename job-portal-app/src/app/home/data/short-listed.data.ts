import { ShortListed } from './../../common/interfaces/short-listed.interface';
import { GenericData } from './../../common/interfaces/generic-data.interface';

export const SHORT_LISTED_DATA: GenericData[] = [
    { column1: 'Raju', column2: 'PLM Inc', column3: '6 yrs', column4: '10L' },
    { column1: 'Abhay', column2: 'SysTel', column3: '10 yrs', column4: '12L' }
];

export const SHORT_LISTED_HEADER: string[] = [
    'name',
    'worksAt',
    'exp',
    'ctc'
];
