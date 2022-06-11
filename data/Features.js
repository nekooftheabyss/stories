export default [
  {
    name: "string",
    keyType: "generateString",
    description: "Generate a random alphanumeric string.",
    args: [
      {
        type: "number",
        default: 10,
        description:
          "Enter the length of the string! Larger the number, worse the speed and greater the risk of crashing!",
      },
    ],
  },
  {
    name: "name",
    keyType: "generateName",
    description: "Generate a random name that can (probably) be pronounced.",
    args: [
      {
        type: "number",
        default: 10,
        description:
          "Enter the length of the name! Larger the number, worse the speed and greater the risk of crashing!",
      },
    ],
  },
  {
    name: "email",
    keyType: "generateEmail",
    description: "Generate a random email ID (uses the name generator too).",
    args: [
      {
        type: "boolean",
        default: false,
        description: "Use a common email service name?",
      },
    ],
  },
  {
    name: "character",
    keyType: "generateCharacter",
    description: "Generate a random weird fantasy character.",
    args: [],
  },
  {
    name: "fantasy-name",
    keyType: "generateFantasyName",
    description: "Generate a random fantasy name.",
    args: [],
  },
  {
    name: "fantasy-creature",
    keyType: "generateRace",
    description: "Generate a random fantasy race.",
    args: [
      {
        type: "text",
        default: null,
        description: "Enter the name of the race!",
      },
    ],
  },
  {
    name: "story",
    keyType: "generateStory",
    description: "Generate a random fantasy story!",
    args: [
      {
        type: "text",
        default: null,
        description: "Enter the name of the protagonist!",
      },
    ],
  },
  {
    name: "chain",
    keyType: "generateChainMail",
    description: "Generate a random creepy chain mail!",
    args: [
      {
        type: "text",
        default: null,
        description: "Enter the name of the spirit!",
      },
    ],
  },
];
