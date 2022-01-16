const Tabs = () => {
  const today = new Date().getDate()
  const tomorrow = new Date().getDate() + 1
  return (
    <div>
      <p>{today}</p>
      <p>{tomorrow}</p>

      <div>
        <div>
          <div>
            <h3>Today</h3>
            <h5>Tomorrow</h5>
            <h5>12/11 Wed</h5>
            <h5>12/11 Fri</h5>
            <h5>Img</h5>
          </div>
          <div>
            <div>
              <select name="" id="">
                <option value="">Select your match</option>
              </select>
            </div>
            <div>
              <h5>Filter</h5>
            </div>
          </div>
        </div>

        <div>
          <div>
            <input type="search" name="" id="" />
          </div>
          <div>
            <h3>Wed 13 November</h3>
            <p>Goals</p>
          </div>
        </div>

        <div>
          <h3>Coming Soon!!!!</h3>
        </div>
      </div>
    </div>
  )
}

export default Tabs
