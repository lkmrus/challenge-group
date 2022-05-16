import { CompanyStatus } from '../company.model';
import { ServiceDto } from '../../service/dto/service.dto';

export class CompanyDto {
  services: [ServiceDto];
  title?: string;
  phone?: string;
  status?: CompanyStatus;
}
