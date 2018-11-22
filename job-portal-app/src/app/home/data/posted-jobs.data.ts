import { PostedJobs } from './../../common/interfaces/posted-jobs.interface';

export const POSTED_JOBS_DATA: PostedJobs[] = [
    { company: 'IT Soft', title: 'Java Engg', date: '20-8-13', status: 'Open' },
    { company: 'XYZ', title: 'DBA', date: '18-6-12', status: 'Closed' }
];

export const POSTED_JOBS_HEADER: string[] = [
    'company',
    'title',
    'date',
    'status'
];
