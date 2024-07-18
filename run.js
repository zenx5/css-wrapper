import buildWrapper from "./index.js";

// get arguments from command line
const args = process.argv.slice(2)
const [tagWrapper, buildPathCss] = args

// run buildWrapper function
buildWrapper(tagWrapper, buildPathCss)()