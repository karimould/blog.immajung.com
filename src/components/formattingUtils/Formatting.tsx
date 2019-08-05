import React, { ReactElement } from 'react'

interface TitleDateProps {
  title: string
  date: string
}

export const FormattedTitleDate = ({ title, date }: TitleDateProps): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <span className="truncate">{title}</span>
      <FormattedDate date={date} />
    </div>
  )
}

export const FormattedDate = ({ date }: { date: string }): ReactElement => {
  const formattedDate = date.substring(0, 16).replace('T', ' at ')
  return <span className="text-sm uppercase text-gray-600">uploaded on {formattedDate}</span>
}
