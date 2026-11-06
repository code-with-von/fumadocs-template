import { VersionExampleComponent } from "@components/custom/story/version_example";
import { defineStory } from "@lib/story";

export const exampleVersion = defineStory({
  Component: VersionExampleComponent,
  args: {
    initial: {
      version: 'VERSION v@1.0.0',
      isCurrent: true
    },
  },
});
