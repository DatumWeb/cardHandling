// Each quote has one subcategory per hierarchy so it appears in exactly one place per tab.
export const quotes = [
  { text: 'The only true wisdom is in knowing you know nothing.', topic: 'Learning', era: 'Greek', mood: 'Reflection' },
  { text: 'Life is what happens when you\'re busy making other plans.', topic: 'Life', era: '1900s', mood: 'Meaning' },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', topic: 'Time', era: 'Eastern', mood: 'Growth' },
  { text: 'In the middle of difficulty lies opportunity.', topic: 'Life', era: '1900s', mood: 'Hope' },
  { text: 'Nothing in life is to be feared; it is only to be understood.', topic: 'Science', era: '1800s', mood: 'Truth' },
  { text: 'The earth has music for those who listen.', topic: 'Beauty', era: 'Roman', mood: 'Curiosity' },
  { text: 'Change is the only constant in life.', topic: 'Change', era: 'Greek', mood: 'Reflection' },
  { text: 'Laughter is the best medicine.', topic: 'Humor', era: '2000s', mood: 'Humor' },
  { text: 'Courage is not the absence of fear but the triumph over it.', topic: 'Courage', era: 'Early 1900s', mood: 'Courage' },
  { text: 'No act of kindness, no matter how small, is ever wasted.', topic: 'Kindness', era: 'Greek', mood: 'Joy' },
  { text: 'The only way to do great work is to love what you do.', topic: 'Life', era: '2000s', mood: 'Growth' },
  { text: 'Be the change you wish to see in the world.', topic: 'Courage', era: 'Early 1900s', mood: 'Hope' },
]

// Two-level hierarchies for each tab: 3 top-level categories, each with subcategories.
export const byTopic = {
  Wisdom: ['Life', 'Learning', 'Time'],
  Nature: ['Science', 'Beauty', 'Change'],
  Human: ['Humor', 'Courage', 'Kindness'],
}

export const byEra = {
  Ancient: ['Greek', 'Roman', 'Eastern'],
  Modern: ['1800s', 'Early 1900s'],
  Contemporary: ['1900s', '2000s'],
}

export const byMood = {
  Inspiring: ['Hope', 'Courage', 'Growth'],
  Thoughtful: ['Reflection', 'Truth', 'Meaning'],
  Light: ['Humor', 'Joy', 'Curiosity'],
}
