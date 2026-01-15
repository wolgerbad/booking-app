import { Room } from '@/db/schema';
import RoomItem from './room-item';

type PropTypes = {
  rooms: Room[];
};

export default function RoomList({ rooms }: PropTypes) {
  return (
    <div className="grid grid-cols-2 gap-16 mb-8">
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
}
