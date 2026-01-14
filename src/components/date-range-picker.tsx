'use client';

import React, { type FC, useState, useEffect, useMemo, JSX } from 'react';
import { Calendar } from './ui/calendar';
import { differenceInDays } from 'date-fns';

export interface DateRangePickerProps {
  /** Click handler for applying the updates from DateRangePicker. */
  onUpdate?: (values: { range: DateRange; rangeCompare?: DateRange }) => void;
  /** Initial value for start date */
  initialDateFrom?: Date | string;
  /** Initial value for end date */
  initialDateTo?: Date | string;
  /** Room price per night */
  roomPrice?: number | string;
  bookedDates: {
    from: Date;
    to: Date;
  }[];
}

const getDateAdjustedForTimezone = (dateInput: Date | string): Date => {
  if (typeof dateInput === 'string') {
    // Split the date string to get year, month, and day parts
    const parts = dateInput.split('-').map((part) => parseInt(part, 10));
    // Create a new Date object using the local timezone
    // Note: Month is 0-indexed, so subtract 1 from the month part
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  // If dateInput is already a Date object, return it directly
  return dateInput;
};

interface DateRange {
  from: Date | undefined;
  to?: Date;
}

/** The DateRangePicker component allows a user to select a range of dates */
export const DateRangePicker: FC<DateRangePickerProps> & {
  filePath: string;
} = ({
  initialDateFrom,
  initialDateTo,
  onUpdate,
  roomPrice,
  bookedDates,
}): JSX.Element => {
  const initialFromDate = initialDateFrom
    ? getDateAdjustedForTimezone(initialDateFrom)
    : undefined;
  const initialToDate = initialDateTo
    ? getDateAdjustedForTimezone(initialDateTo)
    : undefined;

  const [range, setRange] = useState<DateRange>({
    from: initialFromDate,
    to: initialToDate,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 960 : false
  );

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth < 960);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Disable dates that would result in more than 4 days (3 nights)
  const disabledDates = useMemo(() => {
    return (date: Date) => {
      if (range.from) {
        // Disable dates before the selected start date
        // and dates more than 3 days after the start date (max 4 days = 3 nights)
        console.log('range.from', range.from);
        const daysDifference = differenceInDays(date, range.from);
        return daysDifference < 0 || daysDifference > 3;
      }
      return false;
    };
  }, [range.from]);

  // Calculate nights and total price
  const nights = useMemo(() => {
    if (range.from && range.to) {
      return differenceInDays(range.to, range.from);
    }
    return 0;
  }, [range.from, range.to]);

  const totalPrice = useMemo(() => {
    if (roomPrice && nights > 0) {
      const price =
        typeof roomPrice === 'string' ? parseFloat(roomPrice) : roomPrice;
      return price * nights;
    }
    return 0;
  }, [roomPrice, nights]);

  // Call onUpdate when range changes
  useEffect(() => {
    onUpdate?.({ range });
  }, [range, onUpdate]);

  return (
    <div className="w-full h-full border-l border-t border-b border-gray-800">
      <Calendar
        bookedDates={bookedDates}
        className="w-full px-8 py-4"
        mode="range"
        onSelect={(value: { from?: Date; to?: Date } | undefined) => {
          if (value?.from) {
            setRange({ from: value.from, to: value.to });
          }
        }}
        selected={range}
        disabled={disabledDates}
        numberOfMonths={isSmallScreen ? 1 : 2}
        defaultMonth={(() => {
          const base = range.from ?? initialFromDate ?? new Date();
          const month = new Date(base);
          month.setMonth(month.getMonth() - (isSmallScreen ? 0 : 1));
          return month;
        })()}
      />

      {/* Display price calculation */}
      {roomPrice && range.from && range.to && nights > 0 ? (
        <div className="p-4 border border-gray-800 bg-yellow-600 text-slate-800 font-semibold text-xl">
          <div className="flex justify-between items-center">
            <span className="">
              $
              {typeof roomPrice === 'string'
                ? parseFloat(roomPrice)
                : roomPrice}{' '}
              × {nights} night{nights !== 1 ? 's' : ''}
            </span>
            <span className="text-slate-800 text-2xl">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div className="p-4 border border-gray-800 text-slate-800 bg-yellow-600 font-semibold text-2xl">
          <div className="flex justify-between items-center">
            ${roomPrice} / Night
          </div>
        </div>
      )}
    </div>
  );
};

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.filePath =
  'libs/shared/ui-kit/src/lib/date-range-picker/date-range-picker.tsx';
