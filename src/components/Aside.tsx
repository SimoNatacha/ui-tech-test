import { createPortal } from "react-dom"

function Aside({ children }: { children?: React.ReactNode }) {
    const formContainer = document.getElementById("form-container");

    return (
        <aside
            className="h-full border-l border-gray-200 w-1/6 px-4 py-10"
        >
            <h3 className="text-lg border-b border-gray-100">Properties</h3>
            <div className="mt-2" />
            {children}
            {formContainer && createPortal(<div id="form-container">{children}</div>, formContainer)}

        </aside>
    )
}


export default Aside