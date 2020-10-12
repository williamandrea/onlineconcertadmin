import { useMemo, useState } from 'react'

const useSearch = (propertyFilter) => {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const bindText = {
    value: text,
    onChange: (e) => setText(e.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  const filteredData = list.filter((item) => {
    let valid = false
    for (let key in propertyFilter) {
      if (item[propertyFilter[key]].toLowerCase().includes(search.toLowerCase())) {
        valid = true
        break
      }
    }
    return valid
  })

  const memoFilteredData = useMemo(() => filteredData, [search, list])

  return [text, bindText, search, handleSearch, list, setList, memoFilteredData]

}

export default useSearch