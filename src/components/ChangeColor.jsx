
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Change } from '../features/theme'

function ChangeColor() {
    const [color, setColor] = useState('black');
    const dispatch = useDispatch()

    return (
        <div>
            <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <button onClick={() => {
                alert(`Color changed to ${color}`)
                return dispatch(Change({ value: color ,isColorChanged: true}))
            }
            }
            >Change Color</button>
        </div>
    )
}

export default ChangeColor
