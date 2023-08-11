import { useRef, useState } from "react";
import { useMode } from "../ModeSwitch";
import { Field, Input } from "./useFields";
import { createPortal } from "react-dom";
type InputFieldProps = Input & {
    update?: (data: Partial<Field>) => void
}
function InputField({ id, type, placeholder }: InputFieldProps) {
    const [mode] = useMode()
    const [focus, setfocus] = useState(false)

    const inputRef = useRef(null);
    const formContainer = document.getElementById("form-container");

    return (
        <div>
            <input
                ref={inputRef}
                id={id}
                name={id}
                readOnly={mode == "edit"}
                type={type}
                onFocus={() => setfocus(true)}
                placeholder={placeholder}
                className={"rounded border w-full border-gray-200 text-base font-medium px-3 py-2 placeholder:font-normal"}
            />
            {focus ? formContainer && createPortal(<div className="mt-5" >
                <label htmlFor="">PlaceHolder</label>
                <input
                    placeholder={placeholder}

                    className={"rounded border w-full border-gray-200 text-base font-medium px-3 py-2 placeholder:font-normal"}
                />
                <label htmlFor="">Type</label>
                <input
                    placeholder={type}

                    className={"rounded border w-full border-gray-200 text-base font-medium px-3 py-2 placeholder:font-normal"}
                />
                <button className="rounded border border-gray-200 text-base mt-4 font-medium px-3 py-2 enabled:hover:bg-gray-50"
                    onClick={() => setfocus(false)}>Submit</button>
            </div>, formContainer) : <div></div>}
        </div>

    )
}
export default InputField