import app from "./app";
import { PORT } from "./config/env-variable";

(async () => {
  try {
    app.listen(PORT, () => console.log(`Server start at port: ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
