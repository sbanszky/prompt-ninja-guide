import { Principle } from "@/types";

export const principles: Principle[] = [
  // Clarity & Precision
  { id: 1, title: "Be direct. Avoid polite filler phrases.", category: "Clarity & Precision" },
  { id: 2, title: "Specify the intended audience in the prompt.", category: "Clarity & Precision" },
  { id: 3, title: "Break complex tasks into smaller, sequential prompts.", category: "Clarity & Precision" },
  { id: 4, title: "Use affirmative commands (\"do\") instead of negatives (\"don't\").", category: "Clarity & Precision" },
  { id: 5, title: "Ask for simpler explanations (e.g., \"Explain in simple terms\").", category: "Clarity & Precision" },
  { id: 6, title: "Suggest you will tip for a better solution.", category: "Clarity & Precision" },
  { id: 7, title: "Provide examples in your prompt (few-shot prompting).", category: "Clarity & Precision" },
  { id: 8, title: "Structure prompts with clear headers (###Instruction###, ###Example###).", category: "Clarity & Precision" },
  { id: 9, title: "Use strong instructional phrases (\"Your task is\", \"You MUST\").", category: "Clarity & Precision" },
  { id: 10, title: "State penalties for not following instructions.", category: "Clarity & Precision" },
  { id: 11, title: "Ask for answers in a natural, human-like manner.", category: "Clarity & Precision" },
  { id: 12, title: "Use \"think step by step\" to get detailed reasoning.", category: "Clarity & Precision" },
  { id: 13, title: "Instruct the model to avoid stereotypes or biases.", category: "Clarity & Precision" },
  { id: 14, title: "Tell the model to ask clarifying questions first.", category: "Clarity & Precision" },
  { id: 15, title: "Ask the model to teach you and test your understanding.", category: "Clarity & Precision" },
  { id: 16, title: "Assign a role to the model (\"Act as an expert…\").", category: "Clarity & Precision" },
  { id: 17, title: "Use delimiters (``, ===, <<< >>>) to separate parts.", category: "Clarity & Precision" },
  { id: 18, title: "Repeat key words or phrases for emphasis.", category: "Clarity & Precision" },
  { id: 19, title: "Combine reasoning with examples.", category: "Clarity & Precision" },
  { id: 20, title: "End your prompt with the desired output.", category: "Clarity & Precision" },
  { id: 21, title: "Explicitly request detailed text.", category: "Clarity & Precision" },

  // Context & Constraints
  { id: 22, title: "Include context or background information upfront.", category: "Context & Constraints" },
  { id: 23, title: "Specify word count or token limits.", category: "Context & Constraints" },
  { id: 24, title: "Define the writing tone (formal, casual, poetic, etc.).", category: "Context & Constraints" },
  { id: 25, title: "Set the point of view (first person, third person, etc.).", category: "Context & Constraints" },
  { id: 26, title: "Indicate target reading level or audience expertise.", category: "Context & Constraints" },
  { id: 27, title: "Set a specific format (table, list, JSON, YAML).", category: "Context & Constraints" },
  { id: 28, title: "Define time period or setting if needed.", category: "Context & Constraints" },
  { id: 29, title: "Specify what not to include.", category: "Context & Constraints" },
  { id: 30, title: "List mandatory keywords to use.", category: "Context & Constraints" },
  { id: 31, title: "Limit the number of examples or items.", category: "Context & Constraints" },
  { id: 32, title: "Include a glossary of terms for consistency.", category: "Context & Constraints" },
  { id: 33, title: "Give variable placeholders ({{var}}) for dynamic parts.", category: "Context & Constraints" },
  { id: 34, title: "Provide file/folder structure if generating code.", category: "Context & Constraints" },
  { id: 35, title: "Specify input/output schema for structured tasks.", category: "Context & Constraints" },
  { id: 36, title: "Ask the model to revise text without changing tone or style.", category: "Context & Constraints" },

  // Logic & Reasoning
  { id: 37, title: "Ask the model to justify each step.", category: "Logic & Reasoning" },
  { id: 38, title: "Request pros/cons analysis before the answer.", category: "Logic & Reasoning" },
  { id: 39, title: "Ask it to evaluate alternative solutions first.", category: "Logic & Reasoning" },
  { id: 40, title: "Require logical reasoning before the final answer.", category: "Logic & Reasoning" },
  { id: 41, title: "Instruct to show intermediate calculations.", category: "Logic & Reasoning" },
  { id: 42, title: "Request self-checks and corrections.", category: "Logic & Reasoning" },
  { id: 43, title: "Ask to list assumptions before solving.", category: "Logic & Reasoning" },
  { id: 44, title: "Request risk analysis of each option.", category: "Logic & Reasoning" },
  { id: 45, title: "Ask to summarize the logic at the end.", category: "Logic & Reasoning" },
  { id: 46, title: "Ask for flowcharts or diagrams of the logic.", category: "Logic & Reasoning" },

  // Creativity & Style
  { id: 47, title: "Specify literary style or tone explicitly.", category: "Creativity & Style" },
  { id: 48, title: "Ask for multiple creative variations.", category: "Creativity & Style" },
  { id: 49, title: "Use analogies or metaphors as constraints.", category: "Creativity & Style" },
  { id: 50, title: "Require symbolic or thematic elements.", category: "Creativity & Style" },
  { id: 51, title: "Request visual storytelling or sensory details.", category: "Creativity & Style" },
  { id: 52, title: "Ask to mimic the style of a known author.", category: "Creativity & Style" },
  { id: 53, title: "Ask to rewrite text in several tones.", category: "Creativity & Style" },
  { id: 54, title: "Instruct to blend two or more styles.", category: "Creativity & Style" },
  { id: 55, title: "Request emotional tone tagging.", category: "Creativity & Style" },
  { id: 56, title: "Ask to include humor, drama, suspense, etc.", category: "Creativity & Style" },

  // Iteration & Feedback
  { id: 57, title: "Ask for a draft first, then refine.", category: "Iteration & Feedback" },
  { id: 58, title: "Request an outline before full content.", category: "Iteration & Feedback" },
  { id: 59, title: "Ask the model to critique its own output.", category: "Iteration & Feedback" },
  { id: 60, title: "Use \"Reflect then answer\" to improve quality.", category: "Iteration & Feedback" },
  { id: 61, title: "Request multiple approaches and compare them.", category: "Iteration & Feedback" },
  { id: 62, title: "Ask for incremental improvements with version numbers.", category: "Iteration & Feedback" },
  { id: 63, title: "Use checkpoints: \"Pause here and wait for my approval.\"", category: "Iteration & Feedback" },
  { id: 64, title: "Request alternative answers if confidence is low.", category: "Iteration & Feedback" },
  { id: 65, title: "Ask for a confidence rating for each answer.", category: "Iteration & Feedback" },
  { id: 66, title: "Ask it to highlight uncertain or assumed parts.", category: "Iteration & Feedback" },

  // Code & Technical Tasks
  { id: 67, title: "Specify language, framework, and version.", category: "Code & Technical Tasks" },
  { id: 68, title: "Provide starting code or skeletons.", category: "Code & Technical Tasks" },
  { id: 69, title: "Define input/output formats clearly.", category: "Code & Technical Tasks" },
  { id: 70, title: "Ask to include comments explaining logic.", category: "Code & Technical Tasks" },
  { id: 71, title: "Require modular code structure.", category: "Code & Technical Tasks" },
  { id: 72, title: "Ask for error handling and edge cases.", category: "Code & Technical Tasks" },
  { id: 73, title: "Request time/space complexity analysis.", category: "Code & Technical Tasks" },
  { id: 74, title: "Ask for security best practices.", category: "Code & Technical Tasks" },
  { id: 75, title: "Request test cases with expected outputs.", category: "Code & Technical Tasks" },
  { id: 76, title: "Ask for a deploy-ready version with build/run steps.", category: "Code & Technical Tasks" },

  // Efficiency & Control
  { id: 77, title: "Set a strict word/character budget.", category: "Efficiency & Control" },
  { id: 78, title: "Ask to use bullet points for brevity.", category: "Efficiency & Control" },
  { id: 79, title: "Require short summaries first, then expansions.", category: "Efficiency & Control" },
  { id: 80, title: "Ask for ranked lists (top 5, top 10, etc.).", category: "Efficiency & Control" },
  { id: 81, title: "Request only new or unknown facts.", category: "Efficiency & Control" },
  { id: 82, title: "Ask to eliminate redundancy.", category: "Efficiency & Control" },
  { id: 83, title: "Require plain language, no jargon.", category: "Efficiency & Control" },
  { id: 84, title: "Specify output ordering (chronological, alphabetical).", category: "Efficiency & Control" },
  { id: 85, title: "Ask for only final results, not process.", category: "Efficiency & Control" },
  { id: 86, title: "Request concise headlines or TL;DRs.", category: "Efficiency & Control" },

  // Reliability & Accuracy
  { id: 87, title: "Request sources or citations.", category: "Reliability & Accuracy" },
  { id: 88, title: "Ask for fact-checking of claims.", category: "Reliability & Accuracy" },
  { id: 89, title: "Ask for cross-verification between answers.", category: "Reliability & Accuracy" },
  { id: 90, title: "Request only information after a specific date.", category: "Reliability & Accuracy" },
  { id: 91, title: "Ask for units, dimensions, or standards.", category: "Reliability & Accuracy" },
  { id: 92, title: "Instruct to flag any outdated info.", category: "Reliability & Accuracy" },
  { id: 93, title: "Ask to validate all assumptions.", category: "Reliability & Accuracy" },
  { id: 94, title: "Request confidence percentages per claim.", category: "Reliability & Accuracy" },
  { id: 95, title: "Ask to distinguish facts vs opinions.", category: "Reliability & Accuracy" },
  { id: 96, title: "Require alignment with specified guidelines or policies.", category: "Reliability & Accuracy" },
  
  // Missing principles to reach 100
  { id: 97, title: "For multi-file tasks, ask for scripts to build or modify them.", category: "Code & Technical Tasks" },
  { id: 98, title: "To continue text, provide the beginning.", category: "Context & Constraints" },
  { id: 99, title: "Clearly state all requirements, constraints, and goals.", category: "Context & Constraints" },
  { id: 100, title: "Provide a style sample and instruct the model to follow it.", category: "Context & Constraints" }
];

export const categories = [
  { name: "Clarity & Precision", count: 21, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
  { name: "Context & Constraints", count: 18, color: "bg-gradient-to-r from-purple-500 to-purple-600" },
  { name: "Logic & Reasoning", count: 10, color: "bg-gradient-to-r from-green-500 to-green-600" },
  { name: "Creativity & Style", count: 10, color: "bg-gradient-to-r from-pink-500 to-pink-600" },
  { name: "Iteration & Feedback", count: 10, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
  { name: "Code & Technical Tasks", count: 11, color: "bg-gradient-to-r from-indigo-500 to-indigo-600" },
  { name: "Efficiency & Control", count: 10, color: "bg-gradient-to-r from-teal-500 to-teal-600" },
  { name: "Reliability & Accuracy", count: 10, color: "bg-gradient-to-r from-red-500 to-red-600" }
];
