import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1618679557328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'provider',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');
    }
}

/**
 * Migration
 *
 * Linha do tempo
 *
 * 1. Semana: Agendamentos
 * 2. Semana: Usuários
 * (novo dev) 3. Edição Agendamentos
 * 4. Semana: Compras - meu banco de dados está diferente do novo dev
 * Com a Migrations, ele é igual o git, mas com os bancos de dados, controlam alterações simultâneas
 */
