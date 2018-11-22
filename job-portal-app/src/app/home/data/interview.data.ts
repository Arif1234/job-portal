import { Interviews } from './../../common/interfaces/interviews.interface';

export const INTERVIEWS_DATA: Interviews[] = [
    { interview: 'Round#1', interviewer: 'Vijay', date: '20-8-13', result: 'Selected' },
    { interview: 'HR Round', interviewer: 'Singh, HR', date: '27-8-13', result: 'Offered' }
];

export const INTERVIEWS_HEADER: string[] = [
    'interview',
    'interviewer',
    'date',
    'result'
];
