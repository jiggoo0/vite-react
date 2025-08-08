import * as esbuild from "esbuild";
import { exec } from "child_process";
import { promisify } from "util";

const isServe = process.argv.includes("--serve");
const execAsync = promisify(exec);

async function packZip() {
  try {
    const { stdout, stderr } = await execAsync("node .vscode/pack-zip.js");
    if (stderr) console.error(stderr);
    console.log(stdout.trim());
  } catch (err) {
    console.error("Error packing zip:", err);
  }
}

const zipPlugin = {
  name: "zip-plugin",
  setup(build) {
    build.onEnd(async () => {
      await packZip();
    });
  },
};

const buildConfig = {
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  logLevel: "info",
  color: true,
  outdir: "dist",
  plugins: [zipPlugin],
  target: "es2020",
};

(async function () {
  try {
    if (isServe) {
      console.log("Starting development server...");
      const ctx = await esbuild.context(buildConfig);
      await ctx.watch();
      const { host, port } = await ctx.serve({
        servedir: ".",
        port: 3000,
      });
      console.log(`Dev server running at http://${host}:${port}`);
    } else {
      console.log("Building for production...");
      await esbuild.build(buildConfig);
      console.log("Production build complete.");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
