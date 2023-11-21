import { Box, Text } from '@chakra-ui/react';

type StudentProfileUpdateButtonProps = {
  onClick: () => void;
};

const StudentProfileUpdateButton = ({ onClick }: StudentProfileUpdateButtonProps) => {
  return (
    <Box
      onClick={onClick}
      display="flex"
      gap="8px"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom="40px"
      right="35px"
      cursor="pointer"
      backgroundColor="primary"
      borderRadius="45px"
      boxShadow="md"
      width="165px"
      height="60px"
    >
      <Text fontSize="20px" fontWeight="bold" color="white">
        내 프로필 수정
      </Text>
    </Box>
  );
};

export default StudentProfileUpdateButton;