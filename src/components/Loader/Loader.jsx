import React from 'react';
import { LoaderWraper, LoadText } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWraper>
      <Oval
        height={80}
        width={80}
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3f51b54a"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <LoadText>Loading...</LoadText>
    </LoaderWraper>
  );
};
