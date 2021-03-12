import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import {InputStyle} from './Comment.styles';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <InputStyle ref={inputRef} {...props} />;
});

export default Input;