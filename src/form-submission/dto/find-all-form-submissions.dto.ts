import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { FormSubmissionStatus } from '../enums/form-submission-status.enum';

export class FindAllFormSubmissionsDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take: number = 12;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip: number = 0;

  @IsOptional()
  @IsEnum(FormSubmissionStatus)
  status: FormSubmissionStatus;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  id: number;
}