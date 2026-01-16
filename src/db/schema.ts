import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  check,
  date,
  decimal,
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  hashed_password: varchar('hashed_password', { length: 255 }).notNull(),
  profile_image: text('profile_image'),
  national_id: varchar('national_id', { length: 48 }),
});

export const room = mysqlTable('room', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description').notNull(),
  capacity: int('capacity').notNull(),
  price: decimal('price', { precision: 5, scale: 2 }).notNull(),
  is_active: boolean('is_active').default(true),
  image: text('image').notNull(),
});

export type Room = typeof room.$inferSelect;

export const booking = mysqlTable(
  'booking',
  {
    id: int('id').autoincrement().primaryKey(),
    user_id: int('user_id')
      .notNull()
      .references(() => user.id),
    room_id: int('room_id')
      .notNull()
      .references(() => room.id),
    start_date: date('start_date', { mode: 'string' }).notNull(),
    end_date: date('end_date', { mode: 'string' }).notNull(),
    status: varchar('status', { length: 20 }).default('upcoming'),
    guest: int('guest').notNull(),
    additional_note: text('additional_note'),
    created_at: timestamp('created_at', { mode: 'string' })
      .notNull()
      .defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'string' })
      .notNull()
      .defaultNow(),
  },
  (table) => [check('date_check', sql`${table.end_date} > ${table.start_date}`)]
);

export type Booking = typeof booking.$inferSelect;

export const roomRelations = relations(room, ({ many }) => ({
  booking: many(booking),
}));

export const bookingRelations = relations(booking, ({ one }) => ({
  room: one(room, {
    fields: [booking.room_id],
    references: [room.id],
  }),
  user: one(user, {
    fields: [booking.id],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  booking: many(booking),
}));
