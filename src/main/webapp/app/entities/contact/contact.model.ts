import { IEmployee } from 'app/entities/employee/employee.model';
import { ContactType } from 'app/entities/enumerations/contact-type.model';

export interface IContact {
  id: number;
  type?: ContactType | null;
  value?: string | null;
  employee?: Pick<IEmployee, 'id'> | null;
}

export type NewContact = Omit<IContact, 'id'> & { id: null };
