import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { pets } from "../utils/petDataStub";

// Correctly applying middleware with the create function
export const useStore = create(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: true,
        loading: false,
        pets: [],
        pet: null,
        cart: [],
        profile: null,
        address: [],
        billing: [],

        // A promise-based asynchronous function that loads the pets data
        fetchPetsData: () => {
          set({loading: true})
          return new Promise((resolve) => {
            // Simulate a delay to mimic asynchronous data fetching
            setTimeout(() => {
              resolve(pets); // Resolve the promise with the pets data
              set({loading: false})
              set({pets: pets})
            }, 5000); // Adjust the delay as needed
          });
        },

        fetchPetData: (petDetails) => {
          set({loading: true})

          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(petDetails)
              set({pet: petDetails})
              set({loading: false })
            }, 5000)
          })
        }
      }),
      {
        name: "pet-me-storage", // Unique name for persisting the store
        getStorage: () => window.localStorage, // Correctly use getStorage to provide localStorage
      }
    )
  )
);
