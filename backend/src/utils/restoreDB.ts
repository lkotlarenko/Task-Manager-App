// ! code author: @trybe (recreate database)
import fs from 'fs';
import path from 'path';
import { Pool } from 'mysql2/promise';
import connection from '../models/connection';

const restoreResponse = 'database restored';
export default async function restoreDatabase(conn: Pool) {
  try {
    const importPath = path.resolve('src/utils', 'TasksDB.sql');
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await conn.query(query);
    }
  } catch (err) {
    console.error(err);
  }
}

export const defaultDatabase = async () =>
  await restoreDatabase(connection).then(async () => {
    console.log(restoreResponse);
    await connection.end();
    process.exit(0);
  });

if (require.main === module) {
  restoreDatabase(connection).then(async () => {
    console.log(restoreResponse);
    await connection.end();
    process.exit(0);
  });
}
