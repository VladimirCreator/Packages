import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLetters = createAsyncThunk(
    "application/fetchLetters",
    async (payload, thunkAPI) => {
        const url = "http://a0830433.xsph.ru/";

        const formData = (() => {
            const formData = new FormData();
            for (const key in payload) {
                formData.append(key, payload[key]);
            }

            return formData;
        })();


        const init = {
            method: "POST",
            body: formData
        };

        try {
            const response = await fetch(url, init);
            const data = await response.json();

            return data.Messages;
        }
        catch (problem) {
            console.error(problem);
            return thunkAPI.rejectWithValue([]);
        }
    }
);

const applicationSlice = createSlice(
    {
        name: "application",

        initialState: {
            letters: [],
            trailingLetterId: 0
        },

        reducers: {
        },

        extraReducers: (builder) => {
            const fetchLettersFulfilled = (state, action) => {
                if (!Array.isArray(action.payload)) {
                    return;
                }
                //state.letters = state.letters.concat(action.payload);
                state.letters = state.letters.concat(action.payload.reduce((letters, message) => {
                    if (state.letters.findIndex(letter => message.id === letter.id) !== -1) {
                        return letters;
                    }
                    return letters.concat(message);
                }, []));
                state.trailingLetterId = state.letters.at(-1)?.id ?? 0;
            };
            const fetchLettersRejected = (state, action) => {
                // ...
            };

            builder
                .addCase(fetchLetters.fulfilled, fetchLettersFulfilled)
                .addCase(fetchLetters.rejected, fetchLettersRejected);
        }
    }
);

export default applicationSlice;
export const {  } = applicationSlice.actions;