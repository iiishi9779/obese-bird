CREATE DATABASE `my_schema`;
--> statement-breakpoint
CREATE TABLE `my_schema`.`users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
