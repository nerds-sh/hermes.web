import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

const findFilter = (type, index) => (filter, filterIndex) => filterIndex === index ? { type } : filter

const addFilterType = (type, index) => filters => filters.map(findFilter(type, index))

const removeFromList = type => filters => filters.filter(item => item !== type)

export const useHandleSelect = (type, index) => {
  const { setFilters, setFilterVariants } = useContext()

  return useCallback(() => {
    setFilterVariants(removeFromList(type))
    setFilters(addFilterType(type, index))
  }, [setFilters, setFilterVariants, index, type])
}
