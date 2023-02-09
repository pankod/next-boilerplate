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
        path: "src/Components/{{pascalCase name}}.tsx",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/Component.ts.hbs",
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
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/Component/index.ts.hbs",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/index.ts",
        templateFile: "plop-templates/injectable-index.ts.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: "append",
        path: "src/components/index.ts",
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `t{{pascalCase name}},`,
      },
    ],
  });
};
