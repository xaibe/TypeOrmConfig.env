import {MigrationInterface, QueryRunner} from "typeorm";

export class updateMiddleName1643179965211 implements MigrationInterface {
    name = 'updateMiddleName1643179965211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "MiddleName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "MiddleName"`);
    }

}
