import { NewNote } from "@/types/note";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface NoteDraft {
  note: NewNote;
  setDraft: (note: NewNote) => void;
  clearDraft: () => void;
}

const initialDraft: NewNote = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useDraft = create<NoteDraft>()(
  persist(
    (set) => ({
      note: initialDraft,
      setDraft: (newDraft) => set(() => ({ note: newDraft })),
      clearDraft: () => set(() => ({ note: initialDraft })),
    }),
    {
      name: "note-draft",
      partialize: (state) => ({ note: state.note }),
    },
  ),
);
