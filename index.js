import fs from 'fs/promises';

const DIR_NAME = new URL('./crypto/', import.meta.url);

export default await Promise.all(
  (await fs.readdir(DIR_NAME))
    .filter((filename) => filename.endsWith('.json'))
    .map(async (filename) => {
      const filepath = new URL(filename, DIR_NAME);
      const data = await fs.readFile(filepath, 'utf8');
      return JSON.parse(data);
    })
);
