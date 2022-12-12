import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 95113,
};

export const sampleWithPartialData: IJobHistory = {
  id: 80171,
  endDate: dayjs('2022-12-11T20:46'),
};

export const sampleWithFullData: IJobHistory = {
  id: 71556,
  startDate: dayjs('2022-12-12T18:18'),
  endDate: dayjs('2022-12-12T02:09'),
  language: Language['CATALAN'],
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
