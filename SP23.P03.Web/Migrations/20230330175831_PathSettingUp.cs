using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class PathSettingUp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.DropTable(
                name: "TrainRoute");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.DropColumn(
                name: "Parking",
                table: "TrainStation");

            migrationBuilder.CreateTable(
                name: "TrainPath",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartingTrainStationId = table.Column<int>(type: "int", nullable: true),
                    EndingTrainStationId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainPath", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrainPath_TrainStation_EndingTrainStationId",
                        column: x => x.EndingTrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TrainPath_TrainStation_StartingTrainStationId",
                        column: x => x.StartingTrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainPath_EndingTrainStationId",
                table: "TrainPath",
                column: "EndingTrainStationId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainPath_StartingTrainStationId",
                table: "TrainPath",
                column: "StartingTrainStationId",
                unique: true,
                filter: "[StartingTrainStationId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainPath_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainPath",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainPath_TrainRouteId",
                table: "Train");

            migrationBuilder.DropTable(
                name: "TrainPath");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.AddColumn<string>(
                name: "Parking",
                table: "TrainStation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "TrainRoute",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EndingTrainStationId = table.Column<int>(type: "int", nullable: true),
                    StartingTrainStationId = table.Column<int>(type: "int", nullable: true),
                    ArrivalTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    DeperatureTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainRoute", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrainRoute_TrainStation_EndingTrainStationId",
                        column: x => x.EndingTrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TrainRoute_TrainStation_StartingTrainStationId",
                        column: x => x.StartingTrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                unique: true,
                filter: "[TrainRouteId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_EndingTrainStationId",
                table: "TrainRoute",
                column: "EndingTrainStationId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute",
                column: "StartingTrainStationId",
                unique: true,
                filter: "[StartingTrainStationId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id");
        }
    }
}
