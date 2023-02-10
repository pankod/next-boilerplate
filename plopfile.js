module.exports = plop => {
  plop.setGenerator("component", {
    description: "Create a component",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/Components/{{pascalCase name}}/index.tsx",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/Component/Component.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts",
        templateFile: "plop-templates/Component/Component.test.ts.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/Component/Component.module.scss.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component/Component.stories.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/Page/Page.tsx.hbs",
      },
      {
        type: "add",
        path: "src/Interfaces/Pages/{{pascalCase name}}.d.ts",
        templateFile: "plop-templates/Page/IPage.ts.hbs",
      },
      {
        type: "append",
        path: "src/Redux/IStore.d.ts",
        pattern: `/* Add_Page_IStore_Here */`,
        template: "plop-templates/Page/IStore.ts.hbs",
      },
    ],
  });
};
