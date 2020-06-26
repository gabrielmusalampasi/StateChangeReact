import React, { useState, useEffect } from 'react';

function Test() {
    const [name, setName] = useState("john")
    const [age, setAge] = useState(0)

    useEffect(() => {
        document.title = `${name} est ${age > 17 ? "majeur" : "mineur"}`;
    })

    return (
        <div>
            <p>
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </p>
            <button onClick={(e) => setAge(age+1)}>
                Augmenter Age
            </button>
            <p>
                State: {name}, {age}
            </p>
        </div>
    )
}
 export default Test;