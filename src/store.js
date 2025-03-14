import { create } from "zustand";


export const useLyricStore = create((set)=>({
    activeLyric:null,
    setActiveLyric: (lyric)=>set({activeLyric:lyric})
}))