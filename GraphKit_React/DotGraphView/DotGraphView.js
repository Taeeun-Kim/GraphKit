import React from 'react'

const ColoredDot = ({ dotColor }) => {
    return <div style={{color: dotColor}}>O</div>;
}

const DotGraphView = ({ configuration }) => {
    const { defaultColor, dataSet, x, y } = configuration;
    const totalDots = x * y;
    
    let allEntries = [];
    for (const entry in dataSet) {
        
        let numberOfDots = dataSet[entry][0] * totalDots;
        
        let colorDots = [];
        for (let i = 0; i < numberOfDots; i++) {
            colorDots.push(dataSet[entry][1]);
        }
        allEntries = [...colorDots, ...allEntries]
    }
    
    let table = [];
    for (let i = 0; i < y; i++) {
        let tableCells = [];
        for (let i = 0; i < x; i++) {
            let color = defaultColor;
            if (allEntries.length != 0) {
                color = allEntries.pop();
            }
        
            tableCells.push(<td><ColoredDot dotColor={color}/></td>)
        }

        table.push(<tr>{tableCells}</tr>)
    }

    return (
        <table>
            {table}
        </table>
    )

}

export default DotGraphView;
