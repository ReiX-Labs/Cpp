// Original curriculum enriched with theory from the Update handoff.
import raw from "../../Cpp_Game_Dev_Reference.md?raw";
import { parseReference } from "./parse";
import { handoffChapters } from "./handoff";
import { integrateHandoff } from "./integrateHandoff";

export const reference = integrateHandoff(parseReference(raw), handoffChapters);
export const rawMarkdown = raw;
