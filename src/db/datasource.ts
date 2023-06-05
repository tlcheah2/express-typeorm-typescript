// TODO 2: Add DataSouce from TypeORM

import { DataSource, DataSourceOptions } from "typeorm";
import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} from "../config/env-variable";

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};

export default new DataSource(dataSourceOptions);
