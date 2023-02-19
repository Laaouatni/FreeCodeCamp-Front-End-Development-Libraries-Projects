<script>
  import Label from "./Label.svelte";


  export let data = `# Welcome to my Svelte Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
  // this is multi-line code:

  function anotherExample(
    firstLine,
    lastLine,
  ) {
    if (
      firstLine == "\`\`\`" &&
      lastLine == "\`\`\`"
    ) {
      return multiLineCode;
    }
  }
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
</script>


<div class="flex-1 flex flex-col gap-4">
  <Label forId="editor" />
  <textarea
    id="editor"
    placeholder="scrivi qualcosa..."
    class="border hover:border-4 hover:border-sky-300 shadow-lg rounded h-full w-full p-2 transition"
    bind:value={data}
  />
</div>
