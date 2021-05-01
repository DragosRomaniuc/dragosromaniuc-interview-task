import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  RpcExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error.ValidationError;
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    let error;
    switch (exception.code) {
      case 11000:
        error = {
          statusCode: HttpStatus.CONFLICT,
          message: 'Duplicate key error',
          exception: exception,
        };
        break;
      default:
        error = {
          statusCode: HttpStatus.FORBIDDEN,
          message: 'MongoError',
          exception: exception,
        };
    }
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json(error);
  }
}

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost): any {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createdBy: 'ValidationErrorFilter, Schema or Model definition',
      errors: exception.errors,
    });
  }
}
