import { AddFn, Submit } from "./useFields";


function SubmitField(field: Submit, addField: AddFn) {
    const { id, text } = field;
    const handleAddField = () => {
        addField(field)
    }
    return (
        <button
            id={id}
            type="submit"
            onClick={handleAddField}
            className="rounded border border-gray-200 text-base font-medium px-3 py-2 enabled:hover:bg-gray-50"
        >
            {text}
        </button>
    )
}
export default SubmitField