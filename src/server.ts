import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT || 3030, () => {
    console.log('Server running ', process.env.PORT);
});