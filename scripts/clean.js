// scripts/clean.js
import { rm } from 'fs/promises';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const DEV_DIST_DIR = path.resolve(process.cwd(), 'dev-dist');

async function clean() {
  try {
    console.log('Removing dist folder...');
    await rm(DIST_DIR, { recursive: true, force: true });
    console.log('dist folder removed.');

    console.log('Removing dev-dist folder...');
    await rm(DEV_DIST_DIR, { recursive: true, force: true });
    console.log('dev-dist folder removed.');

    console.log('✅ Clean complete.');
  } catch (err) {
    console.error('Error cleaning folders:', err);
  }
}

clean();