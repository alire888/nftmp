import styled from "styled-components";
import tw from "twin.macro";

export const FeatureBoxWrapper = styled.div`
    ${tw`w-full flex items-center mt-24 gap-20`}
`;

export const FeatureBoxItemWrapper = styled.div`
    ${tw`w-full flex flex-col items-center gap-4`}
`;

export const FeatureBoxIconWrapper = styled.div`
    ${tw`w-[38px] h-[33px]`}
`;

export const FeatureBoxTitle = styled.h5`
    ${tw`text-black dark:text-white font-semibold text-title1`}
`;

export const FeatureBoxDescription = styled.p`
    ${tw`text-title2 font-light text-center text-black dark:text-white`}
`;
