-- AlterTable
ALTER TABLE `customers` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'customer';

-- AlterTable
ALTER TABLE `drivers` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'driver';
