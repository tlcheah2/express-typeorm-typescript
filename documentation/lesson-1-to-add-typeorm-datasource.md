# How to Add a Datasource Connection using TypeORM

## Pre-requisite
Make sure you install the `typeorm` and `pg` package

## Step 1  Add database configuration into env variable

```bash
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=postgres
```

## Step 2 Add Datasource Configuration

- Create new file named `datasource.ts` under db folder

Code to create Datasource options

```ts
const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};

export default new DataSource(dataSourceOptions);
```

## Step 3 Initialize DB Connection when starting your app

Add the below line in `server.ts`

```ts
  await datasource.initialize();
  if (datasource.isInitialized) {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server start at port: ${PORT}`));
  }
```

## Verify

Run `npm run dev` to verify the database connection.

