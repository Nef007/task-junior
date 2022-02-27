import React, {useEffect, useRef, useState} from "react";
import {MySelect} from "./component/mySelect";



function App({data}) {

    return (
        <div className="App">
            <MySelect data={data.map(item=>item.name)}/>
        </div>
    )
}

export default App;
