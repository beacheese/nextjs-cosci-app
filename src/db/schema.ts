import { mysqlTable, primaryKey, varchar, text, timestamp, int, decimal, mysqlEnum, unique, tinyint, boolean } from "drizzle-orm/mysql-core"
// import { sql } from "drizzle-orm"

export const user = mysqlTable("user", {
					id: varchar('id', { length: 36 }).primaryKey(),
					name: text('name').notNull(),
 email: varchar('email', { length: 255 }).notNull().unique(),
 emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
 image: text('image'),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
				});

export const session = mysqlTable("session", {
					id: varchar('id', { length: 36 }).primaryKey(),
					expiresAt: timestamp('expires_at').notNull(),
 token: varchar('token', { length: 255 }).notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' })
				});

export const account = mysqlTable("account", {
					id: varchar('id', { length: 36 }).primaryKey(),
					accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
				});

export const verification = mysqlTable("verification", {
					id: varchar('id', { length: 36 }).primaryKey(),
					identifier: text('identifier').notNull(),
 value: text('value').notNull(),
 expiresAt: timestamp('expires_at').notNull(),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date())
				});

// export const order = mysqlTable("order", {
// 	id: int().autoincrement().notNull(),
// 	userId: varchar("user_id", { length: 36 }).notNull().references(() => user.id),
// 	productId: int("product_id").notNull().references(() => product.id),
// 	price: decimal({ precision: 10, scale: 2 }).notNull(),
// 	qty: int({ unsigned: true }).notNull(),
// 	status: mysqlEnum(['pending','paid','delivered']),
// 	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`(now())`),
// },
// (table) => [
// 	primaryKey({ columns: [table.id], name: "order_id"}),
// ]);

// product
export const product = mysqlTable("product", {
	id: int().autoincrement().notNull(),
	title: varchar({ length: 255 }).notNull(),
	price: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "product_id"}),
]);
