import { Interviews } from './../../common/interfaces/interviews.interface';
import { GenericData } from './../../common/interfaces/generic-data.interface';

export const INTERVIEWS_DATA: GenericData[] = [
    { column1: 'Round#1', column2: 'Vijay', column3: '20-8-13', column4: 'Selected' },
    { column1: 'HR Round', column2: 'Singh, HR', column3: '27-8-13', column4: 'Offered' }
];

export const INTERVIEWS_HEADER: string[] = [
    'interview',
    'interviewer',
    'date',
    'result'
];
