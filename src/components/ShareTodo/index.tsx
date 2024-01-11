import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';

interface ShareProps {
  link?: string;
}

export const SharePost = (props: ShareProps) => {
  const { link } = props;
  const handleOnPress = () => {
    const options = {
      message: link,
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text>Share</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    columnGap: 12,
    rowGap: 6,
  },
});
