import { defineStore } from 'pinia'
import type {QueryValue} from "ufo";

export const useDataStore = defineStore('data_store', {
    state: () => ({
        month: '2020-10' as string,
        day: 1 as number,
        hour: 12 as number,
        dbreturn: [] as QueryValue,
    }),
    getters: {
    },
    actions: {
    },
})