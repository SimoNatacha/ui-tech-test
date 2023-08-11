import { Bars3Icon, TrashIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React from "react";
import { useMode } from "../ModeSwitch";
import { RemoveFn } from "./useFields";

function FieldWrapper({ children, className,  ...props }: React.HTMLAttributes<HTMLDivElement>, id: string, remove: RemoveFn) {
    const [mode] = useMode()
    const isEditable = mode == "edit"
    const handleRemoveField = () => {
        remove(id);
    }

    return (
        <div
            className={classNames("flex items-baseline gap-1", className)}
            {...props}
        >
            <button
                type="button"
                tabIndex={-1}
                className={classNames("cursor-grab", { "flex": isEditable, "hidden": !isEditable })}
            >
                {/** Drag icon */}
                <Bars3Icon className="w-5 h-5 text-gray-400" />
            </button>
            <button
                type="button"
                onClick={handleRemoveField}
                tabIndex={-1}
                className={classNames({ "flex": isEditable, "hidden": !isEditable })}
            >
                {/** Remove icon */}
                <TrashIcon className="w-5 h-5 text-gray-400" />
            </button>
            <div className="grow space-y-2">
                {children}
            </div>

        </div>
    )
}
export default FieldWrapper

