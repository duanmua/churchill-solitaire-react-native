# Churchill Solitaire React Native

[Inspired by the app](http://churchillsolitaire.com)

This project was created because I wanted to become more familiar with React Native, and I find the existing Churchill Solitaire app UX to be frustrating.

### Implementation/Scratch Notes

10 lanes
Lane State:
  * Array of array of objects:
    {
      card,
      suit,
      color,
      shown,
      draggable
    }

On pan:
  * Animate drag
  * On pan stop, fire an action containing the ending points
    {
      type: cardmove,
      endX:,
      endY:,
      id:
    }
  * Reducer calculates which lane matches
  * Switch to appropriate lane if legal movement
    - Otherwise return to start
    - Use componentWillUpdate() {
            LayoutAnimation.spring();
          }
    - Update draggable property on other cards as appropriate
