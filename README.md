# 🌟 משחק האנגלית - Kids English Learning App 🌟

A fun, interactive web-based English vocabulary learning app for kids, designed for Hebrew-speaking children.

**🎮 [Play Now](https://yoad.github.io/kids_english/)**

## Features

### 👤 Multi-Profile Support
Two player profiles (Alon 🚀 and Romi 🦄), each with independent progress tracking, stars, and badges.

### 📚 Learning Mode
- **14 vocabulary categories**: Animals, Food, Colors, Numbers, Family, Body, Clothes, House, Transport, Nature, School, Furniture, Household, Alphabet
- **Flashcard interface** with emoji/image visuals, English word, and Hebrew translation
- **Text-to-speech** pronunciation using the Web Speech API
- **Auto-progress tracking** — words are marked as learned after viewing

### 🎮 Game Modes

| Game | Description | Unlock |
|------|-------------|--------|
| 🎯 Emoji Match | Match the correct emoji/image to the English word | Immediate |
| ✏️ First Letter | Identify the first letter of each word | 10 words learned |
| 🧠 Memory | Classic card-matching with emoji/word pairs | 15 words learned |

### 🏆 Progress & Rewards
- ⭐ Stars earned through learning and games
- 🏅 7 achievement badges (first word, 10 words, 30 words, first game, 5 games, perfect score, 50 stars)
- 📊 Overall progress bar tracking total vocabulary mastery

## Tech Stack

- **Pure HTML/CSS/JS** — single-file app, no build tools or dependencies
- **Web Speech API** for English pronunciation
- **localStorage** for persistent progress across sessions
- **Responsive design** optimized for tablets (iPad) and phones
- **Confetti.js** for celebratory animations

## Project Structure

```
├── index.html      # Main app (HTML + inline CSS + JS)
├── app.js          # Standalone JS copy of the app logic
├── styles.css      # Standalone CSS copy
├── images/         # Furniture category images
│   ├── table.png
│   ├── desk.png
│   ├── shelf.png
│   └── closet.png
└── README.md
```

## Vocabulary

The app includes **100+ words** across 14 categories, each with:
- English word
- Hebrew translation (עברית)
- Visual representation (emoji or image)

Some furniture items use real images instead of emojis for clearer visual identification (Table, Desk, Shelf, Closet).

## Running Locally

Simply open `index.html` in any modern browser. No server or build step required.

```bash
open index.html
```

## License

MIT
