'use client';

import { DateRangePicker } from './date-range-picker';
import { differenceInDays, format } from 'date-fns';
import { useBookingStore } from '@/store/booking';

export default function DateContainer({
  bookedDates,
}: {
  bookedDates: { from: Date; to: Date }[];
}) {
  const nights = useBookingStore((state) => state.nights);
  const setNights = useBookingStore((state) => state.setNights);
  const setStartDate = useBookingStore((state) => state.setStartDate);
  const setEndDate = useBookingStore((state) => state.setEndDate);

  const totalPrice = nights && nights * 500;

  console.log('totalPrice', totalPrice);
  return (
    <DateRangePicker
      bookedDates={bookedDates}
      onUpdate={(value) => {
        const from = value.range.from;
        const to = value.range.to;

        // console.log('from', from);
        // console.log('to', to);
        if (from && to && to !== from) {
          setNights(differenceInDays(to, from));
          setStartDate(format(from, 'yyyy-MM-dd'));
          setEndDate(format(to, 'yyyy-MM-dd'));
        }
      }}
      roomPrice={500}
    />
  );
}
