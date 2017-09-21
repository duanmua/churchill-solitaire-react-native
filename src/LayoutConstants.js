import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CARD_HEIGHT = (SCREEN_WIDTH/10) * (3.5/2.5)
export const CARD_OFFSET = CARD_HEIGHT * (-7/9)
