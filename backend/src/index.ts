import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () =>
  console.log(`Server is running on PORT: ${PORT}`)
);

export default server;
