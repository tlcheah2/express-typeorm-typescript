import app from "./app";
import { PORT } from "./config/env-variable";
import datasource from "./db/datasource";

(async () => {
  try {
    await datasource.initialize();
    if (datasource.isInitialized) {
      console.log("Database connected");
      app.listen(PORT, () => console.log(`Server start at port: ${PORT}`));
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
