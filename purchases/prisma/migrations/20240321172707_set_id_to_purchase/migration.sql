/*
  Warnings:

  - The required column `id` was added to the `Purchase` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id");
