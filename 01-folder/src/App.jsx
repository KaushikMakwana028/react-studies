
const App = () => {
  return (
    // <div>
    //   <h1>Hello</h1>
    //   <h2>Hello</h2>
    // </div>
    // Fragments That Use to Contain more then one DIV because we Can't pass two return values at time.
    <> 
    <div id="parent1">
      <h1>Hello From Parent 1</h1>
      <h2>Hello</h2>
    </div>

    <div id="parent2">
      <h1>Hello From Parent 2</h1>
      <h2>Hello</h2>
    </div>
    </>
  )
}

export default App