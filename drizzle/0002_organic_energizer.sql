DROP TABLE "next-gallery_account";--> statement-breakpoint
DROP TABLE "next-gallery_post";--> statement-breakpoint
DROP TABLE "next-gallery_session";--> statement-breakpoint
DROP TABLE "next-gallery_verificationToken";--> statement-breakpoint
ALTER TABLE "next-gallery_user" ALTER COLUMN "password" SET NOT NULL;