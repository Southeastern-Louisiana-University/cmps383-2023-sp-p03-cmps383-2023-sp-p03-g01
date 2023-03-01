using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class trainRoute : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrainRoute",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArrivalTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    DeperatureTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    StartingTrainStationId = table.Column<int>(type: "int", nullable: false),
                    EndingTrainStationId = table.Column<int>(type: "int", nullable: false)
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
                name: "IX_TrainRoute_EndingTrainStationId",
                table: "TrainRoute",
                column: "EndingTrainStationId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_StartingTrainStationId",
                table: "TrainRoute",
                column: "StartingTrainStationId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrainRoute");
        }
    }
}
