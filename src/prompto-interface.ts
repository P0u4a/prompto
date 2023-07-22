// Defines the prompt builder interface
export interface PromptoInterface<T> {
  withPersona(persona: string): T;

  withInstruction(instruction: string): T;

  withContext(context: string): T;

  withText(text: string[]): T;

  withSteps(steps: string[]): T;

  withCriteria(criteria: string[]): T;

  withExamples(examples: string[]): T;

  inFormat(format: string): T;

  inTone(tone: string): T;
}
