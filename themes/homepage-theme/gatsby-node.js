const fs = require("fs");

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions, reporter }) => {
  actions.createTypes(`
    type FormFieldOption {
      value: String!
      label: String!
    }

    type FormField {
        name: String!
        label: String!
        type: String
        options: [FormFieldOption]
    }

    type Form {
        title: String!
        fields: [FormField]
    }

    type HomePageSection {
        role: String!
        title: String!
        backdropPath: String
        publishable: Boolean
        callToAction: String
        form: Form
     }

    type HomePage implements Node @dontInfer {
      id: ID!
      siteName: String!
      sections: [HomePageSection]
    }
`);
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/HomePage.tsx")
  });
};
