using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class ManyRouteTrain : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.DropIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train");

            migrationBuilder.AddColumn<int>(
                name: "TrainId",
                table: "TrainRoute",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_TrainId",
                table: "TrainRoute",
                column: "TrainId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRoute_Train_TrainId",
                table: "TrainRoute",
                column: "TrainId",
                principalTable: "Train",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRoute_Train_TrainId",
                table: "TrainRoute");

            migrationBuilder.DropIndex(
                name: "IX_TrainRoute_TrainId",
                table: "TrainRoute");

            migrationBuilder.DropColumn(
                name: "TrainId",
                table: "TrainRoute");

            migrationBuilder.CreateIndex(
                name: "IX_Train_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                unique: true,
                filter: "[TrainRouteId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
