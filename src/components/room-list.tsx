import { Room } from '@/db/schema';
import RoomItem from './room-item';

type PropTypes = {
  rooms: Room[];
};

export default function RoomList({ rooms }: PropTypes) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-8">
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
}
