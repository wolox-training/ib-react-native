import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import { BookData } from 'src/app/interfaces/book';
import styles from './styles';
import {BookProps} from 'src/app/interfaces/book';
import CustomButton from 'src/app/components/CustomButton';
import SecondaryButton from 'src/app/components/SecondaryButton';
import Spacer from 'src/app/components/Spacer';
import defaultImg from './assets/img_book1.png';
import {addRental, removeRental} from '../../../../../redux/Rentals/actions';
import { State } from 'src/app/interfaces/state';

function BookInfo({book}: BookProps) {
  const dispatch = useDispatch();
  const rentedBooks = useSelector((state: State) => state.rentals.books);

  const source = book.image ? {uri: book.image} : defaultImg;
  const founded = rentedBooks.filter((rentedBook: BookData) => rentedBook.title === book.title).length > 0;

  const handleRent = () => {
    if(founded){
      dispatch(removeRental(book));
    } else {
      dispatch(addRental(book));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={source} />
        <Spacer width={20} />
        <View style={styles.info}>
          <Text style={styles.textTitle}>{book.title}</Text>
          <Text style={styles.textAvailable}>Not available</Text>
          <Text style={styles.text}>{book.author}</Text>
          <Text style={styles.text}>{book.year}</Text>
          <Text style={styles.text}>{book.genre}</Text>
        </View>
      </View>
      <View style={styles.buttonsPanel}>
        <CustomButton title='ADD TO WISHLIST' />
        <Spacer height={10} />
        <TouchableHighlight onPress={handleRent}>
          <SecondaryButton rented={founded} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default BookInfo;
