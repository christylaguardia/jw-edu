import React from "react"

export default class IndexPage extends React.Component {
  state = {
    search: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Searching "${this.state.search}"...`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search
          <input
            class="input is-rounded"
            type="text"
            name="search"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
