// Represents the configuration for constructing a prompt
export type PromptConfig = {
  // The persona that the model will take on
  persona?: string;
  // The main instruction or request the model will fulfill
  instruction: string;
  // Any content that the model needs to parse through
  content?: string[];
  // Specific set of steps required to reach the output
  steps?: string[];
  // List of examples or scenarios
  examples?: string[];
  // Desired format or style of the response
  format?: string;
  // Desired tone of the response
  tone?: string;
  // Specific constraints the model must follow
  criteria?: string[];
};
