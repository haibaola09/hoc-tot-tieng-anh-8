export interface VocabularyItem {
  word: string;
  pos: string; // n, adj, v, adv, phr, etc.
  phonetic: string; // pronunciation spelling
  vietnamese: string; // translation
  exampleEng: string;
  exampleVie: string;
  unitId: number;
}

export interface MatchingPair {
  left: string;  // e.g. "be keen on"
  right: string; // e.g. "be very interested in something"
}

export type QuestionType = 'multiple_choice' | 'matching' | 'word_form' | 'error_correction';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string; // Question instruction or text
  options?: string[]; // For multiple choice
  correctAnswer: string; // For validation. In matching, it can be a JSON string of correct mapping or a structured list
  explanation: string;
  wordFormBase?: string; // For word_form (e.g. "enjoy")
  sentenceTemplate?: string; // For word_form (e.g. "She loves ______ in the garden. (work)")
  errorSentence?: string; // For error_correction
  matchingPairs?: MatchingPair[]; // For matching type
}

export interface UnitOverview {
  theme: string;
  vocabularySummary: string;
  grammarSummary: string;
  pronunciationSummary: string;
}

export interface UnitData {
  id: number;
  title: string;
  overview: UnitOverview;
  vocabulary: VocabularyItem[];
  quizzes: QuizQuestion[];
  speakingPrompt: string; // prompt to kickstart conversation for this unit
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

export interface UserProgress {
  selectedUnitId: number;
  starsEarned: number; // total correct answers
  dailyStreak: number;
  completedUnits: number[]; // unit IDs that have been quizzes completed with score >= 70%
  learnedVocabularyCount: number; // count of words marked as learned
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}
