import { configure } from "@kadira/storybook";

const req = require.context("../src/", true, /\.story.tsx$/);
configure(() => req.keys().forEach(req), module);
