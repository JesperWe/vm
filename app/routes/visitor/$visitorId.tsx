import { createFileRoute } from '@tanstack/react-router';
import ChatSection from '../../components/ChatSection';
import { Message } from '../../types/chatTypes';
import { gql, useQuery } from 'urql';

const messagesQuery = gql`
  query Chat_messages {
    chat_messages {
      from_user_id
      id
      message
      visit_id
    }
  }
`;

const mockChatData: Message[] = [
  {
    from_user_id: '1',
    id: 1,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 2,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 3,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 4,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 5,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 6,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 7,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 8,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 9,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 10,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
];

export const Route = createFileRoute('/visitor/$visitorId')({
  component: RouteComponent,
});

function RouteComponent() {
  const [result] = useQuery({
    query: messagesQuery,
  });
  const { data, fetching, error } = result;
  console.log(data);

  return (
      <ChatSection messages={mockChatData} />
  );
}
