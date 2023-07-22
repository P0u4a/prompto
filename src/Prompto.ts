import type { PromptConfig } from "./types";
import type { PromptoInterface } from "./prompto-interface";

class Prompto implements PromptoInterface<Prompto> {
  private promptConfig: PromptConfig;

  private clearPrompt(): void {
    for (const key in this.promptConfig)
      delete this.promptConfig[key as keyof PromptConfig];

    this.promptConfig.instruction = "";
  }

  constructor() {
    this.promptConfig = {
      instruction: "",
    };
  }

  withPersona(persona: string): Prompto {
    this.promptConfig.persona = persona;
    return this;
  }

  withInstruction(instruction: string): Prompto {
    this.promptConfig.instruction = instruction;
    return this;
  }

  withContext(context: string): Prompto {
    this.promptConfig.context = context;
    return this;
  }

  withText(text: string[]): Prompto {
    this.promptConfig.text = text;
    return this;
  }

  withSteps(steps: string[]): Prompto {
    this.promptConfig.steps = steps;
    return this;
  }

  withCriteria(criteria: string[]): Prompto {
    this.promptConfig.criteria = criteria;
    return this;
  }

  withExamples(examples: string[]): Prompto {
    this.promptConfig.examples = examples;
    return this;
  }

  inFormat(format: string): Prompto {
    this.promptConfig.format = format;
    return this;
  }

  inTone(tone: string): Prompto {
    this.promptConfig.tone = tone;
    return this;
  }

  generatePrompt(): string {
    const {
      persona,
      instruction,
      context,
      text,
      steps,
      examples,
      format,
      tone,
      criteria,
    } = this.promptConfig;

    if (instruction === "") throw new Error("No instruction provided");

    let prompt = "";

    if (persona) prompt += `I want you to act as a ${persona}.\n`;

    prompt += `What I need you to do is the following: ${instruction}.\n`;

    if (context)
      prompt += `This is the context of the instruction: ${context}.\n`;

    if (text && text.length > 0) {
      prompt += `Here is the text you need, delimited by angle brackets: \n<\n`;
      prompt += text.map((t) => `${t}\n`).join("");
      prompt += `>\n`;
    }

    if (steps && steps.length > 0) {
      prompt += `You must follow these steps delimited by angle brackets in order: \n<\n`;
      prompt += steps.map((step, index) => `${index + 1}. ${step}\n`).join("");
      prompt += `>\n`;
    }

    if (examples && examples.length > 0) {
      prompt += `Here are some examples delimited by angle brackets:\n<\n`;
      prompt += examples.map((example) => `- ${example}\n`).join("");
      prompt += `>\n`;
    }

    if (format) prompt += `The response should be in this format: ${format}\n`;

    if (tone) prompt += `The tone of the response should be: ${tone}\n`;

    if (criteria && criteria.length > 0) {
      prompt += `You must follow these rules delimited by angle brackets:\n<\n`;
      prompt += criteria.map((rule) => `- ${rule}\n`).join("");
      prompt += `>\n`;
    }

    this.clearPrompt();

    return prompt;
  }
}

export default Prompto;
