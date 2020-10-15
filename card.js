#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:sdclarkie@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Semper Fi!\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             Stephen Clark"),
  handle: chalk.white("@gixxerblade"),
  work: `${chalk.white("Looking for")} ${chalk.hex("#2b82b2").bold("Work")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("gixxerblade"),
  github: chalk.gray("https://github.com/") + chalk.green("gixxerblade"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("stephen-clark-5319406"),
  web: chalk.cyan("https://stephenclark.dev"),
  npx: chalk.red("npx") + " " + chalk.white("angry_pickle_guy"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold("I am currently looking for new opportunities,")}`,
    `${chalk.bold("my inbox is always open. Whether you have a")}`,
    `${chalk.bold("question or just want to say hi, I will try ")}`,
    `${chalk.bold("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
