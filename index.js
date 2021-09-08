import path from 'path';
import fs from 'fs/promises';

const DIR_NAME = 'crypto';

export default await Promise.all(
  (await fs.readdir(DIR_NAME))
    .filter((filename) => filename.endsWith('.json'))
    .map(async (filename) => {
      const filepath = path.join(DIR_NAME, filename);
      const data = await fs.readFile(filepath, 'utf8');
      return JSON.parse(data);
    })
);
