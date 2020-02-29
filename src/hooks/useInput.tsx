import React, { useState } from 'react';

const useInput = (initValue?: string) => {
  const [value, setValue] = useState(initValue ?? '');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return [value, { value, onChangeText }];
};

export default useInput;
