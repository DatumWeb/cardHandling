import React, { useState } from 'react'
import { quotes, byTopic, byEra, byMood } from './data/quotes'
import TabView from './components/TabView'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

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
        <h1>Quote Cards</h1>
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
      </header>
      <main>
        <TabView
          title={current.title}
          hierarchy={current.hierarchy}
          getQuoteKey={current.getQuoteKey}
          quotes={quotes}
        />
      </main>
    </div>
  )
}
