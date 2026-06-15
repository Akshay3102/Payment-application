import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,

    register: (data) =>
        set({
            user: data,
        }),
}));

export default useAuthStore;