/*
  Warnings:

  - The required column `id` was added to the `Enrollment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Enrollment_courseId_key";

-- DropIndex
DROP INDEX "Enrollment_studentId_key";

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id");
