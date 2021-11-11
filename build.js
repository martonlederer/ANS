const { build } = require("esbuild");
const fs = require("fs");

(async () => {
  // build contracts
  await build({
    entryPoints: ["src/index.ts"],
    outdir: "./dist",
    format: "esm",
    bundle: true
  });

  // read license
  let license = fs.readFileSync("./LICENSE").toString();
  const lines = license.split("\n");

  // make license a comment
  for (let i = 0; i < lines.length; i++) {
    lines[i] = " * " + lines[i];
  }

  license = "/*\n * \n" + lines.join("\n") + "\n * \n */\n\n";

  const filename = "dist/index.js";
  let src = fs.readFileSync(filename).toString();

  src = src.replace("async function handle", "export async function handle");
  src = src.replace("export {\n  handle\n};\n", "");
  src = license + src;
  fs.writeFileSync(filename, src);
})();
