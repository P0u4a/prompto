import { Prompto } from "../src/index";

describe("Prompto", () => {
  let prompt: Prompto;

  beforeEach(() => {
    prompt = new Prompto();
  });

  it("should throw an error when no instruction provided", () => {
    expect(() => {
      prompt.generatePrompt();
    }).toThrow("No instruction provided");
  });

  it("Should set persona correctly", () => {
    expect(
      prompt
        .withPersona("Professional copywriter")
        .withInstruction("Copy the text")
        .generatePrompt()
    ).toBe(
      "I want you to act as a Professional copywriter.\nWhat I need you to do is the following: Copy the text.\n"
    );
  });

  it("Should set text correctly", () => {
    expect(
      prompt
        .withInstruction("Copy the text")
        .withText(["Lorem ipsum", "Dolor sit amet"])
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Copy the text.\nHere is the text you need, delimited by angle brackets: \n<\nLorem ipsum\nDolor sit amet\n>\n"
    );
  });

  it("Should set steps correctly", () => {
    expect(
      prompt
        .withInstruction("Explain how to cook pasta")
        .withSteps(["explain ingredients", "explain recipe"])
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Explain how to cook pasta.\nYou must follow these steps delimited by angle brackets in order: \n<\n1. explain ingredients\n2. explain recipe\n>\n"
    );
  });
});
