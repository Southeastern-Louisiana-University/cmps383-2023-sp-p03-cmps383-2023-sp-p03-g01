using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class nullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feature_Train_TrainId",
                table: "Feature");

            migrationBuilder.DropForeignKey(
                name: "FK_Seat_Section_SectionId",
                table: "Seat");

            migrationBuilder.DropForeignKey(
                name: "FK_Section_Train_TrainId",
                table: "Section");

            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.DropIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.AlterColumn<int>(
                name: "StartingTrainStationId",
                table: "TrainRoute",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "EndingTrainStationId",
                table: "TrainRoute",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "TrainRouteId",
                table: "Train",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "TrainId",
                table: "Section",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SectionId",
                table: "Seat",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "TrainId",
                table: "Feature",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute",
                column: "StartingTrainStationId",
                unique: true,
                filter: "[StartingTrainStationId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                unique: true,
                filter: "[TrainRouteId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Feature_Train_TrainId",
                table: "Feature",
                column: "TrainId",
                principalTable: "Train",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_Section_SectionId",
                table: "Seat",
                column: "SectionId",
                principalTable: "Section",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Train_TrainId",
                table: "Section",
                column: "TrainId",
                principalTable: "Train",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feature_Train_TrainId",
                table: "Feature");

            migrationBuilder.DropForeignKey(
                name: "FK_Seat_Section_SectionId",
                table: "Seat");

            migrationBuilder.DropForeignKey(
                name: "FK_Section_Train_TrainId",
                table: "Section");

            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.DropIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.AlterColumn<int>(
                name: "StartingTrainStationId",
                table: "TrainRoute",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EndingTrainStationId",
                table: "TrainRoute",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "TrainRouteId",
                table: "Train",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "TrainId",
                table: "Section",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SectionId",
                table: "Seat",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "TrainId",
                table: "Feature",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute",
                column: "StartingTrainStationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Feature_Train_TrainId",
                table: "Feature",
                column: "TrainId",
                principalTable: "Train",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Seat_Section_SectionId",
                table: "Seat",
                column: "SectionId",
                principalTable: "Section",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Section_Train_TrainId",
                table: "Section",
                column: "TrainId",
                principalTable: "Train",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
