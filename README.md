# Prompto ✒️

Programatically construct ChatGPT prompts with Typescript. Think of it as a SQL query builder except instead of SQL queries, its LLM prompts.

> ⚠️ Prompto is still in alpha and features are subject to change.

## Features

- ✅ Zero dependencies
- ✅ Resistant to prompt injection
- ✅ Blazingly fast prompt generation

## Installation
```
npm install ts-prompto
```

## Usage

Create a Prompto object anywhere and use method chaining to build your prompt:

```ts
const prompt = new Prompto()
  .withPersona("Openai engineer")
  .withInstruction("Explain how to write effective ChatGPT prompts")
  .inFormat("step-by-step guide")
  .generatePrompt();

console.log(prompt);
```

## API

### `Prompto()`

Creates an empty Prompto object with a blank instruction.

### `withPersona(persona: string)`

Sets the persona that the model will take on.

### `withInstruction(question: string)`

Sets the main instruction or request the model will respond to. This is a **compulsory** method. 

### `withContext(context: string)`

Provides additional context or information for the model to consider while generating a response.

### `withText(content: string[])`

Adds any text that the model needs to parse through (i.e., an article to summarize or a code snippet to explain).

### `withSteps(steps: string[])`

Adds the specific set of steps required to reach an output. Helpful for guiding the model to reach its output, allowing the model to 'think' more about its response.

### `withExamples(examples: string[])`

Adds a list of example outputs for the model to be aware of via [few-shot prompting](https://www.promptingguide.ai/techniques/fewshot). Helpful if you need a specific or complicated output.

### `inFormat(format: string)`

Adds the expected format of the response (i.e., step-by-step instructions, JSON, TypeScript code, etc.)

### `withCriteria(criteria: string[])`

Adds a list of rules that the model must follow to reach its output. Helpful for setting constraints on what the output should not include or for handling cases for user-inputted instructions.

### `inTone(tone: string)`

Sets the tone of the response. Helpful if you're writing text that requires an appropriate tone, such as an email.


