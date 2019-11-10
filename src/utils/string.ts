import { Platform } from 'react-native';

export const toLocaleString = (value: string | number | Date) => {
  if (value instanceof Date) {
    return `${value.getFullYear()}. ${value.getMonth() + 1}. ${value.getDate()}.`;
  } else {
    if (Platform.OS === 'ios') {
      return value.toLocaleString();
    } else {
      const numbers = value.toString().split('.');
      numbers[0] = numbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (numbers[2] !== undefined) return [numbers[0], numbers[1]].join('.');
      else return numbers.join('.');
    }
  }
};
