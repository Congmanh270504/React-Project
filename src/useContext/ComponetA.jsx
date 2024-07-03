import React, { useState, createContext } from "react";
import ComponentB from "./ComponetB";
export const UserName = createContext(); // tạo 1 biến chứa context
function ComponentA() {
    const [user, setUser] = useState("Mạnh");
    return (
        <>
            <div className="box">
                ComponentA say: hello {user}
                {/*  trog cái value đó thích add bao nhiêu giá trị cx đc  */}
                {/* dưới đây là truyền như state á, user là data,setUser là cập nhật data  */}
                <UserName.Provider value={{ user, setUser }}>
                    <ComponentB />
                </UserName.Provider>
            </div>
        </>
    );
}
export default ComponentA;