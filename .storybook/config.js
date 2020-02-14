import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const reqSrc = require.context("../src", true, /\.stories\.jsx?$/);
const reqStorybook = require.context("./", true, /\.stories\.jsx?$/);

function loadStories() {
  reqSrc.keys().forEach(filename => reqSrc(filename));
  reqStorybook.keys().forEach(filename => reqStorybook(filename));
}

configure(loadStories, module);
