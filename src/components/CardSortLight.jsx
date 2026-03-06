import React, { useState, useRef } from 'react'

const terms = [
  'Wedding cake',
  'Bride',
  'Groom',
  'Bride and Groom',
  'Well wishes',
  'Leaving the reception',
  'Partying',
  'Dancing',
  'Laughter',
  'Decorations',
  'Tables',
  'Venue',
  'People eating',
  'Diploma',
  'Grad gear',
  'Photo with mascot',
  'Photo with dean',
  'Photo with spouse',
  'Photo with brother/sister',
  'Photo',
  'Games',
  'Group photos',
  'Candid photos',
  'People laughing',
  'People crying',
  'Brothers and sisters',
  'Cousins',
  'Grandparents',
  'The whole family',
  'Activities',
  'Funny/goofy pictures',
  'Stories',
  'Family photos',
  'Negative comments',
  'Positive comments',
  'Short stories',
  'Memories',
  'Identity',
  'Share button',
  'View what a specific person shared',
  'View what everyone shared',
  'Event timeline',
  'Share with other sites',
  'View what you posted',
]

function createInitialCards() {
  const columnWidth = 260
  const rowHeight = 90
  const padding = 16

  return terms.map((label, index) => {
    const col = index % 3
    const row = Math.floor(index / 3)

    return {
      id: index,
      label,
      x: padding + col * columnWidth,
      y: padding + row * rowHeight,
    }
  })
}

export default function CardSortLight() {
  const [cards, setCards] = useState(createInitialCards)
  const [dragId, setDragId] = useState(null)
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })
  const boardRef = useRef(null)

  const handlePointerDown = (id, event) => {
    const cardElement = event.currentTarget
    const rect = cardElement.getBoundingClientRect()

    setDragId(id)
    setPointerOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })

    cardElement.setPointerCapture?.(event.pointerId)
  }

  const finishDrag = (event) => {
    if (dragId === null) return
    setDragId(null)
    event.currentTarget.releasePointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (dragId === null) return

    const boardRect = boardRef.current?.getBoundingClientRect()
    if (!boardRect) return

    const x = event.clientX - boardRect.left - pointerOffset.x
    const y = event.clientY - boardRect.top - pointerOffset.y

    setCards((prev) =>
      prev.map((card) => (card.id === dragId ? { ...card, x, y } : card)),
    )
  }

  return (
    <div className="cardsort-wrapper">
      <h2 className="cardsort-title">CARDSORT light</h2>
      <p className="cardsort-instructions">
        Drag the cards around the space below and group them however you like.
      </p>
      <div
        ref={boardRef}
        className="cardsort-board"
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerLeave={finishDrag}
      >
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            className={`cardsort-card ${dragId === card.id ? 'dragging' : ''}`}
            style={{ left: `${card.x}px`, top: `${card.y}px` }}
            onPointerDown={(event) => handlePointerDown(card.id, event)}
          >
            {card.label}
          </button>
        ))}
      </div>
    </div>
  )
}

