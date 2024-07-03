import React, { useContext, useState } from 'react';
import { UserName } from './ComponetA'; // nhớ import từ thg cha về 
function ComponentD() {
    const { user, setUser } = useContext(UserName); // ở đây thì dùng useContext để lấy giá trị từ thg cha về
    // số biến ở đây sẽ tương ứng vs số biến truyền vào ở thg cha
    const [change, setChange] = useState(""); // tạo 1 cái biến giả lưu giá trị nhập vào 
    return (
        <div className="box">
            ComponentD say: bye {user}
            <br />
            <input type="text" onChange={(e) => {
                setChange(e.target.value);
            }} />
            <br />
            <button onClick={(e) => {
                e.preventDefault();
                // cập giá trị
                setUser(change);
                setUser(change);
            }}>Change Context</button>
        </div>
    )
}
export default ComponentD;