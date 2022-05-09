-- CreateTable
CREATE TABLE "commander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mainstack" VARCHAR(255) NOT NULL,
    "inscription" BOOLEAN NOT NULL DEFAULT false,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "commander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "commander_name_key" ON "commander"("name");
