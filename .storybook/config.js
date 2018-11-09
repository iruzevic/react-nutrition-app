import { configure } from '@storybook/react';

const components = require.context('../src/components', true, /stories\.tsx$/);
const containers = require.context('../src/containers', true, /stories\.tsx$/);

function loadStories() {
  components.keys().forEach((filename) => components(filename));
  containers.keys().forEach((filename) => containers(filename));
}

configure(loadStories, module);
