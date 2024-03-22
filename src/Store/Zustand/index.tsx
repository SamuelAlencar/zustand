import create from "zustand";

import { persist } from "zustand/middleware";

type User = {
  email: string;
  fullName: string;
  score: number;
};

interface IUserContext {
  user: User;
  updateUser: (updatedData: Partial<User>) => void;
}

export const useStore = create<IUserContext, [["zustand/persist", IUserContext]]>(
    persist(
        (set) => ({
            user: {
              fullName: "",
              email: "",
              score: 0,
            },
            updateUser: (newUserData) => {
              set((state) => {
                return {
                  ...state,
                  user: {
                    ...state.user,
                    ...newUserData,
                  },
                };
              });
            },
          }),
          {
            name: 'user-store-persist',
            getStorage:() => window.sessionStorage,
        }
          
    )
)
