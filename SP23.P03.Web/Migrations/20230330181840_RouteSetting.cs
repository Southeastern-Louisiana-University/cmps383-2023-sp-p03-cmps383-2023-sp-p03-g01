using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class RouteSetting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainPath_TrainRouteId",
                table: "Train");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.CreateTable(
                name: "TrainRoute",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArrivalTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    DeperatureTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    PathId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainRoute", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrainRoute_TrainPath_PathId",
                        column: x => x.PathId,
                        principalTable: "TrainPath",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                unique: true,
                filter: "[TrainRouteId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_PathId",
                table: "TrainRoute",
                column: "PathId");

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
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.DropTable(
                name: "TrainRoute");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainPath_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainPath",
                principalColumn: "Id");
        }
    }
}
