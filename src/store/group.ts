import { create } from 'zustand';
import { IGroup } from '../schema';

export interface IGroupStore {
  groups: IGroup[];
  setGroups: (groups: IGroup[]) => void;
}

export const useGroupStore = create<IGroupStore>((set) => ({
  groups: [],
  setGroups: (groups) => set({ groups })
}));
