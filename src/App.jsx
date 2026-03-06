import React, { useState } from 'react'
import { quotes, byTopic, byEra, byMood } from './data/quotes'
import TabView from './components/TabView'
import CardSortLight from './components/CardSortLight'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [view, setView] = useState('quotes')

  const tabs = [
    {
      title: 'By Topic',
      hierarchy: byTopic,
      getQuoteKey: (q) => q.topic,
    },
    {
      title: 'By Era',
      hierarchy: byEra,
      getQuoteKey: (q) => q.era,
    },
    {
      title: 'By Mood',
      hierarchy: byMood,
      getQuoteKey: (q) => q.mood,
    },
  ]

  const current = tabs[activeTab]

  return (
    <div className="app">
      <header>
        <div className="app-header-top">
          <h1>Quote Cards</h1>
          <nav className="main-nav">
            <button
              className={`nav-link ${view === 'quotes' ? 'active' : ''}`}
              onClick={() => setView('quotes')}
            >
              Quotes
            </button>
            <button
              className={`nav-link ${view === 'cardsort' ? 'active' : ''}`}
              onClick={() => setView('cardsort')}
            >
              CARDSORT light
            </button>
          </nav>
        </div>
        {view === 'quotes' && (
          <nav className="tabs">
            {tabs.map((tab, i) => (
              <button
                key={tab.title}
                className={`tab ${i === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        )}
      </header>
      <main>
        {view === 'quotes' ? (
          <TabView
            title={current.title}
            hierarchy={current.hierarchy}
            getQuoteKey={current.getQuoteKey}
            quotes={quotes}
          />
        ) : (
          <CardSortLight />
        )}
      </main>
    </div>
  )
}
