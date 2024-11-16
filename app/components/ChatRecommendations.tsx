import { Button, Flex } from '@mantine/core';

interface ChatRecommendationsProps {
  sendMessage: (message: string) => void;
  isHost: boolean;
}

export default function ChatRecommendations({
  sendMessage,
  isHost,
}: ChatRecommendationsProps) {
  return isHost ? (
    <Flex gap={8} wrap={'wrap'}>
      <Button
        variant="white"
        color="black"
        style={{ fontWeight: 400, fontSize: 12 }}
        onClick={() => sendMessage("I'll be there soon!")}
      >
        {"I'll be there soon!"}
      </Button>
      <Button
        variant="white"
        color="black"
        style={{ fontWeight: 400, fontSize: 12 }}
        onClick={() => sendMessage('Meet you on the second floor!')}
      >
        {'Meet you on the second floor!'}
      </Button>
    </Flex>
  ) : (
    <Flex gap={8} wrap={'wrap'}>
      <Button
        variant="white"
        color="black"
        style={{ fontWeight: 400, fontSize: 12 }}
        onClick={() => sendMessage("I'm here!")}
      >
        {"I'm here!"}
      </Button>
      <Button
        variant="white"
        color="black"
        style={{ fontWeight: 400, fontSize: 12 }}
        onClick={() => sendMessage("I'll meet you by the meeting room")}
      >
        {"I'll meet you by the meeting room"}
      </Button>
    </Flex>
  );
}
