import React from 'react'

interface ListProps {
  unsorted?: boolean
  listItems: ListItem[]
}

interface ListItem {
  text: string
  link?: string
  alt?: string
}

const List = ({ unsorted, listItems }: ListProps): JSX.Element => {
  return (
    <div>
      <h1>KARIM</h1>
    </div>
  )
}

export default List
