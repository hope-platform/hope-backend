/*
  Warnings:

  - You are about to drop the column `message` on the `BookingRequest` table. All the data in the column will be lost.
  - Added the required column `content` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookingRequest" DROP COLUMN "message";

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "file_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Specialist" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "photo_url" TEXT;

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
