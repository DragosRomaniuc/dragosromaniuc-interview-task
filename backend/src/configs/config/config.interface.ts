export interface IConfig {
  nest: NestConfig;
  cors: CorsConfig;
  database: DatabaseConfig;
  global: GlobalConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface DatabaseConfig {
  connectionString: string;
  host: string;
  port: number;
}

export interface GlobalConfig {
  rootDirectory: string;
}
