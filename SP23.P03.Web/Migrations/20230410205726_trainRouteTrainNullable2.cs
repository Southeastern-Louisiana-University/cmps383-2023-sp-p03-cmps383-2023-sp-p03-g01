using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class trainRouteTrainNullable2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train");

            migrationBuilder.AddForeignKey(
                name: "FK_Train_TrainRoute_TrainRouteId",
                table: "Train",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id");
        }
    }
}
