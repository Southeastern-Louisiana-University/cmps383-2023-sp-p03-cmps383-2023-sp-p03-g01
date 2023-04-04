using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class trainPathUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_TrainPath_StartingTrainStationId",
                table: "TrainPath");

            migrationBuilder.CreateIndex(
                name: "IX_TrainPath_StartingTrainStationId",
                table: "TrainPath",
                column: "StartingTrainStationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_TrainPath_StartingTrainStationId",
                table: "TrainPath");

            migrationBuilder.CreateIndex(
                name: "IX_TrainPath_StartingTrainStationId",
                table: "TrainPath",
                column: "StartingTrainStationId",
                unique: true,
                filter: "[StartingTrainStationId] IS NOT NULL");
        }
    }
}
