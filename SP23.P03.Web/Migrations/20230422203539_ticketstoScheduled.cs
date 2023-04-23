using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class ticketstoScheduled : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TrainScheduledRoutesId",
                table: "TrainRouteTicket",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRouteTicket_TrainScheduledRoutesId",
                table: "TrainRouteTicket",
                column: "TrainScheduledRoutesId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_TrainScheduledRoutes_TrainScheduledRoutesId",
                table: "TrainRouteTicket",
                column: "TrainScheduledRoutesId",
                principalTable: "TrainScheduledRoutes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_TrainScheduledRoutes_TrainScheduledRoutesId",
                table: "TrainRouteTicket");

            migrationBuilder.DropIndex(
                name: "IX_TrainRouteTicket_TrainScheduledRoutesId",
                table: "TrainRouteTicket");

            migrationBuilder.DropColumn(
                name: "TrainScheduledRoutesId",
                table: "TrainRouteTicket");
        }
    }
}
