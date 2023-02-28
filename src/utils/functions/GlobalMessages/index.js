import {showMessage} from 'react-native-flash-message';
import {colors} from '../../../constants/colors';

const succsessMessage = (message, title = 'Başarılı') => {
  showMessage({
    message: title,
    description: message,
    backgroundColor: colors.blue,
    animated: true,
    animationDuration: 1000,
  });
};
const errorMessage = (message, title = 'Hata') => {
  showMessage({
    message: title,
    description: message,
    backgroundColor: colors.red,
    animated: true,
    animationDuration: 1000,
  });
};

export {succsessMessage, errorMessage};
