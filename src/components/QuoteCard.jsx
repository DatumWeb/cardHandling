import React from 'react'

export default function QuoteCard({ quote }) {
  return (
    <div className="card">
      <p className="card-text">"{quote.text}"</p>
    </div>
  )
}
