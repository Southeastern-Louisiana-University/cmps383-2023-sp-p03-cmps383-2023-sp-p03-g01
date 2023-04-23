using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TicketRouteBased : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_TrainScheduledRoutes_ScheduledTrainRouteId",
                table: "TrainRouteTicket");

            migrationBuilder.RenameColumn(
                name: "ScheduledTrainRouteId",
                table: "TrainRouteTicket",
                newName: "TrainRouteId");

            migrationBuilder.RenameIndex(
                name: "IX_TrainRouteTicket_ScheduledTrainRouteId",
                table: "TrainRouteTicket",
                newName: "IX_TrainRouteTicket_TrainRouteId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_TrainRoute_TrainRouteId",
                table: "TrainRouteTicket",
                column: "TrainRouteId",
                principalTable: "TrainRoute",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_TrainRoute_TrainRouteId",
                table: "TrainRouteTicket");

            migrationBuilder.RenameColumn(
                name: "TrainRouteId",
                table: "TrainRouteTicket",
                newName: "ScheduledTrainRouteId");

            migrationBuilder.RenameIndex(
                name: "IX_TrainRouteTicket_TrainRouteId",
                table: "TrainRouteTicket",
                newName: "IX_TrainRouteTicket_ScheduledTrainRouteId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_TrainScheduledRoutes_ScheduledTrainRouteId",
                table: "TrainRouteTicket",
                column: "ScheduledTrainRouteId",
                principalTable: "TrainScheduledRoutes",
                principalColumn: "Id");
        }
    }
}
