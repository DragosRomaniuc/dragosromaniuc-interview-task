import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsAlpha } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: "user's email address" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: "in the UK this is the user's first name" })
  @IsNotEmpty()
  @IsAlpha()
  givenName: string;

  @ApiProperty({ description: "in the UK this is the user's last name" })
  @IsNotEmpty()
  @IsAlpha()
  familyName: string;
}
