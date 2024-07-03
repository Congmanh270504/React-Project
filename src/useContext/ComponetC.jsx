import React from "react";
import ComponentD from "./ComponetD";
function ComponentC(parameters) {
    return (
        <>
            <div className="box">
                ComponentC
                <ComponentD />
            </div>
        </>
    );
}
export default ComponentC;