import { GenericData } from './../../common/interfaces/generic-data.interface';
import { PostedJobs } from './../../common/interfaces/posted-jobs.interface';

export const POSTED_JOBS_DATA: GenericData[] = [
    { column1: 'IT Soft', column2: 'Java Engg', column3: '20-8-13', column4: 'Open' },
    { column1: 'XYZ', column2: 'DBA', column3: '18-6-12', column4: 'Closed' }
];

export const POSTED_JOBS_HEADER: string[] = [
    'company',
    'title',
    'date',
    'status'
];
