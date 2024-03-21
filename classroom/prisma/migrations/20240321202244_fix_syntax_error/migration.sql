/*
  Warnings:

  - You are about to drop the column `cancelledAt` on the `Enrollment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "cancelledAt",
ADD COLUMN     "canceledAt" TIMESTAMP(3);
