import { v4 } from "uuid"
import { create } from "zustand"

export type Submit = {
    type: "submit",
    text: string,
    id: string
    label?: never
    placeholder?: never
}
export type Input = {
    type: "text" | "date" | "number",
    text?: never,
    placeholder: string,
    id: string,
    label: string | null
}
export type Combobox = {
    type: "country",
    text?: never,
    id: string,
    label: string | null
    placeholder: string,
}
export type Field = Input | Submit | Combobox

export type UpdateFn = (field: Field, id: string) => void;
export type AddFn = (field: Field) => void;
export type RemoveFn = (id: string) => void;



const generateRandomUUID = () => {
    return v4() // this may be replaced with other uuid generators
}
const INIT_FIELDS: Field[] = [
    { type: "text", placeholder: "Name", label: null, id: generateRandomUUID() },
    { type: "number", placeholder: "Age", label: null, id: generateRandomUUID() },
    { type: "date", placeholder: "Date of Birth", label: null, id: generateRandomUUID() },
    { type: "country", placeholder: "Country", label: null, id: generateRandomUUID() },
    { type: "submit", text: "submit", id: generateRandomUUID() }
]

type FieldStore = {
    fields: Field[];
    updateField: UpdateFn;
    addField: AddFn;
    removeField: RemoveFn;
};

export const useFormStore = create<FieldStore>((set ) => ({
    fields: INIT_FIELDS,
    updateField: (field, id) =>
        set((state) => ({
        fields: state.fields.map((fieldItem) => (fieldItem.id === id ? field : fieldItem)),
        })),

        addField: (field) =>
        set((state) => ({
        fields: [...state.fields, field],
        })),

    removeField: (id) =>
        set((state) => ({
        fields: state.fields.filter((f) => f.id !== id),
        })),
    }));

/**
 * A hook for managing form fields 
 * TODO: complete this hook by wiring up the form store
 * @returns 
 */
function useFields() {

    const { fields, updateField, addField, removeField } = useFormStore();

    return { fields, updateField, addField, removeField };
}

export default useFields;