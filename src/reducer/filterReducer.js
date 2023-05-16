function filterReducer(state, { type, payload }) {
    switch (type) {
        case "CLEAR":
            return {
                ...state,
                sortBy: "",
                category: [],
                rating: null,
                slider: 5000,
            }
        case "HIGH_TO_LOW":
            return { ...state, sortBy: "HIGH_TO_LOW" };
        case "LOW_TO_HIGH":
            return { ...state, sortBy: "LOW_TO_HIGH" };

        case "CATEGORY":
            //type: CATEGORY, payload: 'boots' or 'ball'...
            return {
                ...state,
                category: [
                    //if categoryArray includes payload, return categoryArray without payloadCategory
                    //else add the payloadCategory to the caregoryArray
                    ...state.category.includes(payload) ? [...state.category.filter(item => item !== payload)]
                        : [...state.category, payload]
                ]
            }
        case "RATING":
            //payload: rating - 4, or3, or2
            return {
                ...state,
                rating: payload,
            }

        case "SLIDER":
            //payload: e.target.value from FilterComponent
            return {
                ...state,
                slider: payload,
            }
        default:
            return state;
    }
}

export { filterReducer }