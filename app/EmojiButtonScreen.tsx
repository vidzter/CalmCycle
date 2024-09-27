// EmojiButtonScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Expanded list of fun and diverse emojis
const emojis = [
  // Animals
  '🦦', // Otter
  '🐊', // Alligator
  '🦁', // Lion
  '🐼', // Panda
  '🦄', // Unicorn
  '🐧', // Penguin
  '🐵', // Monkey Face
  '🐸', // Frog
  '🦋', // Butterfly
  '🐢', // Turtle

  // People & Activities
  '💃', // Dancer (Dancing Woman)
  '🕺', // Man Dancing
  '🤸‍♀️', // Woman Cartwheeling
  '🧗‍♂️', // Man Climbing
  '🤹‍♂️', // Man Juggling
  '🏄‍♀️', // Woman Surfing
  '🕴️', // Man in Suit Levitating
  '👯‍♀️', // Women with Bunny Ears
  '🧘‍♀️', // Woman in Lotus Position
  '🤽‍♂️', // Man Playing Water Polo

  // Emotions & Expressions
  '😹', // Cat with Tears of Joy
  '🤪', // Zany Face
  '🥳', // Partying Face
  '😎', // Smiling Face with Sunglasses
  '🤩', // Star-Struck
  '😺', // Smiling Cat Face with Open Mouth
  '😸', // Grinning Cat Face with Smiling Eyes
  '😸', // Grinning Face with Smiling Eyes
  '🤔', // Thinking Face
  '😇', // Smiling Face with Halo

  // Miscellaneous Fun
  '🌈', // Rainbow
  '🎉', // Party Popper
  '🎈', // Balloon
  '🎮', // Video Game
  '🛸', // Flying Saucer
  '🚀', // Rocket
  '🌟', // Glowing Star
  '💥', // Collision
  '🔮', // Crystal Ball
  '🎨', // Artist Palette
];

export default function EmojiButtonScreen() {
  const [currentEmoji, setCurrentEmoji] = useState<string | null>(null);

  const handlePress = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const selectedEmoji = emojis[randomIndex];
    setCurrentEmoji(selectedEmoji);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Random Emoji" onPress={handlePress} />

      {currentEmoji && <Text style={styles.emoji}>{currentEmoji}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1', // Light pink background to match your theme
    padding: 20,
  },
  emoji: {
    fontSize: 60, // Increased size for better visibility
    marginTop: 30,
  },
});
