import React, { Component } from "react"

class Search extends Component {
  state = {
    resource: "books",
    keyword: "",
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
    alert(`${this.state.resource}?keyword="${this.state.keyword}"`)
  }

  render() {
    const { resource, keyword } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <p className="control">
            <span className="select is-rounded">
              <select
                name="resource"
                value={resource}
                onChange={this.handleInputChange}
              >
                <option value="books">Books</option>
                <option value="websites">Websites</option>
                <option value="authors">Authors</option>
              </select>
            </span>
          </p>
          <div className="control is-expanded">
            <input
              className="input is-rounded"
              name="keyword"
              type="text"
              placeholder="Find a resource"
              value={keyword}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="control">
            <button
              className="button is-primary is-rounded"
              type="submit"
              disabled={!resource || !keyword}
            >
              Search
            </button>
          </div>
        </div>

        {/* <label>
          Search the resources
          <input
            className="input is-rounded"
            type="text"
            name="search"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="button is-primary is-rounded" type="submit">Submit</button> */}
      </form>
    )
  }
}

export default Search
