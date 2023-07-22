import { Prompto } from "../src/index";

describe("Prompto", () => {
  const prompt = new Prompto();

  it("Should throw an error when no instruction provided", () => {
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

  it("Should set context correctly", () => {
    expect(
      prompt
        .withInstruction("Write a JavaScript function")
        .withContext("This is a coding challenge")
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Write a JavaScript function.\nThis is the context of the instruction: This is a coding challenge.\n"
    );
  });

  it("Should set criteria correctly", () => {
    expect(
      prompt
        .withInstruction("Write an essay")
        .withCriteria(["Minimum 500 words", "Use proper citations"])
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Write an essay.\nYou must follow these rules delimited by angle brackets:\n<\n- Minimum 500 words\n- Use proper citations\n>\n"
    );
  });

  it("Should set examples correctly", () => {
    expect(
      prompt
        .withInstruction("Explain a concept")
        .withExamples(["Example 1", "Example 2", "Example 3"])
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Explain a concept.\nHere are some examples delimited by angle brackets:\n<\n- Example 1\n- Example 2\n- Example 3\n>\n"
    );
  });

  it("Should set format correctly", () => {
    expect(
      prompt
        .withInstruction("Write a blog post")
        .inFormat("Markdown")
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Write a blog post.\nThe response should be in this format: Markdown\n"
    );
  });

  it("Should set tone correctly", () => {
    expect(
      prompt
        .withInstruction("Compose a customer support message")
        .inTone("Polite and empathetic")
        .generatePrompt()
    ).toBe(
      "What I need you to do is the following: Compose a customer support message.\nThe tone of the response should be: Polite and empathetic\n"
    );
  });
});
