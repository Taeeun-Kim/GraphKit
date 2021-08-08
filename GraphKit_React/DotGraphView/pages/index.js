import DotGraphView from "../DotGraphView" 

const testData = {
  x: 50,
  y: 20,
  defaultColor: 'black',
  dataSet: [
    [0.2, 'green'],
    [0.4, 'red'],
    [0.33, 'purple']
  ]
}

const HomePage= () => {
    return (
      <>
        <DotGraphView configuration={testData} />
      </>
    )
  }
  
export default HomePage
