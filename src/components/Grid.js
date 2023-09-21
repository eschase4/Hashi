import React, { useState, useEffect } from "react";

const MakeGrid = () => {
    const [formState, setFormState] = useState({
        height: 0,
        width: 0
    })

    const handleHeightChange = (event) => {
        setFormState({
            ...formState,
            height: event.target.value
        })
    }

    const [grid, setGrid] = useState([])

    const handleWidthChange = (event) => {
        setFormState({
            ...formState,
            width: event.target.value
        })
    }

    useEffect(() => {
        const generateGrid = () => {
            const newGrid = [];
            for (let i = 0; i < formState.height; i++) {
                const row = [];
                for (let j = 0; j < formState.width; j++) {
                    row.push(i-j)
                }
                newGrid.push(row)
            }
            setGrid(newGrid)
        }
        generateGrid()
    }, [formState.height, formState.width]);

    return (
        <div>
            <div>
                Insert grid height
                <input
                    type='number'
                    value={formState.height}
                    onChange={handleHeightChange}
                />

                Insert grid width
                <input
                    type='number'
                    value={formState.width}
                    onChange={handleWidthChange}
                />

                <button
                    type='submit'
                    onClick={console.log(formState.height, formState.width)}>
                    Generate Grid
                </button>
            </div>
            <div>
                {grid.length > 0 && (
                    <div>
                        <h2>gird time baby</h2>
                        <table>
                            <tbody>
                                {grid.map((row, rIndex) => (
                                    <tr key={rIndex}>
                                        {row.map((cell, cIndex) => (
                                            <td key={cIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MakeGrid