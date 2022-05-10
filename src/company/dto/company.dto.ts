import { CompanyStatus } from '../company.model';

export class CompanyDto {
  title: string;
  phone: string;
  status?: CompanyStatus;
  createdAt: Date;
}
