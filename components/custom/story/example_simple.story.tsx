import { ExampleSimpleStoryComponent } from "@components/custom/story/example_simple";
import { defineStory } from "@lib/story";

export const exampleSimpleStory = defineStory({
  Component: ExampleSimpleStoryComponent,
  args: {
    initial: {
      name: "Test for story example",
      age: 30,
    },
  },
});
