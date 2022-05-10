export enum CompanyStatus {
  Main,
  Child,
}

export class CompanyModel {
  _id: number;
  title: string;
  phone: string;
  status?: CompanyStatus;
  createdAt: Date;
}
