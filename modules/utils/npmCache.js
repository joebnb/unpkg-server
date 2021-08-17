import fs from 'fs';
import os from 'os';
import path from 'path';

const CACHE_DIR = path.resolve(os.homedir(), '.unpkg/cache');

export function getCache(file_name) {
  const file_path = path.resolve(CACHE_DIR, file_name);
  if (fs.existsSync(file_path)) {
    return fs.createReadStream(file_path);
  }
}

export function setCache(file_name, stream) {
  const file_path = path.resolve(CACHE_DIR, file_name);

  fs.mkdirSync(path.dirname(file_path), { recursive: true });
  if (!fs.existsSync()) {
    if (!stream.pipe) {
      console.error('not a stream');
    }
    return stream.pipe(fs.createWriteStream(file_path));
  }
}
