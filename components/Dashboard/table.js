import usePagination from "./usePagination"
import moment from "moment"
import { useState } from "react"

const Dashboard = ({ data, itemsPerPage = 4, startFrom = 1 }) => {
  const [search, setSearch] = useState("")
  const [searchFor, setSearchFor] = useState("")
  //sort
  const [sortByKey, setSortByKey] = useState("title")
  const [order, setOrder] = useState("asc")
  const columns = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Slug", sortKey: "slug" },
    { label: "Story", sortKey: "story" },
    { label: "Visible", sortKey: "visible" },
    { label: "Update", sortKey: "update" }
  ]

  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
    filteredData
  } = usePagination({ itemsPerPage, data, startFrom })

  const submitHandler = e => {
    e.preventDefault()
    if (search.trim() !== "") {
      setSearching(true)
      const copiedData = [...data]
      const filtered = copiedData.filter(chap => {
        let searchKey = "title"
        return chap[searchKey]
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      })
      const copyOfFilteredData = [...filtered]
      const sortFiltered = sortData(copyOfFilteredData, sortByKey, order)
      setFilteredData(sortFiltered)
    } else {
      const sortFiltered = sortData(data, sortByKey, order)
      setFilteredData(sortFiltered)
    }
    setSearchFor(search)
  }

  const sortData = (dataToSort, sortBy, orderBy) => {
    const filtered = dataToSort.sort((a, b) => {
      if (orderBy === "asc") {
        if (a[sortBy] < b[sortBy]) {
          return -1
        } else if (a[sortBy] > b[sortBy]) {
          return 1
        } else {
          return 0
        }
      } else {
        if (b[sortBy] < a[sortBy]) {
          return -1
        } else if (b[sortBy] > a[sortBy]) {
          return 1
        } else {
          return 0
        }
      }
    })
    return filtered
  }

  const sortHandler = (sortBy, orderBy) => {
    if (sortByKey !== sortBy) {
      setSortByKey(sortBy)
    }
    if (order !== orderBy) {
      setOrder(orderBy)
    }

    const copyOfFilteredData = [...filteredData]
    const filtered = sortData(copyOfFilteredData, sortBy, orderBy)
    setFilteredData(filtered)
  }

  return (
    <div className="wrapper">
      <h1>Dashboard {data.length}</h1>
      <form
        onSubmit={submitHandler}
        className="mt-3 mb-3 is-flex"
        style={{ justifyContent: "center" }}
      >
        <div className="field mr-2">
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="button is-link">
          Search
        </button>
      </form>
      {searchFor && (
        <h2 className="mb-6 has-text-centered is-size-2">
          Search results for: "{searchFor}"
        </h2>
      )}
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            {/* <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Story</th>
            <th>Visible</th>
            <th>Update</th> */}
            {columns.map((col, index) => (
              <th
                key={index}
                onClick={() =>
                  sortHandler(
                    col.sortKey,
                    sortByKey === col.sortKey
                      ? order === "asc"
                        ? "desc"
                        : "asc"
                      : "asc"
                  )
                }
              >
                {col.label}
                {sortByKey === col.sortKey && (
                  <span className="icon">
                    {order === "asc" ? (
                      <i className="fas fa-sort-up"></i>
                    ) : (
                      <i className="fas fa-sort-down"></i>
                    )}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slicedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.slug}</td>
              <td>{item.story}</td>
              <td>{item.visible}</td>
              <td>{moment(item.updatedAt).format("DD MMM YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="pagination">
        <a href="/#" className="pagination-previous" onClick={prevPage}>
          Previous
        </a>
        <a href="/#" className="pagination-next" onClick={nextPage}>
          Next page
        </a>
        <ul className="pagination-list">
          {pagination.map(page => {
            if (!page.ellipsis) {
              return (
                <li key={page.id}>
                  <a
                    href="/#"
                    className={
                      page.current
                        ? "pagination-link is-current"
                        : "pagination-link"
                    }
                    onClick={e => changePage(page.id, e)}
                  >
                    {page.id}
                  </a>
                </li>
              )
            } else {
              return (
                <li key={page.id}>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </div>
  )
}
export default Dashboard
