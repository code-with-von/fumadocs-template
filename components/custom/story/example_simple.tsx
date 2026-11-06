"use client";

export type ExampleSimpleStoryComponentProps = {
  name: string;
  age?: number;
};

export function ExampleSimpleStoryComponent({
  name,
  age,
}: ExampleSimpleStoryComponentProps) {
  return (
    <div className="rounded-md border bg-red-400 px-4">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
