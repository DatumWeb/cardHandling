import React, { useState } from 'react'
import QuoteCard from './QuoteCard'

export default function TabView({ title, hierarchy, getQuoteKey, quotes }) {
  const topLevelKeys = Object.keys(hierarchy)
  const [openKeys, setOpenKeys] = useState(() => new Set([topLevelKeys[0]]))

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="tab-view">
      <h2 className="tab-title">{title}</h2>
      {Object.entries(hierarchy).map(([topLevel, subcategories]) => {
        const isOpen = openKeys.has(topLevel)
        return (
          <section key={topLevel} className={`accordion top-level ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="accordion-header"
              onClick={() => toggle(topLevel)}
              aria-expanded={isOpen}
            >
              <span>{topLevel}</span>
              <span className="accordion-icon" aria-hidden>{isOpen ? '▼' : '▶'}</span>
            </button>
            <div className="accordion-content">
              {subcategories.map((sub) => {
                const items = quotes.filter((q) => getQuoteKey(q) === sub)
                return (
                  <div key={sub} className="subcategory">
                    <h4 className="subcategory-title">{sub}</h4>
                    <div className="cards">
                      {items.map((q, i) => (
                        <QuoteCard key={i} quote={q} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
