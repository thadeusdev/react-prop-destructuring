import React from 'react';

function EmojiButton(props) {
  // Destructuring
    const {emoji = "🐕", label} = props
    // const emoji = props.emoji
    // const label = props.label
  return (
    <button>
      <span role="img">{emoji}</span>
      {label}
    </button>
  )
}

export default EmojiButton